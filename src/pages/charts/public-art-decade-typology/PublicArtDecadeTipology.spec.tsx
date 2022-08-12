import { render } from '@testing-library/react-native';

import PublicArtDecadeTypology from './PublicArtDecadeTypology';

describe('<PublicArtDecadeTypology />', () => {
    it('should render', () => {
        const { getAllByTestId } = render(<PublicArtDecadeTypology />);

        const charts = getAllByTestId('chart');

        expect(charts.length).toEqual(2);
    });
});
