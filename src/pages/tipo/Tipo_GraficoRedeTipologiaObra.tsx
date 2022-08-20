import { ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Chart } from '@base-components';
import { Obra } from '@domain';
import { getYear } from '@utils/data/analisys_utils';

import styles from './styles';

type GraficoRedeTipoTipologiaObraProps = {
    tipo: string;
    tipos: { nome: string; obras: Obra[] }[];
};

function GraficoRedeTipoTipologiaObra({ tipo, tipos }: GraficoRedeTipoTipologiaObraProps): JSX.Element {
    const tiposOrdenadoPorTotal = [...tipos].filter((autor) => autor.nome !== 'Desconhecida').sort((a, b) => (a.obras.length < b.obras.length ? 1 : -1));
    const maior = tiposOrdenadoPorTotal[0];

    const style = styles();

    const titulos = maior.obras.map((obra) => ({
        id: `${obra.Titulo ?? 'Deconhecida'} (${getYear(obra.DataInauguracao) ?? 'S.D.'})`,
        marker: { radius: 10 },
        color: 'yellow',
    }));

    const tipologias = maior.obras
        .map((obra) => ({
            id: obra.Tipologia ?? 'Deconhecida',
            marker: { radius: 20 },
            color: 'red',
        }))
        .reduce<{ id: string }[]>((r, e) => {
            if (r.find((tip) => tip.id === e.id) == null) {
                r.push(e);
            }
            return r;
        }, []);

    const nodes = [{ id: maior.nome, marker: { radius: 30 }, color: 'blue' }];
    Array.prototype.push.apply(nodes, titulos);
    Array.prototype.push.apply(nodes, tipologias);

    const data = tipologias.map((tipologia) => ({
        from: maior.nome,
        to: tipologia.id,
    }));

    Array.prototype.push.apply(
        data,
        tipologias
            .map((tipologia) => {
                const titulos_tipologia = maior.obras
                    .filter((obra) =>
                        tipo !== 'Autor'
                            ? obra[tipo as keyof Obra] === maior.nome
                            : obra.Autores?.find((artista) => artista.Pessoa?.Nome === maior.nome) != null,
                    )

                    .filter(
                        (obra) => (obra.Tipologia != null && obra.Tipologia === tipologia.id) || (tipologia.id === 'Desconhecida' && obra.Tipologia == null),
                    )
                    .map((obra) => `${obra.Titulo ?? 'Deconhecida'} (${getYear(obra.DataInauguracao) ?? 'S.D.'})`);

                return titulos_tipologia.map((titulo) => ({
                    from: tipologia.id,
                    to: titulo,
                }));
            })
            .reduce((r, l) => {
                Array.prototype.push.apply(r, l);
                return r;
            }, []),
    );

    const options: Highcharts.Options | unknown = {
        chart: {
            height: 600,
            type: 'networkgraph',
        },
        title: {
            text: '',
        },
        plotOptions: {
            networkgraph: {
                layoutAlgorithm: {
                    linkLength: 150, // in pixels
                    enableSimulation: false,
                    //friction: -0.9,
                    integration: 'verlet',
                    approximation: 'barnes-hut',
                },
            },
        },
        series: [
            {
                name: '',
                accessibility: {
                    enabled: true,
                },
                dataLabels: {
                    enabled: true,
                    linkFormat: '{point.rel}',
                },
                data,
                nodes,
            },
        ],
    };

    return (
        <SafeAreaView style={style.container}>
            <ScrollView style={{ width: '100%' }}>
                <Chart options={options as Highcharts.Options} />
            </ScrollView>
        </SafeAreaView>
    );
}

export default GraficoRedeTipoTipologiaObra;
