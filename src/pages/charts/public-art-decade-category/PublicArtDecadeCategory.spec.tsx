import { render } from '@testing-library/react-native';

import PublicArtDecadeCetegory from './PublicArtDecadeCategory';

describe('<PublicArtDecadeCetegory />', () => {
    it('should render', () => {
        const { getAllByTestId } = render(<PublicArtDecadeCetegory />);

        const charts = getAllByTestId('chart');

        expect(charts.length).toEqual(2);
    });
});
