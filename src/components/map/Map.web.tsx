import { useEffect, useRef, useState } from 'react';

import { Wrapper } from '@googlemaps/react-wrapper';

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

    return <div style={{ width: '100%', height: '100%' }} ref={ref} />;
}

export default MapWrapper;
