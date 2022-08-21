import { Map } from '@base-components';
import { Obra } from '@domain';

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

type MapaProps = {
    tipos: { nome: string; obras: Obra[] }[];
};

function Mapa({ tipos }: MapaProps): JSX.Element {
    const colors = tipos.reduce<Record<string, string>>((result, tipo) => {
        result[tipo.nome] = getRandomColor();
        return result;
    }, {});

    const markers = tipos
        .map((tipo) => {
            return tipo.obras
                .filter((obra) => obra.Latitude != null && obra.Longitude != null)
                .map((obra) => ({
                    position: {
                        latitude: obra.Latitude ?? '0',
                        longitude: obra.Longitude ?? '0',
                    },
                    color: colors[tipo.nome],
                }));
        })
        .reduce((result, list) => {
            Array.prototype.push.apply(result, list);
            return result;
        }, []);

    console.log(colors);
    return <Map markers={markers} />;
}

export default Mapa;
