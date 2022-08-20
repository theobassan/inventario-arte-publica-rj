import { ScrollView, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Text } from '@base-components';
import { TabelaTipoObras } from '@componentes';
import { enderecos } from '@utils';

import styles from './styles';

function Enderecos(): JSX.Element {
    const style = styles();

    const enderecossOrdenadasPorNome = enderecos.sort((a, b) => a.nome.localeCompare(b.nome));
    const enderecosOrdenadasPorTotal = enderecos.sort((a, b) => (a.obras.length < b.obras.length ? 1 : -1));

    return (
        <SafeAreaView style={style.container}>
            <ScrollView style={{ width: '100%' }}>
                <Text>{enderecosOrdenadasPorTotal.map((endereco) => `${endereco.nome} (${endereco.obras.length})`).join(', ')}</Text>

                <View style={{ height: 24 }} />

                <TabelaTipoObras tipologia tipo="Endereço" tipos={enderecossOrdenadasPorNome} />
            </ScrollView>
        </SafeAreaView>
    );
}

export default Enderecos;
