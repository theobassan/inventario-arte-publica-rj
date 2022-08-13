import Highcharts, { SeriesOptionsType } from 'highcharts';
import { ScrollView, View } from 'react-native';

import { Chart } from '@components';
import { Obra } from '@domain';
import * as dedadas from '@utils/data/dedadas';

function Line(): JSX.Element {
    const all: Record<string, Obra[]> = dedadas.all;

    const total = Object.keys(all)
        .filter((key) => key !== 'null' && all[key].length > 0)
        .map((key) => [Date.UTC(parseInt(key, 10), 1), all[key].length]);

    const eixos = Object.keys(all)
        .filter((key) => key !== 'null' && all[key].length > 0)
        .map((key) => all[key].map((obra) => obra.Eixo ?? 'Desconhecida'))
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

    const total_eixos = eixos.reduce<{ type: string; name: string; data: number[][] }[]>((series, eixo) => {
        const total_eixo = Object.keys(all)
            .filter((key) => key !== 'null' && all[key].length > 0)
            .map((key) => [Date.UTC(parseInt(key, 10), 1), all[key].filter((obra) => obra.Eixo === eixo).length]);

        const serie = {
            type: 'line',
            name: eixo,
            data: total_eixo,
        };
        series.push(serie);
        return series;
    }, []) as SeriesOptionsType[];

    const series = [
        {
            type: 'line',
            name: 'Total',
            data: total,
        } as SeriesOptionsType,
    ];

    Array.prototype.push.apply(series, total_eixos);

    const lineOptions: Highcharts.Options = {
        chart: {
            height: 800,
            type: 'line',
        },
        title: {
            text: '',
        },
        yAxis: {
            title: {
                text: 'Total',
            },
            min: 0,
        },
        xAxis: {
            type: 'datetime',
            dateTimeLabelFormats: {
                // don't display the dummy year
                month: '%Y',
                year: '%Y',
            },
            title: {
                text: 'Ano',
            },
        },
        legend: {
            layout: 'horizontal',
            align: 'center',
        },
        series,
    };

    return <Chart options={lineOptions} />;
}

function Block(): JSX.Element {
    const all: Record<string, Obra[]> = dedadas.all;

    const eixos = Object.keys(all)
        .filter((key) => key !== 'null' && all[key].length > 0)
        .map((key) => all[key].map((obra) => obra.Eixo ?? 'Desconhecida'))
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

    const total_eixos = eixos.reduce<{ type: string; name: string; data: number[] }[]>((series, eixo) => {
        const total_eixo = Object.keys(all)
            .filter((key) => key !== 'null' && all[key].length > 0)
            .map((key) => all[key].filter((obra) => obra.Eixo === eixo).length);

        const serie = {
            type: 'column',
            name: eixo,
            data: total_eixo,
        };
        series.push(serie);
        return series;
    }, []) as SeriesOptionsType[];

    const lineOptions: Highcharts.Options = {
        chart: {
            height: 800,
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
        series: total_eixos,
    };

    return <Chart options={lineOptions} />;
}

function PublicArtDecadeCategory(): JSX.Element {
    return (
        <ScrollView style={{ width: '100%' }}>
            <View>
                <Line />
            </View>
            <View style={{ paddingTop: 24 }}>
                <Block />
            </View>
        </ScrollView>
    );
}

export default PublicArtDecadeCategory;
