import { LinkingOptions } from '@react-navigation/native';
import { createURL } from 'expo-linking';

import { RootNavigatorParamList } from './RootNavigator';

const linking: LinkingOptions<RootNavigatorParamList> = {
    prefixes: [createURL('/')],
    config: {
        initialRouteName: 'BottomTab',
        screens: {
            BottomTab: {
                path: '',
                screens: {
                    Home: {
                        path: '',
                    },
                    Maps: {
                        path: 'maps',
                        screens: {
                            Home: {
                                path: '',
                            },
                            TodasObras: {
                                path: 'mapageral',
                            },
                        },
                    },
                    Charts: {
                        path: 'charts',
                        screens: {
                            Home: {
                                path: '',
                            },
                            ObrasPorDecada: {
                                path: 'obras-por-decada',
                            },
                        },
                    },
                },
            },
            NotFound: '404',
            NoMatch: '*',
        },
    },
};

export default linking;
