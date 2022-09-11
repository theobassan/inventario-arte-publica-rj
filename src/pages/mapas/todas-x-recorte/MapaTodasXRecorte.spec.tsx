import { render } from '@testing-library/react-native';

import MapaTodasXRecorte from './MapaTodasXRecorte';

describe('<MapaTodasXRecorte />', () => {
    it('should render', () => {
        const { getByTestId } = render(<MapaTodasXRecorte />);

        const mapView = getByTestId('mapView');

        expect(mapView).toBeTruthy();
    });
});
