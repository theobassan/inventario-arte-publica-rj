import DiretorSecretaria from '../../domain/diretor_secretaria';
import * as pessoas from './pessoa';

export const EverardoMiranda: DiretorSecretaria = {
    Pessoa: pessoas.EverardoMiranda,
    Mandatos: [
        {
            NomeSecretaria: 'Secretaria Municipal de Cultura',
            NomeDiretoria: 'Diretoria de Artes Visuais - RioArte',
            Cidade: 'Rio de Janeiro',
            DataInicio: '1983',
            DataFim: '1988',
        },
        {
            NomeSecretaria: 'Secretaria Municipal de Cultura',
            NomeDiretoria: 'Diretoria de Artes Visuais - RioArte',
            Cidade: 'Rio de Janeiro',
            DataInicio: '1990',
            DataFim: '1993',
        },
    ],
};
