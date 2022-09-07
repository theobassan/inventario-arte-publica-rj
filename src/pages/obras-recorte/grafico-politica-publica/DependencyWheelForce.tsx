import { Chart, Table, Text } from '@base-components';
import { ArtigoJornal, PoliticaPublica, Exposicao, TrocaCapital, DependencyWheel } from '@domain';
import converterTrocaParaDependencyWheel from '@utils/analises/capitais/converter-troca-para-dependency-wheel';
import juntarDependencyWheel from '@utils/analises/dependency-wheel/juntar-dependency-wheel';
import autorDaPolitica from '@utils/analises/politica-publica/autor-da-politica';
import { default as autoresPoliticaPublica } from '@utils/analises/politica-publica/autores';
import { default as coordenadoresPoliticaPublica } from '@utils/analises/politica-publica/coordenadores';
import politicaPublicaX from '@utils/analises/politica-publica/politica-publica-x';
import politicaPublicaXartigoJornal from '@utils/analises/politica-publica/politica-publica-x-artigo-jornal';
import politicaPublicaXexposicao from '@utils/analises/politica-publica/politica-publica-x-exposicao';
import { default as seletoresPoliticaPublica } from '@utils/analises/politica-publica/seletores';
import * as artigosjornal from '@utils/data/artigosjornal';
import * as exposicoes from '@utils/data/exposicoes';
import reduceListOfList from '@utils/list/reduce-list-of-list';

function getTrocasArtigosJornais(politicaPublica: PoliticaPublica): TrocaCapital[] {
    const typed_artigosjornal: Record<string, ArtigoJornal> = artigosjornal;

    return Object.keys(typed_artigosjornal)
        .map((key) => {
            const artigoJornal = typed_artigosjornal[key];

            return politicaPublicaXartigoJornal(politicaPublica, artigoJornal);
        })
        .reduce(reduceListOfList);
}

function getTrocasExposicoes(politicaPublica: PoliticaPublica): TrocaCapital[] {
    const typed_exposicoes: Record<string, Exposicao> = exposicoes;

    return Object.keys(typed_exposicoes)
        .map((key) => {
            const exposicao = typed_exposicoes[key];

            return politicaPublicaXexposicao(politicaPublica, exposicao);
        })
        .reduce(reduceListOfList);
}

function fernandoCocchiarale(politicaPublica: PoliticaPublica, dep: { from: string; to: string; weight: number }, peso: number): boolean {
    if (dep.from === 'Fernando Cocchiarale' && !autorDaPolitica(politicaPublica, dep.to)) {
        return dep.weight >= peso + 1;
    } else if (dep.to === 'Fernando Cocchiarale' && !autorDaPolitica(politicaPublica, dep.from)) {
        return dep.weight >= peso + 1;
    }

    return dep.weight >= peso;
}

function nos(dependencies: DependencyWheel[]): { node: string; weight: number }[] {
    const nodes: { node: string; weight: number }[] = [];

    dependencies.forEach((dependency) => {
        const nodeFrom = nodes.find((node) => node.node === dependency.from);
        if (nodeFrom) {
            nodeFrom.weight += dependency.weight;
        } else {
            nodes.push({ node: dependency.from, weight: dependency.weight });
        }

        const nodeTo = nodes.find((node) => node.node === dependency.to);
        if (nodeTo) {
            nodeTo.weight += dependency.weight;
        } else {
            nodes.push({ node: dependency.to, weight: dependency.weight });
        }
    });

    return nodes;
}

function DependencyWheelRefactor({ politicaPublica, peso }: { politicaPublica: PoliticaPublica; peso: number }): JSX.Element {
    const trocasPoliticaPublica = politicaPublicaX(politicaPublica);
    const trocasArtigosJornais = getTrocasArtigosJornais(politicaPublica);
    const trocasExposicoes = getTrocasExposicoes(politicaPublica);

    const dependencyWheelsPoliticaPublica = trocasPoliticaPublica.map((troca) => converterTrocaParaDependencyWheel(troca));
    const dependencyWheelsArtigosJornais = trocasArtigosJornais.map((troca) => converterTrocaParaDependencyWheel(troca));
    const dependencyWheelsExposicoes = trocasExposicoes.map((troca) => converterTrocaParaDependencyWheel(troca));

    const dep1 = juntarDependencyWheel(dependencyWheelsPoliticaPublica, dependencyWheelsArtigosJornais);
    const dependencyWheels = juntarDependencyWheel(dep1, dependencyWheelsExposicoes);

    const dataFiltrada = dependencyWheels.filter((dependencyWheel) => fernandoCocchiarale(politicaPublica, dependencyWheel, peso));

    const nosImportantes = [
        ...autoresPoliticaPublica(politicaPublica).map((autor) => ({ id: autor, dataLabels: { enabled: true } })),
        ...coordenadoresPoliticaPublica(politicaPublica).map((coordenador) => ({ id: coordenador, dataLabels: { enabled: true } })),
        ...seletoresPoliticaPublica(politicaPublica).map((seletor) => ({ id: seletor, dataLabels: { enabled: true } })),
    ];
    const todosNodes = nos(dataFiltrada);
    todosNodes.sort((a, b) => (a.weight < b.weight ? 1 : -1));
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
                data: dataFiltrada,
                nodes: nosImportantes,
            },
        ],
    };

    return (
        <>
            <Chart options={lineOptions as Highcharts.Options} />
            <Table
                headers={[
                    <Text>pessoa</Text>,
                    <Text>peso</Text>,
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
