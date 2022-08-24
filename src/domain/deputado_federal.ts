import MandatoDeputadoFederal from './mandato_deputado_federal';
import Pessoa from './pessoa';

type DeputadoFederal = {
    Pessoa?: Pessoa;
    Mandatos?: MandatoDeputadoFederal[];
};

export default DeputadoFederal;
