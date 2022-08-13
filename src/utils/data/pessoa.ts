import Fato from '../../domain/fato';
import Pessoa from '../../domain/pessoa';
import { Escultor, Pintor } from './especialidade';
import * as pessoas from './pessoa';
import { CriticoDeArte, Artista, Jornalista } from './profissao';

export const AntonioTaunay: Pessoa = {
    Nome: `Antonio Taunay`,
};

export const PierreLeGros: Pessoa = {
    Nome: `Pierre Le Gros`,
};

export const SimonHurtvelle: Pessoa = {
    Nome: `Simon Hurtvelle`,
};

export const JacquesHouzeau: Pessoa = {
    Nome: `Jacques Houzeau`,
};

export const JeanBaptistePoultier: Pessoa = {
    Nome: `Jean Baptiste Poultier`,
};

export const HCase: Pessoa = {
    Nome: `H Casé`,
};

export const PauloWerneck: Pessoa = {
    Nome: `Paulo Werneck`,
};

export const Giustiniani: Pessoa = {
    Nome: `Giustiniani`,
};

export const GiovanniBattistaMaini: Pessoa = {
    Nome: `Giovanni Battista Maini`,
};

export const Leocares: Pessoa = {
    Nome: `Leocares`,
};

export const ThomasRegnaudin: Pessoa = {
    Nome: `Thomas Regnaudin`,
};

export const MarioPitanguy: Pessoa = {
    Nome: `Mario Pitanguy`,
};

export const JoseOtavioCorreaLima: Pessoa = {
    Nome: `Jose Otavio Correa Lima`,
};

export const DeodorodaFonseca: Pessoa = {
    Nome: `Deodoro da Fonseca`,
};

export const FlorianoPeixoto: Pessoa = {
    Nome: `Floriano Peixoto`,
};

export const PrudentedeMorais: Pessoa = {
    Nome: `Prudente de Morais`,
};

export const CamposSales: Pessoa = {
    Nome: `Campos Sales`,
};

export const RodriguesAlves: Pessoa = {
    Nome: `Rodrigues Alves`,
};

export const AfonsoPena: Pessoa = {
    Nome: `Afonso Pena`,
};

export const NiloPecanha: Pessoa = {
    Nome: `Nilo Peçanha`,
};

export const HermesdaFonseca: Pessoa = {
    Nome: `Hermes da Fonseca`,
};

export const VenceslauBras: Pessoa = {
    Nome: `Venceslau Brás`,
};

export const DelfimMoreira: Pessoa = {
    Nome: `Delfim Moreira`,
};

export const EpitacioPessoa: Pessoa = {
    Nome: `Epitácio Pessoa`,
};

export const ArturBernardes: Pessoa = {
    Nome: `Artur Bernardes`,
};

export const WashingtonLuis: Pessoa = {
    Nome: `Washington Luís`,
};

export const JoseLinhares: Pessoa = {
    Nome: `José Linhares`,
};

export const EuricoGasparDutra: Pessoa = {
    Nome: `Eurico Gaspar Dutra`,
};

export const GetulioVargas: Pessoa = {
    Nome: `Getúlio Vargas`,
};

export const CafeFilho: Pessoa = {
    Nome: `Café Filho`,
};

export const CarlosLuz: Pessoa = {
    Nome: `Carlos Luz`,
};

export const NereuRamos: Pessoa = {
    Nome: `Nereu Ramos`,
};

export const JuscelinoKubitschek: Pessoa = {
    Nome: `Juscelino Kubitschek`,
};

export const JanioQuadros: Pessoa = {
    Nome: `Jânio Quadros`,
};

export const JoaoGoulart: Pessoa = {
    Nome: `João Goulart`,
};

export const RanieriMazzilli: Pessoa = {
    Nome: `Ranieri Mazzilli`,
};

export const HumbertoCasteloBranco: Pessoa = {
    Nome: `Humberto Castelo Branco`,
};

export const ArturdaCostaeSilva: Pessoa = {
    Nome: `Artur da Costa e Silva`,
};

export const EmilioGarrastazuMedici: Pessoa = {
    Nome: `Emílio Garrastazu Médici`,
};

export const ErnestoGeisel: Pessoa = {
    Nome: `Ernesto Geisel`,
};

export const JoaoFigueiredo: Pessoa = {
    Nome: `João Figueiredo`,
};

export const JoseSarney: Pessoa = {
    Nome: `José Sarney`,
};

export const FernandoCollordeMello: Pessoa = {
    Nome: `Fernando Collor de Mello`,
};

export const ItamarFranco: Pessoa = {
    Nome: `Itamar Franco`,
};

export const FernandoHenriqueCardoso: Pessoa = {
    Nome: `Fernando Henrique Cardoso`,
};

export const LuizInacioLuladaSilva: Pessoa = {
    Nome: `Luiz Inácio Lula da Silva`,
};

export const DilmaRousseff: Pessoa = {
    Nome: `Dilma Rousseff`,
};

export const MichelTemer: Pessoa = {
    Nome: `Michel Temer`,
};

export const HelenaMariaPortoSeverodaCosta: Pessoa = {
    Nome: `Helena Maria Porto Severo da Costa`,
    Fatos: [
        new Fato('1991', '', 'Diretora', 'Museu da República', [], 'Rio de Janeiro'),
        new Fato(
            '01/01/1993',
            '01/01/1997',
            'Secretária Municipal de Cultura, Turismo e Esportes',
            'Exonera-se no cargo de Secretária Municipal de Cultura',
            [pessoas.CesarEpitacioMaia, pessoas.VaniaDrumondBonelli, pessoas.EverardoMiranda],
            'Rio de Janeiro',
        ),
        new Fato(
            '01/01/1997',
            '01/02/2000',
            'Secretária Municipal de Cultura',
            'Exonera-se no cargo de Secretária Municipal de Cultura',
            [pessoas.LuizPauloFernandezConde],
            'Rio de Janeiro',
        ),
    ],
};

export const EverardoMiranda: Pessoa = {
    Nome: `Everardo Miranda`,
    Fatos: [
        new Fato('1995', '1997', 'Museu Histórico da Cidade', 'Diretor', [], 'Rio de Janeiro'),
        new Fato(
            '1994',
            '1995',
            'Secretaria Municipal de Cultura',
            'Assesor Especial',
            [pessoas.HelenaMariaPortoSeverodaCosta, pessoas.DanielaPedras],
            'Rio de Janeiro',
        ),
        new Fato('1990', '1993', 'Secretaria Municipal de Cultura/ RioArte', 'Diretor de Artes Visuais', [], 'Rio de Janeiro'),
        new Fato('1983', '1988', 'Secretaria Municipal de Cultura/ RioArte', 'Diretor de Artes Visuais', [], 'Rio de Janeiro'),
    ],
};

export const DanielaPedras: Pessoa = {
    Nome: `Daniela Pedras`,
    Fatos: [
        new Fato(
            '',
            '',
            'Secretaria Municipal de Cultura',
            'Gerente Projetos Especiais',
            [pessoas.HelenaMariaPortoSeverodaCosta, pessoas.EverardoMiranda],
            'Rio de Janeiro',
        ),
        new Fato('', '', '', '', [], 'Rio de Janeiro'),
    ],
};

export const VaniaDrumondBonelli: Pessoa = {
    Nome: `Vania Drumond Bonelli`,
    Fatos: [
        new Fato(
            '23/03/1993',
            '01/01/1997',
            'Substituta Secretária Municipal de Cultura',
            '',
            [pessoas.CesarEpitacioMaia, pessoas.HelenaMariaPortoSeverodaCosta],
            'Rio de Janeiro',
        ),
        new Fato(
            '01/02/2000',
            '29/12/2000',
            'Nomeada Secretária Municipal de Cultura',
            'Exonera-se no cargo de Secretária Municipal de Cultura',
            [],
            'Rio de Janeiro',
        ),
    ],
};

export const MauroMonizFreire: Pessoa = {
    Nome: `Mauro Moniz Freire`,
    Fatos: [new Fato('', '', '', 'Secretário Especial de Monumentos Públicos', [], 'Rio de Janeiro')],
};
export const VillaLobos: Pessoa = {
    Nome: `Villa Lobos`,
};

export const JairBolsonaro: Pessoa = {
    Nome: `Jair Bolsonaro`,
};

export const MarceloCrivella: Pessoa = {
    Nome: `Marcelo Crivella`,
};

export const EduardoPaes: Pessoa = {
    Nome: `Eduardo Paes`,
};

export const CesarEpitacioMaia: Pessoa = {
    Nome: `Cesar Epitácio Maia`,
    Nascimento: '8/06/1945',
    CidadePaisNascimento: 'Rio de Janeiro',
    Fatos: [
        new Fato(
            '01/01/1993',
            '31/12/1996',
            'Prefeito',
            'Prefeitura Municipal do Rio de Janeiro',
            [pessoas.LuizPauloFernandezConde, pessoas.HelenaMariaPortoSeverodaCosta],
            'Rio de Janeiro',
        ),
        new Fato('01/01/2001', '01/01/2009', 'Prefeito', 'Prefeitura Municiapl do Rio de Janeiro', [], 'Rio de Janeiro'),
        new Fato('01/02/1987', '01/01/1993', 'Deputado Federal', 'Estado do Rio de Janeiro', [], 'Rio de Janeiro'),
        new Fato('01/02/2013', '', 'Vereador', 'Estado do Rio de Janeiro', [], 'Rio de Janeiro'),
    ],
};

export const LuizPauloFernandezConde: Pessoa = {
    Nome: `Luiz Paulo Fernandez Conde`,
    Nascimento: '6/08/1934',
    CidadePaisNascimento: 'Rio de Janeiro',
    Morte: '21/07/2015',
    CidadePaisMorte: 'Rio de Janeiro',
    Fatos: [
        new Fato('', '1959', 'Arquiteto', 'Faculdade Nacional de Arquitetura da Universidade do Brasil (atual UFRJ', [], 'Rio de Janeiro'),
        new Fato(
            '01/01/1993',
            '30/05/1996',
            'Secretário Municipal de Urbanismo e Meio Ambiente',
            'Exonera-se do cargo de Secretário Municipal de Urbanismo',
            [pessoas.CesarEpitacioMaia, pessoas.MariaMadalenaSaintMartinAstacio, pessoas.MauroBarataSoaresdeFigueiredo],
            'Rio de Janeiro',
        ),
        new Fato('01/01/1997', '31/12/2000', 'Prefeito', 'Prefeitura Municipal do RIo de Janeiro', [pessoas.EiderDantas], 'Rio de Janeiro'),
    ],
};

export const AndreaAlbuquerqueGarciaRedondo: Pessoa = {
    Nome: `Andrea Albuquerque Garcia Redondo`,
    Fatos: [new Fato('30/05/1996', '30/12/1996', 'Secretário Municipal de Urbanismo', '', [], '')],
};

export const VicenteOrnelas: Pessoa = {
    Nome: `Vicente Ornelas`,
};

export const SergiodeOLiveiraCabralSantosFilho: Pessoa = {
    Nome: `Sergio de Oliveira Cabral Santos Filho`,
};

export const RobertoFerraretoDAvila: Pessoa = {
    Nome: `Roberto Ferrareto D'Avila`,
};

export const GerardoMagellaMelloMourao: Pessoa = {
    Nome: `Gerardo Magella Mello Mourao`,
};

export const CarlosEduardoAgostiniNovaes: Pessoa = {
    Nome: `Carlos Eduardo Agostini Novaes`,
};

export const MariaMadalenaSaintMartinAstacio: Pessoa = {
    Nome: `Maria Madalena Saint Martin Astacio`,
    Fatos: [
        new Fato(
            '30/10/1995',
            '',
            'Substituta Secretario Municipal de Urbanismo',
            'Designada para substituir o Secretario em seus impedimentos',
            [pessoas.LuizPauloFernandezConde],
            'Rio de Janeiro',
        ),
    ],
};

export const ArnaldoAssisMourthe: Pessoa = {
    Nome: `Arnaldo Assis Mourthe`,
    Fatos: [new Fato('', '', '', '', [], 'Rio de Janeiro')],
};

export const LeliaMariaBastosFraga: Pessoa = {
    Nome: `Lelia Maria Bastos Fraga`,
    Fatos: [new Fato('', '', '', 'D', [], 'Rio de Janeiro')],
};

export const MauroBarataSoaresdeFigueiredo: Pessoa = {
    Nome: `Mauro Barata Soares de Figueiredo`,
    Fatos: [
        new Fato(
            '12/06/1996',
            '',
            'Substituto Secretario Municipal de Urbanismo',
            'Designado para substituir o Secretario em seus impedimentos',
            [pessoas.LuizPauloFernandezConde],
            'Rio de Janeiro',
        ),
    ],
};

export const HeliaNacifXavier: Pessoa = {
    Nome: `Helia Nacif Xavier`,
    Fatos: [new Fato('', '', '', '', [], 'Rio de Janeiro')],
};

export const RosinhaMatheus: Pessoa = {
    Nome: `Rosinha Matheus`,
};

export const AnthonyGarotinho: Pessoa = {
    Nome: `Anthony Garotinho`,
};

export const EiderDantas: Pessoa = {
    Nome: `Eider Dantas`,
};

export const JoAntonioRezende: Pessoa = {
    Nome: `Jó Antônio Rezende`,
};

export const RobertoSaturninoBraga: Pessoa = {
    Nome: `Roberto Saturnino Braga`,
};

export const MarceloNunesdeAllencar: Pessoa = {
    Nome: `Marcelo Nunes de Allencar`,
};

export const JamilHaddad: Pessoa = {
    Nome: `Jamil Haddad`,
};

export const JuliodeMoraesCoutinho: Pessoa = {
    Nome: `Júlio de Moraes Coutinho`,
};

export const IsraelKlabin: Pessoa = {
    Nome: `Israel Klabin`,
};

export const MarcosTamoyo: Pessoa = {
    Nome: `Marcos Tamoyo`,
};

export const AntonioChagasFreitas: Pessoa = {
    Nome: `Antônio Chagas Freitas`,
};

export const RaphaelMagalhaes: Pessoa = {
    Nome: `Raphael Magalhães`,
};

export const CarlosLacerda: Pessoa = {
    Nome: `Carlos Lacerda`,
};

export const JoseSetteCamaraFilho: Pessoa = {
    Nome: `José Sette Câmara Filho`,
};

export const JoseJoaquimdeSaFreireAlvim: Pessoa = {
    Nome: `José Joaquim de Sá Freire Alvim`,
};

export const FranciscoNegraodeLima: Pessoa = {
    Nome: `Francisco Negrão de Lima`,
};

export const FranciscodeSaLessa: Pessoa = {
    Nome: `Francisco de Sá Lessa`,
};

export const EiteldeOliveiraLima: Pessoa = {
    Nome: `Eitel de Oliveira Lima`,
};

export const AlimPedro: Pessoa = {
    Nome: `Alim Pedro`,
};

export const DulcidiodoEspiritoSantoCardoso: Pessoa = {
    Nome: `Dulcídio do Espírito Santo Cardoso`,
};

export const JoaoCarlosVital: Pessoa = {
    Nome: `João Carlos Vital`,
};

export const AngeloMendesdeMorais: Pessoa = {
    Nome: `Ângelo Mendes de Morais`,
};

export const HildebrandodeAraujoGois: Pessoa = {
    Nome: `Hildebrando de Araújo Góis`,
};

export const JoseFiladelfodeBarrosAzevedo: Pessoa = {
    Nome: `José Filadelfo de Barros Azevedo`,
};

export const HenriqueDodsworth: Pessoa = {
    Nome: `Henrique Dodsworth`,
};

export const OlimpiodeMelo: Pessoa = {
    Nome: `Olímpio de Melo`,
};

export const AugustodoAmaralPeixoto: Pessoa = {
    Nome: `Augusto do Amaral Peixoto`,
};

export const PedroErnestoBaptista: Pessoa = {
    Nome: `Pedro Ernesto Baptista`,
};

export const JuliaoEsteves: Pessoa = {
    Nome: `Julião Esteves`,
};

export const AdolfoBergamini: Pessoa = {
    Nome: `Adolfo Bergamini`,
};

export const AntoniodaSilvaPradoJunior: Pessoa = {
    Nome: `Antônio da Silva Prado Júnior`,
};

export const AlaorPrata: Pessoa = {
    Nome: `Alaor Prata`,
};

export const CarlosSampaio: Pessoa = {
    Nome: `Carlos Sampaio`,
};

export const MiltonCavalcanteMotarreyos: Pessoa = {
    Nome: `Milton Cavalcante Motarreyos`,
};

export const LuisVerdugo: Pessoa = {
    Nome: `Luis Verdugo`,
};

export const MilciadesMariadeSaFreire: Pessoa = {
    Nome: `Milcíades Mário de Sá Freire`,
};

export const PaulodeFrontin: Pessoa = {
    Nome: `Paulo de Frontin`,
};

export const PeregrinodaSilva: Pessoa = {
    Nome: `Peregrino da Silva`,
};

export const AmaroCavalcanti: Pessoa = {
    Nome: `Amaro Cavalcanti`,
};

export const AntonioAugustodeAzevedoSodre: Pessoa = {
    Nome: `Antônio Augusto de Azevedo Sodré`,
};

export const RivadaviadaCunhaCorreia: Pessoa = {
    Nome: `Rivadávia da Cunha Correia`,
};

export const BentoRibeiro: Pessoa = {
    Nome: `Bento Ribeiro`,
};

export const SerzedeloCorreia: Pessoa = {
    Nome: `Serzedelo Correia`,
};

export const FranciscoMarcelinodeSousaAguiar: Pessoa = {
    Nome: `Francisco Marcelino de Sousa Aguiar`,
};

export const FranciscoPereiraPassos: Pessoa = {
    Nome: `Francisco Pereira Passos`,
};

export const CarlosLeiteRibeiro: Pessoa = {
    Nome: `Carlos Leite Ribeiro`,
};

export const JoaquimXavierdaSilveiraJunior: Pessoa = {
    Nome: `Joaquim Xavier da Silveira Júnior`,
};

export const JoaoFilipePereira: Pessoa = {
    Nome: `João Filipe Pereira`,
};

export const AntonioCoelhoRodrigues: Pessoa = {
    Nome: `Antônio Coelho Rodrigues`,
};

export const HonorioGurgel: Pessoa = {
    Nome: `Honório Gurgel`,
};

export const CesarioAlvim: Pessoa = {
    Nome: `Cesário Alvim`,
};

export const LuisvanErven: Pessoa = {
    Nome: `Luís van Erven`,
};

export const JoseJoaquimdaRosa: Pessoa = {
    Nome: `José Joaquim da Rosa`,
};

export const FranciscoFurquimWerneckdeAlmeida: Pessoa = {
    Nome: `Francisco Furquim Werneck de Almeida`,
};

export const HenriqueValadares: Pessoa = {
    Nome: `Henrique Valadares`,
};

export const AntonioDiasFerreira: Pessoa = {
    Nome: `Antônio Dias Ferreira`,
};

export const BarataRibeiro: Pessoa = {
    Nome: `Barata Ribeiro`,
};

export const AlfredoAugustoVieiraBarcelos: Pessoa = {
    Nome: `Alfredo Augusto Vieira Barcelos`,
};

export const NicolauJoaquimMoreira: Pessoa = {
    Nome: `Nicolau Joaquim Moreira`,
};

export const CarneirodeFontoura: Pessoa = {
    Nome: `Carneiro de Fontoura`,
};

export const JoseFelixdaCunhaMeneses: Pessoa = {
    Nome: `José Félix da Cunha Meneses`,
};

export const UbaldinodoAmaral: Pessoa = {
    Nome: `Ubaldino do Amaral`,
};

export const FranciscoAntonioPessoadeBarros: Pessoa = {
    Nome: `Francisco Antônio Pessoa de Barros`,
};

export const JoaoManueldaSilvaVeiga: Pessoa = {
    Nome: `Ten.-Coronel João Manuel da Silva Veiga`,
};

export const AugustoNunesdeLima: Pessoa = {
    Nome: `Augusto Nunes de Lima - vice prefeito em exercício`,
};

export const JoaoPereiraLopes: Pessoa = {
    Nome: `João Pereira Lopes`,
};

export const JoaoPedrodeMiranda: Pessoa = {
    Nome: `João Pedro de Miranda`,
};

export const JoseFerreiraNobre: Pessoa = {
    Nome: `José Ferreira Nobre`,
};

export const AntonioBarrosoPereira: Pessoa = {
    Nome: `Tenente Coronel Antônio Barroso Pereira`,
};

export const AntonioFerreiraViana: Pessoa = {
    Nome: `Antônio Ferreira Viana`,
};

export const AdolfoBezerradeMenezes: Pessoa = {
    Nome: `Adolfo Bezerra de Menezes`,
};

export const JoaoBatistadosSantos: Pessoa = {
    Nome: `João Batista dos Santos Visconde de Ibituruna`,
};

export const JoaoJosedaCunhaTeles: Pessoa = {
    Nome: `Tenente Coronel João José da Cunha Teles`,
};

export const JoãodeOliveiraFausto: Pessoa = {
    Nome: `João de Oliveira Fausto`,
};

export const MigueldeFriaseVasconcelos: Pessoa = {
    Nome: `Miguel de Frias e Vasconcelos`,
};

export const CandidoBorges: Pessoa = {
    Nome: `Cândido Borges`,
};

export const GabrielGetúlioMonteirodeMendonça: Pessoa = {
    Nome: `Gabriel Getúlio Monteiro de Mendonça`,
};

export const JoãoSilveiradePilar: Pessoa = {
    Nome: `João Silveira de Pilar`,
};

export const LuisdeMenezesVasconcelosdeDrummond: Pessoa = {
    Nome: `Luis de Menezes Vasconcelos de Drummond`,
};

export const HonorioPecanha: Pessoa = {
    Nome: `Honório Pecanha`,
};

export const LaurindoRamos: Pessoa = {
    Nome: `Laurindo Ramos`,
};

export const HildegardoLeaoVeloso: Pessoa = {
    Nome: `Leão Veloso`,
    Nascimento: '1899',
    CidadePaisNascimento: 'São Paulo, Brasil',
    Morte: '1966',
    CidadePaisMorte: 'Rio de Janeiro, Brasil',
    Fatos: [
        new Fato(
            '1934',
            '1934',
            'Premiação',
            'Medalha de Ouro do Salão Oficial junto com Manoel Constantino, Haydéa Santiago e Gaspar Magalhães',
            [],
            'Rio de Janeiro',
        ),
    ],
};

export const GasparMagalhaes: Pessoa = {
    Nome: `Gaspar Magalhães`,
    Fatos: [
        new Fato(
            '1934',
            '1934',
            'Premiação',
            'Medalha de Ouro do Salão Oficial junto com Manoel Constantino, Haydéa Santiago e Leão Veloso',
            [],
            'Rio de Janeiro',
        ),
    ],
};

export const HaydeaSantiago: Pessoa = {
    Nome: `Haydéa Santiago`,
    Fatos: [
        new Fato(
            '1934',
            '1934',
            'Premiação',
            'Medalha de Ouro do Salão Oficial junto com Manoel Constantino, Leão Veloso e Gaspar Magalhães',
            [],
            'Rio de Janeiro',
        ),
    ],
};

export const ManoelConstantino: Pessoa = {
    Nome: `Manoel Constantino`,
    Fatos: [
        new Fato(
            '1934',
            '1934',
            'Premiação',
            'Medalha de Ouro do Salão Oficial junto com Leão Veloso, Haydéa Santiago e Gaspar Magalhães',
            [],
            'Rio de Janeiro',
        ),
    ],
};

export const EduardodeSa: Pessoa = {
    Nome: `Eduardo de Sá`,
};

export const PauloMazzucchelli: Pessoa = {
    Nome: `Paulo Mazzucchelli`,
};

export const BenevenutoBerna: Pessoa = {
    Nome: `Benevenuto Berna`,
};

export const RomeuAlves: Pessoa = {
    Nome: `Romeu Alves`,
};

export const GevasioTeixeira: Pessoa = {
    Nome: `Gevasio Teixeira`,
};

export const BarataFeijo: Pessoa = {
    Nome: `Barata Feijo`,
};

export const SandroLucena: Pessoa = {
    Nome: `Sandro Lucena`,
};

export const HumbertoCozzo: Pessoa = {
    Nome: `Humberto Cozzo`,
};

export const RobertoMagalhaes: Pessoa = {
    Nome: `RobertoMagalhaes`,
};

export const IvanFreitas: Pessoa = {
    Nome: `Ivan Freitas`,
};

export const CarlosDelNigro: Pessoa = {
    Nome: `Carlos Del Nigro`,
};

export const ArmandoShnoorr: Pessoa = {
    Nome: `Armando Sócrates Shnoorr`,
};

export const ACoutinho: Pessoa = {
    Nome: `A. Coutinho`,
};

export const LuizSerri: Pessoa = {
    Nome: `Luiz Serri`,
};

export const UgoTaddey: Pessoa = {
    Nome: `Ugo Taddey`,
};

export const Zanucchi: Pessoa = {
    Nome: `Zanucchi`,
};

export const BrunoGiorgi: Pessoa = {
    Nome: `Bruno Giorgi`,
};

export const FranciscoVictorPalma: Pessoa = {
    Nome: `Francisco Victor Palma`,
};

export const AlfredoCeschiatti: Pessoa = {
    Nome: `AlfredoCeschiatti`,
};

export const ModestinoKanto: Pessoa = {
    Nome: `Modestino Kanto`,
};

export const ValterBrito: Pessoa = {
    Nome: `Valter Brito`,
};

export const CarlosRamos: Pessoa = {
    Nome: `Carlos Ramos`,
};

export const CPincy: Pessoa = {
    Nome: `C. Pincy`,
};

export const AmadeuZani: Pessoa = {
    Nome: `Amadeu Zani`,
};

export const JoseLuizRibeiro: Pessoa = {
    Nome: `José Luiz Ribeiro`,
};

export const OttoDumovich: Pessoa = {
    Nome: `Otto Dumovich`,
};

export const CristinaPozzobon: Pessoa = {
    Nome: `Cristina Pozzobon`,
    Nascimento: '10/01/1961',
    CidadePaisNascimento: 'Terra Boa, Paraná',
    Fatos: [new Fato('1984', '', '', '', [], '')],
};

export const FranciscoAndrade: Pessoa = {
    Nome: `Francisco Andrade`,
};

export const SankhoChaudhuri: Pessoa = {
    Nome: `Sankho Chaudhuri`,
};

export const TitoBernucci: Pessoa = {
    Nome: `Tito Bernucci`,
};

export const MariadaGloriaVianaPatrasso: Pessoa = {
    Nome: `Maria da Gloria Viana Patrasso`,
};

export const JoaoFilgueirasLima: Pessoa = {
    Nome: `João Figueiras Lima`,
};
export const RomaoAlves: Pessoa = {
    Nome: `Romao Alves`,
};

export const LuizFerrer: Pessoa = {
    Nome: `Luiz Ferrer`,
};

export const MarioAgostinelli: Pessoa = {
    Nome: `Mario Agostinelli`,
    Fatos: [new Fato('1953', '1953', 'Fundador', 'Foi fundador da Petit Galerie', [], 'Rio de Janeiro')],
};

export const DecioVilares: Pessoa = {
    Nome: `Décio Vilares`,
};

export const FranciscoManuelChavesPinheiro: Pessoa = {
    Nome: `Francisco Manuel Chaves Pinheiro`,
};

export const JoaoMaximianoMafra: Pessoa = {
    Nome: `Joao Maximiano Mafra`,
};

export const LouisRochet: Pessoa = {
    Nome: `Louis Rochet`,
};

export const JoasPereiradosPassos: Pessoa = {
    Nome: `Joas Pereira dos Passos`,
};

export const Joceil: Pessoa = {
    Nome: `Joceil`,
};

export const LuisPaesLeme: Pessoa = {
    Nome: `Luis Paes Leme`,
};

export const PereiraBarreto: Pessoa = {
    Nome: `Pereira Barreto`,
};

export const RodolfoAmoedo: Pessoa = {
    Nome: `Rodolfo Amoedo`,
};

export const EdgarDuvivier: Pessoa = {
    Nome: `Edgar Duvivier`,
};

export const EdgarDuvivierFilho: Pessoa = {
    Nome: `Edgar Duvivier Filho`,
};

export const RodolfoBernadelli: Pessoa = {
    Nome: `Rodolfo Bernadelli`,
};

export const Ariel: Pessoa = {
    Nome: `Ariel`,
};

export const Desconhecida: Pessoa = {
    Nome: `Desconhecida`,
};

export const NicolinaVazdeAssis: Pessoa = {
    Nome: `Nicolina Vaz de Assis`,
};

export const JoseFranciscoPintoAlpoim: Pessoa = {
    Nome: `José Francisco Pinto Alpoim`,
};

export const JoseFernandesPintoAlpoim: Pessoa = {
    Nome: `José Fernandes Pinto Alpoim`,
};
export const JoaquimRodriguesMoreiraJunior: Pessoa = {
    Nome: `Joaquim Rodrigues Moreira Junior`,
};

export const JorgeSelaron: Pessoa = {
    Nome: `Jorge Selarón`,
    Fatos: [new Fato('1983', '1983', 'Mudança', 'O artista chileno muda-se para o Rio de Janeiro.', [], 'Rio de Janeiro')],
};

export const GracaCostaCabral: Pessoa = {
    Nome: `Graça Costa Cabral`,
};

export const MathurinMoreau: Pessoa = {
    Nome: `Mathurin Moreau`,
};

export const DeoclecianoMartinsdeOliveiraFilho: Pessoa = {
    Nome: `Deocleciano Martins de Oliveira Filho`,
};

export const AugusteFrancoisMarieGlaziou: Pessoa = {
    Nome: `Auguste François Marie Glaziou`,
};

export const DjaniradaMottaeSilva: Pessoa = {
    Nome: `Djanira da Motta e Silva`,
};

export const MarioMatos: Pessoa = {
    Nome: `Mário Matos`,
};

export const MestreValentim: Pessoa = {
    Nome: `Mestre Valentim`,
};

export const JoaoMaximinianoMafra: Pessoa = {
    Nome: `João Maximiniano Mafra`,
};

export const LDespresLaupedeCluny: Pessoa = {
    Nome: `L Despres Laupe de Cluny`,
};

export const GustaveFredericMichel: Pessoa = {
    Nome: `Gustave Frédéric Michel`,
};

export const JoseResende: Pessoa = {
    Nome: `José Resende`,
    Descriçao:
        'Esteve ao lado de artistas como Luis Baravelli e CArlos Fajardo. No geral o artista utiliza materiais comuns, pesados, industriais, que declaram o seu caráter urbano e favorecem livres associaçoes com processos de construção.',
    Fatos: [
        new Fato('1988', '1988', 'Exposição Internacional', 'Bienal de Veneza', [], 'Veneza'),
        new Fato('1992', '1992', 'Exposição Internacional', 'Documenta', [], 'Kassel'),
    ],
};

export const JesperNeergaard: Pessoa = {
    Nome: `Jesper Neergaard`,
};

export const DanielBellionGomesPinto: Pessoa = {
    Nome: `Daniel Bellion Gomes Pinto`,
};

export const WaltercioCaldas: Pessoa = {
    Nome: `Waltércio Caldas`,
};

export const PierreVictorAndre: Pessoa = {
    Nome: `Pierre Victor Andre`,
};

export const FundicaoValDOsne: Pessoa = {
    Nome: `Fundição Val D'Osne`,
    Nascimento: '1836',
    CidadePaisNascimento: 'Haute-Marne, França',
    Morte: '1986',
    CidadePaisMorte: 'Haute-Marne, França',
    Descriçao: 'Fabrica direcionada fundição artística.',
    Fatos: [
        new Fato('05/04/1836', '', 'Autorização', "Recebeu autorizaçao para construir um alto-forno no Val D'Osne", [pessoas.PierreVictorAndre], 'Haute-Marne'),
        new Fato('1870', '1892', "Societé Anonyme des Fonderies d'art du Val d'Osne", '', [], 'Haute-Marne'),
        new Fato(
            '',
            '',
            'Fundição artística',
            '',
            [pessoas.MathurinMoreau, pessoas.LouisSauvageau, pessoas.AugusteMartin, pessoas.HenriFredericIselin],
            'Haute-Marne',
        ),
        new Fato('', '', '', 'Existem no Brasil cerca de 130 obras, entre estátuas, fontes, e peças de mobiliário urbano', [], 'Rio de Janeiro'),
    ],
};

export const CharlesKeck: Pessoa = {
    Nome: `Charles Keck`,
};

export const FranzWeissmann: Pessoa = {
    Nome: `Franz Weissmann`,
    Nascimento: '1911/ 1914',
    CidadePaisNascimento: 'Knittelfeld, Áustria',
    Morte: '2005',
    CidadePaisMorte: 'Rio de Janeiro, Brasil',
    Descriçao:
        'Na busca pela essencia da figura, realiza esculturas com formas cada vez mais geometrizadas, no qual o espaço vazado aparece como eleemento definidor. No decorrer da carreira, o Vazio-Ativo, como o artista denominava tais espaços, torna-se uma obsessão. Sua obra surge do jogo entre o plano e suas articulaçoes com o elemento vazado que nasce a tridimensionalidade aberta para o mundo.',
    Especialidades: [Escultor],
    Fatos: [
        new Fato('1921', '1924', 'Mudança', 'Mudou-se para o Brasil, foi morar no interior de São Paulo', [], ''),
        new Fato('1927', '1927', 'Mudança', 'Mudou-se para a capital do estado', [], 'São Paulo'),
        new Fato('1929', '1929', 'Mudança', 'Mudou-se para o Rio de Janeiro', [], 'Rio de Janeiro'),
        new Fato(
            '1939',
            '1941',
            'Escola Nacional de Belas Artes',
            'Durante dois anos passou pelos cursos de arquitetura, pintura, desenho e escultura. Abandona a escola.',
            [],
            'Rio de Janeiro',
        ),
        new Fato(
            '1942',
            '1944',
            'Atelie August Zamoyski',
            'Estudou desenho, escultura, modelagem e fundição no ateliê do escultor polonês com quem aprendeu técnicas tradicionais do campo',
            [],
            'Rio de Janeiro',
        ),
        new Fato('1944', '1946', 'Mudança', 'Período de grande relevancia na sua formação artística', [], 'Belo Horizonte'),
        new Fato('1946', '1946', 'Exposição Individual', 'Realizou sua primeira exposição individual no diretório de estudantes da ENBA', [], 'Rio de Janeiro'),
        new Fato(
            '1948',
            '1956',
            'Escola do Parque/ Escola Guinard',
            'Foi convidado por Guignard, para dar aulas de modelo vivo, modelagem e escultura na primeira escola de arte moderna de Belo Horizonte, a Escola do Parque',
            [pessoas.AlbertodaVeigaGuignard],
            'Belo Horizonte',
        ),
        new Fato('', '', 'Professor', '', [pessoas.AmilcardeCastro, pessoas.FarnesedeAndrade], 'Belo Horizonte'),
        new Fato(
            '',
            '',
            'Tradição',
            'Foi um dos precursores do construtivismo no Brasil, sua obra caracteriza-se pelo uso das formas geométricas e espaços vazados.',
            [],
            '',
        ),
        new Fato('', '', '', 'Integrante do Grupo Frente', [], ''),
        new Fato('1957', '1957', 'Premio', 'Melhor escultor brasileiro eleito pela Bienal de São Paulo', [], 'São Paulo'),
        new Fato('1958', '1958', 'Premio', 'Ganhou viagem ao exterior do Salão de Arte Moderna', [], ''),
        new Fato('', '', 'Mudança', 'Mora na França', [], ''),
        new Fato('', '', 'Mudança', 'Mora na Espanha', [], ''),
        new Fato('1959', '', 'I Exposição Neoconcreta', '', [pessoas.AmilcardeCastro, pessoas.FranzWeissmann], ''),
        new Fato(
            '1959',
            '',
            'Manifesto Neoconcreto',
            'Publicado no suplemento dominical do Jornal do Brasil',
            [
                pessoas.AmilcardeCastro,
                pessoas.FerreiraGullar,
                pessoas.FranzWeissmann,
                pessoas.LygiaPape,
                pessoas.LygiaClark,
                pessoas.ReynaldoJardim,
                pessoas.TheonSpanudis,
            ],
            'Rio de Janeiro',
        ),
        new Fato(
            '09/05/1991',
            '09/06/1991',
            'Experiência Neoconcreta',
            'Exposição coletiva realizada no MAM/RJ com patrocínio da Rioarte, da BAnerj e dos Transportes Fink',
            [
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
            'Rio de Janeiro',
        ),
        new Fato(
            '1992',
            '1992',
            'Exposição Coletiva',
            'Exposição Escultura 92/ Sete Expressões, Galeria RB1',
            [
                pessoas.AmilcardeCastro,
                pessoas.FransKrajcberg,
                pessoas.FranzWeissmann,
                pessoas.LygiaPape,
                pessoas.Tunga,
                pessoas.AngeloVenosa,
                pessoas.CristinaSalgado,
            ],
            'Rio de Janeiro',
        ),
        new Fato(
            '02/12/1993',
            '02/12/1993',
            'Prêmio Nacional de Arte do Ministério da Cultura',
            'Criado pelo Ibac, o prêmio no valor de CR$900mil foi entregue na abertura do 13 Salão Nacional de Artes Plásticas, no Palácio Gustavo Capaneta',
            [],
            'Rio de Janeiro',
        ),
        new Fato(
            '1997',
            '1997',
            'Exposição Coletiva',
            'Poetas do espaço e da cor realizada no MAM/Rj',
            [pessoas.AlfredoVolpi, pessoas.AncangeloIanelli, pessoas.AldirMendesdeSouza, pessoas.FranzWeissmann],
            'Rio de Janeiro',
        ),
        new Fato(
            '05/11/1998',
            '05/11/1998',
            'Ordem do Mérito do Ministério da Cultura',
            'O prêmio foi entregue ao escultor pelo presidente da República',
            [pessoas.FernandoHenriqueCardoso],
            'Brasília',
        ),
    ],
};

export const CristinaSalgado: Pessoa = {
    Nome: `Cristina Salgado`,
    Fatos: [
        new Fato(
            '1992',
            '1992',
            'Exposição Coletiva',
            'Exposição Escultura 92/ Sete Expressões, Galeria RB1',
            [
                pessoas.AmilcardeCastro,
                pessoas.FransKrajcberg,
                pessoas.FranzWeissmann,
                pessoas.LygiaPape,
                pessoas.Tunga,
                pessoas.AngeloVenosa,
                pessoas.CristinaSalgado,
            ],
            'Rio de Janeiro',
        ),
    ],
};

export const Tunga: Pessoa = {
    Nome: `Tunga`,
    Fatos: [
        new Fato(
            '1992',
            '1992',
            'Exposição Coletiva',
            'Exposição Escultura 92/ Sete Expressões, Galeria RB1',
            [
                pessoas.AmilcardeCastro,
                pessoas.FransKrajcberg,
                pessoas.FranzWeissmann,
                pessoas.LygiaPape,
                pessoas.Tunga,
                pessoas.AngeloVenosa,
                pessoas.CristinaSalgado,
            ],
            'Rio de Janeiro',
        ),
    ],
};

export const AldirMendesdeSouza: Pessoa = {
    Nome: `Aldir Mendes de Souza`,
    Fatos: [
        new Fato(
            '1997',
            '1997',
            'Exposição Coletiva',
            'Poetas do espaço e da cor realizada no MAM/Rj',
            [pessoas.AlfredoVolpi, pessoas.AncangeloIanelli, pessoas.AldirMendesdeSouza, pessoas.FranzWeissmann],
            'Rio de Janeiro',
        ),
    ],
};

export const AncangeloIanelli: Pessoa = {
    Nome: `Ancangelo Ianelli`,
    Fatos: [
        new Fato(
            '1997',
            '1997',
            'Exposição Coletiva',
            'Poetas do espaço e da cor realizada no MAM/Rj',
            [pessoas.AlfredoVolpi, pessoas.AncangeloIanelli, pessoas.AldirMendesdeSouza, pessoas.FranzWeissmann],
            'Rio de Janeiro',
        ),
    ],
};

export const AlfredoVolpi: Pessoa = {
    Nome: `Alfredo Volpi`,
    Fatos: [
        new Fato(
            '1997',
            '1997',
            'Exposição Coletiva',
            'Poetas do espaço e da cor realizada no MAM/Rj',
            [pessoas.AlfredoVolpi, pessoas.AncangeloIanelli, pessoas.AldirMendesdeSouza, pessoas.FranzWeissmann],
            'Rio de Janeiro',
        ),
    ],
};

export const VasniSantana: Pessoa = {
    Nome: `VasniSantana`,
    Fatos: [
        new Fato(
            '09/05/1991',
            '09/06/1991',
            'Experiência Neoconcreta',
            'Exposição coletiva realizada no MAM/RJ com patrocínio da Rioarte, da BAnerj e dos Transportes Fink',
            [
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
            'Rio de Janeiro',
        ),
    ],
};

export const FernandoCocchiarale: Pessoa = {
    Nome: `Fernando Cocchiarale`,
    Fatos: [
        new Fato(
            '09/05/1991',
            '09/06/1991',
            'Curador Experiência Neoconcreta',
            'Exposição coletiva realizada no MAM/RJ com patrocínio da Rioarte, da BAnerj e dos Transportes Fink',
            [
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
            'Rio de Janeiro',
        ),
        new Fato('1978', '', 'Professor', 'Departamento de Filosofia PUC-RJ', [], 'Rio de Janeiro'),
        new Fato(
            '1987',
            '1987',
            'Livro',
            'Abstracionismo Geométrico e Informal: a vanguarda Brasileira dos anos 50, Rio de Janeiro, MEC/Funarte',
            [pessoas.AnnaBellaGeiger],
            'Rio de Janeiro',
        ),
        new Fato('1990', '', 'Professor', 'Escola de Artes Visuais do Parque Lage', [], 'Rio de Janeiro'),
        new Fato('2006', '2006', 'Livro', 'Quem tem medo de Arte Contemporanea, Recife, Fundação Joaquim Nabuco, Editora MAssangana', [], 'Rio de Janeiro'),
        new Fato('1994', '1997', 'Comissão de Curadoria', 'Projeto Esculturas Urbanas', [], 'Rio de Janeiro'),
        new Fato('1994', '1997', 'Comissão de Curadoria', 'Projeto Esculturas Urbanas', [], 'Rio de Janeiro'),
    ],
};

export const AnnaBellaGeiger: Pessoa = {
    Nome: `Anna Bella Geiger`,
    Fatos: [
        new Fato(
            '1987',
            '1987',
            'Livro',
            'Abstracionismo Geométrico e Informal: a vanguarda Brasileira dos anos 50, Rio de Janeiro, MEC/Funarte',
            [pessoas.FernandoCocchiarale],
            'Rio de Janeiro',
        ),
        new Fato('', '', '', ' ', [], 'Rio de Janeiro'),
    ],
};
export const ReynaldoJardim: Pessoa = {
    Nome: `Reynaldo Jardim`,
    Nascimento: '13/12/ 1926',
    CidadePaisNascimento: 'São Paulo',
    Morte: '02/02/2011',
    CidadePaisMorte: 'Brasília',
    Profissoes: [Jornalista],
    Fatos: [
        new Fato(
            '09/05/1991',
            '09/06/1991',
            'Experiência Neoconcreta',
            'Exposição coletiva realizada no MAM/RJ com patrocínio da Rioarte, da BAnerj e dos Transportes Fink',
            [
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
            'Rio de Janeiro',
        ),
    ],
};

export const OsmarDillon: Pessoa = {
    Nome: `Osmar Dillon`,
    Fatos: [
        new Fato(
            '09/05/1991',
            '09/06/1991',
            'Experiência Neoconcreta',
            'Exposição coletiva realizada no MAM/RJ com patrocínio da Rioarte, da BAnerj e dos Transportes Fink',
            [
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
            'Rio de Janeiro',
        ),
    ],
};

export const ClaudioMelloeSouza: Pessoa = {
    Nome: `Claudio Mello e Souza`,
    Fatos: [
        new Fato(
            '09/05/1991',
            '09/06/1991',
            'Experiência Neoconcreta',
            'Exposição coletiva realizada no MAM/RJ com patrocínio da Rioarte, da BAnerj e dos Transportes Fink',
            [
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
            'Rio de Janeiro',
        ),
    ],
};

export const TheonSpanudis: Pessoa = {
    Nome: `Theon Spanudis`,
    Nascimento: '30/05/1915',
    CidadePaisNascimento: 'Esmirna, Turquia',
    Morte: '1986',
    Fatos: [
        new Fato(
            '09/05/1991',
            '09/06/1991',
            'Experiência Neoconcreta',
            'Exposição coletiva realizada no MAM/RJ com patrocínio da Rioarte, da BAnerj e dos Transportes Fink',
            [
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
            'Rio de Janeiro',
        ),
    ],
};

export const RobertoPontual: Pessoa = {
    Nome: `Roberto Pontual`,
    Fatos: [
        new Fato(
            '09/05/1991',
            '09/06/1991',
            'Experiência Neoconcreta',
            'Exposição coletiva realizada no MAM/RJ com patrocínio da Rioarte, da BAnerj e dos Transportes Fink',
            [
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
            'Rio de Janeiro',
        ),
    ],
};

export const DecioVieira: Pessoa = {
    Nome: `Decio Vieira`,
    Fatos: [
        new Fato(
            '09/05/1991',
            '09/06/1991',
            'Experiência Neoconcreta',
            'Exposição coletiva realizada no MAM/RJ com patrocínio da Rioarte, da BAnerj e dos Transportes Fink',
            [
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
            'Rio de Janeiro',
        ),
    ],
};

export const FerreiraGullar: Pessoa = {
    Nome: `Ferreira Gullar`,
    Nascimento: '10/09/1930',
    CidadePaisNascimento: 'São Luis, Maranhão',
    Morte: '04/12/2016',
    CidadePaisMorte: 'Rio de Janeiro',
    Fatos: [
        new Fato(
            '09/05/1991',
            '09/06/1991',
            'Experiência Neoconcreta',
            'Exposição coletiva realizada no MAM/RJ com patrocínio da Rioarte, da BAnerj e dos Transportes Fink',
            [
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
            'Rio de Janeiro',
        ),
    ],
};

export const AluisioCarvão: Pessoa = {
    Nome: `Aluisio Carvão`,
    Nascimento: '1018',
    CidadePaisNascimento: 'Belém, Pará',
    Especialidades: [Pintor],
    Fatos: [
        new Fato(
            '09/05/1991',
            '09/06/1991',
            'Experiência Neoconcreta',
            'Exposição coletiva realizada no MAM/RJ com patrocínio da Rioarte, da BAnerj e dos Transportes Fink',
            [
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
            'Rio de Janeiro',
        ),
        new Fato('', '', 'Museu de Arte Moderna', 'Estudou no museu', [pessoas.IvanSerpa], 'Rio de Janeiro'),
        new Fato('', '', 'Grupo Frente', 'Integrou o movimento', [], 'Rio de Janeiro'),
        new Fato('1960', '1960', 'Prêmiado pelo Salão Nacional de Arte Moderna', 'GAnhou uma viagem para o exterior', [], ''),
        new Fato('', '', 'Bienal de São Paulo', 'Participante', [], 'São Paulo'),
        new Fato('', '', 'Bienal de Tóquio', 'Participante', [], 'Tóquio'),
        new Fato('', '', 'Bienal de México', 'Participante', [], 'México'),
        new Fato('1960', '1960', 'Mostra Internacional de arte concreta', 'Participante', [], 'Zurique'),
    ],
};

export const IvanSerpa: Pessoa = {
    Nome: `Ivan Serpa`,
    Fatos: [new Fato('', '', '', '', [], 'Rio de Janeiro')],
};

export const HerculesBarsotti: Pessoa = {
    Nome: `Hercules Barsotti`,
    Fatos: [
        new Fato(
            '09/05/1991',
            '09/06/1991',
            'Experiência Neoconcreta',
            'Exposição coletiva realizada no MAM/RJ com patrocínio da Rioarte, da BAnerj e dos Transportes Fink',
            [
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
            'Rio de Janeiro',
        ),
    ],
};

export const WillysdeCastro: Pessoa = {
    Nome: `Willys de Castro`,
    Fatos: [
        new Fato(
            '09/05/1991',
            '09/06/1991',
            'Experiência Neoconcreta',
            'Exposição coletiva realizada no MAM/RJ com patrocínio da Rioarte, da BAnerj e dos Transportes Fink',
            [
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
            'Rio de Janeiro',
        ),
    ],
};

export const LygiaPape: Pessoa = {
    Nome: `Lygia Pape`,
    Nascimento: '07/04/1927',
    CidadePaisNascimento: 'Nova Friburgo, Rio de Janeiro',
    Morte: '03/05/2004',
    CidadePaisMorte: 'Rio de Janeiro',
    Fatos: [
        new Fato(
            '09/05/1991',
            '09/06/1991',
            'Experiência Neoconcreta',
            'Exposição coletiva realizada no MAM/RJ com patrocínio da Rioarte, da BAnerj e dos Transportes Fink',
            [
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
            'Rio de Janeiro',
        ),
        new Fato(
            '1992',
            '1992',
            'Exposição Coletiva',
            'Exposição Escultura 92/ Sete Expressões, Galeria RB1',
            [
                pessoas.AmilcardeCastro,
                pessoas.FransKrajcberg,
                pessoas.FranzWeissmann,
                pessoas.LygiaPape,
                pessoas.Tunga,
                pessoas.AngeloVenosa,
                pessoas.CristinaSalgado,
            ],
            'Rio de Janeiro',
        ),
    ],
};

export const HelioOiticica: Pessoa = {
    Nome: `Helio Oiticica`,
    Fatos: [
        new Fato(
            '09/05/1991',
            '09/06/1991',
            'Experiência Neoconcreta',
            'Exposição coletiva realizada no MAM/RJ com patrocínio da Rioarte, da BAnerj e dos Transportes Fink',
            [
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
            'Rio de Janeiro',
        ),
    ],
};

export const LygiaClark: Pessoa = {
    Nome: `Lygia Clark`,
    Nascimento: '23/10/1920',
    CidadePaisNascimento: 'Belo Horizonte, Minas Gerais',
    Morte: '25/04/1988',
    CidadePaisMorte: 'Rio de Janeiro',
};

export const MaryVieira: Pessoa = {
    Nome: `Mary Vieira`,
};

export const FarnesedeAndrade: Pessoa = {
    Nome: `Farnese de Andrade`,
};

export const OtavioAvancini: Pessoa = {
    Nome: `Otavio Avancini`,
};

export const AnisioOscarMotta: Pessoa = {
    Nome: `Fritz, Anisio Oscar Motta`,
};

export const BelmirodeAlmeida: Pessoa = {
    Nome: `Belmiro de Almeida`,
};

export const MestreAlvesSetubal: Pessoa = {
    Nome: `Mestre Alves Setubal`,
};

export const JorgeCupim: Pessoa = {
    Nome: `Jorge Cupim`,
};

export const EduardoRaymundoRodrigues: Pessoa = {
    Nome: `Eduardo Raymundo Rodrigues`,
};

export const CoronelManoelJosedeOliviera: Pessoa = {
    Nome: `Coronel Manoel Jose de Oliviera`,
};

export const FrancoisRude: Pessoa = {
    Nome: `François Rude`,
};

export const MestreJoaoCoelhoMarinho: Pessoa = {
    Nome: `Mestre João Coelho Marinho`,
};

export const RobertoBurleMarx: Pessoa = {
    Nome: `Roberto Burle Marx`,
};

export const NelsonMunizNevares: Pessoa = {
    Nome: `Nelson Muniz Nevares`,
};

export const EugeneLouisLequesne: Pessoa = {
    Nome: `Eugéne Louis Lequesne`,
};

export const RemoBernucci: Pessoa = {
    Nome: `Remo Bernucci`,
};

export const EmilioGiannelli: Pessoa = {
    Nome: `Emilio Giannelli`,
};

export const SironFranco: Pessoa = {
    Nome: `Siron Franco`,
    Especialidades: [Pintor, Escultor],
    Fatos: [
        new Fato('', '', '', 'É um dos artistas brasileiros mais conhecidos no exterior.', [], ''),
        new Fato(
            '1991',
            '1991',
            'I Exposição Internacional de Esculturas Efemeras',
            'Exposição que levou a ser convidado para a exposição do SESC 1996. A obra do artista são duas cobras coloridas que brotam do solo',
            [],
            'Fortaleza',
        ),
        new Fato(
            '1996',
            '1996',
            'SESC Escultura 96',
            '1 Exposição Internacional de Esculturas ao Ar Livre',
            [
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
            'Porto Alegre',
        ),
    ],
};

export const OscarNiemeyer: Pessoa = {
    Nome: `Oscar Niemeyer`,
};

export const PaulJeanBaptisteGasq: Pessoa = {
    Nome: `Paul Jean-Baptiste Gasq`,
};

export const GilbertoMandarino: Pessoa = {
    Nome: `Gilberto Mandarino`,
};

export const PetrusVerdier: Pessoa = {
    Nome: `Petrus Verdier`,
};

export const HeitorUsai: Pessoa = {
    Nome: `Heitor Usai`,
};

export const JulioCesarPesssolaniZavala: Pessoa = {
    Nome: `Julio Cesar Pesssolani Zavala`,
};

export const JoseBarreto: Pessoa = {
    Nome: `Jose Barreto`,
};

export const LiubaWolf: Pessoa = {
    Nome: `Liuba Wolf`,
};

export const JoseMariaJacintoRabelo: Pessoa = {
    Nome: `Jose Maria Jacinto Rabelo`,
};

export const AdrianaJanacopolus: Pessoa = {
    Nome: `Adriana Janacopolus`,
};

export const EugeneBenet: Pessoa = {
    Nome: `Eugène Benet`,
};

export const JoseMarcioBaptistadaCunha: Pessoa = {
    Nome: `José Marcio Baptista da Cunha`,
};

export const Mazerdo: Pessoa = {
    Nome: `Mazerdo`,
};

export const HippolyteFrancoisAugusteHippolytePeyrol: Pessoa = {
    Nome: `Hippolyte Fronçois Auguste Hipolyte Peyrol`,
};

export const PierreLoison: Pessoa = {
    Nome: `Pierre Loison`,
};

export const Merzio: Pessoa = {
    Nome: `Merzio`,
};

export const RibeirodaCosta: Pessoa = {
    Nome: `Ribeiro da Costa`,
};

export const HerbertWHogg: Pessoa = {
    Nome: `Herbert W Hogg`,
};

export const AlicePittaluga: Pessoa = {
    Nome: `Alice Pittaluga`,
};

export const GlaucoRodrigues: Pessoa = {
    Nome: `Glauco Rodrigues`,
};

export const MariaHelenaVasco: Pessoa = {
    Nome: `Maria Helena Vasco`,
};

export const MariaLuciaPivetti: Pessoa = {
    Nome: `Maria Lucia Pivetti`,
};

export const LucioCosta: Pessoa = {
    Nome: `Lucio Costa`,
};

export const VincenzoLarocca: Pessoa = {
    Nome: `Vincenzo Larocca`,
};

export const FernandoThauby: Pessoa = {
    Nome: `Fernando Thauby`,
};

export const HenockdeAlmeida: Pessoa = {
    Nome: `Henock de Almeida`,
};

export const ArnaldoValilo: Pessoa = {
    Nome: `Arnaldo Valilo`,
};

export const AndreRedont: Pessoa = {
    Nome: `André Redont`,
};

export const MiguelNoreña: Pessoa = {
    Nome: `Miguel Noreña`,
};

export const JoseCustodiodeSaeFaria: Pessoa = {
    Nome: `José Custodio de Sá e Faria`,
};

export const CarlosObregonSantacilia: Pessoa = {
    Nome: `Carlos Obregon Santacilia`,
};

export const JoaoTurin: Pessoa = {
    Nome: `João Turin`,
};

export const AnisioMederios: Pessoa = {
    Nome: `Anisio Mederios`,
};

export const AristocherBenjamimMeschessi: Pessoa = {
    Nome: `Aristocher Benjamim Meschessi`,
};

export const EgistoBertozzi: Pessoa = {
    Nome: `Egisto Bertozzi`,
};

export const JorgeMarioJauregui: Pessoa = {
    Nome: `Jorge Mario Jauregui`,
};

export const GiuseppeNavone: Pessoa = {
    Nome: `Giuseppe Navone`,
};

export const LouisSauvageau: Pessoa = {
    Nome: `Louis Sauvageau`,
};

export const JoaquimMoreiraJunior: Pessoa = {
    Nome: `Joaquim Moreira Junior`,
};

export const RuffoFanucchi: Pessoa = {
    Nome: `Ruffo Fanucchi`,
};

export const JoaquimCorrea: Pessoa = {
    Nome: `Joaquim Correa`,
};

export const CaroccabaThor: Pessoa = {
    Nome: `Caroccaba Thor`,
};

export const LeonardoLima: Pessoa = {
    Nome: `Leonardo Lima`,
};

export const RodolfoPintoCouto: Pessoa = {
    Nome: `Rodolfo Pinto Couto`,
};

export const DanteCroce: Pessoa = {
    Nome: `Dante Croce`,
};

export const VHabegger: Pessoa = {
    Nome: `V. Habegger`,
};

export const AscanioMMM: Pessoa = {
    Nome: `Ascanio MMM`,
    Nascimento: '1941',
    CidadePaisNascimento: 'Fão, Portugal',
    Especialidades: [Escultor],
    Fatos: [
        new Fato('1959', '1959', 'Muda-se', 'Vem para o Brasil e mora no Rio de Janeiro', [], 'Rio de Janeiro'),
        new Fato('1963', '1964', 'Escola Nacional de Belas Artes', 'Estudante', [], 'Rio de Janeiro'),
        new Fato('', '1969', 'Faculdade de Arquitetura da UFRJ', 'Estudante', [], 'Rio de Janeiro'),
        new Fato('', '', 'Diretor', 'Galeria de Arte do Instituto de Arquitetos do Brasil', [], 'Rio de Janeiro'),
        new Fato('', '', 'Diretor', 'Galeria de Arte do Centro Empresarial Rio', [], 'Rio de Janeiro'),
        new Fato('1978', '1978', 'Premiado', 'Viagem ao exterior pelo Salão Nacional de Artes Plásticas', [], 'Rio de Janeiro'),
        new Fato('', '', 'Participante', 'Bienal de Arte de São Paulo', [], 'São Paulo'),
        new Fato('', '', 'Participante', 'Bienal de Arte da Antuerpia', [], 'Antuerpia'),
    ],
};

export const LourillandSan: Pessoa = {
    Nome: `Lourilland San`,
};

export const JeanMagrou: Pessoa = {
    Nome: `Jean Magrou`,
};

export const WalterCurvelodeMendonca: Pessoa = {
    Nome: `Walter Curvelo de Mendonça`,
};

export const HenriWeigele: Pessoa = {
    Nome: `Henri Weigele`,
};

export const AndrewHandyside: Pessoa = {
    Nome: `Andrew Handyside`,
};

export const CelsoAntonio: Pessoa = {
    Nome: `Celso Antonio`,
};

export const EdsonJannuzzi: Pessoa = {
    Nome: `Edson Jannuzzi`,
};

export const MarcosAndreSales: Pessoa = {
    Nome: `Marcos Andre Sales`,
};

export const ABraga: Pessoa = {
    Nome: `A. Braga`,
};

export const MarliMazeredo: Pessoa = {
    Nome: `Marli Mazeredo`,
    Fatos: [
        new Fato('1972', '1977', 'Graduação', 'Bacharelado em Direito, Universidade Cândido Mendes', [], 'Rio de Janeiro'),
        new Fato('1974', '1977', 'Curso', 'Escola de Artes Visuais Parque Lage', [], 'Rio de Janeiro'),
        new Fato('1980', '1980', 'Curso', 'Escola do Museu de Arte Moderna', [], 'Rio de Janeiro'),
        new Fato('1984', '1984', 'Curso', 'Atelier La Grande Chaumiere', [], 'Paris'),
        new Fato('1981', '1981', 'Exposição', 'Individual na Fundação Getúlio Vargas', [], 'Rio de Janeiro'),
        new Fato('1983', '1983', 'Exposição', 'Academia Brasileira de Letras', [], 'Rio de Janeiro'),
        new Fato('1985', '1985', 'Exposição', 'Galeria La Bussole', [], 'Rio de Janeiro'),
        new Fato('1986', '1986', 'Exposição', 'Art Fair Los Angeles', [], 'Los Angeles'),
        new Fato('1986', '1986', 'Exposição', 'Galeria Spider Artes', [], 'Rio de Janeiro'),
        new Fato('1986', '1986', 'Exposição', 'Galeria Espaços e Idéias', [], 'Rio de Janeiro'),
        new Fato('1987', '1987', 'Exposição', 'Art Expo', [], 'Nova York'),
        new Fato('1987', '1987', 'Exposição', 'I Mostra Brasil-Holanda', [], 'Amsterdam'),
        new Fato('1987', '1987', 'Exposição', 'Carisma- Shopping Cassino Atlântico,', [], 'Rio de Janeiro'),
        new Fato('1987', '1987', 'Exposição', 'Kasteel Dussen', [], 'Amsterdam'),
        new Fato('1988', '1988', 'Exposição', 'Sociedade Nacional de Belas Artes', [], 'Lisboa'),
        new Fato('1988', '1988', 'Exposição', 'Galeria Place des Arts', [], 'Rio de Janeiro'),
        new Fato('1988', '1988', 'Exposição', 'Ousadia da Forma - Galeria Toulouse', [], 'Rio de Janeiro'),
        new Fato('1988', '1988', 'Exposição', 'Casa dos Crivos', [], 'Braga'),
        new Fato('1988', '1988', 'Exposição', 'A Arte através dos Tempos - Museu Galeria CEF', [], 'Rio de Janeiro'),
        new Fato('1988', '1988', 'Exposição', 'Semana Carioca de Artes', [], 'Bruxelas'),
        new Fato('1988', '1988', 'Exposição', 'Galeria Atelier', [], 'Vitória'),
        new Fato('1990', '1990', 'Exposição', 'Opera House', [], 'Cairo'),
        new Fato('1990', '1990', 'Exposição', 'Centro Cultural Paraskevi', [], 'Atenas'),
        new Fato('1991', '1991', 'Exposição', 'GB Arte', [], 'Rio de Janeiro'),
        new Fato('1991', '1991', 'Exposição', 'Galeria ADA', [], 'Salvador'),
        new Fato('1992', '1992', 'Exposição', 'Prismart Cultura, Fórum Global - Rio 92', [], 'Rio de Janeiro'),
        new Fato('1992', '1992', 'Exposição', 'A Arte na  Natureza - Parque da Cidade', [], 'Rio de Janeiro'),
        new Fato('1993', '1993', 'Exposição', 'Museu Viscaya', [], 'Miami'),
        new Fato('1993', '1993', 'Exposição', 'Distant Land Gallery', [], 'Miami'),
        new Fato('1994', '1994', 'Exposição', 'Museu Nacional de Belas Artes', [], 'Rio de Janeiro'),
        new Fato('1995', '1995', 'Exposição', 'Convention Center Jacobs Javits', [], 'Nova York'),
        new Fato('1997', '1997', 'Exposição', 'Galeria The Connaisseurs', [], 'Paris'),
        new Fato('1997', '1997', 'Exposição', 'GENT', [], 'Bruxelas'),
        new Fato('1997', '1997', 'Exposição', 'Galeria Herouet', [], 'Paris'),
        new Fato('1998', '1998', 'Exposição', 'Toit de La Grande Arche – La Défense', [], 'Paris'),
        new Fato('1998', '1998', 'Exposição', 'Coup de Couer – Espaço Cardin', [], 'Paris'),
        new Fato('1998', '1998', 'Exposição', 'Galeria Herouet', [], 'Paris'),
        new Fato('1998', '1998', 'Exposição', 'Coup de Couer', [], 'Paris'),
        new Fato('1998', '1998', 'Exposição', 'Toit de La Grande Arche – La Défense', [], 'Bruxelas'),
        new Fato('1999', '1999', 'Bienal', 'Bienal Internacional de Malta Pontica D’arc', [], 'Italia'),
        new Fato('1999', '1999', 'Exposição', 'Carroussel du Louvre - Art Paris', [], 'Paris'),
        new Fato('2004', '2004', 'Exposição', 'Millenium - Orla de Copacabana', [], 'Rio de Janeiro'),
    ],
};

export const JoseRangel: Pessoa = {
    Nome: `José Rangel`,
};

export const AntonioTeixeiraLopes: Pessoa = {
    Nome: `António Teixeira Lopes`,
};

export const FelixMauriceCharpentier: Pessoa = {
    Nome: `Felix Maurice Charpentier`,
};

export const ChicaGranchi: Pessoa = {
    Nome: `Chica Granchi`,
};

export const LuizFigueiredo: Pessoa = {
    Nome: `Luiz Figueiredo`,
};

export const AngeloVenosa: Pessoa = {
    Nome: `Angelo Venosa`,
    Fatos: [
        new Fato(
            '1992',
            '1992',
            'Exposição Coletiva',
            'Exposição Escultura 92/ Sete Expressões, Galeria RB1',
            [
                pessoas.AmilcardeCastro,
                pessoas.FransKrajcberg,
                pessoas.FranzWeissmann,
                pessoas.LygiaPape,
                pessoas.Tunga,
                pessoas.AngeloVenosa,
                pessoas.CristinaSalgado,
            ],
            'Rio de Janeiro',
        ),
    ],
};

export const FrancoiseSchein: Pessoa = {
    Nome: `Francoise Schein`,
};

export const MillorFernandes: Pessoa = {
    Nome: `Millôr Fernandes`,
};

export const ClaudioCavalcanti: Pessoa = {
    Nome: `Claudio Cavalcanti`,
};

export const FranciscoBologna: Pessoa = {
    Nome: `Francisco Bologna`,
};

export const LeoSantana: Pessoa = {
    Nome: `Leo Santana`,
};

export const FArynkiewicz: Pessoa = {
    Nome: `F. Arynkiewicz`,
};

export const ChristinaMotta: Pessoa = {
    Nome: `Christina Motta`,
};

export const SandraGuinle: Pessoa = {
    Nome: `Sandra Guinle`,
};

export const ChicoCaruso: Pessoa = {
    Nome: `Chico Caruso`,
};

export const JaimeLenner: Pessoa = {
    Nome: `Jaime Lenner`,
};

export const LuciaGuerreiro: Pessoa = {
    Nome: `Lucia Guerreiro`,
};

export const HomeroBrito: Pessoa = {
    Nome: `Homero Brito`,
};

export const DanielCrow: Pessoa = {
    Nome: `Daniel Crow`,
};

export const RobertoSa: Pessoa = {
    Nome: `Roberto Sá`,
};

export const AntonioCaringi: Pessoa = {
    Nome: `Antonio Caringi`,
};

export const ClaraSa: Pessoa = {
    Nome: `Clara Sá`,
};

export const JoseCesarBranquinho: Pessoa = {
    Nome: `José Cesar Branquinho`,
};

export const RicardoVillar: Pessoa = {
    Nome: `Ricardo Villar`,
};

export const AzevedoNeto: Pessoa = {
    Nome: `Azevedo Neto`,
};

export const Ique: Pessoa = {
    Nome: `Ique`,
};

export const FredericoMoraes: Pessoa = {
    Nome: `Frederico Moraes`,
    Profissoes: [CriticoDeArte],
};

export const ReynaldoRoels: Pessoa = {
    Nome: `Reynaldo Roels`,
    Profissoes: [CriticoDeArte],
    Fatos: [new Fato('', '', 'Comissão de Seleção', 'Projeto Esculturas Urbanas', [], 'Rio de Janeiro')],
};

export const AmilcardeCastro: Pessoa = {
    Nome: `Amilcar de Castro`,
    Profissoes: [Artista],
    Fatos: [
        new Fato('', '', 'Aluno', 'Foi aluno de ', [pessoas.FranzWeissmann, pessoas.AlbertodaVeigaGuignard], 'cidade'),
        new Fato('', '', 'Tradição', 'Tradição construtiva', [], ''),
        new Fato(
            '1959',
            '',
            'I Exposição Neoconcreta',
            'Entre as obras expostas, havia um escultura constituída apenas de uma chapa de ferro que se abria em planos inclinados, para cima e para baixo, e que anunciava o futuro dsenvolvimento de sua obra. Tratava-se de uma chapa cortada ao meio e submetida a uma torça precisa e expressiva que deflagrava um dinamismo novo no espaço, transfigurando a forma e a matéria.',
            [pessoas.AmilcardeCastro, pessoas.FranzWeissmann],
            'cidade',
        ),
        new Fato(
            '1959',
            '',
            'Manifesto Neoconcreto',
            'Publicado no suplemento dominical do Jornal do Brasil',
            [
                pessoas.AmilcardeCastro,
                pessoas.FerreiraGullar,
                pessoas.FranzWeissmann,
                pessoas.LygiaPape,
                pessoas.LygiaClark,
                pessoas.ReynaldoJardim,
                pessoas.TheonSpanudis,
            ],
            'Rio de Janeiro',
        ),
        new Fato('1959', '1959', 'Designer', 'Fez a reforma gráfica do Jornal do Brasil', [], 'Rio de Janeiro'),
        new Fato(
            '1992',
            '1992',
            'Exposição Coletiva',
            'Exposição Escultura 92/ Sete Expressões, Galeria RB1',
            [
                pessoas.AmilcardeCastro,
                pessoas.FransKrajcberg,
                pessoas.FranzWeissmann,
                pessoas.LygiaPape,
                pessoas.Tunga,
                pessoas.AngeloVenosa,
                pessoas.CristinaSalgado,
            ],
            'Rio de Janeiro',
        ),
        new Fato('11/06/1996', '11/06/1996', 'Exposição', 'Galeria Silvia Cintra', [], 'Rio de Janeiro'),
        new Fato(
            '05/12/1995',
            '05/12/1995',
            'Prêmio Nacional de Arte',
            'Amilcar é o terceiro artista brasileiro a receber o prêmio, criado em 1993 pelo então Ministro da Cultura, Antonio Houaiss, a pedido de Ferreira Gullar, na época presidente da Ibac, hoje FUNARTE',
            [],
            'Rio de Janeiro',
        ),
        new Fato(
            '1996',
            '1996',
            'SESC Escultura 96',
            '1 Exposição Internacional de Esculturas ao Ar Livre',
            [
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
            'Porto Alegre',
        ),
    ],
};

export const VascoPrado: Pessoa = {
    Nome: `Vasco Prado`,
    Fatos: [
        new Fato(
            '1996',
            '1996',
            'SESC Escultura 96',
            '1 Exposição Internacional de Esculturas ao Ar Livre',
            [
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
            'Porto Alegre',
        ),
    ],
};

export const ClaudioMaciel: Pessoa = {
    Nome: `Claudio Maciel`,
    Fatos: [
        new Fato(
            '1996',
            '1996',
            'SESC Escultura 96',
            '1 Exposição Internacional de Esculturas ao Ar Livre',
            [
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
            'Porto Alegre',
        ),
    ],
};

export const PauloRobertodeChristo: Pessoa = {
    Nome: `Paulo Roberto de Christo`,
    Fatos: [
        new Fato(
            '1996',
            '1996',
            'SESC Escultura 96',
            '1 Exposição Internacional de Esculturas ao Ar Livre',
            [
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
            'Porto Alegre',
        ),
    ],
};

export const MarliAmadoAraujo: Pessoa = {
    Nome: `Marli AmadoAraujo`,
    Fatos: [
        new Fato(
            '1996',
            '1996',
            'SESC Escultura 96',
            '1 Exposição Internacional de Esculturas ao Ar Livre',
            [
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
            'Porto Alegre',
        ),
    ],
};

export const AnaNorogrando: Pessoa = {
    Nome: `Ana Norogrando`,
    Fatos: [
        new Fato(
            '1996',
            '1996',
            'SESC Escultura 96',
            '1 Exposição Internacional de Esculturas ao Ar Livre',
            [
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
            'Porto Alegre',
        ),
    ],
};

export const FernandoLindote: Pessoa = {
    Nome: `Fernando Lindote`,
    Fatos: [
        new Fato(
            '1996',
            '1996',
            'SESC Escultura 96',
            '1 Exposição Internacional de Esculturas ao Ar Livre',
            [
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
            'Porto Alegre',
        ),
    ],
};

export const GaudencioFidelis: Pessoa = {
    Nome: `Gaudencio Fidelis`,
    Fatos: [
        new Fato(
            '1996',
            '1996',
            'SESC Escultura 96',
            '1 Exposição Internacional de Esculturas ao Ar Livre',
            [
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
            'Porto Alegre',
        ),
    ],
};

export const GustavoNakle: Pessoa = {
    Nome: `Gustavo Nakle`,
    Fatos: [
        new Fato(
            '1996',
            '1996',
            'SESC Escultura 96',
            '1 Exposição Internacional de Esculturas ao Ar Livre',
            [
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
            'Porto Alegre',
        ),
    ],
};

export const XicoStockinger: Pessoa = {
    Nome: `Xico Stockinger`,
    Fatos: [
        new Fato(
            '1996',
            '1996',
            'SESC Escultura 96',
            '1 Exposição Internacional de Esculturas ao Ar Livre',
            [
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
            'Porto Alegre',
        ),
    ],
};

export const CarlosdeBrittoVelho: Pessoa = {
    Nome: `Carlos de Britto Velho`,
    Fatos: [
        new Fato(
            '1996',
            '1996',
            'SESC Escultura 96',
            '1 Exposição Internacional de Esculturas ao Ar Livre',
            [
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
            'Porto Alegre',
        ),
    ],
};

export const PatricioFarias: Pessoa = {
    Nome: `Patricio Farias`,
    Fatos: [
        new Fato(
            '1996',
            '1996',
            'SESC Escultura 96',
            '1 Exposição Internacional de Esculturas ao Ar Livre',
            [
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
            'Porto Alegre',
        ),
    ],
};

export const ClaudioTozzi: Pessoa = {
    Nome: `Claudio Tozzi`,
    Fatos: [
        new Fato(
            '1996',
            '1996',
            'SESC Escultura 96',
            '1 Exposição Internacional de Esculturas ao Ar Livre',
            [
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
            'Porto Alegre',
        ),
    ],
};

export const JorgeFranciscoSoto: Pessoa = {
    Nome: `Jorge FranciscoSoto`,
    Fatos: [
        new Fato(
            '1996',
            '1996',
            'SESC Escultura 96',
            '1 Exposição Internacional de Esculturas ao Ar Livre',
            [
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
            'Porto Alegre',
        ),
    ],
};

export const MieyaBaglietto: Pessoa = {
    Nome: `Mieya Baglietto`,
    Fatos: [
        new Fato(
            '1996',
            '1996',
            'SESC Escultura 96',
            '1 Exposição Internacional de Esculturas ao Ar Livre',
            [
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
            'Porto Alegre',
        ),
    ],
};

export const ServuloEsmeraldo: Pessoa = {
    Nome: `Servulo Esmeraldo`,
    Fatos: [
        new Fato(
            '1996',
            '1996',
            'SESC Escultura 96',
            '1 Exposição Internacional de Esculturas ao Ar Livre',
            [
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
            'Porto Alegre',
        ),
    ],
};

export const PepAdmetlla: Pessoa = {
    Nome: `Pep Admetlla`,
    Fatos: [
        new Fato(
            '1996',
            '1996',
            'SESC Escultura 96',
            '1 Exposição Internacional de Esculturas ao Ar Livre',
            [
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
            'Porto Alegre',
        ),
    ],
};

export const JosedeGuimaraes: Pessoa = {
    Nome: `Jose de Guimaraes`,
    Fatos: [
        new Fato(
            '1996',
            '1996',
            'SESC Escultura 96',
            '1 Exposição Internacional de Esculturas ao Ar Livre',
            [
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
            'Porto Alegre',
        ),
    ],
};

export const JulianAgosta: Pessoa = {
    Nome: `Julian Agosta`,
    Fatos: [
        new Fato(
            '1996',
            '1996',
            'SESC Escultura 96',
            '1 Exposição Internacional de Esculturas ao Ar Livre',
            [
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
            'Porto Alegre',
        ),
    ],
};

export const AlbertodaVeigaGuignard: Pessoa = {
    Nome: `Alberto da Veiga Guignard`,
};

export const Azevedo: Pessoa = {
    Nome: `Azevedo`,
};

export const PauloCase: Pessoa = {
    Nome: `Paulo Casé`,
};

export const SergioDias: Pessoa = {
    Nome: `Sergio Dias`,
};

export const EFCochet: Pessoa = {
    Nome: `E.F.Cochet`,
};

export const JoaoJacoParana: Pessoa = {
    Nome: `João Jacó Paraná`,
};

export const AlfredoBrito: Pessoa = {
    Nome: `Alfredo Brito`,
};

export const FloryGama: Pessoa = {
    Nome: `Flory Gama`,
};

export const LouisJosephDaumas: Pessoa = {
    Nome: `Louis Joseph Daumas`,
};

export const AndreaVerrocchio: Pessoa = {
    Nome: `Andrea Verrocchio`,
};

export const SamuelMartinsRibeiro: Pessoa = {
    Nome: `Samuel Martins Ribeiro`,
};

export const HCunhaMelo: Pessoa = {
    Nome: `H. Cunha Melo`,
};

export const MarioCravo: Pessoa = {
    Nome: `Mario Cravo`,
};

export const FransKrajcberg: Pessoa = {
    Nome: `Frans Krajcberg`,
    Fatos: [
        new Fato(
            '1992',
            '1992',
            'Exposição Coletiva',
            'Exposição Escultura 92/ Sete Expressões, Galeria RB1',
            [
                pessoas.AmilcardeCastro,
                pessoas.FransKrajcberg,
                pessoas.FranzWeissmann,
                pessoas.LygiaPape,
                pessoas.Tunga,
                pessoas.AngeloVenosa,
                pessoas.CristinaSalgado,
            ],
            'Rio de Janeiro',
        ),
    ],
};

export const FranciscoStockinger: Pessoa = {
    Nome: `Francisco Stockinger`,
};

export const MariaGuilherminaFernandes: Pessoa = {
    Nome: `Maria Guilhermina Fernandes`,
};

export const HeloisaDolabella: Pessoa = {
    Nome: `Heloisa Dolabella`,
};

export const SergioCamargo: Pessoa = {
    Nome: `Sérgio Camargo`,
};

export const AlfredoAlfredoCeschiatti: Pessoa = {
    Nome: `Alfredo AlfredoCeschiatti`,
};

export const MelindaGarcia: Pessoa = {
    Nome: `Melinda Garcia`,
};

export const AntonioManuelOliveira: Pessoa = {
    Nome: `Antonio Manuel Oliveira`,
};

export const CeleidaTostes: Pessoa = {
    Nome: `Celeida Tostes`,
};

export const JoseRaulAllegretti: Pessoa = {
    Nome: `José Raul Allegretti`,
};

export const TatiMoreno: Pessoa = {
    Nome: `Tati Moreno`,
};

export const Marmura: Pessoa = {
    Nome: `Marmura`,
};

export const IvanPaulPaccini: Pessoa = {
    Nome: `Ivan Paul Paccini`,
};

export const Caribe: Pessoa = {
    Nome: `Caribé`,
};

export const EvandroCarneiro: Pessoa = {
    Nome: `Evandro Carneiro`,
};

export const FernandoCasas: Pessoa = {
    Nome: `Fernando Casás`,
};

export const SoniaEbling: Pessoa = {
    Nome: `Sonia Ebling`,
};

export const AlencastroGraca: Pessoa = {
    Nome: `Alencastro Graça`,
};

export const JorgeMartinsCancela: Pessoa = {
    Nome: `Jorge Martins Cancela`,
};

export const PedroCorreiadeAraujo: Pessoa = {
    Nome: `Pedro Correia de Araújo`,
};

export const MoemaBranquinho: Pessoa = {
    Nome: `Moema Branquinho`,
};

export const JeanJacquesPradier: Pessoa = {
    Nome: `Jean Jacques Pradier`,
};

export const EmilioGiannelle: Pessoa = {
    Nome: `Emilio Giannelle`,
};

export const GabrielFonseca: Pessoa = {
    Nome: `Gabriel Fonseca`,
};

export const FernandoCorreiaDias: Pessoa = {
    Nome: `Fernando Correia Dias`,
};

export const FrancoiseShein: Pessoa = {
    Nome: `Françoise Shein`,
};

export const JesperNeewgaard: Pessoa = {
    Nome: `Jesper Neewgaard`,
};

export const HelioPelegrino: Pessoa = {
    Nome: `Helio Pelegrino`,
};

export const AluisioCarvao: Pessoa = {
    Nome: `Aluísio Carvão`,
    Nascimento: '23/01/1920',
    CidadePaisNascimento: 'Belem, Para',
    Morte: '15/11/2001',
    CidadePaisMorte: 'Rio de Janeiro',
};

export const MarcosKonderNetto: Pessoa = {
    Nome: `Marcos Konder Netto`,
};

export const RomeoAlves: Pessoa = {
    Nome: `Romeo Alves`,
};

export const VilmaNoel: Pessoa = {
    Nome: `Vilma Noel`,
};

export const WainoAaltonem: Pessoa = {
    Nome: `Waino Aaltonem`,
};

export const AugustZamoiski: Pessoa = {
    Nome: `Augusto Zamoiski`,
};

export const HBertazzoni: Pessoa = {
    Nome: `H. Bertazzoni`,
};

export const HeitordaSilvaCosta: Pessoa = {
    Nome: `Heitor da Silva Costa`,
};

export const CesarDoria: Pessoa = {
    Nome: `Cesar Dória`,
};

export const AntonioPintodeMattos: Pessoa = {
    Nome: `Antonio Pinto de Mattos`,
};

export const AugusteLebourg: Pessoa = {
    Nome: `Auguste Lebourg`,
};

export const LuizRey: Pessoa = {
    Nome: `Luiz Rey`,
};

export const ProfetaGentileza: Pessoa = {
    Nome: `José Datrino (Profeta Gentileza)`,
};

export const FranciscoJoaquimBethencourtdaSilva: Pessoa = {
    Nome: `Francisco Joaquim Bethencourt da Silva`,
};

export const HenriFredericIselin: Pessoa = {
    Nome: `Henri-Frédéric Iselin`,
};

export const GiulioStarace: Pessoa = {
    Nome: `Giulio Starace`,
};

export const NicolinaVazdeAssisPintodoCouto: Pessoa = {
    Nome: `Nicolina Vaz de Assis Pinto do Couto`,
};

export const JulesSegal: Pessoa = {
    Nome: `Jules Segal`,
};

export const ArquimedesJosedaSilva: Pessoa = {
    Nome: `Arquimedes José da Silva`,
};

export const RobertAdams: Pessoa = {
    Nome: `Robert Adams`,
};

export const GianPietroZanni: Pessoa = {
    Nome: `Gian Pietro Zanni`,
};

export const FreiGeraldoRoberfeld: Pessoa = {
    Nome: `Frei Geraldo Roberfeld`,
};

export const JaimeSampaio: Pessoa = {
    Nome: `Jaime Sampaio`,
};

export const PinedoParis: Pessoa = {
    Nome: `Pinedo Paris`,
};

export const MateusFernandes: Pessoa = {
    Nome: `Mateus Fernandes`,
};

export const Lana: Pessoa = {
    Nome: `Lana`,
};

export const CurzioZani: Pessoa = {
    Nome: `Curzio Zani`,
};

export const TorresdeOliveira: Pessoa = {
    Nome: `Torres de Oliveira`,
};

export const PaulodeTarso: Pessoa = {
    Nome: `Paulo de Tarso`,
};

export const AugusteMartin: Pessoa = {
    Nome: `Auguste Martin`,
};

export const AugusteHenriVictorGrandjeandeMontigny: Pessoa = {
    Nome: `Auguste Henri Victor Grandjean de Montigny`,
};

export const AlfredoHerculanoFreixo: Pessoa = {
    Nome: `Alfredo Herculano Freixo`,
};

export const OrlandoMagdalena: Pessoa = {
    Nome: `Orlando Magdalena`,
};

export const NewtonSa: Pessoa = {
    Nome: `Newton Sá`,
};

export const JoseMagalhaes: Pessoa = {
    Nome: `José Magalhães`,
};

export const MiguelPastor: Pessoa = {
    Nome: `Miguel Pastor`,
};

export const AntonioCarlosBettiniLiboredo: Pessoa = {
    Nome: `António Carlos Bettini Liboredo`,
};

export const LuciomardeJesus: Pessoa = {
    Nome: `Luciomar de Jesus`,
};
export const MarcosChaves: Pessoa = {
    Nome: `Marcos Chaves`,
};

export const VicenteDelRio: Pessoa = {
    Nome: `Vicente Del Rio`,
};

export const LuizCarlosToledo: Pessoa = {
    Nome: `Luiz Carlos Toledo`,
};

export const PedroFernandesVianadaSilva: Pessoa = {
    Nome: `Pedro Fernandes Viana da Silva`,
};

export const OscarTecidio: Pessoa = {
    Nome: `Oscar Tecidio.`,
};

export const MayerhogereToledo: Pessoa = {
    Nome: `Mayerhoger e Toledo.`,
};

export const NivaldoRodrigues: Pessoa = {
    Nome: `Nivaldo Rodrigues.`,
};

export const RenatoPrimaveraMarinho: Pessoa = {
    Nome: `Renato Primavera Marinho`,
};

export const AlmirdeLimaMachado: Pessoa = {
    Nome: `Almir de Lima Machado`,
};

export const PauloCelsoPrado: Pessoa = {
    Nome: `Paulo Celso Prado`,
};

export const ArquimedesJdaSilva: Pessoa = {
    Nome: `Arquimedes J. da Silva`,
};

export const RonaldoBenevello: Pessoa = {
    Nome: `Ronaldo Benevello`,
};

export const AdilsonRoquedosSantos: Pessoa = {
    Nome: `Adilson Roque dos Santos`,
};

export const JulesJeanJulesSalmson: Pessoa = {
    Nome: `Jules Jean Jules Salmson`,
};

export const JoseBranquinho: Pessoa = {
    Nome: `José Branquinho`,
};

export const VeraLuciaCardim: Pessoa = {
    Nome: `Vera Lucia Cardim`,
};

export const RuiLeal: Pessoa = {
    Nome: `Rui Leal`,
};

export const Marlota: Pessoa = {
    Nome: `Marlota`,
};

export const LauraTaves: Pessoa = {
    Nome: `Laura Taves`,
};

export const JairdeSouza: Pessoa = {
    Nome: `Jair de Souza`,
};

export const AdoAzevedo: Pessoa = {
    Nome: `Ado Azevedo`,
};

export const HuangJian: Pessoa = {
    Nome: `Huang Jian`,
};

export const MaritzaOrleans: Pessoa = {
    Nome: `Maritza Orleans`,
};

export const CeliaLamelle: Pessoa = {
    Nome: `Celia Lamelle`,
};

export const RuyRezende: Pessoa = {
    Nome: `Ruy Rezende`,
};

export const SergioBertoni: Pessoa = {
    Nome: `Sergio Bertoni`,
};

export const FredericAugustoBartholdi: Pessoa = {
    Nome: `Frédéric Augusto Bartholdi`,
};

export const ClecioRegis: Pessoa = {
    Nome: `Clécio Regis`,
};

export const LuizVerdugo: Pessoa = {
    Nome: `Luiz Verdugo`,
};

export const PedroAugusto: Pessoa = {
    Nome: `Pedro Augusto`,
};

export const FernandodaSilvaAbreu: Pessoa = {
    Nome: `Fernando da Silva Abreu`,
};

export const MaxGrossman: Pessoa = {
    Nome: `Max Grossman`,
};

export const NiltonMontarroyos: Pessoa = {
    Nome: `Nilton Cavalcante Motarroyos`,
    Fatos: [new Fato('', '', 'Arquiteto', 'Urbanização do bairro de Campo Grande', [], '')],
};

export const GeorgeGuerra: Pessoa = {
    Nome: `George Guerra`,
};

export const GeorgeLopes: Pessoa = {
    Nome: `George Lopes`,
};

export const ElzaOsborne: Pessoa = {
    Nome: `Elza Osborne`,
};

export const PedroPaulinoGuimaraes: Pessoa = {
    Nome: `Pedro Paulino Guimarães`,
};

export const RaphCyriloDias: Pessoa = {
    Nome: `Raph Cyrilo Dias`,
};

export const CLinel: Pessoa = {
    Nome: `C. Linel`,
};

export const DaviLeal: Pessoa = {
    Nome: `Davi Leal`,
};

export const VictorBrecheret: Pessoa = {
    Nome: `Victor Brecheret`,
};

export const JASiqueiraFilho: Pessoa = {
    Nome: `J.A. Siqueira Filho`,
};

export const ErnaniFreire: Pessoa = {
    Nome: `Ernani Freire`,
};

export const CarlosWerneckdeCarvalho: Pessoa = {
    Nome: `Carlos Werneck de Carvalho`,
};

export const DavidXavierdeAzambuja: Pessoa = {
    Nome: `David Xavier de Azambuja`,
};

export const RebecaMatteIñiguez: Pessoa = {
    Nome: `Rebeca Matte Iñiguez`,
};

export const RicoReis: Pessoa = {
    Nome: `Rico Reis`,
};

export const BenevenutaBerna: Pessoa = {
    Nome: `Benevenuta Berna`,
};

export const AnaluNabuco: Pessoa = {
    Nome: `Analu Nabuco`,
};

export const RobertoKenjiFukuda: Pessoa = {
    Nome: `Roberto Kenji Fukuda`,
};

export const PauloFreire: Pessoa = {
    Nome: `Paulo Freire`,
};

export const VaniaVilela: Pessoa = {
    Nome: `Vania Vilela`,
};

export const GianCarloPatuzzi: Pessoa = {
    Nome: `Gian Carlo Patuzzi`,
};

export const VeraTorres: Pessoa = {
    Nome: `Vera Torres`,
};

export const ArmandoAmaya: Pessoa = {
    Nome: `Armando Amaya`,
};

export const SMartinsRibeiro: Pessoa = {
    Nome: `S. Martins Ribeiro`,
};

export const PedroMMartinezCorada: Pessoa = {
    Nome: `Pedro M. Martínez Corada`,
};

export const SimoneGiacobbo: Pessoa = {
    Nome: `Simone Giacobbo`,
};

export const SergioMoreiraDias: Pessoa = {
    Nome: `Sérgio Moreira Dias`,
};

export const BeneditoAbbud: Pessoa = {
    Nome: `Benedito Abbud`,
};

export const LeilahCosta: Pessoa = {
    Nome: `Leilah Costa`,
};

export const UrbanoAlvesIglesias: Pessoa = {
    Nome: `Urbano Alves Iglesias`,
};

export const PedroBruno: Pessoa = {
    Nome: `Pedro Bruno`,
};

export const RaimundoReis: Pessoa = {
    Nome: `Raimundo Reis`,
};

export const AntonioMoreiradeSouza: Pessoa = {
    Nome: `Antônio Moreira de Souza.`,
};

export const Helmano: Pessoa = {
    Nome: `Helmano`,
};

export const CyniraNDantas: Pessoa = {
    Nome: `Cynira N. Dantas`,
};

export const AugustoSilva: Pessoa = {
    Nome: `Augusto Silva`,
};

export const MestreSaul: Pessoa = {
    Nome: `Mestre Saul`,
};

export const AlbertoNunesBorges: Pessoa = {
    Nome: `Alberto Nunes Borges`,
};

export const MarioCravoNeto: Pessoa = {
    Nome: `Mário Cravo Neto`,
};

export const PauloSantos: Pessoa = {
    Nome: `Paulo Santos`,
};

export const PauloPires: Pessoa = {
    Nome: `Paulo Pires`,
};

export const RaimundoRodrigues: Pessoa = {
    Nome: `Raimundo Rodrigues`,
};

export const CelsoAntônio: Pessoa = {
    Nome: `Celso Antônio`,
};

export const PaulodeSouzaPires: Pessoa = {
    Nome: `Paulo de Souza Pires`,
};

export const GilsonNascimento: Pessoa = {
    Nome: `Gilson Nascimento`,
};

export const PaulLandowski: Pessoa = {
    Nome: `Paul Landowski`,
};

export const PauloVillon: Pessoa = {
    Nome: `Paulo Villon`,
};

export const WladimirAlvesdeSouza: Pessoa = {
    Nome: `Wladimir Alves de Souza`,
};

export const JobdeAlcântara: Pessoa = {
    Nome: `Job de Alcântara`,
};

export const RSilva: Pessoa = {
    Nome: `R. Silva`,
};

export const RaymundodeCastroMaia: Pessoa = {
    Nome: `Raymundo de Castro Maia`,
};

export const WladimirAlvesdeSousa: Pessoa = {
    Nome: `Wladimir Alves de Sousa`,
};

export const RaymundodeCastroMaya: Pessoa = {
    Nome: `Raymundo de Castro Maya`,
};

export const WaldimirAlvesdeSouza: Pessoa = {
    Nome: `Waldimir Alves de Souza.`,
};

export const CharlesAugusteLebourg: Pessoa = {
    Nome: `Charles Auguste Lebourg`,
};

export const MarcioPintanguy: Pessoa = {
    Nome: `Marcio Pintanguy`,
};

export const ElzaCasancaodeMedeiros: Pessoa = {
    Nome: `Elza Casanção de Medeiros`,
};

export const AffonsoEduardoReidy: Pessoa = {
    Nome: `Affonso Eduardo Reidy`,
};

export const MarcosKonderNeto: Pessoa = {
    Nome: `Marcos Konder Neto`,
};

export const HelioRibasMarinho: Pessoa = {
    Nome: `Hélio Ribas Marinho`,
};

export const HaroldoBarroso: Pessoa = {
    Nome: `Haroldo Barroso`,
};

export const SylvioAzevedo: Pessoa = {
    Nome: `Sylvio Azevedo`,
};

export const BrunoPires: Pessoa = {
    Nome: `Bruno Pires`,
};

export const PharraBuarque: Pessoa = {
    Nome: `Bruno Pires e Pharrá Buarque`,
};

export const SidneyGomesdosSantos: Pessoa = {
    Nome: `Sidney Gomes dos Santos`,
};

export const MarioSophia: Pessoa = {
    Nome: `Mario Sophia`,
};

export const RichardKelly: Pessoa = {
    Nome: `Richard Kelly`,
};

export const JorgedosAnjos: Pessoa = {
    Nome: `Jorge dos Anjos`,
};

export const DSantosLeal: Pessoa = {
    Nome: `D. Santos Leal`,
};

export const TeresaOliveiraSantos: Pessoa = {
    Nome: `Teresa Oliveira Santos`,
};

export const ProvinSerres: Pessoa = {
    Nome: `Provin Serres`,
};

export const AugusteMartins: Pessoa = {
    Nome: `Auguste Martins`,
};

export const IvensMachado: Pessoa = {
    Nome: `Ivens Machado`,
};

export const HelenaTownsend: Pessoa = {
    Nome: `Helena Townsend`,
};

export const BernavenutoBerna: Pessoa = {
    Nome: `Bernavenuto Berna`,
};

export const RobertoMoriconi: Pessoa = {
    Nome: `Roberto Moriconi`,
};

export const CGibson: Pessoa = {
    Nome: `C. Gibson`,
};

export const DVillan: Pessoa = {
    Nome: `D. Villan`,
};

export const AnthonyHowe: Pessoa = {
    Nome: `Anthony Howe`,
};

export const MariaCouto: Pessoa = {
    Nome: `Mariá Couto`,
};

export const RonaldoPereiraRego: Pessoa = {
    Nome: `Ronaldo Pereira Rego`,
};

export const NataliaReyesNagle: Pessoa = {
    Nome: `Natalia Reyes Nagle`,
};

export const JohnSouza: Pessoa = {
    Nome: `John Souza`,
};

export const MarthaSophia: Pessoa = {
    Nome: `Martha Sophia`,
};

export const PeroFernandes: Pessoa = {
    Nome: `Pedro Fernandes`,
};

export const FlavioFerreira: Pessoa = {
    Nome: `Flavio de OliveiraFerreira`,
    Fatos: [new Fato('11/09/1986', '30/12/1988', 'Secretário', 'Secretário Municipal de Desenvolvimento Urbano', [], 'Rio de Janeiro')],
};
