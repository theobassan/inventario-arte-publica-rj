import { NavigationContainer } from '@react-navigation/native';
import { create } from 'react-test-renderer';

import { MapsNavigator } from './MapsNavigator';

describe('<MapsNavigator />', () => {
    it('default snapshot', () => {
        const json = create(
            <NavigationContainer>
                <MapsNavigator />
            </NavigationContainer>,
        ).toJSON();

        expect(json).toMatchSnapshot();
    });
});
