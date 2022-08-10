import { render } from '@testing-library/react-native';

import Charts from './Charts';

describe('<Charts />', () => {
    it('should render', () => {
        const { getAllByTestId } = render(<Charts />);

        const charts = getAllByTestId('chart');

        expect(charts.length).toEqual(2);
    });
});
