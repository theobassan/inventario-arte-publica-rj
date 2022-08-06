import { create } from 'react-test-renderer';

import Maps from './Maps';

describe('<Maps />', () => {
    it('default snapshot', () => {
        const json = create(<Maps />).toJSON();

        expect(json).toMatchSnapshot();
    });
});
