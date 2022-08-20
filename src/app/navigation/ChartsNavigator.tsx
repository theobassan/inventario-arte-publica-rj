import { Entypo } from '@expo/vector-icons';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { DrawerActions } from '@react-navigation/native';
import { StyleSheet, TouchableOpacity } from 'react-native';

import { Text } from '@base-components';
import { Charts, PublicArtDecadeTypology, PublicArtDecadeCategory, PublicArtTotal19892000, PublicArtCesarMaia } from '@pages';
import { Theme, useTheme } from '@utils';

const DrawerNavigator = createDrawerNavigator<ChartsNavigatorParamsList>();

export type ChartsNavigatorParamsList = {
    Home: undefined;
    PublicArtDecadeCategory: undefined;
    PublicArtDecadeTypology: undefined;
    PublicArtC19892000: undefined;
    PublicArtCesarMaia: undefined;
};

type ChartsNavigatorProps = {
    testOnly_initialRouteName?: keyof ChartsNavigatorParamsList;
};

export function ChartsNavigator({ testOnly_initialRouteName }: ChartsNavigatorProps): JSX.Element {
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
                component={Charts}
                options={({ navigation }) => ({
                    headerShown: true,
                    headerTitle: () => <Text style={style.title}>Charts Home</Text>,
                    headerLeft: () => (
                        <TouchableOpacity testID="home-menu" style={{ paddingLeft: 16 }} onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
                            <Entypo name="menu" size={24} color={theme.text.textColor} />
                        </TouchableOpacity>
                    ),
                })}
            />
            <DrawerNavigator.Screen
                name="PublicArtDecadeCategory"
                component={PublicArtDecadeCategory}
                options={({ navigation }) => ({
                    title: 'Arte Pública - Eixos por Década',
                    headerShown: true,
                    headerTitle: () => <Text style={style.title}>Arte Pública - Eixos por Década</Text>,
                    headerLeft: () => (
                        <TouchableOpacity
                            testID="eixos-por-decada-menu"
                            style={{ paddingLeft: 16 }}
                            onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
                        >
                            <Entypo name="menu" size={24} color={theme.text.textColor} />
                        </TouchableOpacity>
                    ),
                })}
            />
            <DrawerNavigator.Screen
                name="PublicArtDecadeTypology"
                component={PublicArtDecadeTypology}
                options={({ navigation }) => ({
                    title: 'Arte Pública - Tipologias por Década',
                    headerShown: true,
                    headerTitle: () => <Text style={style.title}>Arte Pública - Tipologias por Década</Text>,
                    headerLeft: () => (
                        <TouchableOpacity
                            testID="tipologias-por-decada-menu"
                            style={{ paddingLeft: 16 }}
                            onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
                        >
                            <Entypo name="menu" size={24} color={theme.text.textColor} />
                        </TouchableOpacity>
                    ),
                })}
            />
            <DrawerNavigator.Screen
                name="PublicArtC19892000"
                component={PublicArtTotal19892000}
                options={({ navigation }) => ({
                    title: 'Arte Pública - 1989/2000',
                    headerShown: true,
                    headerTitle: () => <Text style={style.title}>Arte Pública - 1989/2000</Text>,
                    headerLeft: () => (
                        <TouchableOpacity
                            testID="tipologias-por-decada-menu"
                            style={{ paddingLeft: 16 }}
                            onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
                        >
                            <Entypo name="menu" size={24} color={theme.text.textColor} />
                        </TouchableOpacity>
                    ),
                })}
            />
            <DrawerNavigator.Screen
                name="PublicArtCesarMaia"
                component={PublicArtCesarMaia}
                options={({ navigation }) => ({
                    title: 'Arte Pública - Cesar Maia',
                    headerShown: true,
                    headerTitle: () => <Text style={style.title}>Arte Pública - Cesar Maia</Text>,
                    headerLeft: () => (
                        <TouchableOpacity
                            testID="tipologias-por-decada-menu"
                            style={{ paddingLeft: 16 }}
                            onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
                        >
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
