import React from 'react';

import { render } from '@testing-library/react-native';
import ReactNative from 'react-native';

import ThemeContextProvider from './ThemeContextProvider';
import { LightTheme, DarkTheme } from './themes';

describe('<ThemeContextProvider />', () => {
    it('should start theme with LightTheme', () => {
        jest.spyOn(React, 'useState');

        render(<ThemeContextProvider />);

        // eslint-disable-next-line import/no-named-as-default-member
        expect(React.useState).toBeCalledWith(LightTheme);
    });

    it('should change to DarkTheme if colorScheme is dark', () => {
        const setTheme = jest.fn();
        jest.spyOn(React, 'useState').mockReturnValueOnce([LightTheme, setTheme]);
        jest.spyOn(ReactNative, 'useColorScheme').mockReturnValueOnce('dark');

        render(<ThemeContextProvider />);

        expect(setTheme).toBeCalledWith(DarkTheme);
    });

    it('should change to LightTheme if colorScheme is light', () => {
        const setTheme = jest.fn();
        jest.spyOn(React, 'useState').mockReturnValueOnce([DarkTheme, setTheme]);
        jest.spyOn(ReactNative, 'useColorScheme').mockReturnValueOnce('light');

        render(<ThemeContextProvider />);

        expect(setTheme).toBeCalledWith(LightTheme);
    });
});
