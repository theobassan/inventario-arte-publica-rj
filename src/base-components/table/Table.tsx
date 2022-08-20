import { StyleSheet } from 'react-native';
import { Table as TableNative, Row, Rows } from 'react-native-table-component';

type TableProps = {
    headers?: JSX.Element[];
    rows?: JSX.Element[][];
    widthArr?: (number | undefined)[];
};

function Table({ headers, rows, widthArr }: TableProps): JSX.Element {
    const style = styles();

    return (
        <TableNative borderStyle={style.table}>
            <Row widthArr={widthArr as number[]} data={headers} style={style.head} />
            <Rows widthArr={widthArr as number[]} data={rows} />
        </TableNative>
    );
}

export default Table;

function styles() {
    return StyleSheet.create({
        table: {
            borderWidth: 1,
            borderColor: '#c8e1ff',
        },
        head: { height: 40 },
    });
}
