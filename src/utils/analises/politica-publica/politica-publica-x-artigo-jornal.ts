import { ArtigoJornal, PoliticaPublica, TrocaCapital } from '@domain';

import artigoJornalX from '../artigo-jornal/artigo-jornal-x';
import { antes } from '../dataUtils';
import agenteDaPolitica from './agente-da-politica';
import autorDaPolitica from './autor-da-politica';

function fazParteDaPolitica(politicaPublica: PoliticaPublica, pessoa: string): boolean {
    return agenteDaPolitica(politicaPublica, pessoa) || autorDaPolitica(politicaPublica, pessoa);
}

function politicaPublicaXartigoJornal(politicaPublica: PoliticaPublica, artigoJornal: ArtigoJornal): TrocaCapital[] {
    if (
        politicaPublica.ProjetoInicio &&
        artigoJornal.Data &&
        politicaPublica.ProjetoInicio !== '' &&
        artigoJornal.Data !== '' &&
        antes(artigoJornal.Data, politicaPublica.ProjetoInicio)
    ) {
        return artigoJornalX(artigoJornal).filter(
            (troca) => fazParteDaPolitica(politicaPublica, troca.pessoa1) || fazParteDaPolitica(politicaPublica, troca.pessoa2),
        );
    }
    return [];
}

export default politicaPublicaXartigoJornal;
