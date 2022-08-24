import MandatoDiretorMuseu from './mandato_diretor_museu';
import Pessoa from './pessoa';

type DiretorMuseu = {
    Pessoa?: Pessoa;
    Mandatos?: MandatoDiretorMuseu[];
};

export default DiretorMuseu;
