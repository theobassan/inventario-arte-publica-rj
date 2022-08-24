import Manifesto from '../../domain/manifesto';
import * as pessoas from './pessoa';

export const ManisfestoNeoconcreto1959: Manifesto = {
    Nome: 'Manifesto Neoconcreto',
    Publicacao: 'Suplemento dominical do Jornal do Brasil',
    Cidade: 'Rio de Janeiro',
    Local: undefined,
    Data: '1959',
    Assinantes: [
        pessoas.AmilcardeCastro,
        pessoas.FerreiraGullar,
        pessoas.FranzWeissmann,
        pessoas.LygiaPape,
        pessoas.LygiaClark,
        pessoas.ReynaldoJardim,
        pessoas.TheonSpanudis,
    ],
};
