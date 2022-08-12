import Highcharts, { SeriesOptionsType } from 'highcharts';
import { ScrollView, View } from 'react-native';

import { Chart } from '@components';
import { Obra } from '@domain';
import * as analisys_list_utils from '@utils/data/analisys_list_utils';

function Line(): JSX.Element {
    const all: Record<string, Obra[]> = analisys_list_utils.all;

    const total = Object.keys(all)
        .filter((key) => key !== 'null' && all[key].length > 0)
        .map((key) => [Date.UTC(parseInt(key, 10), 1), all[key].length]);

    const tipologias = Object.keys(all)
        .filter((key) => key !== 'null' && all[key].length > 0)
        .map((key) => all[key].map((obra) => obra.Tipologia ?? 'Desconhecida'))
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

    const total_tipologias = tipologias.reduce<{ type: string; name: string; data: number[][] }[]>((series, topolodia) => {
        const total_tipologia = Object.keys(all)
            .filter((key) => key !== 'null' && all[key].length > 0)
            .map((key) => [Date.UTC(parseInt(key, 10), 1), all[key].filter((obra) => obra.Tipologia === topolodia).length]);

        const serie = {
            type: 'line',
            name: topolodia,
            data: total_tipologia,
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

    Array.prototype.push.apply(series, total_tipologias);

    const lineOptions: Highcharts.Options = {
        chart: {
            height: 800,
            type: 'line',
        },
        title: {
            text: 'Obras por Década',
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
        plotOptions: {
            series: {
                label: {
                    connectorAllowed: false,
                },
                pointStart: 2010,
            },
        },
        series,
    };

    return <Chart options={lineOptions} />;
}

function Block(): JSX.Element {
    const all: Record<string, Obra[]> = analisys_list_utils.all;

    const tipologias = Object.keys(all)
        .filter((key) => key !== 'null' && all[key].length > 0)
        .map((key) => all[key].map((obra) => obra.Tipologia ?? 'Desconhecida'))
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

    const total_tipologias = tipologias.reduce<{ type: string; name: string; data: number[] }[]>((series, topolodia) => {
        const total_tipologia = Object.keys(all)
            .filter((key) => key !== 'null' && all[key].length > 0)
            .map((key) => all[key].filter((obra) => obra.Tipologia === topolodia).length);

        const serie = {
            type: 'column',
            name: topolodia,
            data: total_tipologia,
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
            text: 'Obras por Década',
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
        series: total_tipologias,
    };

    return <Chart options={lineOptions} />;
}

function Charts(): JSX.Element {
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

export default Charts;
