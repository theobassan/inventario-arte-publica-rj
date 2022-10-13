import { ViewStyle, StyleSheet } from 'react-native';

type Styles = {
    container: ViewStyle;
};

function styles(): Styles {
    return StyleSheet.create<Styles>({
        container: {
            paddingTop: 24,
            paddingHorizontal: 24,
            width: '100%',
        },
    });
}

export default styles;
