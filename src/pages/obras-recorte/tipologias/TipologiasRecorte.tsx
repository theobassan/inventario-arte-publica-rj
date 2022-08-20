import { ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { TabelaTipoObras } from '@componentes';
import { tipologiasRecorte } from '@utils';

import styles from './styles';

function TipologiasRecorte(): JSX.Element {
    const style = styles();

    const tipologiasRecorteOrdenadasPorNome = tipologiasRecorte.sort((a, b) => a.nome.localeCompare(b.nome));

    return (
        <SafeAreaView style={style.container}>
            <ScrollView style={{ width: '100%' }}>
                <TabelaTipoObras tipo="Tipologia" tipos={tipologiasRecorteOrdenadasPorNome} />
            </ScrollView>
        </SafeAreaView>
    );
}

export default TipologiasRecorte;
