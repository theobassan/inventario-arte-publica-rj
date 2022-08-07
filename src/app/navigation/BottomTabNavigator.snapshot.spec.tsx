import { NavigationContainer } from '@react-navigation/native';
import { create } from 'react-test-renderer';

import { BottomTabNavigator } from './BottomTabNavigator';

describe('<BottomTabNavigator />', () => {
    it('default snapshot', () => {
        const json = create(
            <NavigationContainer>
                <BottomTabNavigator />
            </NavigationContainer>,
        ).toJSON();

        expect(json).toMatchSnapshot();
    });
});
