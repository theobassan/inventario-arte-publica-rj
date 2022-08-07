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

    it('map1 snapshot', () => {
        const json = create(
            <NavigationContainer>
                <MapsNavigator testOnly_initialRouteName="Map1" />
            </NavigationContainer>,
        ).toJSON();

        expect(json).toMatchSnapshot();
    });
});
