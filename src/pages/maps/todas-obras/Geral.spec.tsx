import { render } from '@testing-library/react-native';

import Maps from './Geral';

describe('<Maps />', () => {
    it('should render', () => {
        const { getByTestId } = render(<Maps />);

        const mapView = getByTestId('mapView');

        expect(mapView).toBeTruthy();
    });
});
