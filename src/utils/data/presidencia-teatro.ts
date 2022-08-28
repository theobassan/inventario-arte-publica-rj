import PresidenteTeatro from '../../domain/presidente_teatro';
import * as pessoas from './pessoa';

export const HelenaMariaPortoSeverodaCosta: PresidenteTeatro = {
    Pessoa: pessoas.HelenaMariaPortoSeverodaCosta,
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
