import { render } from '@testing-library/react-native';

import Rede from './Rede';

describe('<Rede />', () => {
    it('should render', () => {
        const { getByTestId } = render(<Rede />);

        const charts = getByTestId('chart');

        expect(charts).toBeTruthy();
    });
});
