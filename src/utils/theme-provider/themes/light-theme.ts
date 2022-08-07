import { Platform } from 'react-native';

import { Theme } from '../domain';
import fonts from './fonts';

const LightTheme: Theme = {
    dark: false,
    background: '#FFFFFF',
    navigation: {
        background: '#FFFFFF',
        border: '#F0F0F0',
        card: 'rgb(255, 255, 255)',
        notification: 'rgb(255, 59, 48)',
        primary: 'rgb(0, 122, 255)',
        text: '#000000',
        active: '#2251FF',
        inactive: '#051C2C',
    },
    fonts: Platform.select(fonts),
    button: {
        font: Platform.select(fonts).medium,
        textColor: '#000000',
        borderColor: '#000000',
        backgroundColor: '#B3B3B3',
        pressed: {
            textColor: '#000000',
            borderColor: '#000000',
            backgroundColor: '#F0F0F0',
        },
    },
    text: {
        font: Platform.select(fonts).medium,
        textColor: '#000000',
    },
    header: {
        fontSize: 24,
        lineHeight: 32,
    },
    bottomTab: {
        fontSize: 12,
        lineHeight: 12,
    },
};

export default LightTheme;
