import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import { useHeaderHeight } from '@react-navigation/elements';
import { Platform, useWindowDimensions } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';

type MapWrapperProps = {
    markers?: {
        position: { latitude: string; longitude: string };
        color?: string;
    }[];
};

function Map({ markers }: MapWrapperProps): JSX.Element {
    const { height, width } = useWindowDimensions();
    const bottomTabBarHeight = useBottomTabBarHeight();
    const headerHeight = useHeaderHeight();
    const center = {
        latitude: -22.910972,
        longitude: -43.17156,
        latitudeDelta: 0.5,
        longitudeDelta: 0.5,
    };

    return (
        <MapView
            zoomControlEnabled
            zoomEnabled
            zoomTapEnabled
            initialRegion={center}
            testID="mapView"
            style={{ height: height - headerHeight - bottomTabBarHeight, width }}
            provider={Platform.OS !== 'ios' ? PROVIDER_GOOGLE : undefined}
        >
            {markers
                ?.filter((marker) => marker.position.latitude !== '' && marker.position.longitude !== '')
                .map((marker, index) => (
                    <Marker
                        pinColor={marker.color ?? 'black'}
                        key={index}
                        coordinate={{
                            latitude: parseFloat(marker.position.latitude),
                            longitude: parseFloat(marker.position.longitude),
                        }}
                    />
                ))}
        </MapView>
    );
}

export default Map;
