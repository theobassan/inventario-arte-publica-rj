import { ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Text } from '@base-components';
import { Obra } from '@domain';

import styles from './styles';

type TipoProps = {
    tipos: { nome: string; obras: Obra[] }[];
    tipologia?: boolean;
};

function Tipo({ tipos }: TipoProps): JSX.Element {
    const style = styles();

    const tiposOrdenadoPorNome = [...tipos].sort((a, b) => a.nome.localeCompare(b.nome));

    return (
        <SafeAreaView style={style.container}>
            <ScrollView style={{ width: '100%' }}>
                <Text>{tiposOrdenadoPorNome.map((tipo) => `${tipo.nome} (${tipo.obras.length})`).join(', ')}</Text>
            </ScrollView>
        </SafeAreaView>
    );
}

export default Tipo;
