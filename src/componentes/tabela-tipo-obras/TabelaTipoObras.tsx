import { Table, Text } from '@base-components';
import { Obra } from '@domain';
import { getYear } from '@utils/data/analisys_utils';

import styles from './styles';

export type TabelaTipoObrasProps = {
    tipo: string;
    tipos: { nome: string; obras: Obra[] }[];
    tipologia?: boolean;
    zona?: boolean;
};

function headers({ tipo, tipos, tipologia, zona }: TabelaTipoObrasProps): JSX.Element[] {
    const style = styles();

    const defaultHeaders = [
        <Text>{tipo}</Text>,
        <Text style={style.total}>{`Total: ${tipos.length}`}</Text>,
    ];

    if (tipologia === true || zona === true) {
        if (tipologia === true && zona === true) {
            return [
                ...defaultHeaders,
                <Text>Tipologias/Obras</Text>,
                <Text>Zonas/Bairros</Text>,
            ];
        } else if (tipologia === true) {
            return [
                ...defaultHeaders,
                <Text>Tipologias/Obras</Text>,
            ];
        } else {
            return [
                ...defaultHeaders,
                <Text>Zonas/Bairros</Text>,
                <Text>Obras</Text>,
            ];
        }
    } else {
        return [
            ...defaultHeaders,
            <Text>Obras</Text>,
        ];
    }
}

function TabelaTipoObras({ tipo, tipos, tipologia, zona }: TabelaTipoObrasProps): JSX.Element {
    const style = styles();

    const rows = tipos.map((tipo) => {
        const rows = [
            <Text>{tipo.nome}</Text>,
            <Text style={style.total}>{tipo.obras.length}</Text>,
        ];

        if (tipologia === true) {
            const tipologias = tipo.obras
                .map((obra) => obra.Tipologia ?? 'Desconhecida')
                .reduce<string[]>((tipologias, tipologia) => {
                    if (!tipologias.includes(tipologia)) {
                        tipologias.push(tipologia);
                    }
                    return tipologias;
                }, [])
                .sort((a, b) => a.localeCompare(b))
                .map((tipologia) => {
                    const obras = tipo.obras.filter((obra) => obra.Tipologia === tipologia || (tipologia === 'Desconhecida' && obra.Tipologia == null));

                    return {
                        nome: tipologia,
                        obras,
                    };
                });

            rows.push(
                <Text>
                    {tipologias
                        .map(
                            (tipologia) =>
                                `${tipologia.nome} (${tipologia.obras.length}): ${tipologia.obras
                                    .map((obra) => `${obra.Titulo ?? 'Desconhecida'} [${getYear(obra.DataInauguracao) ?? 'S.D.'}]`)
                                    .join(', ')}`,
                        )
                        .join('\n\n')}
                </Text>,
            );
        }

        if (zona === true) {
            const zonas = tipo.obras
                .map((obra) => obra.Zona ?? 'Desconhecida')
                .reduce<string[]>((tipologias, tipologia) => {
                    if (!tipologias.includes(tipologia)) {
                        tipologias.push(tipologia);
                    }
                    return tipologias;
                }, [])
                .sort((a, b) => a.localeCompare(b))
                .map((zona) => {
                    const obras = tipo.obras.filter((obra) => obra.Zona === zona || (zona === 'Desconhecida' && obra.Zona == null));

                    return {
                        nome: zona,
                        obras,
                    };
                });

            rows.push(
                <Text>
                    {zonas
                        .map(
                            (zona) =>
                                `${zona.nome} (${zona.obras.length}): ${zona.obras
                                    .map((obra) => obra.Bairro ?? 'Desconhecida')
                                    .reduce<string[]>((bairros, bairro) => {
                                        if (!bairros.includes(bairro)) {
                                            bairros.push(bairro);
                                        }
                                        return bairros;
                                    }, [])
                                    .sort((a, b) => a.localeCompare(b))
                                    .join(', ')}`,
                        )
                        .join('\n\n')}
                </Text>,
            );
        }

        if (!tipologia) {
            rows.push(
                <Text>
                    {tipo.obras
                        .map((obra) => obra.Titulo ?? 'Desconhecida')
                        .sort((a, b) => a.localeCompare(b))
                        .join(', ')}
                </Text>,
            );
        }

        return rows;
    });

    const tamanhoColunaTipologia = 150;
    const tamanhoColunaTotal = 70;

    return (
        <Table
            headers={headers({ tipo, tipos, tipologia, zona })}
            rows={rows}
            widthArr={[
                tamanhoColunaTipologia,
                tamanhoColunaTotal,
                undefined,
            ]}
        />
    );
}

export default TabelaTipoObras;
