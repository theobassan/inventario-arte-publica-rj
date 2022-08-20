import { Map } from '@base-components';
import { Obra } from '@domain';
import * as obra_artepublica from '@utils/data/obra_artepublica';

function MapPublicArt(): JSX.Element {
    const typed_obra_artepublica: Record<string, Obra> = obra_artepublica;

    const markers = Object.keys(typed_obra_artepublica)
        .filter((key) => typed_obra_artepublica[key].Latitude != null && typed_obra_artepublica[key].Longitude != null)
        .map((key) => ({
            position: {
                latitude: typed_obra_artepublica[key].Latitude ?? '0',
                longitude: typed_obra_artepublica[key].Longitude ?? '0',
            },
        }));
    return <Map markers={markers} />;
}

export default MapPublicArt;
