import { Map } from '@components';
import { Obra } from '@domain';
import * as obra_artepublica from '@utils/data/obra_artepublica';

function color(eixo?: string): string | undefined {
    if (eixo === 'Plasticidade') {
        return 'blue';
    }

    if (eixo === 'Narratividade') {
        return 'red';
    }

    if (eixo === 'Sublimidade') {
        return 'yellow';
    }
}

function MapPublicArtVsCategory(): JSX.Element {
    const typed_obra_artepublica: Record<string, Obra> = obra_artepublica;

    const markers = Object.keys(typed_obra_artepublica)
        .filter((key) => typed_obra_artepublica[key].Latitude != null && typed_obra_artepublica[key].Longitude != null)
        .map((key) => ({
            position: {
                latitude: typed_obra_artepublica[key].Latitude ?? '0',
                longitude: typed_obra_artepublica[key].Longitude ?? '0',
            },
            color: color(typed_obra_artepublica[key].Categoria),
        }));

    return <Map markers={markers} />;
}

export default MapPublicArtVsCategory;
