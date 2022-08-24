import AssessorSecretaria from '../../domain/assessor_secretaria';
import * as pessoas from './pessoa';

export const DanielaPedras: AssessorSecretaria = {
    Pessoa: pessoas.DanielaPedras,
    Mandatos: [
        {
            NomeSecretaria: 'Secretaria Municipal de Cultura',
            NomeAssessoria: 'Assesoria de Projetos Especiais',
            Cidade: 'Rio de Janeiro',
            DataInicio: '1994',
            DataFim: '1995',
        },
    ],
};
