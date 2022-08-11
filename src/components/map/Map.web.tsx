import { useEffect, useRef, useState } from 'react';

import { Wrapper } from '@googlemaps/react-wrapper';

import { exportAsImage } from '@utils';

import MapPoint from './MapPoint.web';
import Marker from './Marker.web';

function MapWrapper(): JSX.Element {
    const center = { lat: -34.397, lng: 150.644 };
    const zoom = 4;
    return (
        <Wrapper apiKey="">
            <MyMapComponent center={center} zoom={zoom} />
        </Wrapper>
    );
}

function MyMapComponent({ center, zoom }: { center?: google.maps.LatLngLiteral; zoom?: number }) {
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

    function markers() {
        return (
            map &&
            center && (
                <Marker map={map} position={center}>
                    <MapPoint />
                </Marker>
            )
        );
    }

    return (
        <>
            <div style={{ width: '100%', height: '100%' }} ref={ref}>
                {markers()}
            </div>
            <button
                onClick={() => {
                    if (ref.current) {
                        exportAsImage(ref.current, 'test');
                    }
                }}
            >
                Capture Image
            </button>
        </>
    );
}

export default MapWrapper;
