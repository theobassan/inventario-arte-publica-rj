import { NavigationContainer as ReactNavigationContainer, createNavigationContainerRef } from '@react-navigation/native';

import { useTheme } from '@utils';

import linking from './linking.wip';
import { RootNavigatorParamList } from './RootNavigator.wip';

type NavigationContainerProps = {
    children?: JSX.Element;
};

function NavigationContainer({ children }: NavigationContainerProps): JSX.Element {
    const { theme } = useTheme();

    const navigationRef = createNavigationContainerRef<RootNavigatorParamList>();

    return (
        <ReactNavigationContainer
            ref={navigationRef}
            theme={{ colors: theme.navigation, dark: theme.dark }}
            linking={linking}
            documentTitle={{
                formatter: () => `Copilot`,
            }}
        >
            {children}
        </ReactNavigationContainer>
    );
}

export default NavigationContainer;
