import { AntDesign, Feather } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigatorScreenParams } from '@react-navigation/native';

import { Home } from '@pages';
import { useTheme } from '@utils';

import { ChartsNavigator, ChartsNavigatorParamsList } from './ChartsNavigator';
import { MapsNavigator, MapsNavigatorParamsList } from './MapsNavigator';

const BottomTab = createBottomTabNavigator<BottomTabNavigatorParamList>();

export type BottomTabNavigatorParamList = {
    Home: undefined;
    Maps: NavigatorScreenParams<MapsNavigatorParamsList>;
    Charts: NavigatorScreenParams<ChartsNavigatorParamsList>;
};

export function BottomTabNavigator(): JSX.Element {
    const { theme } = useTheme();

    return (
        <BottomTab.Navigator
            screenOptions={() => ({
                tabBarActiveTintColor: theme.navigation.active,
                tabBarInactiveTintColor: theme.navigation.inactive,
            })}
        >
            <BottomTab.Screen
                name="Home"
                component={Home}
                options={{
                    title: 'Home',
                    headerShown: false,
                    tabBarIcon: ({ color }) => {
                        return <AntDesign name="home" size={24} color={color} />;
                    },
                }}
            />
            <BottomTab.Screen
                name="Maps"
                component={MapsNavigator}
                options={{
                    title: 'Maps',
                    headerShown: false,
                    tabBarIcon: ({ color }) => {
                        return <Feather name="map-pin" size={24} color={color} />;
                    },
                }}
            />
            <BottomTab.Screen
                name="Charts"
                component={ChartsNavigator}
                options={{
                    title: 'Charts',
                    headerShown: false,
                    tabBarIcon: ({ color }) => {
                        return <AntDesign name="barschart" size={24} color={color} />;
                    },
                }}
            />
        </BottomTab.Navigator>
    );
}
