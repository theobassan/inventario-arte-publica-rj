import { ScrollView, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Text } from '@base-components';
import { TabelaTipoObras } from '@componentes';
import { zonas } from '@utils';

import styles from './styles';

function Zonas(): JSX.Element {
    const style = styles();

    const zonasOrdenadasPorNome = zonas.sort((a, b) => a.nome.localeCompare(b.nome));
    const zonasOrdenadasPorTotal = zonas.sort((a, b) => (a.obras.length < b.obras.length ? 1 : -1));

    return (
        <SafeAreaView style={style.container}>
            <ScrollView style={{ width: '100%' }}>
                <Text>{zonasOrdenadasPorTotal.map((zona) => `${zona.nome} (${zona.obras.length})`).join(', ')}</Text>

                <View style={{ height: 24 }} />

                <TabelaTipoObras tipologia tipo="Zona" tipos={zonasOrdenadasPorNome} />
            </ScrollView>
        </SafeAreaView>
    );
}

export default Zonas;
