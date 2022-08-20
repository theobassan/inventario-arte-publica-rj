import { ScrollView, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Text } from '@base-components';
import { TabelaTipoObras } from '@componentes';
import { tipologias } from '@utils';

import styles from './styles';

function Tipologias(): JSX.Element {
    const style = styles();

    const tipologiasOrdenadasPorNome = tipologias.sort((a, b) => a.nome.localeCompare(b.nome));
    const tipologiasOrdenadasPorTotal = tipologias.sort((a, b) => (a.obras.length < b.obras.length ? 1 : -1));

    return (
        <SafeAreaView style={style.container}>
            <ScrollView style={{ width: '100%' }}>
                <Text>{tipologiasOrdenadasPorTotal.map((tipologia) => `${tipologia.nome} (${tipologia.obras.length})`).join(', ')}</Text>

                <View style={{ height: 24 }} />

                <TabelaTipoObras tipo="Tipologia" tipos={tipologiasOrdenadasPorNome} />
            </ScrollView>
        </SafeAreaView>
    );
}

export default Tipologias;
