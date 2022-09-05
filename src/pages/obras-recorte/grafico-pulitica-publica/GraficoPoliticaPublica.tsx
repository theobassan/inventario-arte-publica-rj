import React, { useState } from 'react';

import Highcharts from 'highcharts';
import { ScrollView, View } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

import { Chart } from '@base-components';
import { ArtigoJornal, Pessoa, PoliticaPublica } from '@domain';
import { useTheme } from '@utils';
import { antes } from '@utils/analises/dataUtils';
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

        politicaPublica.Coordenadores?.forEach((coordenador2) => {
            if (coordenador.Nome !== coordenador2.Nome) {
                adicionarEnvolvido(envolvidos, coordenador2);

                adicionarDependencia(dependencias, {
                    pessoa1: coordenador.Nome,
                    pessoa2: coordenador2.Nome,
                    associacoes: [{ tipoAssociacao: 'coordenador-coordenador', capitais: ['CS'] }],
                });
            }
        });

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

        /*politicaPublica.Obras?.forEach((obra) => {
            obra.Autores?.forEach((autor) => {
                if (coordenador.Nome !== autor.Pessoa?.Nome) {
                    adicionarEnvolvido(envolvidos, autor);

                    adicionarDependencia(dependencias, {
                    pessoa1: coordenador.Nome,
                    pessoa2: autor.Pessoa?.Nome,
                    associacoes: [{ tipoAssociacao: 'coordenador-artista', capitais: ['CC'] }],
                });
                }
            });
        });*/
    });
}

function adicionarIdealizadores(politicaPublica: PoliticaPublica, dependencias: Dependencia[], envolvidos: Pessoa[]): void {
    politicaPublica.Idealizadores?.forEach((idealizador) => {
        adicionarEnvolvido(envolvidos, idealizador);

        politicaPublica.Idealizadores?.forEach((idealizador2) => {
            if (idealizador.Nome !== idealizador2.Nome) {
                adicionarEnvolvido(envolvidos, idealizador2);

                adicionarDependencia(dependencias, {
                    pessoa1: idealizador.Nome,
                    pessoa2: idealizador2.Nome,
                    associacoes: [{ tipoAssociacao: 'idealizador-idealizador', capitais: ['CS'] }],
                });
            }
        });

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

function adicionarSeletores(politicaPublica: PoliticaPublica, dependencias: Dependencia[], envolvidos: Pessoa[]): void {
    politicaPublica.ComissaoDeSelecao?.forEach((seletor) => {
        adicionarEnvolvido(envolvidos, seletor);

        politicaPublica.ComissaoDeSelecao?.forEach((seletor2) => {
            if (seletor.Nome !== seletor2.Nome) {
                adicionarEnvolvido(envolvidos, seletor2);

                adicionarDependencia(dependencias, {
                    pessoa1: seletor.Nome,
                    pessoa2: seletor2.Nome,
                    associacoes: [{ tipoAssociacao: 'seletor-seletor', capitais: ['CS'] }],
                });
            }
        });

        politicaPublica.Obras?.forEach((obra) => {
            obra.Autores?.forEach((autor) => {
                if (seletor.Nome !== autor.Pessoa?.Nome) {
                    adicionarEnvolvido(envolvidos, autor);

                    adicionarDependencia(dependencias, {
                        pessoa1: seletor.Nome,
                        pessoa2: autor.Pessoa?.Nome,
                        associacoes: [
                            {
                                tipoAssociacao: 'seletor-artista',
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
    });
}

/*function adicionarArtistas(politicaPublica: PoliticaPublica, dependencias: Dependencia[], envolvidos: Pessoa[]): void {
    politicaPublica.Obras?.forEach((obra) => {
        obra.Autores?.forEach((autor) => {
            adicionarEnvolvido(envolvidos, autor);

            politicaPublica.Obras?.forEach((obra) => {
                obra.Autores?.forEach((autor2) => {
                    if (autor.Pessoa?.Nome !== autor2.Pessoa?.Nome) {
                        adicionarEnvolvido(envolvidos, autor2);

                        adicionarDependencia(dependencias, {
                            pessoa1: autor.Pessoa?.Nome,
                            pessoa2: autor2.Pessoa?.Nome,
                            associacoes: [
                                {
                                    tipoAssociacao: 'artista-artista',
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
        });
    });
}*/

function adicionarArtigosJornais(politicaPublica: PoliticaPublica, dependencias: Dependencia[], envolvidos: Pessoa[]): void {
    const typed_artigosjornal: Record<string, ArtigoJornal> = artigosjornal;

    Object.keys(typed_artigosjornal).forEach((key) => {
        const artigo = typed_artigosjornal[key];

        if (
            politicaPublica.ProjetoInicio &&
            artigo.Data &&
            politicaPublica.ProjetoInicio !== '' &&
            artigo.Data !== '' &&
            antes(artigo.Data, politicaPublica.ProjetoInicio) &&
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

function artistaDaPolitica(politicaPublica: PoliticaPublica, pessoa?: string): boolean {
    return politicaPublica.Obras?.find((obra) => obra.Autores?.find((autor) => autor.Pessoa?.Nome === pessoa) != null) != null;
}

function fazParteDaPolitica(politicaPublica: PoliticaPublica, pessoa: Pessoa): boolean {
    return (
        politicaPublica.Idealizadores?.find((idealizador) => idealizador.Nome === pessoa.Nome) != null ||
        politicaPublica.Coordenadores?.find((coordenador) => coordenador.Nome === pessoa.Nome) != null ||
        politicaPublica.ComissaoDeSelecao?.find((seletor) => seletor.Nome === pessoa.Nome) != null //||
        //politicaPublica.Obras?.find((obra) => obra.Autores?.find((autor) => autor.Pessoa?.Nome === pessoa.Nome) != null) != null
    );
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
            antes(exposicao.DataInicio, politicaPublica.ProjetoInicio) &&
            (exposicao.Curadores?.find((curador) => envolvidos.includes(curador)) ||
                exposicao.Expositores?.find((expositor) => envolvidos.includes(expositor)) ||
                exposicao.CatalogoEscritoPor?.find((escritorCatalogo) => envolvidos.includes(escritorCatalogo)) ||
                exposicao.Juri?.find((jurado) => envolvidos.includes(jurado)) ||
                exposicao.JuriDeSelecao?.find((juradoSelecao) => envolvidos.includes(juradoSelecao)))
        ) {
            /*exposicao.Curadores?.forEach((curador) => {
                exposicao.Curadores?.forEach((curador2) => {
                    if (curador.Nome !== curador2.Nome) {
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
                    }
                });
                exposicao.Expositores?.forEach((expositor) => {
                    if (curador.Nome !== expositor.Nome) {
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
                    }
                });
                exposicao.CatalogoEscritoPor?.forEach((escritorCatalogo) => {
                    if (curador.Nome !== escritorCatalogo.Nome) {
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
                    }
                });
                exposicao.Juri?.forEach((jurado) => {
                    if (curador.Nome !== jurado.Nome) {
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
                    }
                });
                exposicao.JuriDeSelecao?.forEach((juradoSelecao) => {
                    if (curador.Nome !== juradoSelecao.Nome) {
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
                    }
                });
                exposicao.Montadores?.forEach((montador) => {
                    if (curador.Nome !== montador.Nome) {
                        adicionarDependencia(dependencias, {
                            pessoa1: curador.Nome,
                            pessoa2: montador.Nome,
                            associacoes: [
                                {
                                    tipoAssociacao: 'curador-montador',
                                    capitais: [
                                        'CS',
                                        'CC',
                                    ],
                                },
                            ],
                        });
                    }
                });
                exposicao.Organizadores?.forEach((organizador) => {
                    if (curador.Nome !== organizador.Nome) {
                        adicionarDependencia(dependencias, {
                            pessoa1: curador.Nome,
                            pessoa2: organizador.Nome,
                            associacoes: [
                                {
                                    tipoAssociacao: 'curador-organizador',
                                    capitais: [
                                        'CS',
                                        'CC',
                                    ],
                                },
                            ],
                        });
                    }
                });
                exposicao.ComissaoDePremiacao?.forEach((comissaoPremiacao) => {
                    if (curador.Nome !== comissaoPremiacao.Nome) {
                        adicionarDependencia(dependencias, {
                            pessoa1: curador.Nome,
                            pessoa2: comissaoPremiacao.Nome,
                            associacoes: [
                                {
                                    tipoAssociacao: 'curador-comissaoPremiacao',
                                    capitais: [
                                        'CS',
                                        'CC',
                                    ],
                                },
                            ],
                        });
                    }
                });
                exposicao.ComissaoDeSelecao?.forEach((comissaoSelecao) => {
                    if (curador.Nome !== comissaoSelecao.Nome) {
                        adicionarDependencia(dependencias, {
                            pessoa1: curador.Nome,
                            pessoa2: comissaoSelecao.Nome,
                            associacoes: [
                                {
                                    tipoAssociacao: 'curador-comissaoSelecao',
                                    capitais: [
                                        'CS',
                                        'CC',
                                    ],
                                },
                            ],
                        });
                    }
                });.ArtistasConvidados?.forEach((artistaConvidado) => {
                    if (curador.Nome !== artistaConvidado.Nome) {
                        adicionarDependencia(dependencias, {
                            pessoa1: curador.Nome,
                            pessoa2: artistaConvidado.Nome,
                            associacoes: [
                                {
                                    tipoAssociacao: 'curador-artistaConvidado',
                                    capitais: [
                                        'CS',
                                        'CC',
                                    ],
                                },
                            ],
                        });
                    }
                });
            });*/
            exposicao.Expositores?.forEach((expositor) => {
                exposicao.Curadores?.forEach((curador) => {
                    if (curador.Nome !== expositor.Nome && fazParteDaPolitica(politicaPublica, curador)) {
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
                    }
                });
                /*exposicao.Expositores?.forEach((expositor2) => {
                    if (expositor.Nome !== expositor2.Nome) {
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
                    }
                });*/
                exposicao.CatalogoEscritoPor?.forEach((escritorCatalogo) => {
                    if (expositor.Nome !== escritorCatalogo.Nome && fazParteDaPolitica(politicaPublica, escritorCatalogo)) {
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
                    }
                });
                exposicao.Juri?.forEach((jurado) => {
                    if (expositor.Nome !== jurado.Nome && fazParteDaPolitica(politicaPublica, jurado)) {
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
                    }
                });
                exposicao.JuriDeSelecao?.forEach((juradoSelecao) => {
                    if (expositor.Nome !== juradoSelecao.Nome && fazParteDaPolitica(politicaPublica, juradoSelecao)) {
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
                    }
                });
                exposicao.Montadores?.forEach((montador) => {
                    if (expositor.Nome !== montador.Nome && fazParteDaPolitica(politicaPublica, montador)) {
                        adicionarDependencia(dependencias, {
                            pessoa1: expositor.Nome,
                            pessoa2: montador.Nome,
                            associacoes: [
                                {
                                    tipoAssociacao: 'expositor-montador',
                                    capitais: [
                                        'CS',
                                        'CC',
                                    ],
                                },
                            ],
                        });
                    }
                });
                exposicao.Organizadores?.forEach((organizador) => {
                    if (expositor.Nome !== organizador.Nome && fazParteDaPolitica(politicaPublica, organizador)) {
                        adicionarDependencia(dependencias, {
                            pessoa1: expositor.Nome,
                            pessoa2: organizador.Nome,
                            associacoes: [
                                {
                                    tipoAssociacao: 'expositor-organizador',
                                    capitais: [
                                        'CS',
                                        'CC',
                                    ],
                                },
                            ],
                        });
                    }
                });
                exposicao.ComissaoDePremiacao?.forEach((comissaoPremiacao) => {
                    if (expositor.Nome !== comissaoPremiacao.Nome && fazParteDaPolitica(politicaPublica, comissaoPremiacao)) {
                        adicionarDependencia(dependencias, {
                            pessoa1: expositor.Nome,
                            pessoa2: comissaoPremiacao.Nome,
                            associacoes: [
                                {
                                    tipoAssociacao: 'expositor-comissaoPremiacao',
                                    capitais: [
                                        'CS',
                                        'CC',
                                    ],
                                },
                            ],
                        });
                    }
                });
                exposicao.ComissaoDeSelecao?.forEach((comissaoSelecao) => {
                    if (expositor.Nome !== comissaoSelecao.Nome && fazParteDaPolitica(politicaPublica, comissaoSelecao)) {
                        adicionarDependencia(dependencias, {
                            pessoa1: expositor.Nome,
                            pessoa2: comissaoSelecao.Nome,
                            associacoes: [
                                {
                                    tipoAssociacao: 'expositor-comissaoSelecao',
                                    capitais: [
                                        'CS',
                                        'CC',
                                    ],
                                },
                            ],
                        });
                    }
                });
                exposicao.ArtistasConvidados?.forEach((artistaConvidado) => {
                    if (expositor.Nome !== artistaConvidado.Nome && fazParteDaPolitica(politicaPublica, artistaConvidado)) {
                        adicionarDependencia(dependencias, {
                            pessoa1: expositor.Nome,
                            pessoa2: artistaConvidado.Nome,
                            associacoes: [
                                {
                                    tipoAssociacao: 'expositor-artistaConvidado',
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
            /*exposicao.CatalogoEscritoPor?.forEach((escritorCatalogo) => {
                exposicao.CatalogoEscritoPor?.forEach((escritorCatalogo2) => {
                    if (escritorCatalogo.Nome !== escritorCatalogo2.Nome) {
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
                    }
                });
                exposicao.Juri?.forEach((jurado) => {
                    if (escritorCatalogo.Nome !== jurado.Nome) {
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
                    }
                });
                exposicao.JuriDeSelecao?.forEach((juradoSelecao) => {
                    if (escritorCatalogo.Nome !== juradoSelecao.Nome) {
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
                    }
                });
                exposicao.Montadores?.forEach((montador) => {
                    if (escritorCatalogo.Nome !== montador.Nome) {
                        adicionarDependencia(dependencias, {
                            pessoa1: escritorCatalogo.Nome,
                            pessoa2: montador.Nome,
                            associacoes: [
                                {
                                    tipoAssociacao: 'escritorCatalogo-montador',
                                    capitais: [
                                        'CS',
                                        'CC',
                                    ],
                                },
                            ],
                        });
                    }
                });
                exposicao.Organizadores?.forEach((organizador) => {
                    if (escritorCatalogo.Nome !== organizador.Nome) {
                        adicionarDependencia(dependencias, {
                            pessoa1: escritorCatalogo.Nome,
                            pessoa2: organizador.Nome,
                            associacoes: [
                                {
                                    tipoAssociacao: 'escritorCatalogo-organizador',
                                    capitais: [
                                        'CS',
                                        'CC',
                                    ],
                                },
                            ],
                        });
                    }
                });
                exposicao.ComissaoDePremiacao?.forEach((comissaoPremiacao) => {
                    if (escritorCatalogo.Nome !== comissaoPremiacao.Nome) {
                        adicionarDependencia(dependencias, {
                            pessoa1: escritorCatalogo.Nome,
                            pessoa2: comissaoPremiacao.Nome,
                            associacoes: [
                                {
                                    tipoAssociacao: 'escritorCatalogo-comissaoPremiacao',
                                    capitais: [
                                        'CS',
                                        'CC',
                                    ],
                                },
                            ],
                        });
                    }
                });
                exposicao.ComissaoDeSelecao?.forEach((comissaoSelecao) => {
                    if (escritorCatalogo.Nome !== comissaoSelecao.Nome) {
                        adicionarDependencia(dependencias, {
                            pessoa1: escritorCatalogo.Nome,
                            pessoa2: comissaoSelecao.Nome,
                            associacoes: [
                                {
                                    tipoAssociacao: 'escritorCatalogo-comissaoSelecao',
                                    capitais: [
                                        'CS',
                                        'CC',
                                    ],
                                },
                            ],
                        });
                    }
                });
                exposicao.ArtistasConvidados?.forEach((artistaConvidado) => {
                    if (escritorCatalogo.Nome !== artistaConvidado.Nome) {
                        adicionarDependencia(dependencias, {
                            pessoa1: escritorCatalogo.Nome,
                            pessoa2: artistaConvidado.Nome,
                            associacoes: [
                                {
                                    tipoAssociacao: 'escritorCatalogo-artistaConvidado',
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
            exposicao.Juri?.forEach((jurado) => {
                exposicao.Juri?.forEach((jurado2) => {
                    if (jurado.Nome !== jurado2.Nome) {
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
                    }
                });
                exposicao.JuriDeSelecao?.forEach((juradoSelecao) => {
                    if (jurado.Nome !== juradoSelecao.Nome) {
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
                    }
                });
                exposicao.Montadores?.forEach((montador) => {
                    if (jurado.Nome !== montador.Nome) {
                        adicionarDependencia(dependencias, {
                            pessoa1: jurado.Nome,
                            pessoa2: montador.Nome,
                            associacoes: [
                                {
                                    tipoAssociacao: 'jurado-montador',
                                    capitais: [
                                        'CS',
                                        'CC',
                                    ],
                                },
                            ],
                        });
                    }
                });
                exposicao.Organizadores?.forEach((organizador) => {
                    if (jurado.Nome !== organizador.Nome) {
                        adicionarDependencia(dependencias, {
                            pessoa1: jurado.Nome,
                            pessoa2: organizador.Nome,
                            associacoes: [
                                {
                                    tipoAssociacao: 'jurado-organizador',
                                    capitais: [
                                        'CS',
                                        'CC',
                                    ],
                                },
                            ],
                        });
                    }
                });
                exposicao.ComissaoDePremiacao?.forEach((comissaoPremiacao) => {
                    if (jurado.Nome !== comissaoPremiacao.Nome) {
                        adicionarDependencia(dependencias, {
                            pessoa1: jurado.Nome,
                            pessoa2: comissaoPremiacao.Nome,
                            associacoes: [
                                {
                                    tipoAssociacao: 'jurado-comissaoPremiacao',
                                    capitais: [
                                        'CS',
                                        'CC',
                                    ],
                                },
                            ],
                        });
                    }
                });
                exposicao.ComissaoDeSelecao?.forEach((comissaoSelecao) => {
                    if (jurado.Nome !== comissaoSelecao.Nome) {
                        adicionarDependencia(dependencias, {
                            pessoa1: jurado.Nome,
                            pessoa2: comissaoSelecao.Nome,
                            associacoes: [
                                {
                                    tipoAssociacao: 'jurado-comissaoSelecao',
                                    capitais: [
                                        'CS',
                                        'CC',
                                    ],
                                },
                            ],
                        });
                    }
                });
                exposicao.ArtistasConvidados?.forEach((artistaConvidado) => {
                    if (jurado.Nome !== artistaConvidado.Nome) {
                        adicionarDependencia(dependencias, {
                            pessoa1: jurado.Nome,
                            pessoa2: artistaConvidado.Nome,
                            associacoes: [
                                {
                                    tipoAssociacao: 'jurado-artistaConvidado',
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
            exposicao.JuriDeSelecao?.forEach((juradoSelecao) => {
                exposicao.JuriDeSelecao?.forEach((juradoSelecao2) => {
                    if (juradoSelecao.Nome !== juradoSelecao2.Nome) {
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
                    }
                });
                exposicao.Montadores?.forEach((montador) => {
                    if (juradoSelecao.Nome !== montador.Nome) {
                        adicionarDependencia(dependencias, {
                            pessoa1: juradoSelecao.Nome,
                            pessoa2: montador.Nome,
                            associacoes: [
                                {
                                    tipoAssociacao: 'juradoSelecao-montador',
                                    capitais: [
                                        'CS',
                                        'CC',
                                    ],
                                },
                            ],
                        });
                    }
                });
                exposicao.Organizadores?.forEach((organizador) => {
                    if (juradoSelecao.Nome !== organizador.Nome) {
                        adicionarDependencia(dependencias, {
                            pessoa1: juradoSelecao.Nome,
                            pessoa2: organizador.Nome,
                            associacoes: [
                                {
                                    tipoAssociacao: 'juradoSelecao-organizador',
                                    capitais: [
                                        'CS',
                                        'CC',
                                    ],
                                },
                            ],
                        });
                    }
                });
                exposicao.ComissaoDePremiacao?.forEach((comissaoPremiacao) => {
                    if (juradoSelecao.Nome !== comissaoPremiacao.Nome) {
                        adicionarDependencia(dependencias, {
                            pessoa1: juradoSelecao.Nome,
                            pessoa2: comissaoPremiacao.Nome,
                            associacoes: [
                                {
                                    tipoAssociacao: 'juradoSelecao-comissaoPremiacao',
                                    capitais: [
                                        'CS',
                                        'CC',
                                    ],
                                },
                            ],
                        });
                    }
                });
                exposicao.ComissaoDeSelecao?.forEach((comissaoSelecao) => {
                    if (juradoSelecao.Nome !== comissaoSelecao.Nome) {
                        adicionarDependencia(dependencias, {
                            pessoa1: juradoSelecao.Nome,
                            pessoa2: comissaoSelecao.Nome,
                            associacoes: [
                                {
                                    tipoAssociacao: 'juradoSelecao-comissaoSelecao',
                                    capitais: [
                                        'CS',
                                        'CC',
                                    ],
                                },
                            ],
                        });
                    }
                });
                exposicao.ArtistasConvidados?.forEach((artistaConvidado) => {
                    if (juradoSelecao.Nome !== artistaConvidado.Nome) {
                        adicionarDependencia(dependencias, {
                            pessoa1: juradoSelecao.Nome,
                            pessoa2: artistaConvidado.Nome,
                            associacoes: [
                                {
                                    tipoAssociacao: 'juradoSelecao-artistaConvidado',
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
            exposicao.Montadores?.forEach((montador) => {
                exposicao.Montadores?.forEach((montador2) => {
                    if (montador.Nome !== montador2.Nome) {
                        adicionarDependencia(dependencias, {
                            pessoa1: montador.Nome,
                            pessoa2: montador2.Nome,
                            associacoes: [
                                {
                                    tipoAssociacao: 'montador-montador',
                                    capitais: [
                                        'CS',
                                        'CC',
                                    ],
                                },
                            ],
                        });
                    }
                });
                exposicao.Organizadores?.forEach((organizador) => {
                    if (montador.Nome !== organizador.Nome) {
                        adicionarDependencia(dependencias, {
                            pessoa1: montador.Nome,
                            pessoa2: organizador.Nome,
                            associacoes: [
                                {
                                    tipoAssociacao: 'montador-organizador',
                                    capitais: [
                                        'CS',
                                        'CC',
                                    ],
                                },
                            ],
                        });
                    }
                });
                exposicao.ComissaoDePremiacao?.forEach((comissaoPremiacao) => {
                    if (montador.Nome !== comissaoPremiacao.Nome) {
                        adicionarDependencia(dependencias, {
                            pessoa1: montador.Nome,
                            pessoa2: comissaoPremiacao.Nome,
                            associacoes: [
                                {
                                    tipoAssociacao: 'montador-comissaoPremiacao',
                                    capitais: [
                                        'CS',
                                        'CC',
                                    ],
                                },
                            ],
                        });
                    }
                });
                exposicao.ComissaoDeSelecao?.forEach((comissaoSelecao) => {
                    if (montador.Nome !== comissaoSelecao.Nome) {
                        adicionarDependencia(dependencias, {
                            pessoa1: montador.Nome,
                            pessoa2: comissaoSelecao.Nome,
                            associacoes: [
                                {
                                    tipoAssociacao: 'montador-comissaoSelecao',
                                    capitais: [
                                        'CS',
                                        'CC',
                                    ],
                                },
                            ],
                        });
                    }
                });
                exposicao.ArtistasConvidados?.forEach((artistaConvidado) => {
                    if (montador.Nome !== artistaConvidado.Nome) {
                        adicionarDependencia(dependencias, {
                            pessoa1: montador.Nome,
                            pessoa2: artistaConvidado.Nome,
                            associacoes: [
                                {
                                    tipoAssociacao: 'montador-artistaConvidado',
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
            exposicao.Organizadores?.forEach((organizador) => {
                exposicao.Organizadores?.forEach((organizador2) => {
                    if (organizador.Nome !== organizador2.Nome) {
                        adicionarDependencia(dependencias, {
                            pessoa1: organizador.Nome,
                            pessoa2: organizador2.Nome,
                            associacoes: [
                                {
                                    tipoAssociacao: 'organizador-organizador',
                                    capitais: [
                                        'CS',
                                        'CC',
                                    ],
                                },
                            ],
                        });
                    }
                });
                exposicao.ComissaoDePremiacao?.forEach((comissaoPremiacao) => {
                    if (organizador.Nome !== comissaoPremiacao.Nome) {
                        adicionarDependencia(dependencias, {
                            pessoa1: organizador.Nome,
                            pessoa2: comissaoPremiacao.Nome,
                            associacoes: [
                                {
                                    tipoAssociacao: 'organizador-comissaoPremiacao',
                                    capitais: [
                                        'CS',
                                        'CC',
                                    ],
                                },
                            ],
                        });
                    }
                });
                exposicao.ComissaoDeSelecao?.forEach((comissaoSelecao) => {
                    if (organizador.Nome !== comissaoSelecao.Nome) {
                        adicionarDependencia(dependencias, {
                            pessoa1: organizador.Nome,
                            pessoa2: comissaoSelecao.Nome,
                            associacoes: [
                                {
                                    tipoAssociacao: 'organizador-comissaoSelecao',
                                    capitais: [
                                        'CS',
                                        'CC',
                                    ],
                                },
                            ],
                        });
                    }
                });
                exposicao.ArtistasConvidados?.forEach((artistaConvidado) => {
                    if (organizador.Nome !== artistaConvidado.Nome) {
                        adicionarDependencia(dependencias, {
                            pessoa1: organizador.Nome,
                            pessoa2: artistaConvidado.Nome,
                            associacoes: [
                                {
                                    tipoAssociacao: 'organizador-artistaConvidado',
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
            exposicao.ComissaoDePremiacao?.forEach((comissaoPremiacao) => {
                exposicao.ComissaoDePremiacao?.forEach((comissaoPremiacao2) => {
                    if (comissaoPremiacao.Nome !== comissaoPremiacao2.Nome) {
                        adicionarDependencia(dependencias, {
                            pessoa1: comissaoPremiacao.Nome,
                            pessoa2: comissaoPremiacao2.Nome,
                            associacoes: [
                                {
                                    tipoAssociacao: 'comissaoPremiacao-comissaoPremiacao',
                                    capitais: [
                                        'CS',
                                        'CC',
                                    ],
                                },
                            ],
                        });
                    }
                });
                exposicao.ComissaoDeSelecao?.forEach((comissaoSelecao) => {
                    if (comissaoPremiacao.Nome !== comissaoSelecao.Nome) {
                        adicionarDependencia(dependencias, {
                            pessoa1: comissaoPremiacao.Nome,
                            pessoa2: comissaoSelecao.Nome,
                            associacoes: [
                                {
                                    tipoAssociacao: 'comissaoPremiacao-comissaoSelecao',
                                    capitais: [
                                        'CS',
                                        'CC',
                                    ],
                                },
                            ],
                        });
                    }
                });
                exposicao.ArtistasConvidados?.forEach((artistaConvidado) => {
                    if (comissaoPremiacao.Nome !== artistaConvidado.Nome) {
                        adicionarDependencia(dependencias, {
                            pessoa1: comissaoPremiacao.Nome,
                            pessoa2: artistaConvidado.Nome,
                            associacoes: [
                                {
                                    tipoAssociacao: 'comissaoPremiacao-artistaConvidado',
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
            exposicao.ComissaoDeSelecao?.forEach((comissaoSelecao) => {
                exposicao.ComissaoDeSelecao?.forEach((comissaoSelecao2) => {
                    if (comissaoSelecao.Nome !== comissaoSelecao2.Nome) {
                        adicionarDependencia(dependencias, {
                            pessoa1: comissaoSelecao.Nome,
                            pessoa2: comissaoSelecao2.Nome,
                            associacoes: [
                                {
                                    tipoAssociacao: 'comissaoSelecao-comissaoSelecao',
                                    capitais: [
                                        'CS',
                                        'CC',
                                    ],
                                },
                            ],
                        });
                    }
                });
                exposicao.ArtistasConvidados?.forEach((artistaConvidado) => {
                    if (comissaoSelecao.Nome !== artistaConvidado.Nome) {
                        adicionarDependencia(dependencias, {
                            pessoa1: comissaoSelecao.Nome,
                            pessoa2: artistaConvidado.Nome,
                            associacoes: [
                                {
                                    tipoAssociacao: 'comissaoSelecao-artistaConvidado',
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
            exposicao.ArtistasConvidados?.forEach((artistaConvidado) => {
                exposicao.ArtistasConvidados?.forEach((artistaConvidado2) => {
                    if (artistaConvidado.Nome !== artistaConvidado2.Nome) {
                        adicionarDependencia(dependencias, {
                            pessoa1: artistaConvidado.Nome,
                            pessoa2: artistaConvidado2.Nome,
                            associacoes: [
                                {
                                    tipoAssociacao: 'artistaConvidado-artistaConvidado',
                                    capitais: [
                                        'CS',
                                        'CC',
                                    ],
                                },
                            ],
                        });
                    }
                });
            });*/
        }
    });
}

function fernandoCocchiarale(politicaPublica: PoliticaPublica, dep: { from?: string; to?: string; weight: number }, peso: number): boolean {
    if (dep.from === 'Fernando Cocchiarale' && !artistaDaPolitica(politicaPublica, dep.to)) {
        return dep.weight > peso + 1;
    } else if (dep.to === 'Fernando Cocchiarale' && !artistaDaPolitica(politicaPublica, dep.from)) {
        return dep.weight > peso + 1;
    }

    return dep.weight > peso;
}

function DependencyWheel({ politicaPublica, peso }: { politicaPublica: PoliticaPublica; peso: number }): JSX.Element {
    const dependencias: Dependencia[] = [];
    const envolvidos: Pessoa[] = [];

    adicionarCoordenadores(politicaPublica, dependencias, envolvidos);
    adicionarIdealizadores(politicaPublica, dependencias, envolvidos);
    adicionarSeletores(politicaPublica, dependencias, envolvidos);
    //adicionarArtistas(politicaPublica, dependencias, envolvidos);

    adicionarArtigosJornais(politicaPublica, dependencias, envolvidos);
    adicionarEsposicoes(politicaPublica, dependencias, envolvidos);

    const data = dependencias
        .map((dependencia) => ({
            from: dependencia.pessoa1,
            to: dependencia.pessoa2,
            weight: calcularPesoAssociacoes(dependencia.associacoes),
        }))
        //.filter((dep) => dep.weight > peso);
        .filter((dep) => fernandoCocchiarale(politicaPublica, dep, peso));

    const nodes = [
        { id: 'Fernando Cocchiarale', dataLabels: { enabled: true } },
        { id: 'José Resende', dataLabels: { enabled: true } },
        { id: 'Amilcar de Castro', dataLabels: { enabled: true } },
        { id: 'Franz Weissmann', dataLabels: { enabled: true } },
        { id: 'Ivens Machado', dataLabels: { enabled: true } },
        { id: 'Waltércio Caldas', dataLabels: { enabled: true } },
        { id: 'Ronaldo Brito', dataLabels: { enabled: true } },
        { id: 'Paulo Venancio Filho', dataLabels: { enabled: true } },
        { id: 'Lauro Cavalcanti', dataLabels: { enabled: true } },
        { id: 'Reynaldo Roels', dataLabels: { enabled: true } },
    ];

    const lineOptions = {
        chart: {
            height: 800,
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
                    enabled: false,
                    color: '#FFFF',
                    /*textPath: {
                        enabled: true,
                        attributes: {
                            dy: 5,
                        },
                    },
                    distance: 10,*/
                },
                data,
                nodes,
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
    const [
        dropdownAberto2,
        tornarDropdownAberto2,
    ] = useState(false);
    const [
        valorDropdown2,
        setarValorDropdown2,
    ] = useState(0);
    const [
        itemsDropdown2,
        setarItemsDropown2,
    ] = useState(
        [
            0,
            1,
            2,
            3,
        ].map((key) => ({ label: key.toString(), value: key })),
    );

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
                <DropDownPicker
                    theme={theme.dark ? 'DARK' : 'LIGHT'}
                    open={dropdownAberto2}
                    value={valorDropdown2}
                    items={itemsDropdown2}
                    setOpen={tornarDropdownAberto2}
                    setValue={setarValorDropdown2}
                    setItems={setarItemsDropown2}
                    listMode="SCROLLVIEW"
                    scrollViewProps={{
                        nestedScrollEnabled: true,
                    }}
                />
                <DependencyWheel politicaPublica={typed_politicapublicas[valorDropdown]} peso={valorDropdown2} />
            </View>
        </ScrollView>
    );
}

export default GraficoPoliticaPublica;
