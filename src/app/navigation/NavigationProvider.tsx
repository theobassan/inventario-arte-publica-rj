import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';

import { useTheme } from '@utils';

import NavigationContainer from './NavigationContainer.wip';
import { RootNavigator } from './RootNavigator';

function NavigationProvider(): JSX.Element {
    const { theme } = useTheme();

    return (
        <View style={{ flex: 1, overflow: 'hidden', backgroundColor: theme.background }}>
            <StatusBar translucent backgroundColor={theme.background} />
            <NavigationContainer>
                <RootNavigator />
            </NavigationContainer>
        </View>
    );
}

export default NavigationProvider;
