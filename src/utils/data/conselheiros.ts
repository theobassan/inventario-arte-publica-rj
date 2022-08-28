import Conselheiro from '../../domain/conselheiro';
import * as pessoas from './pessoa';

export const LuizPauloFernandezConde: Conselheiro = {
    Pessoa: pessoas.LuizPauloFernandezConde,
    Mandatos: [
        {
            NomeConselho: 'Conselho Municipal de Proteção ao Patrimônio Cultural',
            Cidade: 'Rio de Janeiro',
            Estado: 'Rio de Janeiro',
            Pais: 'Brasil',
            DataInicio: '1988',
            DataFim: undefined,
        },
    ],
};
