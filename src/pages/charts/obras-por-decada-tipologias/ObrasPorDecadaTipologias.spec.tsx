import { render } from '@testing-library/react-native';

import ObrasPorDecadaTipologias from './ObrasPorDecadaTipologias';

describe('<ObrasPorDecadaTipologias />', () => {
    it('should render', () => {
        const { getAllByTestId } = render(<ObrasPorDecadaTipologias />);

        const charts = getAllByTestId('chart');

        expect(charts.length).toEqual(2);
    });
});
