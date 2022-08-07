import { NavigationContainer } from '@react-navigation/native';
import { fireEvent, render } from '@testing-library/react-native';

import { ChartsNavigator } from './ChartsNavigator';

const mockOpenDrawer = jest.fn();
jest.mock('@react-navigation/native', () => {
    return {
        ...jest.requireActual('@react-navigation/native'),
        DrawerActions: {
            openDrawer: () => mockOpenDrawer,
        },
    };
});

describe('<ChartsNavigator />', () => {
    it('should open menu on home screen', () => {
        const { getByTestId } = render(
            <NavigationContainer>
                <ChartsNavigator />
            </NavigationContainer>,
        );

        const menu = getByTestId('home-menu');

        fireEvent.press(menu);

        expect(mockOpenDrawer).toHaveBeenCalled();
    });

    it('should open menu on chart1 screen', () => {
        const { getByTestId } = render(
            <NavigationContainer>
                <ChartsNavigator testOnly_initialRouteName="Chart1" />
            </NavigationContainer>,
        );

        const menu = getByTestId('chart1-menu');

        fireEvent.press(menu);

        expect(mockOpenDrawer).toHaveBeenCalled();
    });
});
