import { ExpoConfig, ConfigContext } from '@expo/config';

export default ({ config }: ConfigContext): ExpoConfig => ({
    ...config,
    name: config.name ?? 'inventario-arte-publica-rj',
    slug: config.slug ?? 'inventario-arte-publica-rj',
    extra: {
        ...config.extra,
        googleMapsAPI: process.env.GOOGLE_MAPS_API || '',
    },
    android: {
        ...config.android,
        config: {
            ...config.android?.config,
            googleMaps: {
                apiKey: process.env.GOOGLE_MAPS_API,
            },
        },
    },
});
