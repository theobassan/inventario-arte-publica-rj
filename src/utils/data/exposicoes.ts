import Exposicao from '../../domain/exposicao';
import * as pessoas from './pessoa';

export const BienalDeVeneza1988: Exposicao = {
    Nome: 'Bienal de Veneza',
    Instituicao: 'Bienal de Veneza',
    Cidade: 'Veneza',
    Local: undefined,
    DataInicio: '1988',
    DataFim: undefined,
    Expositores: [
        pessoas.JoseResende,
    ],
    Patrocinios: undefined,
    Curadores: undefined, //TODO
};

export const DocumentaKassel1992: Exposicao = {
    Nome: 'Documenta de Kassel',
    Instituicao: 'Documenta de Kassel',
    Cidade: 'Kassel',
    Local: undefined,
    DataInicio: '1992',
    DataFim: undefined,
    Expositores: [
        pessoas.JoseResende,
    ],
    Patrocinios: undefined,
    Curadores: undefined, //TODO
};

export const ExposicaoNeoconcreta1959: Exposicao = {
    Nome: 'Exposição Neoconcreta', //TODO: Neoconcretismo???
    Instituicao: undefined,
    Cidade: undefined,
    Local: undefined,
    DataInicio: '1959',
    DataFim: undefined,
    Expositores: [
        pessoas.FranzWeissmann,
        pessoas.AmilcardeCastro,
    ],
    Patrocinios: undefined,
    Curadores: undefined, //TODO
};

export const ExperienciaNeoconcreta1991: Exposicao = {
    Nome: 'Experiência Neoconcreta',
    Instituicao: undefined,
    Cidade: 'Rio de Janeiro',
    Local: 'MAM/RJ',
    DataInicio: '09/05/1991',
    DataFim: '09/06/1991',
    Expositores: [
        pessoas.LygiaClark,
        pessoas.HelioOiticica,
        pessoas.AmilcardeCastro,
        pessoas.WillysdeCastro,
        pessoas.LygiaPape,
        pessoas.HerculesBarsotti,
        pessoas.AluisioCarvão,
        pessoas.FerreiraGullar,
        pessoas.DecioVieira,
        pessoas.RobertoPontual,
        pessoas.ReynaldoJardim,
        pessoas.OsmarDillon,
        pessoas.ClaudioMelloeSouza,
        pessoas.TheonSpanudis,
        pessoas.FernandoCocchiarale,
        pessoas.VasniSantana,
    ],
    Patrocinios: [
        'Rioarte',
        'BAnerj',
        'Transportes Fink',
    ],
    Curadores: undefined, //TODO
};

export const ExposicaoEscultura1992: Exposicao = {
    Nome: 'Exposição Escultura 92 / Sete Expressões', //TODO
    Instituicao: undefined,
    Cidade: 'Rio de Janeiro',
    Local: 'Galeria RB1',
    DataInicio: '1992',
    DataFim: undefined,
    Expositores: [
        pessoas.AmilcardeCastro,
        pessoas.FransKrajcberg,
        pessoas.FranzWeissmann,
        pessoas.LygiaPape,
        pessoas.Tunga,
        pessoas.AngeloVenosa,
        pessoas.CristinaSalgado,
    ],
    Patrocinios: undefined,
    Curadores: undefined, //TODO
};

export const PoetasDoEspacoEDaCor1997: Exposicao = {
    Nome: 'Poetas do Espaço e da Cor',
    Instituicao: undefined,
    Cidade: 'Rio de Janeiro',
    Local: 'MAM/RJ',
    DataInicio: '1997',
    DataFim: undefined,
    Expositores: [
        pessoas.AlfredoVolpi,
        pessoas.AncangeloIanelli,
        pessoas.AldirMendesdeSouza,
        pessoas.FranzWeissmann,
    ],
    Patrocinios: undefined,
    Curadores: undefined, //TODO
};

export const ExposicaoIndividualFranzWeissmann1946: Exposicao = {
    Nome: 'Primeira Exposição Individual',
    Instituicao: undefined,
    Cidade: 'Rio de Janeiro',
    Local: 'Diretório de Estudantes da ENBA',
    DataInicio: '1946',
    DataFim: undefined,
    Expositores: [pessoas.FranzWeissmann],
    Patrocinios: undefined,
    Curadores: undefined, //TODO
};

export const PrimeiraExposiçãoInternacionaldeEsculturasEfemerasForteleza1991: Exposicao = {
    Nome: 'I Exposição Internacional de Esculturas Efemeras', // TODO
    Instituicao: undefined,
    Cidade: 'Forteleza',
    Local: undefined,
    DataInicio: '1991',
    DataFim: undefined,
    Expositores: [pessoas.SironFranco],
    Patrocinios: undefined,
    Curadores: undefined, //TODO
};

export const PrimeiraExposiçãoInternacionaldeEsculturasAoArLivre: Exposicao = {
    Nome: '1 Exposição Internacional de Esculturas ao Ar Livre - SESC Escultura 96', // TODO
    Instituicao: undefined, //TODO SESC????
    Cidade: 'Porto Alegre',
    Local: undefined, //TODO SESC????
    DataInicio: '1996',
    DataFim: undefined,
    Expositores: [
        pessoas.VascoPrado,
        pessoas.ClaudioMaciel,
        pessoas.PauloRobertodeChristo,
        pessoas.MarliAmadoAraujo,
        pessoas.AnaNorogrando,
        pessoas.FernandoLindote,
        pessoas.GaudencioFidelis,
        pessoas.GustavoNakle,
        pessoas.XicoStockinger,
        pessoas.CarlosdeBrittoVelho,
        pessoas.PatricioFarias,
        pessoas.ClaudioTozzi,
        pessoas.JorgeFranciscoSoto,
        pessoas.MieyaBaglietto,
        pessoas.SironFranco,
        pessoas.ServuloEsmeraldo,
        pessoas.JoseResende,
        pessoas.PepAdmetlla,
        pessoas.JulianAgosta,
        pessoas.FranzWeissmann,
        pessoas.JosedeGuimaraes,
        pessoas.AmilcardeCastro,
    ],
    Patrocinios: undefined,
    Curadores: undefined,
};

export const ExposicaoIndividualAmilcardeCastro: Exposicao = {
    Nome: 'Primeira Exposição Individual',
    Instituicao: 'Galeria Silvia Cintra', //TODO ???
    Cidade: 'Rio de Janeiro',
    Local: 'Galeria Silvia Cintra',
    DataInicio: '11/06/1996',
    DataFim: undefined,
    Expositores: [pessoas.AmilcardeCastro],
    Patrocinios: undefined,
    Curadores: undefined, //TODO
};

export const SalaoOficial1934: Exposicao = {
    Nome: 'Salão Oficial',
    Instituicao: 'Salão Oficial',
    Cidade: 'Rio de Janeiro',
    Local: undefined,
    DataInicio: '1934',
    DataFim: undefined,
    Expositores: [
        pessoas.HildegardoLeaoVelloso,
        pessoas.ManoelConstantino,
        pessoas.HaydeaSantiago,
        pessoas.GasparMagalhaes,
    ],
    Patrocinios: undefined,
    Curadores: undefined, //TODO
};

export const BienalDeSaoPaulo1957: Exposicao = {
    Nome: 'Bienal de São Paulo',
    Instituicao: 'Bienal de São Paulo',
    Cidade: 'São Paulo',
    Local: undefined,
    DataInicio: '1957',
    DataFim: undefined,
    Expositores: [
        pessoas.FranzWeissmann,
    ],
    Patrocinios: undefined,
    Curadores: undefined, //TODO
};

export const SalaoDeArteModerna1958: Exposicao = {
    Nome: 'Salão De Arte Moderna', //TODO
    Instituicao: 'Salão de Arte Moderna',
    Cidade: undefined, //TODO
    Local: undefined,
    DataInicio: '1958',
    DataFim: undefined,
    Expositores: [
        pessoas.FranzWeissmann,
    ],
    Patrocinios: undefined,
    Curadores: undefined, //TODO
};

export const SalaoNacionalDeArtesPlasticas1993: Exposicao = {
    Nome: '13 Salão Nacional de Artes Plásticas',
    Instituicao: 'Ministério da Cultura',
    Cidade: 'Rio de Janeiro',
    Local: 'Palácio Gustavo Capanema',
    DataInicio: '02/12/1993',
    DataFim: undefined,
    Expositores: [
        pessoas.FranzWeissmann,
    ],
    Patrocinios: undefined,
    Curadores: undefined, //TODO
};
