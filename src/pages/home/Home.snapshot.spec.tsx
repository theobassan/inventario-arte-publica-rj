import { create } from 'react-test-renderer';

import Home from './Home';

describe('<Home />', () => {
    it('default snapshot', () => {
        const json = create(<Home />).toJSON();

        expect(json).toMatchSnapshot();
    });
});
