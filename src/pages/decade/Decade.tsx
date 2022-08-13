import { useState } from 'react';

import { StyleSheet, View } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Table, Row, Rows } from 'react-native-table-component';

import { Text } from '@components';
import { Obra } from '@domain';
import { useTheme } from '@utils';
import * as analisys_list_utils from '@utils/data/analisys_list_utils';

function Decade(): JSX.Element | null {
    const { theme } = useTheme();

    const allYears: { label: string; value: string }[] = [];
    for (let year = 2020; year > 1500; year = year - 10) {
        allYears.push({ label: year.toString(), value: year.toString() });
    }

    const [open, setOpen] = useState(false);
    const [year, setValue] = useState('1990');
    const [items, setItems] = useState(allYears);

    const typed_analisys_list_utils: Record<string, Obra[]> = analisys_list_utils;

    const style = styles();

    const obras_decada: Obra[] = typed_analisys_list_utils[`all${year}`];

    if (obras_decada.length > 0) {
        const tipologias_obras_decada: string[] = obras_decada.map((obra) => obra.Tipologia ?? 'Desconhecida');
        const naturezas_obras_decada: string[] = obras_decada.map((obra) => obra.Natureza ?? 'Desconhecida');
        const zonas_obras_decada: string[] = obras_decada.map((obra) => obra.Zona ?? 'Desconhecida');
        const status_obras_decada: string[] = obras_decada.map((obra) => obra.Status ?? 'Desconhecida');

        const tipologias_obras_decada_total: { nome: string; total: number }[] = tipologias_obras_decada
            .reduce<{ nome: string; total: number }[]>(function (r, a) {
                const r_top = r.find((top) => top.nome === a);
                if (!r_top) {
                    r.push({
                        nome: a,
                        total: tipologias_obras_decada.filter((top) => top === a).length,
                    });
                }
                return r;
            }, [])
            .sort((a, b) => a.nome.localeCompare(b.nome));

        const naturezas_obras_decada_total: { nome: string; total: number }[] = naturezas_obras_decada
            .reduce<{ nome: string; total: number }[]>(function (r, a) {
                const r_top = r.find((top) => top.nome === a);
                if (!r_top) {
                    r.push({
                        nome: a,
                        total: naturezas_obras_decada.filter((top) => top === a).length,
                    });
                }
                return r;
            }, [])
            .sort((a, b) => a.nome.localeCompare(b.nome));

        const zonas_obras_decada_total: { nome: string; total: number }[] = zonas_obras_decada
            .reduce<{ nome: string; total: number }[]>(function (r, a) {
                const r_top = r.find((top) => top.nome === a);
                if (!r_top) {
                    r.push({
                        nome: a,
                        total: zonas_obras_decada.filter((top) => top === a).length,
                    });
                }
                return r;
            }, [])
            .sort((a, b) => a.nome.localeCompare(b.nome));

        const status_obras_decada_total: { nome: string; total: number; tipologias: { nome: string; total: number }[] }[] = status_obras_decada
            .reduce<{ nome: string; total: number; tipologias: { nome: string; total: number }[] }[]>(function (r, a) {
                const r_top = r.find((top) => top.nome === a);
                if (!r_top) {
                    const tipologias = obras_decada
                        .filter((obra) => obra.Status === a || (a === 'Desconhecida' && obra.Status == null))
                        .map((obra) => obra.Tipologia ?? 'Desconhecida');

                    const tipologias_total: { nome: string; total: number }[] = tipologias
                        .reduce<{ nome: string; total: number }[]>(function (r, a) {
                            const r_top = r.find((top) => top.nome === a);
                            if (!r_top) {
                                r.push({
                                    nome: a,
                                    total: tipologias.filter((top) => top === a).length,
                                });
                            }
                            return r;
                        }, [])
                        .sort((a, b) => a.nome.localeCompare(b.nome));

                    r.push({
                        nome: a,
                        total: status_obras_decada.filter((top) => top === a).length,
                        tipologias: tipologias_total,
                    });
                }
                return r;
            }, [])
            .sort((a, b) => a.nome.localeCompare(b.nome));

        return (
            <SafeAreaView>
                <ScrollView style={{ width: '100%' }}>
                    <DropDownPicker
                        theme={theme.dark ? 'DARK' : 'LIGHT'}
                        open={open}
                        value={year}
                        items={items}
                        setOpen={setOpen}
                        setValue={setValue}
                        setItems={setItems}
                        listMode="SCROLLVIEW"
                        scrollViewProps={{
                            nestedScrollEnabled: true,
                        }}
                    />
                    <View style={{ height: 24 }} />

                    <Text>
                        {year}: {obras_decada.length}
                    </Text>
                    <View style={{ height: 24 }} />

                    <Table borderStyle={{ borderWidth: 2, borderColor: '#c8e1ff' }}>
                        <Row data={[<Text>Tipologia</Text>, <Text>Total</Text>]} style={style.head} />
                        <Rows data={tipologias_obras_decada_total.map((top) => [<Text>{top.nome}</Text>, <Text>{top.total}</Text>])} />
                    </Table>
                    <View style={{ height: 24 }} />

                    <Table borderStyle={{ borderWidth: 2, borderColor: '#c8e1ff' }}>
                        <Row data={[<Text>Natureza</Text>, <Text>Total</Text>]} style={style.head} />
                        <Rows data={naturezas_obras_decada_total.map((top) => [<Text>{top.nome}</Text>, <Text>{top.total}</Text>])} />
                    </Table>
                    <View style={{ height: 24 }} />

                    <Table borderStyle={{ borderWidth: 2, borderColor: '#c8e1ff' }}>
                        <Row data={[<Text>Zona</Text>, <Text>Total</Text>]} style={style.head} />
                        <Rows data={zonas_obras_decada_total.map((top) => [<Text>{top.nome}</Text>, <Text>{top.total}</Text>])} />
                    </Table>
                    <View style={{ height: 24 }} />

                    <Table borderStyle={{ borderWidth: 2, borderColor: '#c8e1ff' }}>
                        <Row data={[<Text>Status</Text>, <Text>Total</Text>, <Text>Tipologias</Text>]} style={style.head} />
                        <Rows
                            data={status_obras_decada_total.map((top) => [
                                <Text>{top.nome}</Text>,
                                <Text>{top.total}</Text>,
                                <Text>{top.tipologias.map((top) => `${top.nome} (${top.total})`).join(', ')}</Text>,
                            ])}
                        />
                    </Table>
                    <View style={{ height: 24 }} />
                </ScrollView>
            </SafeAreaView>
        );
    }

    return (
        <SafeAreaView>
            <DropDownPicker
                theme={theme.dark ? 'DARK' : 'LIGHT'}
                open={open}
                value={year}
                items={items}
                setOpen={setOpen}
                setValue={setValue}
                setItems={setItems}
                listMode="SCROLLVIEW"
                scrollViewProps={{
                    nestedScrollEnabled: true,
                }}
            />
            <View style={{ height: 24 }} />
            <Text>Sem dados sobre o período</Text>
        </SafeAreaView>
    );
}

function styles() {
    return StyleSheet.create({
        container: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
        },
        head: { height: 40 },
    });
}

export default Decade;
