import Highcharts, { SeriesOptionsType } from 'highcharts';
import { ScrollView, View } from 'react-native';

import { Chart } from '@base-components';
import { Obra } from '@domain';
import { getYear } from '@utils/data/analisys_utils';
import * as obra_artepublica from '@utils/data/obra_artepublica';

function Line(): JSX.Element {
    const typed_obra_artepublica: Record<string, Obra> = obra_artepublica;

    const total_anterior = Object.keys(typed_obra_artepublica)
        .reduce<{ year: number; total: number }[]>((result, key) => {
            const year = getYear(typed_obra_artepublica[key].DataInauguracao);
            if (year != null && year >= 1989 && year <= 1993) {
                const y = result.find((t) => t.year === year);

                if (y == null) {
                    result.push({
                        year,
                        total: Object.keys(typed_obra_artepublica).filter((keyInt) => getYear(typed_obra_artepublica[keyInt].DataInauguracao) === year).length,
                    });
                }
            }

            return result;
        }, [])
        .reduce<[number, number][]>((result, year) => {
            result.push([
                Date.UTC(year.year, 1),
                year.total,
            ]);
            return result;
        }, [])
        .sort((a, b) => (a[0] > b[0] ? 1 : -1));

    const total = Object.keys(typed_obra_artepublica)
        .reduce<{ year: number; total: number }[]>((result, key) => {
            const year = getYear(typed_obra_artepublica[key].DataInauguracao);
            if (year != null && year >= 1993 && year <= 1997) {
                const y = result.find((t) => t.year === year);

                if (y == null) {
                    result.push({
                        year,
                        total: Object.keys(typed_obra_artepublica).filter((keyInt) => getYear(typed_obra_artepublica[keyInt].DataInauguracao) === year).length,
                    });
                }
            }

            return result;
        }, [])
        .reduce<[number, number][]>((result, year) => {
            result.push([
                Date.UTC(year.year, 1),
                year.total,
            ]);
            return result;
        }, [])
        .sort((a, b) => (a[0] > b[0] ? 1 : -1));

    const total_proximo = Object.keys(typed_obra_artepublica)
        .reduce<{ year: number; total: number }[]>((result, key) => {
            const year = getYear(typed_obra_artepublica[key].DataInauguracao);
            if (year != null && year >= 1997 && year <= 2000) {
                const y = result.find((t) => t.year === year);

                if (y == null) {
                    result.push({
                        year,
                        total: Object.keys(typed_obra_artepublica).filter((keyInt) => getYear(typed_obra_artepublica[keyInt].DataInauguracao) === year).length,
                    });
                }
            }

            return result;
        }, [])
        .reduce<[number, number][]>((result, year) => {
            result.push([
                Date.UTC(year.year, 1),
                year.total,
            ]);
            return result;
        }, [])
        .sort((a, b) => (a[0] > b[0] ? 1 : -1));

    const series = [
        {
            type: 'line',
            name: 'Marcelo Alencar',
            data: total_anterior,
        } as SeriesOptionsType,
        {
            type: 'line',
            name: 'Cesar Maia',
            data: total,
        } as SeriesOptionsType,
        {
            type: 'line',
            name: 'Luiz Paulo Conde',
            data: total_proximo,
        } as SeriesOptionsType,
    ];

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
    const typed_obra_artepublica: Record<string, Obra> = obra_artepublica;

    const total_anterior = Object.keys(typed_obra_artepublica)
        .reduce<{ year: number; total: number }[]>((result, key) => {
            const year = getYear(typed_obra_artepublica[key].DataInauguracao);
            if (year != null && year >= 1989 && year <= 1992) {
                const y = result.find((t) => t.year === year);

                if (y == null) {
                    result.push({
                        year,
                        total: Object.keys(typed_obra_artepublica).filter((keyInt) => getYear(typed_obra_artepublica[keyInt].DataInauguracao) === year).length,
                    });
                }
            }

            return result;
        }, [])
        .reduce<[number, number | null][]>((result, year) => {
            result.push([
                Date.UTC(year.year, 1),
                year.total > 0 ? year.total : null,
            ]);
            return result;
        }, [])
        .sort((a, b) => (a[0] > b[0] ? 1 : -1));

    const total = Object.keys(typed_obra_artepublica)
        .reduce<{ year: number; total: number }[]>((result, key) => {
            const year = getYear(typed_obra_artepublica[key].DataInauguracao);
            if (year != null && year >= 1993 && year <= 1996) {
                const y = result.find((t) => t.year === year);

                if (y == null) {
                    result.push({
                        year,
                        total: Object.keys(typed_obra_artepublica).filter((keyInt) => getYear(typed_obra_artepublica[keyInt].DataInauguracao) === year).length,
                    });
                }
            }

            return result;
        }, [])
        .reduce<[number, number | null][]>((result, year) => {
            result.push([
                Date.UTC(year.year, 1),
                year.total > 0 ? year.total : null,
            ]);
            return result;
        }, [])
        .sort((a, b) => (a[0] > b[0] ? 1 : -1));

    const total_proximo = Object.keys(typed_obra_artepublica)
        .reduce<{ year: number; total: number }[]>((result, key) => {
            const year = getYear(typed_obra_artepublica[key].DataInauguracao);
            if (year != null && year >= 1997 && year <= 2000) {
                const y = result.find((t) => t.year === year);

                if (y == null) {
                    result.push({
                        year,
                        total: Object.keys(typed_obra_artepublica).filter((keyInt) => getYear(typed_obra_artepublica[keyInt].DataInauguracao) === year).length,
                    });
                }
            }

            return result;
        }, [])
        .reduce<[number, number | null][]>((result, year) => {
            result.push([
                Date.UTC(year.year, 1),
                year.total > 0 ? year.total : null,
            ]);
            return result;
        }, [])
        .sort((a, b) => (a[0] > b[0] ? 1 : -1));

    const series = [
        {
            type: 'column',
            name: 'Marcelo Alencar',
            data: [
                ...total_anterior.map((item) => item[1]),
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
            ],
        } as SeriesOptionsType,
        {
            type: 'column',
            name: 'Cesar Maia',
            data: [
                null,
                null,
                null,
                null,
                ...total.map((item) => item[1]),
                null,
                null,
                null,
                null,
            ],
        } as SeriesOptionsType,
        {
            type: 'column',
            name: 'Luiz Paulo Conde',
            data: [
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                ...total_proximo.map((item) => item[1]),
            ],
        } as SeriesOptionsType,
    ];

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
            categories: [
                '1989',
                '1990',
                '1991',
                '1992',
                '1993',
                '1994',
                '1995',
                '1996',
                '1997',
                '1998',
                '1999',
                '2000',
            ],
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
        series,
    };

    return <Chart options={lineOptions} />;
}

function PublicArtTotal19892000(): JSX.Element {
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

export default PublicArtTotal19892000;