import React, { useState } from 'react';

import Highcharts from 'highcharts';
import { ScrollView, View } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

import { Chart } from '@base-components';
import { ArtigoJornal, Pessoa, PoliticaPublica } from '@domain';
import { useTheme } from '@utils';
import * as artigosjornal from '@utils/data/artigosjornal';
import * as exposicoes from '@utils/data/exposicoes';
import * as politicapublicas from '@utils/data/politicapublica';
import Exposicao from 'src/domain/exposicao';

type TipoCapital = 'CC' | 'CS' | 'CE';

type Dependencia = {
    pessoa1?: string;
    pessoa2?: string;
    associacoes: {
        tipoAssociacao: string;
        capitais: TipoCapital[];
    }[];
};

const CC = 2,
    CS = 1,
    CE = 1;

function coverterData(data: string): Date {
    if (data.split('/').length === 3) {
        return new Date(`${data.split('/')[2]}-${data.split('/')[1]}-${data.split('/')[0]}`);
    } else if (data.split('/').length === 2) {
        return new Date(`${data.split('/')[1]}-${data.split('/')[0]}-01`);
    } else {
        return new Date(`${data.split('/')[0]}-01-01`);
    }
}

function before(data1: string, data2: string): boolean {
    const data1Convertida = coverterData(data1);
    const data2Convertida = coverterData(data2);

    return data1Convertida <= data2Convertida;
}

function calcularPesoCapital(capital: TipoCapital): number {
    switch (capital) {
        case 'CC':
            return CC;
        case 'CS':
            return CS;
        case 'CE':
            return CE;
        default:
            return 0;
    }
}

function calcularPesoCapitais(capitais: TipoCapital[]): number {
    return capitais.reduce<number>((total, capital) => (total = total + calcularPesoCapital(capital)), 0);
}

function calcularPesoAssociacoes(associacoes: { tipoAssociacao: string; capitais: TipoCapital[] }[]): number {
    return associacoes.reduce<number>((total, associacao) => (total = total + calcularPesoCapitais(associacao.capitais)), 0);
}

function compararNoData(o1: Dependencia, o2: Dependencia): boolean {
    return (o1.pessoa1 === o2.pessoa1 && o1.pessoa2 === o2.pessoa2) || (o1.pessoa1 === o2.pessoa2 && o1.pessoa2 === o2.pessoa1);
}

function adicionarDependencia(dependencias: Dependencia[], novaDependencia: Dependencia): void {
    const dependencia = dependencias.find((dependencia) => compararNoData(dependencia, novaDependencia));
    if (dependencia) {
        Array.prototype.push.apply(dependencia.associacoes, novaDependencia.associacoes);
    } else {
        dependencias.push({ ...novaDependencia, associacoes: novaDependencia.associacoes });
    }
}

function adicionarEnvolvido(envolvidos: Pessoa[], novoEnvolvido: Pessoa): void {
    const envolvido = envolvidos.find((envolvido) => envolvido.Nome === novoEnvolvido.Nome);
    if (!envolvido) {
        envolvidos.push(novoEnvolvido);
    }
}

function adicionarCoordenadores(politicaPublica: PoliticaPublica, dependencias: Dependencia[], envolvidos: Pessoa[]): void {
    politicaPublica.Coordenadores?.forEach((coordenador) => {
        adicionarEnvolvido(envolvidos, coordenador);

        politicaPublica.Idealizadores?.forEach((idealizador) => {
            if (coordenador.Nome !== idealizador.Nome) {
                adicionarEnvolvido(envolvidos, idealizador);

                adicionarDependencia(dependencias, {
                    pessoa1: coordenador.Nome,
                    pessoa2: idealizador.Nome,
                    associacoes: [{ tipoAssociacao: 'coordenador-idealizador', capitais: ['CS'] }],
                });
            }
        });

        politicaPublica.ComissaoDeSelecao?.forEach((seletor) => {
            if (coordenador.Nome !== seletor.Nome) {
                adicionarEnvolvido(envolvidos, seletor);

                adicionarDependencia(dependencias, {
                    pessoa1: coordenador.Nome,
                    pessoa2: seletor.Nome,
                    associacoes: [{ tipoAssociacao: 'coordenador-seletor', capitais: ['CS'] }],
                });
            }
        });

        politicaPublica.Obras?.forEach((obra) => {
            obra.Autores?.forEach((autor) => {
                if (coordenador.Nome !== autor.Pessoa?.Nome) {
                    adicionarEnvolvido(envolvidos, autor);

                    /*adicionarDependencia(dependencias, {
                    pessoa1: coordenador.Nome,
                    pessoa2: autor.Pessoa?.Nome,
                    associacoes: [{ tipoAssociacao: 'coordenador-artista', capitais: ['CC'] }],
                });*/
                }
            });
        });
    });
}

function adicionarIdealizadores(politicaPublica: PoliticaPublica, dependencias: Dependencia[], envolvidos: Pessoa[]): void {
    politicaPublica.Idealizadores?.forEach((idealizador) => {
        adicionarEnvolvido(envolvidos, idealizador);

        politicaPublica.ComissaoDeSelecao?.forEach((seletor) => {
            if (idealizador.Nome !== seletor.Nome) {
                adicionarEnvolvido(envolvidos, seletor);

                adicionarDependencia(dependencias, {
                    pessoa1: idealizador.Nome,
                    pessoa2: seletor.Nome,
                    associacoes: [{ tipoAssociacao: 'idealizador-seletor', capitais: ['CS'] }],
                });
            }
        });
    });
}

function adicionarArtigosJornais(politicaPublica: PoliticaPublica, dependencias: Dependencia[], envolvidos: Pessoa[]): void {
    const typed_artigosjornal: Record<string, ArtigoJornal> = artigosjornal;

    Object.keys(typed_artigosjornal).forEach((key) => {
        const artigo = typed_artigosjornal[key];

        if (
            politicaPublica.ProjetoInicio &&
            artigo.Data &&
            politicaPublica.ProjetoInicio !== '' &&
            artigo.Data !== '' &&
            before(artigo.Data, politicaPublica.ProjetoInicio) &&
            artigo.Autores?.find((autor) => envolvidos.includes(autor))
        ) {
            artigo.Autores?.forEach((autor) => {
                artigo.Autores?.forEach((autor2) => {
                    if (autor.Nome !== autor2.Nome) {
                        adicionarDependencia(dependencias, {
                            pessoa1: autor.Nome,
                            pessoa2: autor2.Nome,
                            associacoes: [
                                {
                                    tipoAssociacao: 'autorArtigoJornal-autorArtigoJornal',
                                    capitais: [
                                        'CS',
                                        'CC',
                                    ],
                                },
                            ],
                        });
                    }
                });
            });
        }
    });
}

function adicionarEsposicoes(politicaPublica: PoliticaPublica, dependencias: Dependencia[], envolvidos: Pessoa[]): void {
    const typed_exposicoes: Record<string, Exposicao> = exposicoes;

    Object.keys(typed_exposicoes).forEach((key) => {
        const exposicao = typed_exposicoes[key];

        if (
            politicaPublica.ProjetoInicio &&
            exposicao.DataInicio &&
            politicaPublica.ProjetoInicio !== '' &&
            exposicao.DataInicio !== '' &&
            before(exposicao.DataInicio, politicaPublica.ProjetoInicio) &&
            (exposicao.Curadores?.find((curador) => envolvidos.includes(curador)) ||
                exposicao.Expositores?.find((expositor) => envolvidos.includes(expositor)) ||
                exposicao.CatalogoEscritoPor?.find((escritorCatalogo) => envolvidos.includes(escritorCatalogo)) ||
                exposicao.Juri?.find((jurado) => envolvidos.includes(jurado)) ||
                exposicao.JuriDeSelecao?.find((juradoSelecao) => envolvidos.includes(juradoSelecao)))
        ) {
            exposicao.Curadores?.forEach((curador) => {
                exposicao.Curadores?.forEach((curador2) => {
                    adicionarDependencia(dependencias, {
                        pessoa1: curador.Nome,
                        pessoa2: curador2.Nome,
                        associacoes: [
                            {
                                tipoAssociacao: 'curador-curador',
                                capitais: [
                                    'CS',
                                    'CC',
                                ],
                            },
                        ],
                    });
                });
                exposicao.Expositores?.forEach((expositor) => {
                    adicionarDependencia(dependencias, {
                        pessoa1: curador.Nome,
                        pessoa2: expositor.Nome,
                        associacoes: [
                            {
                                tipoAssociacao: 'curador-expositor',
                                capitais: [
                                    'CS',
                                    'CC',
                                ],
                            },
                        ],
                    });
                });
                exposicao.CatalogoEscritoPor?.forEach((escritorCatalogo) => {
                    adicionarDependencia(dependencias, {
                        pessoa1: curador.Nome,
                        pessoa2: escritorCatalogo.Nome,
                        associacoes: [
                            {
                                tipoAssociacao: 'curador-escritorCatalogo',
                                capitais: [
                                    'CS',
                                    'CC',
                                ],
                            },
                        ],
                    });
                });
                exposicao.Juri?.forEach((jurado) => {
                    adicionarDependencia(dependencias, {
                        pessoa1: curador.Nome,
                        pessoa2: jurado.Nome,
                        associacoes: [
                            {
                                tipoAssociacao: 'curador-jurado',
                                capitais: [
                                    'CS',
                                    'CC',
                                ],
                            },
                        ],
                    });
                });
                exposicao.JuriDeSelecao?.forEach((juradoSelecao) => {
                    adicionarDependencia(dependencias, {
                        pessoa1: curador.Nome,
                        pessoa2: juradoSelecao.Nome,
                        associacoes: [
                            {
                                tipoAssociacao: 'curador-juradoSelecao',
                                capitais: [
                                    'CS',
                                    'CC',
                                ],
                            },
                        ],
                    });
                });
            });
            exposicao.Expositores?.forEach((expositor) => {
                /*exposicao.Expositores?.forEach((expositor2) => {
                    adicionarDependencia(dependencias, {
                        pessoa1: expositor.Nome,
                        pessoa2: expositor2.Nome,
                        associacoes: [
                            {
                                tipoAssociacao: 'expositor-expositor',
                                capitais: [
                                    'CS',
                                    'CC',
                                ],
                            },
                        ],
                    });
                });*/
                exposicao.CatalogoEscritoPor?.forEach((escritorCatalogo) => {
                    adicionarDependencia(dependencias, {
                        pessoa1: expositor.Nome,
                        pessoa2: escritorCatalogo.Nome,
                        associacoes: [
                            {
                                tipoAssociacao: 'expositor-escritorCatalogo',
                                capitais: [
                                    'CS',
                                    'CC',
                                ],
                            },
                        ],
                    });
                });
                exposicao.Juri?.forEach((jurado) => {
                    adicionarDependencia(dependencias, {
                        pessoa1: expositor.Nome,
                        pessoa2: jurado.Nome,
                        associacoes: [
                            {
                                tipoAssociacao: 'expositor-jurado',
                                capitais: [
                                    'CS',
                                    'CC',
                                ],
                            },
                        ],
                    });
                });
                exposicao.JuriDeSelecao?.forEach((juradoSelecao) => {
                    adicionarDependencia(dependencias, {
                        pessoa1: expositor.Nome,
                        pessoa2: juradoSelecao.Nome,
                        associacoes: [
                            {
                                tipoAssociacao: 'expositor-juradoSelecao',
                                capitais: [
                                    'CS',
                                    'CC',
                                ],
                            },
                        ],
                    });
                });
            });
            exposicao.CatalogoEscritoPor?.forEach((escritorCatalogo) => {
                exposicao.CatalogoEscritoPor?.forEach((escritorCatalogo2) => {
                    adicionarDependencia(dependencias, {
                        pessoa1: escritorCatalogo.Nome,
                        pessoa2: escritorCatalogo2.Nome,
                        associacoes: [
                            {
                                tipoAssociacao: 'escritorCatalogo-escritorCatalogo',
                                capitais: [
                                    'CS',
                                    'CC',
                                ],
                            },
                        ],
                    });
                });
                exposicao.Juri?.forEach((jurado) => {
                    adicionarDependencia(dependencias, {
                        pessoa1: escritorCatalogo.Nome,
                        pessoa2: jurado.Nome,
                        associacoes: [
                            {
                                tipoAssociacao: 'escritorCatalogo-jurado',
                                capitais: [
                                    'CS',
                                    'CC',
                                ],
                            },
                        ],
                    });
                });
                exposicao.JuriDeSelecao?.forEach((juradoSelecao) => {
                    adicionarDependencia(dependencias, {
                        pessoa1: escritorCatalogo.Nome,
                        pessoa2: juradoSelecao.Nome,
                        associacoes: [
                            {
                                tipoAssociacao: 'escritorCatalogo-juradoSelecao',
                                capitais: [
                                    'CS',
                                    'CC',
                                ],
                            },
                        ],
                    });
                });
            });
            exposicao.Juri?.forEach((jurado) => {
                exposicao.Juri?.forEach((jurado2) => {
                    adicionarDependencia(dependencias, {
                        pessoa1: jurado.Nome,
                        pessoa2: jurado2.Nome,
                        associacoes: [
                            {
                                tipoAssociacao: 'jurado-jurado',
                                capitais: [
                                    'CS',
                                    'CC',
                                ],
                            },
                        ],
                    });
                });
                exposicao.JuriDeSelecao?.forEach((juradoSelecao) => {
                    adicionarDependencia(dependencias, {
                        pessoa1: jurado.Nome,
                        pessoa2: juradoSelecao.Nome,
                        associacoes: [
                            {
                                tipoAssociacao: 'jurado-juradoSelecao',
                                capitais: [
                                    'CS',
                                    'CC',
                                ],
                            },
                        ],
                    });
                });
            });
            exposicao.JuriDeSelecao?.forEach((juradoSelecao) => {
                exposicao.JuriDeSelecao?.forEach((juradoSelecao2) => {
                    adicionarDependencia(dependencias, {
                        pessoa1: juradoSelecao.Nome,
                        pessoa2: juradoSelecao2.Nome,
                        associacoes: [
                            {
                                tipoAssociacao: 'juradoSelecao-juradoSelecao',
                                capitais: [
                                    'CS',
                                    'CC',
                                ],
                            },
                        ],
                    });
                });
            });
        }
    });
}

function DependencyWheel({ politicaPublica }: { politicaPublica: PoliticaPublica }): JSX.Element {
    const dependencias: Dependencia[] = [];
    const envolvidos: Pessoa[] = [];

    adicionarCoordenadores(politicaPublica, dependencias, envolvidos);
    adicionarIdealizadores(politicaPublica, dependencias, envolvidos);
    //adicionarSeletores(politicaPublica, dependencias, envolvidos);
    //adicionarArtistas(politicaPublica, dependencias, envolvidos);

    adicionarArtigosJornais(politicaPublica, dependencias, envolvidos);
    adicionarEsposicoes(politicaPublica, dependencias, envolvidos);

    const data = dependencias.map((dependencia) => ({
        from: dependencia.pessoa1,
        to: dependencia.pessoa2,
        weight: calcularPesoAssociacoes(dependencia.associacoes),
    }));

    const lineOptions = {
        chart: {
            height: 700,
        },
        title: {
            text: '',
        },
        series: [
            {
                type: 'dependencywheel',
                accessibility: {
                    enabled: false,
                },
                dataLabels: {
                    color: '#FFFF',
                    textPath: {
                        enabled: true,
                        attributes: {
                            dy: 5,
                        },
                    },
                    distance: 10,
                },
                data,
            },
        ],
    };

    return <Chart options={lineOptions as Highcharts.Options} />;
}

function GraficoPoliticaPublica(): JSX.Element {
    const { theme } = useTheme();

    const typed_politicapublicas: Record<string, PoliticaPublica> = politicapublicas;

    const [
        dropdownAberto,
        tornarDropdownAberto,
    ] = useState(false);
    const [
        valorDropdown,
        setarValorDropdown,
    ] = useState('EsculturasUrbanas');
    const [
        itemsDropdown,
        setarItemsDropown,
    ] = useState(Object.keys(typed_politicapublicas).map((key) => ({ label: typed_politicapublicas[key].Titulo, value: key })));

    return (
        <ScrollView style={{ width: '100%' }}>
            <View>
                <DropDownPicker
                    theme={theme.dark ? 'DARK' : 'LIGHT'}
                    open={dropdownAberto}
                    value={valorDropdown}
                    items={itemsDropdown}
                    setOpen={tornarDropdownAberto}
                    setValue={setarValorDropdown}
                    setItems={setarItemsDropown}
                    listMode="SCROLLVIEW"
                    scrollViewProps={{
                        nestedScrollEnabled: true,
                    }}
                />
                <DependencyWheel politicaPublica={typed_politicapublicas[valorDropdown]} />
            </View>
        </ScrollView>
    );
}

export default GraficoPoliticaPublica;
