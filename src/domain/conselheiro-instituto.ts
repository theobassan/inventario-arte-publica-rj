import MandatoInstituto from './mandato_instituto';
import Pessoa from './pessoa';

type ConselheiroInstituto = {
    ID?: number;
    Pessoa?: Pessoa;
    Mandatos?: MandatoInstituto[];
};

export default ConselheiroInstituto;
