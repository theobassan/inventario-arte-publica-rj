import { Table, Text } from '@base-components';
import { Obra } from '@domain';

import styles from './styles';

export type TabelaTipoObrasProps = {
    tipo: string;
    tipos: { nome: string; obras: Obra[] }[];
    tipologia?: boolean;
};

function TabelaTipoObras({ tipo, tipos, tipologia }: TabelaTipoObrasProps): JSX.Element {
    const style = styles();

    const headers =
        tipologia === true
            ? [
                  <Text>{tipo}</Text>,
                  <Text style={style.total}>{`Total: ${tipos.length}`}</Text>,
                  <Text>Tipologias/Obras</Text>,
              ]
            : [
                  <Text>{tipo}</Text>,
                  <Text style={style.total}>{`Total: ${tipos.length}`}</Text>,
                  <Text>Obras</Text>,
              ];

    const rows = tipos.map((tipo) => {
        const defaultRows = [
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

            return [
                ...defaultRows,
                <Text>
                    {tipologias
                        .map(
                            (tipologia) =>
                                `${tipologia.nome} (${tipologia.obras.length}): ${tipologia.obras.map((obra) => obra.Titulo ?? 'Desconhecida').join(', ')}`,
                        )
                        .join('\n\n')}
                </Text>,
            ];
        }

        return [
            ...defaultRows,
            <Text>
                {tipo.obras
                    .map((obra) => obra.Titulo ?? 'Desconhecida')
                    .sort((a, b) => a.localeCompare(b))
                    .join(', ')}
            </Text>,
        ];
    });

    const tamanhoColunaTipologia = 150;
    const tamanhoColunaTotal = 70;

    return (
        <Table
            headers={headers}
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
