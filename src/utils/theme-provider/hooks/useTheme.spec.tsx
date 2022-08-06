import { renderHook } from '@testing-library/react';

import { ThemeContextProviderMock } from '../ThemeContextProvider';
import { LightTheme } from '../themes';
import useTheme from './useTheme';

describe('useTheme', () => {
    it('should get theme from ThemeContextProvider', () => {
        jest.restoreAllMocks();

        const wrapper = ({ children }: { children: JSX.Element }) => (
            <ThemeContextProviderMock value={{ theme: LightTheme }}>{children}</ThemeContextProviderMock>
        );

        const { result } = renderHook(useTheme, { wrapper });

        expect(result.current?.theme).toEqual(LightTheme);
    });
});
