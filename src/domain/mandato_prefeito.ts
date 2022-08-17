class MandatoPrefeito {
    constructor(cidade?: string, partido?: string, dataInicio?: string, dataFim?: string) {
        this.Cidade = cidade;
        this.Partido = partido;
        this.DataInicio = dataInicio;
        this.DataFim = dataFim;
    }
    ID?: number;
    Cidade?: string;
    Partido?: string;
    DataInicio?: string;
    DataFim?: string;
}

export default MandatoPrefeito;
