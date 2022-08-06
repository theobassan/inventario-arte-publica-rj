import { create } from 'react-test-renderer';

import Charts from './Charts';

describe('<Charts />', () => {
    it('default snapshot', () => {
        const json = create(<Charts />).toJSON();

        expect(json).toMatchSnapshot();
    });
});
