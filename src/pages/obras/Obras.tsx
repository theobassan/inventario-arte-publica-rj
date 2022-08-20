import { ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Text } from '@base-components';
import { obras } from '@utils';

import styles from './styles';

function Obras(): JSX.Element {
    const style = styles();

    return (
        <SafeAreaView style={style.container}>
            <ScrollView style={{ width: '100%' }}>
                <Text>Total de Obras levantadas: {obras.length}</Text>
            </ScrollView>
        </SafeAreaView>
    );
}

export default Obras;
