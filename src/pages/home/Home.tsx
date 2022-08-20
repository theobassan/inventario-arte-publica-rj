import { ScrollView, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Text } from '@base-components';

function Home(): JSX.Element {
    const style = styles();

    return (
        <SafeAreaView style={style.container}>
            <ScrollView style={{ width: '100%' }}>
                <Text>Home</Text>
            </ScrollView>
        </SafeAreaView>
    );
}

function styles() {
    return StyleSheet.create({
        container: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
        },
        head: { height: 40 },
    });
}

export default Home;
