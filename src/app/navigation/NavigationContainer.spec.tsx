import { render } from '@testing-library/react-native';
import { ReactTestInstance } from 'react-test-renderer';

import NavigationContainer from './NavigationContainer';

describe('<NavigationContainer />', () => {
    it('should render title', () => {
        const { UNSAFE_getByType } = render(<NavigationContainer />);

        const navigationContainer = UNSAFE_getByType(NavigationContainer);

        expect((navigationContainer.children[0] as ReactTestInstance).props.documentTitle.formatter()).toEqual('Inventário Arte Pública - RJ');
    });
});
