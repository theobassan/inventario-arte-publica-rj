import Highcharts, { SeriesOptionsType } from 'highcharts';
import { ScrollView, View } from 'react-native';

import { Chart } from '@base-components';
import { Obra } from '@domain';
import * as dedadas from '@utils/data/dedadas';

import styles from './styles';

type Tipo_DecadaProps = {
    tipo: string;
};

function Tipo_Decada({ tipo }: Tipo_DecadaProps): JSX.Element {
    const style = styles();

    const all: Record<string, Obra[]> = dedadas.all;

    function MapAutor(key: string): string[] {
        return all[key]
            .map((obra) => obra.Autores ?? [{ Pessoa: { Nome: 'Desconhecida' } }])
            .reduce<string[]>((r, l) => {
                Array.prototype.push.apply(r, l);
                return r;
            }, []);
    }

    const tipos = Object.keys(all)
        .filter((key) => key !== 'null' && all[key].length > 0)
        .map((key) => (tipo === 'Autor' ? MapAutor(key) : all[key].map((obra) => obra[tipo as keyof Obra] ?? 'Desconhecida')))
        .reduce<string[]>((r, l) => {
            Array.prototype.push.apply(r, l);
            return r;
        }, [])
        .reduce<string[]>((r, e) => {
            if (r.find((top) => top === e) == null) {
                r.push(e);
            }

            return r;
        }, []);

    const total_tipos = tipos.reduce<{ type: string; name: string; data: (number | null)[] }[]>((series, _tipo) => {
        const total_tipo = Object.keys(all)
            .filter((key) => key !== 'null' && all[key].length > 0)
            .map((key) => {
                const total = all[key].filter(
                    (obra) => obra[tipo as keyof Obra] === _tipo || (obra[tipo as keyof Obra] == null && _tipo === 'Desconhecida'),
                ).length;
                return total > 0 ? total : null;
            });

        const serie = {
            type: 'column',
            name: _tipo,
            data: total_tipo,
        };
        series.push(serie);
        return series;
    }, []) as SeriesOptionsType[];

    const options: Highcharts.Options = {
        chart: {
            height: 600,
            type: 'column',
        },
        title: {
            text: '',
        },
        yAxis: {
            title: {
                text: 'Total',
            },
            min: 0,
            stackLabels: {
                enabled: true,
                style: {
                    //fontWeight: 'bold',
                    textOutline: 'none',
                },
            },
        },
        xAxis: {
            categories: Object.keys(all).filter((key) => key !== 'null' && all[key].length > 0),
        },
        legend: {
            layout: 'horizontal',
            align: 'center',
        },
        plotOptions: {
            column: {
                stacking: 'normal',
                dataLabels: {
                    enabled: true,
                },
            },
        },
        series: total_tipos,
    };

    return (
        <View style={style.container}>
            <ScrollView style={{ width: '100%' }}>
                <Chart options={options as Highcharts.Options} />
            </ScrollView>
        </View>
    );
}

export default Tipo_Decada;
