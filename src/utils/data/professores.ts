import Professor from '../../domain/professor';
import * as pessoas from './pessoa';

export const FranzWeissmann_EscolaGuinard_ModeloVivo: Professor = {
    Pessoa: pessoas.FranzWeissmann,
    Instituicao: 'Escola Guinard',
    Cidade: 'Belo Horizonte',
    Curso: 'Modelo Vivo',
    DataInicio: '1948',
    DataFim: '1956',
};

export const FranzWeissmann_EscolaGuinard_Escultura: Professor = {
    Pessoa: pessoas.FranzWeissmann,
    Instituicao: 'Escola Guinard',
    Cidade: 'Belo Horizonte',
    Curso: 'Escultura',
    DataInicio: '1948',
    DataFim: '1956',
};

export const AlbertodaVeigaGuignard_EscolaGuinard: Professor = {
    Pessoa: pessoas.AlbertodaVeigaGuignard,
    Instituicao: 'Escola Guinard',
    Cidade: 'Belo Horizonte',
    Curso: undefined, // TODO: precisa do curso e data p lincar com AmilcardeCastro
    DataInicio: undefined,
    DataFim: undefined,
};

export const AugustZamoiski_AtelieAugustZamoyski_Desenho: Professor = {
    Pessoa: pessoas.AugustZamoiski,
    Instituicao: 'Atelie August Zamoyski',
    Cidade: 'Rio de Janeiro',
    Curso: 'Desenho',
    DataInicio: '1942',
    DataFim: '1944',
};

export const AugustZamoiski_AtelieAugustZamoyski_Escultura: Professor = {
    Pessoa: pessoas.AugustZamoiski,
    Instituicao: 'Atelie August Zamoyski',
    Cidade: 'Rio de Janeiro',
    Curso: 'Escultura',
    DataInicio: '1942',
    DataFim: '1944',
};

export const AugustZamoiski_AtelieAugustZamoyski_Fundicao: Professor = {
    Pessoa: pessoas.AugustZamoiski,
    Instituicao: 'Atelie August Zamoyski',
    Cidade: 'Rio de Janeiro',
    Curso: 'Fundição',
    DataInicio: '1942',
    DataFim: '1944',
};

export const FernandoCocchiarale_PucRJ_DepartamentoFilosofia: Professor = {
    Pessoa: pessoas.FernandoCocchiarale,
    Instituicao: 'Pontifícia Universidade Católica',
    Cidade: 'Rio de Janeiro',
    Curso: 'Departamento de Filosofia',
    DataInicio: '1978',
    DataFim: undefined,
};

export const FernandoCocchiarale_EscoladeArtesVisuaisdoParqueLage_DepartamentoFilosofia: Professor = {
    Pessoa: pessoas.FernandoCocchiarale,
    Instituicao: 'Escola de Artes Visuais do Parque Lage',
    Cidade: 'Rio de Janeiro',
    Curso: undefined, // TODO
    DataInicio: '1990',
    DataFim: undefined,
};
