import { Map } from '@base-components';
import { Obra } from '@domain';
import * as obra from '@utils/data/obra';
import * as obra_artepublica from '@utils/data/obra_artepublica';

function MapAll(): JSX.Element {
    const typed_obra: Record<string, Obra> = obra;
    const typed_obra_artepublica: Record<string, Obra> = obra_artepublica;

    const all = { ...typed_obra, ...typed_obra_artepublica };

    const markers = Object.keys(all)
        .filter((key) => all[key].Latitude != null && all[key].Longitude != null)
        .map((key) => ({
            position: {
                latitude: all[key].Latitude ?? '0',
                longitude: all[key].Longitude ?? '0',
            },
        }));
    return <Map markers={markers} />;
}

export default MapAll;
