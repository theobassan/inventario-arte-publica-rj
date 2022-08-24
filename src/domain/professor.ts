import Pessoa from './pessoa';

type Professor = {
    Pessoa?: Pessoa;
    Instituicao?: string;
    Cidade?: string;
    Curso?: string;
    DataInicio?: string;
    DataFim?: string;
};

export default Professor;
