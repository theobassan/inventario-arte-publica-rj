import { NavigationContainer } from '@react-navigation/native';
import { create } from 'react-test-renderer';

import { RootNavigator } from './RootNavigator';

describe('<RootNavigator />', () => {
    it('default snapshot', () => {
        const json = create(
            <NavigationContainer>
                <RootNavigator />
            </NavigationContainer>,
        ).toJSON();

        expect(json).toMatchSnapshot();
    });
});
