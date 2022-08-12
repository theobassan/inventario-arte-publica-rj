import { render } from '@testing-library/react-native';

import ObrasPorDecadaEixos from './ObrasPorDecadaEixos';

describe('<ObrasPorDecadaEixos />', () => {
    it('should render', () => {
        const { getAllByTestId } = render(<ObrasPorDecadaEixos />);

        const charts = getAllByTestId('chart');

        expect(charts.length).toEqual(2);
    });
});
