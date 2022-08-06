import { create } from 'react-test-renderer';

import App from './App';

describe('<App />', () => {
    it('default snapshot', () => {
        const json = create(<App />).toJSON();

        expect(json).toMatchSnapshot();
    });
});
