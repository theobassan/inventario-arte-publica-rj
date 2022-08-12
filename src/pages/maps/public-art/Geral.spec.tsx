import { render } from '@testing-library/react-native';

import MapPublicArt from './MapPublicArt';

describe('<MapPublicArt />', () => {
    it('should render', () => {
        const { getByTestId } = render(<MapPublicArt />);

        const mapView = getByTestId('mapView');

        expect(mapView).toBeTruthy();
    });
});
