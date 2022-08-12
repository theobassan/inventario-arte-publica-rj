import { render } from '@testing-library/react-native';

import MapAll from './MapAll';

describe('<MapAll />', () => {
    it('should render', () => {
        const { getByTestId } = render(<MapAll />);

        const mapView = getByTestId('mapView');

        expect(mapView).toBeTruthy();
    });
});
