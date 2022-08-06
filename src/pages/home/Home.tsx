import { StyleSheet, View } from 'react-native';

import { Text } from '@components';

function Home(): JSX.Element {
    return (
        <View style={styles.container}>
            <Text>Home</Text>
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
export default Home;
