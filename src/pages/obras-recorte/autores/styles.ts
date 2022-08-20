import { ViewStyle, StyleSheet } from 'react-native';

type Styles = {
    container: ViewStyle;
};

function styles(): Styles {
    return StyleSheet.create<Styles>({
        container: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
        },
    });
}

export default styles;
