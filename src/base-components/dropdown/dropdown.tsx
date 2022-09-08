/* eslint-disable @typescript-eslint/no-explicit-any */
import { Dispatch, SetStateAction, useState } from 'react';

import DropDownPicker from 'react-native-dropdown-picker';

import { useTheme } from '@utils';

function Dropdown({
    valor,
    setarValor,
    items,
    zIndex,
}: {
    valor: any;
    setarValor: Dispatch<SetStateAction<any>>;
    items: { label: string; value: any }[];
    zIndex?: number;
}): JSX.Element {
    const { theme } = useTheme();

    const [
        dropdownAberto,
        tornarDropdownAberto,
    ] = useState(false);
    const [
        itemsDropdown,
        setarItemsDropown,
    ] = useState(items);

    function setarValorDropdown(valorNovo: SetStateAction<string>): void {
        if (valor !== valorNovo) {
            setarValor(valorNovo);
        }
    }

    return (
        <DropDownPicker
            theme={theme.dark ? 'DARK' : 'LIGHT'}
            open={dropdownAberto}
            value={valor}
            items={itemsDropdown}
            setOpen={tornarDropdownAberto}
            setValue={setarValorDropdown}
            setItems={setarItemsDropown}
            listMode="SCROLLVIEW"
            scrollViewProps={{
                nestedScrollEnabled: true,
            }}
            zIndex={zIndex}
        />
    );
}

export default Dropdown;
