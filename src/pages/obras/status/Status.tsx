import { ScrollView, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { TabelaTipoObras } from '@componentes';
import { status } from '@utils';

import styles from './styles';

function Status(): JSX.Element {
    const style = styles();

    const statusOrdenadasPorNome = status.sort((a, b) => a.nome.localeCompare(b.nome));

    return (
        <SafeAreaView style={style.container}>
            <ScrollView style={{ width: '100%' }}>
                <TabelaTipoObras tipologia tipo="Status" tipos={statusOrdenadasPorNome} />
                <View style={{ height: 24 }} />
            </ScrollView>
        </SafeAreaView>
    );
}

export default Status;
