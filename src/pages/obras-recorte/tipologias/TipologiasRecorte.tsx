import { ScrollView, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { TabelaTipologia } from '@componentes';
import { tipologiasRecorte } from '@utils';

import styles from './styles';

function ObrasRecorte(): JSX.Element {
    const style = styles();

    const tipologiasRecorteOrdenadasPorNome = tipologiasRecorte.sort((a, b) => a.nome.localeCompare(b.nome));

    return (
        <SafeAreaView style={style.container}>
            <ScrollView style={{ width: '100%' }}>
                <TabelaTipologia tipologias={tipologiasRecorteOrdenadasPorNome} />
                <View style={{ height: 24 }} />
            </ScrollView>
        </SafeAreaView>
    );
}

export default ObrasRecorte;
