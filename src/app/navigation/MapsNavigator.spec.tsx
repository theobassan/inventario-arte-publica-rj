import { NavigationContainer } from '@react-navigation/native';
import { fireEvent, render } from '@testing-library/react-native';

import { MapsNavigator } from './MapsNavigator';

const mockOpenDrawer = jest.fn();
jest.mock('@react-navigation/native', () => {
    return {
        ...jest.requireActual('@react-navigation/native'),
        DrawerActions: {
            openDrawer: () => mockOpenDrawer,
        },
    };
});

describe('<MapsNavigator />', () => {
    it('should open menu on home screen', () => {
        const { getByTestId } = render(
            <NavigationContainer>
                <MapsNavigator />
            </NavigationContainer>,
        );

        const menu = getByTestId('home-menu');

        fireEvent.press(menu);

        expect(mockOpenDrawer).toHaveBeenCalled();
    });

    it('should open menu on map1 screen', () => {
        const { getByTestId } = render(
            <NavigationContainer>
                <MapsNavigator testOnly_initialRouteName="Map1" />
            </NavigationContainer>,
        );

        const menu = getByTestId('map1-menu');

        fireEvent.press(menu);

        expect(mockOpenDrawer).toHaveBeenCalled();
    });
});
