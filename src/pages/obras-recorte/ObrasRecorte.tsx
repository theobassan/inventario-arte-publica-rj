import { ScrollView, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Text } from '@base-components';
import { obrasRecorte } from '@utils';

import styles from './styles';

function ObrasRecorte(): JSX.Element {
    const style = styles();

    return (
        <SafeAreaView style={style.container}>
            <ScrollView style={{ width: '100%' }}>
                <Text>Total de Obras levantadas: {obrasRecorte.length}</Text>
                <View style={{ height: 24 }} />
            </ScrollView>
        </SafeAreaView>
    );
}

export default ObrasRecorte;
