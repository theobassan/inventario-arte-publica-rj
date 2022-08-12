import { ScrollView, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Table, Row, Rows } from 'react-native-table-component';

import { Text } from '@components';
import * as obras from '@utils/data/obra';
import * as obra_artepublica from '@utils/data/obra_artepublica';

function Home(): JSX.Element {
    const tipologias: string[] = Object.keys(obras).map((key) => obras[key].TipologiaObra ?? 'Desconhecida');
    const tipologias_artepublica: string[] = Object.keys(obra_artepublica).map((key) => obra_artepublica[key].Tipologia ?? 'Desconhecida');

    const all_topologias: string[] = [];
    Array.prototype.push.apply(all_topologias, tipologias);
    Array.prototype.push.apply(all_topologias, tipologias_artepublica);

    const topologias_group: { nome: string; total: number }[] = all_topologias
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

    const tipologias_artepublica_group: { nome: string; total: number }[] = tipologias_artepublica
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

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={{ width: '100%' }}>
                <Text>Bem vinda ao inventário de arte pública do Rio de Janeiro</Text>
                <View style={{ height: 24 }} />

                <Text>Total de Obras levantadas: {Object.keys(obras).length + Object.keys(obra_artepublica).length}</Text>
                <View style={{ height: 24 }} />

                <Table borderStyle={{ borderWidth: 2, borderColor: '#c8e1ff' }}>
                    <Row data={['Tipologia', 'Total']} style={styles.head} textStyle={styles.text} />
                    <Rows data={topologias_group.map((top) => [top.nome, top.total])} textStyle={styles.text} />
                </Table>
                <View style={{ height: 24 }} />

                <Text>Total Arte pública: {Object.keys(obra_artepublica).length}</Text>
                <View style={{ height: 24 }} />

                <Table borderStyle={{ borderWidth: 2, borderColor: '#c8e1ff' }}>
                    <Row data={['Tipologia', 'Total']} style={styles.head} textStyle={styles.text} />
                    <Rows data={tipologias_artepublica_group.map((top) => [top.nome, top.total])} textStyle={styles.text} />
                </Table>
                <View style={{ height: 24 }} />
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    head: { height: 40 },
    text: { margin: 6, color: 'white' },
});

export default Home;
