import { ScrollView, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Text } from '@base-components';
import { TabelaTipoObras } from '@componentes';
import { naturezasRecorte } from '@utils';

import styles from './styles';

function NaturezasRecorte(): JSX.Element {
    const style = styles();

    const naturezasRecorteOrdenadasPorNome = naturezasRecorte.sort((a, b) => a.nome.localeCompare(b.nome));
    const naturezasRecorteOrdenadasPorTotal = naturezasRecorte.sort((a, b) => (a.obras.length < b.obras.length ? 1 : -1));

    return (
        <SafeAreaView style={style.container}>
            <ScrollView style={{ width: '100%' }}>
                <Text>{naturezasRecorteOrdenadasPorTotal.map((natureza) => `${natureza.nome} (${natureza.obras.length})`).join(', ')}</Text>

                <View style={{ height: 24 }} />

                <TabelaTipoObras tipologia tipo="Natureza" tipos={naturezasRecorteOrdenadasPorNome} />
            </ScrollView>
        </SafeAreaView>
    );
}

export default NaturezasRecorte;
