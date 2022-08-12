import { AntDesign, Feather, MaterialIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigatorScreenParams } from '@react-navigation/native';
import { StyleSheet } from 'react-native';

import { Home, Category } from '@pages';
import { Theme, useTheme } from '@utils';

import { ChartsNavigator, ChartsNavigatorParamsList } from './ChartsNavigator';
import { MapsNavigator, MapsNavigatorParamsList } from './MapsNavigator';

const BottomTab = createBottomTabNavigator<BottomMenuNavigatorParamList>();

export type BottomMenuNavigatorParamList = {
    Home: undefined;
    Maps: NavigatorScreenParams<MapsNavigatorParamsList>;
    Charts: NavigatorScreenParams<ChartsNavigatorParamsList>;
    Category: undefined;
};

export function BottomMenuNavigator(): JSX.Element {
    const { theme } = useTheme();

    const style = styles(theme);

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
                    tabBarLabelStyle: style.tabBarLabel,
                }}
            />
            <BottomTab.Screen
                name="Maps"
                component={MapsNavigator}
                options={{
                    title: 'Mapas',
                    headerShown: false,
                    tabBarIcon: ({ color }) => {
                        return <Feather name="map-pin" size={24} color={color} />;
                    },
                    tabBarLabelStyle: style.tabBarLabel,
                }}
            />
            <BottomTab.Screen
                name="Charts"
                component={ChartsNavigator}
                options={{
                    title: 'Gráficos',
                    headerShown: false,
                    tabBarIcon: ({ color }) => {
                        return <AntDesign name="barschart" size={24} color={color} />;
                    },
                    tabBarLabelStyle: style.tabBarLabel,
                }}
            />
            <BottomTab.Screen
                name="Category"
                component={Category}
                options={{
                    title: 'Eixos',
                    headerShown: false,
                    tabBarIcon: ({ color }) => {
                        return <MaterialIcons name="category" size={24} color={color} />;
                    },
                    tabBarLabelStyle: style.tabBarLabel,
                }}
            />
        </BottomTab.Navigator>
    );
}

function styles(theme: Theme) {
    return StyleSheet.create({
        tabBarLabel: {
            fontSize: theme.bottomTab.fontSize,
            lineHeight: theme.bottomTab.lineHeight,
        },
    });
}
