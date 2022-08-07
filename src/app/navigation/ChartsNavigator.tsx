import { createStackNavigator } from '@react-navigation/stack';

import { Charts } from '@pages';

const StackNavigator = createStackNavigator<ChartsNavigatorParamsList>();

export type ChartsNavigatorParamsList = {
    Home: undefined;
};

export function ChartsNavigator(): JSX.Element {
    return (
        <StackNavigator.Navigator initialRouteName="Home">
            <StackNavigator.Screen name="Home" component={Charts} options={{ headerShown: false }} />
        </StackNavigator.Navigator>
    );
}
