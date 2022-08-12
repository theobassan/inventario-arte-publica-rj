import { ExpoConfig, ConfigContext } from '@expo/config';

export default ({ config }: ConfigContext): ExpoConfig => ({
    ...config,
    name: config.name ?? 'inventario-arte-publica-rj',
    slug: config.slug ?? 'inventario-arte-publica-rj',
    extra: {
        ...config.extra,
        googleMapsAPI: process.env.GOOGLE_MAPS_API || '',
    },
});
