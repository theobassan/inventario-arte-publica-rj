import { ScrollView, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Table, Row, Rows } from 'react-native-table-component';

import { Text } from '@components';
import { Obra } from '@domain';
import * as analisys_list_utils from '@utils/data/analisys_list_utils';
import * as obras from '@utils/data/obra';
import * as obra_artepublica from '@utils/data/obra_artepublica';

function Test(): JSX.Element[] {
    const result: JSX.Element[] = [];

    const style = styles();

    for (let index = 1500; index < 2030; index = index + 10) {
        const obras_decada: Obra[] = analisys_list_utils[`all${index}`];

        if (obras_decada.length > 0) {
            const tipologias_obras_decada: string[] = obras_decada.map((obra) => obra.Tipologia ?? 'Desconhecida');
            const naturezas_obras_decada: string[] = obras_decada.map((obra) => obra.Natureza ?? 'Desconhecida');
            const zonas_obras_decada: string[] = obras_decada.map((obra) => obra.Zona ?? 'Desconhecida');

            const tipologias_obras_decada_total: { nome: string; total: number }[] = tipologias_obras_decada
                .reduce<{ nome: string; total: number }[]>(function (r, a) {
                    const r_top = r.find((top) => top.nome === a);
                    if (!r_top) {
                        r.push({
                            nome: a,
                            total: tipologias_obras_decada.filter((top) => top === a).length,
                        });
                    }
                    return r;
                }, [])
                .sort((a, b) => (a.total < b.total ? 1 : -1));

            const naturezas_obras_decada_total: { nome: string; total: number }[] = naturezas_obras_decada
                .reduce<{ nome: string; total: number }[]>(function (r, a) {
                    const r_top = r.find((top) => top.nome === a);
                    if (!r_top) {
                        r.push({
                            nome: a,
                            total: naturezas_obras_decada.filter((top) => top === a).length,
                        });
                    }
                    return r;
                }, [])
                .sort((a, b) => (a.total < b.total ? 1 : -1));

            const zonas_obras_decada_total: { nome: string; total: number }[] = zonas_obras_decada
                .reduce<{ nome: string; total: number }[]>(function (r, a) {
                    const r_top = r.find((top) => top.nome === a);
                    if (!r_top) {
                        r.push({
                            nome: a,
                            total: zonas_obras_decada.filter((top) => top === a).length,
                        });
                    }
                    return r;
                }, [])
                .sort((a, b) => (a.total < b.total ? 1 : -1));

            result.push(
                <View key={index}>
                    <Text>
                        {index}: {obras_decada.length}
                    </Text>
                    <View style={{ height: 24 }} />

                    <Table borderStyle={{ borderWidth: 2, borderColor: '#c8e1ff' }}>
                        <Row data={[<Text>Tipologia</Text>, <Text>Total</Text>]} style={style.head} />
                        <Rows data={tipologias_obras_decada_total.map((top) => [<Text>{top.nome}</Text>, <Text>{top.total}</Text>])} />
                    </Table>
                    <View style={{ height: 24 }} />

                    <Table borderStyle={{ borderWidth: 2, borderColor: '#c8e1ff' }}>
                        <Row data={[<Text>Natureza</Text>, <Text>Total</Text>]} style={style.head} />
                        <Rows data={naturezas_obras_decada_total.map((top) => [<Text>{top.nome}</Text>, <Text>{top.total}</Text>])} />
                    </Table>
                    <View style={{ height: 24 }} />

                    <Table borderStyle={{ borderWidth: 2, borderColor: '#c8e1ff' }}>
                        <Row data={[<Text>Zona</Text>, <Text>Total</Text>]} style={style.head} />
                        <Rows data={zonas_obras_decada_total.map((top) => [<Text>{top.nome}</Text>, <Text>{top.total}</Text>])} />
                    </Table>
                    <View style={{ height: 24 }} />
                </View>,
            );
        }
    }

    return result;
}

function Home(): JSX.Element {
    const style = styles();

    const tipologias: string[] = Object.keys(obras).map((key) => obras[key].TipologiaObra ?? 'Desconhecida');
    const tipologias_artepublica: string[] = Object.keys(obra_artepublica).map((key) => obra_artepublica[key].Tipologia ?? 'Desconhecida');
    const naturezas_artepublica: string[] = Object.keys(obra_artepublica).map((key) => obra_artepublica[key].Natureza ?? 'Desconhecida');
    const zonas_artepublica: string[] = Object.keys(obra_artepublica).map((key) => obra_artepublica[key].Zona ?? 'Desconhecida');

    const all_topologias: string[] = [];
    Array.prototype.push.apply(all_topologias, tipologias);
    Array.prototype.push.apply(all_topologias, tipologias_artepublica);

    const topologias_group_total: { nome: string; total: number }[] = all_topologias
        .reduce<{ nome: string; total: number }[]>(function (r, a) {
            const r_top = r.find((top) => top.nome === a);
            if (!r_top) {
                r.push({
                    nome: a,
                    total: all_topologias.filter((top) => top === a).length,
                });
            }
            return r;
        }, [])
        .sort((a, b) => (a.total < b.total ? 1 : -1));

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
        .sort((a, b) => (a.total < b.total ? 1 : -1));

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
        .sort((a, b) => (a.total < b.total ? 1 : -1));

    const zonas_artepublica_group_total: { nome: string; total: number }[] = zonas_artepublica
        .reduce<{ nome: string; total: number }[]>(function (r, a) {
            const r_top = r.find((top) => top.nome === a);
            if (!r_top) {
                r.push({
                    nome: a,
                    total: zonas_artepublica.filter((top) => top === a).length,
                });
            }
            return r;
        }, [])
        .sort((a, b) => (a.total < b.total ? 1 : -1));

    return (
        <SafeAreaView style={style.container}>
            <ScrollView style={{ width: '100%' }}>
                <Text>Bem vinda ao inventário de arte pública do Rio de Janeiro</Text>
                <View style={{ height: 24 }} />

                <Text>Total de Obras levantadas: {Object.keys(obras).length + Object.keys(obra_artepublica).length}</Text>
                <View style={{ height: 24 }} />

                <Table borderStyle={{ borderWidth: 2, borderColor: '#c8e1ff' }}>
                    <Row data={[<Text>Tipologia</Text>, <Text>Total</Text>]} style={style.head} />
                    <Rows data={topologias_group_total.map((top) => [<Text>{top.nome}</Text>, <Text>{top.total}</Text>])} />
                </Table>
                <View style={{ height: 24 }} />

                <Text>Total Arte pública: {Object.keys(obra_artepublica).length}</Text>
                <View style={{ height: 24 }} />

                <Table borderStyle={{ borderWidth: 2, borderColor: '#c8e1ff' }}>
                    <Row data={[<Text>Tipologia</Text>, <Text>Total</Text>]} style={style.head} />
                    <Rows data={tipologias_artepublica_group_total.map((top) => [<Text>{top.nome}</Text>, <Text>{top.total}</Text>])} />
                </Table>
                <View style={{ height: 24 }} />

                <Table borderStyle={{ borderWidth: 2, borderColor: '#c8e1ff' }}>
                    <Row data={[<Text>Natureza</Text>, <Text>Total</Text>]} style={style.head} />
                    <Rows data={naturezas_artepublica_group_total.map((top) => [<Text>{top.nome}</Text>, <Text>{top.total}</Text>])} />
                </Table>
                <View style={{ height: 24 }} />

                <Table borderStyle={{ borderWidth: 2, borderColor: '#c8e1ff' }}>
                    <Row data={[<Text>Zona</Text>, <Text>Total</Text>]} style={style.head} />
                    <Rows data={zonas_artepublica_group_total.map((top) => [<Text>{top.nome}</Text>, <Text>{top.total}</Text>])} />
                </Table>
                <View style={{ height: 24 }} />

                {Test()}
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
