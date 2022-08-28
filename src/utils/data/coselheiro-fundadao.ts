import ConselheiroFundacao from '../../domain/conselheiro-fundacao';
import * as pessoas from './pessoa';

export const LauroCavalcanti: ConselheiroFundacao = {
    Pessoa: pessoas.LauroCavalcanti,
    Mandatos: [
        {
            NomeFundacao: 'Fundação Oscar Niemeyer',
            AbreviacaoFundacao: undefined,
            Cidade: undefined,
            Estado: undefined,
            Pais: 'Brasil',
            DataInicio: undefined,
            DataFim: undefined,
        },
    ],
};
