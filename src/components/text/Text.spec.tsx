import { render } from '@testing-library/react-native';

import { textTheme } from '@utils';

import Text from './Text';

describe('<Text />', () => {
    it('should render string label in lower case', () => {
        const label = 'Test';

        const { getByText } = render(<Text>{label}</Text>);

        const text = getByText(label);

        expect(text).toBeTruthy();
    });

    it('should render number label', () => {
        const label = 1;

        const { getByText } = render(<Text>{label}</Text>);

        const text = getByText(label.toString());

        expect(text).toBeTruthy();
    });

    it('should use theme style', () => {
        const label = 'test';

        const { getByText } = render(<Text>{label}</Text>);

        const text = getByText(label);

        expect(text).toHaveStyle({
            fontFamily: textTheme.font.fontFamily,
            color: textTheme.textColor,
        });
    });

    it('should use component testID', () => {
        const testID = 'Test';

        const { getByTestId } = render(<Text testID={testID} />);

        const text = getByTestId(testID);

        expect(text).toBeTruthy();
    });
});
