import MandatoSecretario from '../../domain/mandato_secretario';
import Secretario from '../../domain/secretario';
import * as pessoas from './pessoa';

export const VaniaDrumondBonelli: Secretario = {
    ID: null,
    Pessoa: pessoas.VaniaDrumondBonelli,
    Mandatos: [
        new MandatoSecretario(`Secretaria Municipal de Cultura`, `23/03/1993`, `31/12/1996`),
    ],
};
