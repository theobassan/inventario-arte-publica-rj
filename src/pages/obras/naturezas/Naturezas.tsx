import { ScrollView, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Text } from '@base-components';
import { TabelaTipoObras } from '@componentes';
import { naturezas } from '@utils';

import styles from './styles';

function Naturezas(): JSX.Element {
    const style = styles();

    const naturezasOrdenadasPorNome = naturezas.sort((a, b) => a.nome.localeCompare(b.nome));
    const naturezasOrdenadasPorTotal = naturezas.sort((a, b) => (a.obras.length < b.obras.length ? 1 : -1));

    return (
        <SafeAreaView style={style.container}>
            <ScrollView style={{ width: '100%' }}>
                <Text>{naturezasOrdenadasPorTotal.map((natureza) => `${natureza.nome} (${natureza.obras.length})`).join(', ')}</Text>

                <View style={{ height: 24 }} />

                <TabelaTipoObras tipologia tipo="Natureza" tipos={naturezasOrdenadasPorNome} />
            </ScrollView>
        </SafeAreaView>
    );
}

export default Naturezas;
