import { StackActions } from '@react-navigation/native';
//import * as navigation from '@react-navigation/native';
import { render } from '@testing-library/react-native';

import NoMatch from './NoMatch';

const mockDispatch = jest.fn();
jest.mock('@react-navigation/native', () => {
    return {
        ...jest.requireActual('@react-navigation/native'),
        useNavigation: () => ({
            dispatch: mockDispatch,
        }),
    };
});

describe('<NoMatch />', () => {
    it('should navigate to NotFound', () => {
        render(<NoMatch />);

        expect(mockDispatch).toBeCalledWith(StackActions.replace('NotFound'));
    });
});
