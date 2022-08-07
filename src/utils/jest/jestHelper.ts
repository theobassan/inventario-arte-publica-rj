/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-var-requires */
import '@testing-library/jest-native/extend-expect';
import 'react-native-gesture-handler/jestSetup';

import * as useTheme from '../theme-provider/hooks/useTheme';
import { theme } from './mockData';

jest.mock('expo-status-bar');
jest.mock('expo-linking');

jest.spyOn(useTheme, 'default').mockReturnValue({ theme });

jest.mock('@react-navigation/bottom-tabs', () => jest.requireActual('@react-navigation/bottom-tabs'));
jest.mock('@react-navigation/native', () => jest.requireActual('@react-navigation/native'));
jest.mock('@react-navigation/stack', () => jest.requireActual('@react-navigation/stack'));

global.setImmediate = global.setImmediate || ((fn: (...args: unknown[]) => void, ...args: unknown[]) => global.setTimeout(fn, 0, ...args));

jest.mock('react-native-reanimated', () => {
    const Reanimated = require('react-native-reanimated/mock');

    // The mock for `call` immediately calls the callback which is incorrect
    // So we override it with a no-op
    Reanimated.default.call = () => {};

    return Reanimated;
});

// Silence the warning: Animated: `useNativeDriver` is not supported because the native animated module is missing
jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');
