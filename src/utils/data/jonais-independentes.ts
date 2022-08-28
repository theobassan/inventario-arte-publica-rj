import JornalIndependente from '../../domain/jornal_independente';
import * as pessoas from './pessoa';

export const AParteDoFogo: JornalIndependente = {
    Nome: 'A parte do Fogo',
    Cidade: undefined,
    Estado: undefined,
    Pais: undefined,
    Participantes: [
        pessoas.RonaldoBrito,
        pessoas.JoseResende,
        pessoas.WaltercioCaldas, //TODO n aparece na citacao 272 mas aparece na biografia dele e na 252
        pessoas.PauloVenancioFilho,
        //pessoas.CildoMeireles
        //pessoas.JoaoMouraJunior
        pessoas.PauloSergioDuarte,
        //pessoas.RodrigoNeves
        pessoas.Tunga,
    ],
    DataInicio: undefined,
    DataFim: undefined,
};
