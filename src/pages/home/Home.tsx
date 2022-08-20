import { ScrollView, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Table, Row, Rows } from 'react-native-table-component';

import { Text, Chart } from '@components';
import { Artista, Obra } from '@domain';
import { getYear } from '@utils/data/analisys_utils';
import * as obras from '@utils/data/obra';
import * as obra_artepublica from '@utils/data/obra_artepublica';

function MaiorAutor(obra_artepublica: Record<string, Obra>): string | undefined {
    const artistas_artepublica = Object.keys(obra_artepublica)
        .map(
            (key) =>
                obra_artepublica[key].Autores ?? [
                    { Pessoa: { Nome: 'Desconhecida' } } as Artista,
                ],
        )
        .reduce<string[]>((r, l) => {
            Array.prototype.push.apply(
                r,
                l.map<string>((artista) => artista.Pessoa?.Nome ?? 'Desconhecida'),
            );
            return r;
        }, []);

    const artistas_total_obras = artistas_artepublica.reduce<{ nome: string; total: number; obras: { nome: string; inauguracao: string }[] }[]>(function (
        r,
        a,
    ) {
        const r_top = r.find((top) => top.nome === a);
        if (!r_top) {
            const obras: { nome: string; inauguracao: string }[] = Object.keys(obra_artepublica)
                .filter(
                    (key) =>
                        (obra_artepublica[key].Autores != null && obra_artepublica[key].Autores?.find((artista) => artista.Pessoa?.Nome === a) != null) ||
                        (a === 'Desconhecida' && obra_artepublica[key].Autores == null),
                )
                .map((key) => ({
                    nome: obra_artepublica[key].Titulo ?? 'Desconhecida',
                    inauguracao: obra_artepublica[key].DataInauguracao ?? 'Desconhecida',
                }));

            r.push({
                nome: a,
                total: obras.length,
                obras,
            });
        }
        return r;
    },
    []);

    let artistas_total = [...artistas_total_obras];
    artistas_total = artistas_total.sort((a, b) => a.nome.localeCompare(b.nome));

    let artistas_total_sort_total = [...artistas_total];
    artistas_total_sort_total = artistas_total_sort_total.sort((a, b) => (a.total < b.total ? 1 : -1));

    let artista: string | undefined;
    if (artistas_total_sort_total.length > 0) {
        if (artistas_total_sort_total[0].nome !== 'Desconhecida') {
            artista = artistas_total_sort_total[0].nome;
        } else if (artistas_total_sort_total.length > 1) {
            if (artistas_total_sort_total[1].nome !== 'Desconhecida') {
                artista = artistas_total_sort_total[1].nome;
            }
        }
    }
    return artista;
}

function Network(): JSX.Element {
    const typed_obra_artepublica: Record<string, Obra> = obra_artepublica;
    const autor = MaiorAutor(obra_artepublica);

    const obras: Obra[] = Object.keys(typed_obra_artepublica)
        .filter(
            (key) =>
                (typed_obra_artepublica[key].Autores != null &&
                    typed_obra_artepublica[key].Autores?.find((artista) => artista.Pessoa?.Nome === autor) != null) ||
                (autor === 'Desconhecida' && typed_obra_artepublica[key].Autores == null),
        )
        .map((key) => typed_obra_artepublica[key]);

    const titulos = obras.map((obra) => ({
        id: `${obra.Titulo ?? 'Deconhecida'} (${getYear(obra.DataInauguracao) ?? 'Desconhecida'})`,
        marker: { radius: 5 },
        color: 'yellow',
    }));
    const tipologias = obras
        .map((obra) => ({
            id: obra.Tipologia ?? 'Deconhecida',
            marker: { radius: 10 },
            color: 'red',
        }))
        .reduce<{ id: string }[]>((r, e) => {
            if (r.find((tip) => tip.id === e.id) == null) {
                r.push(e);
            }
            return r;
        }, []);

    const nodes = [{ id: autor, marker: { radius: 20 }, color: 'blue' }];
    Array.prototype.push.apply(nodes, titulos);
    Array.prototype.push.apply(nodes, tipologias);

    const data = tipologias.map((tipologia) => ({
        from: autor,
        to: tipologia.id,
    }));

    Array.prototype.push.apply(
        data,
        tipologias
            .map((tipologia) => {
                const titulos_tipologia = Object.keys(typed_obra_artepublica)
                    .filter(
                        (key) =>
                            (typed_obra_artepublica[key].Autores != null &&
                                typed_obra_artepublica[key].Autores?.find((artista) => artista.Pessoa?.Nome === autor) != null) ||
                            (autor === 'Desconhecida' && typed_obra_artepublica[key].Autores == null),
                    )
                    .filter(
                        (key) =>
                            (typed_obra_artepublica[key].Tipologia != null && typed_obra_artepublica[key].Tipologia === tipologia.id) ||
                            (tipologia.id === 'Desconhecida' && typed_obra_artepublica[key].Tipologia == null),
                    )
                    .map(
                        (key) =>
                            `${typed_obra_artepublica[key].Titulo ?? 'Deconhecida'} (${
                                getYear(typed_obra_artepublica[key].DataInauguracao) ?? 'Desconhecida'
                            })`,
                    );

                return titulos_tipologia.map((titulo) => ({
                    from: tipologia.id,
                    to: titulo,
                }));
            })
            .reduce((r, l) => {
                Array.prototype.push.apply(r, l);
                return r;
            }, []),
    );

    const networkOptions: Highcharts.Options | unknown = {
        chart: {
            height: 800,
            type: 'networkgraph',
        },
        title: {
            text: '',
        },
        plotOptions: {
            networkgraph: {
                layoutAlgorithm: {
                    enableSimulation: true,
                    friction: -0.9,
                },
            },
        },
        series: [
            {
                name: '',
                accessibility: {
                    enabled: true,
                },
                dataLabels: {
                    enabled: true,
                    linkFormat: '{point.rel}',
                },
                data,
                nodes,
            },
        ],
    };

    return <Chart options={networkOptions as Highcharts.Options} />;
}

function Home(): JSX.Element {
    const typed_obras: Record<string, Obra> = obras;
    const typed_obra_artepublica: Record<string, Obra> = obra_artepublica;

    const style = styles();

    const tipologias: string[] = Object.keys(typed_obras).map((key) => typed_obras[key].Tipologia ?? 'Desconhecida');
    const tipologias_artepublica: string[] = Object.keys(typed_obra_artepublica).map((key) => typed_obra_artepublica[key].Tipologia ?? 'Desconhecida');
    const naturezas_artepublica: string[] = Object.keys(typed_obra_artepublica).map((key) => typed_obra_artepublica[key].Natureza ?? 'Desconhecida');
    const zonas_artepublica: string[] = Object.keys(typed_obra_artepublica).map((key) => typed_obra_artepublica[key].Zona ?? 'Desconhecida');
    const status_artepublica: string[] = Object.keys(typed_obra_artepublica).map((key) => typed_obra_artepublica[key].Status ?? 'Desconhecida');
    const artistas_artepublica: string[] = Object.keys(typed_obra_artepublica)
        .map(
            (key) =>
                typed_obra_artepublica[key].Autores ?? [
                    { Pessoa: { Nome: 'Desconhecida' } } as Artista,
                ],
        )
        .reduce<string[]>((r, l) => {
            Array.prototype.push.apply(
                r,
                l.map<string>((artista) => artista.Pessoa?.Nome ?? 'Desconhecida'),
            );
            return r;
        }, []);

    const all_tipologias: string[] = [];
    Array.prototype.push.apply(all_tipologias, tipologias);
    Array.prototype.push.apply(all_tipologias, tipologias_artepublica);

    const tipologias_group_total: { nome: string; total: number }[] = all_tipologias
        .reduce<{ nome: string; total: number }[]>(function (r, a) {
            const r_top = r.find((top) => top.nome === a);
            if (!r_top) {
                r.push({
                    nome: a,
                    total: all_tipologias.filter((top) => top === a).length,
                });
            }
            return r;
        }, [])
        .sort((a, b) => a.nome.localeCompare(b.nome));

    const tipologias_artepublica_group_total: { nome: string; total: number }[] = tipologias_artepublica
        .reduce<{ nome: string; total: number }[]>(function (r, a) {
            const r_top = r.find((top) => top.nome === a);
            if (!r_top) {
                r.push({
                    nome: a,
                    total: tipologias_artepublica.filter((top) => top === a).length,
                });
            }
            return r;
        }, [])
        .sort((a, b) => a.nome.localeCompare(b.nome));

    const artistas_artepublica_group_total: {
        nome: string;
        total: number;
        obras: string[];
    }[] = artistas_artepublica
        .reduce<{ nome: string; total: number; obras: string[] }[]>(function (r, a) {
            const r_top = r.find((top) => top.nome === a);
            if (!r_top) {
                const obras: string[] = Object.keys(typed_obra_artepublica)
                    .filter(
                        (key) =>
                            (typed_obra_artepublica[key].Autores != null &&
                                typed_obra_artepublica[key].Autores?.find((artista) => artista.Pessoa?.Nome === a) != null) ||
                            (a === 'Desconhecida' && typed_obra_artepublica[key].Autores == null),
                    )
                    .map((key) => typed_obra_artepublica[key].Titulo ?? 'Desconhecida');

                r.push({
                    nome: a,
                    total: obras.length,
                    obras,
                });
            }
            return r;
        }, [])
        .sort((a, b) => a.nome.localeCompare(b.nome));

    const naturezas_artepublica_group_total: { nome: string; total: number }[] = naturezas_artepublica
        .reduce<{ nome: string; total: number }[]>(function (r, a) {
            const r_top = r.find((top) => top.nome === a);
            if (!r_top) {
                r.push({
                    nome: a,
                    total: naturezas_artepublica.filter((top) => top === a).length,
                });
            }
            return r;
        }, [])
        .sort((a, b) => a.nome.localeCompare(b.nome));

    const zonas_artepublica_group_total: { nome: string; total: number; obras: string[]; tipologias: { nome: string; total: number }[] }[] = zonas_artepublica
        .reduce<{ nome: string; total: number; obras: string[]; tipologias: { nome: string; total: number }[] }[]>(function (r, a) {
            const r_top = r.find((top) => top.nome === a);
            if (!r_top) {
                const obras: string[] = Object.keys(typed_obra_artepublica)
                    .filter(
                        (key) =>
                            (typed_obra_artepublica[key].Zona != null && typed_obra_artepublica[key].Zona === a) ||
                            (a === 'Desconhecida' && typed_obra_artepublica[key].Zona == null),
                    )
                    .map((key) => typed_obra_artepublica[key].Titulo ?? 'Desconhecida');

                const tipologias_zona: string[] = Object.keys(typed_obra_artepublica)
                    .filter(
                        (key) =>
                            (typed_obra_artepublica[key].Zona != null && typed_obra_artepublica[key].Zona === a) ||
                            (a === 'Desconhecida' && typed_obra_artepublica[key].Zona == null),
                    )
                    .map((key) => typed_obra_artepublica[key].Tipologia ?? 'Desconhecida');

                const tipologias_zona_group = tipologias_zona
                    .reduce<{ nome: string; total: number }[]>(function (r, a) {
                        const r_top = r.find((top) => top.nome === a);
                        if (!r_top) {
                            r.push({
                                nome: a,
                                total: tipologias_zona.filter((top) => top === a).length,
                            });
                        }
                        return r;
                    }, [])
                    .sort((a, b) => a.nome.localeCompare(b.nome));

                r.push({
                    nome: a,
                    total: zonas_artepublica.filter((top) => top === a).length,
                    obras,
                    tipologias: tipologias_zona_group,
                });
            }
            return r;
        }, [])
        .sort((a, b) => a.nome.localeCompare(b.nome));

    const status_artepublica_group_total: {
        nome: string;
        total: number;
        tipologias: { nome: string; total: number }[];
    }[] = status_artepublica
        .reduce<
            {
                nome: string;
                total: number;
                tipologias: { nome: string; total: number }[];
            }[]
        >(function (r, a) {
            const r_top = r.find((top) => top.nome === a);
            if (!r_top) {
                const tipologias = Object.keys(typed_obra_artepublica)
                    .filter((key) => typed_obra_artepublica[key].Status === a || (a === 'Desconhecida' && typed_obra_artepublica[key].Status == null))
                    .map((key) => typed_obra_artepublica[key].Tipologia ?? 'Desconhecida');

                const tipologias_total: { nome: string; total: number }[] = tipologias
                    .reduce<{ nome: string; total: number }[]>(function (r, a) {
                        const r_top = r.find((top) => top.nome === a);
                        if (!r_top) {
                            r.push({
                                nome: a,
                                total: tipologias.filter((top) => top === a).length,
                            });
                        }
                        return r;
                    }, [])
                    .sort((a, b) => a.nome.localeCompare(b.nome));

                r.push({
                    nome: a,
                    total: status_artepublica.filter((top) => top === a).length,
                    tipologias: tipologias_total,
                });
            }
            return r;
        }, [])
        .sort((a, b) => a.nome.localeCompare(b.nome));

    return (
        <SafeAreaView style={style.container}>
            <ScrollView style={{ width: '100%' }}>
                <Text>Total de Obras levantadas: {Object.keys(obras).length + Object.keys(obra_artepublica).length}</Text>
                <View style={{ height: 24 }} />

                <Table borderStyle={{ borderWidth: 2, borderColor: '#c8e1ff' }}>
                    <Row
                        data={[
                            <Text>Tipologia</Text>,
                            <Text>Total:{' '}
                            {tipologias_group_total.length}</Text>,
                        ]}
                        style={style.head}
                    />
                    <Rows
                        data={tipologias_group_total.map((top) => [
                            <Text>{top.nome}</Text>,
                            <Text>{top.total}</Text>,
                        ])}
                    />
                </Table>
                <View style={{ height: 24 }} />

                <Text>Total Arte pública: {Object.keys(obra_artepublica).length}</Text>
                <View style={{ height: 24 }} />

                <Table borderStyle={{ borderWidth: 2, borderColor: '#c8e1ff' }}>
                    <Row
                        data={[
                            <Text>Tipologia</Text>,
                            <Text>Total:{' '}
                            {tipologias_artepublica_group_total.length}</Text>,
                        ]}
                        style={style.head}
                    />
                    <Rows
                        data={tipologias_artepublica_group_total.map((top) => [
                            <Text>{top.nome}</Text>,
                            <Text>{top.total}</Text>,
                        ])}
                    />
                </Table>
                <View style={{ height: 24 }} />

                <Table borderStyle={{ borderWidth: 2, borderColor: '#c8e1ff' }}>
                    <Row
                        data={[
                            <Text>Artista</Text>,
                            <Text>Total:{' '}
                            {artistas_artepublica_group_total.length}</Text>,
                            <Text>Obras</Text>,
                        ]}
                        style={style.head}
                    />
                    <Rows
                        data={artistas_artepublica_group_total.map((top) => [
                            <Text>{top.nome}</Text>,
                            <Text>{top.total}</Text>,
                            <Text>{top.obras.join(', ')}</Text>,
                        ])}
                    />
                </Table>
                <View style={{ height: 24 }} />

                <Table borderStyle={{ borderWidth: 2, borderColor: '#c8e1ff' }}>
                    <Row
                        data={[
                            <Text>Natureza</Text>,
                            <Text>Total:{' '}
                            {naturezas_artepublica_group_total.length}</Text>,
                        ]}
                        style={style.head}
                    />
                    <Rows
                        data={naturezas_artepublica_group_total.map((top) => [
                            <Text>{top.nome}</Text>,
                            <Text>{top.total}</Text>,
                        ])}
                    />
                </Table>
                <View style={{ height: 24 }} />

                <Table borderStyle={{ borderWidth: 2, borderColor: '#c8e1ff' }}>
                    <Row
                        data={[
                            <Text>Zona</Text>,
                            <Text>Total:{' '}
                            {zonas_artepublica_group_total.length}</Text>,
                            <Text>Tipologias</Text>,
                            <Text>Obras</Text>,
                        ]}
                        style={style.head}
                    />
                    <Rows
                        data={zonas_artepublica_group_total.map((top) => [
                            <Text>{top.nome}</Text>,
                            <Text>{top.total}</Text>,
                            <Text>{top.tipologias.map((tipologia) => `${tipologia.nome} (${tipologia.total})`).join(', ')}</Text>,
                            <Text>{top.obras.join(', ')}</Text>,
                        ])}
                    />
                </Table>
                <View style={{ height: 24 }} />

                <Table borderStyle={{ borderWidth: 2, borderColor: '#c8e1ff' }}>
                    <Row
                        data={[
                            <Text>Status</Text>,
                            <Text>Total:{' '}
                            {status_artepublica_group_total.length}</Text>,
                            <Text>Tipologias</Text>,
                        ]}
                        style={style.head}
                    />
                    <Rows
                        data={status_artepublica_group_total.map((top) => [
                            <Text>{top.nome}</Text>,
                            <Text>{top.total}</Text>,
                            <Text>{top.tipologias.map((top) => `${top.nome} (${top.total})`).join(', ')}</Text>,
                        ])}
                    />
                </Table>
                <View style={{ height: 24 }} />

                <Network />
                <View style={{ height: 24 }} />
            </ScrollView>
        </SafeAreaView>
    );
}

function styles() {
    return StyleSheet.create({
        container: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
        },
        head: { height: 40 },
    });
}

export default Home;
