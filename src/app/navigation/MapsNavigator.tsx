import { Entypo } from '@expo/vector-icons';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { DrawerActions } from '@react-navigation/native';
import { StyleSheet, TouchableOpacity } from 'react-native';

import { Text } from '@base-components';
import { Maps, MapAllVsPublicArt, MapPublicArtVsCategory } from '@pages';
import { Theme, useTheme } from '@utils';

const DrawerNavigator = createDrawerNavigator<MapsNavigatorParamsList>();

export type MapsNavigatorParamsList = {
    Home: undefined;

    AllVsPublicArt: undefined;

    PublicArtVsCategory: undefined;
};

type MapsNavigatorProps = {
    testOnly_initialRouteName?: keyof MapsNavigatorParamsList;
};

export function MapsNavigator({ testOnly_initialRouteName }: MapsNavigatorProps): JSX.Element {
    const { theme } = useTheme();

    const style = styles(theme);

    return (
        <DrawerNavigator.Navigator
            initialRouteName={testOnly_initialRouteName ?? 'Home'}
            screenOptions={{
                drawerPosition: 'left',
                drawerActiveTintColor: theme.navigation.active,
                drawerInactiveTintColor: theme.navigation.inactive,
            }}
        >
            <DrawerNavigator.Screen
                name="Home"
                component={Maps}
                options={({ navigation }) => ({
                    headerShown: true,
                    headerTitle: () => <Text style={style.title}>Maps Home</Text>,
                    headerLeft: () => (
                        <TouchableOpacity testID="home-menu" style={{ paddingLeft: 16 }} onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
                            <Entypo name="menu" size={24} color={theme.text.textColor} />
                        </TouchableOpacity>
                    ),
                })}
            />
            <DrawerNavigator.Screen
                name="AllVsPublicArt"
                component={MapAllVsPublicArt}
                options={({ navigation }) => ({
                    title: 'Todas as Obras x Arte Pública',
                    headerShown: true,
                    headerTitle: () => <Text style={style.title}>Todas as Obras x Arte Pública</Text>,
                    headerLeft: () => (
                        <TouchableOpacity testID="todas-obras-menu" style={{ paddingLeft: 16 }} onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
                            <Entypo name="menu" size={24} color={theme.text.textColor} />
                        </TouchableOpacity>
                    ),
                })}
            />
            <DrawerNavigator.Screen
                name="PublicArtVsCategory"
                component={MapPublicArtVsCategory}
                options={({ navigation }) => ({
                    title: 'Arte Pública - Eixos',
                    headerShown: true,
                    headerTitle: () => <Text style={style.title}>Arte Pública - Eixos</Text>,
                    headerLeft: () => (
                        <TouchableOpacity testID="todas-obras-menu" style={{ paddingLeft: 16 }} onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
                            <Entypo name="menu" size={24} color={theme.text.textColor} />
                        </TouchableOpacity>
                    ),
                })}
            />
        </DrawerNavigator.Navigator>
    );
}

function styles(theme: Theme) {
    return StyleSheet.create({
        title: {
            fontSize: theme.header.fontSize,
            lineHeight: theme.header.lineHeight,
        },
    });
}
