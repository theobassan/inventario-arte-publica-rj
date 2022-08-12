import { render } from '@testing-library/react-native';

import Maps from './Maps';

describe('<Maps />', () => {
    it('should render', () => {
        const { getByText } = render(<Maps />);

        const text = getByText('Maps Home');

        expect(text).toBeTruthy();
    });
});
