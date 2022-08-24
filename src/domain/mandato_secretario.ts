export default class MandatoSecretario {
    constructor(nomesecretaria: string, dataInicio: string, dataFim: string) {
        this.ID = null;
        this.NomeSecretaria = nomesecretaria;
        this.DataInicio = dataInicio;
        this.DataFim = dataFim;
    }

    ID: number | null | undefined;
    NomeSecretaria: string | null | undefined;
    DataInicio: string | null | undefined;
    DataFim: string | null | undefined;
}
