import ConselheiroInstituto from '../../domain/conselheiro-instituto';
import * as pessoas from './pessoa';

export const LauroCavalcanti: ConselheiroInstituto = {
    Pessoa: pessoas.LauroCavalcanti,
    Mandatos: [
        {
            NomeInstituto: 'Instituto Casa Roberto Marinho',
            AbreviacaoInstituto: undefined,
            Cidade: undefined,
            Estado: undefined,
            Pais: 'Brasil',
            DataInicio: '2016',
            DataFim: '...',
        },
    ],
};
