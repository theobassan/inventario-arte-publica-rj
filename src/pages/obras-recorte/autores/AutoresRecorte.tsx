import { ScrollView, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { TabelaTipoObras } from '@componentes';
import { autoresRecorte } from '@utils';

import MaiorAutorRecorte from './MaiorAutorRecorte';
import styles from './styles';

function AutoresRecorte(): JSX.Element {
    const style = styles();

    const autoresRecorteOrdenadasPorNome = autoresRecorte.sort((a, b) => a.nome.localeCompare(b.nome));

    return (
        <SafeAreaView style={style.container}>
            <ScrollView style={{ width: '100%' }}>
                <MaiorAutorRecorte />
                <View style={{ height: 24 }} />
                <TabelaTipoObras tipologia tipo="Autores" tipos={autoresRecorteOrdenadasPorNome} />
            </ScrollView>
        </SafeAreaView>
    );
}

export default AutoresRecorte;
