import DeputadoFederal from '../../domain/deputado_federal';
import * as pessoas from './pessoa';

export const CesarEpitacioMaia: DeputadoFederal = {
    Pessoa: pessoas.CesarEpitacioMaia,
    Mandatos: [
        {
            Pais: 'Brasil',
            Estado: 'Rio de Janeiro',
            Partido: undefined,
            DataInicio: '01/02/1987', //??TODO
            DataFim: '31/12/1992',
        },
    ],
};
