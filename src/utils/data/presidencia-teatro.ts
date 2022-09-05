import PresidenteTeatro from '../../domain/presidente_teatro';
import * as pessoas from './pessoa';

export const HelenaMariaPortoSeveroDaCosta: PresidenteTeatro = {
    Pessoa: pessoas.HelenaMariaPortoSeveroDaCosta,
    Mandatos: [
        {
            NomeTeatro: 'Teatro Municipal',
            Cidade: 'Rio de Janeiro',
            Estado: 'Rio de Janeiro',
            Pais: 'Brasil',
            DataInicio: undefined,
            DataFim: undefined,
        },
    ],
};
