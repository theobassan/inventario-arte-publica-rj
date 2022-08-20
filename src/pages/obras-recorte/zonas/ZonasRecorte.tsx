import { ScrollView, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { TabelaTipoObras } from '@componentes';
import { zonasRecorte } from '@utils';

import styles from './styles';

function ZonasRecorte(): JSX.Element {
    const style = styles();

    const zonasRecorteOrdenadasPorNome = zonasRecorte.sort((a, b) => a.nome.localeCompare(b.nome));

    return (
        <SafeAreaView style={style.container}>
            <ScrollView style={{ width: '100%' }}>
                <TabelaTipoObras tipologia tipo="Zona" tipos={zonasRecorteOrdenadasPorNome} />
                <View style={{ height: 24 }} />
            </ScrollView>
        </SafeAreaView>
    );
}

export default ZonasRecorte;
