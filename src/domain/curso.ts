import Pessoa from './pessoa';

type Curso = {
    Pessoa?: Pessoa;
    Instituicao?: string;
    Cidade?: string;
    Curso?: string;
    DataInicio?: string;
    DataFim?: string;
    Finalizou?: boolean;
};

export default Curso;
