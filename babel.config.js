module.exports = function (api) {
    api.cache(true);
    return {
        presets: ['babel-preset-expo'],
        plugins: [
            'react-native-reanimated/plugin',
            [
                'module-resolver',
                {
                    root: ['./'],
                    alias: {
                        '@app': './src/app',
                        '@components': './src/components',
                        '@pages': './src/pages',
                        '@utils': './src/utils',
                    },
                },
            ],
        ],
    };
};
