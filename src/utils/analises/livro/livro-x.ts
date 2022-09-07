import { Livro, TipoCapital, TrocaCapital } from '@domain';
import onlyUniqueNotUndefinedString from '@utils/list/unique-not-undefined-string';

import trocaCapital from '../capitais/troca-capital';
import { default as citadosLivro } from './citados';

function livroX(livro: Livro): TrocaCapital[] {
    const autores = [livro.Autor?.Nome].filter(onlyUniqueNotUndefinedString);
    const citados = citadosLivro(livro);

    const autorXcitado = trocaCapital(autores, citados, 'autor-citado', [
        TipoCapital.Cultural,
    ]);

    return autorXcitado;
}

export default livroX;
