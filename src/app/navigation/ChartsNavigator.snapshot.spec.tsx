import { NavigationContainer } from '@react-navigation/native';
import { create } from 'react-test-renderer';

import { ChartsNavigator } from './ChartsNavigator';

describe('<ChartsNavigator />', () => {
    it('default snapshot', () => {
        const json = create(
            <NavigationContainer>
                <ChartsNavigator />
            </NavigationContainer>,
        ).toJSON();

        expect(json).toMatchSnapshot();
    });

    it('chart1 snapshot', () => {
        const json = create(
            <NavigationContainer>
                <ChartsNavigator testOnly_initialRouteName="Chart1" />
            </NavigationContainer>,
        ).toJSON();

        expect(json).toMatchSnapshot();
    });
});
