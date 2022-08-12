import { render } from '@testing-library/react-native';

import Charts from './Charts';

describe('<Charts />', () => {
    it('should render', () => {
        const { getByText } = render(<Charts />);

        const text = getByText('Charts Home');

        expect(text).toBeTruthy();
    });
});
