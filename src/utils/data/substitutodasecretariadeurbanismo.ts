import MandatoSecretario from '../../domain/mandato_secretario';
import Secretario from '../../domain/secretario';
import * as pessoas from './pessoa';

export const MariaMadalenaSaintMartinAstacio: Secretario = {
    ID: null,
    Pessoa: pessoas.MariaMadalenaSaintMartinAstacio,
    Mandatos: [
        new MandatoSecretario(`Secretaria Municipal de Urbanismo`, `30/10/1995`, ``),
    ],
};

export const MauroBarataSoaresdeFigueiredo: Secretario = {
    ID: null,
    Pessoa: pessoas.MauroBarataSoaresdeFigueiredo,
    Mandatos: [
        new MandatoSecretario(`Secretaria Municipal de Urbanismo`, `2/06/1996`, ``),
    ],
};
