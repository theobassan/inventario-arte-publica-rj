import React from 'react';

import Highcharts, { SeriesOptionsType } from 'highcharts';
import { ScrollView, View } from 'react-native';

import { Chart } from '@base-components';
import { Artista, Obra } from '@domain';
import { getYear } from '@utils/data/analisys_utils';
import * as obra_artepublica from '@utils/data/obra_artepublica';

function Block(): JSX.Element {
    const typed_obra_artepublica: Record<string, Obra> = obra_artepublica;

    const anos_primeiro_mantado = [
        1993,
        1994,
        1995,
        1996,
    ];

    const obras_por_ano = Object.keys(typed_obra_artepublica)
        .reduce<{ year: number; obras: Obra[] }[]>((result, key) => {
            const year = getYear(typed_obra_artepublica[key].DataInauguracao);
            if (year != null && anos_primeiro_mantado.includes(year)) {
                const y = result.find((t) => t.year === year);

                if (y == null) {
                    result.push({
                        year,
                        obras: Object.keys(typed_obra_artepublica)
                            .filter((keyInt) => getYear(typed_obra_artepublica[keyInt].DataInauguracao) === year)
                            .map((keyInt) => typed_obra_artepublica[keyInt]),
                    });
                }
            }

            return result;
        }, [])
        .sort((a, b) => (a.year > b.year ? 1 : -1));

    const tipologias = obras_por_ano
        .map((obra_ano) => obra_ano.obras.map((obra) => obra.Tipologia ?? 'Desconhecida'))
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

    const total_tipologias = tipologias.reduce<{ type: string; name: string; data: (number | null)[] }[]>((series, tipologia) => {
        const total_tipologia = obras_por_ano.map((obra_ano) => {
            const total = obra_ano.obras.filter((obra) => obra.Tipologia === tipologia).length;
            return total > 0 ? total : null;
        });

        const serie = {
            type: 'column',
            name: tipologia,
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
            categories: anos_primeiro_mantado.map((ano) => ano.toString()),
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

function Network(): JSX.Element {
    const typed_obra_artepublica: Record<string, Obra> = obra_artepublica;

    const anos_primeiro_mantado = [
        1993,
        1994,
        1995,
        1996,
    ];

    const obras_do_mandato = Object.keys(typed_obra_artepublica).reduce<Obra[]>((result, key) => {
        const year = getYear(typed_obra_artepublica[key].DataInauguracao);
        if (year != null && anos_primeiro_mantado.includes(year)) {
            result.push(typed_obra_artepublica[key]);
        }

        return result;
    }, []);

    const titulos = obras_do_mandato.map((obra) => ({
        id: obra.Titulo ?? 'Deconhecida',
        marker: { radius: 5 },
        color: 'yellow',
    }));
    const autores = obras_do_mandato
        .map(
            (obra) =>
                obra.Autores ?? [
                    { Pessoa: { Nome: 'Desconhecida' } } as Artista,
                ],
        )
        .reduce<string[]>((r, l) => {
            Array.prototype.push.apply(
                r,
                l.map<string>((artista) => artista.Pessoa?.Nome ?? 'Desconhecida'),
            );
            return r;
        }, [])
        .reduce<{ id: string; marker: { radius: number }; color: string }[]>((r, autor) => {
            if (r.find((node) => node.id === autor) == null) {
                r.push({
                    id: autor ?? 'Deconhecida',
                    marker: { radius: 10 },
                    color: 'red',
                });
            }
            return r;
        }, []);

    const nodes = [{ id: 'Cesar Maia', marker: { radius: 20 }, color: 'blue' }];
    Array.prototype.push.apply(nodes, titulos);
    Array.prototype.push.apply(nodes, autores);

    const data = autores.map((autor) => ({
        from: 'Cesar Maia',
        to: autor.id,
    }));

    Array.prototype.push.apply(
        data,
        autores
            .map((autor) => {
                const titulos_autor = obras_do_mandato
                    .filter(
                        (obra) =>
                            (obra.Autores != null && obra.Autores?.find((artista) => artista.Pessoa?.Nome === autor.id) != null) ||
                            (autor.id === 'Desconhecida' && obra.Autores == null),
                    )
                    .map((obra) => obra.Titulo);

                return titulos_autor.map((titulo) => ({
                    from: autor.id,
                    to: titulo,
                }));
            })
            .reduce((r, l) => {
                Array.prototype.push.apply(r, l);
                return r;
            }, []),
    );

    const networkOptions: Highcharts.Options | unknown = {
        chart: {
            height: 800,
            type: 'networkgraph',
        },
        title: {
            text: '',
        },
        plotOptions: {
            networkgraph: {
                layoutAlgorithm: {
                    enableSimulation: true,
                    friction: -0.9,
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

    return <Chart options={networkOptions as Highcharts.Options} />;
}

//TODO: dropdown: prefeito/mandato (com e sem mandato selecionado)
function PublicArtCesarMaia(): JSX.Element {
    return (
        <ScrollView style={{ width: '100%' }}>
            <View>
                <Block />
            </View>
            <View style={{ paddingTop: 24 }}>
                <Network />
            </View>
        </ScrollView>
    );
}

export default PublicArtCesarMaia;
