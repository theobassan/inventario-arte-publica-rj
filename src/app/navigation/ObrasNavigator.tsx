import { Entypo } from '@expo/vector-icons';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { DrawerActions } from '@react-navigation/native';
import { StyleSheet, TouchableOpacity } from 'react-native';

import { Text } from '@base-components';
import { Obras, Tipologias, Autores, Naturezas, Zonas, Enderecos, Status } from '@pages';
import { Theme, useTheme } from '@utils';

const DrawerNavigator = createDrawerNavigator<ObrasNavigatorParamsList>();

export type ObrasNavigatorParamsList = {
    Home: undefined;
    Tipologias: undefined;
    Autores: undefined;
    Naturezas: undefined;
    Zonas: undefined;
    Enderecos: undefined;
    Status: undefined;
};

type ObrasNavigatorProps = {
    testOnly_initialRouteName?: keyof ObrasNavigatorParamsList;
};

export function ObrasNavigator({ testOnly_initialRouteName }: ObrasNavigatorProps): JSX.Element {
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
                component={Obras}
                options={({ navigation }) => ({
                    title: 'Obras',
                    headerShown: true,
                    headerTitle: () => <Text style={style.title}>Obras</Text>,
                    headerLeft: () => (
                        <TouchableOpacity testID="home-menu" style={{ paddingLeft: 16 }} onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
                            <Entypo name="menu" size={24} color={theme.text.textColor} />
                        </TouchableOpacity>
                    ),
                })}
            />
            <DrawerNavigator.Screen
                name="Tipologias"
                component={Tipologias}
                options={({ navigation }) => ({
                    title: 'Tipologias',
                    headerShown: true,
                    headerTitle: () => <Text style={style.title}>Tipologias</Text>,
                    headerLeft: () => (
                        <TouchableOpacity testID="todas-obras-menu" style={{ paddingLeft: 16 }} onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
                            <Entypo name="menu" size={24} color={theme.text.textColor} />
                        </TouchableOpacity>
                    ),
                })}
            />
            <DrawerNavigator.Screen
                name="Autores"
                component={Autores}
                options={({ navigation }) => ({
                    title: 'Autores',
                    headerShown: true,
                    headerTitle: () => <Text style={style.title}>Autores</Text>,
                    headerLeft: () => (
                        <TouchableOpacity testID="todas-obras-menu" style={{ paddingLeft: 16 }} onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
                            <Entypo name="menu" size={24} color={theme.text.textColor} />
                        </TouchableOpacity>
                    ),
                })}
            />
            <DrawerNavigator.Screen
                name="Naturezas"
                component={Naturezas}
                options={({ navigation }) => ({
                    title: 'Naturezas',
                    headerShown: true,
                    headerTitle: () => <Text style={style.title}>Naturezas</Text>,
                    headerLeft: () => (
                        <TouchableOpacity testID="todas-obras-menu" style={{ paddingLeft: 16 }} onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
                            <Entypo name="menu" size={24} color={theme.text.textColor} />
                        </TouchableOpacity>
                    ),
                })}
            />
            <DrawerNavigator.Screen
                name="Zonas"
                component={Zonas}
                options={({ navigation }) => ({
                    title: 'Zonas',
                    headerShown: true,
                    headerTitle: () => <Text style={style.title}>Zonas</Text>,
                    headerLeft: () => (
                        <TouchableOpacity testID="todas-obras-menu" style={{ paddingLeft: 16 }} onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
                            <Entypo name="menu" size={24} color={theme.text.textColor} />
                        </TouchableOpacity>
                    ),
                })}
            />
            <DrawerNavigator.Screen
                name="Enderecos"
                component={Enderecos}
                options={({ navigation }) => ({
                    title: 'Endereços',
                    headerShown: true,
                    headerTitle: () => <Text style={style.title}>Endereços</Text>,
                    headerLeft: () => (
                        <TouchableOpacity testID="todas-obras-menu" style={{ paddingLeft: 16 }} onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
                            <Entypo name="menu" size={24} color={theme.text.textColor} />
                        </TouchableOpacity>
                    ),
                })}
            />
            <DrawerNavigator.Screen
                name="Status"
                component={Status}
                options={({ navigation }) => ({
                    title: 'Status',
                    headerShown: true,
                    headerTitle: () => <Text style={style.title}>Status</Text>,
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
