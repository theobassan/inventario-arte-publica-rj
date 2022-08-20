import { ScrollView, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Text } from '@base-components';
import { TabelaTipoObras } from '@componentes';
import { statusRecorte } from '@utils';

import styles from './styles';

function StatusRecorte(): JSX.Element {
    const style = styles();

    const statusRecorteOrdenadasPorNome = statusRecorte.sort((a, b) => a.nome.localeCompare(b.nome));
    const statusRecorteOrdenadasPorTotal = statusRecorte.sort((a, b) => (a.obras.length < b.obras.length ? 1 : -1));

    return (
        <SafeAreaView style={style.container}>
            <ScrollView style={{ width: '100%' }}>
                <Text>{statusRecorteOrdenadasPorTotal.map((status) => `${status.nome} (${status.obras.length})`).join(', ')}</Text>

                <View style={{ height: 24 }} />

                <TabelaTipoObras tipologia tipo="Status" tipos={statusRecorteOrdenadasPorNome} />
            </ScrollView>
        </SafeAreaView>
    );
}

export default StatusRecorte;
