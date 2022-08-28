import RevistaIndependentes from '../../domain/revista_independente';
import * as pessoas from './pessoa';

export const Malasartes: RevistaIndependentes = {
    Nome: 'Malasartes',
    Participantes: [
        pessoas.RonaldoBrito,
        pessoas.JoseResende,
        pessoas.WaltercioCaldas,
        //... outros criticos TODO
    ],
    DataInicio: '1975',
    DataFim: '1976',
};
