import { ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

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
        <SafeAreaView style={style.container}>
            <ScrollView style={{ width: '100%' }}>
                <TabelaTipoObras tipo={tipo} tipos={tiposOrdenadoPorTotal} tipologia={tipologia} zona={zona} />
            </ScrollView>
        </SafeAreaView>
    );
}

export default TabelaTipoTipologiaObra;
