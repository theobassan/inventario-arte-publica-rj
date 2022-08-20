import { render } from '@testing-library/react-native';

import Mapa from './Mapa';

describe('<MapAll />', () => {
    it('should render', () => {
        const { getByTestId } = render(<Mapa />);

        const mapView = getByTestId('mapView');

        expect(mapView).toBeTruthy();
    });
});
