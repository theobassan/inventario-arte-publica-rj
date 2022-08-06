import '@testing-library/jest-native/extend-expect';
import * as useTheme from '../theme-provider/hooks/useTheme';
import { theme } from './mockData';

jest.mock('expo-status-bar');
jest.mock('expo-linking');

jest.spyOn(useTheme, 'default').mockReturnValue({ theme });

jest.mock('@react-navigation/bottom-tabs', () => jest.requireActual('@react-navigation/bottom-tabs'));
jest.mock('@react-navigation/native', () => jest.requireActual('@react-navigation/native'));
jest.mock('@react-navigation/stack', () => jest.requireActual('@react-navigation/stack'));
