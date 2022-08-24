import Vereador from '../../domain/vereador';
import * as pessoas from './pessoa';

export const CesarEpitacioMaia: Vereador = {
    Pessoa: pessoas.CesarEpitacioMaia,
    Mandatos: [
        {
            Cidade: 'Rio de Janeiro',
            Partido: undefined,
            DataInicio: '01/02/2013',
            DataFim: undefined,
        },
    ],
};
