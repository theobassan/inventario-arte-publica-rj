import Obra from './obra';
import Pessoa from './pessoa';

type PoltíticaPublica = {
    Titulo?: string;
    Descricao?: string;
    Orcamento?: string;
    ProjetoInicio?: string;
    ProjetoFim?: string;
    ImplementacaoInicio?: string;
    ImplementacaoFim?: string;
    Cidade?: string;
    Estado?: string;
    Pais?: string;
    Tipo?: string;
    Secretaria?: string;
    Obras?: Obra[];
    Coordenaor?: Pessoa;
    ComissaoDeSelecao?: Pessoa[];
};

export default PoltíticaPublica;
