import GenenteSecretaria from '../../domain/gerente_secretaria';
import * as pessoas from './pessoa';

export const EverardoMiranda: GenenteSecretaria = {
    Pessoa: pessoas.EverardoMiranda,
    Mandatos: [
        {
            NomeSecretaria: 'Secretaria Municipal de Cultura',
            NomeGerencia: 'Gerente Projetos Especiais',
            Cidade: 'Rio de Janeiro',
            DataInicio: '1990',
            DataFim: '1993',
        },
    ],
};

export const MauroMonizFreire: GenenteSecretaria = {
    Pessoa: pessoas.MauroMonizFreire,
    Mandatos: [
        {
            NomeSecretaria: 'Secretaria Municipal de Obras', //TODO
            NomeGerencia: 'Gerente de Monumentos e Chafarizes',
            Cidade: 'Rio de Janeiro',
            DataInicio: undefined,
            DataFim: undefined,
        },
    ],
};
