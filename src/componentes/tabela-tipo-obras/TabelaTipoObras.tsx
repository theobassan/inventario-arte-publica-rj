import { useWindowDimensions } from 'react-native';

import { Table, Text } from '@base-components';
import { Obra } from '@domain';

import styles from './styles';

export type TabelaTipoObrasProps = {
    tipo: string;
    tipos: { nome: string; obras: Obra[] }[];
};

function TabelaTipoObras({ tipo, tipos }: TabelaTipoObrasProps): JSX.Element {
    const style = styles();

    const { width } = useWindowDimensions();

    const headers = [
        <Text>{tipo}</Text>,
        <Text style={style.total}>{`Total: ${tipos.length}`}</Text>,
        <Text>Obras</Text>,
    ];
    const rows = tipos.map((tipo) => [
        <Text>{tipo.nome}</Text>,
        <Text style={style.total}>{tipo.obras.length}</Text>,
        <Text>
            {tipo.obras
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

export default TabelaTipoObras;
