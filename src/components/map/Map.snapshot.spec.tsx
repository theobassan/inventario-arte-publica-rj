import { create } from 'react-test-renderer';

import Map from './Map';

describe('<Map />', () => {
    it('default snapshot', () => {
        const json = create(<Map />).toJSON();

        expect(json).toMatchSnapshot();
    });
});
