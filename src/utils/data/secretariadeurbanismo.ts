import MandatoSecretario from '../../domain/mandato_secretario';
import Secretario from '../../domain/secretario';
import * as pessoas from './pessoa';

export const ArnaldoAssisMourthe: Secretario = {
    ID: null,
    Pessoa: pessoas.ArnaldoAssisMourthe,
    Mandatos: [new MandatoSecretario(`Secretaria Municipal de Urbanismo e Meio Ambiente`, `01/01/1889`, `02/04/1890`)],
};

export const LeliaMariaBastosFraga: Secretario = {
    ID: null,
    Pessoa: pessoas.LeliaMariaBastosFraga,
    Mandatos: [
        new MandatoSecretario(`Designada para substituir o Secretario Municipal de Urbanismo e Meio Ambiente em seus impedimentos`, `03/09/1989`, ``),
        new MandatoSecretario(`Secretaria Municipal de Urbanismo e Meio Ambiente `, `02/06/1992`, `13/07/1992`),
        new MandatoSecretario(`Secretaria Municipal de Urbanismo e Meio Ambiente`, `13/07/1992`, `01/01/1993`),
    ],
};

export const LuizPauloFernandezConde: Secretario = {
    ID: null,
    Pessoa: pessoas.LuizPauloFernandezConde,
    Mandatos: [
        new MandatoSecretario(`Secretario Municipal de Urbanismo`, `01/01/1993`, `30/05/1996`),
    ],
};

export const AndreaAlbuquerqueGarciaRedondo: Secretario = {
    ID: null,
    Pessoa: pessoas.AndreaAlbuquerqueGarciaRedondo,
    Mandatos: [
        new MandatoSecretario(`Secretaria Municipal de Urbanismo`, '30/05/1996', '30/12/1996'),
    ],
};

export const HeliaNacifXavier: Secretario = {
    ID: null,
    Pessoa: pessoas.HeliaNacifXavier,
    Mandatos: [
        new MandatoSecretario(`Secretaria Municipal de Urbanismo`, `01/01/1997`, `29/12/2000`),
    ],
};
