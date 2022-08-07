import { create } from 'react-test-renderer';

import NavigationProvider from './NavigationProvider';

describe('<NavigationProvider />', () => {
    it('default snapshot', () => {
        const json = create(<NavigationProvider />).toJSON();

        expect(json).toMatchSnapshot();
    });
});
