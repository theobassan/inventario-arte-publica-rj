import { ScrollView, View } from 'react-native';

import { Text } from '@base-components';
import { obrasRecorte } from '@utils';

import styles from './styles';

function ObrasRecorte(): JSX.Element {
    const style = styles();

    return (
        <ScrollView style={style.container}>
            <Text>Total de Obras levantadas: {obrasRecorte.length}</Text>
            <View style={{ height: 24 }} />
        </ScrollView>
    );
}

export default ObrasRecorte;
