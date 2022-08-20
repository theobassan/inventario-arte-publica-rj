import { ScrollView, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { TabelaTipoObras } from '@componentes';
import { naturezasRecorte } from '@utils';

import styles from './styles';

function NaturezasRecorte(): JSX.Element {
    const style = styles();

    const naturezasRecorteOrdenadasPorNome = naturezasRecorte.sort((a, b) => a.nome.localeCompare(b.nome));

    return (
        <SafeAreaView style={style.container}>
            <ScrollView style={{ width: '100%' }}>
                <TabelaTipoObras tipo="Natureza" tipos={naturezasRecorteOrdenadasPorNome} />
                <View style={{ height: 24 }} />
            </ScrollView>
        </SafeAreaView>
    );
}

export default NaturezasRecorte;
