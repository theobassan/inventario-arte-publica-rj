import Obra from './obra';
import Pessoa from './pessoa';

type PoliticaPublica = {
    ID?: number;
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
    Coordenadores?: Pessoa[];
    Idealizadores?: Pessoa[];
    ComissaoDeSelecao?: Pessoa[];
};

export default PoliticaPublica;
