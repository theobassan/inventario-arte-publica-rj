import { render } from '@testing-library/react-native';

import ObrasPorDecada from './ObrasPorDecada';

describe('<ObrasPorDecada />', () => {
    it('should render', () => {
        const { getAllByTestId } = render(<ObrasPorDecada />);

        const charts = getAllByTestId('chart');

        expect(charts.length).toEqual(2);
    });
});
