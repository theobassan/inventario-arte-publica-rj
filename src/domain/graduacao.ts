import Pessoa from './pessoa';

type Graduacao = {
    Pessoa?: Pessoa;
    Faculdade?: string;
    Cidade?: string;
    Curso?: string;
    DataInicio?: string;
    DataFim?: string;
    Finalizou?: boolean;
};

export default Graduacao;
