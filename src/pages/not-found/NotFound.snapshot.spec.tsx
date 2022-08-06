import { create } from 'react-test-renderer';

import NotFound from './NotFound';

jest.mock('@react-navigation/native', () => {
    return {
        ...jest.requireActual('@react-navigation/native'),
        useNavigation: () => ({
            dispatch: jest.fn(),
        }),
    };
});

describe('<NotFound />', () => {
    it('default snapshot', () => {
        const json = create(<NotFound />).toJSON();

        expect(json).toMatchSnapshot();
    });
});
