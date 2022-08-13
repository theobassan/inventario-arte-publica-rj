import { ExpoConfig, ConfigContext } from '@expo/config';

export default ({ config }: ConfigContext): ExpoConfig => ({
    ...config,
    name: config.name ?? 'inventario-arte-publica-permanente-rio-de-janeiro',
    slug: config.slug ?? 'inventario-arte-publica-permanente-rio-de-janeiro',
    extra: {
        ...config.extra,
        googleMapsAPI: process.env.GOOGLE_MAPS_API_WEB || '',
    },
    android: {
        ...config.android,
        config: {
            ...config.android?.config,
            googleMaps: {
                apiKey: process.env.GOOGLE_MAPS_API_ANDROID,
            },
        },
    },
    ios: {
        ...config.ios,
        config: {
            ...config.ios?.config,
            googleMapsApiKey: process.env.GOOGLE_MAPS_API_IOS,
        },
    },
});
