import { Chart, Table, Text } from '@base-components';
import { PoliticaPublica, Exposicao, TrocaCapital } from '@domain';
import converterTrocaParaDependencyWheel from '@utils/analises/capitais/converter-troca-para-dependency-wheel';
import getNodes from '@utils/analises/dependency-wheel/get-nodes';
import juntarDependencyWheel from '@utils/analises/dependency-wheel/juntar-dependency-wheel';
import agenteDaPolitica from '@utils/analises/politica-publica/agente-da-politica';
import { default as autoresPoliticaPublica } from '@utils/analises/politica-publica/autores';
import { default as coordenadoresPoliticaPublica } from '@utils/analises/politica-publica/coordenadores';
import politicaPublicaX from '@utils/analises/politica-publica/politica-publica-x';
import politicaPublicaXexposicao from '@utils/analises/politica-publica/politica-publica-x-exposicao';
import { default as seletoresPoliticaPublica } from '@utils/analises/politica-publica/seletores';
import * as exposicoes from '@utils/data/exposicoes';
import reduceListOfList from '@utils/list/reduce-list-of-list';
import shuffleArray from '@utils/list/shuffleArray';

function getTrocasExposicoes(politicaPublica: PoliticaPublica): TrocaCapital[] {
    const typed_exposicoes: Record<string, Exposicao> = exposicoes;

    return Object.keys(typed_exposicoes)
        .map((key) => {
            const exposicao = typed_exposicoes[key];

            return politicaPublicaXexposicao(politicaPublica, exposicao);
        })
        .reduce(reduceListOfList);
}

function DependencyWheelRefactor({ politicaPublica, peso }: { politicaPublica: PoliticaPublica; peso: number }): JSX.Element {
    const trocasPoliticaPublica = politicaPublicaX(politicaPublica);
    const trocasExposicoes = getTrocasExposicoes(politicaPublica);

    const dependencyWheelsPoliticaPublica = trocasPoliticaPublica.map((troca) => converterTrocaParaDependencyWheel(troca));
    const dependencyWheelsExposicoes = trocasExposicoes.map((troca) => converterTrocaParaDependencyWheel(troca));

    const dependencyWheels = juntarDependencyWheel(dependencyWheelsPoliticaPublica, dependencyWheelsExposicoes);

    const dataFiltrada = dependencyWheels.filter((dependencyWheel) => dependencyWheel.weight >= peso);

    const nosImportantes = [
        ...autoresPoliticaPublica(politicaPublica).map((autor) => ({ id: autor, dataLabels: { enabled: true } })),
        ...coordenadoresPoliticaPublica(politicaPublica).map((coordenador) => ({ id: coordenador, dataLabels: { enabled: true } })),
        ...seletoresPoliticaPublica(politicaPublica).map((seletor) => ({ id: seletor, dataLabels: { enabled: true } })),
    ];
    const todosNodes = getNodes(dataFiltrada)
        .sort((a, b) => b.node.localeCompare(a.node))
        .sort((a, b) => (a.weight < b.weight ? 1 : -1));

    const shuffle = shuffleArray(dataFiltrada);
    const lineOptions = {
        chart: {
            height: 800,
        },
        title: {
            text: '',
        },
        series: [
            {
                type: 'dependencywheel',
                accessibility: {
                    enabled: false,
                },
                dataLabels: {
                    enabled: false,
                    color: '#FFFF',
                },
                data: shuffle,
                nodes: nosImportantes,
            },
        ],
    };

    return (
        <>
            <Chart options={lineOptions as Highcharts.Options} />
            <Table
                headers={[
                    <Text>{`pessoas (${todosNodes.length}, ${todosNodes.filter((node) => !agenteDaPolitica(politicaPublica, node.node)).length})`}</Text>,
                    <Text>pesos</Text>,
                ]}
                rows={todosNodes.map((no) => [
                    <Text>{no.node}</Text>,
                    <Text>{no.weight}</Text>,
                ])}
                widthArr={[
                    undefined,
                    50,
                ]}
            />
            ;
        </>
    );
}

export default DependencyWheelRefactor;
