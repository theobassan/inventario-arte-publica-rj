import VicePresidenteFundacao from '../../domain/vicepresidente_fundacao';
import * as pessoas from './pessoa';

export const HelenaMariaPortoSeveroDaCosta: VicePresidenteFundacao = {
    Pessoa: pessoas.HelenaMariaPortoSeveroDaCosta,
    Mandatos: [
        {
            NomeFundacao: 'Fundação Anita Mantuano de Artes do Estado do Rio de Janeiro',
            AbreviacaoFundacao: 'FUNARJ',
            Cidade: 'Rio de Janeiro',
            Estado: 'Rio de Janeiro',
            Pais: 'Brasil',
            DataInicio: '1980',
            DataFim: undefined,
        },
    ],
};
