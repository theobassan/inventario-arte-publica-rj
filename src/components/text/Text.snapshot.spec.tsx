import { create } from 'react-test-renderer';

import Text from './Text';

describe('<Text />', () => {
    it('default snapshot', () => {
        const label = 'test';
        const json = create(<Text>{label}</Text>).toJSON();

        expect(json).toMatchSnapshot();
    });
});
