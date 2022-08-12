import { render } from '@testing-library/react-native';

import MapAllVsPublicArt from './MapAllVsPublicArt';

describe('<MapAllVsPublicArt />', () => {
    it('should render', () => {
        const { getByTestId } = render(<MapAllVsPublicArt />);

        const mapView = getByTestId('mapView');

        expect(mapView).toBeTruthy();
    });
});
