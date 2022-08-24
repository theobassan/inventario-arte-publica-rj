import DiretorMuseu from '../../domain/diretor_museu';
import * as pessoas from './pessoa';

export const HelenaMariaPortoSeverodaCosta: DiretorMuseu = {
    Pessoa: pessoas.HelenaMariaPortoSeverodaCosta,
    Mandatos: [
        {
            NomeMuseu: 'Museu da República',
            Cidade: 'Rio de Janeiro',
            DataInicio: '1991',
            DataFim: undefined,
        },
    ],
};

export const EverardoMiranda: DiretorMuseu = {
    Pessoa: pessoas.EverardoMiranda,
    Mandatos: [
        {
            NomeMuseu: 'Museu Histórico da Cidade',
            Cidade: 'Rio de Janeiro',
            DataInicio: '1995',
            DataFim: '1997',
        },
    ],
};
