import { StyleSheet, View } from 'react-native';

import { Text } from '@components';

function Maps(): JSX.Element {
    return (
        <View style={styles.container}>
            <Text>Maps</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
export default Maps;
