import { useEffect, useRef, useState } from 'react';

import { AntDesign } from '@expo/vector-icons';

const MapPoint = (): JSX.Element | null => {
    const [opened, setIsOpened] = useState<boolean>(false);
    const handleOnOpen = () => setIsOpened(true);
    const handleOnClose = () => setIsOpened(false);
    const containerRef = useRef<HTMLDivElement>(null);

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
            {opened ? <AntDesign name="home" size={24} onPress={handleOnClose} /> : <AntDesign name="barschart" size={24} onPress={handleOnOpen} />}
        </div>
    );
};

export default MapPoint;
