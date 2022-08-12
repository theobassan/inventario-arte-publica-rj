import { useEffect, useRef, useState } from 'react';

import { Wrapper } from '@googlemaps/react-wrapper';
import Constants from 'expo-constants';

import { exportAsImage } from '@utils';

import MapPoint from './MapPoint.web';
import Marker from './Marker.web';

type MapWrapperProps = {
    markers?: { position: { latitude: string; longitude: string } }[];
};

function MapWrapper({ markers }: MapWrapperProps): JSX.Element {
    const center = { lat: -22.910972, lng: -43.17156 };
    const zoom = 12;

    console.log('api', Constants.manifest?.extra?.googleMapsAPI);
    return (
        <Wrapper apiKey={Constants.manifest?.extra?.googleMapsAPI}>
            <MyMapComponent center={center} zoom={zoom} markers={markers} />
        </Wrapper>
    );
}

function MyMapComponent({
    center,
    zoom,
    markers,
}: {
    center?: google.maps.LatLngLiteral;
    zoom?: number;
    markers?: { position: { latitude: string; longitude: string } }[];
}) {
    const ref = useRef<HTMLDivElement>(null);
    const [map, setMap] = useState<google.maps.Map>();

    useEffect(() => {
        if (ref.current && !map) {
            setMap(
                new window.google.maps.Map(ref.current, {
                    center,
                    zoom,
                }),
            );
        }
    }, [ref, map]);

    function renderMarkers() {
        if (map && markers) {
            return markers.map((marker, index) => (
                <Marker key={index} map={map} position={{ lat: parseFloat(marker.position.latitude), lng: parseFloat(marker.position.longitude) }}>
                    <MapPoint />
                </Marker>
            ));
        }
    }

    return (
        <>
            <div style={{ width: '100%', height: '100%' }} ref={ref}>
                {renderMarkers()}
            </div>
            <button
                onClick={() => {
                    if (ref.current) {
                        exportAsImage(ref.current, 'map');
                    }
                }}
            >
                Capture Image
            </button>
        </>
    );
}

export default MapWrapper;
