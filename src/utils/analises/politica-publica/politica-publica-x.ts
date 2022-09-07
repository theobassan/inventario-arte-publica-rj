import { PoliticaPublica, TipoCapital, TrocaCapital } from '@domain';

import trocaCapital from '../capitais/troca-capital';
import { default as autoresPoliticaPublica } from './autores';
import { default as coordenadoresPoliticaPublica } from './coordenadores';
import { default as idealizadoresPoliticaPublica } from './idealizadores';
import { default as seletoresPoliticaPublica } from './seletores';

function politicaPublicaX(politicaPublica: PoliticaPublica): TrocaCapital[] {
    const coordenadores = coordenadoresPoliticaPublica(politicaPublica);
    const idealizadores = idealizadoresPoliticaPublica(politicaPublica);
    const seletores = seletoresPoliticaPublica(politicaPublica);
    const autores = autoresPoliticaPublica(politicaPublica);

    const coordenadorXcoordenador = trocaCapital(coordenadores, coordenadores, 'coordenador-coordenador', [TipoCapital.Social]);
    const coordenadorXidealizador = trocaCapital(coordenadores, idealizadores, 'coordenador-idealizador', [TipoCapital.Social]);
    const coordenadorXseletor = trocaCapital(coordenadores, seletores, 'coordenador-seletor', [TipoCapital.Social]);

    const idealizadorXidealizador = trocaCapital(idealizadores, idealizadores, 'idealizador-idealizador', [TipoCapital.Social]);
    const idealizadorXseletor = trocaCapital(idealizadores, seletores, 'idealizador-seletor', [TipoCapital.Social]);

    const seletorXseletor = trocaCapital(seletores, seletores, 'seletor-seletor', [TipoCapital.Social]);
    const seletorXautor = trocaCapital(seletores, autores, 'seletor-autor', [
        TipoCapital.Social,
        TipoCapital.Cultural,
    ]);

    return [
        ...coordenadorXcoordenador,
        ...coordenadorXidealizador,
        ...coordenadorXseletor,
        ...idealizadorXidealizador,
        ...idealizadorXseletor,
        ...seletorXseletor,
        ...seletorXautor,
    ];
}

export default politicaPublicaX;
