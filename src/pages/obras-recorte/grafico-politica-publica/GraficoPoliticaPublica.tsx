import { useState } from 'react';

import { ScrollView, View } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

import { PoliticaPublica } from '@domain';
import { useTheme } from '@utils';
import * as politicapublicas from '@utils/data/politicapublica';

import DependencyWheelForce from './DependencyWheelForce';
import DependencyWheelNode from './DependencyWheelNode';

function GraficoPoliticaPublica(): JSX.Element {
    const { theme } = useTheme();

    const typed_politicapublicas: Record<string, PoliticaPublica> = politicapublicas;

    const [
        dropdownAberto,
        tornarDropdownAberto,
    ] = useState(false);
    const [
        valorDropdown,
        setarValorDropdown,
    ] = useState('EsculturasUrbanas');
    const [
        itemsDropdown,
        setarItemsDropown,
    ] = useState(Object.keys(typed_politicapublicas).map((key) => ({ label: typed_politicapublicas[key].Titulo, value: key })));

    const [
        dropdownAberto2,
        tornarDropdownAberto2,
    ] = useState(false);
    const [
        valorDropdown2,
        setarValorDropdown2,
    ] = useState(0);
    const [
        itemsDropdown2,
        setarItemsDropown2,
    ] = useState(
        [
            0,
            1,
            2,
            3,
            4,
            5,
            6,
            7,
            8,
            9,
            10,
            11,
            12,
            13,
            14,
            15,
        ].map((key) => ({ label: key.toString(), value: key })),
    );

    const [
        dropdownAberto3,
        tornarDropdownAberto3,
    ] = useState(false);
    const [
        valorDropdown3,
        setarValorDropdown3,
    ] = useState(0);
    const [
        itemsDropdown3,
        setarItemsDropown3,
    ] = useState(
        [
            0,
            1,
            2,
            3,
            4,
            5,
            6,
            7,
            8,
            9,
            10,
            11,
            12,
            13,
            14,
            15,
        ].map((key) => ({ label: key.toString(), value: key })),
    );

    return (
        <ScrollView style={{ width: '100%' }}>
            <View>
                <DropDownPicker
                    theme={theme.dark ? 'DARK' : 'LIGHT'}
                    open={dropdownAberto}
                    value={valorDropdown}
                    items={itemsDropdown}
                    setOpen={tornarDropdownAberto}
                    setValue={setarValorDropdown}
                    setItems={setarItemsDropown}
                    listMode="SCROLLVIEW"
                    scrollViewProps={{
                        nestedScrollEnabled: true,
                    }}
                />
                <DropDownPicker
                    theme={theme.dark ? 'DARK' : 'LIGHT'}
                    open={dropdownAberto2}
                    value={valorDropdown2}
                    items={itemsDropdown2}
                    setOpen={tornarDropdownAberto2}
                    setValue={setarValorDropdown2}
                    setItems={setarItemsDropown2}
                    listMode="SCROLLVIEW"
                    scrollViewProps={{
                        nestedScrollEnabled: true,
                    }}
                />
                <DependencyWheelForce politicaPublica={typed_politicapublicas[valorDropdown]} peso={valorDropdown2} />
                <DropDownPicker
                    theme={theme.dark ? 'DARK' : 'LIGHT'}
                    open={dropdownAberto3}
                    value={valorDropdown3}
                    items={itemsDropdown3}
                    setOpen={tornarDropdownAberto3}
                    setValue={setarValorDropdown3}
                    setItems={setarItemsDropown3}
                    listMode="SCROLLVIEW"
                    scrollViewProps={{
                        nestedScrollEnabled: true,
                    }}
                />
                <DependencyWheelNode politicaPublica={typed_politicapublicas[valorDropdown]} peso={valorDropdown3} />
            </View>
        </ScrollView>
    );
}

export default GraficoPoliticaPublica;
