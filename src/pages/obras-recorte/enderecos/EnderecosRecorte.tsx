import { ScrollView, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Text } from '@base-components';
import { TabelaTipoObras } from '@componentes';
import { enderecosRecorte } from '@utils';

import styles from './styles';

function EnderecosRecorte(): JSX.Element {
    const style = styles();

    const enderecossRecorteOrdenadasPorNome = enderecosRecorte.sort((a, b) => a.nome.localeCompare(b.nome));
    const enderecosRecorteOrdenadasPorTotal = enderecosRecorte.sort((a, b) => (a.obras.length < b.obras.length ? 1 : -1));

    return (
        <SafeAreaView style={style.container}>
            <ScrollView style={{ width: '100%' }}>
                <Text>{enderecosRecorteOrdenadasPorTotal.map((endereco) => `${endereco.nome} (${endereco.obras.length})`).join(', ')}</Text>

                <View style={{ height: 24 }} />

                <TabelaTipoObras tipologia tipo="Endereço" tipos={enderecossRecorteOrdenadasPorNome} />
            </ScrollView>
        </SafeAreaView>
    );
}

export default EnderecosRecorte;
