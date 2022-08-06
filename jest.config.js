module.exports = {
    testEnvironment: 'jest-environment-jsdom',
    preset: 'jest-expo',
    setupFilesAfterEnv: ['./src/utils/jest/jestHelper.ts'],
    transformIgnorePatterns: [
        'node_modules/(?!((jest-)?react-native|@react-native(-community)?)|expo(nent)?|@expo(nent)?/.*|@expo-google-fonts/.*|react-navigation|@react-navigation/.*|@unimodules/.*|unimodules|sentry-expo|native-base|react-native-svg)',
    ],
    testMatch: ['**/*.(spec).(ts|tsx)'],
    moduleNameMapper: {
        '^@app': '<rootDir>/src/app',
        '^@components': '<rootDir>/src/components',
        '^@pages': '<rootDir>/src/pages',
        '^@utils': '<rootDir>/src/utils',
    },
    clearMocks: true,
    collectCoverage: false,
};
