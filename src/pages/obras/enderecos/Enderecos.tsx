import { ScrollView, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { TabelaTipoObras } from '@componentes';
import { enderecos } from '@utils';

import styles from './styles';

function Enderecos(): JSX.Element {
    const style = styles();

    const enderecosOrdenadasPorTotal = enderecos.sort((a, b) => (a.obras.length < b.obras.length ? 1 : -1));

    return (
        <SafeAreaView style={style.container}>
            <ScrollView style={{ width: '100%' }}>
                <TabelaTipoObras tipologia tipo="Endereço" tipos={enderecosOrdenadasPorTotal} />
                <View style={{ height: 24 }} />
            </ScrollView>
        </SafeAreaView>
    );
}

export default Enderecos;
