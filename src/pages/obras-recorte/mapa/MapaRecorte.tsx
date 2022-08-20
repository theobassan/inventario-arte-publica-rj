import { Map } from '@base-components';
import { obrasRecorte } from '@utils';

function MapAll(): JSX.Element {
    const markers = obrasRecorte
        .filter((obra) => obra.Latitude != null && obra.Longitude != null)
        .map((obra) => ({
            position: {
                latitude: obra.Latitude ?? '0',
                longitude: obra.Longitude ?? '0',
            },
        }));
    return <Map markers={markers} />;
}

export default MapAll;
