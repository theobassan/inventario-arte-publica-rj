import { render } from '@testing-library/react-native';

import { Theme } from '@utils';

import * as useTheme from '../../utils/theme-provider/hooks/useTheme';
import Chart from './Chart';

describe('<Chart />', () => {
    it('should render light', () => {
        const { getByTestId } = render(<Chart options={{}} />);

        const chart = getByTestId('chart');

        expect(chart).toBeTruthy();
    });

    it('should render dark', () => {
        jest.spyOn(useTheme, 'default').mockReturnValue({ theme: { dark: true } as Theme });

        const { getByTestId } = render(<Chart options={{}} />);

        const chart = getByTestId('chart');

        expect(chart).toBeTruthy();
    });
});
