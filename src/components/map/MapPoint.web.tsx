import { useEffect, useRef, useState } from 'react';

import { FontAwesome } from '@expo/vector-icons';

const MapPoint = ({ color }: { color?: string }): JSX.Element | null => {
    const [opened, setIsOpened] = useState<boolean>(false);
    const handleOnOpen = () => setIsOpened(true);
    const handleOnClose = () => setIsOpened(false);
    const containerRef = useRef<HTMLDivElement>(null);
    console.log('color', color);

    useEffect(() => {
        function handleClickOutside(this: Document, event: MouseEvent) {
            if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
                setIsOpened(false);
            }
        }

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [containerRef]);

    return (
        <div ref={containerRef}>
            {opened ? (
                <FontAwesome name="map-marker" size={24} onPress={handleOnClose} color={color ?? 'black'} />
            ) : (
                <FontAwesome name="map-marker" size={24} onPress={handleOnOpen} color={color ?? 'black'} />
            )}
        </div>
    );
};

export default MapPoint;
