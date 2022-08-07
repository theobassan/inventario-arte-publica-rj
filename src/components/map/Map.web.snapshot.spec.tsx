import { create } from 'react-test-renderer';

import Map from './Map.web';

describe('<Map.web />', () => {
    it('default snapshot', () => {
        const json = create(<Map />).toJSON();

        expect(json).toMatchSnapshot();
    });
});
