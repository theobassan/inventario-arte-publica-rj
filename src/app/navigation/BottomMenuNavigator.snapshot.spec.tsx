import { NavigationContainer } from '@react-navigation/native';
import { create } from 'react-test-renderer';

import { BottomMenuNavigator } from './BottomMenuNavigator';

describe('<BottomMenuNavigator />', () => {
    it('default snapshot', () => {
        const json = create(
            <NavigationContainer>
                <BottomMenuNavigator />
            </NavigationContainer>,
        ).toJSON();

        expect(json).toMatchSnapshot();
    });
});
