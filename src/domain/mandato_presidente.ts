export default class MandatoPrefeito {
    constructor(pais: string, partido: string | null, dataInicio: string, dataFim: string) {
        this.ID = null;
        this.Pais = pais;
        this.Partido = partido;
        this.DataInicio = dataInicio;
        this.DataFim = dataFim;
    }

    ID: number | null | undefined;
    Pais: string | null | undefined;
    Partido: string | null | undefined;
    DataInicio: string | null | undefined;
    DataFim: string | null | undefined;
}
