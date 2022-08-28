import Exposicao from '../../domain/exposicao';
import * as pessoas from './pessoa';

export const BienalDeVeneza1988: Exposicao = {
    Nome: 'Bienal de Veneza',
    Instituicao: 'Bienal de Veneza',
    AbreviacaoInstituicao: undefined,
    Cidade: 'Veneza',
    Estado: undefined,
    Pais: 'Itália',
    Local: undefined,
    DataInicio: '26/06/1988',
    DataFim: '25/09/1988',
    Expositores: [
        pessoas.JoseResende,
        //pessoas.JuraciDoria,
    ],
    Patrocinios: undefined,
    Curadores: undefined, //TODO
};

export const DocumentaKassel1992: Exposicao = {
    Nome: 'Documenta de Kassel',
    Instituicao: 'Documenta de Kassel',
    AbreviacaoInstituicao: undefined,
    Cidade: 'Kassel',
    Estado: undefined,
    Pais: undefined,
    Local: undefined,
    DataInicio: '13/06/1992',
    DataFim: '20/09/1992',
    Expositores: [
        pessoas.JoseResende,
        //pessoas.CildoMeireles,
        //pessoas.JacLeirner,
        //pessoas.SaintClairCemin,
        pessoas.WaltercioCaldas,
    ],
    Patrocinios: undefined,
    Curadores: undefined, //TODO
};

export const ExposicaoNeoconcreta1959: Exposicao = {
    Nome: 'Exposição Neoconcreta', //TODO: Neoconcretismo???
    Instituicao: 'Museu de Arte Moderna do Rio de Janeiro',
    AbreviacaoInstituicao: 'MAM Rio',
    Cidade: 'Rio de Janeiro',
    Estado: 'Rio de Janeiro',
    Pais: 'Brasil',
    Local: 'MAM/RJ',
    DataInicio: '22/03/1959',
    DataFim: undefined,
    Expositores: [
        pessoas.AluisioCarvao,
        pessoas.AmilcardeCastro,
        pessoas.DecioVieira,
        pessoas.FerreiraGullar,
        pessoas.FranzWeissmann,
        pessoas.HelioOiticica,
        pessoas.HerculesBarsotti,
        pessoas.IvanSerpa,
        pessoas.LygiaClark,
        pessoas.LygiaPape,
        pessoas.OsmarDillon,
        pessoas.TheonSpanudis,
        pessoas.WillysdeCastro,
    ],
    Patrocinios: undefined,
    Curadores: undefined, //TODO
};

export const ExperienciaNeoconcreta1991_MAMRJ: Exposicao = {
    Nome: 'Experiência Neoconcreta',
    Instituicao: 'Museu de Arte Moderna do Rio de Janeiro',
    AbreviacaoInstituicao: 'MAM Rio',
    Cidade: 'Rio de Janeiro',
    Estado: 'Rio de Janeiro',
    Pais: 'Brasil',
    Local: 'MAM/RJ',
    DataInicio: '09/05/1991',
    DataFim: '23/06/1991',
    Expositores: [
        pessoas.AluisioCarvao,
        pessoas.AmilcardeCastro,
        pessoas.ClaudioMelloeSouza,
        pessoas.DecioVieira,
        pessoas.FerreiraGullar,
        pessoas.FranzWeissmann,
        pessoas.HelioOiticica,
        pessoas.HerculesBarsotti,
        pessoas.LygiaClark,
        pessoas.LygiaPape,
        pessoas.OsmarDillon,
        pessoas.ReynaldoJardim,
        pessoas.RobertoPontual,
        pessoas.TheonSpanudis,
        pessoas.WillysdeCastro,
        pessoas.VasniSantana, //TODO itau cultural n cita ele
    ],
    Patrocinios: [
        'Rioarte',
        'BAnerj',
        'Transportes Fink',
    ],
    Curadores: [
        pessoas.FernandoCocchiarale,
    ],
};
export const ExperienciaNeoconcreta1991_Curitiba: Exposicao = {
    Nome: 'Experiência Neoconcreta',
    Instituicao: 'Museu Municipal de Arte de Curitiba',
    AbreviacaoInstituicao: undefined,
    Cidade: 'Curitiba',
    Estado: 'Paraná',
    Pais: 'Brasil',
    Local: 'MAM/RJ',
    DataInicio: '1991',
    DataFim: undefined,
    Expositores: [
        pessoas.AluisioCarvao,
        pessoas.FranzWeissmann,
        pessoas.LygiaClark,
        pessoas.LygiaPape,
    ],
    Patrocinios: undefined,
    Curadores: [
        pessoas.FernandoCocchiarale,
    ],
};

export const ExposicaoEscultura1992: Exposicao = {
    Nome: 'Exposição Escultura 92 / Sete Expressões', //TODO
    Instituicao: undefined,
    Cidade: 'Rio de Janeiro',
    Estado: 'Rio de Janeiro',
    Pais: 'Brasil',
    Local: 'Galeria RB1',
    DataInicio: '29/01/1992',
    DataFim: undefined,
    Expositores: [
        pessoas.AmilcardeCastro,
        pessoas.AngeloVenosa,
        pessoas.CristinaSalgado,
        pessoas.FransKrajcberg,
        pessoas.FranzWeissmann,
        pessoas.LygiaPape,
        pessoas.Tunga,
    ],
    Patrocinios: undefined,
    Curadores: undefined, //TODO
};

export const PoetasDoEspacoEDaCor1997: Exposicao = {
    Nome: 'Poetas do Espaço e da Cor',
    Instituicao: undefined,
    Cidade: 'Rio de Janeiro',
    Estado: 'Rio de Janeiro',
    Pais: 'Brasil',
    Local: 'MAM/RJ',
    DataInicio: '1997',
    DataFim: undefined,
    Expositores: [
        pessoas.AldirMendesdeSouza,
        pessoas.AlfredoVolpi,
        pessoas.AncangeloIanelli,
        pessoas.FranzWeissmann,
    ],
    Patrocinios: undefined,
    Curadores: undefined, //pessoas.SabinadeLibman
};

export const ExposicaoIndividualFranzWeissmann1946: Exposicao = {
    Nome: 'Primeira Exposição Individual',
    Instituicao: undefined,
    Cidade: 'Rio de Janeiro',
    Estado: 'Rio de Janeiro',
    Pais: 'Brasil',
    Local: 'Diretório de Estudantes da ENBA',
    DataInicio: '1946',
    DataFim: undefined,
    Expositores: [pessoas.FranzWeissmann],
    Patrocinios: undefined,
    Curadores: undefined, //TODO
};

export const PrimeiraExposiçãoInternacionaldeEsculturasEfemerasForteleza1986: Exposicao = {
    //TODO ano n é 1991 como estava nos fatos
    Nome: '1ª Exposição Internacional de Esculturas Efemeras',
    Instituicao: undefined,
    Cidade: 'Fortaleza',
    Estado: 'Ceará',
    Pais: 'Brasil',
    Local: undefined,
    DataInicio: '09/1986',
    DataFim: '11/1986',
    Expositores: [
        //pessoas.AmeliaToledo,
        pessoas.AmilcardeCastro,
        pessoas.AscanioMMM,
        //pessoas.CarlosFarjado,
        //pessoas.DudiMajaRosa,
        pessoas.FransKrajcberg,
        pessoas.JoseResende,
        //pessoas.JulioPlaza
        //pessoas.Leonilson,
        pessoas.MauricioBentes,
        //pessoas.NelzonLeirner,
        pessoas.GianPietroZanni,
        //pessoas.ReginaSilveira,
        pessoas.SergioCamargo,
        pessoas.ServuloEsmeraldo,
        pessoas.SironFranco, //TODO este n estava no itaul cultural como nos fatos
    ],
    Patrocinios: undefined,
    Curadores: [
        pessoas.ServuloEsmeraldo,
    ],
};

export const PrimeiraExposiçãoInternacionaldeEsculturasAoArLivre: Exposicao = {
    Nome: '1º Sesc Escultura: exposição internacional de esculturas ao ar livre',
    Instituicao: undefined, //TODO SESC????
    Cidade: 'Porto Alegre',
    Estado: 'Rio Grande do Sul',
    Pais: 'Brasil',
    Local: undefined, //TODO SESC????
    DataInicio: '09/1996',
    DataFim: '03/1997',
    Expositores: [
        pessoas.AmilcardeCastro,
        pessoas.AnaNorogrando,
        pessoas.CarlosdeBrittoVelho,
        pessoas.ClaudioTozzi,
        pessoas.FernandoLindote,
        pessoas.FranciscoStockinger,
        pessoas.FranzWeissmann,
        pessoas.GaudencioFidelis,
        pessoas.JoseResende,
        pessoas.MarliAmadoAraujo,
        pessoas.PatricioFarias,
        pessoas.PauloRobertodeChristo,
        pessoas.ServuloEsmeraldo,
        pessoas.SironFranco,
        pessoas.VascoPrado,

        //TODO o citados abaixo n constam no itau cultural
        pessoas.ClaudioMaciel,
        pessoas.GustavoNakle,
        pessoas.XicoStockinger,
        pessoas.JorgeFranciscoSoto,
        pessoas.MieyaBaglietto,
        pessoas.PepAdmetlla,
        pessoas.JulianAgosta,
        pessoas.JosedeGuimaraes,
    ],
    Patrocinios: undefined,
    Curadores: undefined, //pessoas.JoseFraciscoAlves
};

export const ExposicaoIndividualAmilcardeCastro: Exposicao = {
    Nome: 'Primeira Exposição Individual',
    Instituicao: undefined, //TODO ???
    Cidade: 'Rio de Janeiro',
    Estado: 'Rio de Janeiro',
    Pais: 'Brasil',
    Local: 'Galeria Silvia Cintra',
    DataInicio: '11/06/1996',
    DataFim: undefined,
    Expositores: [pessoas.AmilcardeCastro],
    Patrocinios: undefined,
    Curadores: undefined, //TODO
};

export const SalaoOficial1934: Exposicao = {
    // nao achei essa exposicao no itau cultural -> estava nos fatos
    Nome: 'Salão Oficial',
    Instituicao: 'Salão Oficial',
    Cidade: 'Rio de Janeiro',
    Estado: 'Rio de Janeiro',
    Pais: 'Brasil',
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
    Nome: '4ª Bienal Internacional de São Paulo',
    Instituicao: 'Bienal de São Paulo',
    Cidade: 'São Paulo',
    Estado: 'São Paulo',
    Pais: 'Brasil',
    Local: undefined,
    DataInicio: '22/09/1957',
    DataFim: '30/12/1957',
    Expositores: [
        //pessoas.AldemirMartins,
        //pessoas.AlexandreWollner, //(Prêmio pelo Cartaz do evento)
        pessoas.AlfredoVolpi,
        //pessoas.AlmirMavignier,
        pessoas.AluisioCarvao,
        //pessoas.AnatolWladyslaw,
        //pessoas.AnnaLetycia,
        //pessoas.AntonioBandeira
        //pessoas.ArnaldoPedrosoDHorta
        //pessoas.BenNicholson, // (Prêmio Pintura Estrangeira)
        pessoas.BrunoGiorgi,
        //Bpessoas.urle Marx
        //pessoas.ClaraHeteny
        //pessoas.DaniloDiPrete
        //pessoas.DorothyBastos
        //pessoas.EdithBehring
        //pessoas.Elide onzeglio
        //pessoas.ElisaMartinsdaSilveira
        //pessoas.EmericLanyi
        //pessoas.ErnaniVasconcellos
        //pessoas.FaygaOstrower // (Prêmio Gravura Nacional)
        //pessoas.FernandoLemos,// (Prêmio Desenho Nacional)
        //pessoas.FlavioShiró
        //pessoas.Flexor
        //pessoas.FranciscoAmêndola
        pessoas.FransKrajcberg, // (Prêmio Pintura Nacional)
        pessoas.FranzWeissmann, // (Prêmio Escultura Nacional)
        //pessoas.GiorgioMorandi,// (Grande Prêmio São Paulo)
        //pessoas.Hamaguchi, //(Prêmio Gravura Estrangeira)
        //pessoas.HansenBahia,
        //pessoas.HélioOiticica,
        //pessoas.HérculesBarsotti,
        //pessoas.HermelindoFiaminghi,
        //pessoas.HildeWeber,
        //pessoas.IlsaKawallLealFerreira,
        //pessoas.IoneSaldanha,
        pessoas.IvanSerpa,
        //pessoas.JacquesDouchez,
        //pessoas.JoaoLuisOliveiraChaves,
        //pessoas.JorgedeOteiza, //(Prêmio Escultura Estrangeira)
        //pessoas.JoseClaudio,
        //pessoas.JoseFabioBarbosadaSilva,
        //pessoas.JosePedrosa,
        //pessoas.KarlPlattner,
        //pessoas.LasarSegall,
        //pessoas.LeopoldoRaimo,
        //pessoas.LeylaPerroneMoisés,
        //pessoas.LotharCharoux,
        //pessoas.LuizSacilotto,
        //pessoas.LulaCardosoAyres,
        pessoas.LygiaClark,
        pessoas.LygiaPape,
        //pessoas.MarceloGrassmann,
        //pessoas.MariaLeontina, //(Prêmio Aquisição)
        //pessoas.MarioCravoJúnior,
        //pessoas.MauricioNogueiraLima,
        //pessoas.MiltonDacosta, //(Prêmio Aquisição)
        //pessoas.Moussia,
        //pessoas.PaoloRissone,
        //pessoas.Piza,
        //pessoas.RaymundoNogueira,
        //pessoas.RossiniPerez,
        pessoas.SergioCamargo,
        //pessoas.TeresaDAmico,
        //pessoas.TeresaNicolao,
        //pessoas.TizianaBonazzola,
        pessoas.VictorBrecheret,
        //pessoas.WaldemarCordeiro,
        //pessoas.WaldemardaCosta,
        //pessoas.WegaNery, //(Prêmio Desenho Nacional)
        pessoas.WillysdeCastro,
        //pessoas.YolandaMohalyi,
        //pessoas.ZeliaSalgado,
    ],
    Patrocinios: undefined,
    Curadores: undefined,
    Juri: [
        //pessoas.AlfredHBarr
        //pessoas.ArmandoBFerrari
        //pessoas.ArthurProfili
        //pessoas.CarlosFlexaRibeiro
        //pessoas.FlaviodeAquino
        //pessoas.JVanLerberghe
        //pessoas.JCHeyligers
        //pessoas.JacquesLassaigne
        //pessoas.JiriKotalik
        //pessoas.LívioAbramo
        //pessoas.LourivalGomesMachado
        //pessoas.LudwigGrote
        //pessoas.LuizGonzalesRobles
        //pessoas.MarcelIanco
        //pessoas.MarcoValsecchi
        pessoas.MariaMartins, // TODO é ela mesma??
        //pessoas.PhilipHendy
        //pessoas.ShinkenKurihara
        //pessoas.WolfgangPfeiffer
    ],
    JuriDeSelecao: undefined, //pessoas.JoseGeraldoVieira
};

export const SalaoDeArteModerna1958: Exposicao = {
    Nome: '7º Salão Nacional de Arte Moderna', //TODO
    Instituicao: 'Salão de Arte Moderna', // TODO MAM???
    Cidade: 'Rio de Janeiro',
    Estado: 'Rio de Janeiro',
    Pais: 'Brasil',
    Local: 'MAM Rio',
    DataInicio: '1958',
    DataFim: undefined,
    Expositores: [
        //pessoas.AloysioZaluar
        pessoas.AluisioCarvao,
        //pessoas.AlvaroApocalypse
        //pessoas.AnnaLetycia //(Prêmio Viagem ao País)
        //pessoas.ArnaldoPedrosoDHorta
        //pessoas.Babinski
        //pessoas.BustamanteSa
        //pessoas.CarlosScliar
        //pessoas.Djanira
        //pessoas.EdsonMotta
        //pessoas.FaygaOstrower
        //pessoas.FranciscoRebolo
        pessoas.FranzWeissmann, //(Prêmio Viagem ao Exterior)
        //pessoas.GilvanSamico
        //pessoas.GlenioBianchetti
        //pessoas.Guignard
        //pessoas.HeloisadeFaria
        //pessoas.JoséOiticicaFilho
        pessoas.LygiaPape, //(Prêmio Isenção de Júri (medalha de prata))
        //pessoas.MariaHelenaAndres
        pessoas.MaryVieira,
        //pessoas.NoemiaGuerra
        //pessoas.OrlandoDaSilva
        //pessoas.ReninaKatz
        //pessoas.RossiniPerez
        //pessoas.RubemValentim //(Prêmio Aquisição)
        pessoas.SergioCamargo,
        //pessoas.Sheila
        //pessoas.TakeshiSuzuki
        //pessoas.UbirajaraRibeiro
        //pessoas.Zaluar //(Premio de viagem ao exterior)
    ],
    Patrocinios: undefined,
    Curadores: undefined, //TODO
    Juri: undefined, //pessoas.IbereCamargo
};

export const SalaoNacionalDeArtesPlasticas1993: Exposicao = {
    Nome: '13 Salão Nacional de Artes Plásticas',
    Instituicao: 'Ministério da Cultura',
    Cidade: 'Rio de Janeiro',
    Estado: 'Rio de Janeiro',
    Pais: 'Brasil',
    Local: 'Palácio Gustavo Capanema',
    DataInicio: '02/12/1993',
    DataFim: undefined,
    Expositores: [
        pessoas.CristinaSalgado,
        //pessoas.DavidCury
        //pessoas.ElianeDuarte
        //pessoas.EnricaBernardelli
        //pessoas.FabioNoronha //(Prêmio Viagem ao País)
        //pessoas.FeresLourençoKhoury
        //pessoas.FernandoAugusto
        pessoas.FranzWeissmann, // TODO nao aparece no itaul cultural como expositor, apesar de receber o premio
        //pessoas.FredericoDalton
        //pessoas.oseBento
        //pessoas.JoseDamasceno
        //pessoas.KlingerCarvalho
        //pessoas.LorisMachado
        //pessoas.MarcoPauloRolla
        //pessoas.MônicaSartori //(Prêmio Viagem ao Exterior)
        //pessoas.NelsonScrenci
        //pessoas.NiuraBellavinha
        //pessoas.NydiaNegromonte
        //pessoas.PedroWrede
        //pessoas.RinaldoSilva //(Prêmio Unesco)
        //pessoas.RosanaPalazyan //(Prêmio Aquisição)
        //pessoas.RosangelaRenno
        //pessoas.VaniaBarbosa
        //pessoas.VeraMartins
    ],
    Patrocinios: undefined,
    Curadores: undefined,
    Juri: [
        //pessoas.AracyAmaral
        pessoas.FerreiraGullar,
        pessoas.FredericoMoraes,
        //pessoas.JoaoCarlosGoldberg
        //pessoas.MarcusdeLontraCosta
    ],
};

export const FranzWeissmann_UmaRetrospective_1998: Exposicao = {
    Nome: 'Franz Weissmann: uma retrospectiva',
    Instituicao: 'Centro Cultural Banco do Brasil',
    AbreviacaoInstituicao: 'CCBB',
    Cidade: 'Rio de Janeiro',
    Estado: 'Rio de Janeiro',
    Pais: 'Brasil',
    Local: 'CCBB/RJ',
    DataInicio: '09/10/1998',
    DataFim: '06/12/1998',
    Expositores: [
        pessoas.FranzWeissmann,
    ],
    Patrocinios: undefined,
    Curadores: undefined, //TODO
    CatalogoEscritoPor: [pessoas.ReynaldoRoels],
};
export const FranzWeissmann_UmaRetrospective_1999: Exposicao = {
    Nome: 'Franz Weissmann: uma retrospectiva',
    Instituicao: 'Museu de Arte Contemporânea da Universidade de São Paulo',
    AbreviacaoInstituicao: 'MAC/USP',
    Cidade: 'São Paulo',
    Estado: 'São Paulo',
    Pais: 'Brasil',
    Local: 'MAC/USP',
    DataInicio: '15/01/1999',
    DataFim: undefined,
    Expositores: [
        pessoas.FranzWeissmann,
    ],
    Patrocinios: undefined,
    Curadores: undefined, //TODO
    CatalogoEscritoPor: [pessoas.ReynaldoRoels],
};

export const TresMilMetrosCubicos: Exposicao = {
    Nome: '3000 metros cúbicos',
    Instituicao: 'Espaço Cultural Sérgio Porto',
    Cidade: 'Rio de Janeiro',
    Estado: 'Rio de Janeiro',
    Pais: 'Brasil',
    Local: undefined,
    DataInicio: '17/12/1983',
    DataFim: undefined,
    Expositores: [
        //pessoas.AntonioDias,
        //pessoas.ArturBarrio
        //pessoas.CildoMeireles
        pessoas.JoseResende,
        //pessoas.MarcelloNitsche
        pessoas.Tunga,
        //pessoas.UmbertoCostiBarros //TODO n consta no itau cultural
        pessoas.WaltercioCaldas,
    ],
    Patrocinios: undefined,
    Curadores: [pessoas.EverardoMiranda],
    CatalogoEscritoPor: undefined,
};

export const MostraInternacionalDeArteConcretaZurique: Exposicao = {
    Nome: 'Konkrete Kunst',
    Instituicao: undefined,
    Cidade: 'Zurique',
    Estado: undefined,
    Pais: 'Suíça',
    Local: 'Helmhaus Zürich',
    DataInicio: '1960',
    DataFim: undefined,
    Expositores: [
        //pessoas.AlexandreWollner
        //pessoas.AlmirMavignier
        pessoas.AluisioCarvao,
        pessoas.AmilcardeCastro,
        pessoas.DecioVieira,
        //pessoas.Fejer
        pessoas.FranzWeissmann,
        //pessoas.GeraldodeBarros
        pessoas.HelioOiticica,
        pessoas.HerculesBarsotti,
        //pessoas.HermelindoFiaminghi
        //pessoas.JudithLauand
        //pessoas.LuizSacilotto
        pessoas.LygiaClark,
        pessoas.LygiaPape,
        pessoas.MaryVieira,
        //pessoas.MauricioNogueiraLima
        //pessoas.WaldemarCordeiro
        pessoas.WillysdeCastro,
    ],
    Patrocinios: undefined,
    Curadores: undefined, //pessoas.MaxBill,
    CatalogoEscritoPor: undefined,
};

export const SalaoDeArteModerna1967: Exposicao = {
    Nome: '16º Salão Nacional de Arte Moderna', //TODO
    Instituicao: 'Salão de Arte Moderna',
    Cidade: 'Rio de Janeiro',
    Estado: 'Rio de Janeiro',
    Pais: 'Brasil',
    Local: undefined,
    DataInicio: '1967',
    DataFim: undefined,
    Expositores: [
        //pessoas.AlexandreFilho
        //pessoas.AloysioZaluar// (Isenção do júri)
        pessoas.AmilcardeCastro,
        //pessoas.AntonioManuel
        pessoas.AscanioMMM,
        //pessoas.BettyKing
        //pessoas.CarlosVergara
        //essoas.CeliaShalders
        //pessoas.Chanina //(Isenção do Júri.)
        //pessoas.EraldoMotta
        //pessoas.Kaiuca
        //pessoas.MariaLuizaLeao
        //pessoas.MarinaNazareth
        //pessoas.PauloMenten
        //pessoas.PedroEscosteguy
        //pessoas.QuirinoCampofiorito
        //pessoas.RubemLudolf
        //pessoas.RubensGerchman
        //pessoas.Sigaud
        //pessoas.SolangeEscosteguy
        pessoas.SoniaEbling, //(Prêmio de Viagem ao Brasil)
    ],
    Patrocinios: undefined,
    Curadores: undefined, //TODO
};

export const BienalDeSaoPaulo1953: Exposicao = {
    Nome: '2ª Bienal Internacional de São Paulo',
    Instituicao: 'Bienal de São Paulo',
    Cidade: 'São Paulo',
    Estado: 'São Paulo',
    Pais: 'Brasil',
    Local: undefined,
    DataInicio: '13/12/1953',
    DataFim: '26/02/1954',
    Expositores: [
        //pessoas.AbrahamPalatnik
        //pessoas.AfonsoDuarteAngelico
        //pessoas.AgostinhodaMotta
        //pessoas.Ahmes
        //pessoas.AlbertoTeixeira
        //pessoas.AldemirMartins //(Nadir Figueiredo S.A.)
        //pessoas.AlexanderCalder
        //pessoas.AlexandreWollner
        //pessoas.AlfredManessier //(Prêmio Internacional de Pintura)
        pessoas.AlfredoCeschiatti,
        pessoas.AlfredoVolpi, //(Prêmio Nacional de Pintura)
        //pessoas.AlmeidaJunior
        //pessoas.loisioMagalhaes
        pessoas.AluisioCarvao,
        pessoas.AmilcardeCastro,
        //pessoas.AnatolWladyslaw
        //pessoas.AnesiaPachecoeChaves
        //pessoas.AntonioAlvesAlmeida
        //pessoas.AntonioBandeira //(Prêmio pelo Cartaz)
        //pessoas.AntonioParreiras
        //pessoas.AntonioPrado Netto
        //pessoas.AntonioVargas
        //pessoas.ArmandoBalloni
        //pessoas.ArnaldoPedrosoDHorta //(Prêmio Nacional de Desenho)
        //pessoas.ArnaudJulienPallière
        //pessoas.AugustMuller
        //pessoas.AugustoRodrigues
        //pessoas.AugustoRodriguesDuarte
        //pessoas.Aurélio eFigueiredo
        //pessoas.BaptistadaCosta
        //pessoas.BassanoVaccarini
        //pessoas.BellaPrado
        //pessoas.BenShahn //(Prêmio Internacional de Desenho)
        //pessoas.Bonadei
        pessoas.BrunoGiorgi, // (Prêmio Nacional de Escultura)
        //pessoas.CaciporeTorres
        //pessoas.CaetanoFraccaroli
        //pessoas.CarlosBastos
        //pessoas.CarlosPrado
        //pessoas.Caron
        //pessoas.Carybe
        //pessoas.Castagneto
        //pessoas.CHMartin
        //pessoas.CiceroDias
        //pessoas.ClaraHeteny
        //pessoas.DaniloDiPrete
        //pessoas.DarcyPenteado
        pessoas.DecioVieira,
        //pessoas.DeiadeCamposLemos
        //pessoas.DiCavalcanti //(Prêmio Nacional de Pintura)
        //pessoas.Djanira
        //pessoas.ElisaMartinsdaSilveira
        //pessoas.ElisabethNobiling
        //pessoas.EliseuVisconti
        //pessoas.EmanuelManasse
        //pessoas.EmericLanyi
        //pessoas.EmericMarcier
        //pessoas.EmygdiodeBarros
        //pessoas.EstellaTuschnieder
        //pessoas.Fampon
        //pessoas.FaygaOstrower
        //pessoas.FelíciaLeirner
        //pessoas.FelixEmileTaunay
        //pessoas.FernandoLemos //(Prêmio Aquisição)
        //pessoas.FernandoRomani
        //pessoas.FirminoMonteiro
        //pessoas.FirminoSaldanha
        //pessoas.FlaviodeCarvalho
        //pessoas.Flexor
        //pessoas.FrankSchaeffer
        //pessoas.FransKrajcberg
        //pessoas.FransPost
        //pessoas.ranzWeissmann
        //pessoas.GaetanoMiani
        //pessoas.GarciayVasquez
        //pessoas.GastoneNovelli
        //pessoas.GeorgGrimm
        //pessoas.GeraldodeBarros
        //pessoas.GermanadeAngelis
        //pessoas.GezaHeller
        //pessoas.GiorgioMorandi// (Prêmio Internacional de Gravura)
        //pessoas.iseldaLeirner
        //pessoas.GracielaFuensalida
        //pessoas.HansenBahia
        //pessoas.HeinzKühn
        //pessoas.HeitordosPrazeres
        //pessoas.HenriLaurens //(Grande Prêmio - IV centenário de Sâo Paulo)
        //pessoas.HenriqueBoese
        //pessoas.HenryMoore //(Prêmio Internacional de Escultura)
        //pessoas.HildaGoltz
        //pessoas.ildeWeber
        //pessoas.CHornbrook
        //pessoas.InahDAvilaCosta
        //pessoas.oneSaldanha
        pessoas.IvanSerpa,
        //pessoas.IzardoAmaralBerlinck
        //pessoas.JacquesDouchez
        //pessoas.eanBaptisteDebret
        //pessoas.JoaoBatistaPagani
        //pessoas.JoaoFranciscoMuzzi
        //pessoas.JoseAntôniodaSilva
        //pessoas.JoseFábioBarbosadaSilva
        //pessoas.JoseSilveiraDAvila
        //pessoas.JulioGuerra
        //pessoas.KarlPlattner
        //pessoas.LeopoldoRaimo
        //pessoas.LisaFickerHofmann
        //pessoas.LivioAbramo //(Prêmio Nacional de Gravura)
        //pessoas.LotharCharoux
        //pessoas.LouisBuvelot
        //pessoas.Lucette aribe
        //pessoas.LuigiStalloni
        //pessoas.LuizSacilotto
        //pessoas.LulaCardoso Ayres
        pessoas.LygiaClark,
        //pessoas.ManabuMabe
        //pessoas.MarceloGrassmann
        //pessoas.MariaHelenaAndrés
        pessoas.MariaMartins,
        //pessoas.MarianneOverbeck
        //pessoas.MariliaGiannettiTorres
        //pessoas.MarinaCaram
        //pessoas.MarioCravoJúnior
        //pessoas.MarioZanini
        pessoas.MaryVieira,
        //pessoas.MauroFrancini
        //pessoas.MilanDuzek
        //pessoas.MiltonGoldring
        //pessoas.MisabelPedrosa
        //pessoas.Moussia
        //pessoas.NicolasAntoineTaunay
        //pessoas.NicolauFacchinetti
        //pessoas.OdettoGuersoni
        //pessoas.OrlandoTeruz
        //pessoas.OswalddeAndradeFilho
        //pessoas.OswaldoGoeldi
        //pessoas.PaoloRissone
        //pessoas.PauloBecker
        //pessoas.PauloSzentkuti
        //pessoas.PhillippeMaeck
        //pessoas.PieterGodfriedBertichen
        //pessoas.PintoBandeira
        //pessoas.Piza //(pessoas.Prêmio Aquisição)
        //pessoas.PolaRezende
        //pessoas.PollyMcDonell
        //pessoas.PotyLazzarotto
        //pessoas.QuinsacMonvoisin
        //pessoas.RamiroMartins
        //pessoas.RaymundoNogueira
        //pessoas.ReneeLefèvre
        //pessoas.RobertTatin
        //pessoas.RufinoTamayo //(Prêmio Internacional de Pintura)
        //pessoas.SadaYazima
        //pessoas.SeppBaendereck
        //pessoas.Sespe
        //pessoas.ShigetoTanaka
        //pessoas.SinItiroYazima
        pessoas.SoniaEbling,
        //pessoas.TadashiKaminagai
        //pessoas.TarsiladoAmaral
        //pessoas.TellesJúnior
        //pessoas.TeresaDAmico
        //pessoas.TizianaBonazzola
        //pessoas.UbiBava
        //pessoas.VandenPeereboon
        //pessoas.VictorMeirelles
        //pessoas.VieiradaSilva //(Prêmio Aquisição)
        //pessoas.Vinet
        //pessoas.VittorioGobbis
        //pessoas.WaldemardaCosta
        //pessoas.WalterLewy
        //pessoas.WegaNery
        //pessoas.YolandaMohalyi
        //pessoas.YvoneThomescu
        //pessoas.ZachariasAutuori
        //pessoas.ZeliaSalgado
    ],
    Patrocinios: undefined,
    Curadores: undefined, //TODO
};

export const GrupoFrente_1954: Exposicao = {
    Nome: '1ª Grupo Frente',
    Instituicao: undefined,
    Cidade: 'Rio de Janeiro',
    Estado: 'Rio de Janeiro',
    Pais: 'Brasil',
    Local: 'Galeria do Ibeu',
    DataInicio: '30/06/1954',
    DataFim: undefined,
    Expositores: [
        //pessoas.AbrahamPalatnik
        pessoas.AluisioCarvao,
        //pessoas.CarlosVal
        //pessoas.CesarOiticica
        pessoas.DecioVieira,
        //pessoas.ElisaMartinsdaSilveira.
        pessoas.FranzWeissmann,
        pessoas.HelioOiticica,
        pessoas.IvanSerpa,
        //pessoas.JoaoJosedaSilvaCosta,
        pessoas.LygiaClark,
        pessoas.LygiaPape,
        //pessoas.RubemLudolf
        //pessoas.VicentIbberson,
    ],
    Patrocinios: undefined,
    Curadores: [pessoas.FerreiraGullar],
};

export const GrupoFrente_1955: Exposicao = {
    Nome: '2ª Grupo Frente',
    Instituicao: 'Museu de Arte Moderna do Rio de Janeiro', // TODO  ??
    Cidade: 'Rio de Janeiro',
    Estado: 'Rio de Janeiro',
    Pais: 'Brasil',
    Local: 'MAM Rio',
    DataInicio: '14/07/1955',
    DataFim: undefined,
    Expositores: [
        //pessoas.AbrahamPalatnik
        pessoas.AluisioCarvao,
        //pessoas.CarlosVal
        //pessoas.CesarOiticica
        pessoas.DecioVieira,
        //pessoas.ElisaMartinsdaSilveira.
        pessoas.FranzWeissmann,
        pessoas.HelioOiticica,
        pessoas.IvanSerpa,
        //pessoas.JoaoJosedaSilvaCosta,
        pessoas.LygiaClark,
        pessoas.LygiaPape,
        //pessoas.RubemLudolf
        //pessoas.VicentIbberson,
    ],
    Patrocinios: undefined,
    Curadores: undefined,
};

export const GrupoFrente_1956: Exposicao = {
    Nome: '3ª Grupo Frente',
    Instituicao: undefined, // TODO  ??
    Cidade: 'Resende',
    Estado: 'Rio de Janeiro',
    Pais: 'Brasil',
    Local: 'Itatiaia Country Club',
    DataInicio: '17/03/1956',
    DataFim: undefined,
    Expositores: [
        //pessoas.AbrahamPalatnik
        pessoas.AluisioCarvao,
        //pessoas.CarlosVal
        //pessoas.CesarOiticica
        pessoas.DecioVieira,
        //pessoas.ElisaMartinsdaSilveira.
        pessoas.FranzWeissmann,
        pessoas.HelioOiticica,
        pessoas.IvanSerpa,
        //pessoas.JoaoJosedaSilvaCosta,
        pessoas.LygiaClark,
        pessoas.LygiaPape,
        //pessoas.RubemLudolf
        //pessoas.VicentIbberson,
    ],
    Patrocinios: undefined,
    Curadores: undefined,
};

export const GrupoFrente_1956_2: Exposicao = {
    Nome: '4ª Grupo Frente',
    Instituicao: undefined, // TODO  ??
    Cidade: 'ReseVolta Redondande',
    Estado: 'Rio de Janeiro',
    Pais: 'Brasil',
    Local: 'Companhia Siderúrgica Nacional',
    DataInicio: '23/06/1956',
    DataFim: undefined,
    Expositores: [
        //pessoas.AbrahamPalatnik
        pessoas.AluisioCarvao,
        //pessoas.CesarOiticica
        pessoas.DecioVieira,
        pessoas.FranzWeissmann,
        pessoas.HelioOiticica,
        pessoas.IvanSerpa,
        pessoas.LygiaClark,
    ],
    Patrocinios: undefined,
    Curadores: undefined,
};
