import { render } from '@testing-library/react-native';

import MapaRecorte from './MapaRecorte';

describe('<MapAll />', () => {
    it('should render', () => {
        const { getByTestId } = render(<MapaRecorte />);

        const mapView = getByTestId('mapView');

        expect(mapView).toBeTruthy();
    });
});
