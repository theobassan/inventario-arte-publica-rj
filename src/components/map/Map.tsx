import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import { useHeaderHeight } from '@react-navigation/elements';
import { useWindowDimensions } from 'react-native';
import MapView from 'react-native-maps';

function Map(): JSX.Element {
    const { height, width } = useWindowDimensions();
    const bottomTabBarHeight = useBottomTabBarHeight();
    const headerHeight = useHeaderHeight();

    return <MapView testID="mapView" style={{ height: height - headerHeight - bottomTabBarHeight, width }} />;
}

export default Map;
