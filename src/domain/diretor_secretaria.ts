import MandatoDiretorSecretaria from './mandato_diretor_secretaria';
import Pessoa from './pessoa';

type DiretorSecretaria = {
    Pessoa?: Pessoa;
    Mandatos?: MandatoDiretorSecretaria[];
};

export default DiretorSecretaria;
