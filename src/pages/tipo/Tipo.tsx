import { ScrollView, View } from 'react-native';

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
        <View style={style.container}>
            <ScrollView style={{ width: '100%' }}>
                <Text>{tiposOrdenadoPorNome.map((tipo) => `${tipo.nome} (${tipo.obras.length})`).join(', ')}</Text>
            </ScrollView>
        </View>
    );
}

export default Tipo;
