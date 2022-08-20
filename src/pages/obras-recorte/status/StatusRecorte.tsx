import { ScrollView, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { TabelaTipoObras } from '@componentes';
import { statusRecorte } from '@utils';

import styles from './styles';

function StatusRecorte(): JSX.Element {
    const style = styles();

    const statusRecorteOrdenadasPorNome = statusRecorte.sort((a, b) => a.nome.localeCompare(b.nome));

    return (
        <SafeAreaView style={style.container}>
            <ScrollView style={{ width: '100%' }}>
                <TabelaTipoObras tipologia tipo="Status" tipos={statusRecorteOrdenadasPorNome} />
                <View style={{ height: 24 }} />
            </ScrollView>
        </SafeAreaView>
    );
}

export default StatusRecorte;
