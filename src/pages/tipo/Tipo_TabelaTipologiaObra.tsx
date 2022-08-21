import { ScrollView, View } from 'react-native';

import { TabelaTipoObras } from '@componentes';
import { Obra } from '@domain';

import styles from './styles';

type TabelaTipoTipologiaObraProps = {
    tipo: string;
    tipos: { nome: string; obras: Obra[] }[];
    tipologia?: boolean;
    zona?: boolean;
};

function TabelaTipoTipologiaObra({ tipo, tipos, tipologia, zona }: TabelaTipoTipologiaObraProps): JSX.Element {
    const style = styles();

    const tiposOrdenadoPorTotal = [...tipos].sort((a, b) => (a.obras.length < b.obras.length ? 1 : -1));

    return (
        <View style={style.container}>
            <ScrollView style={{ width: '100%' }}>
                <TabelaTipoObras tipo={tipo} tipos={tiposOrdenadoPorTotal} tipologia={tipologia} zona={zona} />
            </ScrollView>
        </View>
    );
}

export default TabelaTipoTipologiaObra;
