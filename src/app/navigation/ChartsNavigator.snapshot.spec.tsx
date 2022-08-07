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
});
