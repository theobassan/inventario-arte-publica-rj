import { render } from '@testing-library/react-native';

import ObrasPorDecada from './ObrasPorDecada';

describe('<ObrasPorDecada />', () => {
    it('should render', () => {
        const { getByTestId } = render(<ObrasPorDecada />);

        const charts = getByTestId('chart');

        expect(charts).toBeTruthy();
    });
});
