import MandatoSecretario from '../../domain/mandato_secretario';
import Secretario from '../../domain/secretario';
import * as pessoas from './pessoa';

export const RobertoFerraretoDAvila: Secretario = {
    ID: null,
    Pessoa: pessoas.RobertoFerraretoDAvila,
    Profissao: null,
    Mandatos: [new MandatoSecretario(`Secretaria Municipal de Cultura, Turismo e Esportes`, `01/01/1889`, `27/05/1891`)],
};

export const GerardoMagellaMelloMourao: Secretario = {
    ID: null,
    Pessoa: pessoas.GerardoMagellaMelloMourao,
    Mandatos: [new MandatoSecretario(`Secretaria Municipal de Cultura, Turismo e Esportes`, `27/05/1989`, `14/03/1991`)],
};

export const CarlosEduardoAgostiniNovaes: Secretario = {
    ID: null,
    Pessoa: pessoas.CarlosEduardoAgostiniNovaes,
    Mandatos: [new MandatoSecretario(`Secretaria Municipal de Cultura, Turismo e Esportes`, `14/03/1991`, `01/01/1993`)],
};

export const HelenaMariaPortoSeverodaCosta: Secretario = {
    ID: null,
    Pessoa: pessoas.HelenaMariaPortoSeverodaCosta,
    Mandatos: [
        new MandatoSecretario(`Secretaria Municipal de Cultura, Turismo e Esportes`, `01/01/1993`, `16/02/1993`),
        new MandatoSecretario(`Secretaria Municipal de Cultura`, `17/02/1993`, `31/01/2000`),
    ],
};

export const VaniaDrumondBonelli: Secretario = {
    ID: null,
    Pessoa: pessoas.VaniaDrumondBonelli,
    Mandatos: [
        new MandatoSecretario(`Secretaria Municipal de Cultura`, `01/02/2000`, `29/12/2000`),
    ],
};
