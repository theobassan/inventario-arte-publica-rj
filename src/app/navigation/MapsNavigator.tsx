import { createStackNavigator } from '@react-navigation/stack';

import { Maps } from '@pages';

const StackNavigator = createStackNavigator<MapsNavigatorParamsList>();

export type MapsNavigatorParamsList = {
    Home: undefined;
};

export function MapsNavigator(): JSX.Element {
    return (
        <StackNavigator.Navigator initialRouteName="Home">
            <StackNavigator.Screen name="Home" component={Maps} options={{ headerShown: false }} />
        </StackNavigator.Navigator>
    );
}
