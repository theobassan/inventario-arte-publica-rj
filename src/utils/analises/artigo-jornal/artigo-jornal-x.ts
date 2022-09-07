import { ArtigoJornal, TipoCapital, TrocaCapital } from '@domain';

import trocaCapital from '../capitais/troca-capital';
import { default as autoresArtigoJornal } from './autores';

function artigoJornalX(artigoJornal: ArtigoJornal): TrocaCapital[] {
    const autores = autoresArtigoJornal(artigoJornal);

    const autorXautor = trocaCapital(autores, autores, 'autor-autor', [
        TipoCapital.Social,
        TipoCapital.Cultural,
    ]);

    return autorXautor;
}

export default artigoJornalX;
