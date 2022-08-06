import { render } from '@testing-library/react-native';

import Home from './Home';

describe('<Home />', () => {
    it('should render', () => {
        const { getByText } = render(<Home />);

        const text = getByText('Home');

        expect(text).toBeTruthy();
    });
});
