import { Chart } from '@base-components';
import { Obra } from '@domain';
import { autoresRecorte } from '@utils';
import { getYear } from '@utils/data/analisys_utils';

function CalcularMaiorAutor(): { nome: string; obras: Obra[] } {
    const autoresRecorteOrdenadasPorTotalObras = autoresRecorte
        .filter((autor) => autor.nome !== 'Desconhecida')
        .sort((a, b) => (a.obras.length < b.obras.length ? 1 : -1));

    return autoresRecorteOrdenadasPorTotalObras[0];
}

function MaiorAutorRecorte(): JSX.Element {
    const maiorAutor = CalcularMaiorAutor();

    const titulos = maiorAutor.obras.map((obra) => ({
        id: `${obra.Titulo ?? 'Deconhecida'} (${getYear(obra.DataInauguracao) ?? 'S.D.'})`,
        marker: { radius: 10 },
        color: 'yellow',
    }));

    const tipologias = maiorAutor.obras
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

    const nodes = [{ id: maiorAutor.nome, marker: { radius: 30 }, color: 'blue' }];
    Array.prototype.push.apply(nodes, titulos);
    Array.prototype.push.apply(nodes, tipologias);

    const data = tipologias.map((tipologia) => ({
        from: maiorAutor.nome,
        to: tipologia.id,
    }));

    Array.prototype.push.apply(
        data,
        tipologias
            .map((tipologia) => {
                const titulos_tipologia = maiorAutor.obras
                    .filter((obra) => obra.Autores?.find((artista) => artista.Pessoa?.Nome === maiorAutor.nome) != null)
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

    return <Chart options={options as Highcharts.Options} />;
}

export default MaiorAutorRecorte;
