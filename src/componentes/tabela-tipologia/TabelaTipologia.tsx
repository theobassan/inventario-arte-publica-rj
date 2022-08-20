import { useWindowDimensions } from 'react-native';

import { Table, Text } from '@base-components';
import { Obra } from '@domain';

import styles from './styles';

export type TabelaTipologiaProps = {
    tipologias: { nome: string; obras: Obra[] }[];
};

function TabelaTipologia({ tipologias }: TabelaTipologiaProps): JSX.Element {
    const style = styles();

    const { width } = useWindowDimensions();

    const headers = [
        <Text>Tipologia</Text>,
        <Text style={style.total}>{`Total: ${tipologias.length}`}</Text>,
        <Text>Obras</Text>,
    ];
    const rows = tipologias.map((tipologia) => [
        <Text>{tipologia.nome}</Text>,
        <Text style={style.total}>{tipologia.obras.length}</Text>,
        <Text>
            {tipologia.obras
                .map((obra) => obra.Titulo ?? 'Desconhecida')
                .sort((a, b) => a.localeCompare(b))
                .join(', ')}
        </Text>,
    ]);

    const tamanhoColunaTipologia = 150;
    const tamanhoColunaTotal = 70;
    const tamanhoColunaObras = width - tamanhoColunaTipologia - tamanhoColunaTotal;

    return (
        <Table
            headers={headers}
            rows={rows}
            widthArr={[
                tamanhoColunaTipologia,
                tamanhoColunaTotal,
                tamanhoColunaObras,
            ]}
        />
    );
}

export default TabelaTipologia;
