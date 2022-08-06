import { create } from 'react-test-renderer';

import NoMatch from './NoMatch';

jest.mock('@react-navigation/native', () => {
    return {
        ...jest.requireActual('@react-navigation/native'),
        useNavigation: () => ({
            dispatch: jest.fn(),
        }),
    };
});

describe('<NoMatch />', () => {
    it('default snapshot', () => {
        const json = create(<NoMatch />).toJSON();

        expect(json).toMatchSnapshot();
    });
});
