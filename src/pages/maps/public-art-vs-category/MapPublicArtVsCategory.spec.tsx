import { render } from '@testing-library/react-native';

import MapPublicArtVsCategory from './MapPublicArtVsCategory';

describe('<MapPublicArtVsCategory />', () => {
    it('should render', () => {
        const { getByTestId } = render(<MapPublicArtVsCategory />);

        const mapView = getByTestId('mapView');

        expect(mapView).toBeTruthy();
    });
});
