import Exposicao from './exposicao';
import Pessoa from './pessoa';

type Premio = {
    Nome?: string;
    Evento?: Exposicao;
    Instituicao?: string;
    Cidade?: string;
    Local?: string;
    Data?: string;
    Pessoas?: Pessoa[];
    Descricao?: string;
};

export default Premio;
