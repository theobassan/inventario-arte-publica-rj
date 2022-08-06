import { render } from '@testing-library/react-native';

import App from './App';

describe('<App />', () => {
    it('should render app', () => {
        const { getByText } = render(<App />);

        const text = getByText('Open up App.js to start working on your app!');

        expect(text).toBeTruthy();
    });
});
