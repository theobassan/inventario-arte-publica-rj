import { render } from '@testing-library/react-native';

import Map from './Map';

describe('<Map />', () => {
    it('should render mapView', () => {
        const { getByTestId } = render(<Map />);

        const mapView = getByTestId('mapView');

        expect(mapView).toBeTruthy();
    });
});
