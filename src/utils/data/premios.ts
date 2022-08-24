import Premio from '../../domain/premio';
import * as exposicoes from './exposicoes';
import * as pessoas from './pessoa';

export const MedalhaDeOuroSalaoOficial1934: Premio = {
    Nome: 'Medalha de Ouro',
    Evento: exposicoes.SalaoOficial1934,
    Data: '1934',
    Pessoas: [
        pessoas.HildegardoLeaoVelloso,
        pessoas.ManoelConstantino,
        pessoas.HaydeaSantiago,
        pessoas.GasparMagalhaes,
    ],
    Descricao: undefined,
};

export const BienalDeSaoPaulo1957: Premio = {
    Nome: 'Melhor escultor brasileiro',
    Evento: exposicoes.SalaoDeArteModerna1958,
    Data: '1957',
    Pessoas: [
        pessoas.FranzWeissmann,
    ],
    Descricao: undefined,
};

export const ViagemAoExteriorSalaoDeArteModerna1958: Premio = {
    Nome: 'Viagem ao exterior',
    Evento: exposicoes.SalaoDeArteModerna1958,
    Data: '1958',
    Pessoas: [
        pessoas.FranzWeissmann,
    ],
    Descricao: undefined,
};

export const PrêmioNacionalDeArteDoMinistérioDaCultura1993: Premio = {
    Nome: 'Prêmio Nacional de Arte do Ministério da Cultura',
    Evento: exposicoes.SalaoNacionalDeArtesPlasticas1993,
    Data: '02/12/1993',
    Pessoas: [
        pessoas.FranzWeissmann,
    ],
    Descricao: 'Criado pelo Ibac, o prêmio no valor de CR$900mil foi entregue na abertura do 13 Salão Nacional de Artes Plásticas, no Palácio Gustavo Capanema',
};

export const OrdemAoMeritoDoMinistérioDaCultura1998: Premio = {
    Nome: 'Ordem do Mérito do Ministério da Cultura',
    Instituicao: 'Ministério da Cultura',
    Cidade: undefined,
    Data: '05/11/1998',
    Pessoas: [
        pessoas.FranzWeissmann,
    ],
    Descricao: 'O prêmio foi entregue ao escultor pelo presidente da República',
};

export const PremioNacionalDeArte1995: Premio = {
    Nome: 'Prêmio Nacional de Arte',
    Instituicao: 'Ministério da Cultura', // TODO??
    Cidade: 'Rio de Janeiro',
    Data: '05/12/1995',
    Pessoas: [
        pessoas.AmilcardeCastro,
    ],
    Descricao:
        'Amilcar é o terceiro artista brasileiro a receber o prêmio, criado em 1993 pelo então Ministro da Cultura, Antonio Houaiss, a pedido de Ferreira Gullar, na época presidente da Ibac, hoje FUNARTE',
};
