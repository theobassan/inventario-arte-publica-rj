import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import { useHeaderHeight } from '@react-navigation/elements';
import { useWindowDimensions, View, Text } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

function Map(): JSX.Element {
    const { height, width } = useWindowDimensions();
    const bottomTabBarHeight = useBottomTabBarHeight();
    const headerHeight = useHeaderHeight();
    const center = { latitude: -34.397, longitude: 150.644, latitudeDelta: 0, longitudeDelta: 0 };

    return (
        <MapView
            zoomControlEnabled
            zoomEnabled
            zoomTapEnabled
            initialRegion={center}
            testID="mapView"
            style={{ height: height - headerHeight - bottomTabBarHeight, width }}
        >
            <Marker coordinate={center}>
                <View style={{ backgroundColor: 'red', padding: 10 }}>
                    <Text>SF</Text>
                </View>
            </Marker>
        </MapView>
    );
}

export default Map;
