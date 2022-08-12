import { SeriesOptionsType } from 'highcharts';
import { ScrollView, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Table, Row, Rows } from 'react-native-table-component';

import { Chart, Text } from '@components';
import { Artista, Obra } from '@domain';
import * as analisys_list_utils from '@utils/data/analisys_list_utils';
import * as obra_artepublica from '@utils/data/obra_artepublica';

function Line({ category }: { category: string }): JSX.Element {
    const all: Record<string, Obra[]> = analisys_list_utils.all;

    const total = Object.keys(all)
        .filter((key) => key !== 'null' && all[key].length > 0)
        .map((key) => [Date.UTC(parseInt(key, 10), 1), all[key].length]);

    const total_category = Object.keys(all)
        .filter((key) => key !== 'null' && all[key].length > 0)
        .map((key) => [Date.UTC(parseInt(key, 10), 1), all[key].filter((obra) => obra.Eixo === category).length]);

    const series = [
        {
            type: 'line',
            name: 'Total',
            data: total,
        } as SeriesOptionsType,
        {
            type: 'line',
            name: category,
            data: total_category,
        } as SeriesOptionsType,
    ];

    const lineOptions: Highcharts.Options = {
        chart: {
            height: 800,
            type: 'line',
        },
        title: {
            text: '',
        },
        yAxis: {
            title: {
                text: 'Total',
            },
            min: 0,
        },
        xAxis: {
            type: 'datetime',
            dateTimeLabelFormats: {
                month: '%Y',
                year: '%Y',
            },
            title: {
                text: 'Ano',
            },
        },
        legend: {
            layout: 'horizontal',
            align: 'center',
        },
        series,
    };

    return <Chart options={lineOptions} />;
}

function Network({ category }: { category: string }): JSX.Element {
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
                name: category,
                accessibility: {
                    enabled: false,
                },
                dataLabels: {
                    enabled: true,
                },
                id: 'lang-tree',
                data: [
                    { from: 'Proto Indo-European', to: 'Balto-Slavic', color: 'red' },
                    { from: 'Proto Indo-European', to: 'Germanic' },
                    { from: 'Proto Indo-European', to: 'Celtic' },
                    { from: 'Proto Indo-European', to: 'Italic' },
                    { from: 'Proto Indo-European', to: 'Hellenic' },
                    { from: 'Proto Indo-European', to: 'Anatolian' },
                    { from: 'Proto Indo-European', to: 'Indo-Iranian' },
                    { from: 'Proto Indo-European', to: 'Tocharian' },
                    { from: 'Indo-Iranian', to: 'Dardic' },
                    { from: 'Indo-Iranian', to: 'Indic' },
                    { from: 'Indo-Iranian', to: 'Iranian' },
                    { from: 'Iranian', to: 'Old Persian' },
                    { from: 'Old Persian', to: 'Middle Persian' },
                    { from: 'Indic', to: 'Sanskrit' },
                    { from: 'Italic', to: 'Osco-Umbrian' },
                    { from: 'Italic', to: 'Latino-Faliscan' },
                    { from: 'Latino-Faliscan', to: 'Latin' },
                    { from: 'Celtic', to: 'Brythonic' },
                    { from: 'Celtic', to: 'Goidelic' },
                    { from: 'Germanic', to: 'North Germanic' },
                    { from: 'Germanic', to: 'West Germanic' },
                    { from: 'Germanic', to: 'East Germanic' },
                    { from: 'North Germanic', to: 'Old Norse' },
                    { from: 'North Germanic', to: 'Old Swedish' },
                    { from: 'North Germanic', to: 'Old Danish' },
                    { from: 'West Germanic', to: 'Old English' },
                    { from: 'West Germanic', to: 'Old Frisian' },
                    { from: 'West Germanic', to: 'Old Dutch' },
                    { from: 'West Germanic', to: 'Old Low German' },
                    { from: 'West Germanic', to: 'Old High German' },
                    { from: 'Old Norse', to: 'Old Icelandic' },
                    { from: 'Old Norse', to: 'Old Norwegian' },
                    { from: 'Old Norwegian', to: 'Middle Norwegian' },
                    { from: 'Old Swedish', to: 'Middle Swedish' },
                    { from: 'Old Danish', to: 'Middle Danish' },
                    { from: 'Old English', to: 'Middle English' },
                    { from: 'Old Dutch', to: 'Middle Dutch' },
                    { from: 'Old Low German', to: 'Middle Low German' },
                    { from: 'Old High German', to: 'Middle High German' },
                    { from: 'Balto-Slavic', to: 'Baltic' },
                    { from: 'Balto-Slavic', to: 'Slavic' },
                    { from: 'Slavic', to: 'East Slavic' },
                    { from: 'Slavic', to: 'West Slavic' },
                    { from: 'Slavic', to: 'South Slavic' },
                    // Leaves:
                    { from: 'Proto Indo-European', to: 'Phrygian' },
                    { from: 'Proto Indo-European', to: 'Armenian' },
                    { from: 'Proto Indo-European', to: 'Albanian' },
                    { from: 'Proto Indo-European', to: 'Thracian' },
                    { from: 'Tocharian', to: 'Tocharian A' },
                    { from: 'Tocharian', to: 'Tocharian B' },
                    { from: 'Anatolian', to: 'Hittite' },
                    { from: 'Anatolian', to: 'Palaic' },
                    { from: 'Anatolian', to: 'Luwic' },
                    { from: 'Anatolian', to: 'Lydian' },
                    { from: 'Iranian', to: 'Balochi' },
                    { from: 'Iranian', to: 'Kurdish' },
                    { from: 'Iranian', to: 'Pashto' },
                    { from: 'Iranian', to: 'Sogdian' },
                    { from: 'Old Persian', to: 'Pahlavi' },
                    { from: 'Middle Persian', to: 'Persian' },
                    { from: 'Hellenic', to: 'Greek' },
                    { from: 'Dardic', to: 'Dard' },
                    { from: 'Sanskrit', to: 'Sindhi' },
                    { from: 'Sanskrit', to: 'Romani' },
                    { from: 'Sanskrit', to: 'Urdu' },
                    { from: 'Sanskrit', to: 'Hindi' },
                    { from: 'Sanskrit', to: 'Bihari' },
                    { from: 'Sanskrit', to: 'Assamese' },
                    { from: 'Sanskrit', to: 'Bengali' },
                    { from: 'Sanskrit', to: 'Marathi' },
                    { from: 'Sanskrit', to: 'Gujarati' },
                    { from: 'Sanskrit', to: 'Punjabi' },
                    { from: 'Sanskrit', to: 'Sinhalese' },
                    { from: 'Osco-Umbrian', to: 'Umbrian' },
                    { from: 'Osco-Umbrian', to: 'Oscan' },
                    { from: 'Latino-Faliscan', to: 'Faliscan' },
                    { from: 'Latin', to: 'Portugese' },
                    { from: 'Latin', to: 'Spanish' },
                    { from: 'Latin', to: 'French' },
                    { from: 'Latin', to: 'Romanian' },
                    { from: 'Latin', to: 'Italian' },
                    { from: 'Latin', to: 'Catalan' },
                    { from: 'Latin', to: 'Franco-Provençal' },
                    { from: 'Latin', to: 'Rhaeto-Romance' },
                    { from: 'Brythonic', to: 'Welsh' },
                    { from: 'Brythonic', to: 'Breton' },
                    { from: 'Brythonic', to: 'Cornish' },
                    { from: 'Brythonic', to: 'Cuymbric' },
                    { from: 'Goidelic', to: 'Modern Irish' },
                    { from: 'Goidelic', to: 'Scottish Gaelic' },
                    { from: 'Goidelic', to: 'Manx' },
                    { from: 'East Germanic', to: 'Gothic' },
                    { from: 'Middle Low German', to: 'Low German' },
                    { from: 'Middle High German', to: '(High) German' },
                    { from: 'Middle High German', to: 'Yiddish' },
                    { from: 'Middle English', to: 'English' },
                    { from: 'Middle Dutch', to: 'Hollandic' },
                    { from: 'Middle Dutch', to: 'Flemish' },
                    { from: 'Middle Dutch', to: 'Dutch' },
                    { from: 'Middle Dutch', to: 'Limburgish' },
                    { from: 'Middle Dutch', to: 'Brabantian' },
                    { from: 'Middle Dutch', to: 'Rhinelandic' },
                    { from: 'Old Frisian', to: 'Frisian' },
                    { from: 'Middle Danish', to: 'Danish' },
                    { from: 'Middle Swedish', to: 'Swedish' },
                    { from: 'Middle Norwegian', to: 'Norwegian' },
                    { from: 'Old Norse', to: 'Faroese' },
                    { from: 'Old Icelandic', to: 'Icelandic' },
                    { from: 'Baltic', to: 'Old Prussian' },
                    { from: 'Baltic', to: 'Lithuanian' },
                    { from: 'Baltic', to: 'Latvian' },
                    { from: 'West Slavic', to: 'Polish' },
                    { from: 'West Slavic', to: 'Slovak' },
                    { from: 'West Slavic', to: 'Czech' },
                    { from: 'West Slavic', to: 'Wendish' },
                    { from: 'East Slavic', to: 'Bulgarian' },
                    { from: 'East Slavic', to: 'Old Church Slavonic' },
                    { from: 'East Slavic', to: 'Macedonian' },
                    { from: 'East Slavic', to: 'Serbo-Croatian' },
                    { from: 'East Slavic', to: 'Slovene' },
                    { from: 'South Slavic', to: 'Russian' },
                    { from: 'South Slavic', to: 'Ukrainian' },
                    { from: 'South Slavic', to: 'Belarusian' },
                    { from: 'South Slavic', to: 'Rusyn' },
                ],
                nodes: [{ id: 'Balto-Slavic', color: 'blue', marker: { radius: 10 } }],
            },
        ],
    };

    return <Chart options={networkOptions as Highcharts.Options} />;
}

function Category(): JSX.Element {
    const typed_obra_artepublica: Record<string, Obra> = obra_artepublica;

    const category = 'plasticidade';

    const tipologias: string[] = Object.keys(typed_obra_artepublica)
        .filter((key) => typed_obra_artepublica[key].Eixo === category)
        .map((key) => typed_obra_artepublica[key].Tipologia ?? 'Desconhecida');
    const naturezas: string[] = Object.keys(typed_obra_artepublica)
        .filter((key) => typed_obra_artepublica[key].Eixo === category)
        .map((key) => typed_obra_artepublica[key].Natureza ?? 'Desconhecida');
    const artistas: string[] = Object.keys(typed_obra_artepublica)
        .filter((key) => typed_obra_artepublica[key].Eixo === category)
        .map<Artista[]>((key) => typed_obra_artepublica[key].Artistas ?? [{ Pessoa: { Nome: 'Desconhecida' } } as Artista])
        .reduce<string[]>((r, l) => {
            Array.prototype.push.apply(
                r,
                l.map<string>((artista) => artista.Pessoa?.Nome ?? 'Desconhecida'),
            );
            return r;
        }, []);

    const topologias_total: { nome: string; total: number }[] = tipologias
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
        .sort((a, b) => (a.total < b.total ? 1 : -1));

    const naturezas_total: { nome: string; total: number }[] = naturezas
        .reduce<{ nome: string; total: number }[]>(function (r, a) {
            const r_top = r.find((top) => top.nome === a);
            if (!r_top) {
                r.push({
                    nome: a,
                    total: naturezas.filter((top) => top === a).length,
                });
            }
            return r;
        }, [])
        .sort((a, b) => (a.total < b.total ? 1 : -1));

    const artistas_total: { nome: string; total: number; obras: string[] }[] = artistas
        .reduce<{ nome: string; total: number; obras: string[] }[]>(function (r, a) {
            const r_top = r.find((top) => top.nome === a);
            if (!r_top) {
                const obras: string[] = Object.keys(typed_obra_artepublica)
                    .filter(
                        (key) =>
                            (typed_obra_artepublica[key].Artistas != null &&
                                typed_obra_artepublica[key].Artistas?.find((artista) => artista.Pessoa?.Nome === a) != null) ||
                            (a === 'Desconhecida' && typed_obra_artepublica[key].Artistas == null),
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
        .sort((a, b) => (a.total < b.total ? 1 : -1));

    const style = styles();
    return (
        <SafeAreaView style={style.container}>
            <ScrollView style={{ width: '100%' }}>
                <Text>{category}</Text>
                <View style={{ height: 24 }} />

                <Table borderStyle={{ borderWidth: 2, borderColor: '#c8e1ff' }}>
                    <Row data={[<Text>Tipologia</Text>, <Text>Total</Text>]} style={style.head} />
                    <Rows data={topologias_total.map((top) => [<Text>{top.nome}</Text>, <Text>{top.total}</Text>])} />
                </Table>
                <View style={{ height: 24 }} />

                <Table borderStyle={{ borderWidth: 2, borderColor: '#c8e1ff' }}>
                    <Row data={[<Text>Natureza</Text>, <Text>Total</Text>]} style={style.head} />
                    <Rows data={naturezas_total.map((top) => [<Text>{top.nome}</Text>, <Text>{top.total}</Text>])} />
                </Table>
                <View style={{ height: 24 }} />

                <Table borderStyle={{ borderWidth: 2, borderColor: '#c8e1ff' }}>
                    <Row data={[<Text>Artista</Text>, <Text>Total</Text>, <Text>Obras</Text>]} style={style.head} />
                    <Rows data={artistas_total.map((top) => [<Text>{top.nome}</Text>, <Text>{top.total}</Text>, <Text>{top.obras.join(', ')}</Text>])} />
                </Table>
                <View style={{ height: 24 }} />

                <View>
                    <Line category={category} />
                </View>
                <View style={{ height: 24 }} />

                <View>
                    <Network category={category} />
                </View>
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

export default Category;
