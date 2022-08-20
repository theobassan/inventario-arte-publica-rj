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
                    Obras: {
                        path: 'obras',
                        screens: {
                            Home: {
                                path: '',
                            },
                            Tipologias: {
                                path: 'tipologias',
                            },
                            Autores: {
                                path: 'autores',
                            },
                            Naturezas: {
                                path: 'naturezas',
                            },
                        },
                    },
                    Recorte: {
                        path: 'recorte',
                        screens: {
                            Home: {
                                path: '',
                            },
                            Tipologias: {
                                path: 'tipologias',
                            },
                            Autores: {
                                path: 'autores',
                            },
                            Naturezas: {
                                path: 'naturezas',
                            },
                        },
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
                            PublicArtDecadeCategory: {
                                path: 'public-art-category-x-decade',
                            },
                            PublicArtDecadeTypology: {
                                path: 'public-art-typology-x-decade',
                            },
                            PublicArtC19892000: {
                                path: 'public-art-19989-2000',
                            },
                            PublicArtCesarMaia: {
                                path: 'public-art-cesar-maia',
                            },
                        },
                    },
                    Category: {
                        path: 'category',
                    },
                    Decade: {
                        path: 'decade',
                    },
                },
            },
            NotFound: '404',
            NoMatch: '*',
        },
    },
};

export default linking;
