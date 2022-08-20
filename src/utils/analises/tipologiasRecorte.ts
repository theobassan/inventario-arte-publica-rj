import { Obra } from '@domain';

import obrasRecorte from './obrasRecorte';

const todasTipologias: string[] = obrasRecorte.map((obra) => obra.Tipologia ?? 'Desconhecida');

const tipologiasRecorte: { nome: string; obras: Obra[] }[] = todasTipologias.reduce<{ nome: string; obras: Obra[] }[]>(function (total, tipologia) {
    const r_top = total.find((tipoligia_total) => tipoligia_total.nome === tipologia);
    if (!r_top) {
        total.push({
            nome: tipologia,
            obras: obrasRecorte.filter((obra) => obra.Tipologia === tipologia || (obra.Tipologia == null && tipologia === 'Desconhecida')),
        });
    }
    return total;
}, []);

export default tipologiasRecorte;
