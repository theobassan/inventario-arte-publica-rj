import { ScrollView } from 'react-native';

import { Text } from '@base-components';
import { obras } from '@utils';

import styles from './styles';

function Obras(): JSX.Element {
    const style = styles();

    return (
        <ScrollView style={style.container}>
            <Text>Total de Obras levantadas: {obras.length}</Text>
        </ScrollView>
    );
}

export default Obras;
