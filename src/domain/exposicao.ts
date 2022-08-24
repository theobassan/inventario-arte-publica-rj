import Pessoa from './pessoa';

type Exposicao = {
    Nome?: string;
    Instituicao?: string;
    Cidade?: string;
    Local?: string;
    DataInicio?: string;
    DataFim?: string;
    Curadores?: Pessoa[];
    Expositores?: Pessoa[];
    Patrocinios?: string[];
};

export default Exposicao;
