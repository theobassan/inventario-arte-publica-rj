/* eslint-disable unused-imports/no-unused-vars */
export type Props = {
    map: google.maps.Map;
    position: { lat: number; lng: number };
    children?: JSX.Element;
};

const Marker = ({ map, position, children }: Props): JSX.Element | null => {
    return null;
};

export default Marker;
