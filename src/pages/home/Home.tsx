import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

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
        .sort((a, b) => (a.total > b.total ? 1 : 0));

    return (
        <SafeAreaView style={styles.container}>
            <Text>Bem vinda ao inventário de arte pública do Rio de Janeiro</Text>
            <Text>Total de Obras levantadas: {Object.keys(obras).length + Object.keys(obra_artepublica).length}</Text>
            <Text>Tipologia: {topologias_group.map((top) => `${top.nome}: ${top.total}`).join(', ')}</Text>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default Home;
