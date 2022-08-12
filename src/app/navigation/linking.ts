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
                            All: {
                                path: 'all',
                            },
                            AllVsPublicArt: {
                                path: 'all-vs-public-art',
                            },
                            PublicArt: {
                                path: 'public-art',
                            },
                            PublicArtVsCategory: {
                                path: 'public-art-vs-category',
                            },
                        },
                    },
                    Charts: {
                        path: 'charts',
                        screens: {
                            Home: {
                                path: '',
                            },
                            ObrasPorDecadaEixos: {
                                path: 'eixos-por-decada',
                            },
                            ObrasPorDecadaTipologias: {
                                path: 'tipologias-por-decada',
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
