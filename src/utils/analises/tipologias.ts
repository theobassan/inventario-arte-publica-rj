import { Obra } from '@domain';

import obras from './obras';

const todasTipologias: string[] = obras.map((obra) => obra.Tipologia ?? 'Desconhecida');

const tipologias: { nome: string; obras: Obra[] }[] = todasTipologias.reduce<{ nome: string; obras: Obra[] }[]>(function (total, tipologia) {
    const r_top = total.find((tipoligia_total) => tipoligia_total.nome === tipologia);
    if (!r_top) {
        total.push({
            nome: tipologia,
            obras: obras.filter((obra) => obra.Tipologia === tipologia || (obra.Tipologia == null && tipologia === 'Desconhecida')),
        });
    }
    return total;
}, []);

export default tipologias;
