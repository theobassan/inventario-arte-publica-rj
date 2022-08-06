module.exports = {
    testEnvironment: 'jest-environment-jsdom',
    preset: 'jest-expo',
    transformIgnorePatterns: [
        'node_modules/(?!((jest-)?react-native|@react-native(-community)?)|expo(nent)?|@expo(nent)?/.*|@expo-google-fonts/.*|react-navigation|@react-navigation/.*|@unimodules/.*|unimodules|sentry-expo|native-base|react-native-svg)',
    ],
    testMatch: ['**/*.(spec).(ts|tsx)'],
    moduleNameMapper: {
        '^@app': '<rootDir>/src/app',
        '^@components': '<rootDir>/src/components',
        '^@pages': '<rootDir>/src/pages',
    },
    clearMocks: true,
    collectCoverage: true,
    setupFilesAfterEnv: ['./src/utils/jest/jestHelper.ts'],
    collectCoverageFrom: ['src/**/*.{ts,tsx}'],
    coverageDirectory: '.coverage',
    coveragePathIgnorePatterns: ['index.ts', 'index.tsx'],
    coverageThreshold: {
        global: {
            branches: 100,
            functions: 100,
            lines: 100,
            statements: 100,
        },
    },
    reporters: [
        'default',
        [
            'jest-html-reporters',
            {
                publicPath: '.coverage/.report',
                filename: 'report.html',
            },
        ],
    ],
};
