import { Entypo } from '@expo/vector-icons';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { DrawerActions } from '@react-navigation/native';
import { StyleSheet, TouchableOpacity } from 'react-native';

import { Text } from '@base-components';
import { ObrasRecorte, TipologiasRecorte, AutoresRecorte, NaturezasRecorte, ZonasRecorte } from '@pages';
import { Theme, useTheme } from '@utils';

const DrawerNavigator = createDrawerNavigator<ObrasRecorteNavigatorParamsList>();

export type ObrasRecorteNavigatorParamsList = {
    Home: undefined;
    Tipologias: undefined;
    Autores: undefined;
    Naturezas: undefined;
    Zonas: undefined;
};

type ObrasRecorteNavigatorProps = {
    testOnly_initialRouteName?: keyof ObrasRecorteNavigatorParamsList;
};

export function ObrasRecorteNavigator({ testOnly_initialRouteName }: ObrasRecorteNavigatorProps): JSX.Element {
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
                component={ObrasRecorte}
                options={({ navigation }) => ({
                    title: 'Obras Recorte',
                    headerShown: true,
                    headerTitle: () => <Text style={style.title}>Obras Recorte</Text>,
                    headerLeft: () => (
                        <TouchableOpacity testID="home-menu" style={{ paddingLeft: 16 }} onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
                            <Entypo name="menu" size={24} color={theme.text.textColor} />
                        </TouchableOpacity>
                    ),
                })}
            />
            <DrawerNavigator.Screen
                name="Tipologias"
                component={TipologiasRecorte}
                options={({ navigation }) => ({
                    title: 'Tipologias Recorte',
                    headerShown: true,
                    headerTitle: () => <Text style={style.title}>Tipologias Recorte</Text>,
                    headerLeft: () => (
                        <TouchableOpacity testID="todas-obras-menu" style={{ paddingLeft: 16 }} onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
                            <Entypo name="menu" size={24} color={theme.text.textColor} />
                        </TouchableOpacity>
                    ),
                })}
            />
            <DrawerNavigator.Screen
                name="Autores"
                component={AutoresRecorte}
                options={({ navigation }) => ({
                    title: 'Autores Recorte',
                    headerShown: true,
                    headerTitle: () => <Text style={style.title}>Autores Recorte</Text>,
                    headerLeft: () => (
                        <TouchableOpacity testID="todas-obras-menu" style={{ paddingLeft: 16 }} onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
                            <Entypo name="menu" size={24} color={theme.text.textColor} />
                        </TouchableOpacity>
                    ),
                })}
            />
            <DrawerNavigator.Screen
                name="Naturezas"
                component={NaturezasRecorte}
                options={({ navigation }) => ({
                    title: 'Naturezas Recorte',
                    headerShown: true,
                    headerTitle: () => <Text style={style.title}>Naturezas Recorte</Text>,
                    headerLeft: () => (
                        <TouchableOpacity testID="todas-obras-menu" style={{ paddingLeft: 16 }} onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
                            <Entypo name="menu" size={24} color={theme.text.textColor} />
                        </TouchableOpacity>
                    ),
                })}
            />
            <DrawerNavigator.Screen
                name="Zonas"
                component={ZonasRecorte}
                options={({ navigation }) => ({
                    title: 'Zonas Recorte',
                    headerShown: true,
                    headerTitle: () => <Text style={style.title}>Zonas Recorte</Text>,
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
