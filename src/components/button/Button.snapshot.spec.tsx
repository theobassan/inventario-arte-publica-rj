import { create } from 'react-test-renderer';

import Button from './Button';

describe('<Button />', () => {
    it('default snapshot', () => {
        const title = 'test';
        const json = create(<Button>{title}</Button>).toJSON();

        expect(json).toMatchSnapshot();
    });

    it('pressed snapshot', () => {
        const title = 'test';
        const json = create(<Button testOnly_pressed>{title}</Button>).toJSON();

        expect(json).toMatchSnapshot();
    });
});
