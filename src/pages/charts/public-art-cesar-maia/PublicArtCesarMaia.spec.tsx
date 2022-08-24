import { render } from '@testing-library/react-native';

import PublicArtCesarMaia from './PublicArtCesarMaia';

describe('<PublicArtCesarMaia />', () => {
    it('should render', () => {
        const { getAllByTestId } = render(<PublicArtCesarMaia />);

        const charts = getAllByTestId('chart');

        expect(charts.length).toEqual(3);
    });
});
