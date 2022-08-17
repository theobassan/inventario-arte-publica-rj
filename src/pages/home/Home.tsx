import { ScrollView, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Table, Row, Rows } from 'react-native-table-component';

import { Text } from '@components';
import { Artista, Obra } from '@domain';
import * as obras from '@utils/data/obra';
import * as obra_artepublica from '@utils/data/obra_artepublica';

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

    const zonas_artepublica_group_total: { nome: string; total: number; obras: string[] }[] = zonas_artepublica
        .reduce<{ nome: string; total: number; obras: string[] }[]>(function (r, a) {
            const r_top = r.find((top) => top.nome === a);
            if (!r_top) {
                const obras: string[] = Object.keys(typed_obra_artepublica)
                    .filter(
                        (key) =>
                            (typed_obra_artepublica[key].Zona != null && typed_obra_artepublica[key].Zona === a) ||
                            (a === 'Desconhecida' && typed_obra_artepublica[key].Zona == null),
                    )
                    .map((key) => typed_obra_artepublica[key].Titulo ?? 'Desconhecida');

                r.push({
                    nome: a,
                    total: zonas_artepublica.filter((top) => top === a).length,
                    obras,
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
                            {topologias_group_total.length}</Text>,
                        ]}
                        style={style.head}
                    />
                    <Rows
                        data={topologias_group_total.map((top) => [
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
                            <Text>Obras</Text>,
                        ]}
                        style={style.head}
                    />
                    <Rows
                        data={zonas_artepublica_group_total.map((top) => [
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
