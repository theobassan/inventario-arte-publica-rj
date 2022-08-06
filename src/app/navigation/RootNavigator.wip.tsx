import { NavigatorScreenParams } from '@react-navigation/native';
import { createStackNavigator, HeaderStyleInterpolators } from '@react-navigation/stack';

import { NotFound, NoMatch } from '@pages';

import { BottomTabNavigator, BottomTabNavigatorParamList } from './BottomTabNavigator.wip';

export type RootNavigatorParamList = {
    BottomTab: NavigatorScreenParams<BottomTabNavigatorParamList>;
    NotFound: undefined;
    NoMatch: undefined;
};

const StackNavigator = createStackNavigator<RootNavigatorParamList>();

export function RootNavigator(): JSX.Element {
    return (
        <StackNavigator.Navigator
            screenOptions={{
                headerStyleInterpolator: HeaderStyleInterpolators.forUIKit,
            }}
        >
            <StackNavigator.Screen name="BottomTab" component={BottomTabNavigator} options={{ headerShown: false }} />
            <StackNavigator.Screen name="NotFound" component={NotFound} options={{ headerShown: false }} />
            <StackNavigator.Screen name="NoMatch" component={NoMatch} options={{ headerShown: false }} />
        </StackNavigator.Navigator>
    );
}
