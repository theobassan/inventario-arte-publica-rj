import { LinkingOptions } from '@react-navigation/native';
import { createURL } from 'expo-linking';

import { RootNavigatorParamList } from './RootNavigator.wip';

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
                        },
                    },
                    Charts: {
                        path: 'charts',
                        screens: {
                            Home: {
                                path: '',
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
