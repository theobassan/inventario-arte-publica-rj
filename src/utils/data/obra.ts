import { Data, Fato, Obra } from '@domain';

import * as artistas from './artista';
import * as pessoas from './pessoa';

export const AdolfoVarnhagen_JoseOtavioCorreiaLima: Obra = {
    ID: 1,
    Artistas: [artistas.Desconhecida],
    Titulo: `Adolfo Varnhagen`,
    Classificacao: 'perene',
    Categoria: 'personalidades',
    TipologiaObra: `Busto`,
    Material: `Bronze`,
    Descricao: ``,
    Execucao: true,
    DataInauguracao: `21/10/1938`,
    Zona: 'Sul',
    Bairro: 'Glória',
    PontoDeReferencia: 'Praça Paris',
    Latitude: `-22.917001`,
    Longitude: `-43.177775`,
    Fatos: [
        new Fato(
            '21/10/1938',
            '21/10/1938',
            'Inauguração',
            'O busto de Adolfo Varnhagem foi colocado celebração ao centenário da fundação do Instituto Histórico e Geográfico Brasileiro',
            [],
            'Rio de Janeiro',
        ),
        new Fato(
            '21/10/1938',
            '21/10/1938',
            'Homenageado',
            'Adolfo Varnhagem, primeiro secretário do Instituto Histórico e Geográfico Brasileiro',
            [],
            'Rio de Janeiro',
        ),
    ],
};

export const AyrtonSenna_MarioPitanguy: Obra = {
    ID: 1,
    Artistas: [artistas.MarioPitanguy],
    Titulo: `Ayrton Senna`,
    Classificacao: 'perene',
    Categoria: 'personalidades',
    TipologiaObra: `Estátua`,
    Material: `Bronze`,
    Descricao: `Estátua em tamanho real do piloto Ayrton Senna. O piloto foi retratado trajando um macacão e está posicionado no deugrau mais alto de um pódio e celebrando uma vitória com a bandeira do brasil nas mãos.`,
    Execucao: true,
    DataInauguracao: `27/12/2019`,
    Zona: 'Sul',
    Bairro: 'Copacabana',
    PontoDeReferencia: 'Em frente ao Hotel Copacabana Palace',
    Latitude: `-22.865393`,
    Longitude: `-43.254853`,
    Fatos: [
        new Fato('27/12/2019', '27/12/2019', 'Inauguração', '', [], 'Rio de Janeiro'),
        new Fato('', '', 'Doação', 'A estátua foi doada pela agencia de viagens virtual Hurb-Hotel Urbano.', [], 'Rio de Janeiro'),
        new Fato('', '', 'Homenageado', 'Ayrton Senna, piloto de Fórmula-1', [], 'Rio de Janeiro'),
    ],
};

export const OratorioNossaSenhoraAparecida_Desconhecida: Obra = {
    ID: 1,
    Artistas: [artistas.Desconhecida],
    Titulo: `Oratório de Nossa Senhora Aparecida`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Oratório`,
    Material: `Peça em metal pintada`,
    Descricao: `Pequeno oratório de metal e vidro sobre um pedestal de granito polido com a imagem de Nossa Senhora.`,
    Execucao: true,
    DataInauguracao: `01/1996`,
    Zona: 'Norte',
    Bairro: 'Bonsucesso',
    Latitude: `-22.865393`,
    Longitude: `-43.254853`,
    Fatos: [
        new Fato('2004', '2004', 'Inauguração', 'Millenium - Orla de Copacabana', [], 'Rio de Janeiro'),
        new Fato('', '', 'Homenageado', 'Nossa Senhora Aparecida', [], 'Rio de Janeiro'),
    ],
};

export const CemAnosDeRamos_Desconhecida: Obra = {
    ID: 2,
    Artistas: [artistas.Desconhecida],
    Titulo: `Cem Anos de Ramos`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Marco`,
    Material: `Peça em concreto com placa em mármore`,
    Descricao: `Pequeno marco com inscrições comemorativas.`,
    Execucao: true,
    DataInauguracao: `10/1986`,
    Latitude: `-22.8531028`,
    Longitude: `-43.2614332`,
    Fatos: [new Fato('10/1986', '10/1986', 'Promotor', 'Lions Club local e SESC', [], 'Rio de Janeiro')],
};

export const MarechalFlorianoPeixoto_EduardodeSa: Obra = {
    ID: 36,
    Artistas: [artistas.EduardodeSa],
    Titulo: `Marechal Floriano Peixoto`,
    Classificacao: 'perene',
    Categoria: 'personalidades',
    TipologiaObra: `Estátua`,
    Material: `Peça e alegorias em bronze e pedestal de granito`,
    Descricao: `O Monumento foi executado para exaltar a nacionalidade brasileira e sua formação, com grupos alegoricos lembrando os indígenas, os portugueses, os negros e a presença católica no Brasil.
    Nas laterias do grande pedestal vê-se um grupo representando os silvícolas (quadro Inspirado no canto VI do Y-Juca-Pirama, poema dos Timbiras, de Gonçalves Dias). Em outra face está esculpida uma alegoria 
    da conquista portuguesa, com um grupo em que domina o lendário Caramuru. Depois, o período da catequese, simbolizado pelo padre Anchieta. E, finalmente, um conjunto representando a colaboração étnica da raça
    africana, inspirado em uma passagem do poema Cachoeira de Paulo Afonso, de Castro Alves. No topo do monumento encontra-se uma figura de mulher, exprimindo a Paz e o Amor e um grupo principal constituído pelo
    Marechal Floriano Peixoto, com espada em punho. As figuras de Tiradentes,Jose Bonifácioe Benjamim Constant, que surgem da bandeira da República. Na base as grandes datas da nossa história  1500, 1822, 1888 e 1889
    estão gravadas e no plano inferior, as seguintes legendas  A sã política é filha da moral e da razão  O amor por principio e a ordem por base; o progresso por fim  Libertas quae sera tamen  A bem amada Pátria, a
    gratidão de seus filhos.`,
    Execucao: true,
    DataInauguracao: `21/04/1910`,
    Latitude: `-22.9101486`,
    Longitude: `-43.176075`,
    Fatos: [
        new Fato('', '', 'Homenageado', 'Marechal Floriano Peixoto', [], 'Rio de Janeiro'),
        new Fato('', '', 'Subscrição Popular', '', [], 'Rio de Janeiro'),
    ],
};

export const GetulioVargas_LuizSerri: Obra = {
    ID: 40,
    Artistas: [artistas.LuizSerri],
    Titulo: `Getulio Vargas`,
    Classificacao: 'perene',
    Categoria: 'personalidades',
    TipologiaObra: `Busto`,
    Material: `Peça em bronze e pedestal de granito`,
    Descricao: `Nessa ocasião, foi instalada no pedestal A Carta Testamento de Getúlio, como o principal documento relacionado a sua morte. `,
    Execucao: true,
    DataInauguracao: `1954`,
    Zona: 'Central',
    Bairro: 'Centro',
    PontoDeReferencia: 'Praça Floriano',
    Latitude: `-22.9109921`,
    Longitude: `-43.1759181`,
    Fatos: [
        new Fato('', '', 'Homenageado', 'Getulio Vargas', [], 'Rio de Janeiro'),
        new Fato('', '', 'Promotor', 'A obra foi implantada por admiradores e partidários', [], 'Rio de Janeiro'),
        new Fato(
            '1954',
            '1954',
            'Inauguração',
            'A primeira homenagem da cidade do Rio de Janeiro a Getúlio Vargas aconteceu logo após sua morte, em 1954, quando foi instalado um busto sobre um vaso de mármore carrara.',
            [],
            'Rio de Janeiro',
        ),
        new Fato(
            '24/08/1962',
            '24/08/1962',
            'Reinauguração',
            'O busto foi reinaugurado em seu devido pedestal com uma placa contendo A Carta Testamento de Getúlio,',
            [],
            'Rio de Janeiro',
        ),
        new Fato('08/018', '08/2018', 'Furto', 'A placa com a Carta Testamento foi furtada', [], 'Rio de Janeiro'),
    ],
};

export const JuceslinoKubischek_Desconhecida: Obra = {
    ID: 41,
    Artistas: [artistas.Desconhecida],
    Titulo: `Juceslino Kubischek`,
    Classificacao: 'perene',
    Categoria: 'personalidades',
    TipologiaObra: `Busto`,
    Material: `Peça em bronze e pedestal de concreto`,
    Descricao: `Em relatos o monumento "apareceu na praça". Houve em frente ao Clube Militar uma baderna, com bombas de gas lacrimogeo, pedradas e brigas, quando o busto "desapareceu".`,
    Execucao: true,
    DataInauguracao: `1960`,
    Zona: 'Central',
    Bairro: 'Centro',
    PontoDeReferencia: 'Praça Floriano (Cinelandia)',
    Latitude: `-22.9107052`,
    Longitude: `-43.1760106`,
    Remocao: true,
    Fatos: [
        new Fato('', '', 'Homenageado', 'Juceslino Kubischek', [], ''),
        new Fato('', '', 'Promotor', 'Admiradores', [], 'Rio de Janeiro'),
        new Fato(
            '16/10/1965',
            '16/10/1965',
            'Vandalismo',
            'O busto foi derrubado durante uma manifestação na Praça Floriano (Cinelandia)',
            [],
            'Rio de Janeiro',
        ),
        new Fato('11/1983', '11/1983', 'Reinstalação', '', [], 'Rio de Janeiro'),
        new Fato('11/1983', '11/1983', 'Promoção', 'Movimento de Mobilização Nacional', [], 'Rio de Janeiro'),
    ],
};

export const PauloSampaio_Desconhecida: Obra = {
    ID: 52,
    Imagem: 'PauloSampaio_Desconhecida.jpg',
    Artistas: [artistas.Desconhecida],
    Titulo: `Paulo Sampaio`,
    Classificacao: 'perene',
    Categoria: 'personalidades',
    TipologiaObra: `Busto`,
    Material: `Peça em bronze e pedestal de granito`,
    Descricao: `A primeira homenagem foi retirada da Praça em frente ao prédio da finada companhia aereo em 1967. Esse busto
    foi um pedido dos ex-funcionários da Panair ao prefeitura`,
    Execucao: true,
    DataInauguracao: '09/2002',
    Zona: 'Central',
    Bairro: 'Centro',
    PontoDeReferencia: 'Praça Marechal Ancora',
    Latitude: `-22.9057922`,
    Longitude: `-43.1685091`,
    Fatos: [new Fato('', '', 'Homenageado', 'Paulo Sampaio', [], ''), new Fato('', '', 'Propriedade', 'Pública', [], 'Rio de Janeiro')],
};

export const JoaquimNabuco_OttoDumovich: Obra = {
    ID: 60,
    Artistas: [artistas.OttoDumovich],
    Titulo: `Joaquim Nabuco`,
    Classificacao: 'perene',
    Categoria: 'personalidades',
    TipologiaObra: `Estátua`,
    Material: `Peça em bronze e pedestal de concreto`,
    Execucao: true,
    DataInauguracao: `03/2011`,
    Latitude: `-22.9100063`,
    Longitude: `-43.1721709`,
    Fatos: [
        new Fato('', '', 'Homenageado', 'Joaquim Nabuco', [], ''),
        new Fato(
            '',
            '',
            'Homenagem',
            'A homenagem fez parte das festividades do centenário da morte do Patrono da Academia Brasileira de Letras',
            [],
            'Rio de Janeiro',
        ),
        new Fato(
            '',
            '',
            'Solicitação',
            'A obra foi solicitada pelo Presidente da Academia Brasileira de Letras, Marcos Villaça à Prefeitura da cidade.',
            [],
            'Rio de Janeiro',
        ),
    ],
};

export const BenjamimConstant_DecioVilares_EduardodeSa: Obra = {
    ID: 66,
    Artistas: [artistas.DecioVilares, artistas.EduardodeSa],
    Titulo: `Benjamim Constant`,
    Classificacao: 'perene',
    Categoria: 'personalidades',
    TipologiaObra: `Escultura`,
    Material: `Bronze e pedestal de granito`,
    Descricao: `O monumento tem como figura principal a escultura da Humanidade, simbolizada em uma mulher, tendo seu filho nos braços. A imagem da esposa de Benjamim, traz a bandeira república sendo bordada por
    sua filha e que Lea ofereceu a Escola Militar do Rio de Janeiro e a Escola Superior da Guerra. E o monumento que apresenta o maior número de símbolos exprimindo fatos históricos ligados a Pátria e a Humanidade.`,
    Execucao: true,
    DataInauguracao: `07/1926`,
    PontoDeReferencia: 'Em frente ao Campo de Santana',
    Latitude: `-22.9065115`,
    Longitude: `-43.18853`,
    DataRealocacao: '06/1949',
    Realocacao: true,
    PontoDeReferenciaorealocacao: 'Dentro do Campo de Santana',
    Fatos: [
        new Fato('', '', 'Homenageado', 'Benjamim Constant', [], ''),
        new Fato('', '', 'Oferecimento', 'A obra foi oferecida à cidade por Amaro da Silveira.', [], ''),
        new Fato('2013', '2013', 'Vandalismo', 'O livro em bronze da obra foi danificado e removido para o depósito do Parque Noronha Santos', [], ''),
    ],
};

export const CandidodeOliveira_LaurindoRamos: Obra = {
    ID: 69,
    Imagem: 'CandidodeOliveira_LaurindoRamos.jpg',
    Artistas: [artistas.LaurindoRamos],
    Titulo: `Candido de Oliveira`,
    Classificacao: 'perene',
    Categoria: 'personalidades',
    TipologiaObra: `Busto`,
    Material: `Peça em bronze e pedestal de concreto`,
    Execucao: true,
    DataInauguracao: `06/1991`,
    Zona: 'Central',
    Bairro: 'Centro',
    PontoDeReferencia: 'Largo do Caco',
    Latitude: `-22.9073659`,
    Longitude: `-43.1904433`,
    Fatos: [
        new Fato('', '', 'Solicitação', 'Réplica solicitada a pedido da Prefeitura para reconhecimento publico.', [], 'Rio de Janeiro'),
        new Fato('06/1991', '06/1991', 'Inauguração', '', [], 'Rio de Janeiro'),
        new Fato(
            '1919',
            '1919',
            'Réplica',
            'A homenagem é uma réplica da peça existente na Faculdade de Direito da Universidade Federal do Rio de Janeiro',
            [],
            'Rio de Janeiro',
        ),
        new Fato('', '', 'Fundição/Atelier', 'Zani Fundição Artística E Metalúrgica Ltda.', [], 'Rio de Janeiro'),
        new Fato('', '', 'Propriedade', 'Pública', [], 'Rio de Janeiro'),
    ],
};

export const SebastiaoLeme_MariadaGloriaVianaPatrasso: Obra = {
    ID: 70,
    Artistas: [artistas.MariadaGloriaVianaPatrasso],
    Titulo: `Sebastião Leme`,
    Classificacao: 'perene',
    Categoria: 'personalidades',
    TipologiaObra: `Busto`,
    Material: `Peça em bronze e pedestal de granito`,
    Descricao: `A homenagem em agradecimento ao segundo cardeal brasileiro.`,
    Execucao: true,
    DataInauguracao: `10/1951`,
    Zona: 'Central',
    Bairro: 'Centro',
    PontoDeReferencia: 'Praça Cardeal Leme',
    Latitude: `-22.9077046`,
    Longitude: `-43.1941086`,
    Fatos: [
        new Fato('', '', 'Homenageado', 'Cardeal Sebastião Leme', [], 'Rio de Janeiro'),
        new Fato(
            '10/1951',
            '10/1951',
            'Inauguração',
            'Foi inaugurado nas comemorações do nono aniversario do falecimento, pelo prefeito João Carlos Vidal e pelo Cardeal D. Jaime Camara.',
            [],
            'Rio de Janeiro',
        ),
    ],
};

export const JoaoPauloII_MarioAgostinelli: Obra = {
    ID: 75,
    Artistas: [artistas.MarioAgostinelli],
    Promotor: 'Secretaria de Projetos Especiais da Prefeitura da Cidade do Rio de Janeiro',
    Titulo: `João Paulo II`,
    Classificacao: 'perene',
    Categoria: 'personalidades',
    TipologiaObra: `Estátua`,
    Material: `Peça em bronze com pedestal revestido de granito`,
    Descricao: `A peça foi confeccionada durante dois meses e meio. A iniciativa da Prefeitura da Cidade do Rio de Janeiro fez parte da organização do II Encontro Mundial das famílias com o Papa João Paulo II. O pontifície é representado de corpo inteiro numa postura típica de acolhimento. Junto a ele, encontra-se uma placa com as inscrições: Papa João Paulo II. E conhecereis a verdade e a verdade vos libertará.`,
    Altura: '250 cm',
    Peso: '450 kg',
    ValorObra: 'R$ 150.000,00',
    Execucao: true,
    DataInauguracao: `04/10/1997`,
    Zona: 'Central',
    Bairro: 'Centro',
    PontoDeReferencia: 'Jardim da Catedral Metropolitana de São Sebastião, Avenida República do Chile, 245',
    Latitude: `-22.909576`,
    Longitude: `-43.1811314`,
    Lugar: 'Jardim',
    Fatos: [
        new Fato('1997', '1997', 'Encomenda oficial', 'Secretaria de Projetos Especiais da Prefeitura da Cidade do Rio de Janeiro', [], 'Rio de Janeiro'),
        new Fato('', '', 'Fundição/Atelier', 'Zani Fundição Artística E Metalúrgica Ltda.', [], 'Rio de Janeiro'),
        new Fato('', '', 'Propriedade', 'Pública', [], 'Rio de Janeiro'),
        new Fato('1997', '1997', 'Patrocínio', '150 empresários de origens árabe e judaica.', [], 'Rio de Janeiro'),
        new Fato(
            '04/10/1997',
            '04/10/1997',
            'Inauguração',
            'A estátua foi inaugurada logo após a celebração da missa para 5 mil convidados, realizada pelo Papa João Paulo II',
            [],
            'Rio de Janeiro',
        ),
        new Fato('06/11/1997', '06/11/1997', 'Vandalismo', 'Grafitaram a estátua do Papa João Paulo II', [], 'Rio de Janeiro'),
        new Fato(
            '11/11/1997',
            '11/11/1997',
            'Limpeza',
            'Assim que foi informada da pichação, a Secretaria Especial de Monumentos Públicos mandou verificar a obra. A limpeza foi feita com solventes especiais para remoção de tinta.',
            [],
            'Rio de Janeiro',
        ),
    ],
};

export const PierreRichiereGuillaumeChartier_JoasPereiradosPassos: Obra = {
    ID: 81,
    Imagem: 'PierreRichiereGuillaumeChartier_JoasPereiradosPassos.jpg',
    Artistas: [artistas.JoasPereiradosPassos],
    Titulo: `Pierre Richier e Guillaume Chartier`,
    Classificacao: 'perene',
    Categoria: 'personalidades',
    TipologiaObra: `Estátua`,
    Material: `Peças e alegorias em bronze e pedestal de granito`,
    Descricao: `Os homenageados estão atras de uma grande mesa em bronze,onde ser lê-se esta inscrição Em memória de mim. Trata-se
    de monumento comemorativo à primeira celebração eucarística protestante no Brasil e nas Américas, realizada no Rio de Janeiro
    em 21 de março de 1557.`,
    Execucao: true,
    DataInauguracao: `03/2007`,
    Zona: 'Central',
    Bairro: 'Centro',
    PontoDeReferencia: 'Rua Silva Jardim, 87',
    Latitude: `-22.90751`,
    Longitude: `-43.181356`,
    Fatos: [
        new Fato('', '', 'Propriedade', 'Pública', [], 'Rio de Janeiro'),
        new Fato('', '', 'Fundição/Atelier', 'Fundição e Atelier Messias', [], 'Rio de Janeiro'),
    ],
};

export const CondeCunha_LuisPaesLeme: Obra = {
    ID: 86,
    Artistas: [artistas.LuisPaesLeme],
    Titulo: `Conde Cunha`,
    Classificacao: 'perene',
    Categoria: 'personalidades',
    TipologiaObra: `Busto`,
    Material: `Peça em bronze e pedestal de granito`,
    Descricao: `Homenagem ao fundador do Arsenal do Rio de Janeiro. O erguido graçaas a iniciativa di Almirante Renato Guilhobel, firetor do AMRJ. O busto esta sob a guarda do Arsenal devido a obra da praça Barão de Ladário.`,
    Execucao: true,
    DataInauguracao: `06/1949`,
    Latitude: ``,
    Longitude: ``,
};

export const AntonioJanuzzi_Desconhecida: Obra = {
    ID: 94,
    Artistas: [artistas.Desconhecida],
    Titulo: `Antonio Januzzi`,
    Classificacao: 'perene',
    Categoria: 'personalidades',
    TipologiaObra: `Busto`,
    Material: `Peça em bronze`,
    Descricao: `O busto foi uma doação da ONG Ital Rio para à cidade do Rio. Foi retirado em 11 de janeiro de 2016, devido as obras do VLT no centro do Rio e transferido para o depósito da Prefeitura.`,
    Execucao: true,
    DataInauguracao: `06/2012`,
    Latitude: `-22.9067826`,
    Longitude: `-43.1973166`,
};

export const JosedoPatrocinio_RodolfoAmoedo_RuffoFanucchi: Obra = {
    ID: 95,
    Artistas: [artistas.RodolfoAmoedo, artistas.RuffoFanucchi],
    Titulo: `José do Patrocínio`,
    Classificacao: 'perene',
    Categoria: 'personalidades',
    TipologiaObra: `efígie`,
    Material: `Peça em bronze e pedestal de granito`,
    Descricao: `Trata-se de um monolito com uma placa em bronze com a figura do homenageado. <Temporariamente sem visitação no jardim da Biblioteca Nacional. O monumento foi erguido por iniciativa dos jornalistas Heitor Beltrão e Ariosto Berna, com apoio do Movimento Libertador da Terra Carioca e da Casa do Jornalista. Foi inaugurado na data do centenário do Nascimento do homenageado.`,
    Execucao: true,
    DataInauguracao: `10/1953`,
    Latitude: `-22.9090638`,
    Longitude: `-43.1753004`,
};

export const LimaBarreto_EdgarDuvivier: Obra = {
    ID: 96,
    Artistas: [artistas.EdgarDuvivier],
    Titulo: `Lima Barreto do Centro`,
    Classificacao: 'perene',
    Categoria: 'personalidades',
    TipologiaObra: `busto`,
    Material: `Peça em bronze e pedestal de concreto`,
    Descricao: `Esse monumento foi erguido a pedido da Casa Lima Barreto, pela Prefeitura nas comemorações do nascimento do escritor brasileiro.`,
    Execucao: true,
    DataInauguracao: `03/2012`,
    PontoDeReferencia: 'Centro',
    Latitude: `-22.9111016`,
    Longitude: `-43.1826368`,
};

export const AMelvinJoneseArmandoFarjado_Ariel: Obra = {
    ID: 99,
    Artistas: [artistas.Ariel],
    Titulo: `À Melvin Jones e Armando Farjado`,
    Classificacao: 'perene',
    Categoria: 'personalidades',
    TipologiaObra: `Medalhão`,
    Material: `Peça em bronze e pedestal de granito`,
    Descricao: `Monolito em homenagem ao primeiro Leão Brasileiro Armando Farjado, e de Melvin Jones. Na frente o marco tem duas mãos unidas esculpida na pedra. O Monumento foi inaugurado na passagem do 25º aniversatio da fundação do clube, durante XXV Convenção Nacional do Lios Club, com a participação de oito mil associados.`,
    Execucao: true,
    DataInauguracao: `04/1977`,
    Latitude: `-22.9062264`,
    Longitude: `-43.1767306`,
};

export const GabrielHabib_HildegardoLeaoVeloso: Obra = {
    ID: 100,
    Artistas: [artistas.HildegardoLeaoVeloso],
    Titulo: `Gabriel Habib`,
    Classificacao: 'perene',
    Categoria: 'personalidades',
    TipologiaObra: `busto`,
    Material: `Peça em bronze e pedestal de granito`,
    Descricao: `O busto foi realizado nos anos de 1960 e instalada na loja da rede no Centro e posteriormente para uma outra no bairro de Inhaúma. Somente em 2014 foi doado pela familia para o reconhecimento público.`,
    Execucao: true,
    DataInauguracao: `11/2014`,
    Latitude: `-22.9052872`,
    Longitude: `-43.185118`,
};

export const GrandjeandeMontiny_NicolinaPintodoCouto: Obra = {
    ID: 102,
    Titulo: `Grandjean de Montiny`,
    Classificacao: 'perene',
    Categoria: 'personalidades',
    TipologiaObra: `Busto`,
    Material: `Peça em bronze e pedestal de granito`,
    Descricao: `Esse monumento foi inicialmente instalado na Quinta da Boa Vista junto de Auguste Francois Marie Glaziou. Em 1996,
    por solicitação da Casa França Brasil a Fundação Parques e Jardins concedeu a cessão de uso para aquela instituição,
    permanecendo até hoje. A obra foi paga pelo Ministério da Viação.`,
    Execucao: true,
    DataInauguracao: `10/1910`,
    Latitude: `-22.900622`,
    Longitude: `-43.176356`,
};

export const JuliodeCastilhos_Desconhecida: Obra = {
    ID: 103,
    Artistas: [artistas.Desconhecida],
    Titulo: `Julio de Castilhos`,
    Classificacao: 'perene',
    Categoria: 'personalidades',
    TipologiaObra: `busto`,
    Material: `Peça em bronze e pedestal de concreto`,
    Descricao: `O busto de Julio de Castilhos estava no depósito da Prefeitura desde os anos de 1980. Por iniciativa da Casa de Deodoro, a Prefeitura realizou a cessão do uso do busto, a fim de garantir sua integridade bem como sua exposição em espaço público.`,
    Execucao: true,
    DataInauguracao: `11/2011`,
    Latitude: `-22.9055225`,
    Longitude: `-43.1907273`,
};

export const AquedutodaLapa_JoseFranciscoPintoAlpoim: Obra = {
    ID: 104,
    Artistas: [artistas.JoseFranciscoPintoAlpoim],
    Titulo: `Arcos da Lapa ou Aqueduto da Lapa`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Construção`,
    Material: `Pedra e tijolo com argamassa`,
    Descricao: `Símbolo do Rio antigo, presente em grande parte das pinturas e fotografias, é considerada a mais importante obra
    do Rio de Janeiro colonial, um exemplo de engenharia século XVIII. No inicio daquele século, a Cidade sofria constantemente
    pela falta de abastecimento de água. Os escravos e os índios iam buscar água na foz do Rio Carioca, percorrendo grandes
    distantes. Em 1718 iniciasse as obras de canalização do Rio Carioca. A idéia era conduzir água até o Centro da Cidade.
O primeiro aqueduto idealizado pelo governador Ayres Saldanha. Foi construído em 1721 e logo depois em 1723, o primeiro Chafariz
da Cidade. Estes foram logo abandonados por não resistirem ao tempo, por terem sido feitos de madeira. Depois de muita discussão
sobre o melhor traçado para ligação dos Morros de Santa Tereza e Santo Antonio em 1744, na gestão do então governador Ayres
Saldanha começaram as obras de um novo aqueduto, semelhante ao das Águas Livres de Lisboa, exemplar dos aquedutos romanos. Demorou
seis anos e finalizou-se em 1750 com a construção de um segundo Chafariz do Largo da Carioca. tem duas series de 42 arcos de volta
completa em blocos de pedras, tijolos, areia, cal, e óleo de baleia. No Século XIX, com o advento do abastecimento de água encanada
o aqueduto tornou-se obsoleto e foi desativado, Em 1896 a Companhia Ferro-Carril Carioca, que introduziu o serviço de bondes no
bairro de Santa Tereza eletrificando as linhas, sendo um dos feitos mais notáveis o aproveitamento do antigo aqueduto colonial como
via de acesso ao bairro.`,
    Altura: '17,6 m',
    Profundidade: '2,70 m',
    Execucao: true,
    DataInauguracao: `01/1750`,
    Latitude: `-22.9133965`,
    Longitude: `-43.1793505`,
};

export const LampadariodaLapa_RodolfoBernadelli: Obra = {
    ID: 105,
    Artistas: [artistas.RodolfoBernadelli],
    Titulo: `Lampadário da  Lapa`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `poste`,
    Material: `Peça em bronze e pedestal de gnaisse`,
    Descricao: `Primeiro lampadário artístico da Cidade, inaugurado na comemoração da abertura da Avenida Mem de Sá, e concebido por Bernardelli<para substituir os postes da Companhia Jardim Botânico Thephonicy Nacional. É uma composição que lembra as grandes navegações portuguesas. Da parte superior do fuste de granito saem quatro sinuosas serpentes de bronze, das bocas das quais pendem quatro lampadários. O monumentofoi uma encomenda ao artista pelo prefeito Pereira Passos.`,
    Execucao: true,
    DataInauguracao: `11/1906`,
    Latitude: `-22.9143351`,
    Longitude: `-43.1780163`,
};

export const EscadariadeSelaron_JorgeSelaron: Obra = {
    ID: 106,
    Artistas: [artistas.JorgeSelaron],
    Titulo: `Escadaria de Selarón`,
    Classificacao: 'perene',
    Categoria: 'sublimidade',
    TipologiaObra: `Mosaico`,
    Material: `Peças de azulejos`,
    Descricao: `Escadaria, com 215 degraus, revestida com azulejos de 114 países que compõe um grande mosaico.//Azulejos de 48 países  Usando inicialmente cores da bandeira brasileira - verde, amarelo e azul -, o artista chileno deu início à colocação dos azulejos por ocasião da Copa do Mundo de Futebol de 1994, passando, posteriormente, a fixar azulejos inteiros, ou em cacos, originários de muitos países.`,
    Execucao: true,
    DataInauguracao: `01/1994`,
    Zona: 'Central',
    Bairro: 'Centro',
    PontoDeReferencia: 'Escadaria que liga a rua Joaquim Silva ao convento de Santa Teresa',
    Latitude: `-22.9152342`,
    Longitude: `-43.1790538`,
    Fatos: [
        new Fato(
            '1994',
            '2004',
            'Execução',
            'A ideia de fazer arte sobre os degraus nasceu em 1994, durante a Copa Do Mundo, quando o artista pintou a escada com as cores da bandeira brasileira.',
            [],
            'Rio de Janeiro',
        ),
    ],
};

export const PaineldosArcosdaLapa_JorgeSelaron: Obra = {
    ID: 107,
    Artistas: [artistas.JorgeSelaron],
    Titulo: `Painel dos Arcos da Lapa`,
    Classificacao: 'perene',
    Categoria: 'sublimidade',
    TipologiaObra: `Mosaico`,
    Material: `Peças de azulejos`,
    Descricao: `Painel nas cores vermelha e branco inacabado tendo ao centro a paisagem urbana da região, fixado num muro divisório, fazendo fundo a uma das arcadas, na subida para o bairro de Santa Teresa.`,
    Execucao: true,
    Latitude: `-22.9138924`,
    Longitude: `-43.1801389`,
};

export const PaineldaLapa_JorgeSelaron: Obra = {
    ID: 108,
    Artistas: [artistas.JorgeSelaron],
    Titulo: `Painel  da Lapa`,
    Classificacao: 'perene',
    Categoria: 'sublimidade',
    TipologiaObra: `Mosaico`,
    Material: `Peças de azulejos`,
    Descricao: `Painel nas cores preta e amarela,com a inscriçãao Lapa fixado num muro divisório, azendo fundo a uma das arcadas, na subida para o bairro de Santa Teresa.`,
    Execucao: true,
    Latitude: `-22.9138924`,
    Longitude: `-43.1801389`,
};

export const PainelCopa2014_JorgeSelaron: Obra = {
    ID: 109,
    Artistas: [artistas.JorgeSelaron],
    Titulo: `Painel Copa 2014`,
    Classificacao: 'perene',
    Categoria: 'personalidades',
    TipologiaObra: `Mosaico`,
    Material: `Peças de azulejos`,
    Descricao: `Pintura nas cores vermelha e preta, tons preferidos por Selaron, em comemoração a Copa de 2014.`,
    Execucao: true,
    DataInauguracao: `01/2014`,
    Latitude: `-22.9152342`,
    Longitude: `-43.1790538`,
};

export const PainelVivernaFavela_JorgeSelaron: Obra = {
    ID: 110,
    Artistas: [artistas.JorgeSelaron],
    Titulo: `Painel Viver na Favela`,
    Classificacao: 'efemero',
    Categoria: 'sublimidade',
    TipologiaObra: `Grafite`,
    Material: `Pintura em superficie argamassada`,
    Descricao: `Pintuta nos tons preto, vermelho ee branco com a figura de sua propria imagem e inscrição com sua mensagem`,
    Execucao: true,
    DataInauguracao: ``,
    Latitude: `-22.9136685`,
    Longitude: `-43.1800536`,
};

export const PainelPropagandadeSelaron_JorgeSelaron: Obra = {
    ID: 111,
    Artistas: [artistas.JorgeSelaron],
    Titulo: `Painel Propaganda de Selarón`,
    Classificacao: 'efemero',
    Categoria: 'sublimidade',
    TipologiaObra: `Grafite`,
    Material: `Pintura em superficie argamassada`,
    Descricao: `Pintura nas cores preto e vermelho, com a figura Selaron e seu trabalho como propaganda.`,
    Execucao: true,
    DataInauguracao: `01/2004`,
    Latitude: `-22.9136685`,
    Longitude: `-43.1800536`,
};

export const PainelGravidasdeSelaron_JorgeSelaron: Obra = {
    ID: 112,
    Artistas: [artistas.JorgeSelaron],
    Titulo: `Painel Gravidas de Selarón`,
    Classificacao: 'efemero',
    Categoria: 'sublimidade',
    TipologiaObra: `painel`,
    Material: `Pintura em superficie argamassada`,
    Descricao: `Pintura nas cores preta e branca, com diversas figuras femininas gravidas, tipicas de Selaron`,
    Execucao: true,
    Latitude: `-22.9136685`,
    Longitude: `-43.1800536`,
};

export const PortaoMonumentaldoPasseioPublico_MestreValentim: Obra = {
    ID: 113,
    Artistas: [artistas.MestreValentim],
    Titulo: `Portão Monumental do Passeio Público`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Portão`,
    Material: `Metal em ferro forjado e colunas de gnaisse e lioz`,
    Descricao: `Trata-se do primeiro portão destinado ao espaço público. 
O pórtico  é formado por  blocos de gnaisse  superpostos. Na base  peças de lioz intercalam definindo a base da coluna.  O portão é divido em três peças, duas folhas de abrir e um frontispício. O portão tem em cada folha chapas de ferro forjado formando folhagens estilizadas. O  frontispício de forma triangular tem  chapas de ferro  curvas e ao  seu centro um grande medalhão em bronze fundido com a fisionomia em perfil da rainha de Portugal D. Maria I e por trás a figura de seu marido Pedro III. Essa peça pintada em ouro é um esmero de fundição com  definição de traços, cabelos, vestimenta, brincos e colar. 
De cada lado do medalhão existe outro conjunto em bronze, de guirlandas de rosas e margaridas.
Culminando o conjunto existem delicadas pinhas em bronze. A arte barroca do Mestre Valentim nas igrejas caracteriza-se por delicados rostos de anjos, contudo neste frontispício pequenos rostos de traços  mestiços  apoiando a estruturas curvas do portão.  A face oposta da rainha direcionada para o interior do  parque  esta fixada um medalhão com as armas do antigo Estado da Guanabara, que substituem o antigo brasão do império. As armas da cidade do Rio de Janeiro substituíram as armas do Império, exibidas no passado no medalhão. Além de seu valor artístico, o medalhão de D.Maria I tem grande valor histórico por ser uma das poucas referências em via pública, no Brasil, à memória da rainha de Portugal, que viria a morrer no Rio de Janeiro em 1816.  . A peça, em estilo rococó, foi concebida por Mestre Valentim e apresentam elementos típicos da obra do artista.`,
    Execucao: true,
    DataInauguracao: `01/1783`,
    Latitude: `-22.9130414`,
    Longitude: `-43.1772381`,
};

export const Galo_MariaMartins: Obra = {
    ID: 113,
    Titulo: `Galo`,
    Classificacao: 'perene',
    Categoria: 'artistica',
    TipologiaObra: `escultura de parede`,
    Material: `bronze`,
    Descricao: 'está localizada na parede da Maison de FRance, não é espaço público',
    Execucao: true,
    DataInauguracao: '1956',
    PontoDeReferencia: 'Avenida Presidente Antonio Carlos- Maison de France',
};

export const PiramideASaudadedoRio_MestreValentim: Obra = {
    ID: 115,
    Artistas: [artistas.MestreValentim],
    Titulo: `Pirâmide - Á Saudade do Rio`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Escultura`,
    Material: `Blocos de gnaisses`,
    Descricao: `Foi construída no período de 1794 a 1806 e são as últimas obras píblicas do Mestre Valentim. A pirâmide tem com cerca de quinze metros de altura e dois metros em cada face da seção. Há uma inscrição cartela oval em mármore de lioz: Saudade do Rio"`,

    Execucao: true,
    DataInauguracao: `01/1806`,
    Latitude: `-22.9136656`,
    Longitude: `-43.1759635`,
};

export const QuiosquedoPasseioPublico_Desconhecida: Obra = {
    ID: 120,
    Artistas: [artistas.Desconhecida],
    Titulo: `Quiosque do Passeio Público`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Construção`,
    Material: `Madeira`,
    Descricao: `Os dois exemplares similares existentes no parque são relíquias dos queexistiram nas ruas do Rio de Janeiro, para venda de pequenas mercadorias, como café, cachaça e bilhetes de loteria.
Provavelmente foi instalado no período da gestão de Pereira Passos (1902-1906) quando este realizou várias novas instalações no parque (como aquário, café-concerto) e retirou esse equipamento das ruas, sendo esse um dos que restou do período.
O quiosque tem cinco lados iguais é dividido por metade fixa e outra móvel para permitir que através dessa a comercialização. A cobertura em chapa de zinco apresenta uma forma semelhante às coberturas chinesas, A estrutura que apóia a chapa é de ferro.<`,

    Execucao: true,
    DataInauguracao: ``,
    PontoDeReferencia: 'Passeio Público',
    Latitude: `-22.9134604`,
    Longitude: `-43.176297`,
};

export const GuardaCorpoDeGalhosdeArvore_Desconhecida: Obra = {
    ID: 121,
    Artistas: [artistas.Desconhecida],
    Titulo: `Guarda-corpo de Galhos de Àrvore`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Guarda-corpo`,
    Material: `Peça em ferro fundido`,
    Descricao: `Guarda-corpo imitando galhos de árvores amarrados e entrelaçados. no estilo romântico implantado por AugusteFrancoisMarieGlaziou.`,

    Execucao: true,
    DataInauguracao: `01/1862`,
    Latitude: `-22.9137854`,
    Longitude: `-43.176044`,
};

export const BancodoRecantoGlaziou_AugusteFrancoisMarieGlaziou: Obra = {
    ID: 122,
    Artistas: [artistas.AugusteFrancoisMarieGlaziou],
    Titulo: `Banco do Recanto Glaziou`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Banco`,
    Material: `Peça de rocaille em argamassa,`,
    Descricao: `Denominado recanto, foi construido em argamassa imitando blocos de pedra, bancos e ninchos para o plantio, composição tipica do estilo romântico i. Nesse recanto, de um lado existe um banco e do outro uma pequena cascata.`,

    Execucao: true,
    DataInauguracao: `01/1862`,
    Latitude: `-22.9127565`,
    Longitude: `-43.1764196`,
};

export const GradildoPasseioPublico_Desconhecida: Obra = {
    ID: 123,
    Artistas: [artistas.Desconhecida],
    Titulo: `Gradil do Passeio Público`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Gradil`,
    Material: `Peça em ferro fundido`,
    Descricao: `O gradil foi instalado no parque para a segurança envolvendo todo o seu perímetro. É composto por modulos com colunas, barras e ponteiras. Tem o mesmo padrão do instalado no Campo de Santana, cujos projetos de paisagismo foram implantados por AugusteFrancoisMarieGlaziou.`,

    Execucao: true,
    DataInauguracao: `01/1968`,
    PontoDeReferencia: 'Passeio Público',
    Latitude: `-22.9127555`,
    Longitude: `-43.1761401`,
};

export const PaineldeSantaBarbara_DjaniradaMottaeSilva: Obra = {
    ID: 124,
    Artistas: [artistas.DjaniradaMottaeSilva],
    Titulo: `Painel de Santa Bárbara`,
    Classificacao: 'perene',
    Categoria: 'sublimidade',
    TipologiaObra: `Painel`,
    Material: `Peças de azulejos`,
    Descricao: `O painel foi criado em homenagem aos operarios mortos no desabamento durante os trabalhos da abertura do Túnel Santa Barbara. Foi inaugurado junto com o tunel em 1964 e instalado numa capela localizada em uma gruta acima do túnel. Em 1984 devido às precárias condições, com inumeras a infiltrações na capela, foi desmontado. Em 1990 quando foi restaurado pela Fundação Roberto Marinho foi firmaram acordo entre o Governo do Estado e o Museu Nacional de Belas Artes para a sua cessão e transferencia. Foi reinaugurado em 1994 no Museu Nacional de Belas Artes numa estrutural metalica movel.`,
    Execucao: true,
    DataInauguracao: `01/1964`,
    Latitude: `-22.9089138`,
    Longitude: `-43.1762048`,
};

export const AoNuncaMais_CristinaPozzobon: Obra = {
    ID: 125,
    Artistas: [artistas.CristinaPozzobon],
    Titulo: `Ao Nunca Mais`,
    Classificacao: 'perene',
    Categoria: 'sublimidade',
    TipologiaObra: `Escultura`,
    Material: `Aço Corten`,
    Descricao: `Monumento em homenagem a resistência e a luta pela anistia, doado à Cidade pela Comissão de Anistia do Ministério da Justiça, por ocasião dos 50 anos do Golpe de 1964. As estrelas cravadas no piso são em homenagem aos militares cassados após o golpe de 1964.Escultura com cerca de 3 m de altura, ele tem uma bandeira "desconstruída" com estrelas afixadas no chão.`,
    Execucao: true,
    DataInauguracao: `04/2014`,
    Latitude: `-22.9112566`,
    Longitude: `-43.1758078`,
};

export const Pax_MarioMatos: Obra = {
    ID: 126,
    Artistas: [artistas.MarioMatos],
    Titulo: `Pax (Paz)`,
    Classificacao: 'perene',
    Categoria: 'sublimidade',
    TipologiaObra: `Escultura`,
    Material: `Peça em bronze com pedestal de mármore`,
    Descricao: `Figura feminina em bronze representando a Paz, sobre uma coluna em mármore de Verona com florões e detalhe corinto
    no topo. Esse monumento faz par com outro, que representa o trabalho, emoldurando o prédio da Camara dos Vereadores da Cidade,
    o Palácio Pedro Ernesto.`,
    Execucao: true,
    DataInauguracao: ``,
    Zona: 'Central',
    Bairro: 'Centro',
    PontoDeReferencia: 'Praça Marechal Floriano, Cinelândia',
    Latitude: `-22.9099245`,
    Longitude: `-43.1763903`,
    Fatos: [new Fato('', '', 'Propriedade', 'Pública', [], 'Rio de Janeiro')],
};

export const Trabalho_MarioMatos: Obra = {
    ID: 127,
    Artistas: [artistas.MarioMatos],
    Titulo: `Trabalho (Labor)`,
    Classificacao: 'perene',
    Categoria: 'sublimidade',
    TipologiaObra: `Escultura`,
    Material: `Peça em bronze com pedestal de mármore`,
    Descricao: `Figura feminina em bronze representando o Trabalho, sobre uma coluna em mármore de Verona com florões e detalhe
    corinto no topo. Esse monumento faz par com outro, que representa a Paz, emoldurando o prédio da Câmara dos Vereadores.`,
    Execucao: true,
    DataInauguracao: ``,
    Zona: 'Central',
    Bairro: 'Centro',
    PontoDeReferencia: 'Praça Floriano Peixoto',
    Latitude: `-22.9099245`,
    Longitude: `-43.1763903`,
    Fatos: [new Fato('', '', 'Propriedade', 'Pública', [], 'Rio de Janeiro')],
};

export const CriancasComAConcha_Desconhecida: Obra = {
    ID: 128,
    Artistas: [artistas.Desconhecida],
    Titulo: `Crianças com a Concha`,
    Classificacao: 'perene',
    Categoria: 'sublimidade',
    TipologiaObra: `Escultura`,
    Material: `Peça em mármore com pedestal de gnaisse`,
    Descricao: `Esse conjunto de crianças, são reproduções das peças do Jardim de Versalhes, de François Lespingola,doada à cidade pelafamília Guinle, para a decoração do Chafariz.`,
    Execucao: true,
    DataInauguracao: `01/1928`,
    Latitude: `-22.9119106`,
    Longitude: `-43.1750856`,
};

export const CriancasComoPassaro_Desconhecida: Obra = {
    ID: 129,
    Artistas: [artistas.Desconhecida],
    Titulo: `Crianças com o Pássaro`,
    Classificacao: 'perene',
    Categoria: 'sublimidade',
    TipologiaObra: `Escultura`,
    Material: `Peça em mármore com pedestal de gnaisse`,
    Descricao: `Esse conjunto de crianças são reproduções deSimon Mazièredas peças Jardim de Versalhes, d<oada à cidade pela<família Guinle.`,
    Execucao: true,
    DataInauguracao: `01/1928`,
    Latitude: `-22.9119106`,
    Longitude: `-43.1750856`,
};

export const CriancasComATocha_Desconhecida: Obra = {
    ID: 130,
    Artistas: [artistas.Desconhecida],
    Titulo: `Crianças com a Tocha`,
    Classificacao: 'perene',
    Categoria: 'sublimidade',
    TipologiaObra: `Escultura`,
    Material: `Peça em mármore com pedestal de gnaisse`,
    Descricao: `Esse conjunto de crianças são reproduções, das peças existentes nos Jardim de Versalhes, de Philippe Granier, doada à cidade pela<família Guinle para a decoração do Chafariz.`,

    Execucao: true,
    DataInauguracao: `01/1928`,
    Latitude: `-22.9119106`,
    Longitude: `-43.1750856`,
};

export const CriancasComflores_Desconhecida: Obra = {
    ID: 131,
    Artistas: [artistas.Desconhecida],
    Titulo: `Crianças com flores`,
    Classificacao: 'perene',
    Categoria: 'sublimidade',
    TipologiaObra: `Escultura`,
    Material: `Peça em mármore com pedestal de gnaisse`,
    Descricao: `O conjunto de crianças são reproduções das peças do Jardim de Versalhes, de <Pierre Laviron,doada à cidade pelafamília Guinle.`,
    Execucao: true,
    DataInauguracao: `01/1928`,
    Latitude: `-22.9119106`,
    Longitude: `-43.1750856`,
};

export const ObeliscodaAvenidaRioBranco_AZanuzziCia: Obra = {
    ID: 132,
    Artistas: [artistas.Desconhecida],
    Titulo: `Obelisco da Avenida Rio Branco`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `obelisco`,
    Material: `Peça em granito`,
    Descricao: `A Zanuzzi Cia - Obelisco circular de granito extraído do Morro da Viúva, com 28 toneladas paracomemorar da abertura da Avenida Rio Branco, iniciada em 8 de março de 1904 e concluído na data de inauguração do marco, dia 14 de novembro de 1906.
O projeto foi organizado no escritório tecnico da Comissão Construtora da Avenida Central, cujo chefe era o Dr. Paulo de Frontim e executado pelos Srs A. Januzzi & Irmãos, tendo como engenheiro de acompanhamento o Dr. Le Cocq.
O Monumento tem cinco blocos, com dimensões e decoração distintas, todos em pedra, coincidentes com o principal material utilizado nas construções novas da Avenida. O primeiro forma os degraus que o elevam. O segundo a base, o terceiro com cerca de 2m foi destinado à colocação de placas de bronze de identificação do Monumento. O quarto possui elementos decorativos típicos das construções ecléticas O quinto bloco com 10 metros finalizado por uma pirâmide.`,
    Execucao: true,
    DataInauguracao: `11/1906`,
    Latitude: `-22.9130043`,
    Longitude: `-43.1747473`,
};

export const ArcodosTeles_JoseFernandesPintoAlpoim: Obra = {
    ID: 133,
    Artistas: [artistas.JoseFernandesPintoAlpoim],
    Titulo: `Arco dos Teles`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Construção`,
    Material: `Pedra e tijolo com argamassa`,
    Descricao: `Construção do periodo colonial, cujo proprietario Teles de Menezes, deu nome ao local.  Em 1790um incêndiodestruiu a maior parte da casa dos Teles, restando apenas o trecho que hoje constitui o Arco do Teles.`,
    Execucao: true,
    DataInauguracao: ``,
    Latitude: `-22.9027825`,
    Longitude: `-43.1745887`,
};

export const CaisdoChafarizdaPracaXVdeNovembro_Desconhecida: Obra = {
    ID: 134,
    Artistas: [artistas.Desconhecida],
    Titulo: `Cais do Chafariz da Praça XV de Novembro`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Construção`,
    Material: `Blocos de gnaisses`,
    Descricao: `Construido a frente do Chafariz do Mestre Valentim,foi desenterrado em 1989 aterrado devido ao assoreamento da baia por volta de 1875. Em 1989 depois de uma pesquisa arqueologica, foi desenterrado e exposto um trecho, para permitir a noção do limite do mar no seculo XVIII.`,
    Execucao: true,
    DataInauguracao: ``,
    Latitude: `-22.9023098`,
    Longitude: `-43.1737034`,
};

export const MarquesdoLavradio_GracaCostaCabral: Obra = {
    ID: 97,
    Artistas: [artistas.GracaCostaCabral],
    Titulo: `Marquês do Lavradio`,
    Classificacao: 'perene',
    Categoria: 'personalidades',
    TipologiaObra: `busto`,
    Material: `Peça em bronze e pedestal de concreto`,
    Descricao: `O monumento foi uma doação à cidade pelo Quarteirão Cultural da Rua do Lavradio.`,
    Execucao: true,
    DataInauguracao: `09/2012`,
    Latitude: `-22.9090073`,
    Longitude: `-43.1833596`,
};

export const PisodePedeMolequedaLadeiradaMisericordia_Desconhecida: Obra = {
    ID: 136,
    Artistas: [artistas.Desconhecida],
    Titulo: `Piso de Pé de Moleque da Ladeira da Misericórdia`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Piso`,
    Material: `Seixos e lascas de gnaisse`,
    Descricao: `A Ladeira de Misericórdiafoi a primeira rua da cidade que ocorreu com a ocupação do Morro do Castelo. Aberta em 1567, a fica ao lado da Igreja de Nossa Senhora do Bonsucesso (a mais antiga da cidade) e do prédio do hospital da Santa Casa da Misericórdia, ambos tombados pelo Iphan.Em 1840 começa o calçamento das ruas do centro provavelmente nesse período a rua recebeu calçamento. Dois anos depois de sua fundação, em 1567, a cidade foi transferida para o Morro do CasteloNo inicio da ocupação o único acesso ao local era pela Rua da Misericórdia, onde hoje só resta cerca de 50 metros com calçamento em pe de moleque. O Morro do Castelo de onde se tinha uma visão privilegiada da Baia da Guanabara começa na Rua da Misericórdia. O vice-rei conde da Cunha, para tornar mais fácil o acesso ao morro, mandou ordenar ra ladeira, junto à Igreja da Misericórdia, a que denominou de Calçada da Sé. Em 1808 o possuía apenas 6 edificações; em 1877, 11 e em 1903, 13 - sendo 4 delas de 3 pavimentos, recenceando-se ao todo 317 habitantes neste logradouro. Com as obras de arrazamento do morro do Castelo, desapareceu êsse logradouro (1922), restando uma pequena elevação ao lado do largo da Misericórdia.`,
    Execucao: true,
    DataInauguracao: `01/1840`,
    Latitude: `-22.9061968`,
    Longitude: `-43.170164`,
};

export const MonumentoALiberdadeDeExpressao_FranzWeissmann: Obra = {
    ID: 145,
    Artistas: [artistas.FranzWeissmann],
    Titulo: `Monumento A Liberdade De Expressao`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Obelisco`,
    Material: 'concreto',
    Descricao: `Considerado o primeiro monumento de Arte Concreta da América Latina. Foi o primeiro monumento à liberdade de expressão a ser erigido nas Américas, além de ter sido a primeira obra pública de Franz Weissmam, encomendada pela Associação das Emissoras de São Paulo.`,
    Altura: '1600 cm',
    Execucao: true,
    DataInauguracao: `12/10/1954`,
    Zona: 'Norte',
    Bairro: 'Sao Cristovao',
    PontoDeReferencia: 'Entrada da Quinta da Boa Vista',
    Latitude: `-22.9051942`,
    Longitude: `-43.2239741`,
    Remocao: true,
    Fatos: [
        new Fato('1954', '1954', 'Doação', 'Doação da Sociedade Interamericana de Imprensa', [], 'Rio de Janeiro'),
        new Fato(
            '1962',
            '1962',
            'Demolição',
            'Demolido para as obras de alargamento de rua promovida pela prefeitura e pelo departamento de urbanização da SURSAN',
            [pessoas.CarlosLacerda],
            'Rio de Janeiro',
        ),
    ],
};

export const PortaodoCampodeSantana_Desconhecida: Obra = {
    ID: 146,
    Artistas: [artistas.Desconhecida],
    Titulo: `Portão do Campo de Santana`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Portão`,
    Material: `Metal em ferro fundido e colunas de gnaisse e`,
    Descricao: `São quatro portões, um em cada eixo do parque. Na parte superior possui um arco
    que sustente um medalhão, as Armas da Republica. Este medalhão está envolto por ornantos e
    guirlanda tendo abaixo uma placa, com a 1873. Veio para o Brasil de navio em abril de 1876.
    É dividido por um arco, a parte superior é fixa e a inferior móvel, destinada a abrir e fechar,
     em duas folhas. Os portões estão fixados em dois pilares em cantaria, em cada capitel é 
     arrematado por um grande vaso, também em ferro. Os portões foram encomendados por Auguste 
     Francois Marie Glaziou à França, escolhido através do catálogo de peças da fundição. Devido
     a corrosão um vaso, um emblema da republica foi guardados no depósito da prefeitura.`,
    Execucao: true,
    DataInauguracao: `09/1880`,
    Latitude: `-22.9048704`,
    Longitude: `-43.1894496`,
};

export const Verao_PaulJeanBaptisteGasq: Obra = {
    ID: 150,
    Artistas: [artistas.PaulJeanBaptisteGasq],
    Titulo: `Verão`,
    Classificacao: 'perene',
    Categoria: 'sublimidade',
    TipologiaObra: `Escultura`,
    Material: `Peça em mármore de Carrara com pedestal de gnaisse`,
    Descricao: `Esta escultura e o Inverno foram instaladas inicialmente na Praça XV em 1906 e posteriormente, em 1914 transferida para o Campo de Santana. Escultura em mármore de carrara da figura de um jovem homem em atitude estática. Olhando para o horizonte com o semblante sério, a mão esquerda protege seus olhos do Sol. Segura com a mão direita uma espécie de foice (colheita do trigo). Encontra-se entre ramos de trigo que simbolizam a abundância, a prosperidade. Tem os pés descalços.`,
    Execucao: true,
    DataInauguracao: `01/1906`,
    PontoDeReferencia: 'Campo de Santana',
    Latitude: `-22.9065612`,
    Longitude: `-43.1881238`,
};

export const GuaritasdoCampodeSantana_Desconhecida: Obra = {
    ID: 153,
    Artistas: [artistas.Desconhecida],
    Titulo: `Guaritas do Campo de Santana`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Construção`,
    Material: `Madeira`,
    Descricao: `São quatro guaritas, todas próximas aos portões de ferro que dão acesso ao interior do parque. As construções temcobertura de em placas de amianto retangulares imitando pedras de ardósia. Tem 4 colunas de ferro fundido, de base circula, com relevos na decoração. As paredes tem fechamentos de madeira com venezianas, pintadas na cor verde, na base em blocos de granito.
São poucos os registros da instalação da Guaritas do Campo de Santana, sendo uma foto de Malta de 1906, a primeira imagem dessa construção. Na foto verifica a mesma estrutura atual sem o fechamento com venezianas, deixando livre o espaço para observação e os guardas desprotegidos no caso de intempéries.
No acervo do Museu Histórico da Cidade do Rio de Janeiro, foi encontrado um projeto da Inspetoria da Matas, Jardins, Arborização, Caça e Pesca, para a construção de um abrigo para guardas com estrutura muito semelhante do existente no Campo de Santana. As diferenças entre ambos são: o telhado do projeto é em quatro águas, sem os detalhes decorativos de hoje; o fechamento superior parece ser um detalhe vazado; o fechamento inferior possui pequenas diferenças em relação ao existente. Este projeto era de Archimedes Jose da Silva de 1905, integrante do projeto de remodelação da Cidade pelo prefeito Pereira Passos.`,
    Execucao: true,
    DataInauguracao: `01/1906`,
    PontoDeReferencia: 'Campo de Santana',
    Latitude: `-22.905127`,
    Longitude: `-43.1892942`,
};

export const GradildoCampodeSantana_Desconhecida: Obra = {
    ID: 154,
    Artistas: [artistas.Desconhecida],
    Titulo: `Gradil do Campo de Santana`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `gradil`,
    Material: `Peça em ferro fundido`,
    Descricao: `Esse é o segundo gradil instalado no Parque produzido nas Fundições Zanatta. O primeiro foi construído pela Companhia Barborat; dês Hants Founaux; du Val D' Osne, que hoje se encontram divididos nos seguintes locais: Parque do Recanto do Trovador, no Açude Solidão na Floresta da Tijuca e na Avenida Pasteur.`,
    Execucao: true,
    DataInauguracao: `01/1968`,
    PontoDeReferencia: 'Campo de Santana',
    Latitude: `-22.9050387`,
    Longitude: `-43.1893203`,
};

export const Guarda_corpoIdoCampodeSantana_AugusteFrancoisMarieGlaziou: Obra = {
    ID: 155,
    Artistas: [artistas.AugusteFrancoisMarieGlaziou],
    Titulo: `Guarda-corpo I do Campo de Santana`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Guarda-corpo`,
    Material: `Peça de rocaille em argamassa,`,
    Descricao: `Peças imitando troncos de árvores, que cruzam o lago frontal Campo de Santana.`,
    Execucao: true,
    DataInauguracao: `09/1880`,
    PontoDeReferencia: 'Campo de Santana',
    Latitude: `-22.9054641`,
    Longitude: `-43.1892988`,
};

export const Guarda_corpoIIdoCampodeSantana_AugusteFrancoisMarieGlaziou: Obra = {
    ID: 156,
    Artistas: [artistas.AugusteFrancoisMarieGlaziou],
    Titulo: `Guarda-corpo II do Campo de Santana`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Guarda-corpo`,
    Material: `Peça em argamassa`,
    Descricao: `Peças imitando blocos de pedra, para a proteção daqueles que cruzam o lago.`,
    Execucao: true,
    DataInauguracao: `09/1880`,
    PontoDeReferencia: 'Campo de Santana',
    Latitude: `-22.9079801`,
    Longitude: `-43.1881185`,
};

export const BebedouroTroncodeArvore_AugusteFrancoisMarieGlaziou: Obra = {
    ID: 157,
    Artistas: [artistas.AugusteFrancoisMarieGlaziou],
    Titulo: `Bebedouro Tronco de Árvore`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `bebedouro`,
    Material: `Peça de rocaille em argamassa`,
    Descricao: `Peça imitando tronco de árvore, proximo a gruta do Campo de Santana. Desativado em data desconhecida.`,
    Execucao: true,
    DataInauguracao: `09/1880`,
    PontoDeReferencia: 'Campo de Santana',
    Latitude: `-22.9071468`,
    Longitude: `-43.1898124`,
};

export const PainelGentileza1_ProfetaGentileza: Obra = {
    ID: 1,
    Artistas: [artistas.ProfetaGentileza],
    Titulo: `Painel Gentileza 1`,
    Material: 'pintura',
    DataInauguracao: '1980',
    DatasImportantes: [new Data('1980', 'execução')],
    Promotor: 'artista',
    Propriedade: 'publica',
    Zona: 'Central',
    Bairro: 'Caju',
    Endereço: 'Avenida Brasil',
    Latitude: '-22.9003499',
    Longitude: '-43.2105682',
    Status: 'permanence no espaço publico',
    Descricao: `O painel é uma pintura na pilastra do Viaduto do Cajú, na zona portuária da Cidade, onde O Profeta Gentileza, expôs suas mensagens e críticas.num trabalho artísticos de letras criada por ele. Gentileza, como era conhecido José Datrino, executou 56 painéis, durante os anos de 1980.`,
    Fatos: [new Fato('', '', 'Propriedade', 'Pública', [], 'Rio de Janeiro')],
    Temporalidade: 'efemero',
    Eixo: 'sublimidade',
    Funcao: 'ornamental',
    Natureza: 'artistica',
    Tipologia: 'grafite',
    Execucao: true,
};

export const PainelGentilez2_ProfetaGentileza: Obra = {
    ID: 2,
    Artistas: [artistas.ProfetaGentileza],
    Titulo: `Painel Gentileza 2`,
    Material: 'pintura',
    DataInauguracao: '1980',
    DatasImportantes: [new Data('1980', 'execução')],
    Promotor: 'artista',
    Propriedade: 'publica',
    Zona: 'Central',
    Bairro: 'Caju',
    Endereço: 'Avenida Brasil',
    Latitude: '-22.9003499',
    Longitude: '-43.2105682',
    Status: 'permanence no espaço publico',
    Descricao: `O painel é uma pintura na pilastra do Viaduto do Cajú, na zona portuária da Cidade, onde O Profeta Gentileza, expôs suas mensagens e críticas.num trabalho artísticos de letras criada por ele. Gentileza, como era conhecido José Datrino, executou 56 painéis, durante os anos de 1980.`,
    Fatos: [new Fato('', '', 'Propriedade', 'Pública', [], 'Rio de Janeiro')],
    Temporalidade: 'efemero',
    Eixo: 'sublimidade',
    Funcao: 'ornamental',
    Natureza: 'artistica',
    Tipologia: 'grafite',
    Execucao: true,
};

export const RelogiodaCarioca_Desconhecida: Obra = {
    ID: 159,
    Artistas: [artistas.Desconhecida],
    Titulo: `Relógio do Largo da Carioca`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Relógio`,
    Material: `Peça em ferro fundido e pedestal de granito`,
    Descricao: `Originariamente era um lampadário da Cidade. Composto de uma base de cantaria circular,
    que sustenta um conjunto alegórico, formado por outra base circular em ferro fundido,
    que apóia três figuras femininas aladas, que representam o Comércio, a Industria e a Navegação.
    Em 12 de maio de 1948, o lampadário foi reinaugurado com uma adaptação. Foi removida as luminárias
    superiores e instalado o relógio. As três luminárias de cobre inferiores foram mantidas e na base
    circular foi instalada a máquina do relógio. O relógio tem quatro faces quadradas,
    da marca Norma Eletric". Em cada face tem um fundo circular, onde estão os números e ponteiros em
    ferro fundido e moldura de vidro. Finalizando a caixa há uma pequena ponteira de ferro.
Em 1999, o relógio foi restaurado pela Prefeitura, com recurso do BNDES (Banco Nacional de Desenvolvimento
    Social. Amáquina original do relógio foi instalado um equipamento mecatrônico, o corrilhão foi adaptado
    pelo relojoeiro João Carlos Loureiro Gama.O relógio passou a marcar as horas, por toques de sino, com
    interpretação do repertório clássico e popular.`,
    Execucao: true,
    DataInauguracao: `06/1909`,
    PontoDeReferencia: 'Largo da Carioca',
    Latitude: `-22.9063893`,
    Longitude: `-43.1781415`,
};

export const Brasil_DanielBellionGomesPinto: Obra = {
    ID: 161,
    Imagem: 'Brasil_DanielBellionGomesPinto.jpg',
    Artistas: [artistas.DanielBellionGomesPinto],
    Titulo: `Brasil`,
    Classificacao: 'perene',
    Categoria: 'sublimidade',
    TipologiaObra: `Escultura`,
    Material: `Aço Corten`,
    Descricao: `Escultura em aço cortada apresentando o mapa do Brasil.`,
    Execucao: true,
    DataInauguracao: `10/2004`,
    PontoDeReferencia: 'Avenida Chile',
    Latitude: `-22.9089781`,
    Longitude: `-43.179683`,
    Fatos: [
        new Fato('', '', 'Fundição/Atelier', 'Eexecutado pelo estaleiro Aker Promar', [], 'Rio de Janeiro'),
        new Fato('', '', 'Doação', 'Doado pelo estaleiro Aker Promar', [], 'Rio de Janeiro'),
        new Fato('', '', 'Propriedade', 'Pública', [], 'Rio de Janeiro'),
        new Fato(
            '',
            '',
            'Vencedora',
            'Obras vencedora do concurso nacional ao MOnumento a Getúlio VArgas pela criação do Banco NAcional de Desenvolvimento Economico - BNDES',
            [],
            'Rio de Janeiro',
        ),
    ],
};

export const PisodeParalelepipedodoBecodosBragancas_Desconhecida: Obra = {
    ID: 162,
    Artistas: [artistas.Desconhecida],
    Titulo: `Piso de Paralelepípedo do Beco dos Braganças`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Piso`,
    Material: `Blocos de granito`,
    Descricao: `O beco recebeu tal nome a partir de 1767, quando da chegada do regimento Bragança, que ocupou os quartéis de São Bento, localizado nessa rua. O piso e a largura da via da rua caracterizama ruela colonial.`,
    Execucao: true,
    DataInauguracao: ``,
    Latitude: `-22.8987899`,
    Longitude: `-43.1779889`,
};

export const EsculturaItamaratiI_Desconhecida: Obra = {
    ID: 163,
    Artistas: [artistas.Desconhecida],
    Titulo: `Escultura Itamarati I`,
    Classificacao: 'perene',
    Categoria: 'sublimidade',
    TipologiaObra: `Escultura`,
    Material: `Peça em mármore de Carrara com pedestal de gnaisse`,
    Descricao: `Escultura neoclássica da figura feminina com o braço direito apoiado a uma cornucópia de onde caem moedas.`,
    Execucao: true,
    DataInauguracao: ``,
    Latitude: `-22.9030304`,
    Longitude: `-43.1875333`,
};

export const EsculturaItamaratiII_Desconhecida: Obra = {
    ID: 164,
    Artistas: [artistas.Desconhecida],
    Titulo: `Escultura Itamarati II`,
    Classificacao: 'perene',
    Categoria: 'sublimidade',
    TipologiaObra: `Escultura`,
    Material: `Peça em mármore de Carrara com pedestal de gnaisse`,
    Descricao: `Escultura neoclássica de uma figura masculina com o braço direito encostado sobre um tronco, contra o qual se apoia um arco.`,
    Execucao: true,
    DataInauguracao: ``,
    Latitude: `-22.9030304`,
    Longitude: `-43.1875333`,
};

export const MarcoaosAviadores_Desconhecida: Obra = {
    ID: 166,
    Artistas: [artistas.Desconhecida],
    Titulo: `Marco aos Aviadores`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Monolito`,
    Material: `Peça em bronze com pedestal de granito`,
    Descricao: `Marco em pedra tosca com uma águia com as asas abertas, em bronze, no topo. No pedestal está fixado um medalhão, com a descrição da dedicação dos servidores à Aviação Civil, resultou olivro "Viação Comercial do Brasil, deJosé Garcia d. Rocha.`,
    Execucao: true,
    DataInauguracao: ``,
    Latitude: `-22.9111594`,
    Longitude: `-43.1671114`,
};

export const MarcoCapsuladoTempo_Desconhecida: Obra = {
    ID: 171,
    Artistas: [artistas.Desconhecida],
    Titulo: `Marco Cápsula do Tempo`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Monolito`,
    Material: `Granito`,
    Descricao: `Monolito de granito com dois metros de altura doadopelo exército Brasileiro com um espaço vazado no granito fechado por uma placa.No interior foi colocada um cilindro ( capsula) de bronze de um metro de altura, onde estão guardadas uniformes, mensagens, fotografias, disco gravado com a história do movimento bandeirante do Brasil, com depoimento prestado por D. Jrônima Mesquita, fundadora da Federação das Bandeirantes.
A cápsula, que foi trazida por um helicoptero pelo Secretario de Obrasvras Paula Soares. A capsula foi doada pela SURSAN. Esta cápsula só poderá ser aberta em 2019  na comemoração dos 100 anos do bandeirantismo no Brasil`,
    Execucao: true,
    DataInauguracao: `08/1969`,
    Latitude: `-22.9093884`,
    Longitude: `-43.1697296`,
};

export const VasosdaAvenidaPresidenteVargas_EmilioGiannelli: Obra = {
    ID: 175,
    Artistas: [artistas.EmilioGiannelli],
    Titulo: `Vasos da Avenida Presidente Vargas`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Vaso`,
    Material: `Peça em ferro fundido`,
    Descricao: `Originariamente foram instalado em 1965 na Praça Floriano. Foram retiradas para a obra do metro em 1979 e instalada na Avenida Presidente Vargas 1982. Formam um conjunto de 14 peças. Deste oito (8) estão na Avenida Presidente Vargas, um (1) encontra-se no Largo São Francisco da Prainha, um (1) no Parque Noronha Santos e os quatro(4) últimos no Parque Guinle.
O outubro de 2016 o vaso que se situava no Largo de São Francisco da Praianha, foi transferido para a Avenida Presidente Vargas na altura da Avenida Passos para no seu lugar de origem fosse instalada a estátua de Mercedes Baptista.`,
    Execucao: true,
    DataInauguracao: `01/1965`,
    PontoDeReferencia: 'Avenida Presidente Vargas',
    Latitude: `-22.9025711`,
    Longitude: `-43.1832433`,
};

export const GuardacorpodaAvenidaPresidenteVargas_Desconhecida: Obra = {
    ID: 176,
    Artistas: [artistas.Desconhecida],
    Titulo: `Guarda-corpo da Avenida Presidente Vargas`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Guarda-corpo`,
    Material: `Peça em concreto`,
    Descricao: `Os primeiros balaústres eram de ferro fundido, mas foram substituídos ao longo do tempo por peças de concreto.`,
    Execucao: true,
    DataInauguracao: `12/1904`,
    PontoDeReferencia: 'Avenida Presidente Vargas',
    Latitude: `-22.9101268`,
    Longitude: `-43.2058624`,
};

export const EmbocaduradoTunelJoaoRicardo_Desconhecida: Obra = {
    ID: 177,
    Artistas: [artistas.Desconhecida],
    Titulo: `Embocadura do Tunel João Ricardo`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Construção`,
    Material: `Argamassa`,
    Descricao: `As obras para a abertura dotúnelligando a zonaportuáriaa Central do Brasil. Foraminiciadasem 1919<sob a direção do engenheiro Marques Porto<, Secretário Geral de Viação e Obras da Prefeitura. Na cerimonia o Presidente da Republica , fez a detonação das ultimas pedras como fato inauugural.`,
    Execucao: true,
    DataInauguracao: `12/1920`,
    Latitude: `-22.9006118`,
    Longitude: `-43.193082`,
};

export const PeaPe_OtavioAvancini: Obra = {
    ID: 178,
    Imagem: 'PeaPe_OtavioAvancini.jpg',
    Artistas: [artistas.OtavioAvancini],
    Titulo: `Pé a Pé`,
    Classificacao: 'perene',
    Categoria: 'sublimidade',
    TipologiaObra: `Escultura`,
    Material: `Arvore Morta`,
    Descricao: `A escultura foi executada a partir de uma árvore que estava morta no local, simulando duas pernas que se erguem do chão.`,
    Execucao: true,
    DataInauguracao: `01/2004`,
    Zona: 'Central',
    Bairro: 'Centro',
    PontoDeReferencia: 'Praça Cristiano Ottoni',
    Latitude: `-22.9035886`,
    Longitude: `-43.1906709`,
    Fatos: [new Fato('', '', 'Propriedade', 'Pública', [], 'Rio de Janeiro')],
};

export const PaineldoEdificioAndorinha_BelmirodeAlmeida: Obra = {
    ID: 180,
    Artistas: [artistas.BelmirodeAlmeida],
    Titulo: `Painel do Edifício Andorinha`,
    Classificacao: 'perene',
    Categoria: 'sublimidade',
    TipologiaObra: `Mosaico`,
    Material: `Mosaico de azulejos`,
    Descricao: `Esse mosaico decorava a entrada do Edifício Andorinha, de 1934, vitimado por um incêndio 17 de fevereiro de 1986 e depois demolido. Após sua restauração o painel se tornou um bem público.`,
    Execucao: true,
    DataInauguracao: `01/1934`,
    Latitude: `-22.9088552`,
    Longitude: `-43.1835971`,
};

export const OratoriodeNossaSenhoradoCaboBoaEsperanca_MestreAlvesSetubal: Obra = {
    ID: 185,
    Artistas: [artistas.MestreAlvesSetubal],
    Titulo: `Oratório de Nossa Senhora do Cabo Boa Esperança`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `oratório`,
    Material: `Pedra e tijolo com argamassa`,
    Descricao: `Construído em 1763, foi transferido em 1812 para a esquina seguinte, onde hoje se abre a Rua Sete de Setembro, retornando ao sítio original em 1924. A construção do arco teve por finalidade permitir a comunicação da Rua "Detrás do Carmo", atual Rua do Carmo, com o adro na nova Igreja. Na parte superior do arco foi colocado o oratório de Nossa Senhora do Cabo da Boa Esperança, também de pedra e envidraçado, com a bacia revestida de azulejos, ladeado por volutas e encimado por cruz de trevo. A imagem que ficava no oratório, foi transferida para o interior da Igreja.`,
    Execucao: true,
    DataInauguracao: `01/1763`,
    Latitude: `-22.9035329`,
    Longitude: `-43.1760087`,
};

export const PisodeMacadamedoBecodosBarbeiros_Desconhecida: Obra = {
    ID: 186,
    Artistas: [artistas.Desconhecida],
    Titulo: `Piso de Macadame do Beco dos Barbeiros`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `piso`,
    Material: `Blocos de gnaisses`,
    Descricao: `Beco com piso de macadamecom a calha no centro para o escoamento das águas.
    Foi aberto pela Ordem Terceira do Carmo como passagem entre a Rua Direita, atual Primeiro de Março, e a Rua do Carmo. O nome se deve ao fato de ter sido ocupado por barbeiros quando foi aberta uma passagem durante a construção da Igreja da Ordem Terceira do Carmo,`,
    Execucao: true,
    DataInauguracao: ``,
    Latitude: `-22.9028599`,
    Longitude: `-43.1754662`,
};

export const PisodeConstaneiradoBecodasCancelas_Desconhecida: Obra = {
    ID: 187,
    Artistas: [artistas.Desconhecida],
    Titulo: `Piso de Constaneira do Beco das Cancelas`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `piso`,
    Material: `Blocos de granito`,
    Descricao: `Calçamento de piso de constaneira, situado entre a Rua do Rosário e a Rua do Ouvido. Com três metros de largura e vinte e oito de extensão, ainda guarada o traçado e a pavimentação do Rio no período colonial. O calçamento é em lajota de pedra e há uma valeta para o escoamento da água, com inclinação das extremidades para o centro.
O beco é um dos mais estreitos da cidade, que dava passagem de dia aos pedestres entre as ruas que cortava. À noite suas cancelas se fechavam. Passado os séculos, suas cancelas, ficaram gravadas na tradição carioca e o nome pitoresco nelas inspirado. [pág. 74]`,
    Execucao: true,
    DataInauguracao: ``,
    Latitude: `-22.9020119`,
    Longitude: `-43.176999`,
};

export const MarcoBahai_Desconhecida: Obra = {
    ID: 188,
    Artistas: [artistas.Desconhecida],
    Titulo: `Marco Baha-i`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Monolito`,
    Material: `Monolito de concreto com placa em aluminio`,
    Descricao: `Marco comemorativo da chegada da Sra Leonora Stirling Armstrong ao Brasil, em 1921.`,
    Execucao: true,
    DataInauguracao: `07/1981`,
    Latitude: `-22.8959385`,
    Longitude: `-43.1812125`,
};

export const BancoGotadAgua_JorgeCupim: Obra = {
    ID: 189,
    Artistas: [artistas.JorgeCupim],
    Titulo: `Banco Gota d'Água`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `banco`,
    Material: `Peça em concreto revestida de pedra portuguesa`,
    Descricao: `Banco criado para a praça a partir do concurso promovido pela Secretaria Municipal de Conservação e dedicado a um dos icones da cidade, a pedra portuguesa. A criação foi a vencedora do Prêmio Tatuagem Urbana.`,
    Execucao: true,
    DataInauguracao: `10/2015`,
    Latitude: `-22.9055555`,
    Longitude: `-43.1704293`,
};

export const OratoriodeNossaSenhoradeFatima_EduardoRaymundoRodrigues: Obra = {
    ID: 190,
    Artistas: [artistas.EduardoRaymundoRodrigues],
    Titulo: `Oratório de Nossa Senhora de Fátima`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `oratório`,
    Material: `Pedra e tijolo com argamassa`,
    Descricao: `A construção do Oratório foi inciada em maio e inaugurada em outubro do mesmo ano. Foi idealizada como uma gratidão e homenagem do Bairro de Fátima e Vizinhança. Foi inaugurada pelo Prefeito Sá Freire.
Trata-se de uma construção de um nincho, onde esta instalada uma pequena imagem de Nossa Senhora de Fátima.`,
    Execucao: true,
    DataInauguracao: `10/1958`,
    PontoDeReferencia: 'Bairro de Fátima',
    Latitude: `-22.9179142`,
    Longitude: `-43.1883952`,
};

export const PortaldaCasadeCorrecao_ManoelJosedeOliviera: Obra = {
    ID: 191,
    Artistas: [artistas.ManoelJosedeOliviera],
    Titulo: `Portal da Casa de Correção`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Portal`,
    Material: `Blocos de gnaisses`,
    Descricao: `O Portal da antiga Casa de Correção do Complexo Penitenciário Frei Caneca, é uma construção neoclássica em pedra e ferro, que foi preservada com a demolição do complexo em 2010.`,
    Execucao: true,
    DataInauguracao: `07/1850`,
    Latitude: `-22.9137484`,
    Longitude: `-43.2011551`,
};

export const MuraldaFontedosAmores_MestreValentim: Obra = {
    ID: 196,
    Artistas: [artistas.MestreValentim],
    Titulo: `Mural da Fonte dos Amores`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Monolito`,
    Material: `Blocos de gnaisses com guarda corpo de ferro forjado`,
    Descricao: `Mural composto por blocos de gnaisse esculpido com características barrocas, tendo como elemento principal o brazão do vice-rei Luis de Vasconcelos em mármore de lioz. Um guarda-corpo de ferro forjado completa o conjunto.`,
    Execucao: true,
    DataInauguracao: `01/1783`,
    Latitude: `-22.9137854`,
    Longitude: `-43.176044`,
};

export const FontedoMenino_RomeuAlves: Obra = {
    ID: 197,
    Artistas: [artistas.RomeuAlves],
    Titulo: `Fonte do Menino`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Chafariz`,
    Material: `Peça em bronze`,
    Descricao: `Originalmente, a fonte era composta por um menino de mármore segurando um cágado, que lançava água num barril de gnaisse. Foi substituído em 1841 por um anjo de chumbo, que segura à cartela com a legenda Sou útil inda brincando Em 2004 a estátua de chumbo, depois de diversas e graves mutilações, foi substituída por uma cópia em bronze, mantendo a composição original de um menino com uma pequena tartaruga na mão direita que jorra agua no cantil. A mão esquerda segura a cartela descrita anteriormente.
Em fevereiro de 2016 foi retirado do Passeio Público, devido a tentativa de furto que danificou os braços da escultura.
Desativado desde o ano de 2016.`,
    Execucao: true,
    DataInauguracao: `12/2004`,
    Latitude: `-22.9065697`,
    Longitude: `-43.1968354`,
};

export const CascatadeRocaille_AugusteFrancoisMarieGlaziou: Obra = {
    ID: 199,
    Artistas: [artistas.AugusteFrancoisMarieGlaziou],
    Titulo: `Cascata de Rocaille`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Cascata`,
    Material: `Pedra e tijolo com argamassa`,
    Descricao: `Essa obra escultura em rocaille com cerca de 200 metros quadrados é composta por
    pedras arredondadas, próximas e sobrepostas, tem um arranjo que cria uma elevação de onde surge
    uma pequena cascata artificial, que abastece o lago. O nincho, isto é as depressões na superfície
     da pedra permitem a brotação o que aproxima a criação ainda mais da natureza. Essa obra
     escultorica foi executada em argamassa é um trabalho característico do jardim inglês, de
     elementos figurativos. Desativado desde o ano de 2016.`,
    Execucao: true,
    DataInauguracao: `01/1862`,
    PontoDeReferencia: 'Passeio Publico',
    Latitude: `-22.9129861`,
    Longitude: `-43.1765087`,
};

export const LagodoPasseioPublico_AugusteFrancoisMarieGlaziou: Obra = {
    ID: 200,
    Artistas: [artistas.AugusteFrancoisMarieGlaziou],
    Titulo: `Lago do Passeio Público`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Lago`,
    Material: `Pedra e tijolo com argamassa`,
    Descricao: `O lago criado de traçado sinuoso é uma das características do jardim romântico
    implantado no século XIX, sendo um dos seus elementos decorativos mais importantes do parque`,
    Execucao: true,
    DataInauguracao: `01/1862`,
    Latitude: `-22.9137138`,
    Longitude: `-43.1763318`,
};

export const ChafarizdoBNDES_RobertoBurleMarx: Obra = {
    ID: 202,
    Artistas: [artistas.RobertoBurleMarx],
    Titulo: `Chafariz do BNDES`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Chafariz`,
    Material: `Peça em concreto`,
    Descricao: `Após as obras do Metro do Rio de Janeiro, a praça recebeu um novo tratamento
    paisagístico, com a implantação da cascata em calhas de concreto aparente e jorros verticais,
    no conjunto paisagistico do edificio do BNDES. O destaque do lago com jorro de agua vertical é
    o conjunto de plantas aquaticos no lago. O Chafariz e o paisagismo é mantido pelo condominio do
    edificio do BNDES desde a inauguração do prédio.`,
    Execucao: true,
    DataInauguracao: `01/1981`,
    Latitude: `-22.9085697`,
    Longitude: `-43.1784653`,
};

export const CascatadoCampodeSantana_AugusteFrancoisMarieGlaziou: Obra = {
    ID: 203,
    Artistas: [artistas.AugusteFrancoisMarieGlaziou],
    Titulo: `Cascata do Campo de Santana`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Cascata`,
    Material: `Peça de rocaille em argamassa,`,
    Descricao: `A cascata é uma construção em que blocos de rocailles, imitam pedras, que forma uma
    cascata com sistema de bombeamento para circulação da agua do lago que a compõe. Desativado desde
    o ano de 2016.`,
    Execucao: true,
    DataInauguracao: `09/1880`,
    PontoDeReferencia: 'Campo de Santana',
    Latitude: `-22.9074113`,
    Longitude: `-43.1894181`,
};

export const GrutadoCampodeSantana_AugusteFrancoisMarieGlaziou: Obra = {
    ID: 204,
    Artistas: [artistas.AugusteFrancoisMarieGlaziou],
    Titulo: `Gruta do Campo de Santana`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Construção`,
    Material: `Peça de rocaille em argamassa,`,
    Descricao: `Construção que forma blocos de rocailles, imitando pedra para formar uma gruta,
    cujo o interior é formado por estalagtite e estalagmites, caminhos e nichos.`,
    Execucao: true,
    DataInauguracao: `07/1880`,
    PontoDeReferencia: 'Campo de Santana',
    Latitude: `-22.9074113`,
    Longitude: `-43.1894181`,
};

export const CascatadosDeuses_NelsonMunizNevares: Obra = {
    ID: 205,
    Artistas: [artistas.NelsonMunizNevares],
    Titulo: `Cascata dos Deuses`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Chafariz`,
    Material: `Peça em granito`,
    Descricao: `Monumento construído junto com a praça dos Expedionários. Trata-se de esculturas de
    deuses que protegem a cascata de onde jorra agua. O funcionamento do Chafariz esta suspenso desde
    os anos 1990, tendo sido restaurado e aterrado em 2016. O projeto de Nelson Muniz Nevares é
    assinado em 28 de julho de 1947. Foi aterrado em 2016.`,
    Execucao: true,
    DataInauguracao: `01/1948`,
    Latitude: `-22.9068304`,
    Longitude: `-43.1729054`,
};

export const ChafarizdoLagarto_MestreValentim: Obra = {
    ID: 208,
    Artistas: [artistas.MestreValentim],
    Titulo: `Chafariz do Lagarto`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Chafariz`,
    Material: `Pedra e tijolo com argamassa`,
    Descricao: `Construido no periodo do Vice-Rei Luiz de Vasconcelos, era abastecido pelo aqueduto
    do Catumbi. Foi o primeiro que jorrou água deste manancial.Consiste de uma parede de alvenaria,
    emoldurado por cimalha simples em arco abatido de três frisos. Duas semi pilastras formam corpo
    com a parede compõem a fachada. Na parte central inferior o paredão possui um nincho sobre um
    bloco de granito, num lagarto esculpido de ferro fundido das mandíbulas sai água num tanque. O
    Lagarto atualmente no local é uma réplica instaldo no final dos anos de 1990. É uma composição
    classica de formabarroca.Desativado em data desconhecida.`,
    Execucao: true,
    DataInauguracao: `01/1786`,
    Latitude: `-22.9120252`,
    Longitude: `-43.1952142`,
};

export const ChafarizPauloFernandes_Desconhecida: Obra = {
    ID: 209,
    Artistas: [artistas.Desconhecida],
    Titulo: `Chafariz Paulo Fernandes`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Chafariz`,
    Material: `Blocos de gnaisse com argamassa`,
    Descricao: `Chafariz formando por dois corpos distinto, dois pavimentos. O primeiro corre uma
    cimalha e um varanda de ferro, de onde eleva-se o segundo corpo que arremata com uma platibanda.
    Na base um tanque composto de uma bacia longitudinal, de onde sai uma caixa, com pedra, onde
    originariamente havia 3 (três) bicas de bronze. Depois foi acrescida mais 5 (cinco). Foi
    construido pelo Intendente Paulo Fernandes Vianna, para abastecer a população da região. Esse
    Chafariz é um Patrimônio da União.`,
    Execucao: true,
    DataInauguracao: `01/1816`,
    Latitude: `-22.9115308`,
    Longitude: `-43.1945616`,
};

export const SemTitulo_PauloWerneck: Obra = {
    ID: 52,
    Titulo: `Sem Titulo`,
    Material: `mosaico ceramico`,
    DataInauguracao: `1956`,
    DatasImportantes: [new Data(`1956`, 'data de inauguração')],
    Propriedade: 'privada',
    Zona: 'Central',
    Bairro: 'Centro',
    Endereço: 'Avenida Rio Branco, 185',
    Latitude: `-22.9074537`,
    Longitude: `-43.1767491`,
    Status: 'permanece no espaço público',
    Fatos: [new Fato('', '', '', '', [], '')],
    Temporalidade: 'permanente',
    Eixo: 'sublimidade',
    Funcao: 'ornamental',
    Natureza: 'artística',
    Tipologia: 'mural',
    Execucao: true,
};

export const SemTitulo_Desconhecido: Obra = {
    ID: 52,
    Titulo: `Sem Titulo`,
    Material: `mosaico ceramico`,
    DataInauguracao: `1948`,
    DatasImportantes: [new Data(`1948`, 'data de inauguração')],
    Propriedade: 'privada',
    Zona: 'Central',
    Bairro: 'Centro',
    Endereço: 'Praça Pio X, 118',
    Latitude: `-22.9002773`,
    Longitude: `-43.1805241`,
    Status: 'permanece no espaço público',
    Fatos: [new Fato('', '', '', '', [], '')],
    Temporalidade: 'permanente',
    Eixo: 'sublimidade',
    Funcao: 'ornamental',
    Natureza: 'artística',
    Tipologia: 'mural',
    Execucao: true,
};

export const ChafarizdasTresVelas_JulioCesarPesssolaniZavala: Obra = {
    ID: 212,
    Artistas: [artistas.JulioCesarPesssolaniZavala],
    Titulo: `Chafariz das Três Velas`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Chafariz`,
    Material: `Peça em concreto`,
    Descricao: `É um Chafariz composto por tres estruturas de concreto armado, de tamanhos diferentes sobre um grande lago. Em funcionamento a água sai do topo das estruturas, como acendendo uma vela.
Esse Chafariz esta desativado desde 2008.`,
    Execucao: true,
    DataInauguracao: `07/1992`,
    Latitude: `-22.9065697`,
    Longitude: `-43.1968354`,
};

export const FontedaSereia_replica__Desconhecida: Obra = {
    ID: 213,
    Artistas: [artistas.Desconhecida],
    Titulo: `Fonte da Sereia ( réplica)`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Chafariz`,
    Material: `Peça em ferro fundido`,
    Descricao: `É uma escultura de bronze réplica da peça de ferro fundido das Fundições V d'Osne.
    A original foi retirada do lago devido ao desgaste da peça, que durante anos teve contato com a
    agua sem a devida proteção de pintura.`,
    Execucao: true,
    DataInauguracao: `01/2006`,
    Latitude: `-22.9081131`,
    Longitude: `-43.1891171`,
};

export const Inverno_PaulJeanBaptesteGasq: Obra = {
    ID: 215,
    Artistas: [artistas.PaulJeanBaptisteGasq],
    Titulo: `Inverno`,
    Classificacao: 'perene',
    Categoria: 'sublimidade',
    TipologiaObra: `Escultura`,
    Material: `Peça em mármore de Carrara com pedestal de gnaisse`,
    Descricao: `Fui instalada inicialmente na Praça XV de Novembro em 1906 e em 1914 foi transferido para parque.
Escultura representando um homem de idade, com a testa enrugada, olhar pensativo, recolhimento. Todo recoberto por um panejamento, desde a cabeça até os pés. Braço esquerdo no ombro direito demonstrando frio. Encontra-se meio reclinado procurando meios de sentir menos frio.`,
    Execucao: true,
    DataInauguracao: `01/1906`,
    PontoDeReferencia: 'Campo de Santana',
    Latitude: `-22.906843`,
    Longitude: `-43.1888948`,
};

export const Mural_IvanFreitas: Obra = {
    ID: 108,
    Artistas: [artistas.IvanFreitas],
    Titulo: `Mural `,
    Material: 'pintura',
    DataInauguracao: `1984`,
    DatasImportantes: [new Data(`1984`, 'data de inauguração')],
    Propriedade: 'publica',
    Zona: 'Central',
    Bairro: 'Centro',
    Endereço: 'Rua do Passeio, 98',
    Status: 'permanece no espaço público',
    Fatos: [new Fato('', '', '', '', [], '')],
    Temporalidade: 'temporario',
    Eixo: 'sublimidade',
    Funcao: 'ornamental',
    Natureza: 'artística',
    Tipologia: 'mural',
    Execucao: true,
};
export const ChafarizdaantigasedeBNHatualCaixaEconomica_Desconhecida: Obra = {
    ID: 219,
    Artistas: [artistas.Desconhecida],
    Titulo: `Chafariz da antiga sede BNH, atual Caixa Economica`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Chafariz`,
    Material: `Concreto armado`,
    Descricao: `Chafariz de jorro de água vertical em um lago criado para embelezar o entrono do prédio. O jardim com o lago foi cercado nos anos de 2000 para proteger essa área livre.`,
    Execucao: true,
    DataInauguracao: `01/1973`,
    Latitude: `-22.9087546`,
    Longitude: `-43.1803899`,
};

export const GrandeArcodoSambodromo_OscarNiemeyer: Obra = {
    ID: 220,
    Artistas: [artistas.OscarNiemeyer],
    Titulo: `Grande Arco do Sambodromo`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Construção`,
    Material: `Concreto armado pre-fabricado`,
    Descricao: `Arco monumental na extremidade sul da avenida, para fechar a área dos desfiles das escolas de samba da cidade do Rio de Janeiro.
Projetado em 1983 foi construído em concreto pré fabricado e demorou quatro meses a construção. Na base abriga um pequeno museu do samba com entrada pela rua Frei caneca. E base é revestida com painel de azuejos de Athos Bulcao.`,
    Execucao: true,
    DataInauguracao: `03/1984`,
    Latitude: `-22.9134649`,
    Longitude: `-43.1962472`,
};

export const MastrodaBandeiradaPracadaBandeira_Desconhecida: Obra = {
    ID: 223,
    Artistas: [artistas.Desconhecida],
    Titulo: `Mastro da Bandeira  da Praça da Bandeira`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `mastro`,
    Material: `Peça em metal`,
    Descricao: `Em 1935, o Centro Carioca lançou o Monumento a Bandeira Nacional, na Praça da Bandeira. apesar desde 1917, o local tem a denomina de Praça da Bandeira. A retirada do Chafariz Monumental em 1979, provocou a instalado um mastro para o Pavilhão Nacional, identificado o espaço.`,
    Execucao: true,
    DataInauguracao: `01/1935`,
    Latitude: `-22.9109414`,
    Longitude: `-43.2141505`,
};

export const PortaldoMatadouro_JoseMariaJacintoRabelo: Obra = {
    ID: 224,
    Artistas: [artistas.JoseMariaJacintoRabelo],
    Titulo: `Portal do Matadouro`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `portal`,
    Material: `Blocos de gnaisse com argamassa`,
    Descricao: `Construção neoclássica, remanescente do Matadouro, erguido em 1853. Construido com um arco pleno encimado por um frontão triangular. Uma cartela oval de mármore tinha a seguinte inscrição<span style="color: #666666; font-family: 'trebuchet ms', arial, helvetica, sans-serif;">A ilustríssima Câmara Municipal, que serviu do ano 1844 ao de 1848, fez construir este edifício. O Matadouro da Cidade foi transferido, em 1881, para a antiga fazenda dos Jesuítas, em Santa Cruz, permanecendo esse resquicio da historia no local de origem. A cartela existiu até 1979.`,
    Execucao: true,
    DataInauguracao: `01/1853`,
    Latitude: `-22.9108644`,
    Longitude: `-43.2132586`,
};

export const DescobrimentodoBrasil_APedroAlvaresCabralPedroVazCaminhaeFreiHenriquedoCoimbra_RodolfoBernadelli: Obra = {
    ID: 225,
    Artistas: [artistas.RodolfoBernadelli],
    Titulo: `Descobrimento do Brasil - À Pedro Àlvares Cabral,  Pedro Vaz Caminha e  Frei Henrique do Coimbra`,
    Classificacao: 'perene',
    Categoria: 'sublimidade',
    TipologiaObra: `Escultura`,
    Material: `Peças e alegorias em bronze e pedestal de granito`,
    Descricao: `O Monumento foi incluído na programação das festas comemorativas do quarto centenário do Descobrimento do Brasil, celebradas no ano de 1900.
O Monumento mede dez metros, com o pedestal hexagonal que é de granito com as esculturas representnado o navegadorr Pedro Alvares Cabral, o escrivão da frota Pedro Vaz Caminha e o Frei Henrique do Coimbra, capelão e celebrante da primeira missa. Numa das face do pedestal está gravado o seguinte:A Associação do Quarto Centenário doDescobrimento do Brasil mandou erigir este Monumento `,
    Execucao: true,
    DataInauguracao: `05/1900`,
    Latitude: `-22.9202612`,
    Longitude: `-43.1761148`,
};

export const EduardoTapajos_Mandarino: Obra = {
    ID: 226,
    Imagem: 'EduardoTapajos_Mandarino.jpg',
    Titulo: `Eduardo Tapajós`,
    Classificacao: 'perene',
    Categoria: 'personalidades',
    TipologiaObra: `Busto`,
    Material: `Peça em bronze com pedestal de granito`,
    Descricao: `Peça academica com a fisionomia tranquila e traje elegante.`,
    Execucao: true,
    DataInauguracao: `05/2000`,
    Zona: 'Sul',
    Bairro: 'Glória',
    PontoDeReferencia: 'Praça Juarez Tavola',
    Latitude: `-22.9230746`,
    Longitude: `-43.1723698`,
    Fatos: [
        new Fato('', '', 'Fundição/Atelier', 'Zani Fundição Artística e Metalúrgica Ltda', [], 'Rio de Janeiro'),
        new Fato('11/2017', '11/2017', 'Furto', 'r', [], 'Rio de Janeiro'),
        new Fato('', '', 'Propriedade', 'Pública', [], 'Rio de Janeiro'),
    ],
};

export const AfonsoCelso_LaurindoRamos: Obra = {
    ID: 227,
    Artistas: [artistas.LaurindoRamos],
    Titulo: `Afonso Celso`,
    Classificacao: 'perene',
    Categoria: 'personalidades',
    TipologiaObra: `Busto`,
    Material: `Peça em bronze com pedestal de granito`,
    Descricao: `A homenagem do academico traz o fardão e fisionomia tranquila. Foi erguido por iniciativa da Sociedade dos Amigos de Afonso Celso.`,
    Execucao: true,
    DataInauguracao: `03/1960`,
    Latitude: `-22.9149362`,
    Longitude: `-43.1757546`,
};

export const AlbertodeOliviera_PetrusVerdier: Obra = {
    ID: 228,
    Artistas: [artistas.PetrusVerdier],
    Titulo: `Alberto de Oliviera`,
    Classificacao: 'perene',
    Categoria: 'personalidades',
    TipologiaObra: `busto`,
    Material: `Peça em bronze e pedestal de granito`,
    Descricao: `A homenagem ao poeta tem a figura academica. O monumento foi inaugurado pelas poetisas Maria Eugenia e Ana Amelia de Queiroz Carneiro de Mendonça, que desceram a bandeira nacional que o cobria. O discurso de inauguração foi realizado pelo Ministro de Justiça Dr. Vianna de Castello.O monumento foi inaugurado no dia que se completo 30 anos da publicação de seu primeiro livro. `,
    Execucao: true,
    DataInauguracao: `04/1928`,
    Latitude: `-22.920732`,
    Longitude: `-43.1746418`,
};

export const AlfredoAgache_HeitorUsai: Obra = {
    ID: 229,

    //Imagem: AlfredoAgache,
    Artistas: [artistas.HeitorUsai],
    Titulo: `Alfredo Agache`,
    Classificacao: 'perene',
    Categoria: 'personalidades',
    TipologiaObra: `Busto`,
    Material: `Peça em bronze e pedestal de granito`,
    Descricao: `É uma homenagem oferecido pelo Clube de Engenharia, pela Associação dos Artistas Brasileiros e o Comite Nacional de Urbanismo, como parte das comemorações para assinalar a passagem do Dia da França.
Apos a reforma da praça depois da obra do Metro, em 1992, o monumento foi reinaugurado.`,
    Execucao: true,
    DataInauguracao: `07/1969`,
    Latitude: `-22.9172847`,
    Longitude: `-43.1759463`,
    Remocao: true,
    DataRealocacao: '1992',
    PontoDeReferenciaorealocacao: 'Praça Paris',
    LatitudeRealocacao: '-22.916358',
    LongitudeRealocacao: '-43.177946,17',
};

export const BadenPowell_VincenzoLarocca: Obra = {
    ID: 231,
    Artistas: [artistas.VincenzoLarocca],
    Titulo: `Baden Powell`,
    Classificacao: 'perene',
    Categoria: 'personalidades',
    TipologiaObra: `busto`,
    Material: `Peça em bronze e pedestal de granito`,
    Descricao: `O monumento foi uma iniciativa da União dos Escoteiros Do Brasil aoEscoteiro Chefe Mundial. O monumento foi inaugurado pelo escoteiro Jose de Araujo Filho, que descerou a bandeira. Compareceram a cerimonia 2 jovens venezianos e 1 (um) mexicano.
Esta representado em meio corpo com os braços cruzados.`,
    Execucao: true,
    DataInauguracao: `07/1960`,
    Latitude: ``,
    Longitude: ``,
};

export const CandidoMendes_BenevenutoBerna: Obra = {
    ID: 232,
    Imagem: 'CandidoMendes_BenevenutoBerna.jpg',
    Artistas: [artistas.BenevenutoBerna],
    Titulo: `Cândido Mendes`,
    Classificacao: 'perene',
    Categoria: 'personalidades',
    TipologiaObra: `Busto`,
    Material: `Peça em bronze e mural  de granito`,
    Descricao: `A homenagem visa registrar a importância de sua atuação em instituições de ensino e pesquisa nas áreas de sociologia e direito.`,
    Execucao: true,
    DataInauguracao: `24/03/1982`,
    PontoDeReferencia: 'Rua Sete de Setembro',
    Latitude: `-22.9149978`,
    Longitude: `-43.1754865`,
    Remocao: true,
    DataRealocacao: '24/03/2001',
    Realocacao: true,
    ZonaRealocacao: 'Sul',
    BairroRealocacao: 'Glória',
    PontoDeReferenciaorealocacao: 'Praça Paris',
    LatitudeRealocacao: '-22.916358',
    LongitudeRealocacao: '-43.177946,17',
    Fatos: [
        new Fato('1995', '1995', 'Tombamento', 'Tombado pelo Município pelo Decreto nº 13898', [], 'Rio de Janeiro'),
        new Fato('', '', 'Propriedade', 'Pública', [], 'Rio de Janeiro'),
    ],
};

export const CardealArcoverde_HeitorUsai: Obra = {
    ID: 233,
    Artistas: [artistas.HeitorUsai],
    Titulo: `Cardeal Arcoverde`,
    Classificacao: 'perene',
    Categoria: 'personalidades',
    TipologiaObra: `busto`,
    Material: `Peça em bronze com pedestal de granito`,
    Descricao: `É uma homenagem da Cidade do Rio de Janeiro, ao primeiro Cardeal do Brasil, no 1º Conciliato Brasileiro, permanecendo em frente ao Palácio Episcopal.`,
    Execucao: true,
    DataInauguracao: `07/1939`,
    Latitude: `-22.9210361`,
    Longitude: `-43.1768286`,
};

export const CarmemGomes_JoseBarreto: Obra = {
    ID: 234,
    Artistas: [artistas.JoseBarreto],
    Titulo: `Carmem Gomes`,
    Classificacao: 'perene',
    Categoria: 'personalidades',
    TipologiaObra: `cabeça`,
    Material: `Peça em bronze e mural  de granito`,
    Descricao: `A homenagem foi uma iniciativa da Sociedade dos A<rtistas Líricos Brasileiros, na época era presidida pelo filho da cantora, Jim Barboza. O monumeto teve o patrocinio de uma comissão composta por Carlos Magno, Negrão de Lima e Clovis Slagado.`,
    Execucao: true,
    DataInauguracao: `03/1958`,
    Latitude: `-22.916683`,
    Longitude: `-43.1758761`,
};

export const ClovisBevilaqua_HonorioPecanha: Obra = {
    ID: 235,
    Artistas: [artistas.HonorioPecanha],
    Titulo: `Clóvis Beviláqua`,
    Classificacao: 'perene',
    Categoria: 'personalidades',
    TipologiaObra: `busto`,
    Material: `Peça em bronze e mural  de granito`,
    Descricao: `É uma homenagem a quem organizou o projeto do Código Civil Brasileiros e representou o Brasil no Tribunal de Haia. A inauguração fez parte das comemorações do Dia do Jurista.`,
    Execucao: true,
    DataInauguracao: `12/1943`,
    Latitude: `-22.9149128`,
    Longitude: `-43.1756288`,
};

export const GetulioVargas_JoasPereiradosPassos: Obra = {
    ID: 236,
    Imagem: 'GetulioVargas_JoasPereiradosPassos.jpg',
    Artistas: [artistas.JoasPereiradosPassos],
    Titulo: `Getulio Vargas`,
    Classificacao: 'perene',
    Categoria: 'personalidades',
    TipologiaObra: `Busto`,
    Material: `Peça em bronze com pedestal de mármore`,
    Descricao: `A homenagem foi idealizado e erguido por Henock de Almeida e executado pelo artista plástico Joás,para compor o
    Memorial a Getulio Vargas,criado para as comemorações do cinquentenário de sua morte.`,
    Execucao: true,
    DataInauguracao: `08/2004`,
    Zona: 'Sul',
    Bairro: 'Glória',
    PontoDeReferencia: 'Praça Luis de Camões',
    Latitude: `-22.9214288`,
    Longitude: `-43.1734074`,
    Fatos: [new Fato('', '', 'Propriedade', 'Pública', [], 'Rio de Janeiro')],
};

export const LazarSegall_LiubaWolt: Obra = {
    ID: 237,
    Artistas: [artistas.LiubaWolt],
    Titulo: `Lazar Segall`,
    Classificacao: 'perene',
    Categoria: 'personalidades',
    TipologiaObra: `cabeça`,
    Material: `Peça em bronze com pedestal de mármore`,
    Descricao: `Em 1960, a artista Liuba , fez o busto em bronze emhomenagem ao pintor, mas somente instalado em 1964.
 A homenagem foi uma iniciativa do Departamento de Cultura do Estado, em comemoração do 30º aniversario da primeira exposição de arte moderna.`,
    Execucao: true,
    DataInauguracao: `09/1964`,
    Latitude: `-22.9220889`,
    Longitude: `-43.1727406`,
};

export const PereiraCarneiro_EgistoBertozzi: Obra = {
    ID: 238,
    Artistas: [artistas.EgistoBertozzi],
    Titulo: `Pereira Carneiro`,
    Classificacao: 'perene',
    Categoria: 'personalidades',
    TipologiaObra: `busto`,
    Material: `Peça em bronze e pedestal de granito`,
    Descricao: `O monumento foi inaugurado na praça Marechal Âncora, devido a sua ligação com a Panair do Brasil. Foi posteriormente transferido para essa praça.`,
    Execucao: true,
    DataInauguracao: `01/1962`,
    Latitude: `-22.9206872`,
    Longitude: `-43.1743128`,
};

export const TeixeiraMendes_BrunoGiorgi: Obra = {
    ID: 239,
    Artistas: [artistas.BrunoGiorgi],
    Titulo: `Teixeira Mendes`,
    Classificacao: 'perene',
    Categoria: 'personalidades',
    TipologiaObra: `Busto`,
    Material: `Peça em bronze com pedestal de granito`,
    Descricao: `A homenagem foi inaugurada nas comemorações do dia da bandeira, por ter sido um dos idealizadores da Bandera Nacional. Foi erguido por iiniciativa do Clube Positivista e do Almirante Henrique Batista, presidente da Associação dos Ex-Combatentes do Brasil, seção do Rio de Janeiro.
O ato teve a presença do prefeito Marcos Tamoio e do Embaixador Paulo Carneiro.
Passados sete anos de sua inauguração. o busto foi roubado, e recolocado em 16 de dezembro de 1986, se recorreu ao autor da obra, Bruno Giorgi, que tinha o modelo original e autorização a confecção da réplica.`,
    Execucao: true,
    DataInauguracao: `11/1977`,
    Latitude: `-22.9206872`,
    Longitude: `-43.1743128`,
};

export const ReiseSilva_Desconhecida: Obra = {
    ID: 240,
    Artistas: [artistas.Desconhecida],
    Titulo: `Reis e Silva`,
    Classificacao: 'perene',
    Categoria: 'personalidades',
    TipologiaObra: `efigie`,
    Material: `Peça em granito`,
    Descricao: `Marco de granito natural onde está fixada a efígie do homenageado com a inscrição em baixo relevo: Foi inaugurado na comemoração do aniversaio do 5º aniversario do Gremio Lirico Reis e Silva.`,
    Execucao: true,
    DataInauguracao: `12/1958`,
    Latitude: `-22.9151315`,
    Longitude: `-43.1756671`,
};

export const Varnhagem_JoseOtavioCorreaLima: Obra = {
    ID: 241,
    Artistas: [artistas.JoseOtavioCorreaLima],
    Titulo: `Varnhagem`,
    Classificacao: 'perene',
    Categoria: 'personalidades',
    TipologiaObra: `Busto`,
    Material: `Peças e alegorias em bronze e pedestal de granito`,
    Descricao: `A homenagem realizada pelo Instituto Histórico e Geográfico Brasileiro em comemoração ao centenário de sua fundação, no qual Adolfo Varnhagem foi primeiro-secretário.O busto a Varhagem esta num pedestal de granito, na parte inferior do pedestal se encontra a figura de umafeminina tendo um livro aberto nas mãos simbolizando a história.`,
    Execucao: true,
    DataInauguracao: `10/1938`,
    Latitude: `-22.9173289`,
    Longitude: `-43.1759357`,
};

export const VeraJanacopulos_AdrianaJanacopolus: Obra = {
    ID: 242,
    Artistas: [artistas.AdrianaJanacopolus],
    Titulo: `Vera Janacópulos`,
    Classificacao: 'perene',
    Categoria: 'personalidades',
    TipologiaObra: `busto`,
    Material: `Peça em bronze e pedestal de granito`,
    Descricao: `A homenagem partiu do Circulo de Arte Vera Janacópulos, presidia pelo deputado Gustavo Capanema, fundada em 1955 com o objetivo de propagar e ensinar o método do canto de camara. A obra foi executada pela sua irmã Adriana, com os custos por conta da prefeitura.
A inauguração contou com a presença do Prefeito Sá Freire, que fez erigir o monumento por conta dos cofres publicos. Esteve presente o diretor do Departamento Parques e Jardins Sr. Mauro Viegas, Pascoal carlos Magno, do representante do Ministro da Educação, Sr. Poessel.`,
    Execucao: true,
    DataInauguracao: `12/1958`,
    Latitude: `-22.916683`,
    Longitude: `-43.1758761`,
};

export const MosaicodeRosadosVentosdaGloria_Desconhecida: Obra = {
    ID: 244,
    Artistas: [artistas.Desconhecida],
    Titulo: `Mosaico de Rosa dos Ventos da Glória`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Piso`,
    Material: `Pedras portuguesas`,
    Descricao: `O desenho na pedra portuguêsa, nas cores branca, vermelha e preta, fez parte do Projeto de revitalização se bairro histórico do Rio, o <Urb-Cidade Glória projeto e execução daRIOURBE, Empresa Municipal de Urbanização vinculado à Secretaria Municipal de Obras.`,
    Execucao: true,
    DataInauguracao: `01/2009`,
    Latitude: `-22.9199019`,
    Longitude: `-43.1769224`,
};

export const RelogiodaGloria_Desconhecida: Obra = {
    ID: 243,
    Artistas: [artistas.Desconhecida],
    Titulo: `Relógio da Glória`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `relógio`,
    Material: `Peça em ferro fundido e pedestal de gnaisse`,
    Descricao: `Situado no extremo sul da balaustrada da Rua da Gloria, foi instalado um relógio da marca Krussman, de quatro mostradores luminosos de vidro. O sistema de funcionamento da máquina é original movido por peso amarrada na ponta de um cabo de aço, que força o carretel e provoca o movimento através de um sistema de engrenagem. A máquina francesa fornecida pelo relojoeiro alemã Frederich Krussman, relojoeiro que chegou ao Brasil em 1862.
Na face sul do Relógio, fica o acesso a máquina do relógio. Esta é uma porta de ferro fundido com a inscrição Construído sob a administração do Prefeito Pereira Passos- 1905. No centro da mesma está representando em alto relevo o símbolo da Cidade, com golfinhos.
Uma curiosidade do relógio: Como não havia ainda eletricidade no bairro da Glória, quando foi instalado o relógio, a Inspetoria de Matas, Jardins, Arborização, Caça e Pesca da Prefeitura, apelou para empresa de bondes, Companhia Ferro Carril do Jardim Botânico. Na véspera da inauguração a mesma respondeu com o seguinte texto:
Atendendo, com a melhor boa vontade, à solicitação do Exmo Sr. Prefeito do Distrito Federal, no sentido de fornecer, provisoriamente, a energia elétrica para a iluminação do relógio na praça da Glória, até que haja serviço para a iluminação do relógio da praça da Glória, até que haja serviço de iluminação elétrica feita na zona pela empresa Concessionária, verifica, porém, a Cia Ferro Carril do Jardim Botânico que todo o dispositivo do mesmo for estabelecido de maneira a receber subterraneamente a corrente, o que difere do modo pelo qual esta Companhia emprega a eletricidade em suas linhas, na forma dos contratos vigentes e de que ela não se tem afastado em caso algum transtorno na nossa linha, resultante da derivação subterrânea de energia elétrica para aquele ponto, reserva-se a mesma Companhia o direito de desligar a corrente, avisando-nos, oportunamente, para que vos digneis providencia a fim de que seja feita de outra qualquer maneira a iluminação ao referido relógio.`,
    Execucao: true,
    DataInauguracao: `04/1905`,
    Latitude: `-22.9196698`,
    Longitude: `-43.1767844`,
};

export const AmuradadaGloria_Desconhecida: Obra = {
    ID: 245,
    Artistas: [artistas.Desconhecida],
    Titulo: `Amurada da Glória`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Amurada`,
    Material: `Bloco de granito com guarda corpo de ferro fundido`,
    Descricao: `Construída para permitir a ligação do cantro ao bairro da Glória, com a técnica de pedra seca,a amurada tem como principal destaque a balaustrada que foi executada originalmente para a Praça Tiradentes quando recebeu seu primeiro projeto paisagístico em 1894. Esta balaustrada foi solicitada pela Câmara Municipal em 1852 e concretiza no projeto AugusteFrancoisMarieGlaziou, provavelmente oriunda das Fundições Val d'Osne. Na administração de Pereira Passos o relógio da Gloria foi instadado, o primeiro público da Cidade.
Em 2015 foi guardado no deposito da prefeitura um poste danificado e uma pinha.`,
    Execucao: true,
    DataInauguracao: ``,
    Latitude: `-22.918782`,
    Longitude: `-43.1768389`,
};

export const AmuradadoHotelGloria_Desconhecida: Obra = {
    ID: 247,
    Artistas: [artistas.Desconhecida],
    Titulo: `Amurada do Hotel Glória`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Amurada`,
    Material: `Blocos de granito`,
    Descricao: `Essa amurada foi construída no Governo do Prefeito Souza Aguiar em 1908,com a tecnica de pedra seca.Com base de blocos de granito e a balaustrada em ferro fundido para proteção do monumento da Abertura dos Portos, Tem<cerca de duzentos ( 200) metros. de extensão, formanndo modulos de dez metros, onde estão fixadas balautres.
Acima desse guarda corpo estão fixados postes decorativos.`,
    Execucao: true,
    DataInauguracao: `07/1908`,
    Latitude: `-22.9222146`,
    Longitude: `-43.1724718`,
};

export const PortaodaPracaParis_JoseMarcioBaptistadaCunha: Obra = {
    ID: 248,
    Artistas: [artistas.JoseMarcioBaptistadaCunha],
    Titulo: `Portão da Praça Paris`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Portão`,
    Material: `Metal em ferro fundido e colunas de concreto`,
    Descricao: `Construção executada junto com o cercamento da praça, após as obras de implantação do metro na cidade. São quatro portões nos eixos da praça compondo-se de colunas de concreto com portão de duas folhas e frontispício em metal.`,
    Execucao: true,
    DataInauguracao: `01/1992`,
    Latitude: `-22.9172484`,
    Longitude: `-43.176391`,
};

export const PrimaveradaPracaParis_Desconhecida: Obra = {
    ID: 249,
    Artistas: [artistas.Desconhecida],
    Titulo: `Primavera da Praça Paris`,
    Classificacao: 'perene',
    Categoria: 'sublimidade',
    TipologiaObra: `Escultura`,
    Material: `Peça em mármore de Carrara`,
    Descricao: `Uma das peças de um conjunto escultórico das quatro estações do ano, reprodução de Ceres de Jean Baptiste Poultier,exposta no jardim do Palácio de Versailles.`,
    Execucao: true,
    DataInauguracao: `01/1929`,
    Latitude: `-22.9151454`,
    Longitude: `-43.1755404`,
};

export const VeraodaPracaParis_Desconhecida: Obra = {
    ID: 250,
    Artistas: [artistas.Desconhecida],
    Titulo: `Verão da Praça Paris`,
    Classificacao: 'perene',
    Categoria: 'sublimidade',
    TipologiaObra: `Escultura`,
    Material: `Peça em mármore de Carrara`,
    Descricao: `Peça do conjunto escultórico<representando o Verão, reprodução do Pandora de Pierre Le Gros existente nos Jardins de Versalles.`,
    Execucao: true,
    DataInauguracao: `01/1929`,
    Latitude: `-22.9166947`,
    Longitude: `-43.175759`,
};

export const AberturadosPortos_EugeneBenet: Obra = {
    ID: 246,
    Artistas: [artistas.EugeneBenet],
    Titulo: `Abertura dos Portos`,
    Classificacao: 'perene',
    Categoria: 'sublimidade',
    TipologiaObra: `Escultura`,
    Material: `Peça em bronze com pedestal de granito`,
    Descricao: `Esse monumento foi uma iniciativa da Associção Comercial do Rio de Janeiro para as comemorações da abertura dos portos para as nações amigas promovida por D. João VI. O conjunto escultórico é composto por duas figuras femininas em bronze de 3 metros de altura, uma representando o Comércio e a Navegação. Estas estátuas são inspiradas nas existentes na Praça da Concórdia em Paris. A estátua que simboliza o comércio tem mão direita apoiada em um escudo, e a da navegada esta apoiada em uma âncora.`,
    Execucao: true,
    DataInauguracao: `01/1908`,
    Latitude: `-22.9222642`,
    Longitude: `-43.1726345`,
};

export const InvernodaPracaParis_Desconhecida: Obra = {
    ID: 251,
    Artistas: [artistas.Desconhecida],
    Titulo: `Inverno da Praça Paris`,
    Classificacao: 'perene',
    Categoria: 'sublimidade',
    TipologiaObra: `Escultura`,
    Material: `Peça em mármore de Carrara`,
    Descricao: `Elegante escultura representando o inverno com vestimenta típica para a estação do ano. É uma reprodução de Théophraste, de Simon Hurtvelle.`,
    Execucao: true,
    DataInauguracao: `01/1929`,
    Latitude: `-22.9166769`,
    Longitude: `-43.1759531`,
};

export const OutonodaPracaParis_Desconhecida: Obra = {
    ID: 252,
    Artistas: [artistas.Desconhecida],
    Titulo: `Outono da Praça Paris`,
    Classificacao: 'perene',
    Categoria: 'sublimidade',
    TipologiaObra: `Escultura`,
    Material: `Peça em mármore de Carrara`,
    Descricao: `Representação do Outono reprodução da esculturaFaune de Jacques Houzeau,<existente no jardim do Palácio de Versailles.`,
    Execucao: true,
    DataInauguracao: `01/1929`,
    Latitude: `-22.9151205`,
    Longitude: `-43.1757731`,
};

export const AquiEstao_AnnaMariaMaiolino: Obra = {
    ID: 140,
    Titulo: `Aqui Estao`,
    Material: 'madeira',
    DataInauguracao: '1999',
    DatasImportantes: [new Data(`1999`, 'data de inauguração')],
    Propriedade: 'privada',
    Zona: 'Norte',
    Bairro: 'Alto da Boa Vista',
    Endereço: 'Museu do Açude',
    Base: 'sem pedestal',
    Fatos: [new Fato('', '', '', '', [], '')],
    Temporalidade: 'permanente',
    Eixo: 'sublimidade',
    Funcao: 'ornamental',
    Natureza: 'artistica',
    Tipologia: 'escultura',
    Execucao: true,
};

export const DoraMaar_IoledeFreitas: Obra = {
    ID: 140,
    Titulo: `Dora Maar`,
    Material: 'aço e policarbonato',
    DataInauguracao: '1999',
    DatasImportantes: [new Data(`1999`, 'data de inauguração')],
    Propriedade: 'privada',
    Zona: 'Norte',
    Bairro: 'Alto da Boa Vista',
    Endereço: 'Museu do Açude',
    Base: 'sem pedestal',
    Fatos: [new Fato('', '', '', '', [], '')],
    Temporalidade: 'permanente',
    Eixo: 'sublimidade',
    Funcao: 'ornamental',
    Natureza: 'artistica',
    Tipologia: 'escultura',
    Execucao: true,
};

export const PenetravelMagicSquareN5_HelioOiticica: Obra = {
    ID: 140,
    Titulo: `Penetravel Magic Square N5`,
    Material: 'alvenaria acrílico e metal',
    DataInauguracao: '2001',
    DatasImportantes: [new Data(`2001`, 'data de inauguração')],
    Propriedade: 'privada',
    Zona: 'Norte',
    Bairro: 'Alto da Boa Vista',
    Endereço: 'Museu do Açude',
    Base: 'sem pedestal',
    Fatos: [new Fato('', '', '', '', [], '')],
    Temporalidade: 'permanente',
    Eixo: 'sublimidade',
    Funcao: 'ornamental',
    Natureza: 'artistica',
    Tipologia: 'escultura',
    Execucao: true,
};

export const GarotadeIpanema_PiotrUklanski: Obra = {
    ID: 140,
    Titulo: `Garota de Ipanema`,
    Material: 'alvenaria e ceramica',
    DataInauguracao: '2000',
    DatasImportantes: [new Data(`2000`, 'data de inauguração')],
    Propriedade: 'privada',
    Zona: 'Norte',
    Bairro: 'Alto da Boa Vista',
    Endereço: 'Museu do Açude',
    Base: 'sem pedestal',
    Fatos: [new Fato('', '', '', '', [], '')],
    Temporalidade: 'permanente',
    Eixo: 'sublimidade',
    Funcao: 'ornamental',
    Natureza: 'artistica',
    Tipologia: 'escultura',
    Execucao: true,
};

export const SemTitulo_JoseResende: Obra = {
    ID: 140,
    Artistas: [artistas.JoseResende],
    Titulo: `Sem Titulo`,
    Material: 'marmore e aço',
    DataInauguracao: '2003',
    DatasImportantes: [new Data(`2003`, 'data de inauguração')],
    Propriedade: 'privada',
    Zona: 'Norte',
    Bairro: 'Alto da Boa Vista',
    Endereço: 'Museu do Açude',
    Base: 'sem pedestal',
    Fatos: [new Fato('', '', '', '', [], '')],
    Temporalidade: 'permanente',
    Eixo: 'sublimidade',
    Funcao: 'ornamental',
    Natureza: 'artistica',
    Tipologia: 'escultura',
    Execucao: true,
};

export const NewHouse_LygiaPape: Obra = {
    ID: 140,
    Titulo: `New House`,
    Material: 'alvenaria, policarbonato e gesso',
    DataInauguracao: '2003',
    DatasImportantes: [new Data(`2003`, 'data de inauguração')],
    Propriedade: 'privada',
    Zona: 'Norte',
    Bairro: 'Alto da Boa Vista',
    Endereço: 'Museu do Açude',
    Base: 'sem pedestal',
    Fatos: [new Fato('', '', '', '', [], '')],
    Temporalidade: 'permanente',
    Eixo: 'sublimidade',
    Funcao: 'ornamental',
    Natureza: 'artistica',
    Tipologia: 'escultura',
    Execucao: true,
};

export const Calado_NunoRamos: Obra = {
    ID: 140,
    Titulo: `Calado`,
    Material: 'asfalto e vidro',
    DataInauguracao: '2003',
    DatasImportantes: [new Data(`2003`, 'data de inauguração')],
    Propriedade: 'privada',
    Zona: 'Norte',
    Bairro: 'Alto da Boa Vista',
    Endereço: 'Museu do Açude',
    Base: 'sem pedestal',
    Fatos: [new Fato('', '', '', '', [], '')],
    Temporalidade: 'permanente',
    Eixo: 'sublimidade',
    Funcao: 'ornamental',
    Natureza: 'artistica',
    Tipologia: 'escultura',
    Execucao: true,
};

export const Passarela_EduardoCoimbra: Obra = {
    ID: 140,
    Titulo: `Passarela`,
    Material: 'madeira',
    DataInauguracao: '2008',
    DatasImportantes: [new Data(`2008`, 'data de inauguração')],
    Propriedade: 'privada',
    Zona: 'Norte',
    Bairro: 'Alto da Boa Vista',
    Endereço: 'Museu do Açude',
    Base: 'sem pedestal',
    Fatos: [new Fato('', '', '', '', [], '')],
    Temporalidade: 'permanente',
    Eixo: 'sublimidade',
    Funcao: 'ornamental',
    Natureza: 'artistica',
    Tipologia: 'escultura',
    Execucao: true,
};

export const FelinoDeitado_HPeyrol: Obra = {
    ID: 254,
    Titulo: `Felino Deitado`,
    Classificacao: 'perene',
    Categoria: 'sublimidade',
    TipologiaObra: `Escultura`,
    Material: `Peça em mármore de Carrara`,
    Descricao: `Inicialmente foram instalados nos jardins da Praia de Botafogo e transferido para a Praça Paris.Escultura do felino em posição de ataque, como guardião do Chafariz.`,
    Execucao: true,
    DataInauguracao: `01/1910`,
    Latitude: `-22.9154769`,
    Longitude: `-43.1756772`,
};

export const MonumentoaoAlmiranteBarroso_JoseOtavioCorreaLima: Obra = {
    ID: 255,
    Artistas: [artistas.JoseOtavioCorreaLima],
    Titulo: `Monumento ao Almirante Barroso`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: 'marco',
    Material: 'Peça em bronze e pedestal de granito',
    Descricao:
        'Esta escultura de José Otávio Correa de Lima foi inaugurada na Praça Luís de Camões em 19 de novembro de 1909. Com as obras do Metrô, o monumento foi transferido para a Praça Paris, onde permaneceu desde então. Possui as seguintes legendas: “Riachuelo XI de junho de MDCCCLXV” e “Ao Almirante Barroso a nação”. Na base no monumento estão seus restos mortais. Essa pedra foi encontrada quando o monumento foi transferido da Praça Juares Tavola para a Praça Paris devido as obras do Metro. A pedra tem em baixo-relevo a seguinte inscrição: No dia 11 de junho de 1908, sendo presidente da República o Sr. Dr. Afonso Augusto Moreira Pena e ministro da Marinha o Exmo. Sr. Alexandrino de Alencar foi lançada esta pedra sobre a qual será erigido, por ordem do Exmo. Sr. Augusto Tavares de Lira, Ministro da Justiça e Negócios Interiores, de acordo com o Decreto nº 1697, de 10 de junho de 1907, o monumento ao Almirante Barroso e aos heróis da Batalha Naval de Riachuelo./ Este monumento foi inaugurado em 1909, na Praça Juarez Tavola, próxima ao Hotel Gloria. Com as obras do Metrô o monumento foi transferido para a Praça Paris onde se encontra desde então.O monumento descrito pelo Artistas: Sobre um pedestal em granito de Petrópolis assenta a estátua de Barroso, em bronze, com quatro metros de altura, representada em atitude triunfal, no passadiço de comando. No sopé da coluna, em cada face lateral, assentam duas figuras aladas simbolizando, respectivamente, na gênios da Pátria e da Vitória, sobre duas proas, tudo em bronze. À frente do pedestal, um grande baixo-relevo, com dois metros e quarenta de comprimento, por um metro de alto, representa a Batalha Naval de Riachuelo. Quatro medalhões, nos ângulos, perpetuam as efígies de Oliveira Pimentel, Pedro Afonso, Andrade Maia e Lima Barros, encadeando esses medalhões nove placas, na base, com os nomes dos vapores e dos intrépidos comandantes que formaram parte numa batalha. Ainda dois medalhões abaixo contém as efígies dos heróis Greenhalgh e Marcílio Dias',
    Execucao: true,
    DataInauguracao: `06/1908`,
    Latitude: `-22.9185545`,
    Longitude: `-43.1757581`,
    LatitudeRealocacao: '-22.918184',
    LongitudeRealocacao: '-43.1767396',
};

export const AmuradadoOuteirodaGloria_LucioCosta: Obra = {
    ID: 256,
    Artistas: [artistas.LucioCosta],
    Titulo: `Amurada do Outeiro da Glória`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `amurada`,
    Material: `Blocos de gnaisses`,
    Descricao: `Amurada construídacom a tecnica de pedra seca,idealizado em 1939, para a criação do Parque Municipal Lucio Costa, na subida da Igreja do Outeiro da Glória. É de material reutilizado,o granito maciço proveniente da demolição do cais do Flamengo, compondo10 platôs contíguos.`,
    Execucao: true,
    DataInauguracao: `01/1959`,
    Latitude: `-22.9205917`,
    Longitude: `-43.1754419`,
};

export const PlanoinclinadodoOuteirodaGloria_Desconhecida: Obra = {
    ID: 257,
    Artistas: [artistas.Desconhecida],
    Titulo: `Plano inclinado do Outeiro da Glória`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Construção`,
    Material: `Peça em concreto armado`,
    Descricao: `O plano inclinado foi construÌdo para possibilitar o acesso dos fieis ao conjunto urbano-paisagÌstico denominado Praça Nossa Senhora da Glória, ou Jardins do Outeiro da Glória. Foi totalmente reformado em 2003`,
    Execucao: true,
    DataInauguracao: `02/1944`,
    Latitude: `-22.9217808`,
    Longitude: `-43.1752466`,
};

export const SaoSebastiao_DanteCroce_CurzioZani_ArnaldoValilo: Obra = {
    ID: 258,
    Artistas: [artistas.DanteCroce, artistas.CurzioZani, artistas.ArnaldoValilo],
    Titulo: `São Sebastião`,
    Classificacao: 'perene',
    Categoria: 'sublimidade',
    TipologiaObra: `Escultura`,
    Material: `Peça em granito`,
    Descricao: `Monumento erguido pelo Instituto Histórico e Geográfico Brasileiro, por subscrição popular, paraos festejos relativos do Quarto Centanário da Cidade.
Na escultura foi utilizando o granito da pedreira do Alto da Boa Vista, o bloco pesava 20 toneladas e foi executado na marmoaria Nossa Senhora de Fátima tendo a imagem 7 metros e 30 centimetros.`,
    Execucao: true,
    DataInauguracao: `08/1965`,
    Latitude: `-22.9206872`,
    Longitude: `-43.1743128`,
};

export const Escoteiro_FernandoThauby: Obra = {
    ID: 260,
    Artistas: [artistas.FernandoThauby],
    Titulo: `Escoteiro`,
    Classificacao: 'perene',
    Categoria: 'personalidades',
    TipologiaObra: `estátua`,
    Material: `Peça em bronze com pedestal de granito`,
    Descricao: `A estátua representa um menino com o uniforme dos boys-scouts, segurando com sua mão direita, braço erguido a bandeira da Pátria Chilena e com a esquerda, o chapéu dos legionários do general Baden Powell. O boy-scout - segundo a concepção do autor - realizara uma longa caminhada para subir ao cume da serra, levando a bandeira de sua Pátria, e, ao chegar ao cimo descobre-se radiante.
O monumento foi uma doação des crianças do Chile, em agradecimento a colaboração do Brasil em socorro das vítimas do terremoto de Coquimbo e Atacama.
A estátua foifundida em 1915. Do molde original, foram tiradas duas cópias: uma delas estáno Rio, e asegunda encontra-se no Parque Metropolitano de Santiago.
Essa estátua serviu de modelo para o selo comemorativo do AcampamentoInternacional de Patrulhas, realizado em 1954, em São Paulo. Em março de 2009 teve a bandeira furtada.
Em maio de 2019, a escultura foi furtada.`,
    Execucao: true,
    DataInauguracao: `12/1923`,
    Latitude: `-22.921234`,
    Longitude: `-43.1736505`,
};

export const SaoFranciscodeAssiseSantaClara_EduardodeSa: Obra = {
    ID: 259,
    Artistas: [artistas.EduardodeSa],
    Titulo: `São Francisco de Assis e Santa Clara`,
    Classificacao: 'perene',
    Categoria: 'personalidades',
    TipologiaObra: `escultura`,
    Material: `Peça em bronze com pedestal de granito`,
    Descricao: `O monumento foi erguido por uma iniciativa do  Sr Amaro da Silveira, que doou a peça à Cidade, por ocasião  do 7º centenário da morte do Santo. É a representação de Santa Clara e São Francisco, em tamanho natural.
Representa São Francisco de Assis, sobre um pedestal de granito, de joelhos recitando o“Cântico do Sol”, tendo ao seu lado Santa Clara, orando. O conjunto é completado por quatro baixos-relevos, assinalando os principais episódios da vida do grande santo” As placas no pedestal não são originais. O Jornal do Brasil descreve oo furto das placas na edição de 10 de abril de 1963.`,
    Execucao: true,
    DataInauguracao: `10/1927`,
    Latitude: `-22.9213639`,
    Longitude: `-43.1734884`,
};

export const PisodePedeMolequenaRuaOrlandoRangel_Desconhecida: Obra = {
    ID: 262,
    Artistas: [artistas.Desconhecida],
    Titulo: `Piso de Pé de Moleque na Rua Orlando Rangel`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `piso`,
    Material: `Seixos e lascas de gnaisse`,
    Descricao: `O Morro de Guaratiba teve suas ruas abertas em 1875, homenageando Joaquim José Ferreira, detentor do título e grande benfeitor da Santa Casa de Misericórdia. Quase toda a rua teve o piso substituído por paralelepípedo regulares, restando esse pequeno trecho com o calçamento original.`,
    Execucao: true,
    DataInauguracao: ``,
    Latitude: `-22.923989`,
    Longitude: `-43.1757584`,
};
export const SemTitulo_ElisaBracher: Obra = {
    ID: 20,
    Titulo: `Sem Titulo`,
    Material: 'madeira',
    DataInauguracao: `1999`,
    DatasImportantes: [new Data(`1999`, 'inauguração- arte ambiente')],
    Propriedade: 'publica',
    Zona: 'Central',
    Bairro: 'Centro',
    Endereço: 'Itamaraty',
    Status: 'permanence no espaço publico',
    Fatos: [new Fato('', '', '', '', [], '')],
    Temporalidade: 'permanente',
    Eixo: 'sublimidade',
    Funcao: 'ornamental',
    Natureza: 'artística',
    Tipologia: 'escultura',
    Execucao: true,
};
export const ObeliscodoMemorialGetulioVargas_HenockdeAlmeida: Obra = {
    ID: 261,
    Artistas: [artistas.HenockdeAlmeida],
    Titulo: `Obelisco do  Memorial Getulio Vargas`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Obelisco`,
    Material: `Peça em concreto revestido por mármore`,
    Descricao: `O marco do memorial foi erguido sob um espelho d&rsquo;água. No centro do lago duas colunas se entrelaçam dando volume a construção. O Memorial situado no subsolo é constituído de um acervo sobre a vida pessoal de Getulio Vargas.`,
    Execucao: true,
    DataInauguracao: `08/2004`,
    Latitude: `-22.9212989`,
    Longitude: `-43.1735695`,
};

export const ChafarizdaGloria_JoseCustodiodeSaeFaria: Obra = {
    ID: 263,
    Artistas: [artistas.JoseCustodiodeSaeFaria],
    Titulo: `Chafariz da Glória`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Chafariz`,
    Material: `Pedra e tijolo com argamassa`,
    Descricao: `Chafariz colonial com cartela de mármore de lioz com inscrição latina. Foi executado por iniciativa do Marquês do Lavradio, junto à encosta do morro do Desterro, atual Santa Tereza. Em 1905, o Prefeito Pereira Passos imprimiu ao Chafariz algumas alterações, acrescentando um segundo muro na sua parte superior, sem prejudicar o monumento original. Mais antigo Chafariz do Rio de Janeiro.
Esse Chafariz pertence a Companhia Estadual de Águas e Esgotos e está em cessão de uso com a Gerencia de Monumentos e Chafarizes.`,
    Execucao: true,
    DataInauguracao: `01/1772`,
    Latitude: `-22.9184257`,
    Longitude: `-43.1771039`,
};

export const ChafarizdosGolfinhos_AndreRedont: Obra = {
    ID: 264,
    Artistas: [artistas.AndreRedont],
    Titulo: `Chafariz dos Golfinhos`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Chafariz`,
    Material: `Peça em argamassa`,
    Descricao: `O Chafariz é composto por quatro golfinhos laterais, um jorro névoa ( de 3 metros) e outro central, com cerca de douze metos de altura. São inspirados aos existentes no jardim do Palácio de Versailles, projetado pelo arquiteto paisagista da equipe de Alfred Agache.
Esta desativado desde maio de 2017.`,
    Execucao: true,
    DataInauguracao: `01/1929`,
    Latitude: `-22.9160074`,
    Longitude: `-43.1759671`,
};

export const ChafarizdeSaoSebastiao_Desconhecida: Obra = {
    ID: 266,
    Artistas: [artistas.Desconhecida],
    Titulo: `Chafariz de São Sebastião`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Chafariz`,
    Material: `Peça em concreto`,
    Descricao: `O Chafariz com jorro de água no entorno da imagem de São Sebastião foi executado para valorizar a imagem do padroeiro da Cidade.
Esta desativado desde maio de 2017.`,
    Execucao: true,
    DataInauguracao: `07/1972`,
    Latitude: `-22.9213639`,
    Longitude: `-43.1734884`,
};

export const Cuauhtemoc_MiguelNoreña: Obra = {
    ID: 268,
    Artistas: [artistas.MiguelNoreña],
    Titulo: `Cuauhtemoc`,
    Classificacao: 'perene',
    Categoria: 'personalidades',
    TipologiaObra: `Escultura`,
    Material: `Peça em bronze e pedestal de granito`,
    Descricao: `Monumento doado pelo governo do México, como parte das comemorações do Centenário da Independência (1922), à cidade do Rio de Janeiro. Foi inaugurado na data nacional mexicana.
O conjunto com aescultura e pedestal com serpentes estilizadas e baixos relevos, que invocam a mitologia Asteca é talvez um dos primeiros elementos Art-Déco a ser instalado em nossa cidade, numa época onde ainda predominava o eclético e o estilo neo-colonial. Trata-se de uma réplica da original deCarlos Obregon Santacília.`,
    Execucao: true,
    DataInauguracao: `09/1922`,
    Latitude: `-22.9372812`,
    Longitude: `-43.1730611`,
};

export const OHiggins_CaroccabaThor: Obra = {
    ID: 269,
    Artistas: [artistas.CaroccabaThor],
    Titulo: `O'Higgins`,
    Classificacao: 'perene',
    Categoria: 'personalidades',
    TipologiaObra: `estátua`,
    Material: `Peça em bronze com pedestal de granito`,
    Descricao: `O presente a Cidade do Rio de Janeiro pelo Chile pelos 400 anos da cidade, foi inaugurado dois anos depois, em março de 1967, A cerimônia foi presidida pelo governador Negrão de Lima,Foi inaugurado na
    Avenida Chile, no canteiro central, posteriormente foi transferida para um canteiro laterial em 23 de maio de 1996 e finalmente em 17 de janeiro de 2007 foi inaugurado nesse local.
Doado a cidade do Rio de Janeiro pelo governo do Chile por ocasião do seu IV Centenário da fundação da Cidade.
Estátua com a figura do homenageado com uma farda chilena tendo na direita uma espera e na esquerda uma folha de papel. A estátua esta sobre um pedestal de concreto revertido em granito cinza.`,
    Execucao: true,
    DataInauguracao: `03/1967`,
    Latitude: `-22.9369399`,
    Longitude: `-43.1734655`,
};

export const AnimaisMetalicos_JorgeMarioJauregui: Obra = {
    ID: 275,
    Artistas: [artistas.JorgeMarioJauregui],
    Titulo: `Paineis Metálicos de Animais`,
    Classificacao: 'perene',
    Categoria: 'sublimidade',
    TipologiaObra: `Painel`,
    Material: `Peças em metal`,
    Descricao: `Peças representando animais recortados fixadas ao longo de um mural. Foi instalado no Projeto Rio Cidade na área de lazer infantil.`,
    Execucao: true,
    DataInauguracao: `03/1996`,
    Latitude: `-22.9335874`,
    Longitude: `-43.1775003`,
    Fatos: [new Fato('', '', 'Propriedade', 'Pública', [], 'Rio de Janeiro')],
};

export const ChafarizdoRiachuelo_JoaoCoelhoMarinho: Obra = {
    ID: 99,
    Artistas: [artistas.JoaoCoelhoMarinho],
    Titulo: `Chafariz do Riachuelo`,
    Material: 'gnaisse e argamassa',
    DataInauguracao: `01/1817`,
    DatasImportantes: [new Data(`01/1817`, 'data de inauguração')],
    Propriedade: 'publica',
    Zona: 'Central',
    Bairro: 'Centro',
    Endereço: 'Rua Riachuelo',
    Latitude: `-22.9149532`,
    Longitude: `-43.1863947`,
    Base: 'sem pedestal',
    Status: 'permanece no espaço público',
    Descricao: `Construção de forma trapezoidal, com corpo central composto de 2duas pilastras
    laterais ligado pela simples moldura dos seus capitéis. No centro, na parede de alvenaria um
    quadrado de pedra. Na parte inerior um tanque de gnaisse é dividido em 3 compartimentos. Foi
    construído pelo Intendente Paulo Fernandes Viana. tem a característica rara a inscrição, em
    português e letras de bronze, ter sido implantada diretamente na pedra, com os dizeres "O Rei
    por bem do seu povo m. f. e. o. mandou fazer esta obra pela Polícia.`,
    Fatos: [new Fato('', '', 'bem tombado federal', '', [], '')],
    Temporalidade: 'permanente',
    Eixo: 'plasticidade',
    Funcao: 'utilitária',
    Natureza: 'equipamento urbano',
    Tipologia: 'chafariz',
    Execucao: true,
};

export const JosedeAlencar_RodolfoBernadelli: Obra = {
    ID: 274,
    Artistas: [artistas.RodolfoBernadelli],
    Titulo: `José de Alencar`,
    Classificacao: 'perene',
    Categoria: 'personalidades',
    TipologiaObra: `estátua`,
    Material: `Peça em bronze e pedestal de granito`,
    Descricao: `O monumento apresenta José de Alencar sentado e em tamanho natural. Em seu pedestal foram embutidos medalhões em baixos relevos representando cenas extraídas dos romances: O Guarany, o Gaúcho, o Sertanejo e Iracema. A obra foi uma iniciativa do jornalista Ferreira de Araujo.`,
    Execucao: true,
    DataInauguracao: `05/1897`,
    Zona: 'Sul',
    Bairro: 'Catete',
    PontoDeReferencia: 'Praça José de Alencar',
    Latitude: `-22.9325975`,
    Longitude: `-43.1775974`,
};

export const MarcoaoRioCarioca_JorgeMarioJauregui: Obra = {
    ID: 276,
    Artistas: [artistas.JorgeMarioJauregui],
    Titulo: `Marco ao Rio Carioca`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Marco`,
    Material: `Peça em concreto revestido por mármore`,
    Descricao: `Marco construído para identificar no bairro o trajeto subterrâneo do Rio Carioca, que deu origem a cidade.`,
    Execucao: true,
    DataInauguracao: `03/1996`,
    Latitude: `-22.9329027`,
    Longitude: `-43.1773299`,
};

export const GagoCoutinho_Desconhecida: Obra = {
    ID: 271,
    Artistas: [artistas.Desconhecida],
    Titulo: `Gago Coutinho`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Monolito`,
    Material: `Peça em bronze com pedestal de granito`,
    Descricao: `Gago Coutinho esta homenageado em um simplorio bloco de granito bruto com uma plca em bronze com a imagem de seu avião e inscrição de seu feito personalidades.<a primeira travessia aérea do Atlantico.<`,
    Execucao: true,
    DataInauguracao: `01/1969`,
    Latitude: `-22.93105`,
    Longitude: `-43.1794419`,
};

export const CoretodaPracaSaoSalvador_JorgeMarioJauregui: Obra = {
    ID: 278,
    Artistas: [artistas.JorgeMarioJauregui],
    Titulo: `Coreto da Praça São Salvador`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Construção`,
    Material: `Madeira com telhas de barro`,
    Descricao: `Pequena construção quadrada composta quatro pilares de madeira sustentando uma cobertura de telhas. Atualmente o coreto não tem mais telhas e sim a folhagem de uma bouganville.`,
    Execucao: true,
    DataInauguracao: `09/1995`,
    Latitude: `-22.9338681`,
    Longitude: `-43.1804842`,
};

export const ChafarizdoLargodoMachado_Desconhecida: Obra = {
    ID: 280,
    Artistas: [artistas.Desconhecida],
    Titulo: `Chafariz do Largo do Machado`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Chafariz`,
    Material: `Peça em granito`,
    Descricao: `O Chafariz, com jorro de água circular, foi inaugurado posteriormente à colocação da imagem de Nossa Senhora da Imaculada Conceição para embelezar o monumento a Nossa Senhora da Conceição.`,
    Execucao: true,
    DataInauguracao: `01/1967`,
    Latitude: `-22.9304186`,
    Longitude: ``,
};

export const LaminaLargaemTorcaonoEspaco_FranzWeissmann: Obra = {
    ID: 330,
    Artistas: [artistas.FranzWeissmann],
    Titulo: `Lamina Larga em Torção no Espaço`,
    Material: 'aço',
    DataInauguracao: `1980`,
    DatasImportantes: [new Data(`19802`, 'data de inauguração')],
    Propriedade: 'particular',
    Zona: 'Sul',
    Bairro: 'Botafogo',
    Endereço: 'Avenida Pasteur, 1954',
    Base: 'sem pedestal',
    Status: 'removido do espaço público',
    Fatos: [new Fato('data', 'data', 'fato', 'descrição', [], 'cidade')],
    Temporalidade: 'permanente',
    Eixo: 'sublimidade',
    Funcao: 'ornamental',
    Natureza: 'artística',
    Tipologia: 'escultura',
    Execucao: true,
};

export const PabloNeruda_Desconhecida: Obra = {
    ID: 285,
    Artistas: [artistas.Desconhecida],
    Titulo: `Pablo Neruda`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Monolito`,
    Material: `Bloco de granito`,
    Descricao: `Monumento simplorio de granito bruto com uma placa de bronze em homenagem ao poeta chileno.`,
    Execucao: true,
    DataInauguracao: `11/2004`,
    Latitude: `-22.9427818`,
    Longitude: `-43.1806966`,
};

export const StuartAngel_EdgarDuvivier: Obra = {
    ID: 297,
    Artistas: [artistas.EdgarDuvivier],
    Titulo: `Stuart Angel`,
    Classificacao: 'perene',
    Categoria: 'personalidades',
    TipologiaObra: `busto`,
    Material: `Peça em bronze com pedestal revestido de granito`,
    Descricao: `A homenagem foi erguida por iniciativa da família e pelo Clube de Engenharia que o doou à cidade.`,
    Execucao: true,
    DataInauguracao: `08/2015`,
    Latitude: `-22.9514374`,
    Longitude: `-43.1750941`,
};

export const RuiBarbosa_RodolfoPintodoCouto: Obra = {
    ID: 105,
    Titulo: `Rui Barbosa`,
    Material: 'mármore',
    DataInauguracao: `1933`,
    DatasImportantes: [new Data(`1933`, 'data de inauguração')],
    Propriedade: 'publica',
    Zona: 'Sul',
    Bairro: 'Botafogo',
    Endereço: 'Rua São Clemente, 134- Casa de Rui Barbosa',
    Base: 'com pedestal',
    Status: 'permanece no espaço público',
    Fatos: [new Fato('', '', '', '', [], '')],
    Temporalidade: 'permanente',
    Eixo: 'narratividade',
    Funcao: 'referencial',
    Natureza: 'civico',
    Tipologia: 'busto',
    Execucao: true,
};

export const AmorMaterno_JoaoJacoParana: Obra = {
    ID: 306,
    Artistas: [artistas.JoaoJacoParana],
    Titulo: `Amor Materno`,
    Classificacao: 'perene',
    Categoria: 'sublimidade',
    TipologiaObra: `Escultura`,
    Material: `Peça em bronze`,
    Descricao: `Escultura de uma figura feminina representando uma mãe segurando o seu filho, num gesto de carinho e dedicação.`,
    Execucao: true,
    DataInauguracao: `01/1971`,
    Latitude: `-22.9425809`,
    Longitude: `-43.1740014`,
};

export const MuralCorcovado_Desconhecida: Obra = {
    ID: 307,
    Artistas: [artistas.Desconhecida],
    Titulo: `Mural Corcovado`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Monolito`,
    Material: `Peça em concreto`,
    Descricao: `Construido pelo Rotary Club de Botafogo, tinha inicialmente o simbolo do Clube de Serviço, mas foi retirado ficando um marco do Pão de Açucar como e visto da Praia de Botafogo.`,
    Execucao: true,
    DataInauguracao: `01/2000`,
    Latitude: `-22.9491627`,
    Longitude: `-43.1806221`,
};

export const AmuradadaAvenidaLauroSodre_Desconhecida: Obra = {
    ID: 308,
    Artistas: [artistas.Desconhecida],
    Titulo: `Amurada da Avenida Lauro Sodré`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Amurada`,
    Material: `Bloco de granito`,
    Descricao: `Construídacom a tecnica de pedra seca<strong>, para a abertura da Avenida Carlos Peixoto, realizada para o contorno da encosta do morro no limite do Parque Estadual do Chacrinha.`,
    Execucao: true,
    DataInauguracao: `01/1959`,
    Latitude: `-22.9573498`,
    Longitude: `-43.1775392`,
};

export const ChafarizdoAlmiranteTamandare_Desconhecida: Obra = {
    ID: 310,
    Artistas: [artistas.Desconhecida],
    Titulo: `Chafariz do Almirante Tamandaré`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Chafariz`,
    Material: `Concreto armado`,
    Descricao: `O lago e o Chafariz no entorno do Monumento Tamandaré foi construido nos anos de 1960. <É um Chafariz de jorro de água vertical nas extremidades e no meio do lago. Desativado desde o ano de 2014`,
    Execucao: true,
    DataInauguracao: ``,
    Latitude: `-22.9414676`,
    Longitude: `-43.1774591`,
};

export const ChafarizEstrela_Desconhecida: Obra = {
    ID: 312,
    Artistas: [artistas.Desconhecida],
    Titulo: `Chafariz Estrela`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Chafariz`,
    Material: `Concreto armado`,
    Descricao: `Foi implantado na gestão do Prefeito Prado Junior., com um jorro central e outros na extremidade para formar um flor quando em funcionamento. Provavelmente reformado e hoje conhecido como estrela.
O Chafariz esta desativado desde maio de 2017.`,
    Execucao: true,
    DataInauguracao: `06/1929`,
    Latitude: `-22.9432488`,
    Longitude: `-43.1810646`,
};

export const AbrahanMedina_Desconhecida: Obra = {
    ID: 314,
    Artistas: [artistas.Desconhecida],
    Titulo: `Abrahan Medina`,
    Classificacao: 'perene',
    Categoria: 'personalidades',
    TipologiaObra: `Busto`,
    Material: `Peça em bronze com pedestal revestido de granito`,
    Descricao: `A homenagem para lembrar o carioca entusiasta que promoveu e valorizou a cidade.`,
    Execucao: true,
    DataInauguracao: `01/1996`,
    Zona: 'Sul',
    Bairro: 'Copacabana',
    PontoDeReferencia: 'Av. Atlântica',
    Latitude: `-22.986188`,
    Longitude: `-43.188913`,
    Lugar: 'Calçadão',
    Fatos: [
        new Fato('1999', '1999', 'Furto', 'O óculos da obra foi roubado', [], 'Rio de Janeiro'),
        new Fato('', '', 'Propriedade', 'Pública', [], 'Rio de Janeiro'),
        new Fato('', '', 'Fundição/Atelier', "Porão d'Arte", [], 'Rio de Janeiro'),
        new Fato('', '', 'Doação', 'Obra doada à cidade', [], 'Rio de Janeiro'),
        new Fato('', '', 'Homenagem', 'Homenagem dos amigos', [], 'Rio de Janeiro'),
    ],
};

export const EmbocaduradoTunelNovo_Desconhecida: Obra = {
    ID: 315,
    Artistas: [artistas.Desconhecida],
    Titulo: `Embocadura do Túnel Novo`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Construção`,
    Material: `Bloco de granito`,
    Descricao: `As embocaduras foram construídas em placas de granito cobrindo a fachada natural da construção, no trecho de Botafogo e de Copacabana. O túnel está situado sob o morro da Babilônia, entre os bairros de Botafogo (atual Av. Lauro Sodré) e de Copacabana (atual Av. Princesa Isabel). `,
    Execucao: true,
    DataInauguracao: `01/1951`,
    Latitude: `-22.9585127`,
    Longitude: `-43.1772141`,
};

export const AryBarrosoI_EdsonJannuzzi: Obra = {
    ID: 316,
    Artistas: [artistas.EdsonJannuzzi],
    Titulo: `Ary Barroso I`,
    Classificacao: 'perene',
    Categoria: 'personalidades',
    TipologiaObra: `busto`,
    Material: `Peça em bronze com pedestal de mármore`,
    Descricao: `A homenagem foi uma iniciativa da Banda do Leme, ao famoso compositor, que residia no Leme.`,
    Execucao: true,
    DataInauguracao: `04/1974`,
    Latitude: `-22.9645475`,
    Longitude: `-43.1722902`,
};

export const MarechalRamonCastilho_Desconhecida: Obra = {
    ID: 296,
    Imagem: 'MarechalRamonCastilho_Desconhecida.jpg',
    Artistas: [artistas.Desconhecida],
    Titulo: `Marechal Ramón Castilho`,
    Classificacao: 'perene',
    Categoria: 'personalidades',
    TipologiaObra: `Busto`,
    Material: `Peça em bronze e pedestal de granito`,
    Descricao: `CCR - Busto acadêmico com vestimenta típica de seu posto. Foi doado pelo Senado do Peru à Cidade do Rio de Janeiro,
    em comemoração ao centenário da libertação dos escravos no Brasil, daquele que primeiro libertou os escravos no continente
    americano`,
    Execucao: true,
    DataInauguracao: `12/1988`,
    Zona: 'Sul',
    Bairro: 'Botafogo',
    PontoDeReferencia: 'R. Marechal Ramon Castilho',
    Latitude: `-22.956468`,
    Longitude: `-43.176032`,
    Fatos: [new Fato('', '', 'Propriedade', 'Pública', [], 'Rio de Janeiro')],
};

export const CarlosDrummonddeAndrade_LeoSantana: Obra = {
    ID: 318,
    Imagem: 'CarlosDrummonddeAndrade_LeoSantana.jpg',
    Artistas: [artistas.LeoSantana],
    Titulo: `Carlos Drummond de Andrade`,
    Classificacao: 'perene',
    Categoria: 'personalidades',
    TipologiaObra: `Estátua`,
    Material: `Peça em bronze`,
    Descricao: `O monumento foi instalado em comemoração ao centenário do nascimento do poeta.
A criação foi inspirada numa foto tirada pelo fotógrafo Rogério Reis. O poeta está sentado no banco em frente à Avenida Rainha
Elizabet, voltado para a cidade e de costas para o mar.`,
    Execucao: true,
    DataInauguracao: `10/2002`,
    Zona: 'Sul',
    Bairro: 'Copacabana',
    PontoDeReferencia: 'Avenida Atlantica, em frente a Avenida Rainha Elizabeth',
    Latitude: `-22.9844361`,
    Longitude: `-43.1891361`,
    Fatos: [new Fato('', '', 'Propriedade', 'Pública', [], 'Rio de Janeiro')],
};

export const DorivalCaymmi_OttoDumovich: Obra = {
    ID: 319,
    Imagem: 'DorivalCaymmi_OttoDumovich.jpg',
    Artistas: [artistas.OttoDumovich],
    Titulo: `Dorival Caymmi`,
    Classificacao: 'perene',
    Categoria: 'personalidades',
    TipologiaObra: `Estátua`,
    Material: `Peça em bronze`,
    Descricao: `A homenagem à Dorival Caymmi foi uma solicitação da família à Prefeitura da Cidade, inspirada numa fotografia de
    Evandro Teixeira, em Ipanema.`,
    Execucao: true,
    DataInauguracao: `12/2008`,
    Zona: 'Sul',
    Bairro: 'Copacabana',
    PontoDeReferencia: 'Avenida Atlantica, posto 6',
    Latitude: `-22.9858274`,
    Longitude: `-43.1888194`,
    Fatos: [
        new Fato('', '', 'Propriedade', 'Pública', [], 'Rio de Janeiro'),
        new Fato('', '', 'Fundição/Atelier', 'Fundição Hammes Ltda - Itamar', [], 'Rio de Janeiro'),
    ],
};

export const IbrahimSued_MarcosAndreSales: Obra = {
    ID: 320,
    Imagem: 'IbrahimSued_MarcosAndreSales.jpg',
    Artistas: [artistas.MarcosAndreSales],
    Titulo: `Ibrahim Sued`,
    Classificacao: 'perene',
    Categoria: 'personalidades',
    TipologiaObra: `Estátua`,
    Material: `Peça em bronze`,
    Descricao: `A homenagem foi iniciativa de sua filha e realizada por subscrição de seus amigos jornalistas. Foi uma doação à
    Cidade. A inauguração contou com a presença do Prefeito Cesar Maia e o neto de Ibrahim agradeceu a homenagem.`,
    Execucao: true,
    DataInauguracao: `09/2004`,
    Zona: 'Sul',
    Bairro: 'Copacabana',
    PontoDeReferencia: 'Avenida Atlantica, próximo ao Copacabana Palace',
    Latitude: `-22.967595`,
    Longitude: `-43.1786041`,
    Fatos: [
        new Fato('', '', 'Propriedade', 'Pública', [], 'Rio de Janeiro'),
        new Fato('', '', 'Fundição/Atelier', 'Zani Fundição Artística E Metalúrgica Ltda.', [], 'Rio de Janeiro'),
    ],
};

export const MarechalCasteloBranco_DanteCroce: Obra = {
    ID: 321,
    Artistas: [artistas.DanteCroce],
    Titulo: `Marechal Castelo Branco`,
    Classificacao: 'perene',
    Categoria: 'personalidades',
    TipologiaObra: `estátua`,
    Material: `Peça em bronze com pedestal de granito`,
    Descricao: `A homenagem foi uma iniciativa  do governo do Estado. A saudação foi feita pelo governador Chagas Freitas, que destacou a personalidade do ex-presidente e disse que “o povo e o governo cariocas resgatam uma divida.`,
    Execucao: true,
    DataInauguracao: `05/1974`,
    Latitude: `-22.9623683`,
    Longitude: `-43.1653128`,
};

export const CoelhoCintra_LaurindoRamos: Obra = {
    ID: 323,
    Artistas: [artistas.LaurindoRamos],
    Titulo: `Coelho Cintra`,
    Classificacao: 'perene',
    Categoria: 'personalidades',
    TipologiaObra: `busto`,
    Material: `Peça em bronze com pedestal de granito`,
    Descricao: `O monumento é uma homenagem ao Pai de Copacabana, dos moradores do bairro,por ocasião do centenário da urbanização do bairro, em 1892. Inicialmente foi instalado nesse local, em 1996 foi transferido para a Avenida Lauro Sodre, onde permaneceu até junho de 2006, quando retornou para a Avenida Princesa Isabel, por solicitação da família.`,
    Execucao: true,
    DataInauguracao: `01/1958`,
    Latitude: `-22.9618369`,
    Longitude: `-43.1750678`,
};

export const PrincesaIsabel_EdgarDuvivier: Obra = {
    ID: 324,
    Imagem: 'PrincesaIsabel_EdgarDuvivier.jpg',
    Artistas: [artistas.EdgarDuvivier],
    Titulo: `Princesa Isabel`,
    Classificacao: 'perene',
    Categoria: 'personalidades',
    TipologiaObra: `Estátua`,
    Material: `Peça em bronze com pedestal de mármore`,
    Descricao: `Estátua em bronze inspirada numa fotografia, onde a princesa tem na mão uma pena como se estivesse acabando de
    assinar a Lei Áurea a na outra um gesto solto. A confecção da escultura foi solicitada ao prefeito`,
    Altura: '250 cm',
    Execucao: true,
    DataInauguracao: `13/05/2003`,
    PontoDeReferencia: 'Avenida Princesa Isabel',
    Latitude: `-22.9651773`,
    Longitude: `-43.1733377`,
    Fatos: [
        new Fato('', '13/05/2003', 'Inauguração', 'Estátua foi inaugurada em comemoração aos 115 anos da Abolição da Escravatura', [], 'Rio de Janeiro'),
        new Fato(
            '',
            '',
            'Solicitação',
            'A solicitação do monumento partiu de Marilda de Sá, da Associação das Mulheres Empresárias que achavam injusto a princesa não ter sido homenageada naquela avenida. A confecção da escultura foi solicitada ao prefeito',
            [],
            'Rio de Janeiro',
        ),
        new Fato('', '', 'Fundição/ Atelier', 'Zani Fundição Artística E Metalúrgica Ltda.', [], 'Rio de Janeiro'),
        new Fato('', '', 'Propriedade', 'Pública', [], 'Rio de Janeiro'),
        new Fato('', '01/08/2018', 'Furto', '', [], 'Rio de Janeiro'),
    ],
};

export const RodolfoeHenriqueBernadelliosIrmaosBernadelli_HildegardoLeaoVeloso: Obra = {
    ID: 326,
    Artistas: [artistas.HildegardoLeaoVeloso],
    Titulo: `Rodolfo e Henrique Bernadelli, os Irmãos Bernadelli`,
    Classificacao: 'perene',
    Categoria: 'personalidades',
    TipologiaObra: `busto`,
    Material: `Peça em bronze com pedestal revestido de granito`,
    Descricao: `É uma dupla homenagem aos irmãos Rodolfo e Henrique Bernadelli no centenario de Rodolfo. A praça foi escolhida porque nesse local viveram e trabaharam os artistas.`,
    Execucao: true,
    DataInauguracao: `09/1952`,
    Latitude: `-22.96598`,
    Longitude: `-43.1754945`,
};

export const SarahKubitschek_MarliMazeredo: Obra = {
    ID: 327,
    Imagem: 'SarahKubitschek_MarliMazeredo.jpg',
    Artistas: [artistas.MarliMazeredo],
    Titulo: `Sarah Kubitschek`,
    Classificacao: 'perene',
    Categoria: 'personalidades',
    TipologiaObra: `Busto`,
    Material: `Peças em bronze e resina`,
    Descricao: `O monumento tem o busto de Sara envolto num semicírculo em resina e mármore. Foi uma iniciativa da Associação
    Cultural Sara Kubitschek em homenagem a sua patrona.`,
    Execucao: true,
    DataInauguracao: `06/1999`,
    Zona: 'Sul',
    Bairro: 'Copacabana',
    PontoDeReferencia: 'Praça Sara Kubitschek',
    Latitude: `-22.9796065`,
    Longitude: `-43.1910441`,
    Fatos: [new Fato('', '', 'Propriedade', 'Pública', [], 'Rio de Janeiro'), new Fato('', '', 'Fundição/Atelier', 'Atelier Mazeredo', [], 'Rio de Janeiro')],
};

export const SerzedeloCorreia_RodolfoBernadelli: Obra = {
    ID: 328,
    Artistas: [artistas.RodolfoBernadelli],
    Titulo: `Serzedelo Correia`,
    Classificacao: 'perene',
    Categoria: 'personalidades',
    TipologiaObra: `busto`,
    Material: `Peça em bronze com pedestal de granito`,
    Descricao: `A homenagem foi em reconhecimento ao engenheiro do governo do Prefeito Pereira Passos. Foi uma iniciativa dos dos moradores de Copacabana.`,
    Execucao: true,
    DataInauguracao: `11/1910`,
    Latitude: `-22.9687313`,
    Longitude: `-43.1839672`,
};

export const TenenteSiqueiraCampos_AoLevantedos18doForte_JoseRangel: Obra = {
    ID: 329,
    Artistas: [artistas.JoseRangel],
    Titulo: `Tenente Siqueira Campos -  Ao Levante dos 18 do Forte.`,
    Classificacao: 'perene',
    Categoria: 'personalidades',
    TipologiaObra: `estátua`,
    Material: `Peça em bronze e mural  de granito`,
    Descricao: `O monumento é o reconhecimento "Aos 18 combatentes" , sairam em marcha pela Avenida Atlântica. A estátua em bronze representa Siqueira Campos no momento que foi alvejado por um tiro.
Foi inaugurado em 20 de setembro de 1959 na Praça Eugênio Jardim e reinaugurado na Avenida Atlântica em 05 de julho de 1974.`,
    Execucao: true,
    DataInauguracao: `07/1974`,
    Latitude: `-22.9709691`,
    Longitude: `-43.1833224`,
};

export const SiqueiraCamposnoFortedeCopacabana_HBertazzoni: Obra = {
    ID: 330,
    Artistas: [artistas.HBertazzoni],
    Titulo: `Siqueira Campos no Forte de Copacabana`,
    Classificacao: 'perene',
    Categoria: 'personalidades',
    TipologiaObra: `Busto`,
    Material: `Peça em bronze e pedestal de granito`,
    Descricao: `Pequena homenagem a um dos principais personagens do Levante dos 18 do Forte de 1922.O busto de Siqueira Campos estava inicialmente instalado na Avenida Atlântica em frente a um cassino e sua transferência para a praça Eugenio Franco foi sugerida pelo Coronel Mario Hermes. No dia da inauguração do marco comemorativo aos dois levantes de 05 de Julho, o busto de Siqueira Campos foi transferido para a praça Eugenio Franco.`,
    Execucao: true,
    DataInauguracao: `07/1937`,
    Latitude: `-22.9865518`,
    Longitude: `-43.18798`,
};

export const ViscondedoRioBranco_FelixMauriceCharpentier: Obra = {
    ID: 331,
    Artistas: [artistas.FelixMauriceCharpentier],
    Titulo: `Visconde do Rio Branco`,
    Classificacao: 'perene',
    Categoria: 'personalidades',
    TipologiaObra: `estátua`,
    Material: `Peças e alegorias em bronze e pedestal de granito`,
    Descricao: `No monumento, o visconde se encontra sentado e veste o uniforme de senador do Império. O braço direito descansa em dois livros - A convenção de 20 de fevereiro, obra sua, de 1871, da Coleção de Leis do Brasil.
As peças em bronze foram modeladas e fundidas em Paris. Foi inaugurada na praça da Glória, nas proximidades da base do Outeiro e nessa praça em 1996. 
O monumento foi erguido por subscrição publica com a iniciativa a cargo da Viscondessa.
Tem sete metros de altura, sendo de dois metros de altura da estátua em bronze. O pedestal mede 3,35 metros. O Visconde está sentado e veste o uniforme de Senador do Império. O braço direito descansa em dois livros  A Convenção de 20 de fevereiro, obra sua, de diplomata e de estadista, e o volume de 1871, da  Coleção de Leis do Brasil. No chão, encostada à cadeira, vê-se uma pasta de papéis, com o dístico: _ Presidente do Conselho de Ministros.O pedestal é de Pedra da Boloye e está assentado sobre uma base de granito brasileiro.Na frente há em bronze uma figura de mulher representando a história. Ela traz escrita, numa tábua, de bronze, as palavras latinas, dos Anais de Tácito e está em atitude de quem as lê. A mão direita sustenta um estilete.`,
    Execucao: true,
    DataInauguracao: `05/1902`,
    Latitude: ``,
    Longitude: ``,
};

export const ComendadorPeixoto_HonorioPecanha: Obra = {
    ID: 332,
    Artistas: [artistas.HonorioPecanha],
    Titulo: `Comendador Peixoto`,
    Classificacao: 'perene',
    Categoria: 'personalidades',
    TipologiaObra: `efígie`,
    Material: `Bloco de granito com placa de bronze`,
    Descricao: `No singelo monumento de granito bruto tem uma placa fixada a efígiedo Comendador e uma outra alusivaàssuas doações à Cidade.`,
    Execucao: true,
    DataInauguracao: `12/1944`,
    Latitude: `-22.9674093`,
    Longitude: `-43.1896705`,
};

export const EdmundoBittencourt_HildegardoLeaoVeloso: Obra = {
    ID: 333,
    Artistas: [artistas.HildegardoLeaoVeloso],
    Titulo: `Edmundo Bittencourt`,
    Classificacao: 'perene',
    Categoria: 'personalidades',
    TipologiaObra: `Busto`,
    Material: `Peça em bronze e pedestal de granito`,
    Descricao: `O monumento foi erguido por Iniciativa de um grupo de admiradores`,
    Execucao: true,
    DataInauguracao: `05/1951`,
    Zona: 'Sul',
    Bairro: 'Copacabana, Bairro Peixoto',
    PontoDeReferencia: 'Praça Edmundo Bittencourt',
    Latitude: `-22.9665292`,
    Longitude: `-43.1903542`,
    Fatos: [
        new Fato(
            '',
            '',
            'Comissão de homenagem',
            'Conferenciaram com o Prefeito Carlos Vital os membros da Comissão que dá apoio a homenagem, composto pelo ministro Horácio Laffer, jornalistas Herbert Moses, João da Silveira, Octávio Gualberto, Pedro Brandão e Chermont de Brito. O prefeito colocou todos os recursos da municipalidade ao dispor da comissão visitante.',
            [],
            'Rio de Janeiro',
        ),
    ],
};

export const Einstein_HonorioPecanha: Obra = {
    ID: 334,
    Artistas: [artistas.HonorioPecanha],
    Titulo: `Einstein`,
    Classificacao: 'perene',
    Categoria: 'personalidades',
    TipologiaObra: `cabeça`,
    Material: `Peça em bronze e pedestal de gnaisse`,
    Descricao: `O monumento foi inaugurado nocentenário do nascimentode Albert Einstein, por iniciativa daLoja Albert Einstein  de b&rsquo;Nai  de B&rsquo;Ricth do Brasil. O ato foi prescedido de uma benção ecunemica com os religiosos Dom Estevão Bittencourt, Partos Nehemias Marien e o Rabino Nersod Benesay. O descerraemnto foi feito por representantes diplomático de Israel e Alemanha.`,
    Execucao: true,
    DataInauguracao: `07/1979`,
    Latitude: `-22.9670196`,
    Longitude: `-43.1895441`,
};

export const ArcosdoLeme_Desconhecida: Obra = {
    ID: 335,
    Artistas: [artistas.Desconhecida],
    Titulo: `Arcos do Leme`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Construção`,
    Material: `Blocos de gnaisses`,
    Descricao: `São dois arcos de 5 ( cinco) metros de altura e 3 ( tres) metros de largura,executado em pedras numa mistura de cal e resíduos de óleo de baleia.
Localizado no alto dos Morros a Babilônia e São João, a fortificação do Reduto do Leme foi construída no governo do segundo Marques do Lavradio, entre 1769 e 1779, para tentar impedir a passagem de tropas inimigas que, se conseguisse desembarcar nos areais da Praia de Copacabana, procurasse atingir o centro do Rio de Janeiro através do Morro.
Nesta mesma época, o Marques, com medo de invasões francesas, também mandou edificar o Forte do Vigia, no Morro do Vigia, que se transformaria mais tarde no Forte do Leme.  Outra função da fortificação do Morro da Babilônia era servir como posto de observação da movimentação de embarcação pela costa de Copacabana.
No alto do morro havia um sinaleiro que tinha como tarefa avisar aos outros fortes da cidade da chegada ou aproximação de embarcações suspeitas.`,
    Execucao: true,
    DataInauguracao: ``,
    Latitude: `-22.960829`,
    Longitude: `-43.1787305`,
};

export const MosaicodePedraPortuguesadeCopacabana_RobertoBurleMarx: Obra = {
    ID: 336,
    Artistas: [artistas.RobertoBurleMarx],
    Titulo: `Mosaico de Pedra Portuguesa de Copacabana`,
    Classificacao: 'perene',
    Categoria: 'sublimidade',
    TipologiaObra: `piso`,
    Material: `Pedras portuguesas`,
    Descricao: `Mosaico pensado como um painel continuo,maior mosaico do Mundo,com 4110 metros de extensao, em desenho abstrato, nas cores preta, branca e vermelha, simbolizando as três etnias que formaram o povo brasileiro. O paisagismo agrupa arvores em conjuntos. O trabalho incorpora a figura tradicional das ondas que simboliza o bairro.`,
    Execucao: true,
    DataInauguracao: `01/1971`,
    Latitude: `-22.9652669`,
    Longitude: `-43.1739101`,
};

export const CalcadadaFama_Desconhecida: Obra = {
    ID: 337,
    Artistas: [artistas.Desconhecida],
    Titulo: `Calçada da Fama`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `piso`,
    Material: `Peça em granito`,
    Descricao: `São placas de granito preto na forma de uma estrela com o nome do homenageado gravado em baixo relevo. Foram fixadas a principio 15 personalidades do bairro. Trata-se de uma iniciativa dos moradores e que contou com o apoio da Prefeitura à época.`,
    Execucao: true,
    DataInauguracao: `09/2003`,
    Latitude: `-22.9660791`,
    Longitude: `-43.1757018`,
};

export const Vitoria_MarliMazeredo: Obra = {
    ID: 338,
    Imagem: 'Vitoria_MarliMazeredo.jpg',
    Artistas: [artistas.MarliMazeredo],
    Titulo: `Vitória`,
    Classificacao: 'perene',
    Categoria: 'sublimidade',
    TipologiaObra: `Escultura`,
    Material: `Peça em bronze e resina com pedestal de concreto`,
    Descricao: `Escultura abstrata representando a "Vitória".`,
    Execucao: true,
    DataInauguracao: `04/1992`,
    Zona: 'Sul',
    Bairro: 'Copacabana',
    PontoDeReferencia: 'Praça do Lido',
    Latitude: `-22.9660791`,
    Longitude: `-43.1757018`,
    Fatos: [new Fato('', '', 'Propriedade', 'Pública', [], 'Rio de Janeiro'), new Fato('', '', 'Fundição/Atelier', 'Atelier Mazeredo', [], 'Rio de Janeiro')],
};

export const SaoFranciscodeAssis_MarliMazeredo: Obra = {
    ID: 339,
    Artistas: [artistas.MarliMazeredo],
    Titulo: `São Francisco de Assis`,
    Classificacao: 'perene',
    Categoria: 'personalidades',
    TipologiaObra: `estátua`,
    Material: `Peça em resina`,
    Descricao: `A escultura foi uma homenagem da visita do Papa Francisco I, oferecida à Cidade pelos moradores de Copacabana.`,
    Execucao: true,
    DataInauguracao: `08/2013`,
    Latitude: `-22.9660791`,
    Longitude: `-43.1757018`,
};

export const BancodeMosaicoI_ChicaGranchi: Obra = {
    ID: 340,
    Artistas: [artistas.ChicaGranchi],
    Titulo: `Banco de Mosaico I`,
    Classificacao: 'perene',
    Categoria: 'sublimidade',
    TipologiaObra: `mosaico`,
    Material: `Mosaico de azulejos`,
    Descricao: `Nos bancos de concreto existentes na orla da praia, foram instaladas peças de azulejos para a decoração formando um mosaico abstrato e colorido.`,
    Execucao: true,
    DataInauguracao: `01/2001`,
    Latitude: `-22.9684518`,
    Longitude: `-43.1796113`,
};

export const BancodeMosaicoII_ChicaGranchi: Obra = {
    ID: 341,
    Artistas: [artistas.ChicaGranchi],
    Titulo: `Banco de Mosaico II`,
    Classificacao: 'perene',
    Categoria: 'sublimidade',
    TipologiaObra: `Mosaico`,
    Material: `Mosaico de azulejos`,
    Descricao: `Nos bancos de concreto existentes na orla da praia, foram instaladas peças de azulejos para a decoração formando um mosaico abstrato e colorido.`,
    Execucao: true,
    DataInauguracao: `01/2001`,
    Latitude: `-22.9686506`,
    Longitude: ``,
};

export const BancodeMosaicoIII_ChicaGranchi: Obra = {
    ID: 342,
    Artistas: [artistas.ChicaGranchi],
    Titulo: `Banco de Mosaico III`,
    Classificacao: 'perene',
    Categoria: 'sublimidade',
    TipologiaObra: `Mosaico`,
    Material: `Mosaico de azulejos`,
    Descricao: `Nos bancos de concreto existentes na orla da praia, foram instaladas peças de azulejos para a decoração formando um mosaico abstrato e colorido.`,
    Execucao: true,
    DataInauguracao: `01/2001`,
    Latitude: `-22.9688096`,
    Longitude: `-43.1801974`,
};

export const OratoriodeNossaSenhoradeFatimadoBairroPeixoto_Desconhecida: Obra = {
    ID: 343,
    Artistas: [artistas.Desconhecida],
    Titulo: `Oratório de Nossa Senhora de Fátima do Bairro Peixoto`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `oratório`,
    Material: `Peça em concreto com imagem`,
    Descricao: `Construção do oratório com imagem da Santa, foi uma iniciativa dos moradores do bairro e doada à Cidade.`,
    Execucao: true,
    DataInauguracao: `01/2008`,
    Latitude: `-22.9674093`,
    Longitude: `-43.1896705`,
};

export const AoLevantedoForte_HonorioPecanha: Obra = {
    ID: 344,
    Artistas: [artistas.HonorioPecanha],
    Titulo: `Ao Levante do Forte`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Monolito`,
    Material: `Monolítico de concreto revestido com placa de granito`,
    Descricao: `Em 1943, o Coronel Euclides Hermes da Fonseca e outros oficiais tireram a iniciativa de erguer um monumento ao Levante aceita pelo prefeito da época que sugeriu que se levantasse um marco comemorativo. Aplaca foi aproveitado o material destinado ao monumento inicialmente projetado em 1930, e não concretizado doescultor José Rangel.`,
    Execucao: true,
    DataInauguracao: `07/1944`,
    Latitude: `-22.9865514`,
    Longitude: `-43.1879315`,
};

export const SerenaDamadoMar_LuizFigueiredo: Obra = {
    ID: 346,
    Imagem: 'SerenaDamadoMar_LuizFigueiredo.png',
    Artistas: [artistas.LuizFigueiredo],
    Titulo: `Serena, Dama do Mar - Iemanjá`,
    Classificacao: 'perene',
    Categoria: 'sublimidade',
    TipologiaObra: `Escultura`,
    Material: `Peça em bronze e pedestal de granito`,
    Descricao: `Escultura em bronze doada à Cidade pela Companhia de Navegação Viamar com apoio da Fundação Rio Arte. Foi
    inaugurada pera os festejos de Iemanjá no ano de 1988.`,
    Execucao: true,
    DataInauguracao: `12/1988`,
    Zona: 'Sul',
    Bairro: 'Copacabana',
    PontoDeReferencia: 'Avenida Atlantica com Rainha Elizabeth',
    Latitude: `-22.9854498`,
    Longitude: `-43.188948`,
    Fatos: [
        new Fato('', '', 'Propriedade', 'Pública', [], 'Rio de Janeiro'),
        new Fato('', '', 'Fundição/Atelier', 'Liboredo Fundição Artística Ind E Com Ltda', [], 'Rio de Janeiro'),
    ],
};

export const MarcodaInauguracaodaDuplicacaodeCopacabana_Desconhecida: Obra = {
    ID: 347,
    Artistas: [artistas.Desconhecida],
    Titulo: `Marco da Inauguração da Duplicação de Copacabana`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Marco`,
    Material: `Bloco de granito com placa de bronze`,
    Descricao: `O marco é comemorativo da inauguração das obras do alargamento da Avenida Atlântica e do emissario submarino.`,
    Execucao: true,
    DataInauguracao: `03/1971`,
    Latitude: `-22.9850722`,
    Longitude: `-43.1890765`,
};

export const ABaleia_AngeloVenosa: Obra = {
    ID: 348,
    Imagem: 'ABaleia_AngeloVenosa.png',
    Artistas: [artistas.AngeloVenosa],
    Titulo: `A baleia`,
    Classificacao: 'perene',
    Categoria: 'sublimidade',
    TipologiaObra: `Escultura`,
    Material: `Aço Corten, ferro`,
    Descricao: `Peça de 16 toneladas composta por dois elementos em aço de 2 polegadas de espessua, com 17 aneis de 4 metros de altura,; 2,50m de
largura e 6 metros de comprimento e outra peça menos com 1 metro de altura 2 de largura e 2,50 de comprimento.`,
    Altura: '370 cm',
    Largura: '1 000cm',
    Profundidade: '220 cm',
    Peso: '16000 kg',
    Execucao: true,
    DataInauguracao: `01/1988`,
    Zona: 'Central',
    Bairro: 'Centro',
    PontoDeReferencia: 'Praça Mauá',
    Latitude: `-22.8965955`,
    Longitude: `-43.1815675`,
    Remocao: true,
    DataRealocacao: '1998',
    Realocacao: true,
    ZonaRealocacao: 'Sul',
    BairroRealocacao: 'Leme',
    PontoDeReferenciaorealocacao: 'Praça Alm. Júlio de Noronha, 86',
    LatitudeRealocacao: `-22.962494`,
    LongitudeRealocacao: `-43.1655975`,
    Fatos: [
        new Fato('', '', 'Título', 'Sem título', [], 'Rio de Janeiro'),
        new Fato('', '', 'Renomeação', 'A baleia', [], 'Rio de Janeiro'),
        new Fato('', '', 'Doação', 'João Fortes Engenharia para a reurbanização da Praça Mauá', [], 'Rio de Janeiro'),
        new Fato('1998', '1998', 'Transferencia', 'A obra foi removida para a instalação do monumento ao Almirante Pedro Marx', [], 'Rio de Janeiro'),
        new Fato('', '', 'Propriedade', 'Pública', [], 'Rio de Janeiro'),
    ],
};

export const ObeliscodoAlargamentodeCopacabana_Desconhecida: Obra = {
    ID: 349,
    Artistas: [artistas.Desconhecida],
    Titulo: `Obelisco do Alargamento de Copacabana`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `obelisco`,
    Material: `Bloco de granito`,
    Descricao: `Marco oferecido pelos moradores de Copacabana à Cidade, emcomemoração da reconstrução e alargamento da Avenida Atlântica. Foi inaugurado na Avenida Atlantica próximo a Rua Almirante Gonçalves. Foi transferido, na década de 1930, quando os canteiros centrais foram eliminadoso, para a Praça Júlio de Noronha. 
Possui forma de coluna circular adornado com dois medalhões de bronze com a efígie do Prefeito Paulo de Frontin e outro com a do Presidente da República Delfim Moreira.`,
    Execucao: true,
    DataInauguracao: `07/1919`,
    Latitude: `-22.9623683`,
    Longitude: `-43.1653128`,
};

export const QuartzoRosa_Desconhecida: Obra = {
    ID: 350,
    Artistas: [artistas.Desconhecida],
    Titulo: `Quartzo Rosa`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Monolito`,
    Material: `Blocos de quartzo`,
    Descricao: `Grande bloco maciço instalado na reurbanização da praça apos a obra do Metro-Rio. A intervenção na praça se deve a Amelia Toledo que desenovlveu o projeto da praca com cerca de 180 tipos de granito no piso e a uma fonte de água com um bloco de quartzo rosa, esta uma homenagem ao amigo e crítico de arte já morto, Casimiro Xavier de Mendonça. O lago que criava um Chafariz no entorno do quartzo rosa foi aterrado em 2010, ficando em destaque a pedra bruta.`,
    Execucao: true,
    DataInauguracao: `01/1998`,
    Latitude: `-22.9649633`,
    Longitude: ``,
};

export const Menora_Desconhecida: Obra = {
    ID: 351,
    Artistas: [artistas.Desconhecida],
    Titulo: `Menorá`,
    Classificacao: 'perene',
    Categoria: 'representação religiosa',
    TipologiaObra: `Escultura`,
    Material: `Peça em concreto`,
    Descricao: `O monumento foi idealizado pelo Vereador Gerson Berge, devido a estar próximo a primeira sinagoga do Rio de
    Janeiro, e ser Copacabana o bairro que acolhe uma grande parte da comunidade Judaica no Rio de Janeiro. O monumento retirado
    em 1988, a fim de possibilitar as obras de construção, da estação do metro de Copacabana, foi reinstalado em 12 de dezembro de
    2004, por iniciativa da organização judaica Beit Lubavitch pela CHL Incorporações.`,
    Execucao: true,
    DataInauguracao: `01/1995`,
    Zona: 'Sul',
    Bairro: 'Copacabana',
    PontoDeReferencia: 'Praça Cardeal Arco Verde',
    Latitude: `-22.9649633`,
    Longitude: `-43.1801527`,
    Lugar: 'Praça',
    Fatos: [new Fato('', '', 'Propriedade', 'Pública', [], 'Rio de Janeiro')],
};

export const PaineldosDireitosHumanosemCopacabana_FrancoiseSchein: Obra = {
    ID: 352,
    Artistas: [artistas.FrancoiseSchein],
    Titulo: `Painel dos Direitos Humanos em Copacabana`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Mosaico`,
    Material: `Mosaico de azulejos`,
    Descricao: `Projeto daartista belga Françoise Schein, com participação da arquiteta Laura Taves, Talya Kahn e dos moradores do bairro.
O painel, medindo aproximadamente 200 metros quadrados, apresenta o mapa dapraia de Copacabana juntamente com três personagens.A senhora negra representando a força dos trabalhadores brasileiros; um rapaz lutador de capoeira, simbolizando o povo e os costumes negros no Brasil e uma menina que representa o futuro e a esperança de um povo que desde sua colonização, ainda no século XXI, é tratado com grandes injustiças. Escrito à mão constam artigos dos Direitos Humanos  e uma poesia de Arnaldo Antunes. Um segundo painel, adjacente, relaciona projetos similaresexistentes em outrascidades. Paris, Bruxelas, Lisboa, Estocolmo, Haifa, Berlim e Rio de Janeiro.`,
    Execucao: true,
    DataInauguracao: `12/2002`,
    Latitude: `-22.9676838`,
    Longitude: `-43.1872279`,
};

export const AlmiranteJuliodeNoronha_ABraga: Obra = {
    ID: 322,
    Imagem: 'AlmiranteJuliodeNoronha_ABraga.jpg',
    Artistas: [artistas.ABraga],
    Titulo: `Almirante Júlio de Noronha`,
    Classificacao: 'perene',
    Categoria: 'personalidades',
    TipologiaObra: `Busto`,
    Material: `Peça em bronze com pedestal de granito`,
    Descricao: `A homenagem ao Almirante e o reconhecimento e por sua participação no Conselho Naval. O monumento foi inaugurado
    com a presença do Prefeito Julio Coutinho e de Israel Klabin, que ali compareceu como um "homem do mar" não como uma autoridade.`,
    Execucao: true,
    DataInauguracao: `06/1980`,
    Zona: 'Sul',
    Bairro: 'Leme',
    PontoDeReferencia: 'Praça Júlio de Noronha',
    Latitude: `-22.9623683`,
    Longitude: `-43.1653128`,
    Fatos: [new Fato('', '', 'Propriedade', 'Pública', [], 'Rio de Janeiro')],
};

export const CogumelosII_Desconhecida: Obra = {
    ID: 355,
    Artistas: [artistas.Desconhecida],
    Titulo: `Cogumelos II`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Construção`,
    Material: `Pecas de tijolo com argamassa`,
    Descricao: `Construção com função de proteção ou cobertura dos brinquedos infantis, integrando ao parque tematico.`,
    Execucao: true,
    DataInauguracao: `01/1974`,
    Latitude: `-22.9832874`,
    Longitude: `-43.192088`,
};

export const RelogiodoParquePeterPan_Desconhecida: Obra = {
    ID: 356,
    Artistas: [artistas.Desconhecida],
    Titulo: `Relógio do Parque Peter Pan`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Relógio`,
    Material: `Peças de tijolo com argamassa`,
    Descricao: `O parque temático que reproduz uma minicidade, está localizado na Rua Francisco Sá, 86, pertenceu à Companhia Estadual de Água e Esgotos (Cedae), onde uma elevatória de esgoto e tubulações do emissário submarino de Ipanema passam por debaixo da área. Foi cedido pelo Governo do Estado à Prefeitura, através de contrato de comodato, pelo prazo de dez anos, que, em contrapartida, recebeu um imóvel na Rua Saint Roman, no mesmo bairro, para construção de unidades habitacionais. Construção com caracteristica educativa para as crianças, integrando ao parque temático.`,
    Execucao: true,
    DataInauguracao: `01/1974`,
    Latitude: `-22.9832874`,
    Longitude: `-43.192088`,
};

export const OratoriodeNossaSenhoradasGracasdeCopacabana_Desconhecida: Obra = {
    ID: 357,
    Artistas: [artistas.Desconhecida],
    Titulo: `Oratório de Nossa Senhora  das Gracas de Copacabana`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Oratório`,
    Material: `Pedra e tijolo com argamassa`,
    Descricao: `Oratório construído no recanto da entrada do túnel com a imagem tradicional da Santa. O santuário foi uma aspiração de Dona Gerci, amiga de Emilia Ibraim, através de quem conseguiu a autorização para construir o oratório. O filho da Dona Gerci escapou com vida de um acidente na Rodovia Presidente Dutra, milagre que ela atribui a Nossa Senhora das Gracas.`,
    Execucao: true,
    DataInauguracao: `04/1973`,
    Latitude: `-22.9779268`,
    Longitude: `-43.1928786`,
};

export const PaineldoFrescobol_MillorFernandes: Obra = {
    ID: 358,
    Artistas: [artistas.MillorFernandes],
    Titulo: `Painel do Frescobol`,
    Classificacao: 'perene',
    Categoria: 'sublimidade',
    TipologiaObra: `painel`,
    Material: `Peças de azulejos`,
    Descricao: `Painel de azulejo é uma homenagemao frescobol, na parede frontal da praça, com pinturas nas cores areia, azulão, verde e azul claro. O areia refere-se a areia da praia. O azulão o mar e claro o céu e o verde as montanhas. Na cor laranja formando figuras abstratas. A figura de um jogador e a praia de Copacabana ao fundo dão a dica de onde o esporte nasceu.
O painel existente na prça não se consituti bem tombado mas o Frescobol é um Bem de Natureza Imateral pelo Decreto de numero 39 758 de 06 de fevereiro de 2015, cujo painel representativo, deve ser protegido na sua integridade.`,
    Execucao: true,
    DataInauguracao: `01/1998`,
    Latitude: `-22.9796065`,
    Longitude: `-43.1910441`,
};

export const EmbocaduradoTunelAloarPrataTunelVelho_Desconhecida: Obra = {
    ID: 359,
    Artistas: [artistas.Desconhecida],
    Titulo: `Embocadura do Túnel Aloar Prata, Túnel Velho`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Construção`,
    Material: `Tijolo com argamassa`,
    Descricao: `A perfuração do Túnel Alaor Prata foi promovida pela Companhia Ferro-Carril do Jardim Botânico, que era responsável por alguns dos bondes que circulavam pela cidade do Rio de Janeiro.As obras duraram apenas oito meses. O túnel, com 182 metros de comprimento e 5,50 de largura, atravessava o Morro da Saudade e o Morro de São João. Foi inaugurado em, 6 de julho de 1892, Marechal Floriano Peixoto, então vice-presidente da República, esteve presente. Todos sabiam que aquela obra seria um marco para a história da cidade.
O túnel foi reformado na administração do então prefeito Aloar Prata, quando foi adotado de passeios laterais e alargado para treze metros e reformada a fachada;
A denominação Túnel Velho ficou adotado. Ele também já foi chamado (oficialmente) de Túnel Real Grandeza, Contudo, o atual nome da construção é Alaor Prata, em homenagem ao prefeito que esteve à frente do município do Rio de Janeiro entre os anos 1922 e 1926.`,
    Execucao: true,
    DataInauguracao: `01/1928`,
    Latitude: `-22.9615826`,
    Longitude: `-43.1910399`,
};

export const ChafarizesdaAvenidaPrincesaIsabel_ClaudioCavalcanti: Obra = {
    ID: 360,
    Artistas: [artistas.ClaudioCavalcanti],
    Titulo: `Chafarizes da Avenida Princesa Isabel`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Chafariz`,
    Material: `Peça em concreto revestido por mármore`,
    Descricao: `Primeiro conjunto de Chafarizes em lago seco da cidade, isto é, com o jorro de água saindo de uma cisterna abaixo de nível do piso coberta por uma lage revestida de mármore e grelha de inox. São jorros que juntos foram umconjunto ao longo da Avenida Princesa Isabel.
Desativado o ano de 2012`,
    Execucao: true,
    DataInauguracao: `05/1996`,
    Latitude: `-22.9631204`,
    Longitude: `-43.174531`,
};

export const ChafarizdoBairroPeixoto_FranciscoBolonha: Obra = {
    ID: 361,
    Titulo: `Chafariz do Bairro Peixoto`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Chafariz`,
    Material: `Peça em concreto armado`,
    Descricao: `Em 1964, oDepartamento de Parques e Jardins reformoua praça. Para marcar a intervenção, as empresas "Rei da Voz" e "Bendix" doaram a obra de Bolonha para a Cidade. Foi um presente de Abrahão Medina, dono das lojas Rei da Voz, morador da Rua Décio Vilares.
O Chafariz de estrutura arrojada, concha nervurada, tem o escorrimento de agua pelos vértices da construção. Desativado desde maio de 2017.`,
    Execucao: true,
    DataInauguracao: `08/1965`,
    Latitude: `-22.9674093`,
    Longitude: `-43.1896705`,
};

export const AMillorFernandes_ChicoCaruso_JaimeLenner: Obra = {
    ID: 363,
    Artistas: [artistas.ChicoCaruso, artistas.JaimeLenner],
    Titulo: `À Millôr Fernandes`,
    Classificacao: 'perene',
    Categoria: 'personalidades',
    TipologiaObra: `banco`,
    Material: `Aço Corten`,
    Descricao: `O monumento é uma chapa de aço corten onde está a silueta de Millôr desenhado por Chico Caruso. O monumento foi uma doação dos amigos de Millôr à cidade do Rio de Janeiro. Inicialmente a peça era com o aço corten exposto, porteriormente devido a ação da maresia no monumento, a peça precisou ser protegida com uma pintura.
O traço de Chico Caruso foi lembrar o pensador de Ipanema, na inspiração do" Pensador" de Rodin.`,
    Execucao: true,
    DataInauguracao: `05/2013`,
    Latitude: `-22.9899039`,
    Longitude: `-43.1914569`,
};

export const TomJobim_ChristinaMotta: Obra = {
    ID: 365,
    Artistas: [artistas.ChristinaMotta],
    Titulo: `Tom Jobim`,
    Classificacao: 'perene',
    Categoria: 'personalidades',
    TipologiaObra: `estátua`,
    Material: `Peça em bronze`,
    Descricao: `A homenagem contratada pela Prefeitura da Cidade de Janeiro, foi inaugurada no dia que se celebrava os 20 anos de sua morte. A foto que serviu de modelo para a homenagem foi realizado no anos 60 quando Tom e Vinicius tinham acabado de fazer uma sinfônica em Brasília.`,
    Execucao: true,
    DataInauguracao: `12/2014`,
    Latitude: `-22.9878187`,
    Longitude: `-43.1944264`,
};

export const OratorioaSaoPedrodeCopacabana_Desconhecida: Obra = {
    ID: 345,
    Artistas: [artistas.Desconhecida],
    Titulo: `Oratório à São Pedro de Copacabana`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Oratório`,
    Material: `Pedra e tijolo com argamassa revestido de madeira`,
    Descricao: `Monumento em homenagem ao protetor dos pescadores, na colônia de pesca do Posto 6 de Copacabana. Originariamente a construção tinha o formato de um capela em construção de tijolo revestida por pedra. Em 2008 foi reformada junto com o espaço e a nova construção foi executada como um oratorio à São Pedro.`,
    Execucao: true,
    DataInauguracao: `12/2009`,
    Latitude: `-22.9859367`,
    Longitude: `-43.1887832`,
};

export const Cogumelos_Desconhecida: Obra = {
    ID: 354,
    Artistas: [artistas.Desconhecida],
    Titulo: `Cogumelos`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Construção`,
    Material: `Pecas de tijolo com argamassa`,
    Descricao: `Construção para uso adminstrativo integrando ao parque tematico.`,
    Execucao: true,
    DataInauguracao: `01/1974`,
    Latitude: `-22.9832874`,
    Longitude: `-43.192088`,
};

export const ChafarizdoVaso_WalterCurvelodeMendonca: Obra = {
    ID: 302,
    Artistas: [artistas.WalterCurvelodeMendonca],
    Titulo: `Chafariz do Vaso`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Chafariz`,
    Material: `Peça em mármore de Carrara`,
    Descricao: `Chafariz com um Vaso central, adornado com um par cabeças de leão e um figura feminina em cada face. 
Originalmente o Prefeito Prado Junior, em 01/06/1929 instalou uma escultura, uma Garça que desapareceu em data desconhecida. Em 1987 foi substituindo por este Vaso de Carrara, proveniente provavelmente da Praça Floriano.
Desativado em data desconhecida.`,
    Execucao: true,
    DataInauguracao: `01/1987`,
    PontoDeReferencia: 'Praia de Botafogo',
    Latitude: `-22.9417366`,
    Longitude: `-43.1799523`,
};

export const OratoriodoSagradoCoracaodeMariaedeJesus_Desconhecida: Obra = {
    ID: 370,
    Artistas: [artistas.Desconhecida],
    Titulo: `Oratório do Sagrado Coração de Maria e de Jesus.`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Oratório`,
    Material: `Peça em concreto com imagem em resina`,
    Descricao: `Oratório doado pela irma da senhora Elza Duarte da Rocha, que coordenou o grupo do terço da Igreja da Ressureiição, vizinha ao parque, para a oração dos fieis.`,
    Execucao: true,
    DataInauguracao: `11/2004`,
    Latitude: `-22.9880297`,
    Longitude: `-43.1923323`,
};

export const SantaSara_Desconhecida: Obra = {
    ID: 371,
    Artistas: [artistas.Desconhecida],
    Titulo: `Santa Sara`,
    Classificacao: 'perene',
    Categoria: 'representações religiosas',
    TipologiaObra: `Escultura`,
    Material: `Peça em resina`,
    Descricao: `Inaugurada no dia da festa de Santa Sara Kali no Brasil, padroeira universal do povo cigano. Foi doada pela. líder cigana Mirian Stanesconpara estimular a solidariedade e a confraternização entre os povos. É a primeira imagem pública no Brasil e a egunda no mundo.`,
    Execucao: true,
    DataInauguracao: `05/2002`,
    Latitude: `-22.9888096`,
    Longitude: `-43.191583`,
};

export const CaramanchaodaPracaNossaSenhoradaPaz_IvanPaulPaccini: Obra = {
    ID: 368,
    Artistas: [artistas.IvanPaulPaccini],
    Titulo: `Caramanchão da Praça Nossa Senhora da Paz`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Caramanchão`,
    Material: `Peça em concreto armado`,
    Descricao: `Idealizado no tratamento paisagístico, para adornar a área elevada da praça.<`,
    Execucao: true,
    DataInauguracao: `01/1992`,
    Latitude: `-22.9837398`,
    Longitude: `-43.2049451`,
};

export const GarotadeIpanema_HomeroBrito: Obra = {
    ID: 372,
    Artistas: [artistas.HomeroBrito],
    Titulo: `Garota de Ipanema`,
    Classificacao: 'perene',
    Categoria: 'sublimidade',
    TipologiaObra: `Mosaico`,
    Material: `Mosaico de pastilhas`,
    Descricao: `Escultura executada em concreto reprodução da peça original de aço e pintura automotiva é de 2006. Foi doada à Cidade pelo artista plástico.`,
    Execucao: true,
    DataInauguracao: `01/2011`,
    Latitude: `-22.9884811`,
    Longitude: `-43.1919982`,
};

export const ConstrucaoEmTriangulos_FranzWeissmann: Obra = {
    ID: 373,
    //ConstrucaoEmTriangulos,
    Artistas: [artistas.FranzWeissmann],
    Titulo: `Construção Em Triângulos`,
    Classificacao: 'perene',
    Categoria: 'sublimidade',
    TipologiaObra: `Escultura`,
    Material: `Peça em aço corten`,
    Altura: '100 cm',
    Largura: '200 cm',
    Profundidade: '200 cm',
    Execucao: true,
    DataInauguracao: `01/1985`,
    Bairro: 'Marechal Hermes',
    PontoDeReferencia: 'Rua Américo Rocha, 1602',
    Latitude: '-22.8493686',
    Longitude: '-43.3591321', //'-43.3591321,66',
};

export const MarcodaIgrejaNossaSenhoradaPaz_Desconhecida: Obra = {
    ID: 376,
    Artistas: [artistas.Desconhecida],
    Titulo: `Marco da Igreja Nossa  Senhora da Paz`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Marco`,
    Material: `Peça em concreto com imagem`,
    Descricao: `O marco em concreto com uma foto antiga da Igreja. Foi construído para comemorar os 75 anos da Paróquia.`,
    Execucao: true,
    DataInauguracao: `09/1995`,
    Latitude: `-22.9842363`,
    Longitude: `-43.2053417`,
};

export const AfraniodeMeloFranco_BrunoGiorgi: Obra = {
    ID: 382,
    Imagem: 'AfraniodeMeloFranco_BrunoGiorgi.jpg',
    Artistas: [artistas.BrunoGiorgi],
    Titulo: `Afrânio de Melo Franco`,
    Classificacao: 'perene',
    Categoria: 'personalidades',
    TipologiaObra: `Busto`,
    Material: `Peça em bronze e pedestal de granito`,
    Descricao: `O busto foi doado pela família de Afrânio de Melo Franco à Cidade do Rio de Janeiro em 2010,  por ser uma obra
    de Bruno Giorgi, amigo pessoal do diplomata, que o havia feito como um presente a família.`,
    Execucao: true,
    DataInauguracao: `10/2010`,
    Zona: 'Sul',
    Bairro: 'Leblon',
    PontoDeReferencia: 'Av. Afrânio de Melo Franco',
    Latitude: `-22.9828266`,
    Longitude: `-43.2179217`,
    Fatos: [new Fato('', '', 'Propriedade', 'Pública', [], 'Rio de Janeiro')],
};

export const AloysioMariaTeixeira_RobertoSa_ClaraSa: Obra = {
    ID: 383,
    Artistas: [artistas.RobertoSa, artistas.ClaraSa],
    Titulo: `Aloysio Maria Teixeira`,
    Classificacao: 'perene',
    Categoria: 'personalidades',
    TipologiaObra: `estátua`,
    Material: `Peça em bronze`,
    Descricao: `A homenagemfoi uma doação da família à Cidade do Rio de Janeiro, após o reconhecimento como logrodouro público a praça com a denominação oficial pela Prefeitura.`,
    Execucao: true,
    DataInauguracao: `10/2013`,
    Latitude: `-22.9832071`,
    Longitude: `-43.2280752`,
};

export const Guarda_corpodoCanaldaAvenidaViscondeAlbuquerque_AzevedoNeto: Obra = {
    ID: 389,
    Artistas: [artistas.AzevedoNeto],
    Titulo: `Guarda-corpo do Canal da Avenida Visconde Albuquerque`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Guarda-corpo`,
    Material: `Peça em concreto armado`,
    Descricao: `Construção para proteção dos transeuntes.`,
    Execucao: true,
    DataInauguracao: `01/1942`,
    Latitude: `-22.9847989`,
    Longitude: `-43.2292798`,
};

export const ComportadoCanaldoLeblon_Desconhecida: Obra = {
    ID: 390,
    Artistas: [artistas.Desconhecida],
    Titulo: `Comporta do Canal do Leblon`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Construção`,
    Material: `Peça em concreto armado`,
    Descricao: `Construção para controlar o acesso da água do mar, típica da engenharia hidraulica.`,
    Execucao: true,
    DataInauguracao: `01/1922`,
    Latitude: `-22.9879921`,
    Longitude: `-43.2284968`,
};

export const BancodoCanaldaAvenidaViscondeAlbuquerque_AzevedoNeto: Obra = {
    ID: 391,
    Artistas: [artistas.AzevedoNeto],
    Titulo: `Banco do Canal da Avenida Visconde Albuquerque`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `banco`,
    Material: `Peça em concreto revestido por azulejo`,
    Descricao: `Construção composta por uma murada com banco e jardineira de azulejos decorados de escalonamento típico do período art. décor.`,
    Execucao: true,
    DataInauguracao: `01/1942`,
    Latitude: `-22.9883539`,
    Longitude: `-43.2281916`,
};

export const Chanuka_Desconhecida: Obra = {
    ID: 395,
    Imagem: 'Chanuka_Desconhecida.jpg',
    Artistas: [artistas.Desconhecida],
    Titulo: `Chanuká`,
    Classificacao: 'perene',
    Categoria: 'representação religiosa',
    TipologiaObra: `Escultura`,
    Material: `Peça em ferro pintado`,
    Descricao: `O primeiro Chanuká instalado no espaço foi uma obra Ruth Nac que foi inaugurada em 1º de dezembro de 2002;
    esta desapareceu em 2006. Foi substituída por outra em concdreto e finalmente em 2008 finalmente foi instalada essa em metal.
    Essa peça foi erguido pela Comunidade Israelita do Leblon, através da Associação Cultural Educacional Beneficente Beit
    Lubavitch.`,
    Execucao: true,
    DataInauguracao: `01/2008`,
    Zona: 'Sul',
    Bairro: 'Leblon',
    PontoDeReferencia: 'Espaço Zózimo Barroso do Amaral',
    Latitude: `-22.9886022`,
    Longitude: `-43.2276672`,
    Fatos: [
        new Fato('', '', 'Propriedade', 'Pública', [], 'Rio de Janeiro'),
        new Fato('', '', 'Doação', 'Doada ao Município pela RJZ Cyrela', [], 'Rio de Janeiro'),
    ],
};

export const MarcodaInauguracaodaMuradadoLeblon_Desconhecida: Obra = {
    ID: 396,
    Artistas: [artistas.Desconhecida],
    Titulo: `Marco da Inauguração da Murada do Leblon`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Marco`,
    Material: `Bloco de granito`,
    Descricao: `Marco com inscrição em baixo relevo com a data da inauguração, o nome do presidente Getulio Dornelles Vargas, do Prefeito Cônego Olympio de Mello e a obra da murada de proteção da Av. Delfim Moreira e o início das obras desta praça. Ao lado uma placa em bronze refere-se a inauguração do remanejamento do emissário, inaugurado em 5 de novembro de 1988.`,
    Execucao: true,
    DataInauguracao: `10/1936`,
    Latitude: `-22.988656`,
    Longitude: `-43.227745`,
};

export const MarcodaReinauguracaodoAlargamentodaAvenidaNiemeyer_Desconhecida: Obra = {
    ID: 397,
    Artistas: [artistas.Desconhecida],
    Titulo: `Marco da Reinauguração do Alargamento da Avenida Niemeyer`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Marco`,
    Material: `Blocos de gnaisses`,
    Descricao: `Marco esculpido na pedra natural com moldura e dezeres talhados. A inscrição relata a reinauguração da avenida, o alargamento da avenida e a construção de um acostamento, citando a presença da Rainha Elizabeth da Belgica que visitava o pais.`,
    Execucao: true,
    DataInauguracao: `09/1922`,
    Latitude: `-22.989138`,
    Longitude: `-43.2278467`,
};

export const MarcodaInauguracaodoCanaldoJardimdeAla_Desconhecida: Obra = {
    ID: 403,
    Artistas: [artistas.Desconhecida],
    Titulo: `Marco da Inauguração do Canal do Jardim de Alá`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Marco`,
    Material: `Bloco de gnaisse`,
    Descricao: `Bloco de pedra instada junto a escada de acesso, próximo à Avenida Vieira Souto, onde estão registrados os nomes doPresidente Epitácio Pessoa,do Prefeito<Carlos Sampaio e do engenheiro<Saturnino de Brito.
Monumento fechado na praça desde o ano de 2013 devido as obras do Metrô.`,
    Execucao: true,
    DataInauguracao: `01/1922`,
    Latitude: `-22.982413`,
    Longitude: `-43.2140066`,
};

export const DeckdoJardimdeAla_Azevedo: Obra = {
    ID: 405,
    Artistas: [artistas.Azevedo],
    Titulo: `Deck do Jardim de Alá`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Construção`,
    Material: `Peça em concreto armado`,
    Descricao: `Construção para acesso ao canal. Criado para passeios de barco, o deuqe mantem a historia da criação do jardim.
Monumento fechado na praça desde o ano de 2013 devido as obras do Metro.`,
    Execucao: true,
    DataInauguracao: `01/1938`,
    Latitude: `-22.9829743`,
    Longitude: ``,
};

export const Guarda_corpodoJardimdeAla_Desconhecida: Obra = {
    ID: 407,
    Artistas: [artistas.Desconhecida],
    Titulo: `Guarda-corpo do Jardim de Alá`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Guarda-corpo`,
    Material: `Bloco de granito`,
    Descricao: `Guarda-corpo de cantaria nos balaustres e no parapeito formando um conjunto harmonico.
Construção desmotada no depósito da Prefeituta desde o ano de 2013 devido as obras do Metro.`,
    Execucao: true,
    DataInauguracao: ``,
    Latitude: `-22.9847613`,
    Longitude: `-43.2151784`,
};

export const ChafarizdoJardimdeAla_SergioDias: Obra = {
    ID: 410,
    Artistas: [artistas.SergioDias],
    Titulo: `Chafariz do Jardim de Alá`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Chafariz`,
    Material: `Peça em concreto armado`,
    Descricao: `Inicialmente construído conforme projeto de Azevedo Neto, com dois lagos sem jorro de água em 1938. Em 2003 passou por modificações, quando se criou dois lagos secos cobertos por pedra e um jorro central de Chafariz.
Esta desativado desde o ano de 2010.`,
    Execucao: true,
    DataInauguracao: `12/2003`,
    Latitude: `-22.9846732`,
    Longitude: `-43.2148574`,
};

export const TrelicadoJardimdeAla_AzevedoNeto: Obra = {
    ID: 411,
    Artistas: [artistas.AzevedoNeto],
    Titulo: `Treliça do Jardim de Alá`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Caramanchão`,
    Material: `Peça de Madeira`,
    Descricao: `Caramanchão em madeira pintada na cor branca com treliças regulares. Formando um traçado romântico este trabalho recria o filme fazia sucesso nos cinemas do Rio o filme Jardim de Alah, com Marlene Dietrich.
Construção desmotada no depósito da Prefeituta desde o ano de 2013 devido as obras do Metrô, retornando a praça em outubro de 2016`,
    Execucao: true,
    DataInauguracao: `01/1938`,
    Latitude: `-22.9846732`,
    Longitude: `-43.2148574`,
};

export const DelPrete_RobertoSa: Obra = {
    ID: 413,
    Imagem: 'DelPrete_RobertoSa.jpg',
    Artistas: [artistas.RobertoSa],
    Titulo: `Del Prete`,
    Classificacao: 'perene',
    Categoria: 'personalidades',
    TipologiaObra: `Estátua`,
    Material: `Peça e alegorias em bronze`,
    Descricao: `Monumento composto pela estatua do piloto em tamanho real vestindo um uniforme de piloto, uma réplica de um avião,
    suspensa a cerca de sete metros do chão e uma grande placa esta contada a historia do piloto. Inicialmente Del Prete foi
    homenageado com um busto na Rua das Laranjeiras , atualmente no deposito da Prefeitura. Em 1997, o Prefeito Luís Paulo Conde
    mandou refazer a homenagem escala gigante.`,
    Execucao: true,
    DataInauguracao: `11/1999`,
    Zona: 'Sul',
    Bairro: 'Laranjeiras',
    PontoDeReferencia: 'Rua das Laranjeiras',
    Latitude: `-22.9330908`,
    Longitude: `-43.1845779`,
    Fatos: [new Fato('', '', 'Propriedade', 'Pública', [], 'Rio de Janeiro')],
};

export const PortaodoParqueGuinle_Desconhecida: Obra = {
    ID: 416,
    Artistas: [artistas.Desconhecida],
    Titulo: `Portão do Parque Guinle`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Portão`,
    Material: `Peça em ferro fundido e bronze, e pedestal de granito`,
    Descricao: `Portão de duas folhas com dois outros acessos laterais, entre duas sólidas colunas laterais, encimadas por luminárias. A estrutura do portão é todo em ferro fundido e os elementos decorativos: folhas, flores e pinaculos em bronze.
Foi adquirido em 1911 por Eduardo Guinle na fundição francesa situada Boulevard de La Villeté, Paris.`,
    Execucao: true,
    DataInauguracao: ``,
    Latitude: `-22.9316085`,
    Longitude: `-43.1824686`,
};

export const Grifo_Desconhecida: Obra = {
    ID: 417,
    Artistas: [artistas.Desconhecida],
    Titulo: `Grifo`,
    Classificacao: 'perene',
    Categoria: 'sublimidade',
    TipologiaObra: `Escultura`,
    Material: `Peça em ferro fundido e pedestal de granito`,
    Descricao: `Par de grifos que ladeiam o portão monumental do parque. Provavelmente esse par estava no antigo Chafariz que
    existiu na Praça José de Alencar e foi deslocado quando da sua desmontagem.`,
    Execucao: true,
    DataInauguracao: ``,
    Zona: 'Sul',
    Bairro: 'Laranjeiras',
    PontoDeReferencia: 'Parque Guinle',
    Latitude: `-22.9315142`,
    Longitude: `-43.1824265`,
    Fatos: [
        new Fato('', '', 'Propriedade', 'Pública', [], 'Rio de Janeiro'),
        new Fato('', '', 'Fundição/Atelier', "Val d'Osne", [], 'Rio de Janeiro'),
        new Fato('2000', '2000', 'Tombamento', 'Tombado pelo Município pelo Decreto 19.011/2000', [], 'Rio de Janeiro'),
    ],
};

export const Esfinge_Desconhecida: Obra = {
    ID: 418,
    Artistas: [artistas.Desconhecida],
    Titulo: `Esfinge`,
    Classificacao: 'perene',
    Categoria: 'sublimidade',
    TipologiaObra: `Esfinge`,
    Material: `Peça em mármore e ferro fundido com pedestal de gnaisse`,
    Descricao: `As peças são reproduções da obra de Louis Lerambert, existentes no Jardim de Versailles, França. São esfinges em
    mármore sobre as quais se sentam um anjinho em ferro fundido.`,
    Execucao: true,
    DataInauguracao: ``,
    Zona: 'Sul',
    Bairro: 'Laranjeiras',
    PontoDeReferencia: 'Parque Guinle',
    Latitude: `22.9315142`,
    Longitude: `-43.1824265`,
    Fatos: [new Fato('', '', 'Propriedade', 'Pública', [], 'Rio de Janeiro')],
};

export const VasodoParqueGuinle_EmilioGiannelli: Obra = {
    ID: 419,
    Artistas: [artistas.EmilioGiannelli],
    Titulo: `Vaso do Parque Guinle`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Vaso`,
    Material: `Peça em ferro fundido`,
    Descricao: `Originariamente foram instalado em 1965 na Praça Floriano. Foram retiradas para a obra do metro em 1979. Formam um conjunto de 12 peças, hoje distribuídas na Avenida Presidente Vargas e no Parque Guinle.
Os vasos foram instalado no parque em 1997.`,
    Execucao: true,
    DataInauguracao: `01/1965`,
    Latitude: `-22.9314294`,
    Longitude: `-43.1825106`,
};

export const CasadosPassaros_Desconhecida: Obra = {
    ID: 420,
    Artistas: [artistas.Desconhecida],
    Titulo: `Casa dos Pássaros`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `construção`,
    Material: `Peça de rocaille em argamassa`,
    Descricao: `Pequena construção situada no centro do lago do parque, assentada em forma de jangada, imitandotroncos e galhos de árvore.`,
    Execucao: true,
    DataInauguracao: ``,
    Latitude: `-22.9309927`,
    Longitude: `-43.1828792`,
};

export const Guarda_corponoParqueGuinle_Desconhecida: Obra = {
    ID: 421,
    Artistas: [artistas.Desconhecida],
    Titulo: `Guarda-corpo no Parque Guinle`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Guarda-corpo`,
    Material: `Peça em argamassa`,
    Descricao: `Construção de ragamassa de linhas simples contudo com a função de proteção dos transeuntes sobre a ponte.`,
    Execucao: true,
    DataInauguracao: ``,
    Latitude: `-22.9303362`,
    Longitude: `-43.1840198`,
};

export const PisodePedeMolequenoLargodoBoticario_Desconhecida: Obra = {
    ID: 424,
    Artistas: [artistas.Desconhecida],
    Titulo: `Piso de Pé de Moleque no Largo do Boticário`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `piso`,
    Material: `Seixos e lascas de granito`,
    Descricao: `Piso com bloco de granito cobrindo a área livre do Largo, executadopor sugestão da Sra. Sylvia de Bittencourt, com blocos de pedra, retiradas do Morro da Viuva.`,
    Execucao: true,
    DataInauguracao: ``,
    Latitude: `-22.939855`,
    Longitude: `-43.2013375`,
};

export const PisonoLargoProfessorSilvaMelo_AlencastroGraca_JorgeMartinsCancela_CarlosWerneckdeCarvalho: Obra = {
    ID: 425,
    Artistas: [artistas.AlencastroGraca, artistas.JorgeMartinsCancela, artistas.CarlosWerneckdeCarvalho],
    Titulo: `Piso no Largo Professor Silva Melo`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `piso`,
    Material: `Seixos e lascas de granito`,
    Descricao: `Calçamento executada com seixos rolados cobrindo toda a área da praça.`,
    Execucao: true,
    DataInauguracao: `02/1975`,
    Latitude: `-22.9398627`,
    Longitude: `-43.2018458`,
};

export const PisodePedeMolequedaLadeiraCerraCora_Desconhecida: Obra = {
    ID: 426,
    Artistas: [artistas.Desconhecida],
    Titulo: `Piso de Pé de Moleque da Ladeira Cerra Corá`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `piso`,
    Material: `Seixos e lascas de granito`,
    Descricao: `Piso original executado com pedaços ou lascas de granito.`,
    Execucao: true,
    DataInauguracao: ``,
    Latitude: `-22.940294`,
    Longitude: `-43.2001072`,
};

export const CaramanchaodaPracaDelPrete_AlfredoBrito: Obra = {
    ID: 427,
    Artistas: [artistas.AlfredoBrito],
    Titulo: `Caramanchão da Praça Del Prete`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Caramanchão`,
    Material: `Peça em ferro pintado`,
    Descricao: `Pergolado metálico semelhante a um coreto sem a cobertura, e para ver envolvido por uma vegetação.`,
    Execucao: true,
    DataInauguracao: `11/1999`,
    Latitude: `-22.9331515`,
    Longitude: `-43.1843104`,
};

export const PortaldaPracaDelPrete_AlfredoBrito: Obra = {
    ID: 428,
    Artistas: [artistas.AlfredoBrito],
    Titulo: `Portal da Praça Del Prete`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Portal`,
    Material: `Peça em ferro pintado`,
    Descricao: `Dois portais para criar ambiente junto ao conjunto escultorico de Del Prete, separando e unificando o conjunto.`,
    Execucao: true,
    DataInauguracao: `11/1999`,
    Latitude: `-22.9331507`,
    Longitude: `-43.1844136`,
};

export const ChafarizConcha_FranciscoBolonha: Obra = {
    ID: 430,
    Titulo: `Chafariz Concha`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Chafariz`,
    Material: `Peça em concreto armado`,
    Descricao: `Chafariz em concreto armado, em formato de bacia com bordas onduladas sobre base central, característico do estilo do arquiteto Francisco Bolonha, uma das poucas obras ainda existentes na cidade.
Esta desativado desde o ano de 2004, por solicitação da administração regional.`,
    Execucao: true,
    DataInauguracao: `09/1965`,
    Latitude: `-22.9381691`,
    Longitude: `-43.1906995`,
};

export const BicadaRainha_Desconhecida: Obra = {
    ID: 431,
    Artistas: [artistas.Desconhecida],
    Titulo: `Bica da Rainha`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Chafariz`,
    Material: `Pedra e tijolo com argamassa`,
    Descricao: `A bica se compõe de uma elegante fachada clássica com duas pilastras, sobre os quais se ergue uma platibanda, com a data de 1845 numa cartela ao centro, entre duas rosáceas. Abaixo da platibanda lê-se Bica da Rainha. Ao centro, como que uma janela recoberta com bela grade de ferro e a bica propriamente dita.
Todo o conjunto encontra-se num espaço gradeado, em recuo da rua. As suas águas férreas eram conhecidas muito anteriormente à feição atual do monumento, que recebeu o nome de Rainha D. Maria I, que a frequentava e posteriormente por Carlota Joaquina.
O monumento é adotado pelo Centro Educacional Miraflores.`,
    Execucao: true,
    DataInauguracao: `01/1845`,
    Latitude: `-22.940563`,
    Longitude: `-43.1972203`,
};

export const FontedoLargodoBoticario_Desconhecida: Obra = {
    ID: 432,
    Artistas: [artistas.Desconhecida],
    Titulo: `Fonte do Largo do Boticário`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Chafariz`,
    Material: `Pedra e tijolo com argamassa`,
    Descricao: `Essa singela fonte se compõe de um corpo quadrangular em alvenaria, tendo um vaso na parte superior e na face uma bica de bronze.
A fonte foi construida em 1930, para compor o espaço por sugestão da Sra. Sylvia de Bittencourt, que havia mandao calçar o largo com blocos de pedra.`,
    Execucao: true,
    DataInauguracao: `01/1930`,
    Latitude: `-22.9395755`,
    Longitude: `-43.2014088`,
};

export const ChafarizdaPracaProfessorSilvaMello_AlencastroGraca_JorgeMartinsCancela_CarlosWerneckdeCarvalho: Obra = {
    ID: 433,
    Artistas: [artistas.AlencastroGraca, artistas.JorgeMartinsCancela, artistas.CarlosWerneckdeCarvalho],
    Titulo: `Chafariz da Praça Professor Silva Mello`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Chafariz`,
    Material: `Peça em concreto armado`,
    Descricao: `Da área remanescente do acesso ao túnel Rebouças, foi criado no Largo Professor Silva Mello.
Esta desativado desde maio de 2017.`,
    Execucao: true,
    DataInauguracao: `02/1975`,
    Latitude: `-22.9398178`,
    Longitude: `-43.2019304`,
};

export const ClarisseIndiodoBrasil_HCunhaMelo: Obra = {
    ID: 439,
    Imagem: 'ClarisseIndiodoBrasil_HCunhaMelo.jpg',
    Artistas: [artistas.HCunhaMelo],
    Titulo: `Clarisse Índio do Brasil`,
    Classificacao: 'perene',
    Categoria: 'personalidades',
    TipologiaObra: `Busto`,
    Material: `Peça em bronze e mural  de granito`,
    Descricao: `Na homenagem Clarisse está representada com a fisionomia tranquila, em volta em três figuras anjo na altura do
    ombro.`,
    Execucao: true,
    DataInauguracao: `01/1992`,
    Zona: 'Sul',
    Bairro: 'Humaitá',
    PontoDeReferencia: 'Largo dos Leões',
    Latitude: `-22.9535532`,
    Longitude: `-43.1968612`,
    Fatos: [new Fato('', '', 'Propriedade', 'Pública', [], 'Rio de Janeiro')],
};

export const JCarlos_HumbertoCozzo: Obra = {
    ID: 440,
    Artistas: [artistas.HumbertoCozzo],
    Titulo: `J.Carlos`,
    Classificacao: 'perene',
    Categoria: 'personalidades',
    TipologiaObra: `cabeça`,
    Material: `Peça em bronze e pedestal de granito`,
    Descricao: `A homenagem foi instalada nessa praça pela proximidade a residência de J Carlos, por iniciativa de seus amigos. A cabeça em bronze se sustenta sobre uma coluna circular de granito preto, onde existe uma gravação em baixo relevo com o nome do cartunista e diversos rostos femininos.`,
    Execucao: true,
    DataInauguracao: `06/1961`,
    Latitude: `-22.9604587`,
    Longitude: `-43.203308`,
};

export const ManuelMadruga_FloryGama: Obra = {
    ID: 441,
    Artistas: [artistas.FloryGama],
    Titulo: `Manuel Madruga`,
    Classificacao: 'perene',
    Categoria: 'personalidades',
    TipologiaObra: `busto`,
    Material: `Peça em bronze e pedestal de granito`,
    Descricao: `Foi uma homenagem da Sociedade dos Artistas Nacionais e a Sociedade Brasileira de Belas Artes no 1º aniversário da morte do grande artista.`,
    Execucao: true,
    DataInauguracao: `07/1958`,
    Latitude: `-22.9605414`,
    Longitude: `-43.2037342`,
};

export const QuintinoBocaiuva_HildegardoLeaoVeloso: Obra = {
    ID: 442,
    Artistas: [artistas.HildegardoLeaoVeloso],
    Titulo: `Quintino Bocaiúva`,
    Classificacao: 'perene',
    Categoria: 'personalidades',
    TipologiaObra: `estátua`,
    Material: `Peça em bronze e pedestal de concreto`,
    Descricao: `O monumento foi o projeto vitorioso de um consurso publico. O autor resolveu adotar um projeto simples, com o homenageado em gruande dimessão ( cerca de onze metros de altura), com a descrição biografica na parte posterior.
Foi inicialmente instalado na antiga Praça Piaçava, atual José Mariano, no Jardim Botânico. Por ocasião da construção do viaduto pelo DER, o monumento não foi desmontado. Em 1982, foi restaurado e assentado sobre um pedestal de concreto armado.`,
    Execucao: true,
    DataInauguracao: `11/1944`,
    Latitude: `-22.9610274`,
    Longitude: `-43.2031116`,
};

export const MarcodaAberturadaAvenidaNiemeyer_Desconhecida: Obra = {
    ID: 399,
    Artistas: [artistas.Desconhecida],
    Titulo: `Marco da Abertura da Avenida Niemeyer`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Marco`,
    Material: `Peça em mármore`,
    Descricao: `A placa com a descrição da inauguração e do autor do projeto execução da obra, registrando a importância da obra.`,
    Execucao: true,
    DataInauguracao: `10/1916`,
    Latitude: `-22.989138`,
    Longitude: `-43.2278467`,
};

export const Goleiro_EdgarDuvivier: Obra = {
    ID: 453,
    Artistas: [artistas.EdgarDuvivier],
    Titulo: `Goleiro`,
    Classificacao: 'perene',
    Categoria: 'sublimidade',
    TipologiaObra: `Escultura`,
    Material: `Peça em metal`,
    Descricao: `A peça foi doada à cidade pelo artista, para fazer conjunto com a peça da autoria de seu pai, chamada Encontro, no mesmo parque.
Peça metálica figurativa, na póstura de uma defesa de um goleiro.`,
    Execucao: true,
    DataInauguracao: `11/2011`,
    Latitude: `-22.9725107`,
    Longitude: `-43.2028513`,
};

export const SaoFranciscodeAssis_HumbertoCozzo: Obra = {
    ID: 472,
    Artistas: [artistas.HumbertoCozzo],
    Titulo: `São Francisco de Assis`,
    Classificacao: 'perene',
    Categoria: 'representação religiosa',
    TipologiaObra: `Escultura`,
    Material: `Peça em bronze`,
    Descricao: `Escultura delicada com a figura de São Francisco com uma pomba em uma das mãos.Obra data de 1978`,
    Execucao: true,
    DataInauguracao: `03/1979`,
    Zona: 'Sul',
    Bairro: 'Lagoa',
    PontoDeReferencia: 'Parque da Catacumba',
    Latitude: `-22.9725107`,
    Longitude: `-43.2028513`,
    Fatos: [
        new Fato('', '', 'Propriedade', 'Pública', [], 'Rio de Janeiro'),
        new Fato('', '', 'Doação', 'A Peça foi doada à Prefeitura da cidade pela Empresa H. Guedes Engenharia.', [], 'Rio de Janeiro'),
    ],
};

export const OratoriodeSantaBarbara_Desconhecida: Obra = {
    ID: 473,
    Artistas: [artistas.Desconhecida],
    Titulo: `Oratório de Santa Bárbara`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Oratório`,
    Material: `Peça em resina`,
    Descricao: `A imagem de Sta. Bárbara existente na entrada do tunel foi doada pelas Irmãs doColégio da Providência (já fechado), Rua Pereira da Silva,Laranjeiras.Irmã Superiora na época se chamava Hemmerlé (já falecida) era francesa. A Irmã Neil, contou que quando estavam construindo o túnel,aconteciam muitos acidentes, explosões com dinamites para a construçãoe eles (funcionários e responsáveis) todos os dias pediam paraCelebrar Missa na Capela do Colégio para as vítimas desses acidentes.Então as Irmãs do Colégio decidiram, doar a imagem de Sta. Bárbara é "Padroeira dos artilheiros, dos mineradores e das pessoas trabalham com fogo", para proteção dos trabalhadores.`,
    Execucao: true,
    DataInauguracao: ``,
    Latitude: `-22.9305839`,
    Longitude: `-43.1860972`,
};

export const AGaudi_MoemaBranquinho: Obra = {
    ID: 476,
    Artistas: [artistas.MoemaBranquinho],
    Titulo: `À Gaudi`,
    Classificacao: 'perene',
    Categoria: 'sublimidade',
    TipologiaObra: `Mosaico`,
    Material: `Mosaico de pastilhas`,
    Descricao: `A peça, doada à Prefeitura do Rio, foi executado pelos alunos do Curso de Arquitetura e Urbanismo da Universidade Santa Úrsula, com a coordenação da artista Moema Branquinho. De concreto armado recebeu revestimento em mosaico de pastilhas de vidro Bisazza e fragmentos de vidro.`,
    Execucao: true,
    DataInauguracao: `02/2014`,
    Latitude: `-22.9763856`,
    Longitude: `-43.1999575`,
};

export const BancoNamoradeira_Desconhecida: Obra = {
    ID: 477,
    Artistas: [artistas.Desconhecida],
    Titulo: `Banco Namoradeira`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `banco`,
    Material: `Peça em argamassa`,
    Descricao: `Banco em concreto no padrão Art Déco.`,
    Execucao: true,
    DataInauguracao: ``,
    Latitude: `-22.970746`,
    Longitude: `-43.2070875`,
};

export const MarcodaImigracaoJaponesa_RobertoBurleMarx: Obra = {
    ID: 478,
    Artistas: [artistas.RobertoBurleMarx],
    Titulo: `Marco da Imigração Japonesa`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Marco`,
    Material: `Peça em granito`,
    Descricao: `Nas comemorações do Centenário de Imigração Niponica do Brasil, foram plantadas cem mudas de ipê amarelo, a árvore nacional do Brasil. Finalizando o plantio foi instalado um marco com inscrições em japones, contendo os dados principais do evento.
O projeto paisagístico é do escritório Burle Marx & Cia. Ltda.`,
    Execucao: true,
    DataInauguracao: `06/2008`,
    Latitude: `-22.974456`,
    Longitude: `-43.200971`,
};

export const SagradoCoracaodeJesus_Desconhecida: Obra = {
    ID: 479,
    Artistas: [artistas.Desconhecida],
    Titulo: `Sagrado Coração de Jesus`,
    Classificacao: 'perene',
    Categoria: 'representação religiosa',
    TipologiaObra: `Escultura`,
    Material: `Peça em bronze`,
    Descricao: `A imagem do Sagrado Coração de Jesus está com a presença conhecida na praça desde 1971.`,
    Execucao: true,
    DataInauguracao: ``,
    Latitude: `-22.9620994`,
    Longitude: `-43.2038849`,
};

export const VasodaPracaJoseAcioli_Desconhecida: Obra = {
    ID: 480,
    Artistas: [artistas.Desconhecida],
    Titulo: `Vaso da Praça José Acioli`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Vaso`,
    Material: `Peça em mármore de Carrara`,
    Descricao: `Réplica do Triomphe de Galatée, obra do escultor François Girardon (1628-1715) de data de inauguração desconhecida.
Vaso em mármore ornado com minuciosa cena mitológica em relevo.
O Vase du Triomphe de Galatée, obra do escultor François Girardon (1628-1715),foi encomendado pelo rei Luís XIV para adornar os jardins do Palácio de Versalhes. Naquela época, era comum fazer versões e réplicas das esculturas com base nos moldes de bronze Essa peça tem as medidas iguais a da peça do Louvre, o que permite a probabilidade que ter saído do ateliê do artista.`,
    Execucao: true,
    DataInauguracao: ``,
    Latitude: `-22.9806502`,
    Longitude: `-43.2066739`,
};

export const OratoriodeNossaSenhoradeFatimadeGavea_Desconhecida: Obra = {
    ID: 482,
    Artistas: [artistas.Desconhecida],
    Titulo: `Oratório de Nossa Senhora de Fátima de Gávea`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Oratório`,
    Material: `Peça em resina`,
    Descricao: `Pequena capela doada pelos devotos do Imaculado Coração Nossa Senhora, irmandade que foi iniciada em Portugal e que se espalhou por várias cidades do mundo. Na inauguração houve festa com os leigos religiosos e sua introdução ao espaço público.`,
    Execucao: true,
    DataInauguracao: `03/1994`,
    Latitude: `-22.9785779`,
    Longitude: `-43.2234163`,
};

export const Guarda_corpodaRuaLineudePaulaMachado_Desconhecida: Obra = {
    ID: 484,
    Artistas: [artistas.Desconhecida],
    Titulo: `Guarda-corpo da  Rua Lineu de Paula Machado`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Guarda-corpo`,
    Material: `Peça em argamassa`,
    Descricao: `É uma construção de concreto para proteção dos pedestres, sobre o canal do Jardim Botânico.`,
    Execucao: true,
    DataInauguracao: ``,
    Latitude: `-22.9647339`,
    Longitude: `-43.2166042`,
};

export const FonteHarmonia_JeanJacquesPradier: Obra = {
    ID: 485,
    Artistas: [artistas.JeanJacquesPradier],
    Titulo: `Fonte Harmonia`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Chafariz`,
    Material: `Peça em ferro fundido`,
    Descricao: `Escultura de uma figura feminina segurando em uma das mãos uma harpa e a outra se apoiando em um tonel. Mão se sabe quando chegou ao Brasil, porém foi instalado após ter sido doada à cidade do Rio de Janeiro, pela antiga CEDAG (atualmente CEDAE  Companhia Estadual de Água e Esgoto) em 1970. De acordo com o Jornal do Brasil de 03 de novembro de 1970, a peça iria ser instalada no Largo da Carioca, cuja ideia foi rejeita. Posteriormente foi sugerida a instalação no Largo do Boticário tambem não aceita, sendo então alocada no Largo dos Leões, onde permanece até hoje.
Desativado em data desconhecida.`,
    Execucao: true,
    DataInauguracao: `11/1970`,
    Latitude: `-22.9536396`,
    Longitude: `-43.1969072`,
};

export const ChafarizdaPracaSantosDumont_EmilioGiannelle: Obra = {
    ID: 486,
    Artistas: [artistas.EmilioGiannelle],
    Titulo: `Chafariz da Praça Santos Dumont`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Chafariz`,
    Material: `Peça em concreto armado`,
    Descricao: `Chafariz de jorro de água com um jato central e névoa no entorno. Foi inaugurado pelo Vice Governador Sr. Erasmo Martins e o diretor do departamento de Parques Gildo Boges e pela Comissão Estadual que promove os festejos do Centenário de Santos Dumont. Coube ao departamento de parques a remodelação da praça o projeto e instalação do Chafariz.
Esta desativado desde o ano de 2015, por solicitação da administraçãoregional.`,
    Execucao: true,
    DataInauguracao: `08/1973`,
    Latitude: `-22.9740541`,
    Longitude: `-43.2260712`,
};

export const PontedoParquedaCidade_Desconhecida: Obra = {
    ID: 487,
    Artistas: [artistas.Desconhecida],
    Titulo: `Ponte do Parque da Cidade`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `ponte`,
    Material: `Peça em ferro pintado`,
    Descricao: `Construções de ferro para vencer os dois lados do antigo lago, que se encontra assoreado. São duas pontes semelhantes nas extremidades do lago.`,
    Execucao: true,
    DataInauguracao: ``,
    Latitude: `-22.9799141`,
    Longitude: `-43.2418108`,
};

export const FonteWallacedoParquedaCidade_AugusteLebourg: Obra = {
    ID: 488,
    Artistas: [artistas.AugusteLebourg],
    Titulo: `Fonte Wallace do Parque da Cidade`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `fonte`,
    Material: `Peça em ferro fundido`,
    Descricao: `Fonte criada por encomenda do filantropo inglês Richard Wallace para fornecer água aos habitantes da cidade de Paris. Foi posteriormente vendida para diversos locais do mundo. Essa peça originalmente foi instalada na Praça Calcutá, foi desmontada e guardada no depósito da Fundação Parque e Jardins até 1996, quando foi reinaugurada na atual localização.
Trata-se de uma peça em ferro fundido de cerca dois de altura, composta por três partes, uma base com elementos decorativo de folhagens, uma parte intermediária formada por quatro cariátides, tendo em cima uma cúpula abobadada.
Desativado desde o ano de 2004.`,
    Execucao: true,
    DataInauguracao: ``,
    Latitude: `-22.9799141`,
    Longitude: `-43.2418108`,
};

export const FontedoIndiodoParquedaCidade_FernandoCorreiaDias: Obra = {
    ID: 489,
    Artistas: [artistas.FernandoCorreiaDias],
    Titulo: `Fonte do Ìndio do Parque da Cidade`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `fonte`,
    Material: `Peça em argamassa e azulejos`,
    Descricao: `Trata-se de uma fonte de inspiração marajoara, com um mascara central, típica do período de Art Déco na cidade.`,
    Execucao: true,
    DataInauguracao: ``,
    Latitude: `-22.9799141`,
    Longitude: `-43.2418108`,
};

export const CascataePiscinaNaturaldoParquedaCidade_FernandoCorreiaDias: Obra = {
    ID: 491,
    Artistas: [artistas.FernandoCorreiaDias],
    Titulo: `Cascata e Piscina Natural do Parque da Cidade`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Cascata`,
    Material: `Peça em argamassa e azulejos`,
    Descricao: `Trata-se de uma piscina originada de fonte natural com revestimento de inspiração marajoara típica do período de Art Déco na cidade.`,
    Execucao: true,
    DataInauguracao: ``,
    Latitude: `-22.9799141`,
    Longitude: `-43.2418108`,
};

export const PortaodoParquedaCidade_Desconhecida: Obra = {
    ID: 493,
    Artistas: [artistas.Desconhecida],
    Titulo: `Portão do Parque da Cidade`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Portão`,
    Material: `Bloco de granito`,
    Descricao: `Construção formando com a guarita um conjunto harmônico, completado pelo portão em madeira.`,
    Execucao: true,
    DataInauguracao: ``,
    Latitude: `-22.9799141`,
    Longitude: `-43.2418108`,
};

export const BancoMarajoaradoParquedaCidade_FernandoCorreiaDias: Obra = {
    ID: 494,
    Artistas: [artistas.FernandoCorreiaDias],
    Titulo: `Banco Marajoara do Parque da Cidade`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Banco`,
    Material: `Peça em argamassa e azulejos`,
    Descricao: `Banco decorativo de inspiração marajoara.`,
    Execucao: true,
    DataInauguracao: ``,
    Latitude: `-22.9799141`,
    Longitude: `-43.2418108`,
};

export const CanhaodoParquedaCidade_Desconhecida: Obra = {
    ID: 495,
    Artistas: [artistas.Desconhecida],
    Titulo: `Canhão do Parque da Cidade`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `canhão`,
    Material: `Peça em bronze`,
    Descricao: `São canhões ingleses modelo Armstrog, fabricados entre 1727 a 1797. Desativados na Gra-Bretanha foram vendidos para as armas dos portos brasileiros, que ficaram em uso até 1903.`,
    Execucao: true,
    DataInauguracao: ``,
    Latitude: `-22.9799141`,
    Longitude: `-43.2418108`,
};

export const VasodoParquedaCidade_Desconhecida: Obra = {
    ID: 496,
    Artistas: [artistas.Desconhecida],
    Titulo: `Vaso do Parque da Cidade`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Vaso`,
    Material: `Peça em mármore de Carrara`,
    Descricao: `Peça decorativa no acesso a Capela do Parque`,
    Execucao: true,
    DataInauguracao: ``,
    Latitude: `-22.9799141`,
    Longitude: `-43.2418108`,
};

export const DuploTotem_CeleidaTostes: Obra = {
    ID: 497,
    Artistas: [artistas.CeleidaTostes],
    Titulo: `Duplo Totem`,
    Classificacao: 'perene',
    Categoria: 'sublimidade',
    TipologiaObra: `Escultura`,
    Material: `Peça em argamassa`,
    Descricao: `Trata-se de duas peças formando conjunto.`,
    Execucao: true,
    DataInauguracao: `01/1995`,
    Zona: 'Sul',
    Bairro: 'Gávea',
    PontoDeReferencia: 'Parque da Cidade',
    Latitude: `-22.9799141`,
    Longitude: `-43.2418108`,
    Lugar: 'Parque',
    Fatos: [
        new Fato('', '', 'Propriedade', 'Pública', [], 'Rio de Janeiro'),
        new Fato('1965', '1965', 'Tombamento', 'Tombado pelo INEPAC pelo Decreto 927.', [], 'Rio de Janeiro'),
    ],
};

export const Leao_Desconhecida: Obra = {
    ID: 498,
    Artistas: [artistas.Desconhecida],
    Titulo: `Leão`,
    Classificacao: 'perene',
    Categoria: 'sublimidade',
    TipologiaObra: `cabeça`,
    Material: `Peça em granito`,
    Descricao: `Escultura esculpida em pedra colocada num pedestal situado no acesso a uma das trilhas do parque.`,
    Execucao: true,
    DataInauguracao: ``,
    Zona: 'Sul',
    Bairro: 'Gávea',
    PontoDeReferencia: 'Parque da Cidade',
    Latitude: `-22.9799141`,
    Longitude: `-43.2418108`,
    Fatos: [
        new Fato('', '', 'Propriedade', 'Pública', [], 'Rio de Janeiro'),
        new Fato('1965', '1965', 'Tombamento', 'Tombado pelo INEPAC pelo Decreto 927.', [], 'Rio de Janeiro'),
    ],
};

export const PaineldosDireitosHumanosnaGavea_FrancoiseSchein: Obra = {
    ID: 501,
    Artistas: [artistas.FrancoiseSchein],
    Titulo: `Painel dos Direitos Humanos na Gávea`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Mosaico`,
    Material: `Mosaico de azulejos`,
    Descricao: `Painel parte de um projeto idealizado pela escultora para a divulgação dos direitos humanos dos cidadãos.`,
    Execucao: true,
    DataInauguracao: `01/2001`,
    Latitude: `-22.9821403`,
    Longitude: `-43.2410037`,
};

export const ClariceLispector_EdgarDuvivier: Obra = {
    ID: 502,
    Artistas: [artistas.EdgarDuvivier],
    Titulo: `Clarice Lispector`,
    Classificacao: 'perene',
    Categoria: 'personalidades',
    TipologiaObra: `Escultura`,
    Material: `Peça em bronze`,
    Descricao: `A idealização desta homenagem foi da atriz Beth Goulart, de Teresa Monteiro que promove o passeio O Rio de Clarice, Mariana Muller e Niura Antunes. Apoiada por muitos de várias formas, com destaque por Gregorio Duvivier, e pelos os que assinaram os abaixo-assinados na temporada de "Simplesmente eu Clarice Lispector" (11/dez 2013), de Beth Goulart. A escultura foi realizada com a venda das 40 miniaturas criadas pelo autor.`,
    Execucao: true,
    DataInauguracao: `05/2016`,
    Latitude: `-22.9624703`,
    Longitude: `-43.165415`,
};

export const MuralSemTitulo_AluisioCarvao: Obra = {
    ID: 506,
    Artistas: [artistas.AluisioCarvao],
    Titulo: `Sem titulo`,
    Classificacao: 'perene',
    Categoria: 'sublimidade',
    TipologiaObra: `Mural`,
    Material: `Pintura`,
    Descricao: `Mural em policromia`,
    Altura: '14 000 cm',
    Largura: '20 000 cm',
    Execucao: true,
    DataInauguracao: `1987`,
    Zona: 'Central',
    Bairro: 'Centro',
    PontoDeReferencia: 'Rua Uruguaiana, Praça Monte Castelo',
    Latitude: `-22.9040999`,
    Longitude: `-43.1810923`,
};

export const MarcodaInauguracaodaAutoEstradaLagoaBarra_MarcosKonderNetto: Obra = {
    ID: 508,
    Artistas: [artistas.MarcosKonderNetto],
    Titulo: `Marco da Inauguração da Auto Estrada Lagoa Barra`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Marco`,
    Material: `Peça em concreto armado`,
    Descricao: `Marco erguido numa elevação entre as duas pistas da Avenida Padre Leonel Franca, composta por duas placas de concreto triangulares, com alturas diferentes unidas por outra horizontal.`,
    Execucao: true,
    DataInauguracao: `01/1981`,
    Latitude: `-22.9788858`,
    Longitude: `-43.2286293`,
};

export const MarcoRodoviariodaGavea_Desconhecida: Obra = {
    ID: 509,
    Artistas: [artistas.Desconhecida],
    Titulo: `Marco Rodoviário da Gávea`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Marco`,
    Material: `Peça em gnaisse`,
    Descricao: `O marco tem na sua face frontal, a indicação ERF (Estrada de Rodagem Federal) e informam a distância em quilômetros dali até o Centro. Na face posterior, há a inscrição DF (Distrito Federal). Nas faces esquerda e direita registram a distância de duas localidades próximas. Foram instalados na Cidade nos anos de 1930.`,
    Execucao: true,
    DataInauguracao: ``,
    Latitude: `-22.9819091`,
    Longitude: `-43.2405798`,
};

export const Chacrinha_Ique: Obra = {
    ID: 515,
    Artistas: [artistas.Ique],
    Titulo: `Chacrinha`,
    Classificacao: 'perene',
    Categoria: 'personalidades',
    TipologiaObra: `Estátua`,
    Material: `Peça em bronze`,
    Descricao: `A homenagem foi um pedido da família à Prefeitura do Rio de Janeiro, que procurou um espaço próximo ao local onde
Chacrinha fez sua carreira de sucesso.`,
    Execucao: true,
    DataInauguracao: `11/2010`,
    Zona: 'Sul',
    Bairro: 'Jardim Botânico',
    PontoDeReferencia: 'Rua General Garzon',
    Latitude: `-22.9670206`,
    Longitude: `-43.2182055`,
    Fatos: [
        new Fato('', '', 'Propriedade', 'Pública', [], 'Rio de Janeiro'),
        new Fato('', '', 'Fundição/Atelier', 'FEB- Fundição e Esculturas em Bronze', [], 'Rio de Janeiro'),
    ],
};

export const PadreAntonioVieira_GracaCostaCabral: Obra = {
    ID: 518,
    Artistas: [artistas.GracaCostaCabral],
    Titulo: `Padre Antônio Vieira`,
    Classificacao: 'perene',
    Categoria: 'representações religiosas',
    TipologiaObra: `busto`,
    Material: `Peça em bronze e pedestal de granito`,
    Descricao: `O busto do Padre Antônio Vieira foi um presente da cidade de Lisboa em reciprocidade ao presente da cidade do Rio de Janeiro, um busto de Machado de Assis. 
O monumento está na PUC por cessão de uso pelo Município a fim de garantir a preservação e por interesse da Reitoria da Universidade.`,
    Execucao: true,
    DataInauguracao: `03/2011`,
    Latitude: `-22.9782127`,
    Longitude: `-43.2335129`,
};

export const SergioVieiradeMello_VilmaNoel: Obra = {
    ID: 519,
    Artistas: [artistas.VilmaNoel],
    Titulo: `Sérgio Vieira de Mello`,
    Classificacao: 'perene',
    Categoria: 'personalidades',
    TipologiaObra: `busto`,
    Material: `Peça em bronze e pedestal de concreto`,
    Descricao: `A homenagem foi uma doação da própria escultora à cidade do Rio de Janeiro. O monumento foi instalado no Largo que ja havia sido homologado por decreto como local em sua homenagem, em comemoração ao décimo ano de sua morte.`,
    Execucao: true,
    DataInauguracao: `03/2013`,
    Latitude: `-22.9803607`,
    Longitude: `-43.2241417`,
};

export const Chopin_AugustoZamoysky: Obra = {
    ID: 521,
    Artistas: [artistas.AugustoZamoysky],
    Titulo: `Chopin`,
    Classificacao: 'perene',
    Categoria: 'personalidades',
    TipologiaObra: `estátua`,
    Material: `Peça em bronze e pedestal de concreto`,
    Descricao: `O monumento foi inaugurado na Praia Vermelha em 1944. Em 1950 foi transferido para a Praça Floriano permanecendo ai por nove anos. Foi novamente removido em 30 de junho de 1959, para o local de origem.
O monumento foi uma iniciativa do professor Aloísio de Castro e da Associação dos Poloneses do Rio de Janeiro, em desagravo à destruição da estátua de Chopin, em Varsóvia, pelas tropas alemãs invasoras , no quinto aniversário da deflagração da Segunda Guerra Mundial com a invasão da Polonia. Foi doado pela colônia polonesa ao Brasil. Trata-se de uma estatua em bronze, sobre pedestal cúbico, representado o compositor de pé com expressão pensativa, chamdo pelos polonose "Estatua da Saudade"`,
    Execucao: true,
    DataInauguracao: `09/1944`,
    Latitude: `-22.9551896`,
    Longitude: `-43.165522`,
};

export const MarechalRondon_NewtonSa: Obra = {
    ID: 522,
    Imagem: 'MarechalRondon_NewtonSa.jpg',
    Artistas: [artistas.NewtonSa],
    Titulo: `Marechal Rondon`,
    Classificacao: 'perene',
    Categoria: 'personalidades',
    TipologiaObra: `Busto`,
    Material: `Peça em bronze e pedestal de granito`,
    Descricao: `A homenagem foi erigido em comemoração ao 15 º aniversário da Embratel (Empresa Brasileira de Telecomunicações),
    ao seu patrono. O Marechal esta representando com sua farda.
Foi inaugurado pelo General Frederico Rondon, primo do homenageaso .`,
    Execucao: true,
    DataInauguracao: `09/1980`,
    Zona: 'Sul',
    Bairro: 'Urca',
    PontoDeReferencia: 'Praia Vermelha',
    Latitude: `-22.9544749`,
    Longitude: `-43.1654532`,
    Fatos: [new Fato('', '', 'Propriedade', 'Pública', [], 'Rio de Janeiro')],
};

export const Pasteur_HeitordaSilvaCosta: Obra = {
    ID: 523,
    Artistas: [artistas.HeitordaSilvaCosta],
    Titulo: `Pasteur`,
    Classificacao: 'perene',
    Categoria: 'personalidades',
    TipologiaObra: `busto`,
    Material: `Peça em bronze com pedestal de mármore`,
    Descricao: `Homenagem realizada pelo engenheiro arquiteto Heitor da Silva Costa, com a colaboração do Professor Gronchi. Foi inaugurado em 1925 no começo da averinda de mesmo nome e transferida para essa praça ao lado da antiga Escola de Medicina em agosto de 1947. Foi realizado poriniciativa da Sociedade de Medicina e Cirurgia. Na inauguração estavam presentes o Ministro das Relações Exteriores e o Emabixador da Franaça.
A herma ( meio corpo) de Pasteur, o representa pensativoem busca da solução do problema da raiva, no simbolismo de um cão, que emerge da base do pedestal.`,
    Execucao: true,
    DataInauguracao: `06/1925`,
    Latitude: `-22.9538729`,
    Longitude: `-43.1693478`,
};

export const EusebiodeOliveira_CesarDoria: Obra = {
    ID: 524,
    Artistas: [artistas.CesarDoria],
    Titulo: `Eusébio de Oliveira`,
    Classificacao: 'perene',
    Categoria: 'personalidades',
    TipologiaObra: `busto`,
    Material: `Peça em bronze e pedestal de granito`,
    Descricao: `A homenagem foi erguida por iniciativa do Departamento Nacional de Produção Mineral e do Ministério da Agricultura, em frente à sede do antigo Serviço Geológico e Mineralógico do Brasil,que por longos anos foi diretor dessa tradicional instituição científica.
Na obra, foram empregados blocos de pedras de cores azul, verde e rosa, simbolizando a especialização em que tanto se aprofundou o espírito pesquisador do geólogo homenageado.`,
    Execucao: true,
    DataInauguracao: `12/1941`,
    Latitude: `-22.9539283`,
    Longitude: `-43.169591`,
};

export const CacildaBecker_Desconhecida: Obra = {
    ID: 525,
    Artistas: [artistas.Desconhecida],
    Titulo: `Cacilda Becker`,
    Classificacao: 'perene',
    Categoria: 'sublimidade',
    TipologiaObra: `Mosaico`,
    Material: `Peça em concreto com imagem`,
    Descricao: `Singelo monumento monolitico, erguido por iniciativa da Prefeitura, no qual estão fixados duas fotografias da grande atriz de cada lado do mural, como cartazes de divulgação de seus espetáculos descrevendo sua biografia.
Em outubro de 2016 o painel foi refeito pela artista Luciana Palma, desta vez em mosaico de azulejos coloridos.`,
    Execucao: true,
    DataInauguracao: `05/2002`,
    Latitude: `-22.9529268`,
    Longitude: `-43.1691992`,
};

export const PomonanoUrca_Desconhecida: Obra = {
    ID: 526,
    Artistas: [artistas.Desconhecida],
    Titulo: `Pomona no Urca`,
    Classificacao: 'perene',
    Categoria: 'sublimidade',
    TipologiaObra: `Escultura`,
    Material: `Peça em mármore de Carrara com pedestal de gnaisse`,
    Descricao: `Escultura feminina com frutos nas mãos de linhas neoclássicas. `,
    Execucao: true,
    DataInauguracao: `01/1963`,
    Latitude: `-22.9555294`,
    Longitude: `-43.1655727`,
};

export const CeresnaUrca_Desconhecida: Obra = {
    ID: 527,
    Artistas: [artistas.Desconhecida],
    Titulo: `Ceres na Urca`,
    Classificacao: 'perene',
    Categoria: 'sublimidade',
    TipologiaObra: `Escultura`,
    Material: `Peça em mármore com pedestal de gnaisse`,
    Descricao: `Escultura feminina com espigas de trigo em suas mãos, numa representação neoclássica`,
    Execucao: true,
    DataInauguracao: `01/1963`,
    Latitude: `-22.9555294`,
    Longitude: `-43.1655727`,
};

export const VestalnaUrca_Desconhecida: Obra = {
    ID: 528,
    Artistas: [artistas.Desconhecida],
    Titulo: `Vestal na Urca`,
    Classificacao: 'perene',
    Categoria: 'personalidade',
    TipologiaObra: `Escultura`,
    Material: `Peça em mármore de Carrara com pedestal de gnaisse`,
    Descricao: `Escultura feminina com uma chama sagrada nas mãos, uma representação neoclássica.`,
    Execucao: true,
    DataInauguracao: `01/1963`,
    Latitude: `-22.954543`,
    Longitude: `-43.1653888`,
};

export const FloranaUrca_Desconhecida: Obra = {
    ID: 529,
    Artistas: [artistas.Desconhecida],
    Titulo: `Flora na Urca`,
    Classificacao: 'perene',
    Categoria: 'sublimidade',
    TipologiaObra: `Escultura`,
    Material: `Peça em mármore de Carrara com pedestal de gnaisse`,
    Descricao: `Escultura feminina neoclássica representando Flora com a cabeça coroada de flores.`,
    Execucao: true,
    DataInauguracao: `01/1963`,
    Latitude: `-22.954543`,
    Longitude: `-43.1653888`,
};

export const HeroisdeLagunaeDourados_AntonioPintodeMattos: Obra = {
    ID: 530,
    Artistas: [artistas.AntonioPintodeMattos],
    Titulo: `Heróis de Laguna e Dourados`,
    Classificacao: 'perene',
    Categoria: 'personalidades',
    TipologiaObra: `Escultura`,
    Material: `Peça e alegorias em bronze e pedestal de granito`,
    Descricao: `A idéia da elevação de um monumento aos heróis do drama épico da Retirada da Laguna e de Dourados, capitaneados pelo Tenente Antônio João, data de 1920. O primeiro projeto proposto foi de autoria do General Maciel de Miranda, e deveria ser erguido no pátio interno do Quartel-general do Rio de Janeiro, depois Ministério da Guerra. O atual monumento, em bronze e granito foi uma iniciativa do Coronel Pedro Cordolino Ferreira de Azevedo.
Sobre uma base circular, esta uma cripta onde se encontram os retos mortais do Coronel Camisão, do Guia Lopes e o cenotáfio do Tenente Antônio João, desde 15 de novembro de 1941 quando foi inaugurada. Desta ergue-se a coluna onde esta a alegoria da Vitória. Ao centro da coluna estão as estátuas dos três principais heróis: o Tenente Antônio João, no momento em que, baleado, cambaleando; o Guia Lopes, recurvado, apoiando o queixo no dorso da mão esquerda, e o Coronel Camisão, com a fisionomia de quem tem uma grave decisão a tomar, tendo numa das mãos a espada e na outra o mapa de campanha. Mais acima, do ponto onde parte a coluna, erguem-se três grandes alegorias em bronze, representando a Pátria, a Espada e a História
Diversos artistas participaram na execução monumento: a grade à entrada da cripta é de Curzio Zani; a porta de entrada do recinto de Calmon Barreto; a imagem de Cristo sobre a lápide do mesmo artista; o lanceiro guardando o sarcófago de Leão Veloso, e os sete medalhões com efígies e nomes dos heróis de Adalberto de Matos.`,
    Execucao: true,
    DataInauguracao: `12/1938`,
    Latitude: `-22.9546327`,
    Longitude: `-43.1666687`,
};

export const IntentonaComunista_HumbertoCozzo: Obra = {
    ID: 531,
    Artistas: [artistas.HumbertoCozzo],
    Titulo: `Intentona Comunista`,
    Classificacao: 'perene',
    Categoria: 'narratividade',
    TipologiaObra: `Escultura`,
    Material: `Peça em bronze com pedestal de granito`,
    Descricao: `Em 1935, ocorreu a tentativa de golpe de estado no Rio de Janeiro, com a sublevação do 3º Regimento de Infantaria, na Praia Vermelha. Enquanto os outros focos de insurreição foram debelados no 3º Regimento de Infantaria, sob a chefia de Agildo Barata, provocou a morte de 31 militares legalistas. No dia seguinte, após a pronta ação do General Dutra, esse derradeiro e mais sanguinário foco do levante nacional capitaneado por Luiz Carlos Prestes estava completamente vencido. O resultado, a longo prazo serviu para a instalação da ditadura do Estado Novo, em 1937.
As vítimas, originalmente sepultadas no Cemitério de São João Batista, foram para esse monumento estilo art decor.Ao centro, numa coluna ladeada por duas urnas, vê-se a figura da República, com uma coroa de louros nas mãos. A seus pés, mais à frente, ergue-se a estátua em bronze de um soldado ferido.
O Monumento em 1974 foir transferido do Cemitério São João Batista para a praça.`,
    Execucao: true,
    DataInauguracao: `01/1974`,
    Latitude: `-22.9551823`,
    Longitude: `-43.1665068`,
};

export const MarcodaRevolucaode1964_Desconhecida: Obra = {
    ID: 532,
    Artistas: [artistas.Desconhecida],
    Titulo: `Marco da Revolução de 1964`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Marco`,
    Material: `Bloco de granito com placa de bronze`,
    Descricao: `Trata-se de um bloco com uma placa em bronze onde esta descrito que neste local, herois militares, resistiram a insurreição comunista de 1935.`,
    Execucao: true,
    DataInauguracao: `11/1964`,
    Latitude: `-22.9546327`,
    Longitude: `-43.1666687`,
    Fatos: [new Fato('', '', 'Propriedade', 'Pública', [], 'Rio de Janeiro')],
};

export const AmuradadaRuaGeneralUrquisa_Desconhecida: Obra = {
    ID: 533,
    Artistas: [artistas.Desconhecida],
    Titulo: `Amurada da Rua General Urquisa`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Amurada`,
    Material: `Peça em concreto revestido por azulejo`,
    Descricao: `É uma murada cercada com duas escadarias e um mural de azulejos decorativos.`,
    Execucao: true,
    DataInauguracao: ``,
    Latitude: `-22.9808041`,
    Longitude: `-43.2251673`,
};

export const FradesdaPraiaVermelha_Desconhecida: Obra = {
    ID: 534,
    Artistas: [artistas.Desconhecida],
    Titulo: `Frades da Praia Vermelha`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Frade`,
    Material: `Bloco de gnaisse esculpido`,
    Descricao: `Frades de pedra esculpida de forma cilíndrica.`,
    Execucao: true,
    DataInauguracao: ``,
    Latitude: `-22.95502`,
    Longitude: `-43.1654889`,
};

export const SaoPedrodoMar_EdgarDuvivier: Obra = {
    ID: 535,
    Artistas: [artistas.EdgarDuvivier],
    Titulo: `São Pedro do Mar`,
    Classificacao: 'perene',
    Categoria: 'representações religiosas',
    TipologiaObra: `Escultura`,
    Material: `Peça em bronze`,
    Descricao: `Singela escultura de corpo de cilindrico, representando o Apóstolo sobre uma pedra da baía.
Segundo o Sr. José Carlos Audiface de Brito " Indo a Itália após Torneio Mundial de Caça Submarino, conheci em Rapallo o Cristo submerso. Tive então a ideia da imagem de São Pedro. Regressando ao Brasil, conseguiu o apoio do caçador e jornalista João Carlos Vogt e do escultor Edgard Duvivier Com subscrição levantou os fundos necessários à fundição. A ideia inicial de colocá-la no fundo do mar nas Cagaras, foi abandonada para possibilitar o acesso a mesma de maior número de pessoas, opinando-se pela colocação na Urca em frente a igreja cujo o pároco padre Barbosa, que colaborou com o projeto. A imagem de São Pedro executada para ser olhada de cima para baixo, na previsão inicial de colocá-la no fundo do mar nas ilhas Cagaras, Na cerimônia de colocação, em 1959, participaram os membros da equipe brasileira ao mencionado I Torneio Mundial de Caça Submarina em Portugual, e os desportistas Vitório Berredo, Victor Wellisch, Américo Santarelle e outros."`,
    Execucao: true,
    DataInauguracao: `07/1959`,
    Latitude: `-22.9483318`,
    Longitude: `-43.165671`,
};

export const PontedaAvenidaPortugal_Desconhecida: Obra = {
    ID: 536,
    Artistas: [artistas.Desconhecida],
    Titulo: `Ponte da Avenida Portugal`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `ponte`,
    Material: `Peça em concreto armado com balaustre de argamassa`,
    Descricao: `Ponte construída para servir de entrada monumental para a Exposição Nacional de 1908, comemorativa do Centenário da Abertura dos Portos. Nessa ocasião teve início os aterros entre a Pedra da Urca e a atual Avenida Pasteur. Em setembro de 1922 a ponte foi reformada para as comemorações do Centenário da Independência do Brasil.<`,
    Execucao: true,
    DataInauguracao: `01/1908`,
    Latitude: `-22.9519744`,
    Longitude: `-43.1694687`,
};

export const MosaicoRosadosVentosdaUrca_Desconhecida: Obra = {
    ID: 537,
    Artistas: [artistas.Desconhecida],
    Titulo: `Mosaico Rosa dos Ventos da Urca`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `piso`,
    Material: `Pedras portuguesas`,
    Descricao: `Piso representando uma rosa dos ventos, nas três cores desse tipo de pavimentação, branco, negro e castanho.<`,
    Execucao: true,
    DataInauguracao: ``,
    Latitude: `-22.9518261`,
    Longitude: `-43.1692833`,
};

export const Guarda_corpodaAvenidaPortugal_Desconhecida: Obra = {
    ID: 538,
    Artistas: [artistas.Desconhecida],
    Titulo: `Guarda-corpo da Avenida Portugal`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Guarda-corpo`,
    Material: `Peça em argamassa`,
    Descricao: `Murada construída para a Exposição Nacional de 1908.A Exposição foi promovida pelo Governo Federal e destinava a comemorar o centenário da Abertura dos Portos as Nações Amigas.`,
    Execucao: true,
    DataInauguracao: `01/1908`,
    Latitude: `-22.9517387`,
    Longitude: `-43.1691738`,
};

export const ChaminedaUrca_Desconhecida: Obra = {
    ID: 539,
    Artistas: [artistas.Desconhecida],
    Titulo: `Chaminé da Urca`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Chaminé`,
    Material: `Peças de tijolo com argamassa`,
    Descricao: `Chaminé de tijolos, reliquia da antiga usina da<em>City Improvements</em>que ali funcionou. Contrução de grande dimensão tem base de blocos de pedra e coluna de tijolo.`,
    Execucao: true,
    DataInauguracao: ``,
    Latitude: `-22.9553712`,
    Longitude: `-43.1734979`,
};

export const ChafarizdaPraiaVermelha_AzevedoNeto: Obra = {
    ID: 540,
    Artistas: [artistas.AzevedoNeto],
    Titulo: `Chafariz da Praia Vermelha`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Chafariz`,
    Material: `Peça em argamassa`,
    Descricao: `Lago retangular com jorros de água partindo das laterais para o centro.
Desativado desde maio de 2017`,
    Execucao: true,
    DataInauguracao: `01/1940`,
    Latitude: `-22.954726`,
    Longitude: `-43.1666705`,
};

export const Guarda_corpodoLargodosGuimaraes_Desconhecida: Obra = {
    ID: 543,
    Artistas: [artistas.Desconhecida],
    Titulo: `Guarda-corpo do Largo dos Guimarães`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Guarda-corpo`,
    Material: `Peça em ferro fundido`,
    Descricao: `Guarda corpo na divisão entre os dois níveis do logradouro, com cerca de um metro de altura e montantes de metro de altura num delicado trabalho de fundição. O conjunto tem cerca de 300 metros com escadas para acesso entre as duas faixas de rolamento.`,
    Execucao: true,
    DataInauguracao: ``,
    Latitude: `-22.9215591`,
    Longitude: `-43.185946`,
};

export const AmuradadoLargodosGuimaraes_Desconhecida: Obra = {
    ID: 544,
    Artistas: [artistas.Desconhecida],
    Titulo: `Amurada do Largo dos Guimarães`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `amurada`,
    Material: `Bloco de granito`,
    Descricao: `Construção com a técnica de pedra seca,para sustentação para o nível mais alto do logradouro.`,
    Execucao: true,
    DataInauguracao: ``,
    Latitude: `-22.9215591`,
    Longitude: `-43.185946`,
};

export const PisodePedeMolequenoLargodosNeves_Desconhecida: Obra = {
    ID: 545,
    Artistas: [artistas.Desconhecida],
    Titulo: `Piso de Pé de Moleque no Largo dos Neves`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Piso`,
    Material: `Seixos e lascas de granito`,
    Descricao: `Piso original resquício da ocupação.`,
    Execucao: true,
    DataInauguracao: ``,
    Latitude: `-22.9163181`,
    Longitude: `-43.1918714`,
};

export const PisodePedeMolequenaLadeiradoVianna_Desconhecida: Obra = {
    ID: 546,
    Artistas: [artistas.Desconhecida],
    Titulo: `Piso de Pé de Moleque na Ladeira do Vianna`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Piso`,
    Material: `Seixos e lascas de granito`,
    Descricao: `Piso original resqício da ocupação.`,
    Execucao: true,
    DataInauguracao: ``,
    Latitude: `-22.9157048`,
    Longitude: `-43.1931438`,
};

export const PisodePedeMolequenaTravessaXavierdoPassos_Desconhecida: Obra = {
    ID: 547,
    Artistas: [artistas.Desconhecida],
    Titulo: `Piso de Pé de Moleque na Travessa Xavier do Passos`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Piso`,
    Material: `Seixos e lascas de granito`,
    Descricao: `Piso original resquício da ocupação.`,
    Execucao: true,
    DataInauguracao: ``,
    Latitude: `-22.9383812`,
    Longitude: `-43.2071228`,
};

export const PisodePedeMolequenaRuaMigueldePaiva_Desconhecida: Obra = {
    ID: 548,
    Artistas: [artistas.Desconhecida],
    Titulo: `Piso de Pé de Moleque na Rua Miguel de Paiva`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `piso`,
    Material: `Seixos e lascas de granito`,
    Descricao: `Piso original resquício da ocupação.`,
    Execucao: true,
    DataInauguracao: ``,
    Latitude: `-22.9194468`,
    Longitude: `-43.19189`,
};

export const PisodePedeMolequedaLadeiradoMeirelles_Desconhecida: Obra = {
    ID: 549,
    Artistas: [artistas.Desconhecida],
    Titulo: `Piso de Pé de Moleque da Ladeira do Meirelles`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Piso`,
    Material: `Seixos e lascas de granito`,
    Descricao: `Piso original, resquício da ocupação.`,
    Execucao: true,
    DataInauguracao: ``,
    Latitude: `-22.9218364`,
    Longitude: `-43.1868242`,
};

export const PisoemPedeMolequedaEstradadasPaineiras_Desconhecida: Obra = {
    ID: 550,
    Artistas: [artistas.Desconhecida],
    Titulo: `Piso em Pé de Moleque da Estrada das Paineiras`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Piso`,
    Material: `Seixos e lascas de granito`,
    Descricao: `Piso original, resquício da ocupação.`,
    Execucao: true,
    DataInauguracao: ``,
    Latitude: `-22.9451334`,
    Longitude: `-43.2052628`,
};

export const PisodePedeMolequenaRuaPaulaRamos_Desconhecida: Obra = {
    ID: 551,
    Artistas: [artistas.Desconhecida],
    Titulo: `Piso de Pé de Moleque na Rua Paula Ramos`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `piso`,
    Material: `Seixos e lascas de granito`,
    Descricao: `Piso original resquício da ocupação.`,
    Execucao: true,
    DataInauguracao: ``,
    Latitude: `-22.9359052`,
    Longitude: `-43.2134294`,
};

export const AmuradadaRuaAprazivel_Desconhecida: Obra = {
    ID: 552,
    Artistas: [artistas.Desconhecida],
    Titulo: `Amurada da Rua Aprazível`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `amurada`,
    Material: `Blocos de granito`,
    Descricao: `Construção com a técnica de pedra seca, de sustentação para o nível mais alto do logradouro.`,
    Execucao: true,
    DataInauguracao: ``,
    Latitude: `-22.924754`,
    Longitude: `-43.187005`,
};

export const FontedoChororo_Desconhecida: Obra = {
    ID: 553,
    Artistas: [artistas.Desconhecida],
    Titulo: `Fonte do Chororó`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `fonte`,
    Material: `Pedra e tijolo com argamassa`,
    Descricao: `Fonte construída em argamassa de cimento, composta por dois tanques que acumula a água do Rio Chororó, em andares diferenciados, revestida em azulejo com motivos florais estilizados em azul e branco. Na face frontal de uma das bacias existe uma placa em bronze com o nome Chororó PNT`,
    Execucao: true,
    DataInauguracao: `01/1925`,
    Latitude: `-22.9412287`,
    Longitude: `-43.2105207`,
};

export const CeresdoJardimdeValongo_Desconhecida: Obra = {
    ID: 555,
    Artistas: [artistas.Desconhecida],
    Titulo: `Ceres do Jardim de Valongo`,
    Classificacao: 'perene',
    Categoria: 'sublimidade',
    TipologiaObra: `Escultura`,
    Material: `Peça em mármore de Carrara`,
    Descricao: `A escultura foi instalada no Cais onde desembarcaria a Imperatriz Tereza Crisitna. De estilo neoclassico, em mármore de Carrara, é uma do conjunto de quatro esculturas que são as primeiras peças em área pública da Cidade. Foi transferida para o Jardim do Valongo quando de sua construção por Pereira Passos.
A escultura éesculpida com grandes e vaporosas vestes e cabelos presos e traças e pés descalços, apresenta em uma das mãos um ramalhete indicando o plantio como sua missão de proteção.
É uma réplica da peça Faustine, de Thomas Regnaudin, existente nos Jardins de Versailles, na França.`,
    Execucao: true,
    DataInauguracao: `01/1843`,
    Latitude: `-22.8988313`,
    Longitude: `-43.1876692`,
};

export const MartedoJardimdoValongo_Desconhecida: Obra = {
    ID: 556,
    Artistas: [artistas.Desconhecida],
    Titulo: `Marte do Jardim do Valongo`,
    Classificacao: 'perene',
    Categoria: 'sublimidade',
    TipologiaObra: `Escultura`,
    Material: `Peça em mármore de Carrara`,
    Descricao: `A escultura foi instalada no Cais onde desembarcaria a Imperatriz Tereza Cristina. De estilo neoclássica é uma do conjunto de quatro peças, as primeiras peças em área pública da Cidade. Foi transferida para o Jardim do Valongo quando de sua construção por Pereira Passos em 1906.
A peça neoclássica foi esculpida com veste de um guerreiro romano, com capacete e apoiado num tronco, por trás da figura entremeado a sua roupagem esta presa uma cobra. Seu pé está calçado com sandálias romanas.`,
    Execucao: true,
    DataInauguracao: `01/1843`,
    Latitude: `-22.8988313`,
    Longitude: `-43.1876692`,
};

export const MercuriodoJardimdoValongo_Desconhecida: Obra = {
    ID: 557,
    Artistas: [artistas.Desconhecida],
    Titulo: `Mercúrio do Jardim do Valongo`,
    Classificacao: 'perene',
    Categoria: 'sublimidade',
    TipologiaObra: `Escultura`,
    Material: `Peça em mármore de Carrara`,
    Descricao: `A escultura foi instalada no Cais onde desembarcaria a Imperatriz Tereza Crisitna em 1943, de estilo neoclássica é uma do conjunto de quatro peças, as primeiras peças em área pública da Cidade. Foi transferida para o Jardim do Valongo quando de sua construção por Pereira Passos em 1906.
Escultura neoclássica esculpida em elegantes vestes tendo em sua mão esquerda um cajado preso a uma cobra. Na cabeça suporta um capacete com pequenas asas e pés descalços.
A peça é uma reprodução de Hermes clássica.`,
    Execucao: true,
    DataInauguracao: `01/1843`,
    Latitude: `-22.8988313`,
    Longitude: `-43.1896557`,
};

export const MinervadoJardimdoValongo_Desconhecida: Obra = {
    ID: 558,
    Artistas: [artistas.Desconhecida],
    Titulo: `Minerva do Jardim do Valongo`,
    Classificacao: 'perene',
    Categoria: 'sublimidade',
    TipologiaObra: `Escultura`,
    Material: `Peça em mármore de Carrara`,
    Descricao: `A escultura foi instalada no Cais onde desembarcaria a Imperatriz Tereza Crisitna. De estilo neoclássico é uma do conjunto de quatro peças, as primeiras peças em área pública da Cidade. Foi transferida para o Jardim do Valongo quando de sua construção por Pereira Passos em 1906.
Peça com um grande panejamento que cobre seu corpo, carregada em sua cabeça um capacete dos guerreiros. Uma de suas mãos prende a roupa em seu corpo e a outra se encontra quebrada (deveria segurar uma lança ou espada). Seus pés estão calcados dando elegância.
A peça é uma reprodução da obra Athenas de Giustiniani existente no Museu do Vaticano.`,
    Execucao: true,
    DataInauguracao: `01/1843`,
    Latitude: `-22.8989298`,
    Longitude: `-43.1876584`,
};

export const AmuradadoJardimdeValongo_LuizRey: Obra = {
    ID: 559,
    Artistas: [artistas.LuizRey],
    Titulo: `Amurada do Jardim de Valongo`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Amurada`,
    Material: `Blocos de gnaisse com argamassa`,
    Descricao: `Construção de pedras seca revestida com argamassa de areia e pó de pedra.`,
    Execucao: true,
    DataInauguracao: `01/1906`,
    Latitude: `-22.8989924`,
    Longitude: `-43.1876515`,
};

export const EscadariadoJardimdoValongo_LuizRey: Obra = {
    ID: 560,
    Artistas: [artistas.LuizRey],
    Titulo: `Escadaria do Jardim do Valongo`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `escada`,
    Material: `Bloco de granito`,
    Descricao: `Construção no central da amurada para acesso ao jardim suspenso e ao Morro do Valongo.`,
    Execucao: true,
    DataInauguracao: `01/1906`,
    Latitude: `-22.8989924`,
    Longitude: `-43.1876515`,
};

export const AmuradadeRocailledoJardimdoValongo_LuizRey: Obra = {
    ID: 561,
    Artistas: [artistas.LuizRey],
    Titulo: `Amurada de Rocaille do Jardim do Valongo`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Amurada`,
    Material: `Peça de rocaille em argamassa,`,
    Descricao: `Encosta protegida com argamassa seguindo a declividade natural criando ninchos imitando pedra natural.`,
    Execucao: true,
    DataInauguracao: `01/1906`,
    Latitude: `-22.8989924`,
    Longitude: `-43.1876515`,
};

export const Guarda_corpodoJardimdoValongo_LuizRey: Obra = {
    ID: 562,
    Artistas: [artistas.LuizRey],
    Titulo: `Guarda-corpo do Jardim do Valongo`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Guarda-corpo`,
    Material: `Peça de rocaille em argamassa,`,
    Descricao: `Construção para proteção dos pedestres, imitando tronco de arvore caracteristica dos jardins românticos.`,
    Execucao: true,
    DataInauguracao: `01/1906`,
    Latitude: `-22.8989924`,
    Longitude: `-43.1876515`,
};

export const CaisdoValongo_Desconhecida: Obra = {
    ID: 563,
    Artistas: [artistas.Desconhecida],
    Titulo: `Cais do Valongo`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `obras públicas`,
    Material: `Bloco de granito`,
    Descricao: `Cais do Valongo foi construído em 1811 para o desembarque e comércio de escravos. Em 1843, foi remodelado por Grandjean de Montign como Cais da Imperatriz. Em 1911 foi aterrado e deu lugar à Praça do Comércio. Em 2011,durante as obras urbanas, onde ocorreu pesquisas arqueologicas apareceu resquício do antigo cais foram redescobertos.`,
    Execucao: true,
    DataInauguracao: `07/2012`,
    Latitude: `-22.896706`,
    Longitude: `-43.1870698`,
};

export const PisodePedeMolequedaRuaJogodaBola_Desconhecida: Obra = {
    ID: 566,
    Artistas: [artistas.Desconhecida],
    Titulo: `Piso de Pé de Moleque da Rua Jogo da Bola`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Piso`,
    Material: `Seixos e lascas de granito`,
    Descricao: `Piso original preservado em parte na integridade.`,
    Execucao: true,
    DataInauguracao: ``,
    Latitude: `-22.898572`,
    Longitude: `-43.1858124`,
};

export const PisodePedeMolequedoBecoJoaoJose_Desconhecida: Obra = {
    ID: 567,
    Artistas: [artistas.Desconhecida],
    Titulo: `Piso de Pé de Moleque do Beco João José`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Piso`,
    Material: `Seixos e lascas de granito`,
    Descricao: `Rua com o calçamento original preservado.`,
    Execucao: true,
    DataInauguracao: ``,
    Latitude: `-22.8978855`,
    Longitude: `-43.1843437`,
};

export const CoretodaPracaHarmonia_Desconhecida: Obra = {
    ID: 568,
    Artistas: [artistas.Desconhecida],
    Titulo: `Coreto da Praça Harmonia`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Coreto`,
    Material: `Peças de tijolo com argamassa`,
    Descricao: `Em 20 de janeiro de 1912 foi assentado um coreto para a música, no local onde havia um Chafariz de abastecimento. O coreto foi demolido sendo construiído novamente em 1978, nada parecido com o antigo em ferro.
Construção de planta quadrada em concreto, com cobertura apoiada pilares de madeira. O coreto foi construído sem cobertura com uma estrutura de pergolado. As telhas francesas foram instaladas em 2012.`,
    Execucao: true,
    DataInauguracao: `01/1978`,
    Latitude: `-22.8951785`,
    Longitude: `-43.1916191`,
};

export const NossaSenhoradaImaculadaConceicaodoMorrodaConceicao_Desconhecida: Obra = {
    ID: 569,
    Artistas: [artistas.Desconhecida],
    Titulo: `Nossa Senhora da Imaculada Conceição do Morro da Conceição`,
    Classificacao: 'perene',
    Categoria: 'representação religiosa',
    TipologiaObra: `Escultura`,
    Material: `Peça em argamassa`,
    Descricao: `Imagem da patrona do Morro da Conceição. Foi oferecida pelo Serviço Geografico do Exercito para os 10.000 habitantes do lugar. Foi instalada no ano do centenário do dogma de Imaculada Conceição de Nossa Senhora.
A pedestal foi realizada pelosIrmãos Bernadelle, Londres nº 460, Bonmsucesso .`,
    Execucao: true,
    DataInauguracao: `01/1954`,
    Latitude: `-22.8988554`,
    Longitude: `-43.1830473`,
};

export const OratorioCapeladasAlmas_Desconhecida: Obra = {
    ID: 570,
    Artistas: [artistas.Desconhecida],
    Titulo: `Oratório Capela das Almas`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Oratório`,
    Material: `Pedra e tijolo com argamassa`,
    Descricao: `Oratório com porta em arco ogival e coroamento em abóboda, é uma homenagem aos combatentes que não resistiram à Guerra de Canudos, em 1897, na Bahia. Foi erguido por soldados que sobreviveram e vieram para o Rio, dando origem e nome à primeira favela da Cidade.`,
    Execucao: true,
    DataInauguracao: `01/1902`,
    Latitude: `-22.899592`,
    Longitude: `-43.194427`,
};

export const EscadariadoMorrodoLivramento_Desconhecida: Obra = {
    ID: 571,
    Artistas: [artistas.Desconhecida],
    Titulo: `Escadaria do Morro do Livramento`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `escada`,
    Material: `Bloco de granito`,
    Descricao: `Escadaria construida com pavimentação em paralelepipedo e espelhos em blocos de granito originais.`,
    Execucao: true,
    DataInauguracao: ``,
    Latitude: `-22.8992598`,
    Longitude: `-43.1890055`,
};

export const PainelGentileza2_ProfetaGentileza: Obra = {
    ID: 573,
    Artistas: [artistas.ProfetaGentileza],
    Titulo: `Painel Gentileza 2`,
    Classificacao: 'efemero',
    Categoria: 'sublimidade',
    TipologiaObra: `Grafite`,
    Material: `Pintura em superficie argamassada`,
    Descricao: `O painel é uma pintura na pilastra do Viaduto do Cajú, na zona portuária da Cidade, onde O Profeta Gentileza, expôs suas mensagens e críticas.num trabalho artísticos de letras criada por ele. Gentileza, como era conhecidoJosé Datrino, executou 56 painéis, durante os anos de 1980.`,
    Execucao: true,
    DataInauguracao: ``,
    Latitude: `-22.8998695`,
    Longitude: `-43.2105862`,
};

export const PainelGentileza3_ProfetaGentileza: Obra = {
    ID: 574,
    Artistas: [artistas.ProfetaGentileza],
    Titulo: `Painel Gentileza 3`,
    Classificacao: 'efemero',
    Categoria: 'sublimidade',
    TipologiaObra: `Grafite`,
    Material: `Pintura em superficie argamassada`,
    Descricao: `O painel é uma pintura na pilastra do Viaduto do Cajú, na zona portuária da Cidade, onde O Profeta Gentileza, expôs suas mensagens e críticas.num trabalho artísticos de letras criada por ele. Gentileza, como era conhecidoJosé Datrino, executou 56 painéis, durante os anos de 1980.`,
    Execucao: true,
    DataInauguracao: ``,
    Latitude: `-22.9003499`,
    Longitude: `-43.2105908`,
};

export const PainelGentileza4_ProfetaGentileza: Obra = {
    ID: 575,
    Artistas: [artistas.ProfetaGentileza],
    Titulo: `Painel Gentileza 4`,
    Classificacao: 'efemero',
    Categoria: 'sublimidade',
    TipologiaObra: `Grafite`,
    Material: `Pintura em superficie argamassada`,
    Descricao: `O painel é uma pintura na pilastra do Viaduto do Cajú, na zona portuária da Cidade, onde O Profeta Gentileza, expôs suas mensagens e críticas.num trabalho artísticos de letras criada por ele. Gentileza, como era conhecidoJosé Datrino, executou 56 painéis, durante os anos de 1980.ESTE E O PROFETA  GENTILEZA QUE GERA  GENTILEZA AMORRR  BELEZA E RIQUEZA A  NATUREZA E DEUS NOSSO  PAI CRIADORR DA TUDO DE GRAÇA DESTRUIDORR E O CAPETA EM CAPITAL FAZ TODA A MALDADE `,
    Execucao: true,
    DataInauguracao: ``,
    Latitude: `-22.9003499`,
    Longitude: `-43.2105908`,
};

export const PainelGentileza5_ProfetaGentileza: Obra = {
    ID: 576,
    Artistas: [artistas.ProfetaGentileza],
    Titulo: `Painel Gentileza 5`,
    Classificacao: 'efemero',
    Categoria: 'sublimidade',
    TipologiaObra: `Grafite`,
    Material: `Pintura em superficie argamassada`,
    Descricao: `O painel é uma pintura na pilastra do Viaduto do Cajú, na zona portuária da Cidade, onde O Profeta Gentileza, expôs suas mensagens e críticas.num trabalho artísticos de letras criada por ele. Gentileza, como era conhecidoJosé Datrino, executou 56 painéis, durante os anos de 1980.
 ESTE E O PROFETA 
 GENTILEZA QUE GERA 
 GENTILEZA AMORR 
 BELEZA E RIQUEZA A 
 NATUREZA E DEUS NOSSO 
 PAI CRIADOR O DESTROI 
 DORR E O CAPETA `,
    Execucao: true,
    DataInauguracao: ``,
    Latitude: `-22.9003499`,
    Longitude: `-43.2105682`,
};

export const PainelGentileza6_ProfetaGentileza: Obra = {
    ID: 577,
    Artistas: [artistas.ProfetaGentileza],
    Titulo: `Painel Gentileza 6`,
    Classificacao: 'efemero',
    Categoria: 'sublimidade',
    TipologiaObra: `Grafite`,
    Material: `Pintura em superficie argamassada`,
    Descricao: `O painel é uma pintura na pilastra do Viaduto do Cajú, na zona portuária da Cidade, onde O Profeta Gentileza, expôs suas mensagens e críticas.num trabalho artísticos de letras criada por ele. Gentileza, como era conhecidoJosé Datrino, executou 56 painéis, durante os anos de 1980
 GERRA SO DO 
 GENTILEZA GERA GEN 
 TILEZA AMORRR BELEZA 
 PERFEIÇÃO BONDADE E RI 
 QUEZA VAMOS LIBERRTARR A 
 NATUREZA E DEUS NOSSO PAI 
 CRIADORR DA TUDO DE GRAÇA O 
 CAPITALISMO DOS FILHOS E O DESTR 
 OIDORR POR JESSUSS DISSE PRO 
 FETA GENTILEZA AMORRR PAZ `,
    Execucao: true,
    DataInauguracao: ``,
    Latitude: `-22.9003499`,
    Longitude: `-43.2105682`,
};

export const PainelGentileza7_ProfetaGentileza: Obra = {
    ID: 578,
    Artistas: [artistas.ProfetaGentileza],
    Titulo: `Painel Gentileza 7`,
    Classificacao: 'efemero',
    Categoria: 'sublimidade',
    TipologiaObra: `Grafite`,
    Material: `Pintura em superficie argamassada`,
    Descricao: `O painel é uma pintura na pilastra do Viaduto do Cajú, na zona portuária da Cidade, onde O Profeta Gentileza, expôs suas mensagens e críticas.num trabalho artísticos de letras criada por ele. Gentileza, como era conhecidoJosé Datrino, executou 56 painéis, durante os anos de 1980.
 ESTE E O PROFETA GENTILEZA GERA AMORRR 
 MEUS FILHOS ANUNCIAIS UNS AS OUTROS QUE DEUS NOSSO 
 PAI GENTILEZA E A NATUREZA NOSSO DONO CRIADORR 
 ELE NÃO VENDE TERRAS NÃO COBRA PARA NOS DAR ALIMENTACÃO 
 ESTA LUZ DO MUNDO QUE E A NOSSA VI-DA E DE TODOS SERES 
 VIVENTES E DE GRACA NÃO COBRA NADA O! DESTRUIDORR DA 
 MENTE CEGA SURDOS DESTROI O AMORRR DA HUMANIDADE E 
 OBRA DO CAPETA DOS FILHOS HOMENS PECADO CAPITAL FAZ 
 O DIABO DEMONIO O MARGINAL AI OS FILHOS DE DEUS VIVEM MAL 
 DE SETUACÃO E DE MALDADE CAPITALISMO SATANA EM 2000 PERDE 
  S O MANDATO POR JESUS DISSE PROFETA GENTILEZA AMORRR PAZ `,
    Execucao: true,
    DataInauguracao: ``,
    Latitude: `-22.9003499`,
    Longitude: `-43.2105682`,
};

export const PainelGentileza8_ProfetaGentileza: Obra = {
    ID: 579,
    Artistas: [artistas.ProfetaGentileza],
    Titulo: `Painel Gentileza 8`,
    Classificacao: 'efemero',
    Categoria: 'sublimidade',
    TipologiaObra: `Grafite`,
    Material: `Pintura em superficie argamassada`,
    Descricao: `O painel é uma pintura na pilastra do Viaduto do Cajú, na zona portuária da Cidade, onde O Profeta Gentileza, expôs suas mensagens e críticas.num trabalho artísticos de letras criada por ele. Gentileza, como era conhecidoJosé Datrino, executou 56 painéis, durante os anos de 1980.
 * QUERRA SSO DO GENTILEZA EM 2000 O DIABO DO 
 CAPETA QUE VEM DO CAPITAL DOS FILHOS HOMENS PERDE O MANDA 
 TO GENTILEZA VAI ACABAR CONTODAS AS GUERRAS DO MUNDO 
 COM AMORRR A NATUREZA QUE E O NOSSO DEUS PAI CRIADOR ELE 
 NÃO VENDE TERRAS NÃO COBRA PARA NOS DAR ALIMENTACÃO ESTA 
 LUZ DO MUNDO NOSSA VIDA E DE TODOS SERES VIVENTES E DE GRA 
 CA NÃO COBRA NADA CAPETA SATANA PERDESTE O MANDATO E 
 VITORIA DO GENTILEZA PARA UM MUNDO FELIS TODOS VÃO SERE 
  NS GENTINS POR JESUS DISSE PROFETA GENTILEZA AMORRR PAZ `,
    Execucao: true,
    DataInauguracao: ``,
    Latitude: `-22.8997617`,
    Longitude: `-43.2105908`,
};

export const PainelGentileza9_ProfetaGentileza: Obra = {
    ID: 580,
    Artistas: [artistas.ProfetaGentileza],
    Titulo: `Painel Gentileza 9`,
    Classificacao: 'efemero',
    Categoria: 'sublimidade',
    TipologiaObra: `Grafite`,
    Material: `Pintura em superficie argamassada`,
    Descricao: `O painel é uma pintura na pilastra do Viaduto do Cajú, na zona portuária da Cidade, onde O Profeta Gentileza, expôs suas mensagens e críticas.num trabalho artísticos de letras criada por ele. Gentileza, como era conhecidoJosé Datrino, executou 56 painéis, durante os anos de 1980.
 * GENTILEZA GERA GENTILEZA AMORRR 
 MEUS FILHOS NOSSA CABECA NOSSO MESTRE O 
 MUMDO E UMA ESCOLA ENSINA O LADO POSITIVO E O 
 NEGATIVO NOSSO BOM PENCAMENTO NOSSO PARAISO 
 BOA PALAVRA A PORTA DO PARAISO DE DEUS PENSAME 
 NTO NEGATIVO DE MALDADE E O INFERNO DO DIABO A 
 MAL PALAVRAS A PORTA DO PURGATORIO DO MESMO 
 CUIDADO CABECINHAS CUIDADO LINGUINHAS FERINAS 
  POR JESUS DISSE PROFETA GENTILEZA AMORRR PAZ  `,
    Execucao: true,
    DataInauguracao: ``,
    Latitude: `-22.8997617`,
    Longitude: `-43.2105908`,
};

export const PainelGentileza10_ProfetaGentileza: Obra = {
    ID: 581,
    Artistas: [artistas.ProfetaGentileza],
    Titulo: `Painel Gentileza 10`,
    Classificacao: 'efemero',
    Categoria: 'sublimidade',
    TipologiaObra: `Grafite`,
    Material: `Pintura em superficie argamassada`,
    Descricao: `O painel é uma pintura na pilastra do Viaduto do Cajú, na zona portuária da Cidade, onde O Profeta Gentileza, expôs suas mensagens e críticas.num trabalho artísticos de letras criada por ele. Gentileza, como era conhecidoJosé Datrino, executou 56 painéis, durante os anos de 1980.
 * GENTILEZA GERA GENTILEZA AMORRR 
 FALA SOBRE A DIFICULDADE DA HUMANIDADE MEUS FILHOS 
 TODA MALDADE DO MUNDO E OHBRA DO CAPETA VEM DE 
 ORIGEM DE CAPITAL FAZ O DIABO DEMONIO O MARGINAL AI 
 OS FILHOS DE DEUS VIVEM MAL DE SITUACÃO E DE MALDADE RAIS 
 DE TODA PRAGA DO MUNDO ELE DESTROI AMENTI CEGA DESTROI 
 O AMORRR CAPETA SATANA EM 000 TU PERDE O MANDATO 
 QUEM VAI GOVERNAR O MUNDO VAISER O ESPIRITO SANTO DEUS 
  NOSSO PAI GENTILEZA CRIADORR A NATUREZA AMORRR PAZ  `,
    Execucao: true,
    DataInauguracao: ``,
    Latitude: `-22.8997617`,
    Longitude: `-43.2105908`,
};

export const PainelGentileza11_ProfetaGentileza: Obra = {
    ID: 582,
    Artistas: [artistas.ProfetaGentileza],
    Titulo: `Painel Gentileza 11`,
    Classificacao: 'efemero',
    Categoria: 'sublimidade',
    TipologiaObra: `Grafite`,
    Material: `Pintura em superficie argamassada`,
    Descricao: `O painel é uma pintura na pilastra do Viaduto do Cajú, na zona portuária da Cidade, onde O Profeta Gentileza, expôs suas mensagens e críticas.num trabalho artísticos de letras criada por ele. Gentileza, como era conhecidoJosé Datrino, executou 56 painéis, durante os anos de 1980.
 GENTILEZA GERA GENTILEZA AMO 
 RRR OFERECE UMA LINDA MENCAGEM PARA O NOSSO 
 QUERIDO GOVERNADOR SENHOR LEONEL BRIZOLA E 
 PARA TODOS VERIADORES DEPUTADOS E SENADORES 
 PARA QUE TODOS COLABOREM UNS E OUTROS PARA 
 QUE DEUS NOSSO PAI CRIADOR QUE E A NATUREZA 
 E JESUS SANTO IRMÃO ESPIRITO SANTO QUE NOS CONDUS 
 COLABOREM COM TODOS PARA UM BARRIL E UM MUNDO 
 MELHOR POR JESUS DISSE PROFETA GENTILEZA AMORRR `,
    Execucao: true,
    DataInauguracao: ``,
    Latitude: `-22.8997617`,
    Longitude: `-43.2105908`,
};

export const PainelGentileza12_ProfetaGentileza: Obra = {
    ID: 583,
    Artistas: [artistas.ProfetaGentileza],
    Titulo: `Painel Gentileza 12`,
    Classificacao: 'efemero',
    Categoria: 'sublimidade',
    TipologiaObra: `Grafite`,
    Material: `Pintura em superficie argamassada`,
    Descricao: `O painel é uma pintura na pilastra do Viaduto do Cajú, na zona portuária da Cidade, onde O Profeta Gentileza, expôs suas mensagens e críticas.num trabalho artísticos de letras criada por ele. Gentileza, como era conhecidoJosé Datrino, executou 56 painéis, durante os anos de 1980.
 GENTILEZA MEUS FILHOS QUAL É A MAIOR 
 PRAGA DO MUNDO QUE PRODUZ AS PIORES MOLESTIAS 
 DO MUNDO QUE CEGA A HUMANIDADE DESTROI A MENTE DES 
 TROI O AMORRR PRODUZ TRAJEDIAS PROBLEMAS POBRE 
 ZA MENDIGOS FOME NUDEZ DEVASIDÃO VICIOS GUERRA 
 OS MEUS FILHOS A PRAGA QUE MATA O ESPIRITO SANTO DE 
 DEUS NACE O ESPIRITO DOS POVOS SÃO OS FILHOS DO CAPETA 
 VEM DE CAPITEL FAZ O DIABO DEMONIO O MARGINAL AI OS 
 FILHOS DE DEUZ VIVEM MAL DE SITUAÇÃO E DE MALDADE. `,
    Execucao: true,
    DataInauguracao: ``,
    Latitude: `-22.8997617`,
    Longitude: `-43.2105908`,
};

export const PainelGentileza13_ProfetaGentileza: Obra = {
    ID: 584,
    Artistas: [artistas.ProfetaGentileza],
    Titulo: `Painel Gentileza 13`,
    Classificacao: 'efemero',
    Categoria: 'sublimidade',
    TipologiaObra: `Grafite`,
    Material: `Pintura em superficie argamassada`,
    Descricao: `O painel é uma pintura na pilastra do Viaduto do Cajú, na zona portuária da Cidade, onde O Profeta Gentileza, expôs suas mensagens e críticas.num trabalho artísticos de letras criada por ele. Gentileza, como era conhecidoJosé Datrino, executou 56 painéis, durante os anos de 1980.
 MEUS FILHOS BEM VINDO AO RIO 
 GENTILEZA GENTILEZA AMORRR 
 BELEZA PERFEIÇÃO BONDADE E RIQUEZA A 
 NATUREZA E DEUS NOSSO PAI ORADOR 
 O CAPETA E O DESTRUIDORR QUE VEM 
 DE CAPITAL FAZ O DIABO DEMONIO O MARGI 
 NAL AI OS FILHOS DE DEUS VIVEM MAUS 
 DISSE O PROFETA GENTILEZA AMORRR 
 PRAGA ASSASSI E O CAPETALISMO 
SURDOS CEGA MATA CONDUZ PARA `,
    Execucao: true,
    DataInauguracao: ``,
    Latitude: `-22.9003499`,
    Longitude: `-43.2105682`,
};

export const FernandoBaptistaGoncalves_EdgarDuvivier: Obra = {
    ID: 443,
    Imagem: 'FernandoBaptistaGoncalves_EdgarDuvivier.jpg',
    Artistas: [artistas.EdgarDuvivier],
    Titulo: `Fernando Baptista Gonçalves`,
    Classificacao: 'perene',
    Categoria: 'personalidades',
    TipologiaObra: `Busto`,
    Material: `Peça em bronze e pedestal de concreto`,
    Descricao: `Trata-se de uma homenagem dos antigos alunos do Colégio Padre Antonio Vieira ao mestre. Foi doada à Cidade pela
    associação dos alunos.`,
    Execucao: true,
    DataInauguracao: `01/2009`,
    Latitude: `-22.9558313`,
    Longitude: `-43.1981995`,
    Fatos: [
        new Fato('', '', 'Propriedade', 'Pública', [], 'Rio de Janeiro'),
        new Fato('', '', 'Fundição/Atelier', 'FEB- Fundição e Esculturas em Bronze', [], 'Rio de Janeiro'),
    ],
};

export const PainelGentileza14_ProfetaGentileza: Obra = {
    ID: 585,
    Artistas: [artistas.ProfetaGentileza],
    Titulo: `Painel Gentileza 14`,
    Classificacao: 'efemero',
    Categoria: 'sublimidade',
    TipologiaObra: `Grafite`,
    Material: `Pintura em superficie argamassada`,
    Descricao: `O painel é uma pintura na pilastra do Viaduto do Cajú, na zona portuária da Cidade, onde O Profeta Gentileza, expôs suas mensagens e críticas.num trabalho artísticos de letras criada por ele. Gentileza, como era conhecidoJosé Datrino, executou 56 painéis, durante os anos de 1980.
 ESTE E O PROFETA GENTILEZA QUE 
 GERA GENTILEZA AMORRR MOSTRA A MALDADE 
 DA HUMANIDADE PLANTO DE TODA PERVECIDADE CAPETA 
 VEM DE CAPITAL FAZ O DIABO DEMONIO O MARGINAL 
 AI OS FILHOS DE DEUS TORNASE MAL DE CITUACÃO E DE 
 PERVESIDADE CRIMES SEQUESTROS ASALTOS VICIOS 
 MACONHA COCAINA CIGARROS CHUPETA DO DIABO CACHA 
 CA COM ECESSO CHAROPE DO DIABO POBREZA MENDIGOS 
 DEVASIDÃO NUDEZ FOME GUERRAS OI MEUS FILHOS CHEGA `,
    Execucao: true,
    DataInauguracao: ``,
    Latitude: `-22.9003499`,
    Longitude: `-43.2105682`,
};

export const PainelGentileza16_ProfetaGentileza: Obra = {
    ID: 587,
    Artistas: [artistas.ProfetaGentileza],
    Titulo: `Painel Gentileza 16`,
    Classificacao: 'efemero',
    Categoria: 'sublimidade',
    TipologiaObra: `Grafite`,
    Material: `Pintura em superficie argamassada`,
    Descricao: `O painel é uma pintura na pilastra do Viaduto do Cajú, na zona portuária da Cidade, onde O Profeta Gentileza, expôs suas mensagens e críticas.num trabalho artísticos de letras criada por ele. Gentileza, como era conhecidoJosé Datrino, executou 56 painéis, durante os anos de 1980.
 GENTILEZA GERA GENTILEZA AMORRR 
 ATENÇÃO MEUS FILHOS ANUCIAIS UNS AOS OUTROS QUE 
 DEUS NOSSO PAI GENTILEZA CRIADOR CELESTAL E A 
 NATUREZA NÃO VENDE TERRAS NÃO ABRE PARA NOS DAR 
 ALIMENTAÇÃO ESTA LUZ DO MUNDO QUE E A NOSSA VIDA E 
 DE TODOS SERES VIVENTES DO MUNDO DEUS DA TUDO DE 
 GRAÇA NÃO COBRA NADA O QUE VENDE E DESTROI TUDO E TODOS 
 SÃO OS FILHOS HOMENS DAS LEIS DO CAPETA VEM DE CAPITAL FAZ 
 O DIABO DEMONIO O MARGINAL AI OS FILHOS DE DEUS VIVEM MAL `,
    Execucao: true,
    DataInauguracao: ``,
    Latitude: `-22.8980835`,
    Longitude: `-43.2116679`,
};

export const PainelGentileza17_ProfetaGentileza: Obra = {
    ID: 589,
    Artistas: [artistas.ProfetaGentileza],
    Titulo: `Painel Gentileza 17`,
    Classificacao: 'efemero',
    Categoria: 'sublimidade',
    TipologiaObra: `Grafite`,
    Material: `Pintura em superficie argamassada`,
    Descricao: `O painel é uma pintura na pilastra do Viaduto do Cajú, na zona portuária da Cidade, onde O Profeta Gentileza, expôs suas mensagens e críticas.num trabalho artísticos de letras criada por ele. Gentileza, como era conhecidoJosé Datrino, executou 56 painéis, durante os anos de 1980.
 GENTILEZA GERA GENTILEZA AMORRR 
 MEUS FILHOS NOS ESTAMOS NOFIMDOS TEMPOS NÃO 
 CONDENA NINGUEM PORQUE JÁ ESTA TODOS CONDENADOS 
 NO PECADO CAPITAL CRIZADORR DE TODOS TRAJEDIAS DO 
 MUNDO E OBRA SATANA TODAS AS CRIATURAS QUE ANDAREM 
 MALTRAJADIS DESCAMISADOS PELADOS POBRES DIABOS DEZA 
 GRADÃO A DEUS SSO AGRADÃO OS DIABOS TODOS MORTOS NO PE 
 CADA POR JESIS DISSE PROFETA GENTILEZA AMORRR PAZ `,
    Execucao: true,
    DataInauguracao: ``,
    Latitude: `-22.8980835`,
    Longitude: `-43.2116679`,
};

export const PainelGentileza18_ProfetaGentileza: Obra = {
    ID: 590,
    Artistas: [artistas.ProfetaGentileza],
    Titulo: `Painel Gentileza 18`,
    Classificacao: 'efemero',
    Categoria: 'sublimidade',
    TipologiaObra: `Grafite`,
    Material: `Pintura em superficie argamassada`,
    Descricao: `O painel é uma pintura na pilastra do Viaduto do Cajú, na zona portuária da Cidade, onde O Profeta Gentileza, expôs suas mensagens e críticas.num trabalho artísticos de letras criada por ele. Gentileza, como era conhecidoJosé Datrino, executou 56 painéis, durante os anos de 1980.
 GENTILEZA GERA GENTILEZA AMORRR 
 MEUS FILHOS TODOS VOS SÃO EMTELIGENTES NOSSA CABE 
 A NOSSO MESTRE O MUNDO E UMA ESCOLA ENSINA O QUE E 
 BOM DOQUE NÃO PRESTA PEDIO JESSUSS SEPARAI O TRIGO DO 
 JOIO QUEM NÃO VEIO PARA SERVIR NÃO SERVE PARA VIVER 
 FERRO VELHO VOLTAMOS AO PARAISSO DE DEUS PENCAMENTO 
 POSITIVO BOA PALAVRA PORTA DO CEU DO MESMO PENÇAMENTOS 
 MAL E DO DIABO POR JESUS DISSE PROFETA GENTILEZA AMORRR `,
    Execucao: true,
    DataInauguracao: ``,
    Latitude: `-22.8980835`,
    Longitude: `-43.2116679`,
};

export const PainelGentileza19_ProfetaGentileza: Obra = {
    ID: 591,
    Artistas: [artistas.ProfetaGentileza],
    Titulo: `Painel Gentileza 19`,
    Classificacao: 'efemero',
    Categoria: 'sublimidade',
    TipologiaObra: `Grafite`,
    Material: `Pintura em superficie argamassada`,
    Descricao: `O painel é uma pintura na pilastra do Viaduto do Cajú, na zona portuária da Cidade, onde O Profeta Gentileza, expôs suas mensagens e críticas.num trabalho artísticos de letras criada por ele. Gentileza, como era conhecidoJosé Datrino, executou 56 painéis, durante os anos de 1980.
 DEUS NOSSO PAI GENTILEZA CRIADORRR 
 UNIV O VERRSSSO E A NATUREZA NÃO VENDE TERRAS NÃO 
 COBRA PARA NOS ALIMENTAR ESTA LUZ DO MUNDO E DE GRAÇA O QUE 
 VENDE TUDO E DESTROI OS PROPRIOS FILHOS PELO DEUS DOS HOMENS 
 DAS LEIS DO CAPETA VEM DE ORIGEM DO CAPITAL FAZ O DIABO 
 DEMONIO O MARGINAL AI OS FILHOS DE DEUS VIVEM MAS DESI 
 TUAÇÃO O CAPITAL DESTROI A MENTE CEGA DESTROI O AMORRR 
 POR JESSUSS DISSE PROFETA GENTILEZA COM AMORRR E PAZ `,
    Execucao: true,
    DataInauguracao: ``,
    Latitude: `-22.8980835`,
    Longitude: `-43.2116679`,
};

export const PainelGentileza20_ProfetaGentileza: Obra = {
    ID: 593,
    Artistas: [artistas.ProfetaGentileza],
    Titulo: `Painel Gentileza 20`,
    Classificacao: 'efemero',
    Categoria: 'sublimidade',
    TipologiaObra: `Grafite`,
    Material: `Pintura em superficie argamassada`,
    Descricao: `O painel é uma pintura na pilastra do Viaduto do Cajú, na zona portuária da Cidade, onde O Profeta Gentileza, expôs suas mensagens e críticas.num trabalho artísticos de letras criada por ele. Gentileza, como era conhecidoJosé Datrino, executou 56 painéis, durante os anos de 1980.
 GUERRA SO DO GENTILEZA GERA 
 GENTILEZA AMORRR BELEZA PERFEIÇÃO 
 BONDADE E RIQUEZA VIVA A NATUREZA 
 CRIADORR POR JESSUSS GENTILEZA AMORR `,
    Execucao: true,
    DataInauguracao: ``,
    Latitude: `-22.8980835`,
    Longitude: `-43.2116679`,
};

export const PainelGentileza21_ProfetaGentileza: Obra = {
    ID: 594,
    Artistas: [artistas.ProfetaGentileza],
    Titulo: `Painel Gentileza 21`,
    Classificacao: 'efemero',
    Categoria: 'sublimidade',
    TipologiaObra: `Grafite`,
    Material: `Pintura em superficie argamassada`,
    Descricao: `O painel é uma pintura na pilastra do Viaduto do Cajú, na zona portuária da Cidade, onde O Profeta Gentileza, expôs suas mensagens e críticas.num trabalho artísticos de letras criada por ele. Gentileza, como era conhecidoJosé Datrino, executou 56 painéis, durante os anos de 1980.
 GUERRA DOS HOMENS DAS LEIS DO CAPE 
 TA VEM DO CAPITAL VIO METAL FAZ O DIABO 
 DEMONIO O MARGINAL A HUMANIDADE DO MUNDO 
 VIVEM MAL POR JESSUSS GENTILEZA AMORR`,
    Execucao: true,
    DataInauguracao: ``,
    Latitude: `-22.8959523`,
    Longitude: `-43.214497`,
};

export const PainelGentileza22_ProfetaGentileza: Obra = {
    ID: 595,
    Artistas: [artistas.ProfetaGentileza],
    Titulo: `Painel Gentileza 22`,
    Classificacao: 'efemero',
    Categoria: 'sublimidade',
    TipologiaObra: `Grafite`,
    Material: `Pintura em superficie argamassada`,
    Descricao: `O painel é uma pintura na pilastra do Viaduto do Cajú, na zona portuária da Cidade, onde O Profeta Gentileza, expôs suas mensagens e críticas.num trabalho artísticos de letras criada por ele. Gentileza, como era conhecidoJosé Datrino, executou 56 painéis, durante os anos de 1980.
 ILMO PRESIDENTE COLLOR DE MELO 
 ESTA CERRTO ESTA HUMANIDADE ESTÃO 
 MUITO POBRES DIABOS DESCAMIZADOS ESTÃO 
 FEITO PEIXE MORTOS ENSIMA DO RIO MARR 
 PECADO CAPITAL POR JESSUSS DISSE GENTILEZA `,
    Execucao: true,
    DataInauguracao: ``,
    Latitude: `-22.8959523`,
    Longitude: `-43.214497`,
};

export const PainelGentileza23_ProfetaGentileza: Obra = {
    ID: 596,
    Artistas: [artistas.ProfetaGentileza],
    Titulo: `Painel Gentileza 23`,
    Classificacao: 'efemero',
    Categoria: 'sublimidade',
    TipologiaObra: `Grafite`,
    Material: `Pintura em superficie argamassada`,
    Descricao: `O painel é uma pintura na pilastra do Viaduto do Cajú, na zona portuária da Cidade, onde O Profeta Gentileza, expôs suas mensagens e críticas.num trabalho artísticos de letras criada por ele. Gentileza, como era conhecidoJosé Datrino, executou 56 painéis, durante os anos de 1980.
 DEUS NOSSO PAI GENTILEZA E A NATU 
 REZA CRIADORR O DESTRUIDORR E O CAPE 
 TA VEM DO CAPITAL FAZ O DIABO DEMONIO 
 O MARGINAL AI A HUMANIDADE VIVEM MAL DE AMOR`,
    Execucao: true,
    DataInauguracao: ``,
    Latitude: `-22.8959523`,
    Longitude: `-43.214497`,
};

export const PainelGentileza24_ProfetaGentileza: Obra = {
    ID: 597,
    Artistas: [artistas.ProfetaGentileza],
    Titulo: `Painel Gentileza 24`,
    Classificacao: 'efemero',
    Categoria: 'sublimidade',
    TipologiaObra: `Grafite`,
    Material: `Pintura em superficie argamassada`,
    Descricao: `O painel é uma pintura na pilastra do Viaduto do Cajú, na zona portuária da Cidade, onde O Profeta Gentileza, expôs suas mensagens e críticas.num trabalho artísticos de letras criada por ele. Gentileza, como era conhecidoJosé Datrino, executou 56 painéis, durante os anos de 1980.
 MOTORISTAS AMORRR DO GENTILEZA 
 DIRIJA A VIDA E SEU CARRO COM GENTI 
 LEZA QUE A DEUS NOSSO PAI NO PENSAMENTO 
 E JESSUSS SANTO IRRMAO NO CORAÇÃO NÃO 
 TEUS PROBLEMAS DE NADA NÃO E QUE DEUS VOS 
 ABENCOIS POR JESSUSS DISSE GENTILEZA PAZ `,
    Execucao: true,
    DataInauguracao: ``,
    Latitude: `-22.8959523`,
    Longitude: `-43.214497`,
};

export const PainelGentileza25_ProfetaGentileza: Obra = {
    ID: 598,
    Artistas: [artistas.ProfetaGentileza],
    Titulo: `Painel Gentileza 25`,
    Classificacao: 'efemero',
    Categoria: 'sublimidade',
    TipologiaObra: `Grafite`,
    Material: `Pintura em superficie argamassada`,
    Descricao: `O painel é uma pintura na pilastra do Viaduto do Cajú, na zona portuária da Cidade, onde O Profeta Gentileza, expôs suas mensagens e críticas.num trabalho artísticos de letras criada por ele. Gentileza, como era conhecidoJosé Datrino, executou 56 painéis, durante os anos de 1980.
 MEUS FILHOS TODOS VOS TEM QUE SABER 
 QUEM SOU E O SABERES QUE VÃO VOS DADOS VÃO 
 TER QUE MECONHESERR E CONHESERR A TIMESMO PO 
 IS TODOS SOMOS UM DEUS NOSSO PAI GENTILEZA 
 E A NATUREZA NOSSO DONO CRIADORR DA TUDO 
 DE GRAÇA POR JESSUSS DISSE GENTILEZA AMOR `,
    Execucao: true,
    DataInauguracao: ``,
    Latitude: `-22.8959523`,
    Longitude: `-43.214497`,
};

export const IrmaosAndreeAntonioReboucas_EdgarDuvivier: Obra = {
    ID: 438,
    Artistas: [artistas.EdgarDuvivier],
    Titulo: `Irmãos André e Antônio Rebouças`,
    Classificacao: 'perene',
    Categoria: 'personalidades',
    TipologiaObra: `busto`,
    Material: `Peça em bronze e pedestal de concreto`,
    Descricao: `A homenagem aos Irmãos foi uma iniciativa do Clube de Engenharia, custeada pela Prefeitura da Cidade do Rio de Janeiro.
Os bustos foram retirados em abril de 2016 temporariamente e reistalados em 16 de novembro de 2016 no mesmo local.`,
    Execucao: true,
    DataInauguracao: `05/2014`,
    Latitude: `-22.962765`,
    Longitude: `-43.2045791`,
};

export const PainelGentileza27_ProfetaGentileza: Obra = {
    ID: 600,
    Artistas: [artistas.ProfetaGentileza],
    Titulo: `Painel Gentileza 27`,
    Classificacao: 'efemero',
    Categoria: 'sublimidade',
    TipologiaObra: `Grafite`,
    Material: `Pintura em superficie argamassada`,
    Descricao: `O painel é uma pintura na pilastra do Viaduto do Cajú, na zona portuária da Cidade, onde O Profeta Gentileza, expôs suas mensagens e críticas.num trabalho artísticos de letras criada por ele. Gentileza, como era conhecidoJosé Datrino, executou 56 painéis, durante os anos de 1980.
 GENTILEZA GERA GENTILEZA AMORRR 
 MEUS FILHOS ESTA HUMANIDADE DO MUNDO NÃO 
 PRECISAMOS DE TRABALHAR PARA COM O CAPETA QUE 
 VEM DO CAPITALISMO NÕA SSE A TRAPALHAR PRECISAMOS 
 DE MINISTRAR TUDO AQUILO QUE DEUS NOSSO PAI CRIADOR 
 CELESTIAL NOS DA DE GRAÇA A NATUREZA NÃO VENDE 
 TERRAS POR JESUS DISSE PROFETA GENTILEZA PAZ `,
    Execucao: true,
    DataInauguracao: ``,
    Latitude: `-22.8937528`,
    Longitude: `-43.2156461`,
};

export const PainelGentileza28_ProfetaGentileza: Obra = {
    ID: 601,
    Artistas: [artistas.ProfetaGentileza],
    Titulo: `Painel Gentileza 28`,
    Classificacao: 'efemero',
    Categoria: 'sublimidade',
    TipologiaObra: `Grafite`,
    Material: `Pintura em superficie argamassada`,
    Descricao: `O painel é uma pintura na pilastra do Viaduto do Cajú, na zona portuária da Cidade, onde O Profeta Gentileza, expôs suas mensagens e críticas.num trabalho artísticos de letras criada por ele. Gentileza, como era conhecidoJosé Datrino, executou 56 painéis, durante os anos de 1980.
 RELIGIÃO TODAS AS NAÇÕES 
 COMO UMA SSO FAMILIA TODOS MO 
 RANDO EM UMA SSO CASA E O UNIVERRSO 
 O CÉU E O TETO IGREJA O BOM CORAÇÃO 
 O ALTAR O BOM PENSAMENTO POR ESTE 
 MOTIVO PRECISAMOS DE JESSUSS TODOS OS 
 MOMENTOS DISSE PROFETA GENTILEZA PAZ `,
    Execucao: true,
    DataInauguracao: ``,
    Latitude: `-22.8937528`,
    Longitude: `-43.2156461`,
};

export const PainelGentileza29_ProfetaGentileza: Obra = {
    ID: 602,
    Artistas: [artistas.ProfetaGentileza],
    Titulo: `Painel Gentileza 29`,
    Classificacao: 'efemero',
    Categoria: 'plasticidade',
    TipologiaObra: `Grafite`,
    Material: `Pintura em superficie argamassada`,
    Descricao: `O painel é uma pintura na pilastra do Viaduto do Cajú, na zona portuária da Cidade, onde O Profeta Gentileza, expôs suas mensagens e críticas.num trabalho artísticos de letras criada por ele. Gentileza, como era conhecidoJosé Datrino, executou 56 painéis, durante os anos de 1980.
 ACORRDA DESPERRTA O 
 BRASIL O BRASILEIROS E O ESTR 
 ANGEIROS PARA UM BRASIL E UM 
 MUNDO MELHOR COM DEUS E JESSUSS 
 PARA QUE TODOS ANDARR NO CAMINHO 
 DA LUZ POR JESSUSS DISSE PROFETA 
 GENTILEZA GERA AMOR PAZ FPE `,
    Execucao: true,
    DataInauguracao: ``,
    Latitude: `-22.8937528`,
    Longitude: `-43.2156461`,
};

export const PainelGentileza30_ProfetaGentileza: Obra = {
    ID: 603,
    Artistas: [artistas.ProfetaGentileza],
    Titulo: `Painel Gentileza 30`,
    Classificacao: 'efemero',
    Categoria: 'plasticidade',
    TipologiaObra: `Grafite`,
    Material: `Pintura em superficie argamassada`,
    Descricao: `O painel é uma pintura na pilastra do Viaduto do Cajú, na zona portuária da Cidade, onde O Profeta Gentileza, expôs suas mensagens e críticas.num trabalho artísticos de letras criada por ele. Gentileza, como era conhecidoJosé Datrino, executou 56 painéis, durante os anos de 1980.
 GENTILEZA SSO AMORRR 
 CONSTROI E DEUS E JESSUSS ES 
 PIRITO SANTO QUE NOS CONDUZ ODIO 
 DESTROI CAPETA VEM DO PECADO 
 CAPITALISMO LEVA A HUMANIDADE 
 PARA O ABISMO DESTROI O AMORRR `,
    Execucao: true,
    DataInauguracao: ``,
    Latitude: `-22.8937528`,
    Longitude: `-43.2156461`,
};

export const PainelGentileza31_ProfetaGentileza: Obra = {
    ID: 604,
    Artistas: [artistas.ProfetaGentileza],
    Titulo: `Painel Gentileza 31`,
    Classificacao: 'efemero',
    Categoria: 'plasticidade',
    TipologiaObra: `Grafite`,
    Material: `Pintura em superficie argamassada`,
    Descricao: `O painel é uma pintura na pilastra do Viaduto do Cajú, na zona portuária da Cidade, onde O Profeta Gentileza, expôs suas mensagens e críticas.num trabalho artísticos de letras criada por ele. Gentileza, como era conhecidoJosé Datrino, executou 56 painéis, durante os anos de 1980
 PROFETA GENTILEZA E 
 MALUCO BELEZA SORRINDO 
 CONTENTE SEMPRE COM JESSUSS 
 COM NOSSO PREZENTE AMANDO E 
 RESPEITANDO A NATUREA E DEUS 
 NOSSO PAI CRIADORR DA TUDO DE GRA 
 CA POR JESSUSS DISSE GENTILEZA `,
    Execucao: true,
    DataInauguracao: ``,
    Latitude: `-22.8929535`,
    Longitude: `-43.2160161`,
};

export const PainelGentileza32_ProfetaGentileza: Obra = {
    ID: 605,
    Artistas: [artistas.ProfetaGentileza],
    Titulo: `Painel Gentileza 32`,
    Classificacao: 'efemero',
    Categoria: 'plasticidade',
    TipologiaObra: `Grafite`,
    Material: `Pintura em superficie argamassada`,
    Descricao: `O painel é uma pintura na pilastra do Viaduto do Cajú, na zona portuária da Cidade, onde O Profeta Gentileza, expôs suas mensagens e críticas.num trabalho artísticos de letras criada por ele. Gentileza, como era conhecidoJosé Datrino, executou 56 painéis, durante os anos de 1980.
 MEUS FILHOS NO MUNDO TEMOS 
 UM PLANTO DE MAIOR PRAGA QUE 
 PRODUZ AS PIORES MOLESTIAS QUE 
 DESTROI A MENTE SURDOS DESTROI O 
 AMORRR CEGA E MATA A HUMNIDADE 
 LEVA PARA O ABISMOPECADO CAPITALIS 
 MO POR JESSUSS DISSE GENTILEZA AMORR `,
    Execucao: true,
    DataInauguracao: ``,
    Latitude: `-22.8929535`,
    Longitude: `-43.2160161`,
};

export const PainelGentileza33_ProfetaGentileza: Obra = {
    ID: 606,
    Artistas: [artistas.ProfetaGentileza],
    Titulo: `Painel Gentileza 33`,
    Classificacao: 'efemero',
    Categoria: 'plasticidade',
    TipologiaObra: `Grafite`,
    Material: `Pintura em superficie argamassada`,
    Descricao: `O painel é uma pintura na pilastra do Viaduto do Cajú, na zona portuária da Cidade, onde O Profeta Gentileza, expôs suas mensagens e críticas.num trabalho artísticos de letras criada por ele. Gentileza, como era conhecidoJosé Datrino, executou 56 painéis, durante os anos de 1980.
 PENSAMENTO POSITIVO PA 
 RAIZO DE DEUS BOA PALAVRA PORTA 
 DO MESMO PENSAMENTO NEGATIVO DE 
 MALDADE E O INFERNO DO DIABO MAL PALA 
 VRAS E A PORTA DO PURGATORIO DO SATANAS 
 CUIDADO CABECINHA CUIDADO LINGUNHAS 
 FERINAS POR JESSUSS DISSE GENTILEZA `,
    Execucao: true,
    DataInauguracao: ``,
    Latitude: `-22.8929535`,
    Longitude: `-43.2160161`,
};

export const PainelGentileza34_ProfetaGentileza: Obra = {
    ID: 607,
    Artistas: [artistas.ProfetaGentileza],
    Titulo: `Painel Gentileza 34`,
    Classificacao: 'efemero',
    Categoria: 'plasticidade',
    TipologiaObra: `Grafite`,
    Material: `Pintura em superficie argamassada`,
    Descricao: `O painel é uma pintura na pilastra do Viaduto do Cajú, na zona portuária da Cidade, onde O Profeta Gentileza, expôs suas mensagens e críticas.num trabalho artísticos de letras criada por ele. Gentileza, como era conhecidoJosé Datrino, executou 56 painéis, durante os anos de 1980.
 GENTILEZA GERA GENTILEZA 
 AMOR MEUS FILHOS A HUMANIDADE 
 DO MUNDO NÃO PRECISA DE TRABALHAR 
 PARA COM O CAPITALISMO NÃO SE ATRAPALJ 
 AR PRECISAMOS DE MINISTRAR AQUILO QUE 
 DEUS NOSSO PAI GENTILEZA NOS DA TUDO 
 DE GRAÇA A NATUREZA AMORRR POR JESUS `,
    Execucao: true,
    DataInauguracao: ``,
    Latitude: `-22.8929535`,
    Longitude: `-43.2160161`,
};

export const PainelGentileza35_ProfetaGentileza: Obra = {
    ID: 608,
    Artistas: [artistas.ProfetaGentileza],
    Titulo: `Painel Gentileza 35`,
    Classificacao: 'efemero',
    Categoria: 'plasticidade',
    TipologiaObra: `Grafite`,
    Material: `Pintura em superficie argamassada`,
    Descricao: `O painel é uma pintura na pilastra do Viaduto do Cajú, na zona portuária da Cidade, onde O Profeta Gentileza, expôs suas mensagens e críticas.num trabalho artísticos de letras criada por ele. Gentileza, como era conhecidoJosé Datrino, executou 56 painéis, durante os anos de 1980.
IGREJA DE DEUS NOSSO BOM 
 CORAÇÃO O ALTAR NOSSO BOM PEN 
 SAMENTO POR ESTE MOTIVO PRECI 
 SAMOS DE JESSUSS TODOS OS MOMENTOS 
 QUEM ANDA SEM JESSUSS E DEFUNTOS 
 AMBULANTES CONTAMINANDO TODOS NO 
 PECADO CAPITAL POR JESSUSS GENTILEZA. 
`,
    Execucao: true,
    DataInauguracao: ``,
    Latitude: `-22.8929535`,
    Longitude: `-43.2160161`,
};

export const PainelGentileza36_ProfetaGentileza: Obra = {
    ID: 609,
    Artistas: [artistas.ProfetaGentileza],
    Titulo: `Painel Gentileza 36`,
    Classificacao: 'efemero',
    Categoria: 'plasticidade',
    TipologiaObra: `Grafite`,
    Material: `Pintura em superficie argamassada`,
    Descricao: `O painel é uma pintura na pilastra do Viaduto do Cajú, na zona portuária da Cidade, onde O Profeta Gentileza, expôs suas mensagens e críticas.num trabalho artísticos de letras criada por ele. Gentileza, como era conhecidoJosé Datrino, executou 56 painéis, durante os anos de 1980.
MEUS FILHOS PARA UM BRASIL E 
 UM MUNDO FELIS E TODOS SEREM GEN 
 TIS TODA A HUMANIDADE TEMOS UM DE 
 VERR COM DEUS DE DESLIGAR DO MUNDO MA 
 TERIALMISMO CAPITALISMO LIGAR A UM MUNDO 
 DE ESPIRITUALIDADE COM AMORRR POR 
 JESUS DISSE PROFETA GENTILEZA PAZ `,
    Execucao: true,
    DataInauguracao: ``,
    Latitude: `-22.8929535`,
    Longitude: `-43.2160161`,
};

export const PainelGentileza37_ProfetaGentileza: Obra = {
    ID: 610,
    Artistas: [artistas.ProfetaGentileza],
    Titulo: `Painel Gentileza 37`,
    Classificacao: 'efemero',
    Categoria: 'plasticidade',
    TipologiaObra: `Grafite`,
    Material: `Pintura em superficie argamassada`,
    Descricao: `O painel é uma pintura na pilastra do Viaduto do Cajú, na zona portuária da Cidade, onde O Profeta Gentileza, expôs suas mensagens e críticas.num trabalho artísticos de letras criada por ele. Gentileza, como era conhecidoJosé Datrino, executou 56 painéis, durante os anos de 1980.
 GENTILEZA FALA SOBRE O 
 ESPORTE DE DEUS ABENÇOADP 
 QUE DA VIDA E CONSTROI O NOSSO ES 
 PIRITO SANTO PARA COM DEUS E O TRA 
 BALHO COM SAUDE E ALIMENTAÇÃO QUE 
 M NÃO VEIO PARA SERVIR NÃO SERVE PARA 
 VIVERRR POR JESSUSS DISSE GENTILEZA`,
    Execucao: true,
    DataInauguracao: ``,
    Latitude: `-22.8929535`,
    Longitude: `-43.2160161`,
};

export const PainelGentileza38_ProfetaGentileza: Obra = {
    ID: 611,
    Artistas: [artistas.ProfetaGentileza],
    Titulo: `Painel Gentileza 38`,
    Classificacao: 'efemero',
    Categoria: 'plasticidade',
    TipologiaObra: `Grafite`,
    Material: `Pintura em superficie argamassada`,
    Descricao: `O painel é uma pintura na pilastra do Viaduto do Cajú, na zona portuária da Cidade, onde O Profeta Gentileza, expôs suas mensagens e críticas.num trabalho artísticos de letras criada por ele. Gentileza, como era conhecidoJosé Datrino, executou 56 painéis, durante os anos de 1980.
 GENTILEZA GER GENTILEZA 
 AMORRR BELEZA PERFEIÇÃO 
 BONDADE E RIQUEZA A NATUREZA A 
 DEUS NOSSO PAI CRIADOR NÃO VENDE 
 TERRAS NOS DA ALIMENTAÇÃO DE GRAÇA 
 O QUE VENDE ELEVA TODOS PARA O ABISMO 
 CAPITALISMOS ASACIMO POR JESSUS AMORRR `,
    Execucao: true,
    DataInauguracao: ``,
    Latitude: `-22.8929535`,
    Longitude: `-43.2160161`,
};

export const PainelGentileza39_ProfetaGentileza: Obra = {
    ID: 612,
    Artistas: [artistas.ProfetaGentileza],
    Titulo: `Painel Gentileza 39`,
    Classificacao: 'efemero',
    Categoria: 'plasticidade',
    TipologiaObra: `Grafite`,
    Material: `Pintura em superficie argamassada`,
    Descricao: `O painel é uma pintura na pilastra do Viaduto do Cajú, na zona portuária da Cidade, onde O Profeta Gentileza, expôs suas mensagens e críticas.num trabalho artísticos de letras criada por ele. Gentileza, como era conhecidoJosé Datrino, executou 56 painéis, durante os anos de 1980.
GENTILEZA CONTRA O PECADO 
 CAPITAL NÃO PODEM ANDARR MAL 
 TRAPILHOS DE CALSAS CURTAS COM 
 O PEITO DA CAMISA ABERTA DESCAMISADOS 
 PARA COM JESSUSS E DEFUNTOS AMBULAN 
 TES CONTAMINADOS 95 POR CENTO E 
 POBRES DOENTES CEGOS NO PECADO CAPITAL SATANA POR JESSUSS GENTILEZA `,
    Execucao: true,
    DataInauguracao: ``,
    Latitude: `-22.8929535`,
    Longitude: `-43.2160161`,
};

export const PainelGentileza40_ProfetaGentileza: Obra = {
    ID: 613,
    Artistas: [artistas.ProfetaGentileza],
    Titulo: `Painel Gentileza 40`,
    Classificacao: 'efemero',
    Categoria: 'plasticidade',
    TipologiaObra: `Grafite`,
    Material: `Pintura em superficie argamassada`,
    Descricao: `O painel é uma pintura na pilastra do Viaduto do Cajú, na zona portuária da Cidade, onde O Profeta Gentileza, expôs suas mensagens e críticas.num trabalho artísticos de letras criada por ele. Gentileza, como era conhecidoJosé Datrino, executou 56 painéis, durante os anos de 1980.
GENTILEZA GERA GENTILEZA 40 AMORRR A NATUREZA 
 TEMOS QUE CONSTRUIR A NATUREZA NOS SERES HUMANOS NÃO PODEMOS ANDARR MAL VESTIDOS 
 COMPARAMOS PARA COM DEUS COMO UMA LAVOURA DE PLANTAS NASCE UM ANJINHO UM ARVOREDO BROTOU 
 TEM QUE SSERR CUIDADE ALIMENTAO COM AMORR NÃO PODE ANDARR SEM ROUPA SII NÃO E UM ARBOREDO 
 MORTO SSO SERVE PARA O FOGO PAU PELADO E COMO TER POR JESSUSS DISSE PROFETA GENTILEZA AMORR `,
    Execucao: true,
    DataInauguracao: ``,
    Latitude: `-22.8929535`,
    Longitude: `-43.2160161`,
};

export const PainelGentileza41_ProfetaGentileza: Obra = {
    ID: 614,
    Artistas: [artistas.ProfetaGentileza],
    Titulo: `Painel Gentileza 41`,
    Classificacao: 'efemero',
    Categoria: 'plasticidade',
    TipologiaObra: `Grafite`,
    Material: `Pintura em superficie argamassada`,
    Descricao: `O painel é uma pintura na pilastra do Viaduto do Cajú, na zona portuária da Cidade, onde O Profeta Gentileza, expôs suas mensagens e críticas.num trabalho artísticos de letras criada por ele. Gentileza, como era conhecidoJosé Datrino, executou 56 painéis, durante os anos de 1980.
 GENTILEZA GERA GENTILEZA 41 AMORRR A NATUREZA 
 É DEUS NOSSO PAI CRIADOR 
 NÃO VENDE TERRAS NÃO COBRA 
 PARA NOS DAR ALIMENTAÇÃO DA 
 TUDO DE GRAÇA O CAPITALIS 
 MO DESTROE LEVA PARA O 
 ABISMO POR JESSUSS DISSE GENTILEZA`,
    Execucao: true,
    DataInauguracao: ``,
    Latitude: `-22.8906311`,
    Longitude: `-43.2168948`,
};

export const PainelGentileza42_ProfetaGentileza: Obra = {
    ID: 615,
    Artistas: [artistas.ProfetaGentileza],
    Titulo: `Painel Gentileza 42`,
    Classificacao: 'efemero',
    Categoria: 'plasticidade',
    TipologiaObra: `Grafite`,
    Material: `Pintura em superficie argamassada`,
    Descricao: `O painel é uma pintura na pilastra do Viaduto do Cajú, na zona portuária da Cidade, onde O Profeta Gentileza, expôs suas mensagens e críticas.num trabalho artísticos de letras criada por ele. Gentileza, como era conhecidoJosé Datrino, executou 56 painéis, durante os anos de 1980.
 DINHEIRO MAIOR PRAGA 
 DO MUNDO PRODUZ AS PIORES 
 MOLESTIASPECADO CAPITA 
 LISMO LEVA A HUMANIDADE PA 
 RA O ABISMO DESTROI A MENTE 
 SURDOS CEGA FALTA DE AMORRR 
 EM 2000 PERDES O MANDATO 
 POR JESSUSS DISSE GENTILEZA`,
    Execucao: true,
    DataInauguracao: ``,
    Latitude: `-22.8906311`,
    Longitude: `-43.2168948`,
};

export const PainelGentileza43_ProfetaGentileza: Obra = {
    ID: 616,
    Artistas: [artistas.ProfetaGentileza],
    Titulo: `Painel Gentileza 43`,
    Classificacao: 'efemero',
    Categoria: 'plasticidade',
    TipologiaObra: `Grafite`,
    Material: `Pintura em superficie argamassada`,
    Descricao: `O painel é uma pintura na pilastra do Viaduto do Cajú, na zona portuária da Cidade, onde O Profeta Gentileza, expôs suas mensagens e críticas.num trabalho artísticos de letras criada por ele. Gentileza, como era conhecidoJosé Datrino, executou 56 painéis, durante os anos de 1980.
 MEUS FILHOS BEM VINDO 
 AO RIO JB POR GENTILEZA 
 NÃO USEM PROBLEMAS NAÕ 
 USEM POBREZA USEM AMORRR 
 BELEZA PERFEIÇÃO BONDADE E 
 RIQUEZA VAMOS LIBERRTARRR 
 A NATUREZA NOSSA VIDA POR 
 JESSUS DISSE GENTILEZA PAZ`,
    Execucao: true,
    DataInauguracao: ``,
    Latitude: `-22.8906311`,
    Longitude: `-43.2168948`,
};

export const SemTitulo_ChicaGranchi: Obra = {
    ID: 398,
    Artistas: [artistas.ChicaGranchi],
    Titulo: `Sem Titulo`,
    Classificacao: 'perene',
    Categoria: 'sublimidade',
    TipologiaObra: `Mosaico`,
    Material: `Mosaico de azulejos`,
    Descricao: `Painel de cerâmica instalada numa murada de contenção da avenida.`,
    Execucao: true,
    DataInauguracao: `01/1996`,
    Zona: 'Sul',
    Bairro: 'São Conrado',
    PontoDeReferencia: 'Avenida Niemeyer, 150',
    Latitude: `-22.9921662`,
    Longitude: `-43.2338419`,
    Lugar: 'Muro',
    Fatos: [new Fato('', '', 'Propriedade', 'Pública', [], 'Rio de Janeiro')],
};

export const PainelGentileza45_ProfetaGentileza: Obra = {
    ID: 618,
    Artistas: [artistas.ProfetaGentileza],
    Titulo: `Painel Gentileza 45`,
    Classificacao: 'efemero',
    Categoria: 'plasticidade',
    TipologiaObra: `Grafite`,
    Material: `Pintura em superficie argamassada`,
    Descricao: `O painel é uma pintura na pilastra do Viaduto do Cajú, na zona portuária da Cidade, onde O Profeta Gentileza, expôs suas mensagens e críticas.num trabalho artísticos de letras criada por ele. Gentileza, como era conhecidoJosé Datrino, executou 56 painéis, durante os anos de 1980.
 PENSEM 
 EM DEUS PAI 
 GENTILEZA 
 CRIADORRR 
 A NATUREZA 
 DA TUDO DE GRA 
 ÇA JESSSUSS QUE 
 NOS CONDUZ O 
 CAMIINHO DA LUZ 
 DISSE GENTILEZA`,
    Execucao: true,
    DataInauguracao: ``,
    Latitude: `-22.8906311`,
    Longitude: `-43.2168948`,
};

export const PainelGentileza46_ProfetaGentileza: Obra = {
    ID: 619,
    Artistas: [artistas.ProfetaGentileza],
    Titulo: `Painel Gentileza 46`,
    Classificacao: 'efemero',
    Categoria: 'plasticidade',
    TipologiaObra: `Grafite`,
    Material: `Pintura em superficie argamassada`,
    Descricao: `O painel é uma pintura na pilastra do Viaduto do Cajú, na zona portuária da Cidade, onde O Profeta Gentileza, expôs suas mensagens e críticas.num trabalho artísticos de letras criada por ele. Gentileza, como era conhecidoJosé Datrino, executou 56 painéis, durante os anos de 1980.
 AMORRR 
 PALAVRA 
 QUE LIB 
 ERRRTA A 
 GRADECIDO 
 E LUZ DE 
 JESSSUSS 
 CONDUZ `,
    Execucao: true,
    DataInauguracao: ``,
    Latitude: `-22.8906311`,
    Longitude: `-43.2168948`,
};

export const PainelGentileza47_ProfetaGentileza: Obra = {
    ID: 620,
    Artistas: [artistas.ProfetaGentileza],
    Titulo: `Painel Gentileza 47`,
    Classificacao: 'efemero',
    Categoria: 'plasticidade',
    TipologiaObra: `Grafite`,
    Material: `Pintura em superficie argamassada`,
    Descricao: `O painel é uma pintura na pilastra do Viaduto do Cajú, na zona portuária da Cidade, onde O Profeta Gentileza, expôs suas mensagens e críticas.num trabalho artísticos de letras criada por ele. Gentileza, como era conhecidoJosé Datrino, executou 56 painéis, durante os anos de 1980.
TREVA 
 PALAVRA 
 QUE CON 
 DENA OB 
 RIGADO E 
 SER ESC 
 AVO DO CA 
 PITALISMO `,
    Execucao: true,
    DataInauguracao: ``,
    Latitude: `-22.8906311`,
    Longitude: `-43.2168948`,
};

export const PainelGentileza48_ProfetaGentileza: Obra = {
    ID: 621,
    Artistas: [artistas.ProfetaGentileza],
    Titulo: `Painel Gentileza 48`,
    Classificacao: 'efemero',
    Categoria: 'plasticidade',
    TipologiaObra: `Grafite`,
    Material: `Pintura em superficie argamassada`,
    Descricao: `O painel é uma pintura na pilastra do Viaduto do Cajú, na zona portuária da Cidade, onde O Profeta Gentileza, expôs suas mensagens e críticas.num trabalho artísticos de letras criada por ele. Gentileza, como era conhecidoJosé Datrino, executou 56 painéis, durante os anos de 1980.
AMORRR 
 PALAVRA 
 QUE LI 
 BERRRTA 
 POR GEN 
 TILEZA 
 E COM 
 JESSSUSS `,
    Execucao: true,
    DataInauguracao: ``,
    Latitude: `-22.8906311`,
    Longitude: `-43.2168948`,
};

export const PainelGentileza49_ProfetaGentileza: Obra = {
    ID: 622,
    Artistas: [artistas.ProfetaGentileza],
    Titulo: `Painel Gentileza 49`,
    Classificacao: 'efemero',
    Categoria: 'plasticidade',
    TipologiaObra: `Grafite`,
    Material: `Pintura em superficie argamassada`,
    Descricao: `O painel é uma pintura na pilastra do Viaduto do Cajú, na zona portuária da Cidade, onde O Profeta Gentileza, expôs suas mensagens e críticas.num trabalho artísticos de letras criada por ele. Gentileza, como era conhecidoJosé Datrino, executou 56 painéis, durante os anos de 1980.
TREVA 
 PALAVRA 
 QUE CON 
 DENA POR 
 FAVOR 
 E POR ES 
 MOLA DO 
 CAPILATISMO 
`,
    Execucao: true,
    DataInauguracao: ``,
    Latitude: `-22.8906311`,
    Longitude: `-43.2168948`,
};

export const PainelGentileza50_ProfetaGentileza: Obra = {
    ID: 623,
    Artistas: [artistas.ProfetaGentileza],
    Titulo: `Painel Gentileza 50`,
    Classificacao: 'efemero',
    Categoria: 'plasticidade',
    TipologiaObra: `Grafite`,
    Material: `Pintura em superficie argamassada`,
    Descricao: `O painel é uma pintura na pilastra do Viaduto do Cajú, na zona portuária da Cidade, onde O Profeta Gentileza, expôs suas mensagens e críticas.num trabalho artísticos de letras criada por ele. Gentileza, como era conhecidoJosé Datrino, executou 56 painéis, durante os anos de 1980.
 AMORR 
 GENTILEZA 
 BELEZA 
 PERFEIÇÃO 
 BONDADE 
 RIQUEZA 
  A NATUREZA `,
    Execucao: true,
    DataInauguracao: ``,
    Latitude: `-22.8906311`,
    Longitude: `-43.2168948`,
};

export const PainelGentileza51_ProfetaGentileza: Obra = {
    ID: 624,
    Artistas: [artistas.ProfetaGentileza],
    Titulo: `Painel Gentileza 51`,
    Classificacao: 'efemero',
    Categoria: 'plasticidade',
    TipologiaObra: `Grafite`,
    Material: `Pintura em superficie argamassada`,
    Descricao: `O painel é uma pintura na pilastra do Viaduto do Cajú, na zona portuária da Cidade, onde O Profeta Gentileza, expôs suas mensagens e críticas.num trabalho artísticos de letras criada por ele. Gentileza, como era conhecidoJosé Datrino, executou 56 painéis, durante os anos de 1980.
2 PALAVRA 
 QUE LIBERTA POR 
 GENTILEZA E POR 
 JESSUSS AGRADECI 
 DO E O ESPÍRITO SAN 
 TO QUE NOS CONDUS `,
    Execucao: true,
    DataInauguracao: ``,
    Latitude: `-22.8906311`,
    Longitude: `-43.2168948`,
};

export const PainelGentileza52_ProfetaGentileza: Obra = {
    ID: 625,
    Artistas: [artistas.ProfetaGentileza],
    Titulo: `Painel Gentileza 52`,
    Classificacao: 'efemero',
    Categoria: 'plasticidade',
    TipologiaObra: `Grafite`,
    Material: `Pintura em superficie argamassada`,
    Descricao: `O painel é uma pintura na pilastra do Viaduto do Cajú, na zona portuária da Cidade, onde O Profeta Gentileza, expôs suas mensagens e críticas.num trabalho artísticos de letras criada por ele. Gentileza, como era conhecidoJosé Datrino, executou 56 painéis, durante os anos de 1980.
NÃO USEM 
 PROBLEMAS 
 NÃO O SEM 
 POBREZA USE 
 GENTILEZA 
 A NATUREZA 
 POR JESSUS DISE 
 GENTILEZA PAZ`,
    Execucao: true,
    DataInauguracao: ``,
    Latitude: `-22.8906311`,
    Longitude: `-43.2168948`,
};

export const PainelGentileza53_ProfetaGentileza: Obra = {
    ID: 626,
    Artistas: [artistas.ProfetaGentileza],
    Titulo: `Painel Gentileza 53`,
    Classificacao: 'efemero',
    Categoria: 'plasticidade',
    TipologiaObra: `Grafite`,
    Material: `Pintura em superficie argamassada`,
    Descricao: `O painel é uma pintura na pilastra do Viaduto do Cajú, na zona portuária da Cidade, onde O Profeta Gentileza, expôs suas mensagens e críticas.num trabalho artísticos de letras criada por ele. Gentileza, como era conhecidoJosé Datrino, executou 56 painéis, durante os anos de 1980.
 AMORRR 
 MEUS FILHOS 
 NAÕ USEM PRO 
 BLEMAS NAÕ 
 USEM POBREZA 
 USAMOS A NA 
 TUREZA TEM 
 BASTANTE RIQUEZA 
 DISSE GENTILEZA 
strong> 
`,

    Execucao: true,
    DataInauguracao: ``,
    Latitude: `-22.8906311`,
    Longitude: `-43.2168948`,
};

export const PainelGentileza54_ProfetaGentileza: Obra = {
    ID: 627,
    Artistas: [artistas.ProfetaGentileza],
    Titulo: `Painel Gentileza 54`,
    Classificacao: 'efemero',
    Categoria: 'plasticidade',
    TipologiaObra: `Grafite`,
    Material: `Pintura em superficie argamassada`,
    Descricao: `O painel é uma pintura na pilastra do Viaduto do Cajú, na zona portuária da Cidade, onde O Profeta Gentileza, expôs suas mensagens e críticas.num trabalho artísticos de letras criada por ele. Gentileza, como era conhecidoJosé Datrino, executou 56 painéis, durante os anos de 1980.
 2 PALAVRA 
 QUE CONDENA POR 
 FAVOR OBRIGADO 
 E SER ESCRAVO DO 
CAPITALISMO `,

    Execucao: true,
    DataInauguracao: ``,
    Latitude: `-22.8906311`,
    Longitude: `-43.2168948`,
};

export const PainelGentileza55_ProfetaGentileza: Obra = {
    ID: 628,
    Artistas: [artistas.ProfetaGentileza],
    Titulo: `Painel Gentileza 55`,
    Classificacao: 'efemero',
    Categoria: 'plasticidade',
    TipologiaObra: `Grafite`,
    Material: `Pintura em superficie argamassada`,
    Descricao: `O painel é uma pintura na pilastra do Viaduto do Cajú, na zona portuária da Cidade, onde O Profeta Gentileza, expôs suas mensagens e críticas.num trabalho artísticos de letras criada por ele. Gentileza, como era conhecidoJosé Datrino, executou 56 painéis, durante os anos de 1980.
 MEUS FILHOS 
 NOSSA CABEÇA 
 NOSSO MESTRE 
 O MUNDO E UMA 
 ESCOLA AMOR `,

    Execucao: true,
    DataInauguracao: ``,
    Latitude: `-22.8906311`,
    Longitude: `-43.2168948`,
};

export const PainelGentilezas_ProfetaGentileza: Obra = {
    ID: 629,
    Artistas: [artistas.ProfetaGentileza],
    Titulo: `Painel Gentileza s`,
    Classificacao: 'efemero',
    Categoria: 'plasticidade',
    TipologiaObra: `Grafite`,
    Material: `Pintura em superficie argamassada`,
    Descricao: `O painel é uma pintura na pilastra do Viaduto do Cajú, na zona portuária da Cidade, onde O Profeta Gentileza, expôs suas mensagens e críticas.num trabalho artísticos de letras criada por ele. Gentileza, como era conhecidoJosé Datrino, executou 56 painéis, durante os anos de 1980.
 CARNAVAL NASCEU NA TRAIÇÃO DE JESSUSS 
FESTA DIABOLICA TODOS QUE VÃO COMPATILHAR COMO JUDA DE JESUS NO TV PELADOS DO 
JEITO QUE OS DIABOS DOS HOMENS GOSTÃO DEUS NÃO `,

    Execucao: true,
    DataInauguracao: ``,
    Latitude: `-22.8906311`,
    Longitude: `-43.2168948`,
};

export const Cascata_JardimdoValongo_LuizRey: Obra = {
    ID: 630,
    Artistas: [artistas.LuizRey],
    Titulo: `Cascata - Jardim do Valongo`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Cascata`,
    Material: `Peça de rocaille em argamassa,`,
    Descricao: `Cascada criada imitando pedras naturais em rocailles com um pequeno lago.`,

    Execucao: true,
    DataInauguracao: `01/1906`,
    Latitude: `-22.8989924`,
    Longitude: `-43.1876515`,
};

export const ChafarizdaImperatriz_FranciscoJoaquimBethencourtdaSilva: Obra = {
    ID: 631,
    Artistas: [artistas.FranciscoJoaquimBethencourtdaSilva],
    Titulo: `Chafariz da Imperatriz`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Chafariz`,
    Material: `Peça em gnaisse`,
    Descricao: `Chafariz composto por uma coluna circular de granito sobre um pedestal. Acima do capitel coríntio ergue-se uma esfera armilar em bronze, circundada por três setas representativas das armas da cidade e do martírio de São Sebastião. Foi construído por iniciativa da Câmara Municipal do Rio de Janeiro, em homenagem ao desembarque, naquele local, trinta anos antes, da Imperatriz Dona Teresa Cristina Maria, esposa de D. Pedro II. A homenagem foi uma ideia do Sr. Coronel Manoel de Frias e Vasconcelos, quando Inspetor das Obras Publicaas. O trabalho de cantaria foi encarregao ao mestre canteiro Sr. Appolinario Gomes de Oliveira.
Desativado em data desconhecida.`,

    Execucao: true,
    DataInauguracao: `12/1872`,
    Latitude: `-22.8967853`,
    Longitude: `-43.1871019`,
};

export const ChafarizMulhereoMenino_HenriFredericIselin: Obra = {
    ID: 632,
    Artistas: [artistas.HenriFredericIselin],
    Titulo: `Chafariz  Mulher e o Menino`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Chafariz`,
    Material: `Peça em ferro fundido e pedestal de granito`,
    Descricao: `Chafariz composto por uma bacia sobre a qual se apoiam golfinhos que jorram água e plantas aquáticas. Acima da bacia ergue-se uma escultura de mulher, derramando água na taça na mao de uma criança.A figura feminina chama atenção pelas formas do corpo, com uma tunica drapeada que veste e propositadamente não a encobre.
O Chafariz foi inaugurado em 1906, quando começaram a ser captadas as aguas dos manancias do Cavanca, Iguaçu Mirim, no Reservatório do Engenho de Dentro, conforma foto da Revista Ilustrada. Foi inaugurado pelo Sr. Rafael de Almeida Magalhaes e pelo Sr. Trancoso e Trancoso, Administrador Regional da Zona Portuária.`,

    Execucao: true,
    DataInauguracao: `06/1964`,
    Latitude: `-22.8995194`,
    Longitude: `-43.2012999`,
};

export const SerzedeloCorreia_ArquimedesJdaSilva: Obra = {
    ID: 635,
    Artistas: [artistas.ArquimedesJdaSilva],
    Titulo: `Serzedelo Correia`,
    Classificacao: 'perene',
    Categoria: 'personalidades',
    TipologiaObra: `Efigie`,
    Material: `Peça em argamassa`,
    Descricao: `A efígie do prefeito da época, foi executada na face externa do terraço fronteiro ao Museu Nacional, como homenagem ao reformador do parque.`,
    Execucao: true,
    DataInauguracao: `10/1910`,
    Latitude: `-22.9058302`,
    Longitude: `-43.2254079`,
};

export const NiloPecanhaII_ArquimedesJdaSilva: Obra = {
    ID: 636,
    Artistas: [artistas.ArquimedesJdaSilva],
    Titulo: `Nilo Pecanha II`,
    Classificacao: 'perene',
    Categoria: 'personalidades',
    TipologiaObra: `Esfigie`,
    Material: `Peça em argamassa`,
    Descricao: `Efigie que homenagea e registra o Presidente da Repúbica que concebeu o terraço e outros melhoramentos no parque.`,
    Execucao: true,
    DataInauguracao: `10/1910`,
    Latitude: `-22.9053459`,
    Longitude: ``,
};

export const ZeferinodeOliveira_Desconhecida: Obra = {
    ID: 641,
    Artistas: [artistas.Desconhecida],
    Titulo: `Zeferino de Oliveira`,
    Classificacao: 'perene',
    Categoria: 'personalidades',
    TipologiaObra: `Busto`,
    Material: `Peça em bronze e pedestal de concreto`,
    Descricao: `A homenagem foi retirado do Campo em setembro de 1991 para as obras urbanas e transferido para o depósito da Prefeitura quando foi reinstalado e reinaugurado em 07 de setembro de 2011. 
O monumento foi iniciativa da família e amigos que atraves do Sr. Hildebrando de Goi,s que levou ao prefeito um abaixo assinado solicitado autoirzação para o monumento , por ter sido ele um filantropico do bairro, prinicipalmente após a doação de uma creche à prefeitura da cidade.`,
    Execucao: true,
    DataInauguracao: `04/1947`,
    Latitude: `-22.8977482`,
    Longitude: `-43.218008`,
};

export const PadreCicero_Desconhecida: Obra = {
    ID: 642,
    Imagem: 'PadreCicero_Desconhecida.jpg',
    Artistas: [artistas.Desconhecida],
    Titulo: `Padre Cícero`,
    Classificacao: 'perene',
    Categoria: 'representações religiosas',
    TipologiaObra: `Estátua`,
    Material: `Peça em argamassa`,
    Descricao: `Estátua do Padre Cícero, reproduzindo uma das suas características. Doada à Cidade do Rio de Janeiro pela Rádio
    Tamoio.`,
    Execucao: true,
    DataInauguracao: `09/2009`,
    Zona: 'Central',
    Bairro: 'São Cristóvão',
    PontoDeReferencia: 'Feira de São Cristóvão',
    Latitude: `-22.8965492`,
    Longitude: `-43.221133`,
    Fatos: [new Fato('', '', 'Propriedade', 'Pública', [], 'Rio de Janeiro')],
};

export const GetulioVargas_Desconhecida: Obra = {
    ID: 646,
    Artistas: [artistas.Desconhecida],
    Titulo: `Getulio Vargas`,
    Classificacao: 'perene',
    Categoria: 'personalidades',
    TipologiaObra: `Busto`,
    Material: `Peça em bronze e pedestal de concreto`,
    Descricao: `A homenagem ao ex-presidente foi erguida pelo reconhecimento e esta localizada no interior do conjunto dos
    ex-combatentes.`,
    Execucao: true,
    DataInauguracao: `01/1996`,
    Zona: 'Norte',
    Bairro: 'Benfica',
    PontoDeReferencia: 'R. Dom Hélder Câmara',
    Latitude: `-22.8856285`,
    Longitude: `-43.2521434`,
    Lugar: 'Não identificado',
    Fatos: [
        new Fato('', '', 'Propriedade', 'Pública', [], 'Rio de Janeiro'),
        new Fato('', '', 'Fundição/Atelier', 'Arsenal de Guerra - AGR', [], 'Rio de Janeiro'),
    ],
};

export const Africa_Desconhecida: Obra = {
    ID: 647,
    Artistas: [artistas.Desconhecida],
    Titulo: `África`,
    Classificacao: 'perene',
    Categoria: 'sublimidade',
    TipologiaObra: `Escultura`,
    Material: `Peça em mármore de Carrara`,
    Descricao: `A escultura foi instalada originariamente no jardim em frente ao Museu Nacional. Foi retirada no início dos anos 90 do século XX e atualmente encontra-se na reserva técnica do Museu Nacional.`,
    Execucao: true,
    DataInauguracao: `10/1910`,
    Latitude: `-22.9056425`,
    Longitude: `-43.2258737`,
};

export const America_Desconhecida: Obra = {
    ID: 648,
    Artistas: [artistas.Desconhecida],
    Titulo: `América`,
    Classificacao: 'perene',
    Categoria: 'sublimidade',
    TipologiaObra: `Escultura`,
    Material: `Peça em mármore de Carrara`,
    Descricao: `A escultura foi instalada originariamente no jardim em frente ao Museu Nacional. Foi retirada no início dos anos 90 do século XX e atualmente encontra-se na reserva técnica do Museu Nacional.`,
    Execucao: true,
    DataInauguracao: `10/1910`,
    Latitude: `-22.9056425`,
    Longitude: `-43.2258737`,
};

export const Asia_Desconhecida: Obra = {
    ID: 649,
    Artistas: [artistas.Desconhecida],
    Titulo: `Ásia`,
    Classificacao: 'perene',
    Categoria: 'sublimidade',
    TipologiaObra: `Escultura`,
    Material: `Peça em mármore de Carrara`,
    Descricao: `A escultura foi instalada originariamente no jardim em frente ao Museu Nacional. Foi retirada no início dos anos 90 do século XX e atualmente encontra-se na reserva técnica do Museu Nacional.`,
    Execucao: true,
    DataInauguracao: `10/1910`,
    Latitude: `-22.9056425`,
    Longitude: `-43.2258737`,
};

export const DianaaCacadora_Desconhecida: Obra = {
    ID: 650,
    Artistas: [artistas.Desconhecida],
    Titulo: `Diana a Caçadora`,
    Classificacao: 'perene',
    Categoria: 'sublimidade',
    TipologiaObra: `Escultura`,
    Material: `Peça em mármore de Carrara`,
    Descricao: `A escultura foi instalada originariamente no jardim em frente ao Museu Nacional. Foi retirada no início dos anos 90 do século XX e atualmente encontra-se na reserva técnica do Museu Nacional.`,
    Execucao: true,
    DataInauguracao: `10/1910`,
    Latitude: `-22.9056425`,
    Longitude: `-43.2258737`,
};

export const AquariodaQuintadaBoaVista_LuizRey: Obra = {
    ID: 651,
    Artistas: [artistas.LuizRey],
    Titulo: `Aquário da Quinta da Boa Vista`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Construção`,
    Material: `Peça de rocaille em argamassa`,
    Descricao: `O aquário externamente imita uma caverna toda construída em<em>rocailles</em>. Na área interna, remodelada, há dois ambientes, com janelas por onde se podem ver diversas espécies de peixes<.`,
    Execucao: true,
    DataInauguracao: `10/1910`,
    Latitude: `-22.9063019`,
    Longitude: `-43.2281958`,
};

export const Trabalhodeaco_JulesSegal: Obra = {
    ID: 652,
    Artistas: [artistas.JulesSegal],
    Titulo: `Trabalho de aço`,
    Classificacao: 'perene',
    Categoria: 'sublimidade',
    TipologiaObra: `Escultura`,
    Material: `Peça em bronze`,
    Descricao: `Foi inaugurado no Campo de Santana, e reinaugurado no Aquário da Quinta da Boa Vista em 1952.
É painel em alto-relevo em bronze, representando uma cena da indústria de fundição, doação do Governo da Bélgica à Municipalidade do Rio de Janeiro por ocasião do Centenário da Independência.`,
    Execucao: true,
    DataInauguracao: `07/1923`,
    Latitude: `-22.9063019`,
    Longitude: `-43.2281958`,
};

export const PainelGentileza44_ProfetaGentileza: Obra = {
    ID: 617,
    Artistas: [artistas.ProfetaGentileza],
    Titulo: `Painel Gentileza 44`,
    Classificacao: 'efemero',
    Categoria: 'plasticidade',
    TipologiaObra: `Grafite`,
    Material: `Pintura em superficie argamassada`,
    Descricao: `O painel é uma pintura na pilastra do Viaduto do Cajú, na zona portuária da Cidade, onde O Profeta Gentileza, expôs suas mensagens e críticas.num trabalho artísticos de letras criada por ele. Gentileza, como era conhecidoJosé Datrino, executou 56 painéis, durante os anos de 1980.

 NÃO PENSE 
 M EM DINHEIRO 
 ELE E O CAPETA 
 CAPITALISMO 
 CEGA A HUMANI 
 DADE LEVA PARA 
 O ABISMO O SUJO 
 CAPITALISMO 
 POR JESSUS DI 
 SSE GENTILEZA`,
    Execucao: true,
    DataInauguracao: ``,
    Latitude: `-22.8906311`,
    Longitude: `-43.2168948`,
};

export const MesadoImperadordaQuintadaBoaVista_Desconhecida: Obra = {
    ID: 654,
    Artistas: [artistas.Desconhecida],
    Titulo: `Mesa do Imperador da Quinta da Boa Vista`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `mobiliario`,
    Material: `Peça em gnaisse`,
    Descricao: `Grande mesa de blocos maciço em cantaria composta de mesa e dois bancos laterias. Inicialmente eram dois conjuntos e atualmente um deles esta desmontado.`,
    Execucao: true,
    DataInauguracao: ``,
    Latitude: `-22.9066881`,
    Longitude: `-43.2275959`,
};

export const BebedouroTroncodeArvoredaQuintadaBoaVista_Desconhecida: Obra = {
    ID: 656,
    Artistas: [artistas.Desconhecida],
    Titulo: `Bebedouro Tronco de Arvore da Quinta da Boa Vista`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `bebedouro`,
    Material: `Peça de rocaille em argamassa,`,
    Descricao: `Representação de um tronco de arvore cortado, executado em argamassa, que servia como bebedouro para os frequentadores do parque.
Desativado em data desconhecida`,
    Execucao: true,
    DataInauguracao: `01/1876`,
    Latitude: `-22.9064936`,
    Longitude: `-43.2227264`,
};

export const TunelnaQuintadaBoaVista_AugusteFrancoisMarieGlaziou: Obra = {
    ID: 658,
    Artistas: [artistas.AugusteFrancoisMarieGlaziou],
    Titulo: `Túnel na Quinta da Boa Vista`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Construção`,
    Material: `Pedra e tijolo com argamassa`,
    Descricao: `Construção artificial de um tunel que se abre em duas bocas, servindo de ligação entre os lagos do parque.`,
    Execucao: true,
    DataInauguracao: `01/1876`,
    Latitude: `-22.9058179`,
    Longitude: `-43.2226438`,
};

export const CoretodoPagodeChines_LuizRey: Obra = {
    ID: 659,
    Artistas: [artistas.LuizRey],
    Titulo: `Coreto do Pagode Chinês`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Coreto`,
    Material: `Peça de rocaille em argamassa`,
    Descricao: `Construção em forma de um coreto o conhecido Pagode Chinês tem forma hexagonal, com estrutura de ferro revestida por argamassa modelada em canas e nós de bambus, implantado sobre um amontoado de pedras em argamassa criado por AugusteFrancoisMarieGlaziou<. A construção é um mirante do parque.`,
    Execucao: true,
    DataInauguracao: `10/1910`,
    Latitude: `-22.9058179`,
    Longitude: `-43.2226438`,
};

export const TemploemRuinasoudeApolo_ArquimedesJosedaSilva: Obra = {
    ID: 660,
    Artistas: [artistas.ArquimedesJosedaSilva],
    Titulo: `Templo em Ruinas ou de Apolo`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Construção`,
    Material: `Pedra e tijolo com argamassa`,
    Descricao: `A construção em forma de cruz tem como elemento swcorativo douze colunas de estilo dórico e um arquitrave fechando o conjunto.
Construção reproduzindo um templo grego com colunas de estilo dórico sustentando uma arquitrave, instalado numa ilha criada por AugusteFrancoisMarieGlaziou, A ilha conhecida como Ilha dos Amores criada para recreação, contando no projeto original existente no Museu da Cidade.`,
    Execucao: true,
    DataInauguracao: `10/1910`,
    Latitude: `-22.9058179`,
    Longitude: `-43.2226438`,
};

export const Guarda_corpoIdaPontedaQuintadaBoaVista_ArquimedesJdaSilva: Obra = {
    ID: 661,
    Artistas: [artistas.ArquimedesJdaSilva],
    Titulo: `Guarda-corpo I da Ponte da Quinta da Boa Vista`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Guarda-corpo`,
    Material: `Peça de rocaille em argamassa`,
    Descricao: `Construção imitando tronco de árvore, na ponte sobre o canal que circunda o parque.`,
    Execucao: true,
    DataInauguracao: `10/1910`,
    Latitude: `-22.9079862`,
    Longitude: `-43.2226074`,
};

export const Guarda_corpoIIdaPontedaQuintadaBoaVista_ArquimedesJdaSilva: Obra = {
    ID: 662,
    Artistas: [artistas.ArquimedesJdaSilva],
    Titulo: `Guarda-corpo II da Ponte da Quinta da Boa Vista`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Guarda-corpo`,
    Material: `Peça de rocaille em argamassa`,
    Descricao: `Construção imitando tronco de arvore na ponte sobre o canal que circunda o parque.`,
    Execucao: true,
    DataInauguracao: `10/1910`,
    Latitude: `-22.9079718`,
    Longitude: `-43.2225054`,
};

export const Guarda_corpoIIIdaPontedaQuintadaBoaVista_Desconhecida: Obra = {
    ID: 663,
    Artistas: [artistas.Desconhecida],
    Titulo: `Guarda-corpo III da Ponte da Quinta da Boa Vista`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Guarda-corpo`,
    Material: `Peça de rocaille em argamassa`,
    Descricao: `Construção imitando blocos de pedra, na ponte sobre o canal que circunda o parque.`,
    Execucao: true,
    DataInauguracao: `10/1910`,
    Latitude: `-22.906246`,
    Longitude: `-43.2224362`,
};

export const Guarda_corpoIVdaPontedaQuintadaBoaVista_ArquimedesJdaSilva: Obra = {
    ID: 664,
    Artistas: [artistas.ArquimedesJdaSilva],
    Titulo: `Guarda-corpo IV da Ponte da Quinta da Boa Vista`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Guarda-corpo`,
    Material: `Peça de rocaille em argamassa`,
    Descricao: `Construção imitando tronco de arvore na ponte sobre o lago no acesso ao Templo de Apolo.`,
    Execucao: true,
    DataInauguracao: `10/1910`,
    Latitude: `-22.9051035`,
    Longitude: `-43.2223434`,
};

export const Guarda_corpoVdaPontedaQuintadaBoaVista_ArquimedesJdaSilva: Obra = {
    ID: 665,
    Artistas: [artistas.ArquimedesJdaSilva],
    Titulo: `Guarda-corpo V da Ponte da Quinta da Boa Vista`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Guarda-corpo`,
    Material: `Peça de rocaille em argamassa`,
    Descricao: `Construção imitando tronco de árvore, na ponte sobre o canal que circunda o parque.`,
    Execucao: true,
    DataInauguracao: `10/1910`,
    Latitude: `-22.9075837`,
    Longitude: `-43.2247066`,
};

export const Guarda_corpoVIdaPontedaQuintadaBoaVista_ArquimedesJdaSilva: Obra = {
    ID: 666,
    Artistas: [artistas.ArquimedesJdaSilva],
    Titulo: `Guarda-corpo VI da Ponte da Quinta da Boa Vista`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Guarda-corpo`,
    Material: `Peça de rocaille em argamassa`,
    Descricao: `Construção imitando blocos de pedra, na ponte sobre o canal que circunda o parque.`,
    Execucao: true,
    DataInauguracao: `10/1910`,
    Latitude: `-22.9075709`,
    Longitude: `-43.226231`,
};

export const CapsuladoTemponaQuintadaBoaVista_Desconhecida: Obra = {
    ID: 667,
    Artistas: [artistas.Desconhecida],
    Titulo: `Cápsula do Tempo na Quinta da Boa Vista`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `marco`,
    Material: `Peça em concreto`,
    Descricao: `Trata-se de uma construção com uma placa em bronze fixada numa laje de concreto, com as datas de 1972 e 2022. Foi instalada durante as festividades do Sesquicentenário da Independência, tendo em vista o Bicentenário da mesma.`,
    Execucao: true,
    DataInauguracao: `01/1972`,
    Latitude: `-22.9056425`,
    Longitude: `-43.2258737`,
};

export const VasoIdoTerracodaQuinta_ArquimedesJdaSilva: Obra = {
    ID: 668,
    Artistas: [artistas.ArquimedesJdaSilva],
    Titulo: `Vaso I do Terraço da Quinta`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Vaso`,
    Material: `Peça em argamassa`,
    Descricao: `São 40 peças decoraticas pintado na cor ocre instaladas sobre a amurada do terraço.`,
    Execucao: true,
    DataInauguracao: `10/1910`,
    Latitude: `-22.90576`,
    Longitude: `-43.2257812`,
};

export const VasoIIdoTerracodaQuinta_ArquimedesJdaSilva: Obra = {
    ID: 669,
    Artistas: [artistas.ArquimedesJdaSilva],
    Titulo: `Vaso II do Terraço da Quinta`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Vaso`,
    Material: `Peça em argamassa`,
    Descricao: `São 2 peças decoraticas pintado na cor ocre instaladas ao centro da amurada do terraço.`,
    Execucao: true,
    DataInauguracao: `10/1910`,
    Latitude: `-22.9056874`,
    Longitude: `-43.225434`,
};

export const VasoMonumentaldoTerracodaQuinta_ArquimedesJdaSilva: Obra = {
    ID: 670,
    Artistas: [artistas.ArquimedesJdaSilva],
    Titulo: `Vaso Monumental do Terraço da Quinta`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Vaso`,
    Material: `Peça em argamassa`,
    Descricao: `São 2 peças decoraticas pintado na cor ocre instaladas numa coluna monumentl no acesso ao terraço.`,
    Execucao: true,
    DataInauguracao: `10/1910`,
    Latitude: `-22.9055902`,
    Longitude: `-43.2250378`,
};

export const AmuradadoTerracodaQuintadaBoaVista_ArquimedesJdaSilva: Obra = {
    ID: 671,
    Artistas: [artistas.ArquimedesJdaSilva],
    Titulo: `Amurada do Terraço da Quinta da Boa Vista`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Amurada`,
    Material: `Pedra e tijolo com argamassa`,
    Descricao: `A construção nivelando a área frontal do Museu Nacional, construído de forma retangular, com guarda-corpo composto por balaustre de argamassa e parapeito. As colunas tem peças decorativas com vasos tambem de argamassa e postes de ferro fundido.`,
    Execucao: true,
    DataInauguracao: `10/1910`,
    Latitude: `-22.9053866`,
    Longitude: `-43.2249472`,
};

export const PortaodeFerrodaQuintadaBoaVista_Desconhecida: Obra = {
    ID: 672,
    Artistas: [artistas.Desconhecida],
    Titulo: `Portão de Ferro da Quinta da Boa Vista`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Portão`,
    Material: `Metal em ferro fundido e colunas de concreto`,
    Descricao: `Portão fixado entre duas pilastras de alvenaria, com detalhes na forma de caras de leão e florões de bronze nos dois batentes, tudo corado por um frontão com as letras QBV e o brasão do Império.
O fronstipicio foi danificado em 2016 por um onibus de turismo e transferido para o deposito da Prefeitura.`,
    Execucao: true,
    DataInauguracao: ``,
    Latitude: `-22.908628`,
    Longitude: `-43.2228753`,
};

export const PortaoMonumentaldaQuintadaBoaVista_ArquimedesJdaSilva: Obra = {
    ID: 673,
    Artistas: [artistas.ArquimedesJdaSilva],
    Titulo: `Portão Monumental da Quinta da Boa Vista`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Portão`,
    Material: `Metal em ferro fundido e colunas de concreto`,
    Descricao: `Portal em ferro fundido e pilastras de alvenaria, com uma entrada central e duas laterais menores, intercaladas por quatro grandes vãos gradeados, sendo o portão central coroado pelas armas da República<.`,
    Execucao: true,
    DataInauguracao: `10/1910`,
    Latitude: `-22.9045641`,
    Longitude: `-43.2199844`,
};

export const PortaodoLargodaCancela_Desconhecida: Obra = {
    ID: 674,
    Artistas: [artistas.Desconhecida],
    Titulo: `Portão do Largo da Cancela`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Portão`,
    Material: `Metal em ferro fundido e colunas de concreto`,
    Descricao: `Portão de ferro, com dois laterais menores de acessos laterais para pedestres.`,
    Execucao: true,
    DataInauguracao: ``,
    Latitude: `-22.9015728`,
    Longitude: `-43.2252913`,
};

export const Colunatas_GeorgeLopes_GeorgeGuerra: Obra = {
    ID: 984,
    Artistas: [artistas.GeorgeLopes, artistas.GeorgeGuerra],
    Titulo: `Colunatas`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `colunatas`,
    Material: `Chapas de aço e concreto armado`,
    Descricao: `Colunas de concreto com uma semiesfera na extremidade, representando os laranjais existentes na região durante o
    período de ocupação rural. Cada colunata custou a época foi R$2.280,00.`,
    Execucao: true,
    DataInauguracao: `07/1996`,
    Zona: 'Oeste',
    Bairro: 'Campo Grande',
    PontoDeReferencia: 'Praça Dr. Raul Boaventura e Viúva Dantas',
    Latitude: `-22.9025031`,
    Longitude: `-43.5600507`,
    Lugar: 'Não identificado',
    Fatos: [new Fato('', '', 'Propriedade', 'Pública', [], 'Rio de Janeiro')],
};

export const PortaodaCoroadoZoologico_RobertAdams: Obra = {
    ID: 675,
    Artistas: [artistas.RobertAdams],
    Titulo: `Portão da Coroa do Zoológico`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Portão`,
    Material: `Pedra e tijolo com argamassa`,
    Descricao: `Portão original do terraço do Palacio hoje Museu Nacional, ofertado a D. Pedro I, em comemoração a suas núpcias com D. Leopoldina, pelo General Hugh Percy, 2.° Duque de Northumberland. Esse portão monumental é inspirado no pórtico do grande arquiteto escocês Robert Adam para a Sion House, residência do Duque na Inglaterra. Um grande corpo central, aberto em arco pleno, é ladeado por duas colunatas neoclássicas sob platibanda, que terminam em duas edículas de planta quadrada, com coroamento piramidal. Encimando o portão central, um par de dragões dos Braganças ladeia um brasão coroado. Foi demolido e remontado em 1910 na atual localização, na entrada do Jardim Zoologico.
Fabricada pela empresa inglesa Coade & Sealy.`,
    Execucao: true,
    DataInauguracao: `01/1817`,
    Latitude: `-22.904389`,
    Longitude: `-43.228539`,
};

export const PainelGentileza15_ProfetaGentileza: Obra = {
    ID: 586,
    Artistas: [artistas.ProfetaGentileza],
    Titulo: `Painel Gentileza 15`,
    Classificacao: 'efemero',
    Categoria: 'plasticidade',
    TipologiaObra: `Grafite`,
    Material: `Pintura em superficie argamassada`,
    Descricao: `O painel é uma pintura na pilastra do Viaduto do Cajú, na zona portuária da Cidade, onde O Profeta Gentileza, expôs suas mensagens e críticas.num trabalho artísticos de letras criada por ele. Gentileza, como era conhecidoJosé Datrino, executou 56 painéis, durante os anos de 1980.
 GENTILEZA GERA GENTILEZA AMORRR 
 MAUS FILHOS HOJE DIA DOS MORTOS NÃO SE PREOCUPAIS 
 COM OS MORTOS ENTERADOS E ENTERRANDO TEMOS QUE 
 SE PREOCUPAR COM OS MORTOS ANDANDO PARA DEUS TODOS 
 QUE ESTIVEREM NO PECADO TODOS ESTÃO MORTOS OS PERVE 
 SOS OS VICIADOS TODOS QUE ANDAREM MALTRAJADOS PELA 
 DOS ESTÃO MORTOS CATINGANDO CONTAMINANDO TODOS 
 NO PECADO PELADOS CADAVER ANBULANTES VAI SSER 
 VESTIR POR JESUS DISSE PROFETA GENTILEZA AMORRR PAZ `,
    Execucao: true,
    DataInauguracao: ``,
    Latitude: `-22.9003499`,
    Longitude: `-43.2105682`,
};

export const DianaaCacadora_Leocares: Obra = {
    ID: 677,
    Artistas: [artistas.Leocares],
    Titulo: `Diana a Caçadora`,
    Classificacao: 'perene',
    Categoria: 'sublimidade',
    TipologiaObra: `Escultura`,
    Material: `Peça em mármore de Carrara`,
    Descricao: `É uma reprodução da obra original, em bronze, atribuída ao escultor grego Leocares. É uma reprodução da existente
    do Museu do Louvre. Existem várias cópias suas, tanto em bronze quanto em mármore, em diversos países.`,
    Execucao: true,
    DataInauguracao: ``,
    Zona: 'Central',
    Bairro: 'São Cristovão',
    PontoDeReferencia: 'Jardim Zoológico',
    Latitude: `-22.9044112`,
    Longitude: `-43.2296193`,
    Fatos: [
        new Fato('', '', 'Propriedade', 'Pública', [], 'Rio de Janeiro'),
        new Fato('', '', 'Réplica', 'Reprodução da obra do escultor grego Leocares existente no Museu do Louvre', [], 'Rio de Janeiro'),
    ],
};

export const MacacoTiao_GianPietroZanni: Obra = {
    ID: 678,
    Artistas: [artistas.GianPietroZanni],
    Titulo: `Macaco Tião`,
    Classificacao: 'perene',
    Categoria: 'personalidades',
    TipologiaObra: `Estátua`,
    Material: `Peça em bronze`,
    Descricao: `Estátua homenageando o mais popular animal na história do Zoológico do Rio de Janeiro, morto em 1996, patrocinada
    pela rede de lanchonetes Mc Donalds, que o adotara dois anos antes.`,
    Execucao: true,
    DataInauguracao: `08/1997`,
    Zona: 'Central',
    Bairro: 'São Cristóvão',
    PontoDeReferencia: 'Jardim Zoologico',
    Latitude: `-22.904452`,
    Longitude: `-43.2295205`,
    Lugar: 'Parque',
    Fatos: [new Fato('', '', 'Propriedade', 'Pública', [], 'Rio de Janeiro')],
};

export const SaoFranciscodeAssis_FreiGeraldoRoberfeld: Obra = {
    ID: 679,
    Imagem: 'SaoFranciscodeAssis_FreiGeraldoRoberfeld.jpg',
    Artistas: [artistas.FreiGeraldoRoberfeld],
    Titulo: `São Francisco de Assis`,
    Classificacao: 'perene',
    Categoria: 'representação religiosa',
    TipologiaObra: `Estátua`,
    Material: `Peça em bronze`,
    Descricao: `A estátua foi doada à Cidade pela comunidade franciscana no 8º centenário do nascimento do grande santo.`,
    Execucao: true,
    DataInauguracao: `10/1982`,
    Zona: 'Central',
    Bairro: 'São Cristovão',
    PontoDeReferencia: 'Jardim Zoologico',
    Latitude: `-22.90394`,
    Longitude: `-43.2304726`,
    Fatos: [new Fato('', '', 'Propriedade', 'Pública', [], 'Rio de Janeiro')],
};

export const ColunadePersepolis_Desconhecida: Obra = {
    ID: 680,
    Artistas: [artistas.Desconhecida],
    Titulo: `Coluna de Persépolis`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `coluna`,
    Material: `Peça em granito`,
    Descricao: `Réplica de uma das colunas da cidade de Persépolis, capital da Pérsia nos tempos de Ciro e Dario. Em seu capitel erguem-se duas estátuas do touros alados.
O monumento simboliza a amizade entre a Nação Iraniana e Brasileira. Foi doada à Cidade do Rio de Janeiro pela República Islamica do Irã e inaugurada durante a Conferência Rio +20, sobre desenvolvimento sustentável, pelo Embaixador Mohammad Ali Ghanezadele, Embaixador da Republica Islamica no Brasil.`,
    Execucao: true,
    DataInauguracao: `06/2012`,
    Latitude: `-22.9050881`,
    Longitude: `-43.2182037`,
};

export const AmuradadoCampodeSaoCristovao_Desconhecida: Obra = {
    ID: 681,
    Artistas: [artistas.Desconhecida],
    Titulo: `Amurada do Campo de São Cristovão`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Amurada`,
    Material: `Blocos de granito`,
    Descricao: `A murada de pedras sobrepostas, Duas escadarias, uma fronteira à outra, dão acesso à parte superior da rua e colunas de cantaria arremanta as extremidades da amurada`,
    Execucao: true,
    DataInauguracao: `11/1906`,
    Latitude: `-22.8992413`,
    Longitude: `-43.221812`,
};

export const CoretodoCampodeSaoCristovao_Desconhecida: Obra = {
    ID: 683,
    Artistas: [artistas.Desconhecida],
    Titulo: `Coreto do Campo de São Cristovão`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `coreto`,
    Material: `Peça em ferro fundido e pedestal de granito`,
    Descricao: `Construção de forma octogonal com 85 m², com embasamento em alvenaria de pedras expostas, formando um primeiro piso com sete janelas e uma porta de entrada, sob a escada dupla que conduz ao patamar, revestido por ladrilhos hidráulicos. A cobertura repousa sobre colunas em ferro fundido, dividida em dois segmentos justapostos, em chapa galvanizada e com diversos ornamentos.
Parte do guarda corpo do coreto esta no deposito para servir de modelo na restauração do mesmo.`,
    Execucao: true,
    DataInauguracao: `11/1906`,
    Latitude: `-22.898481`,
    Longitude: `-43.2223837`,
};

export const PaineldeSaoRoque_Desconhecida: Obra = {
    ID: 684,
    Artistas: [artistas.Desconhecida],
    Titulo: `Painel de São  Roque`,
    Classificacao: 'perene',
    Categoria: 'representação religiosa',
    TipologiaObra: `Mosaico`,
    Material: `Mosaico de pastilhas`,
    Descricao: `Mosaico de pastilhas realizado pela Associação de Entidades de São Cristovão, com a colaboração da Cia. Cerâmica Brasileira e da comunidade local.`,
    Execucao: true,
    DataInauguracao: `01/1965`,
    Latitude: `-22.9015936`,
    Longitude: `-43.2222982`,
};

export const Guarda_corpodaAvenidaRodriguesAlves_Desconhecida: Obra = {
    ID: 686,
    Artistas: [artistas.Desconhecida],
    Titulo: `Guarda-corpo da Avenida Rodrigues Alves`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Guarda-corpo`,
    Material: `Peça em ferro fundido`,
    Descricao: `Balaustrada em ferro fundido com argamassa de apoio entre as peças`,
    Execucao: true,
    DataInauguracao: ``,
    Latitude: `-22.8984589`,
    Longitude: `-43.2102504`,
};

export const Guarda_corpodaAvenidaFranciscoBicalho_Desconhecida: Obra = {
    ID: 687,
    Artistas: [artistas.Desconhecida],
    Titulo: `Guarda-corpo da Avenida Francisco Bicalho`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Guarda-corpo`,
    Material: `Peça em argamassa`,
    Descricao: `Balaustrada de argamassa servindo de proteção sobre o canal`,
    Execucao: true,
    DataInauguracao: ``,
    Latitude: `-22.9032543`,
    Longitude: `-43.2100961`,
};

export const MarcoaBiblia_Desconhecida: Obra = {
    ID: 688,
    Artistas: [artistas.Desconhecida],
    Titulo: `Marco à Bíblia`,
    Classificacao: 'perene',
    Categoria: 'representação religiosa',
    TipologiaObra: `Marco`,
    Material: `Peça em bronze com pedestal revestido de granito`,
    Descricao: `A peça representando um livro a Bíblia sobre um pedestal numa referência a comunidade local e as Igrejas Evangélicas.`,
    Execucao: true,
    DataInauguracao: `12/1996`,
    Latitude: `-22.8856285`,
    Longitude: `-43.2521434`,
};

export const MarcodaInauguracaodoViadutoAnaNeri_Desconhecida: Obra = {
    ID: 689,
    Artistas: [artistas.Desconhecida],
    Titulo: `Marco da Inauguração do Viaduto Ana Neri`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Marco`,
    Material: `Blocos de granito`,
    Descricao: `Construção trapezoidal de concreto qu<e tem fixada uma placa em bronze com os dizeres dos executores da obra`,
    Execucao: true,
    DataInauguracao: `09/1956`,
    Latitude: `-22.8955814`,
    Longitude: `-43.2409907`,
};

export const OratorioaSaoJorgedeBenfica_Desconhecida: Obra = {
    ID: 691,
    Artistas: [artistas.Desconhecida],
    Titulo: `Oratório à São Jorge de Benfica`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Oratório`,
    Material: `Peça em concreto com imagem em resina`,
    Descricao: `Construção de argamassa com a imagem do santo guerreiro em argamssa.`,
    Execucao: true,
    DataInauguracao: ``,
    Latitude: `-22.8897777`,
    Longitude: `-43.2351104`,
};

export const VasodoJardimZoologico_Desconhecida: Obra = {
    ID: 693,
    Artistas: [artistas.Desconhecida],
    Titulo: `Vaso do Jardim Zoológico`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Vaso`,
    Material: `Peça em mármore de Carrara`,
    Descricao: `Peça decorativa em mármore para adornar uma coluna divisória.`,
    Execucao: true,
    DataInauguracao: ``,
    Latitude: `-22.90394`,
    Longitude: `-43.2304726`,
};

export const CascatadaQuintadaBoaVista_AugusteFrancoisMarieGlaziou: Obra = {
    ID: 694,
    Artistas: [artistas.AugusteFrancoisMarieGlaziou],
    Titulo: `Cascata da Quinta da Boa Vista`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Cascata`,
    Material: `Peça de rocaille em argamassa`,
    Descricao: `Cascata artificial criada sobre uma gruta, tambem artifical, tipica dos jardins românticos, para embelezar o parque.
Desativado desde maio de 2017.`,
    Execucao: true,
    DataInauguracao: `01/1876`,
    Latitude: `-22.9047893`,
    Longitude: `-43.2257732`,
};

export const GrutadaQuintadaBoaVista_AugusteFrancoisMarieGlaziou: Obra = {
    ID: 695,
    Artistas: [artistas.AugusteFrancoisMarieGlaziou],
    Titulo: `Gruta da Quinta da Boa Vista`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `gruta`,
    Material: `Peça de rocaille em argamassa`,
    Descricao: `Vasta gruta artificial, em argamassa, com estalagmites e estalactites.`,
    Execucao: true,
    DataInauguracao: `01/1876`,
    Latitude: `-22.9047893`,
    Longitude: `-43.2257732`,
};

export const LagodaQuintadaBoaVista_AugusteFrancoisMarieGlaziou: Obra = {
    ID: 696,
    Artistas: [artistas.AugusteFrancoisMarieGlaziou],
    Titulo: `Lago da Quinta da Boa Vista`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Lago`,
    Material: `Pedra e tijolo com argamassa`,
    Descricao: `Criado pelo no paisagismo romântico do século XIX, do projeto de AugusteFrancoisMarieGlaziou, da captação das águas do Rio Joana contorno toda a extensão do parque.`,
    Execucao: true,
    DataInauguracao: `01/1876`,
    Latitude: `-22.9059789`,
    Longitude: `-43.221885`,
};

export const TimMaia_ChristinaMotta: Obra = {
    ID: 701,
    Artistas: [artistas.ChristinaMotta],
    Titulo: `Tim Maia`,
    Classificacao: 'perene',
    Categoria: 'personalidades',
    TipologiaObra: `Estátua`,
    Material: `Peça em bronze`,
    Descricao: `A estátua em tamanho natural foi doada à cidade pelo Projeto Nivea Tim Maia e instalada no bairro da Tijuca, onde o homenageado viveu parte de sua vida, e iniciou sua carreria artística.`,
    Execucao: true,
    DataInauguracao: `06/2015`,
    Latitude: `-22.9173049`,
    Longitude: `-43.2178181`,
};

export const EliasGoraybe_Desconhecida: Obra = {
    ID: 706,
    Artistas: [artistas.Desconhecida],
    Titulo: `Elias Goraybe`,
    Classificacao: 'perene',
    Categoria: 'personalidades',
    TipologiaObra: `busto`,
    Material: `Peça em bronze e pedestal de granito`,
    Descricao: `Homenagem ao primeiro pároco da Matriz Maronita Nossa Senhora do Líbano, erigido por uma iniciativa da comunidade
    libanesa do Rio de Janeiro.`,
    Execucao: true,
    DataInauguracao: `11/1997`,
    Zona: 'Norte',
    Bairro: 'Tijuca',
    PontoDeReferencia: 'R. Padre Elias Gorayeb',
    Latitude: `-22.925928`,
    Longitude: `-43.233995`,
    Lugar: 'Calçada',
    Fatos: [
        new Fato('', '', 'Propriedade', 'Pública', [], 'Rio de Janeiro'),
        new Fato('', '', 'Fundição/Atelier', 'Zani Fundição Artística e Metalúrgica Ltda', [], 'Rio de Janeiro'),
    ],
};

export const LuisGastaoDEscargolle_CurzioZani: Obra = {
    ID: 709,
    Artistas: [artistas.CurzioZani],
    Titulo: `Luis Gastão D'Escargolle`,
    Classificacao: 'perene',
    Categoria: 'personalidades',
    TipologiaObra: `busto`,
    Material: `Peça em bronze e pedestal de granito`,
    Descricao: `Busto foi realizado por seus ex-alunos amigos e admiradores, que colaborou durante muitos anos em revistas e jornais. A comissão do monumento recolheu os recursos para erguer o monumento através de um livro de adesão que ficou na Livraria Francisco Alves.`,
    Execucao: true,
    DataInauguracao: `01/1957`,
    Latitude: `-22.9396266`,
    Longitude: `-43.2485938`,
};

export const RubensPaiva_EdgarDuvivier: Obra = {
    ID: 712,
    Artistas: [artistas.EdgarDuvivier],
    Titulo: `Rubens Paiva`,
    Classificacao: 'perene',
    Categoria: 'personalidades',
    TipologiaObra: `busto`,
    Material: `Peça em bronze com pedestal de mármore`,
    Descricao: `O busto do Deputado Rubens Paiva foi instalado em frente à antiga sede do DOI-CODI na capital carioca, onde o político foi preso e torturado. Foi doado à cidade por iniciativa do Sindicato dos Engenheiros do Rio de Janeiro.`,
    Execucao: true,
    DataInauguracao: `09/2014`,
    Latitude: `-22.9240598`,
    Longitude: `-43.2365473`,
};

export const IsmaelSilva_OttoDumovich: Obra = {
    ID: 715,
    Artistas: [artistas.OttoDumovich],
    Titulo: `Ismael Silva`,
    Classificacao: 'perene',
    Categoria: 'personalidades',
    TipologiaObra: `Estátua`,
    Material: `Peça em bronze`,
    Descricao: `O monumento foi uma solicitação da Escola de Samba Estácio de Sá, à Prefeitura do Rio, para homenagear o fundador
    do bloco, que se tornaria o precursor das escolas de samba, a "Deixa Falar".`,
    Execucao: true,
    DataInauguracao: `09/2010`,
    Zona: 'Central',
    Bairro: 'Cidade Nova',
    PontoDeReferencia: 'Praça Compositor Ismael Silva',
    Latitude: `-22.9130206`,
    Longitude: `-43.2027153`,
    Fatos: [
        new Fato('', '', 'Propriedade', 'Pública', [], 'Rio de Janeiro'),
        new Fato('', '', 'Fundição/Atelier', 'Fundição Hammes Ltda - Itamar', [], 'Rio de Janeiro'),
    ],
};

export const AlvaroReis_JoasPereiradosPassos: Obra = {
    ID: 716,
    Artistas: [artistas.JoasPereiradosPassos],
    Titulo: `Álvaro Reis`,
    Classificacao: 'perene',
    Categoria: 'personalidades',
    TipologiaObra: `Estátua`,
    Material: `Peça em bronze`,
    Descricao: `O conjunto escultórico apresenta o Reverendo Presbiteriano com duas crianças próximas. O monumento foi idealizado
    pelo Reverendo Guilhermino Cunha, para homenagear o fundador do INPAR, uma instituição da obra social presbeteriana.
A menina e o menino estão no depósito desde maio de 2016 devido a uma tentativa de furto.`,
    Execucao: true,
    DataInauguracao: `12/2010`,
    Zona: 'Central',
    Bairro: 'Cidade NOva',
    PontoDeReferencia: 'R. Visconde Duprat e Afonso Cavalcanti',
    Latitude: `-22.9103604`,
    Longitude: `-43.2038316`,
    Fatos: [new Fato('', '', 'Propriedade', 'Pública', [], 'Rio de Janeiro')],
};

export const Guarda_corpodaAvenidaMaracanaI_TorresdeOliveira: Obra = {
    ID: 717,
    Artistas: [artistas.TorresdeOliveira],
    Titulo: `Guarda-corpo da Avenida Maracanã I`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Guarda-corpo`,
    Material: `Peças de tijolo com argamassa`,
    Descricao: `Construção com balaustrada, jardineiras laterias e poste nas extremidades de cada lado do Rio. A canalização do rio e a ponte foram obras para a comemoração do centenario da Independencia nacional.`,
    Execucao: true,
    DataInauguracao: `01/1922`,
    Latitude: ``,
    Longitude: ``,
};

export const Guarda_corpodaRuaHeitorBeltrao_Desconhecida: Obra = {
    ID: 718,
    Artistas: [artistas.Desconhecida],
    Titulo: `Guarda-corpo da Rua Heitor Beltrão`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Guarda-corpo`,
    Material: `Pedra e tijolo com argamassa`,
    Descricao: `Construção circular com caracteristica art decor na proteção do Rio Trapicheiro.`,
    Execucao: true,
    DataInauguracao: ``,
    Latitude: `-22.9181216`,
    Longitude: `-43.2200342`,
};

export const Guarda_corpodaAvenidaMaracanaII_Desconhecida: Obra = {
    ID: 719,
    Artistas: [artistas.Desconhecida],
    Titulo: `Guarda-corpo da Avenida Maracanã II`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Guarda-corpo`,
    Material: `Pedra e tijolo com argamassa`,
    Descricao: `Construção com balaustres e colunas nas laterais , servindo de proteção sobre o Rio Maracanã.`,
    Execucao: true,
    DataInauguracao: `01/1922`,
    Latitude: `-22.9152765`,
    Longitude: `-43.2289016`,
};

export const Guarda_corpodaAvenidaPaulodeFrontin_Desconhecida: Obra = {
    ID: 720,
    Artistas: [artistas.Desconhecida],
    Titulo: `Guarda-corpo da Avenida Paulo de Frontin`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Guarda-corpo`,
    Material: `Peças de tijolo com argamassa`,
    Descricao: `Construção com balaustre e colunas baixas para a proteção junto ao Rio Comprido. Foi inaugurado pelo Prefeito Paulo de Frontim.`,
    Execucao: true,
    DataInauguracao: `01/1909`,
    Latitude: `-22.9249777`,
    Longitude: `-43.2097325`,
};

export const OratoriodeNossaSenhoradaMedalhaMilagrosa_Desconhecida: Obra = {
    ID: 722,
    Artistas: [artistas.Desconhecida],
    Titulo: `Oratório  de  Nossa Senhora da Medalha Milagrosa`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Oratório`,
    Material: `Peça em concreto com imagem em resina`,
    Descricao: `Cobertura de metal protegendo o oratório com aimagem,sobre um pedestal de concreto revestido de mármore. Na face frontal têm-se em bronze dois medalhões, simbolo da Medalha Milagrosa`,
    Execucao: true,
    DataInauguracao: `05/1997`,
    Latitude: `-22.9163686`,
    Longitude: `-43.2125509`,
};

export const OBarco_PaulodeTarso: Obra = {
    ID: 723,
    Artistas: [artistas.PaulodeTarso],
    Titulo: `O Barco`,
    Classificacao: 'perene',
    Categoria: 'sublimidade',
    TipologiaObra: `Escultura`,
    Material: `Peça em argamassa armada policromada`,
    Descricao: `Escultura de um barco de pescador pintada na cor branca com detalhes em amarelo e azul,, dentro de um riacho,
    criando um ambiente ludico com outras peças, para utilização das crianças que frequentam a praça.
A peça foi executada a partir dos anos de 1970 do seculo XX até o ano de 2000.`,
    Execucao: true,
    DataInauguracao: `1970`,
    Zona: 'Norte',
    Bairro: 'Tijuca',
    PontoDeReferencia: 'R. Saboia Lima',
    Latitude: `-22.9329112`,
    Longitude: `-43.2339401`,
    Fatos: [new Fato('', '', 'Propriedade', 'Pública', [], 'Rio de Janeiro')],
};

export const ABaleiaeFilhote_PaulodeTarso: Obra = {
    ID: 724,
    Artistas: [artistas.PaulodeTarso],
    Titulo: `A Baleia e Filhote`,
    Classificacao: 'perene',
    Categoria: 'sublimidade',
    TipologiaObra: `Escultura`,
    Material: `Peça em argamassa armada policromada`,
    Descricao: `Escultura de uma baleia e seu filhote pintada na cor azul, dentro de um riacho criado um ambiente ludico com
    outras peças para utilização das crianças que frequentam a praça.
A peça foi executada a partir dos anos de 1970 do seculo XX até o ano de 2000.`,
    Execucao: true,
    DataInauguracao: `1970`,
    Zona: 'Norte',
    Bairro: 'Tijuca',
    PontoDeReferencia: 'R. Saboia Lima',
    Latitude: `-22.9329112`,
    Longitude: `-43.2339401`,
    Fatos: [new Fato('', '', 'Propriedade', 'Pública', [], 'Rio de Janeiro')],
};

export const OBeijaFlor_PaulodeTarso: Obra = {
    ID: 725,
    Artistas: [artistas.PaulodeTarso],
    Titulo: `O Beija Flor`,
    Classificacao: 'perene',
    Categoria: 'sublimidade',
    TipologiaObra: `Escultura`,
    Material: `Peça em argamassa armada policromada`,
    Descricao: `Escultura Naif - Pequena escultura pintada na cor vermelho azul e verde, fixado numa arvore, criado um ambiente ludico com outras
    peças para utilização das crianças que frequentam a praça.
A peça foi executada a partir dos anos de 1970 do seculo XX até o ano de 2000.`,
    Execucao: true,
    DataInauguracao: `1970`,
    Zona: 'Norte',
    Bairro: 'Tijuca',
    PontoDeReferencia: 'R. Saboia Lima',
    Latitude: `-22.9329112`,
    Longitude: `-43.2339401`,
    Fatos: [new Fato('', '', 'Propriedade', 'Pública', [], 'Rio de Janeiro')],
};

export const OBumbaMeuBoi_PaulodeTarso: Obra = {
    ID: 726,
    Artistas: [artistas.PaulodeTarso],
    Titulo: `O Bumba Meu Boi`,
    Classificacao: 'perene',
    Categoria: 'sublimidade',
    TipologiaObra: `Escultura`,
    Material: `Peça em argamassa armada policromada`,
    Descricao: `Escultura Naif -Escultura de uma boi pintado na cores azul, vermelho, branco e amarelo, criado um ambiente ludico com outras
    peças para utilização das crianças que frequentam a praça.
A peça foi executada a partir dos anos de 1970 do seculo XX até o ano de 2000.`,
    Execucao: true,
    DataInauguracao: `1970`,
    Zona: 'Norte',
    Bairro: 'Tijuca',
    PontoDeReferencia: 'R. Saboia Lima',
    Latitude: `-22.9329112`,
    Longitude: `-43.2339401`,
    Fatos: [new Fato('', '', 'Propriedade', 'Pública', [], 'Rio de Janeiro')],
};

export const OBurrinho_PaulodeTarso: Obra = {
    ID: 727,
    Artistas: [artistas.PaulodeTarso],
    Titulo: `O Burrinho`,
    Classificacao: 'perene',
    Categoria: 'sublimidade',
    TipologiaObra: `Escultura`,
    Material: `Peça em argamassa armada policromada`,
    Descricao: `Escultura Naif de um filhote de burro pintado na cor marrom, dentro de um ambiente ludico com outras peças, para
    utilização das crianças que frequentam a praça.
A peça foi executada a partir dos anos de 1970 do seculo XX até o ano de 2000.`,
    Execucao: true,
    DataInauguracao: `1970`,
    Zona: 'Norte',
    Bairro: 'Tijuca',
    PontoDeReferencia: 'R. Saboia Lima',
    Latitude: `-22.9329112`,
    Longitude: `-43.2339401`,
    Fatos: [new Fato('', '', 'Propriedade', 'Pública', [], 'Rio de Janeiro')],
};

export const OCaju_PaulodeTarso: Obra = {
    ID: 728,
    Artistas: [artistas.PaulodeTarso],
    Titulo: `O Caju`,
    Classificacao: 'perene',
    Categoria: 'sublimidade',
    TipologiaObra: `Escultura`,
    Material: `Peça em argamassa armada policromada`,
    Descricao: `Escultura Naif de um caju pintada na cor amarelo e azul, criando um ambiente ludico com outras peças, para utilização
    das crianças que frequentam a praça.
A peça foi executada a partir dos anos de 1970 do seculo XX até o ano de 2000.`,
    Execucao: true,
    DataInauguracao: `1970`,
    Zona: 'Norte',
    Bairro: 'Tijuca',
    PontoDeReferencia: 'R. Saboia Lima',
    Latitude: `-22.9329112`,
    Longitude: `-43.2339401`,
    Fatos: [new Fato('', '', 'Propriedade', 'Pública', [], 'Rio de Janeiro')],
};

export const OCanguru_PaulodeTarso: Obra = {
    ID: 729,
    Artistas: [artistas.PaulodeTarso],
    Titulo: `O Canguru`,
    Classificacao: 'perene',
    Categoria: 'sublimidade',
    TipologiaObra: `Escultura`,
    Material: `Peça em argamassa armada policromada`,
    Descricao: `Escultura Naif de um canguru pintado na cor cinza, criando um ambiente ludico com outras peças, para utilização das
    crianças que frequentam a praça.
A peça foi executada a partir dos anos de 1970 do seculo XX até o ano de 2000.`,
    Execucao: true,
    DataInauguracao: `1970`,
    Zona: 'Norte',
    Bairro: 'Tijuca',
    PontoDeReferencia: 'R. Saboia Lima',
    Latitude: `-22.9329112`,
    Longitude: `-43.2339401`,
    Fatos: [new Fato('', '', 'Propriedade', 'Pública', [], 'Rio de Janeiro')],
};

export const OCamelo_PaulodeTarso: Obra = {
    ID: 730,
    Artistas: [artistas.PaulodeTarso],
    Titulo: `O Camelo`,
    Classificacao: 'perene',
    Categoria: 'sublimidade',
    TipologiaObra: `Escultura`,
    Material: `Peça em argamassa armada policromada`,
    Descricao: `Escultura de um grande camelo pintado na cor branca com detalhes multicoloridos num ambiente ludico, com outras peças para utilização das crianças que frequentam a praça.
A peça foi executada a partir dos anos de 1970 do seculo XX até o ano de 2000.`,
    Execucao: true,
    DataInauguracao: `1970`,
    Zona: 'Norte',
    Bairro: 'Tijuca',
    PontoDeReferencia: 'R. Saboia Lima',
    Latitude: `-22.9329112`,
    Longitude: `-43.2339401`,
    Fatos: [new Fato('', '', 'Propriedade', 'Pública', [], 'Rio de Janeiro')],
};

export const OCaocomBola_PaulodeTarso: Obra = {
    ID: 731,
    Artistas: [artistas.PaulodeTarso],
    Titulo: `O Cão com Bola`,
    Classificacao: 'perene',
    Categoria: 'sublimidade',
    TipologiaObra: `Escultura`,
    Material: `Peça em argamassa armada policromada`,
    Descricao: `Escultura de cão proximo a uma bola pintado na cor branco e azul, criando um ambiente ludico, com outras peças
    para utilização das crianças que frequentam a praça.
A peça foi executada a partir dos anos de 1970 do seculo XX até o ano de 2000.`,
    Execucao: true,
    DataInauguracao: `1970`,
    Zona: 'Norte',
    Bairro: 'Tijuca',
    PontoDeReferencia: 'R. Saboia Lima',
    Latitude: `-22.9329112`,
    Longitude: `-43.2339401`,
    Fatos: [new Fato('', '', 'Propriedade', 'Pública', [], 'Rio de Janeiro')],
};

export const OCaoChines_PaulodeTarso: Obra = {
    ID: 732,
    Artistas: [artistas.PaulodeTarso],
    Titulo: `O Cão Chinês`,
    Classificacao: 'perene',
    Categoria: 'sublimidade',
    TipologiaObra: `Escultura`,
    Material: `Peça em argamassa armada policromada`,
    Descricao: `Escultura de um cão pintado na cor azul com detalhes amarelo e azul, criando um ambiente ludico, com outras peças
    para utilização das crianças que frequentam a praça.
A peça foi executada a partir dos anos de 1970 do seculo XX até o ano de 2000.`,
    Execucao: true,
    DataInauguracao: `1970`,
    Zona: 'Norte',
    Bairro: 'Tijuca',
    PontoDeReferencia: 'R. Saboia Lima',
    Latitude: `-22.9329112`,
    Longitude: `-43.2339401`,
    Fatos: [new Fato('', '', 'Propriedade', 'Pública', [], 'Rio de Janeiro')],
};

export const OCaoMantoNegro_PaulodeTarso: Obra = {
    ID: 733,
    Artistas: [artistas.PaulodeTarso],
    Titulo: `O Cão Manto Negro`,
    Classificacao: 'perene',
    Categoria: 'sublimidade',
    TipologiaObra: `Escultura`,
    Material: `Peça em argamassa armada policromada`,
    Descricao: `Escultura de um cão pintado na cor preto com detalhes branco, criando um ambiente ludico, com outras peças
    para utilização das crianças que frequentam a praça.
A peça foi executada a partir dos anos de 1970 do seculo XX até o ano de 2000.`,
    Execucao: true,
    DataInauguracao: `1970`,
    Zona: 'Norte',
    Bairro: 'Tijuca',
    PontoDeReferencia: 'R. Saboia Lima',
    Latitude: `-22.9329112`,
    Longitude: `-43.2339401`,
    Fatos: [new Fato('', '', 'Propriedade', 'Pública', [], 'Rio de Janeiro')],
};

export const OCaoPintado_PaulodeTarso: Obra = {
    ID: 734,
    Artistas: [artistas.PaulodeTarso],
    Titulo: `O Cão Pintado`,
    Classificacao: 'perene',
    Categoria: 'sublimidade',
    TipologiaObra: `Escultura`,
    Material: `Peça em argamassa armada policromada`,
    Descricao: `Escultura de um cão pintado na cor branco com detalhes na cor preta, criando um ambiente ludico, com outras peças para utilização das crianças que frequentam a praça.
A peça foi executada a partir dos anos de 1970 do seculo XX até o ano de 2000.`,
    Execucao: true,
    DataInauguracao: `1970`,
    Zona: 'Norte',
    Bairro: 'Tijuca',
    PontoDeReferencia: 'R. Saboia Lima',
    Latitude: `-22.9329112`,
    Longitude: `-43.2339401`,
    Fatos: [new Fato('', '', 'Propriedade', 'Pública', [], 'Rio de Janeiro')],
};

export const OCavaloBranco_PaulodeTarso: Obra = {
    ID: 735,
    Artistas: [artistas.PaulodeTarso],
    Titulo: `O Cavalo Branco`,
    Classificacao: 'perene',
    Categoria: 'sublimidade',
    TipologiaObra: `Escultura`,
    Material: `Peça em argamassa armada policromada`,
    Descricao: `Escultura de um cavalo pintado na cor branca, criando um ambiente ludico com outras peças, para utilização das crianças que frequentam a praça.
A peça foi executada a partir dos anos de 1970 do seculo XX até o ano de 2000.`,
    Execucao: true,
    DataInauguracao: `1970`,
    Zona: 'Norte',
    Bairro: 'Tijuca',
    PontoDeReferencia: 'R. Saboia Lima',
    Latitude: `-22.9329112`,
    Longitude: `-43.2339401`,
    Fatos: [new Fato('', '', 'Propriedade', 'Pública', [], 'Rio de Janeiro')],
};

export const ACobraeoPorco_PaulodeTarso: Obra = {
    ID: 736,
    Artistas: [artistas.PaulodeTarso],
    Titulo: `A Cobra e o Porco`,
    Classificacao: 'perene',
    Categoria: 'sublimidade',
    TipologiaObra: `Escultura`,
    Material: `Peça em argamassa armada policromada`,
    Descricao: `Escultura de uma cobra e um porco fixado em umtronco seco de arvore, pintado na cor marrom e verde escuro, criando um ambiente ludico, com outras peças para utilização das crianças que frequentam a praça.
A peça foi executada a partir dos anos de 1970 do seculo XX até o ano de 2000.`,
    Execucao: true,
    DataInauguracao: `1970`,
    Zona: 'Norte',
    Bairro: 'Tijuca',
    PontoDeReferencia: 'R. Saboia Lima',
    Latitude: `-22.9329112`,
    Longitude: `-43.2339401`,
    Fatos: [new Fato('', '', 'Propriedade', 'Pública', [], 'Rio de Janeiro')],
};

export const ACobraeoSapo_PaulodeTarso: Obra = {
    ID: 737,
    Artistas: [artistas.PaulodeTarso],
    Titulo: `A Cobra e o Sapo`,
    Classificacao: 'perene',
    Categoria: 'sublimidade',
    TipologiaObra: `Escultura`,
    Material: `Peça em argamassa armada policromada`,
    Descricao: `Escultura de um pequeno sapo e uma cobra pintada na cores verde e vermelho, criando um ambiente ludico com outras peças, para utilização das crianças que frequentam a praça.
A peça foi executada a partir dos anos de 1970 do seculo XX até o ano de 2000.`,
    Execucao: true,
    DataInauguracao: `1970`,
    Zona: 'Norte',
    Bairro: 'Tijuca',
    PontoDeReferencia: 'R. Saboia Lima',
    Latitude: `-22.9329112`,
    Longitude: `-43.2339401`,
    Fatos: [new Fato('', '', 'Propriedade', 'Pública', [], 'Rio de Janeiro')],
};

export const OMacaco_PaulodeTarso: Obra = {
    ID: 738,
    Artistas: [artistas.PaulodeTarso],
    Titulo: `O Macaco`,
    Classificacao: 'perene',
    Categoria: 'sublimidade',
    TipologiaObra: `Escultura`,
    Material: `Peça em argamassa armada policromada`,
    Descricao: `Escultura de um macaco, pintado na cor marrom agarrado no tronco da arvore, criando um ambiente ludico, com outras peças para utilização das crianças que frequentam a praça.
A peça foi executada a partir dos anos de 1970 do seculo XX até o ano de 2000.`,
    Execucao: true,
    DataInauguracao: `1970`,
    Zona: 'Norte',
    Bairro: 'Tijuca',
    PontoDeReferencia: 'R. Saboia Lima',
    Latitude: `-22.9329112`,
    Longitude: `-43.2339401`,
    Fatos: [new Fato('', '', 'Propriedade', 'Pública', [], 'Rio de Janeiro')],
};

export const ODuende_PaulodeTarso: Obra = {
    ID: 740,
    Artistas: [artistas.PaulodeTarso],
    Titulo: `O Duende`,
    Classificacao: 'perene',
    Categoria: 'sublimidade',
    TipologiaObra: `Escultura`,
    Material: `Peça em argamassa armada policromada`,
    Descricao: `Escultura de um duende, pintado nas cores vermelha, azul e amarelo, criando um ambiente ludico, com outras peças para utilização das crianças que frequentam a praça.
A peça foi executada a partir dos anos de 1970 do seculo XX até o ano de 2000.`,
    Execucao: true,
    DataInauguracao: `1970`,
    Zona: 'Norte',
    Bairro: 'Tijuca',
    PontoDeReferencia: 'R. Saboia Lima',
    Latitude: `-22.9329112`,
    Longitude: `-43.2339401`,
    Fatos: [new Fato('', '', 'Propriedade', 'Pública', [], 'Rio de Janeiro')],
};

export const ODuendecomAcordeon_PaulodeTarso: Obra = {
    ID: 741,
    Artistas: [artistas.PaulodeTarso],
    Titulo: `O Duende com Acordeon`,
    Classificacao: 'perene',
    Categoria: 'sublimidade',
    TipologiaObra: `Escultura`,
    Material: `Peça em argamassa armada policromada`,
    Descricao: `Escultura de um duende com um acordeon nas mãos, pintado nas cores vermelho, amarelo e azul, criando um ambiente ludico, com outras peças para utilização das crianças que frequentam a praça.
A peça foi executada a partir dos anos de 1970 do seculo XX até o ano de 2000.`,
    Execucao: true,
    DataInauguracao: `1970`,
    Zona: 'Norte',
    Bairro: 'Tijuca',
    PontoDeReferencia: 'R. Saboia Lima',
    Latitude: `-22.9329112`,
    Longitude: `-43.2339401`,
    Fatos: [new Fato('', '', 'Propriedade', 'Pública', [], 'Rio de Janeiro')],
};

export const OElefante_PaulodeTarso: Obra = {
    ID: 742,
    Artistas: [artistas.PaulodeTarso],
    Titulo: `O Elefante`,
    Classificacao: 'perene',
    Categoria: 'sublimidade',
    TipologiaObra: `Escultura`,
    Material: `Peça em argamassa armada policromada`,
    Descricao: `Escultura de um elefante, pintado na cor branca com detalhes na cor azul e vermelho, criando um ambiente ludico, com outras peças para utilização das crianças que frequentam a praça.
A peça foi executada a partir dos anos de 1970 do seculo XX até o ano de 2000.`,
    Execucao: true,
    DataInauguracao: `1970`,
    Zona: 'Norte',
    Bairro: 'Tijuca',
    PontoDeReferencia: 'R. Saboia Lima',
    Latitude: `-22.9329112`,
    Longitude: `-43.2339401`,
    Fatos: [new Fato('', '', 'Propriedade', 'Pública', [], 'Rio de Janeiro')],
};

export const EsculturaNaif_OElefante_PaulodeTarso: Obra = {
    ID: 742,
    Artistas: [artistas.PaulodeTarso],
    Titulo: `Escultura Naif - O Elefante`,
    Classificacao: 'perene',
    Categoria: 'sublimidade',
    TipologiaObra: `Escultura`,
    Material: `Peça em argamassa armada policromada`,
    Descricao: `Escultura de um elefante, pintado na cor branca com detalhes na cor azul e vermelho, criando um ambiente ludico, com outras peças para utilização das crianças que frequentam a praça.
A peça foi executada a partir dos anos de 1970 do seculo XX até o ano de 2000.`,
    Execucao: true,
    DataInauguracao: ``,
    Latitude: `-22.9329112`,
    Longitude: `-43.2339401`,
};

export const OElefanteFilhote_PaulodeTarso: Obra = {
    ID: 743,
    Artistas: [artistas.PaulodeTarso],
    Titulo: `O Elefante Filhote`,
    Classificacao: 'perene',
    Categoria: 'sublimidade',
    TipologiaObra: `Escultura`,
    Material: `Peça em argamassa armada policromada`,
    Descricao: `Escultura de um pequeno elefante pintado na cor rosa, criando um ambiente ludico, com outras peças para utilização das crianças que frequentam a praça.
A peça foi executada a partir dos anos de 1970 do seculo XX até o ano de 2000.`,
    Execucao: true,
    DataInauguracao: `1970`,
    Zona: 'Norte',
    Bairro: 'Tijuca',
    PontoDeReferencia: 'R. Saboia Lima',
    Latitude: `-22.9329112`,
    Longitude: `-43.2339401`,
    Fatos: [new Fato('', '', 'Propriedade', 'Pública', [], 'Rio de Janeiro')],
};

export const AEmilia_PaulodeTarso: Obra = {
    ID: 744,
    Artistas: [artistas.PaulodeTarso],
    Titulo: `A Emilia`,
    Classificacao: 'perene',
    Categoria: 'sublimidade',
    TipologiaObra: `Escultura`,
    Material: `Peça em argamassa armada policromada`,
    Descricao: `Escultura de um pequeno criança pintada nas cores vermelha, azul e amarelo, criando um ambiente ludico, com outras peças para utilização das crianças que frequentam a praça.
A peça foi executada a partir dos anos de 1970 do seculo XX até o ano de 2000.`,
    Execucao: true,
    DataInauguracao: `1970`,
    Zona: 'Norte',
    Bairro: 'Tijuca',
    PontoDeReferencia: 'R. Saboia Lima',
    Latitude: `-22.9329112`,
    Longitude: `-43.2339401`,
    Fatos: [new Fato('', '', 'Propriedade', 'Pública', [], 'Rio de Janeiro')],
};

export const OEsquilo_PaulodeTarso: Obra = {
    ID: 745,
    Artistas: [artistas.PaulodeTarso],
    Titulo: `O Esquilo`,
    Classificacao: 'perene',
    Categoria: 'sublimidade',
    TipologiaObra: `Escultura`,
    Material: `Peça em argamassa armada policromada`,
    Descricao: `Escultura de um pequeno esquilo pintado na cor amaela apoiado numa balaustrada, criando um ambiente ludico, com outras peças para utilização das crianças que frequentam a praça.
A peça foi executada a partir dos anos de 1970 do seculo XX até o ano de 2000.`,
    Execucao: true,
    DataInauguracao: `1970`,
    Zona: 'Norte',
    Bairro: 'Tijuca',
    PontoDeReferencia: 'R. Saboia Lima',
    Latitude: `-22.9329112`,
    Longitude: `-43.2339401`,
    Fatos: [new Fato('', '', 'Propriedade', 'Pública', [], 'Rio de Janeiro')],
};

export const AFoca_PaulodeTarso: Obra = {
    ID: 746,
    Artistas: [artistas.PaulodeTarso],
    Titulo: `A Foca`,
    Classificacao: 'perene',
    Categoria: 'sublimidade',
    TipologiaObra: `Escultura`,
    Material: `Peças em metal com policarbonato`,
    Descricao: `Escultura de uma pequena foca pintado na cor azul com detalhe vermelho, criando um ambiente ludico, com outras peças para utilização das crianças que frequentam a praça.
A peça foi executada a partir dos anos de 1970 do seculo XX até o ano de 2000.`,
    Execucao: true,
    DataInauguracao: `1970`,
    Zona: 'Norte',
    Bairro: 'Tijuca',
    PontoDeReferencia: 'R. Saboia Lima',
    Latitude: `-22.9329112`,
    Longitude: `-43.2339401`,
    Fatos: [new Fato('', '', 'Propriedade', 'Pública', [], 'Rio de Janeiro')],
};

export const AGalinha_PaulodeTarso: Obra = {
    ID: 747,
    Artistas: [artistas.PaulodeTarso],
    Titulo: `A Galinha`,
    Classificacao: 'perene',
    Categoria: 'sublimidade',
    TipologiaObra: `Escultura`,
    Material: `Peça em argamassa armada policromada`,
    Descricao: `Escultura de uma galinha pintada em diversas cores, criando um ambiente ludico, com outras peças para utilização das crianças que frequentam a praça.
A peça foi executada a partir dos anos de 1970 do seculo XX até o ano de 2000`,
    Execucao: true,
    DataInauguracao: `1970`,
    Zona: 'Norte',
    Bairro: 'Tijuca',
    PontoDeReferencia: 'R. Saboia Lima',
    Latitude: `-22.9329112`,
    Longitude: `-43.2339401`,
    Fatos: [new Fato('', '', 'Propriedade', 'Pública', [], 'Rio de Janeiro')],
};

export const OGalo_PaulodeTarso: Obra = {
    ID: 748,
    Artistas: [artistas.PaulodeTarso],
    Titulo: `O Galo`,
    Classificacao: 'perene',
    Categoria: 'sublimidade',
    TipologiaObra: `Escultura`,
    Material: `Peça em argamassa armada policromada`,
    Descricao: `Escultura de um galo multicolorido, criando um ambiente ludico, com outras peças para utilização das crianças que frequentam a praça.
A peça foi executada a partir dos anos de 1970 do seculo XX até o ano de 2000.`,
    Execucao: true,
    DataInauguracao: `1970`,
    Zona: 'Norte',
    Bairro: 'Tijuca',
    PontoDeReferencia: 'R. Saboia Lima',
    Latitude: `-22.9329112`,
    Longitude: `-43.2339401`,
    Fatos: [new Fato('', '', 'Propriedade', 'Pública', [], 'Rio de Janeiro')],
};

export const OGanso_PaulodeTarso: Obra = {
    ID: 749,
    Artistas: [artistas.PaulodeTarso],
    Titulo: `O Ganso`,
    Classificacao: 'perene',
    Categoria: 'sublimidade',
    TipologiaObra: `Escultura`,
    Material: `Peça em argamassa armada policromada`,
    Descricao: `Escultura de um ganso pintada na cor branca, criando um ambiente ludico, com outras peças para utilização das crianças que frequentam a praça.
A peça foi executada a partir dos anos de 1970 do seculo XX até o ano de 2000.`,
    Execucao: true,
    DataInauguracao: `1970`,
    Zona: 'Norte',
    Bairro: 'Tijuca',
    PontoDeReferencia: 'R. Saboia Lima',
    Latitude: `-22.9329112`,
    Longitude: `-43.2339401`,
    Fatos: [new Fato('', '', 'Propriedade', 'Pública', [], 'Rio de Janeiro')],
};

export const OGato_PaulodeTarso: Obra = {
    ID: 750,
    Artistas: [artistas.PaulodeTarso],
    Titulo: `O Gato`,
    Classificacao: 'perene',
    Categoria: 'sublimidade',
    TipologiaObra: `Escultura`,
    Material: `Peça em argamassa armada policromada`,
    Descricao: `Escultura de um pequeno gato pintado na cor branca, criando um ambiente ludico, com outras peças para utilização das crianças que frequentam a praça.
A peça foi executada a partir dos anos de 1970 do seculo XX até o ano de 2000.`,
    Execucao: true,
    DataInauguracao: `1970`,
    Zona: 'Norte',
    Bairro: 'Tijuca',
    PontoDeReferencia: 'R. Saboia Lima',
    Latitude: `-22.9329112`,
    Longitude: `-43.2339401`,
    Fatos: [new Fato('', '', 'Propriedade', 'Pública', [], 'Rio de Janeiro')],
};

export const AGirafa_PaulodeTarso: Obra = {
    ID: 751,
    Artistas: [artistas.PaulodeTarso],
    Titulo: `A Girafa`,
    Classificacao: 'perene',
    Categoria: 'sublimidade',
    TipologiaObra: `Escultura`,
    Material: `Peça em argamassa armada policromada`,
    Descricao: `Escultura de girafa pintada em diversas cores, criando um ambiente ludico, com outras peças para utilização das crianças que frequentam a praça.
A peça foi executada a partir dos anos de 1970 do seculo XX até o ano de 2000.`,
    Execucao: true,
    DataInauguracao: `1970`,
    Zona: 'Norte',
    Bairro: 'Tijuca',
    PontoDeReferencia: 'R. Saboia Lima',
    Latitude: `-22.9329112`,
    Longitude: `-43.2339401`,
    Fatos: [new Fato('', '', 'Propriedade', 'Pública', [], 'Rio de Janeiro')],
};

export const OHipopotamo_PaulodeTarso: Obra = {
    ID: 752,
    Artistas: [artistas.PaulodeTarso],
    Titulo: `O Hipopótamo`,
    Classificacao: 'perene',
    Categoria: 'sublimidade',
    TipologiaObra: `Escultura`,
    Material: `Peça em argamassa armada policromada`,
    Descricao: `Escultura de um hipopotamo pintado na cor azul, criando um ambiente ludico, com outras peças para utilização das crianças que frequentam a praça.
A peça foi executada a partir dos anos de 1970 do seculo XX até o ano de 2000.`,
    Execucao: true,
    DataInauguracao: `1970`,
    Zona: 'Norte',
    Bairro: 'Tijuca',
    PontoDeReferencia: 'R. Saboia Lima',
    Latitude: `-22.9329112`,
    Longitude: `-43.2339401`,
    Fatos: [new Fato('', '', 'Propriedade', 'Pública', [], 'Rio de Janeiro')],
};

export const OIndio_PaulodeTarso: Obra = {
    ID: 753,
    Artistas: [artistas.PaulodeTarso],
    Titulo: `O Indio`,
    Classificacao: 'perene',
    Categoria: 'sublimidade',
    TipologiaObra: `Escultura`,
    Material: `Peça em argamassa armada policromada`,
    Descricao: `Escultura de um indio com pintado em diversas cores, criando um ambiente ludico, com outras peças para utilização das crianças que frequentam a praça.
A peça foi executada a partir dos anos de 1970 do seculo XX até o ano de 2000.`,
    Execucao: true,
    DataInauguracao: `1970`,
    Zona: 'Norte',
    Bairro: 'Tijuca',
    PontoDeReferencia: 'R. Saboia Lima',
    Latitude: `-22.9329112`,
    Longitude: `-43.2339401`,
    Fatos: [new Fato('', '', 'Propriedade', 'Pública', [], 'Rio de Janeiro')],
};

export const OJacareI_PaulodeTarso: Obra = {
    ID: 754,
    Artistas: [artistas.PaulodeTarso],
    Titulo: `O Jacaré I`,
    Classificacao: 'perene',
    Categoria: 'sublimidade',
    TipologiaObra: `Escultura`,
    Material: `Peça em argamassa armada policromada`,
    Descricao: `Escultura de um jacare pintado na cor verde, criando um ambiente ludico, com outras peças para utilização das crianças que frequentam a praça.
A peça foi executada a partir dos anos de 1970 do seculo XX até o ano de 2000.`,
    Execucao: true,
    DataInauguracao: `1970`,
    Zona: 'Norte',
    Bairro: 'Tijuca',
    PontoDeReferencia: 'R. Saboia Lima',
    Latitude: `-22.9329112`,
    Longitude: `-43.2339401`,
    Fatos: [new Fato('', '', 'Propriedade', 'Pública', [], 'Rio de Janeiro')],
};

export const JacareII_PaulodeTarso: Obra = {
    ID: 755,
    Artistas: [artistas.PaulodeTarso],
    Titulo: `Jacaré II`,
    Classificacao: 'perene',
    Categoria: 'sublimidade',
    TipologiaObra: `Escultura`,
    Material: `Peça em argamassa armada policromada`,
    Descricao: `Escultura de um jacare em tamanho natural pintado na cor verde, criando um ambiente ludico, com outras peças para utilização das crianças que frequentam a praça.
A peça foi executada a partir dos anos de 1970 do seculo XX até o ano de 2000.`,
    Execucao: true,
    DataInauguracao: `1970`,
    Zona: 'Norte',
    Bairro: 'Tijuca',
    PontoDeReferencia: 'R. Saboia Lima',
    Latitude: `-22.9329112`,
    Longitude: `-43.2339401`,
    Fatos: [new Fato('', '', 'Propriedade', 'Pública', [], 'Rio de Janeiro')],
};

export const OJogadorBrasileiro_PaulodeTarso: Obra = {
    ID: 756,
    Artistas: [artistas.PaulodeTarso],
    Titulo: `O Jogador Brasileiro`,
    Classificacao: 'perene',
    Categoria: 'sublimidade',
    TipologiaObra: `Escultura`,
    Material: `Peça em argamassa armada policromada`,
    Descricao: `Escultura de um jogador pintado na cor da roupa de seleção de futebol, criando um ambiente ludico, com outras peças para utilização das crianças que frequentam a praça.
A peça foi executada a partir dos anos de 1970 do seculo XX até o ano de 2000.`,
    Execucao: true,
    DataInauguracao: `1970`,
    Zona: 'Norte',
    Bairro: 'Tijuca',
    PontoDeReferencia: 'R. Saboia Lima',
    Latitude: `-22.9329112`,
    Longitude: `-43.2339401`,
    Fatos: [new Fato('', '', 'Propriedade', 'Pública', [], 'Rio de Janeiro')],
};

export const OLeao_PaulodeTarso: Obra = {
    ID: 757,
    Artistas: [artistas.PaulodeTarso],
    Titulo: `O Leão`,
    Classificacao: 'perene',
    Categoria: 'sublimidade',
    TipologiaObra: `Escultura`,
    Material: `Peça em argamassa armada policromada`,
    Descricao: `Escultura de um leão pintado na cor ocre, criando um ambiente ludico, com outras peças para utilização das crianças que frequentam a praça.
A peça foi executada a partir dos anos de 1970 do seculo XX até o ano de 2000.`,
    Execucao: true,
    DataInauguracao: `1970`,
    Zona: 'Norte',
    Bairro: 'Tijuca',
    PontoDeReferencia: 'R. Saboia Lima',
    Latitude: `-22.9329112`,
    Longitude: `-43.2339401`,
    Fatos: [new Fato('', '', 'Propriedade', 'Pública', [], 'Rio de Janeiro')],
};

export const Lontra_PaulodeTarso: Obra = {
    ID: 758,
    Artistas: [artistas.PaulodeTarso],
    Titulo: `A Lontra`,
    Classificacao: 'perene',
    Categoria: 'sublimidade',
    TipologiaObra: `Escultura`,
    Material: `Peça em argamassa armada policromada`,
    Descricao: `Escultura de uma lontra pintado na cor verde claro, criando um ambiente ludico, com outras peças para utilização das crianças que frequentam a praça.
A peça foi executada a partir dos anos de 1970 do seculo XX até o ano de 2000.`,
    Execucao: true,
    DataInauguracao: `1970`,
    Zona: 'Norte',
    Bairro: 'Tijuca',
    PontoDeReferencia: 'R. Saboia Lima',
    Latitude: `-22.9329112`,
    Longitude: `-43.2339401`,
    Fatos: [new Fato('', '', 'Propriedade', 'Pública', [], 'Rio de Janeiro')],
};

export const MaeeFilhoteDinossauro_PaulodeTarso: Obra = {
    ID: 759,
    Artistas: [artistas.PaulodeTarso],
    Titulo: `Mãe e Filhote Dinossauro`,
    Classificacao: 'perene',
    Categoria: 'sublimidade',
    TipologiaObra: `Escultura`,
    Material: `Peça em argamassa armada policromada`,
    Descricao: `Escultura de uma mãe dinossauro e seu filhote pintados na cor verde claro com detalhe vermelho, criando um ambiente ludico, com outras peças para utilização das crianças que frequentam a praça.
A peça foi executada a partir dos anos de 1970 do seculo XX até o ano de 2000.`,
    Execucao: true,
    DataInauguracao: `1970`,
    Zona: 'Norte',
    Bairro: 'Tijuca',
    PontoDeReferencia: 'R. Saboia Lima',
    Latitude: `-22.9329112`,
    Longitude: `-43.2339401`,
    Fatos: [new Fato('', '', 'Propriedade', 'Pública', [], 'Rio de Janeiro')],
};

export const OPapagaio_PaulodeTarso: Obra = {
    ID: 760,
    Artistas: [artistas.PaulodeTarso],
    Titulo: `O Papagaio`,
    Classificacao: 'perene',
    Categoria: 'sublimidade',
    TipologiaObra: `Escultura`,
    Material: `Peça em argamassa armada policromada`,
    Descricao: `Escultura de um papagaio pintado, criando um ambiente lúdico, com outras peças para utilização das crianças que frequentam a praça.
A peça foi executada a partir dos anos de 1970 do seculo XX até o ano de 2000.`,
    Execucao: true,
    DataInauguracao: `1970`,
    Zona: 'Norte',
    Bairro: 'Tijuca',
    PontoDeReferencia: 'R. Saboia Lima',
    Latitude: `-22.9329112`,
    Longitude: `-43.2339401`,
    Fatos: [new Fato('', '', 'Propriedade', 'Pública', [], 'Rio de Janeiro')],
};

export const OsPatinhos_PaulodeTarso: Obra = {
    ID: 761,
    Artistas: [artistas.PaulodeTarso],
    Titulo: `Os Patinhos`,
    Classificacao: 'perene',
    Categoria: 'sublimidade',
    TipologiaObra: `Escultura`,
    Material: `Peça em argamassa armada policromada`,
    Descricao: `Escultura de tres patinhos pintados na cores branca e amarela, criando um ambiente ludico, com outras peças para utilização das crianças que frequentam a praça.
A peça foi executada a partir dos anos de 1970 do seculo XX até o ano de 2000.`,
    Execucao: true,
    DataInauguracao: `1970`,
    Zona: 'Norte',
    Bairro: 'Tijuca',
    PontoDeReferencia: 'R. Saboia Lima',
    Latitude: `-22.9329112`,
    Longitude: `-43.2339401`,
    Fatos: [new Fato('', '', 'Propriedade', 'Pública', [], 'Rio de Janeiro')],
};

export const OPavao_PaulodeTarso: Obra = {
    ID: 762,
    Artistas: [artistas.PaulodeTarso],
    Titulo: `O Pavão`,
    Classificacao: 'perene',
    Categoria: 'sublimidade',
    TipologiaObra: `Escultura`,
    Material: `Peça em argamassa armada policromada`,
    Descricao: `Escultura de pavão pintado em diversas cores, criando um ambiente ludico, com outras peças para utilização das crianças que frequentam a praça.
A peça foi executada a partir dos anos de 1970 do seculo XX até o ano de 2000.`,
    Execucao: true,
    DataInauguracao: `1970`,
    Zona: 'Norte',
    Bairro: 'Tijuca',
    PontoDeReferencia: 'R. Saboia Lima',
    Latitude: `-22.9329112`,
    Longitude: `-43.2339401`,
    Fatos: [new Fato('', '', 'Propriedade', 'Pública', [], 'Rio de Janeiro')],
};

export const OPinguim_PaulodeTarso: Obra = {
    ID: 763,
    Artistas: [artistas.PaulodeTarso],
    Titulo: `O Pinguim`,
    Classificacao: 'perene',
    Categoria: 'sublimidade',
    TipologiaObra: `Escultura`,
    Material: `Peça em argamassa armada policromada`,
    Descricao: `Escultura de um pinguim próximo a uma cabeça de foca ambos pintados nas cores cinza e branco, criando um ambiente ludico, com outras peças para utilização das crianças que frequentam a praça.
A peça foi executada a partir dos anos de 1970 do seculo XX até o ano de 2000.`,
    Execucao: true,
    DataInauguracao: `1970`,
    Zona: 'Norte',
    Bairro: 'Tijuca',
    PontoDeReferencia: 'R. Saboia Lima',
    Latitude: `-22.9329112`,
    Longitude: `-43.2339401`,
    Fatos: [new Fato('', '', 'Propriedade', 'Pública', [], 'Rio de Janeiro')],
};

export const APiramide_PaulodeTarso: Obra = {
    ID: 764,
    Artistas: [artistas.PaulodeTarso],
    Titulo: `A Pirâmide`,
    Classificacao: 'perene',
    Categoria: 'sublimidade',
    TipologiaObra: `Escultura`,
    Material: `Peça em argamassa armada policromada`,
    Descricao: `Escultura de uma pequena piramide, pintado de cinza, criando um ambiente ludico, com outras peças para utilização das crianças que frequentam a praça.
A peça foi executada a partir dos anos de 1970 do seculo XX até o ano de 2000.`,
    Execucao: true,
    DataInauguracao: `1970`,
    Zona: 'Norte',
    Bairro: 'Tijuca',
    PontoDeReferencia: 'R. Saboia Lima',
    Latitude: `-22.9329112`,
    Longitude: `-43.2339401`,
    Fatos: [new Fato('', '', 'Propriedade', 'Pública', [], 'Rio de Janeiro')],
};

export const OPolvo_PaulodeTarso: Obra = {
    ID: 765,
    Artistas: [artistas.PaulodeTarso],
    Titulo: `O Polvo`,
    Classificacao: 'perene',
    Categoria: 'sublimidade',
    TipologiaObra: `Escultura`,
    Material: `Peça em argamassa armada policromada`,
    Descricao: `Escultura de um polvo proximo ao barco pintados nas cores cinza, criando um ambiente ludico, com outras peças para utilização das crianças que frequentam a praça.
A peça foi executada a partir dos anos de 1970 do seculo XX até o ano de 2000.`,
    Execucao: true,
    DataInauguracao: `1970`,
    Zona: 'Norte',
    Bairro: 'Tijuca',
    PontoDeReferencia: 'R. Saboia Lima',
    Latitude: `-22.9329112`,
    Longitude: `-43.2339401`,
    Fatos: [new Fato('', '', 'Propriedade', 'Pública', [], 'Rio de Janeiro')],
};

export const OTamandua_PaulodeTarso: Obra = {
    ID: 766,
    Artistas: [artistas.PaulodeTarso],
    Titulo: `O Tamandua`,
    Classificacao: 'perene',
    Categoria: 'sublimidade',
    TipologiaObra: `Escultura`,
    Material: `Peça em argamassa armada policromada`,
    Descricao: `Escultura de um tamandua proximo pintado nas cores marrom e preto criando um ambiente ludico, com outras peças
    para utilização das crianças que frequentam a praça.
A peça foi executada a partir dos anos de 1970 do seculo XX até o ano de 2000.`,
    Execucao: true,
    DataInauguracao: `1970`,
    Zona: 'Norte',
    Bairro: 'Tijuca',
    PontoDeReferencia: 'R. Saboia Lima',
    Latitude: `-22.9329112`,
    Longitude: `-43.2339401`,
    Fatos: [new Fato('', '', 'Propriedade', 'Pública', [], 'Rio de Janeiro')],
};

export const ORinoceronte_PaulodeTarso: Obra = {
    ID: 768,
    Artistas: [artistas.PaulodeTarso],
    Titulo: `O Rinoceronte`,
    Classificacao: 'perene',
    Categoria: 'sublimidade',
    TipologiaObra: `Escultura`,
    Material: `Peça em argamassa armada policromada`,
    Descricao: `Escultura de um rinoceronte pintado nas cor azul, criando um ambiente ludico, com outras peças para utilização
    das crianças que frequentam a praça.
A peça foi executada a partir dos anos de 1970 do seculo XX até o ano de 2000.`,
    Execucao: true,
    DataInauguracao: `1970`,
    Zona: 'Norte',
    Bairro: 'Tijuca',
    PontoDeReferencia: 'R. Saboia Lima',
    Latitude: `-22.9329112`,
    Longitude: `-43.2339401`,
    Fatos: [new Fato('', '', 'Propriedade', 'Pública', [], 'Rio de Janeiro')],
};

export const OSaciPerere_PaulodeTarso: Obra = {
    ID: 769,
    Artistas: [artistas.PaulodeTarso],
    Titulo: `O Saci Perere`,
    Classificacao: 'perene',
    Categoria: 'sublimidade',
    TipologiaObra: `Escultura`,
    Material: `Peça em argamassa armada policromada`,
    Descricao: `Escultura do saci perere pintado nas cores preta e vermelha, criando um ambiente ludico, com outras peças para
    utilização das crianças que frequentam a praça.
A peça foi executada a partir dos anos de 1970 do seculo XX até o ano de 2000.`,
    Execucao: true,
    DataInauguracao: `1970`,
    Zona: 'Norte',
    Bairro: 'Tijuca',
    PontoDeReferencia: 'R. Saboia Lima',
    Latitude: `-22.9329112`,
    Longitude: `-43.2339401`,
    Fatos: [new Fato('', '', 'Propriedade', 'Pública', [], 'Rio de Janeiro')],
};

export const ASereia_PaulodeTarso: Obra = {
    ID: 770,
    Artistas: [artistas.PaulodeTarso],
    Titulo: `A Sereia`,
    Classificacao: 'perene',
    Categoria: 'sublimidade',
    TipologiaObra: `Escultura`,
    Material: `Peça em argamassa armada policromada`,
    Descricao: `Escultura de uma sereia pintado nas cor verde e marrom, criando um ambiente ludico, com outras peças para utilização das crianças que frequentam a praça.
A peça foi executada a partir dos anos de 1970 do seculo XX até o ano de 2000.`,
    Execucao: true,
    DataInauguracao: `1970`,
    Zona: 'Norte',
    Bairro: 'Tijuca',
    PontoDeReferencia: 'R. Saboia Lima',
    Latitude: `-22.9329112`,
    Longitude: `-43.2339401`,
    Fatos: [new Fato('', '', 'Propriedade', 'Pública', [], 'Rio de Janeiro')],
};

export const AsTartarugas_PaulodeTarso: Obra = {
    ID: 771,
    Artistas: [artistas.PaulodeTarso],
    Titulo: `As Tartarugas`,
    Classificacao: 'perene',
    Categoria: 'sublimidade',
    TipologiaObra: `Escultura`,
    Material: `Peça em argamassa armada policromada`,
    Descricao: `Escultura de tartarugas pintadas na cor verde, criando um ambiente ludico, com outras peças para utilização das crianças que frequentam a praça.
A peça foi executada a partir dos anos de 1970 do seculo XX até o ano de 2000.`,
    Execucao: true,
    DataInauguracao: `1970`,
    Zona: 'Norte',
    Bairro: 'Tijuca',
    PontoDeReferencia: 'R. Saboia Lima',
    Latitude: `-22.9329112`,
    Longitude: `-43.2339401`,
    Fatos: [new Fato('', '', 'Propriedade', 'Pública', [], 'Rio de Janeiro')],
};

export const ATartarugaGigante_PaulodeTarso: Obra = {
    ID: 772,
    Artistas: [artistas.PaulodeTarso],
    Titulo: `A Tartaruga Gigante`,
    Classificacao: 'perene',
    Categoria: 'sublimidade',
    TipologiaObra: `Escultura`,
    Material: `Peça em argamassa armada policromada`,
    Descricao: `Escultura de uma tartaruga pintada nas cor marrom, criando um ambiente ludico, com outras peças para utilização
    das crianças que frequentam a praça.
A peça foi executada a partir dos anos de 1970 do seculo XX até o ano de 2000.`,
    Execucao: true,
    DataInauguracao: `1970`,
    Zona: 'Norte',
    Bairro: 'Tijuca',
    PontoDeReferencia: 'R. Saboia Lima',
    Latitude: `-22.9329112`,
    Longitude: `-43.2339401`,
    Fatos: [new Fato('', '', 'Propriedade', 'Pública', [], 'Rio de Janeiro')],
};

export const OUrso_PaulodeTarso: Obra = {
    ID: 773,
    Artistas: [artistas.PaulodeTarso],
    Titulo: `O Urso`,
    Classificacao: 'perene',
    Categoria: 'sublimidade',
    TipologiaObra: `Escultura`,
    Material: `Peça em argamassa armada policromada`,
    Descricao: `Escultura de um urso pintado nas cores preta e branca, criando um ambiente ludico, com outras peças para
    utilização das crianças que frequentam a praça.
A peça foi executada a partir dos anos de 1970 do seculo XX até o ano de 2000.`,
    Execucao: true,
    DataInauguracao: `1970`,
    Zona: 'Norte',
    Bairro: 'Tijuca',
    PontoDeReferencia: 'R. Saboia Lima',
    Latitude: `-22.9329112`,
    Longitude: `-43.2339401`,
    Fatos: [new Fato('', '', 'Propriedade', 'Pública', [], 'Rio de Janeiro')],
};

export const AVaca_PaulodeTarso: Obra = {
    ID: 774,
    Artistas: [artistas.PaulodeTarso],
    Titulo: `A Vaca`,
    Classificacao: 'perene',
    Categoria: 'sublimidade',
    TipologiaObra: `Escultura`,
    Material: `Peça em argamassa armada policromada`,
    Descricao: `Escultura de uma vaca intado nas cores preto e branca, criando um ambiente ludico, com outras peças para
    utilização das crianças que frequentam a praça.
A peça foi executada a partir dos anos de 1970 do seculo XX até o ano de 2000.`,
    Execucao: true,
    DataInauguracao: `1970`,
    Zona: 'Norte',
    Bairro: 'Tijuca',
    PontoDeReferencia: 'R. Saboia Lima',
    Latitude: `-22.9329112`,
    Longitude: `-43.2339401`,
    Fatos: [new Fato('', '', 'Propriedade', 'Pública', [], 'Rio de Janeiro')],
};

export const AViscondedeSabugosa_PaulodeTarso: Obra = {
    ID: 775,
    Artistas: [artistas.PaulodeTarso],
    Titulo: `A Visconde de Sabugosa`,
    Classificacao: 'perene',
    Categoria: 'sublimidade',
    TipologiaObra: `Escultura`,
    Material: `Peça em argamassa armada policromada`,
    Descricao: `Escultura de duas figuras do Visconde de Sabugosa pintados nas cores amrelo, azul e vermelho, criando um ambiente
    ludico, com outras peças para utilização das crianças que frequentam a praça.
A peça foi executada a partir dos anos de 1970 do seculo XX até o ano de 2000.`,
    Execucao: true,
    DataInauguracao: `1970`,
    Zona: 'Norte',
    Bairro: 'Tijuca',
    PontoDeReferencia: 'R. Saboia Lima',
    Latitude: `-22.9329112`,
    Longitude: `-43.2339401`,
    Fatos: [new Fato('', '', 'Propriedade', 'Pública', [], 'Rio de Janeiro')],
};

export const AZebra_PaulodeTarso: Obra = {
    ID: 776,
    Artistas: [artistas.PaulodeTarso],
    Titulo: `A Zebra`,
    Classificacao: 'perene',
    Categoria: 'sublimidade',
    TipologiaObra: `Escultura`,
    Material: `Peça em argamassa armada policromada`,
    Descricao: `Escultura de uma zebra pintado nas cores preta e branca, criando um ambiente ludico, com outras peças para
    utilização das crianças que frequentam a praça. A peça foi executada a partir dos anos de 1970 do seculo XX até o ano de 2000.`,
    Execucao: true,
    DataInauguracao: `1970`,
    Zona: 'Norte',
    Bairro: 'Tijuca',
    PontoDeReferencia: 'R. Saboia Lima',
    Latitude: `-22.9329112`,
    Longitude: `-43.2339401`,
    Fatos: [new Fato('', '', 'Propriedade', 'Pública', [], 'Rio de Janeiro')],
};

export const MarcodaInauguracaodaAvenidaPaulodeFrontin_Desconhecida: Obra = {
    ID: 777,
    Artistas: [artistas.Desconhecida],
    Titulo: `Marco da Inauguração da Avenida Paulo de Frontin`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Marco`,
    Material: `Bloco de granito esculpido`,
    Descricao: `Marco em cantaria de granito, implantado na inauguração das obras de drenagem do Rio Comprido.`,
    Execucao: true,
    DataInauguracao: `01/1919`,
    Latitude: `-22.9243188`,
    Longitude: `-43.2095377`,
};

export const PisodePedeMolequedaLadeiraSouzaDoca_Desconhecida: Obra = {
    ID: 778,
    Artistas: [artistas.Desconhecida],
    Titulo: `Piso de Pé de Moleque da Ladeira Souza Doca`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `piso`,
    Material: `Seixos e lascas de granito`,
    Descricao: `Ladeira em piso original de acesso a lotes residenciais.`,
    Execucao: true,
    DataInauguracao: ``,
    Latitude: `-22.9312886`,
    Longitude: `-43.2082508`,
};

export const BancodaPracadosBichinhosI_PaulodeTarso: Obra = {
    ID: 779,
    Artistas: [artistas.PaulodeTarso],
    Titulo: `Banco da Praça dos Bichinhos I`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `banco`,
    Material: `Peça em argamassa armada policromada`,
    Descricao: `Construção pintada em diversas cores integrandoaoambiente ludico, com outras peças para utilização das crianças que frequentam a praça. 
A peça foi executada a partir dos anos de 1970 do seculo XX até o ano de 2000.`,
    Execucao: true,
    DataInauguracao: ``,
    Latitude: `-22.9684518`,
    Longitude: `-43.1796113`,
};

export const BancodaPracadosBichinhosII_PaulodeTarso: Obra = {
    ID: 780,
    Artistas: [artistas.PaulodeTarso],
    Titulo: `Banco da Praça dos Bichinhos II`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `banco`,
    Material: `Peça em argamassa armada policromada`,
    Descricao: `Construção pintada em diversas cores integrandoaoambiente ludico, com outras peças para utilização das crianças que frequentam a praça. 
A peça foi executada a partir dos anos de 1970 do seculo XX até o ano de 2000.`,
    Execucao: true,
    DataInauguracao: ``,
    Latitude: `-22.9684518`,
    Longitude: `-43.1796113`,
};

export const BancodaPracadosBichinhosIII_PaulodeTarso: Obra = {
    ID: 781,
    Artistas: [artistas.PaulodeTarso],
    Titulo: `Banco da Praça dos Bichinhos III`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: 'banco',
    Material: `Peça em argamassa armada policromada`,
    Descricao: `Construção pintada em diversas cores integrandoaoambiente ludico, com outras peças para utilização das crianças que frequentam a praça. 
A peça foi executada a partir dos anos de 1970 do seculo XX até o ano de 2000.`,
    Execucao: true,
    DataInauguracao: ``,
    Latitude: `-22.9684518`,
    Longitude: `-43.1796113`,
};

export const BancodaPracadosBichinhosIV_PaulodeTarso: Obra = {
    ID: 782,
    Artistas: [artistas.PaulodeTarso],
    Titulo: `Banco da Praça dos Bichinhos IV`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `banco`,
    Material: `Peça em argamassa armada policromada`,
    Descricao: `Construção pintada em diversas cores integrandoaoambiente ludico, com outras peças para utilização das crianças que frequentam a praça. 
A peça foi executada a partir dos anos de 1970 do seculo XX até o ano de 2000.`,
    Execucao: true,
    DataInauguracao: ``,
    Latitude: `-22.9684518`,
    Longitude: `-43.1796113`,
};

export const BancodaPracadosBichinhosV_PaulodeTarso: Obra = {
    ID: 783,
    Artistas: [artistas.PaulodeTarso],
    Titulo: `Banco da Praça dos Bichinhos V`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `banco`,
    Material: `Peça em argamassa armada policromada`,
    Descricao: `Construção pintada em diversas cores integrandoaoambiente ludico, com outras peças para utilização das crianças que frequentam a praça. 
A peça foi executada a partir dos anos de 1970 do seculo XX até o ano de 2000.`,
    Execucao: true,
    DataInauguracao: ``,
    Latitude: `-22.9684518`,
    Longitude: `-43.1796113`,
};

export const ChafarizdaPracaSaensPena_AzevedoNeto: Obra = {
    ID: 784,
    Artistas: [artistas.AzevedoNeto],
    Titulo: `Chafariz da Praça Saens Pena`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `chafariz`,
    Material: `Peça em concreto armado`,
    Descricao: `Chafariz de jorro de agua, composto por dois jatos de nevoa, um na extremidade do lago e outro central. Ha tambem um jato solido conhecido, como canhão na outra extremidade do lago.
Desativado desde maio de 2017.`,
    Execucao: true,
    DataInauguracao: `11/1947`,
    Latitude: `-22.9243941`,
    Longitude: `-43.2328928`,
};

export const ChafarizdaPracaXavierdeBrito_Desconhecida: Obra = {
    ID: 785,
    Artistas: [artistas.Desconhecida],
    Titulo: `Chafariz da Praça Xavier de Brito`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Chafariz`,
    Material: `Peça em ferro fundido`,
    Descricao: `Consta que pertencia ao Reservatorio do Engenho de Dentro, conforma foto da Revista Ilustrada, mas se encontrava abandonado. É atribuído às fundições de Val D&rsquo;Osne, porque alguns elementos são conhecidos nos catálagos dessa fundição.
É composto por três bacias superpostas. Na primeira intercalam-se quatro delfins e quatro carrancas, na segunda quatro crianças com os braços entrelaçados e no topo um grande vaso jorra a água para a base do Chafariz.
O Chafariz esta desativado desde maio de 2017.`,
    Execucao: true,
    DataInauguracao: `08/1963`,
    Latitude: `-22.9316581`,
    Longitude: `-43.2430116`,
};

export const FontedasAguasFerreas_AzevedoNeto: Obra = {
    ID: 787,
    Artistas: [artistas.AzevedoNeto],
    Titulo: `Fonte das Águas Férreas`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `fonte`,
    Material: `Blocos de granito`,
    Descricao: `Trata-se de um pequeno Chafariz circular de blocos de pedra, construído para marcar a descoberta do Imperador D.Pedro I, que em dezembro de 1823 encontrou a fonte de águas férreas.
Provavelmente o projeto do Chafariz é de Azevedo Neto que realizou o paisagismo da avenida.
Desativado em data desconhecida.`,
    Execucao: true,
    DataInauguracao: `12/1940`,
    Latitude: `-22.9573635`,
    Longitude: `-43.2688191`,
};

export const BebedourodaEstradaVelhadaTijuca_Desconhecida: Obra = {
    ID: 788,
    Artistas: [artistas.Desconhecida],
    Titulo: `Bebedouro da Estrada Velha da Tijuca`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `bebedouro`,
    Material: `Pedra e tijolo com argamassa`,
    Descricao: `Construção em pedra e cal, tendo à frente um tanque retangular de cantaria. No frontão triangular uma placa de mármore indica a data da construção. Em ambos os lados do tanque existem dois bancos, também em cantaria.
A água é jorrava no tanque por uma torneira de bronze localizada bem ao centro de bebedouro. O jorro central que extravasa para os compartimentos contíguos mantendo, desta forma, os três compartimentos cheios de água.
Desativado em data desconhecida.`,
    Execucao: true,
    DataInauguracao: `01/1858`,
    Latitude: `-22.9521093`,
    Longitude: `-43.2620343`,
};

export const LagodaPontedoAltoBoaVista_AzevedoNeto: Obra = {
    ID: 789,
    Artistas: [artistas.AzevedoNeto],
    Titulo: `Lago da Ponte do Alto Boa Vista`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Lago`,
    Material: `Peça em concreto armado`,
    Descricao: `Pequeno lago artificial, criado para embelezar os jardins da estrada, onde se acumula a água que desce das encostas do Parque Nacional da Tijuca.`,
    Execucao: true,
    DataInauguracao: `12/1940`,
    Latitude: `-22.9507156`,
    Longitude: `-43.2578853`,
};

export const LagodaCascatadoAltodaBoaVista_AzevedoNeto: Obra = {
    ID: 790,
    Artistas: [artistas.AzevedoNeto],
    Titulo: `Lago da Cascata do Alto da Boa Vista`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Lago`,
    Material: `Peça em concreto armado`,
    Descricao: `Lago artificial criado a partir da cascata, que recebe a água que desce de uma parte da encosta do Parque Nacional da Tijuca.`,
    Execucao: true,
    DataInauguracao: `12/1940`,
    Latitude: `-22.9576214`,
    Longitude: `-43.2644891`,
};

export const BicadoMonteiro_Desconhecida: Obra = {
    ID: 791,
    Artistas: [artistas.Desconhecida],
    Titulo: `Bica do Monteiro`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `bica`,
    Material: `Peça em argamassa`,
    Descricao: `Fonte tipo estela em granito erguida sobre quatro degraus em semicírculo aos pés da encosta. A bica servia de bebedouro de animais e dos trabalhadores das fazendas de café no início do séc. XIX, deve seu nome ao 1º tenente do Exército Antônio Pedro Monteiro, responsável pela implantação da rede de captação de água junto aos mananciais da floresta.
Originariamente existia uma peça em ferro fundido produzido nas Fundições do Val D'Osne. A peça desapareceu no ano de 2002 ficando somente a coluna que a sustentava. A bacia e a bica instalada não fazem parte do conjunto original.`,
    Execucao: true,
    DataInauguracao: `01/1886`,
    Latitude: `-22.9583645`,
    Longitude: `-43.2652777`,
};

export const ChafarizdeGrandjeandeMontigny_AugusteHenriVictorGrandjeandeMontigny: Obra = {
    ID: 792,
    Artistas: [artistas.AugusteHenriVictorGrandjeandeMontigny],
    Titulo: `Chafariz de Grandjean de Montigny`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Chafariz`,
    Material: `Peça em gnaisse`,
    Descricao: `Implantado originalmente no antigo Rossio Pequeno, hoje Praça Onze de Junho. Com a abertura da Avenida Presidente Vargas, foi transferido para essa praça.
O Chafariz, se ergue sobre uma plataforma circular, à qual dão acesso duas escadas, intercaladas por dois tanques. Sobre a plataforma há uma bacia circular em gnaisse, do meio da qual sai um pedestal cilíndrico, de onde originariamente da boca de um leao jorrava, atualmente no local esta uma placa de marmore. Esse pedestal sustenta uma outra bacia, da qual se levanta um coroamento em forma de pinha em bronze, do qual jorra a água. Duas grades de ferro encimam os tanques intercalados entre as escadas.
Esta desativado desde maio de 2017.`,
    Execucao: true,
    DataInauguracao: `01/1848`,
    Latitude: `-22.9616678`,
    Longitude: `-43.2733192`,
};

export const FonteInglesadoAltodaBoaVista_Desconhecida: Obra = {
    ID: 793,
    Artistas: [artistas.Desconhecida],
    Titulo: `Fonte Inglesa do Alto da Boa Vista`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `fonte`,
    Material: `Peça em ferro fundido`,
    Descricao: `A peça é de uma fundição inglesa : A . Handside e Co. 1ª / Derby e London de 1884. A data da instalação na praça é desconhecida.
Fonte tipo Stella, fixada num monolito de concreto. A água jorra de uma cara de leão, para uma bacia semicircular logo abaixo.
Desativado desde maio de 2017.`,
    Execucao: true,
    DataInauguracao: ``,
    Latitude: `-22.9616678`,
    Longitude: `-43.2733192`,
};

export const Guarda_corpodaRuaSaoRafael_Desconhecida: Obra = {
    ID: 795,
    Artistas: [artistas.Desconhecida],
    Titulo: `Guarda-corpo  da Rua São Rafael`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Guarda-corpo`,
    Material: `Blocos de gnaisse com argamassa`,
    Descricao: `Guarda-corpo em alvenaria de pedra aparente, para proteção dos pedestres no entorno do Rio Maracanã`,
    Execucao: true,
    DataInauguracao: `01/1895`,
    Latitude: `-22.9449807`,
    Longitude: `-43.2545888`,
};

export const MarcodeInauguracaodaAvenidaEdsonPassos_AzevedoNeto: Obra = {
    ID: 796,
    Artistas: [artistas.AzevedoNeto],
    Titulo: `Marco de Inauguração da Avenida Edson Passos`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Marco`,
    Material: `Bloco de granito com placa de bronze`,
    Descricao: `Marco de granito bruto com uma placa comemorativa`,
    Execucao: true,
    DataInauguracao: `12/1940`,
    Latitude: `-22.9516345`,
    Longitude: `-43.2602768`,
};

export const PontedoRioSaoJoao_Desconhecida: Obra = {
    ID: 797,
    Artistas: [artistas.Desconhecida],
    Titulo: `Ponte do Rio São João`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Ponte`,
    Material: `Blocos de granito`,
    Descricao: `Construção em arco de blocos de pedra.`,
    Execucao: true,
    DataInauguracao: ``,
    Latitude: `-22.9550967`,
    Longitude: `-43.2650407`,
};

export const PisodePedeMolequedaAvenidaEdsonPassos_Desconhecida: Obra = {
    ID: 798,
    Artistas: [artistas.Desconhecida],
    Titulo: `Piso de Pé de Moleque da Avenida Edson Passos`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Piso`,
    Material: `Seixos e lascas de granito`,
    Descricao: `Piso de blocos de pedra original.`,
    Execucao: true,
    DataInauguracao: ``,
    Latitude: `-22.9552948`,
    Longitude: `-43.265225`,
};

export const PisodePedeMolequedoBebedourodaEstradaVelhadaTijuca_Desconhecida: Obra = {
    ID: 799,
    Artistas: [artistas.Desconhecida],
    Titulo: `Piso de Pé de Moleque do Bebedouro da Estrada Velha da Tijuca`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `piso`,
    Material: `Seixos e lascas de granito`,
    Descricao: `Trecho de piso original em frente ao Bebedouro da Estrada Velha da Tijuca.`,
    Execucao: true,
    DataInauguracao: ``,
    Latitude: `-22.9521093`,
    Longitude: `-43.2620343`,
};

export const LanternaJaponesaIdoAltodaBoaVista_Desconhecida: Obra = {
    ID: 800,
    Artistas: [artistas.Desconhecida],
    Titulo: `Lanterna Japonesa I do Alto da Boa Vista`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `lanterna`,
    Material: `Bloco de granito`,
    Descricao: `Trata-se de uma peça esculpida inteiriça. Pertenceu originariamente ao Sr. Yenari Tokugawa XI Shogum,que em 1842 recebeu ao senhor feudal do Castelo de Hida, Toshiatsu Kinoshita.Na inauguração o verador Frederico Trota, expos que a laterna pertenceu aos jardins do Palacio Real Japones, sendo uma relíquia da nação amizade.
Em 1957, foi doada à Cidade pelo Governador de Toqui, Seuchi Yasui, em nome do povo de Tóquio. Foi transportada para o Rio de Janeiro pelo navio Custódio de Melo, sob o comando de Raimundo Fiqueira.`,
    Execucao: true,
    DataInauguracao: `05/1957`,
    Latitude: `-22.9571733`,
    Longitude: `-43.265454`,
};

export const PontedeMadeira_Desconhecida: Obra = {
    ID: 801,
    Artistas: [artistas.Desconhecida],
    Titulo: `Ponte de Madeira`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `ponte`,
    Material: `Peça de Madeira`,
    Descricao: `Pequena ponte em madeira pintada de vermelho. Fui instalada nos anos de 1950 e o guarda-corpo nos anos de 1990.`,
    Execucao: true,
    DataInauguracao: ``,
    Latitude: `-22.9507511`,
    Longitude: `-43.2577902`,
};

export const LanternaJaponesaIIdoAltodaBoaVista_Desconhecida: Obra = {
    ID: 802,
    Artistas: [artistas.Desconhecida],
    Titulo: `Lanterna Japonesa II do Alto da Boa Vista`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `lanterna`,
    Material: `Peça em granito`,
    Descricao: `Pequena peça em pedra, encontrada no depósito da Fundação Parques e Jardins nos anos de 1990. Somente em 2014 foi instalada nessa avenida para embelezar o espaço.`,
    Execucao: true,
    DataInauguracao: `06/2014`,
    Latitude: `-22.9507511`,
    Longitude: `-43.2577902`,
};

export const Leao_HPeyrol: Obra = {
    ID: 803,
    Titulo: `Leão`,
    Classificacao: 'perene',
    Categoria: 'sublimidade',
    TipologiaObra: `Escultura`,
    Material: `Peça em mármore de Carrara`,
    Descricao: `Escultura de um leão sobre uma pedra, sobre um pedestal escalonado em granito. Foi adquirido pelo Prefeito Pereira Passos para embelezar a Praça Floriano, em 1906, e transferido para a Avenida Edson Passos quando de sua abertura em 1940.`,
    Execucao: true,
    DataInauguracao: `01/1906`,
    Latitude: `-22.9577422`,
    Longitude: `-43.26624`,
};

export const FradesdoAltodaBoaVista_AzevedoNeto: Obra = {
    ID: 804,
    Artistas: [artistas.AzevedoNeto],
    Titulo: `Frades do Alto da Boa Vista`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Frade`,
    Material: `Bloco de gnaisse esculpido`,
    Descricao: `Frades em cantaria de forma cilíndrica.`,
    Execucao: true,
    DataInauguracao: `12/1940`,
    Latitude: `-22.9577422`,
    Longitude: `-43.26624`,
};

export const LampadariodoAltodaBoaVista_Desconhecida: Obra = {
    ID: 805,
    Artistas: [artistas.Desconhecida],
    Titulo: `Lampadário do Alto da Boa Vista`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `lampadário`,
    Material: `Peça em ferro fundido`,
    Descricao: `Pequeno poste de ferro para iluminar o entrocamento de duas vias.`,
    Execucao: true,
    DataInauguracao: `01/1950`,
    Latitude: `-22.9662674`,
    Longitude: `-43.2774695`,
};

export const MarcoemTributodeGratidao_Desconhecida: Obra = {
    ID: 806,
    Artistas: [artistas.Desconhecida],
    Titulo: `Marco em Tributo de Gratidão`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Marco`,
    Material: `Peça em mármore fixada em blocos de gnaisse`,
    Descricao: `Placa de mármore esculpida fixada na murada de pedra, com inscrições de agradecimento a Luís Pedreira do Couto Ferraz, o Barão do Bom Retiro, por promover o desenvolvimento da Tijuca.`,
    Execucao: true,
    DataInauguracao: `01/1857`,
    Latitude: `-22.9666564`,
    Longitude: `-43.2775942`,
};

export const SanitarioPublicodaFurnasdeAgassiz_Desconhecida: Obra = {
    ID: 807,
    Artistas: [artistas.Desconhecida],
    Titulo: `Sanitario Publico da Furnas de Agassiz`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Construção`,
    Material: `Sanitário público`,
    Descricao: `Construção de rocaille, imitando troncos de árvores. Trata-se de um sanitario publico, da Estrada de Furnas`,
    Execucao: true,
    DataInauguracao: `11/1919`,
    Latitude: `-22.981873`,
    Longitude: ``,
};

export const MarcodaInauguracaodoItanhanga_Desconhecida: Obra = {
    ID: 808,
    Artistas: [artistas.Desconhecida],
    Titulo: `Marco da Inauguração do Itanhangá`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Marco`,
    Material: `Bloco de granito com letras de bronze`,
    Descricao: `Marco em granito bruto, com inscrições relativas a inauguração.`,
    Execucao: true,
    DataInauguracao: `12/1975`,
    Latitude: `-22.9844612`,
    Longitude: `-43.3000407`,
};

export const AmuradadoItanhanga_Desconhecida: Obra = {
    ID: 809,
    Artistas: [artistas.Desconhecida],
    Titulo: `Amurada do Itanhangá`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Amurada`,
    Material: `Bloco de granito`,
    Descricao: `Amurada de blocos de granito bruto, contornando a área ajardinada, com colunas que sustentam postes de iluminação.`,
    Execucao: true,
    DataInauguracao: `12/1975`,
    Latitude: `-22.9844612`,
    Longitude: `-43.3000407`,
};

export const PisodePedraPortuguesadasCalcadasMusicais_OrlandoMagdalena: Obra = {
    ID: 816,
    Artistas: [artistas.OrlandoMagdalena],
    Titulo: `Piso de Pedra Portuguesa das Calçadas Musicais`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `piso`,
    Material: `Pedras portuguesas`,
    Descricao: `Piso execuatado para as comemorações do IV Centenário da Cidade do Rio de Janeiro, idealizada pelo compositor Almirante, que escolheu as músicas a serem reproduzidas,<formando as partituras de músicas de grandes compositores populares brasileiros,
Trata-se de um mosaico de pedrasbrancas e pretas, desenhando partituras de músicas de grandes compositores, Foram construídas então desde a Praça Maracanãaté a Praça Barão de Drumond, com as partituras das seguites músicas: Cidade Maravilhosa de André Filho(esta primeira ainda na Praça Maracanã); Abre Alas de Chiquinha Gonzaga; Pelo Telefone de Dungae Mauro de Almeida; Mal me querde Cristóvão de Alencar, Atmando Reise Newton Teixeira; Feitiço da Vilade Noel Rosae Vadico; Ave Mariade Ertildes Campose Jonas Neves; Aquarela do Brasil de Ary BarrosoJura de Sinho; CarinhosodePixiguinha e João de Barros; Linda Florde Henrique Vogelere Luis Peixoto; A Conquista do Arde Eduardo das Neves; Luar do Sertãode Catulo de PaixãoCearensee João Pernambuco; Chão de Estrelasde Orestes Barbosae Silvio Caldas; Linda Morenade Lamartine Babo; A Voz do Violão deFrancisco Alvese Horacio Campos; Na Pavunade Homero Dornellase Almirante; Primavera do Rio de João de Barrose Ernesto Nazareth; Apanhei-te Cavaquinhode Ernesto Nazareth; Florisbelade Nassara e Frazão; Renascer das Cinzasde Martinho da Vila(esta última já na Praça Barão de Drumond.`,
    Execucao: true,
    DataInauguracao: `01/1965`,
    Latitude: `-22.9151577`,
    Longitude: ``,
};

export const GradildoRecantodoTrovador_Desconhecida: Obra = {
    ID: 818,
    Artistas: [artistas.Desconhecida],
    Titulo: `Gradil do Recanto do Trovador`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Gradil`,
    Material: `Peça em ferro fundido`,
    Descricao: `Veio para o Brasil de navio em abril de 1876. Foiinaugurado em 1888 no Campo de Santana e transferido para esse parque em 1957.<O gradil de ferro fundido foi instalado em todo o perímetro do parque.
Foi adquirida pelo governo imperial na Companhia Barborat de Hauts Fanaux de Val d'Osne.`,

    Execucao: true,
    DataInauguracao: `09/1880`,
    Latitude: `-22.9168873`,
    Longitude: `-43.2602288`,
};

export const LanternaJaponesadoParqueRecantodoTrovador_Desconhecida: Obra = {
    ID: 819,
    Artistas: [artistas.Desconhecida],
    Titulo: `Lanterna Japonesa do Parque Recanto do Trovador`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `lanterna`,
    Material: `Peça em granito`,
    Descricao: `Aproveitando a comemoração dos 65 anos do Imperador Hiroto foi doada a Cidade a criação de jardim japonês no Rio de Janeiro, pelas mãos do paisagista Jorge Catsuo Okimoto. A lanterna pertenceu aos antepassados do Imperador Hiroito que presenteu ao Rio. As lanternas de pedra talhada, chamadas toro tem a forma de pequenos pagodes.
Essa Laterna foi doada à cidade nas comemorações do IV Centenário do Rio de Janeiro. presente do Japão.`,
    Execucao: true,
    DataInauguracao: `03/1966`,
    Latitude: `-22.9152633`,
    Longitude: `-43.2601276`,
};

export const BaciadoElefante_Girafa__Desconhecida: Obra = {
    ID: 820,
    Artistas: [artistas.Desconhecida],
    Titulo: `Bacia do Elefante ( Girafa)`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `bebedouro`,
    Material: `Peça em mármore`,
    Descricao: `Bacia com cerca de três metros de diâmetro, remanescente do primeiro zoológico da Cidade, que ali funcionou adaptado como Chafariz durante um período.
Desativado em data desconhecida`,
    Execucao: true,
    Latitude: `-22.9160183`,
    Longitude: `-43.2609973`,
};

export const LagodoRecantodoTrovador_JoseMagalhaes: Obra = {
    ID: 821,
    Artistas: [artistas.JoseMagalhaes],
    Titulo: `Lago do Recanto do Trovador`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Lago`,
    Material: `Peça em concreto armado`,
    Descricao: `Lago criado artificialmente para embelezar o espaço. Originalmente o antigo jardim zoológico havia alamendas, lagos, repuxos, pontes, chalat, bosques e as jaulas de inumeros animais.`,
    Execucao: true,
    DataInauguracao: `06/1888`,
    Latitude: `-22.916291`,
    Longitude: `-43.2609478`,
};

export const MarcodaInauguracaoPracaEdmundoRego_Desconhecida: Obra = {
    ID: 822,
    Artistas: [artistas.Desconhecida],
    Titulo: `Marco da Inauguração Praça Edmundo Rego`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Marco`,
    Material: `Bloco de granito com placa de bronze`,
    Descricao: `Marco de granito com uma placa de bronze com a seguinte inscrição em alto relevo: O monumento foi uma iniciativa da comissão de melhoramentos do Grajau.`,
    Execucao: true,
    DataInauguracao: `01/1935`,
    Latitude: `-22.9223369`,
    Longitude: `-43.2641098`,
};

export const CaramanchaodaPracaEdmundoRego_AzevedoNeto: Obra = {
    ID: 823,
    Artistas: [artistas.AzevedoNeto],
    Titulo: `Caramanchão da Praça Edmundo Rego`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Caramanchão`,
    Material: `Concreto armado`,
    Descricao: `Trata-se de duas construções, com cinco pilares de cada lado da praça.`,
    Execucao: true,
    DataInauguracao: `02/1935`,
    Latitude: `-22.9228895`,
    Longitude: `-43.2646837`,
};

export const CaramanchaodaPracaNobel_AzevedoNeto: Obra = {
    ID: 824,
    Artistas: [artistas.AzevedoNeto],
    Titulo: `Caramanchão da Praça Nobel`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `caramanchão`,
    Material: `Peça em concreto revestido por granito`,
    Descricao: `Construção de concreto revestida com pequenos blocos de granito, no trecho elevado do terreno.`,
    Execucao: true,
    DataInauguracao: `01/1940`,
    Latitude: `-22.9272864`,
    Longitude: `-43.2592641`,
};

export const MarcoaMusicadoGrajau_Desconhecida: Obra = {
    ID: 825,
    Artistas: [artistas.Desconhecida],
    Titulo: `Marco a Música do Grajaú`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Marco`,
    Material: `Monolítico de concreto com placa de ferro`,
    Descricao: `O marco é uma homenagem dos moradores do bairro ao médico, poeta e compositor José Renato Coelho de Godoy que compos a música - Grajaú.
 Grajaú Samba 
   Peço Licença ao poeta Noel
   Pra lembrar,
   Que junto a Vila Izabel
   Também há um lugar
   Onde o pandeiro da lua
   Ilumina cascatas,
   Cordões de Estrelas
   Cantam serenatas,
   E o Boêmia Esquece
   Que o sol vai chegar...
   Grajaú
   Pedaço de Mundo,
   Gente Boa,
   Meninada na Praça
   Brincando atoa,
   Faz a passarada
   Cantar de Alegria
   Perdão Noel,
   Se eu insisto na Beleza Bis
   Mas aqui a Natureza,
   Deus pensou para criar`,
    Execucao: true,
    DataInauguracao: `01/1987`,
    Latitude: `-22.9223369`,
    Longitude: `-43.2641098`,
};

export const Garrincha_EdgarDuvivier: Obra = {
    ID: 829,
    Artistas: [artistas.EdgarDuvivier],
    Titulo: `Garrincha`,
    Classificacao: 'perene',
    Categoria: 'personalidades',
    TipologiaObra: `Estátua`,
    Material: `Peça em bronze com pedestal revestido de granito`,
    Descricao: `A postura do homenageado é inspirada na sua posição quando esperava o jogador adversário para o drible.
Doação à cidade pelo Clube de Regatas Botafogo em frente ao seu estádio do Engenhão.`,
    Execucao: true,
    DataInauguracao: `01/2010`,
    Zona: 'Norte',
    Bairro: 'Engenho de Dentro',
    PontoDeReferencia: 'R. José dos Reis',
    Latitude: `-22.8921404`,
    Longitude: `-43.2808328`,
    Fatos: [
        new Fato('', '', 'Propriedade', 'Pública', [], 'Rio de Janeiro'),
        new Fato('', '', 'Fundição/Atelier', 'FEB- Fundição e Esculturas em Bronze', [], 'Rio de Janeiro'),
    ],
};

export const Jairzinho_EdgarDuvivier: Obra = {
    ID: 831,
    Imagem: 'Jairzinho_EdgarDuvivier.jpg',
    Artistas: [artistas.EdgarDuvivier],
    Titulo: `Jairzinho`,
    Classificacao: 'perene',
    Categoria: 'personalidades',
    TipologiaObra: `Estátua`,
    Material: `Peça e alegorias em bronze e pedestal de concreto`,
    Descricao: `Homenagem inspirada na comemoração do seu gol. Doação à Cidade pelo Clube de Regatas Botafogo em frente ao seu
    estádio do Engenhão.`,
    Execucao: true,
    DataInauguracao: `08/2010`,
    Zona: 'Norte',
    Bairro: 'Engenho de Dentro',
    PontoDeReferencia: 'R. José dos Reis',
    Latitude: `-22.8921404`,
    Longitude: `-43.294776`,
    Fatos: [
        new Fato('', '', 'Propriedade', 'Pública', [], 'Rio de Janeiro'),
        new Fato('', '', 'Fundição/Atelier', 'FEB- Fundição e Esculturas em Bronze', [], 'Rio de Janeiro'),
    ],
};

export const Zagallo_EdgarDuvivier: Obra = {
    ID: 832,
    Artistas: [artistas.EdgarDuvivier],
    Titulo: `Zagallo`,
    Classificacao: 'perene',
    Categoria: 'personalidades',
    TipologiaObra: `estátua`,
    Material: `Peça em bronze com pedestal revestido de granito`,
    Descricao: `Estátiua inpirada na posição escolhida pelo próprio homenageado.Doação à cidade pelo Clube de Regatas Botafogo, em frente ao seu estádio do Engenhão.`,
    Execucao: true,
    DataInauguracao: `09/2013`,
    Latitude: `-22.8921404`,
    Longitude: `-43.294776`,
};

export const PaulodeFrontinnaCidadeNova_AntonioCarlosBettiniLiboredo_LuciomardeJesus: Obra = {
    ID: 834,
    Artistas: [artistas.AntonioCarlosBettiniLiboredo, artistas.LuciomardeJesus],
    Titulo: `Paulo de Frontin na Cidade Nova`,
    Classificacao: 'perene',
    Categoria: 'personalidades',
    TipologiaObra: `Estátua`,
    Material: `Peça em bronze`,
    Descricao: `A homenagem a Paulo de Frontin surgiu a partir da comemoração dos 120 anos do episódio conhecido como "a água em seis dias", protagonizado pelo engenheiro. que conseguiu levar água em apenas seis dias à então capital do Império em 1889.
Por esse motivo foi adquirida e instalada na entrada prinicpal da nova sede da Companhia Estadual de Aguas e Esgotos ( CEDAE).
A estátua com trages da época do fato personalidades, esta de costas para a rua, representado o homenageado entrado no predio, numa alusão a sua importancia na historia da companhia.`,
    Execucao: true,
    DataInauguracao: `12/2012`,
    Latitude: `-22.9087904`,
    Longitude: `-43.2004776`,
};

export const PaineldoTunelJoaoRicardo_MarcosChaves: Obra = {
    ID: 835,
    Artistas: [artistas.MarcosChaves],
    Titulo: `Painel do Túnel João Ricardo`,
    Classificacao: 'perene',
    Categoria: 'sublimidade',
    TipologiaObra: `Mosaico`,
    Material: `Mosaico de azulejos`,
    Descricao: `O painel de azulejo foiproduzido pela equipe da Azulejaria, a partir de oficinas de arte, com os moradores do Morro da Providência com apoio daSecretaria Municipal de Cultura.
É composto por 4 (quarto) paineis, um de cada lado da embocadura do túnel, criando imagens diferentes de acordo com a velocidade a visualização.`,
    Execucao: true,
    DataInauguracao: `07/2011`,
    Latitude: `-22.9004287`,
    Longitude: `-43.1932701`,
};

export const GradildaPracaParis_Desconhecida: Obra = {
    ID: 837,
    Artistas: [artistas.Desconhecida],
    Titulo: `Gradil da Praça Paris`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Gradil`,
    Material: `Peça em ferro fundido`,
    Descricao: `Gradil semelhante ao do Passeio Publico e do Campo de Santana, seguindo um modelo de praça historica.`,
    Execucao: true,
    DataInauguracao: `02/1992`,
    Latitude: `-22.915803`,
    Longitude: `-43.1762367`,
};

export const CaramanchaodoParqueGarotadeIpanema_Desconhecida: Obra = {
    ID: 838,
    Artistas: [artistas.Desconhecida],
    Titulo: `Caramanchão do Parque Garota de Ipanema`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Caramanchão`,
    Material: `Concreto armado`,
    Descricao: `Construção circular, no área central do parque, para embelezamento do parque.`,
    Execucao: true,
    DataInauguracao: `12/1978`,
    Latitude: `-22.9883668`,
    Longitude: `-43.1922312`,
};

export const CaramanchaodoParquedosPatins_RobertoBurleMarx: Obra = {
    ID: 839,
    Artistas: [artistas.RobertoBurleMarx],
    Titulo: `Caramanchão do Parque dos Patins`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Caramanchão`,
    Material: `Concreto armado`,
    Descricao: `Construção de concreto criada para proteger a iluminação embelezando o espaço.`,
    Execucao: true,
    DataInauguracao: `01/1998`,
    Latitude: `-22.9720554`,
    Longitude: ``,
};

export const LampadariodaPracaParis_Desconhecida: Obra = {
    ID: 840,
    Artistas: [artistas.Desconhecida],
    Titulo: `Lampadário da Praça Paris`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `lampadário`,
    Material: `Peça em ferro fundido`,
    Descricao: `Poste com 5 ( cinco) luminárias próximas as esculturas das estações do ano. Foram reinstalados em 2008 na praça, visto que os mesmos encontravam-se na Praça XV, próximo ao Monumento General Osorio.`,
    Execucao: true,
    DataInauguracao: `01/1929`,
    Latitude: `-22.9151664`,
    Longitude: `-43.1754779`,
};

export const LampadarioSuspensodoCorredorCultural_Desconhecida: Obra = {
    ID: 841,
    Artistas: [artistas.Desconhecida],
    Titulo: `Lampadário Suspenso do Corredor Cultural`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `lampadário`,
    Material: `Peça em ferro fundido`,
    Descricao: `Iluminarias instaladas dos anos 1980 e instaladas em varias ruas antigas do Rio como no Arco dos Teles, Beco dos Barbeiros, Beco das Cancelas, Rua do Mercado e Rua da Candelaria.`,
    Execucao: true,
    Latitude: `-22.9027849`,
    Longitude: `-43.174593`,
};

export const Guarda_corpodoCampodeSaoCristovao_Desconhecida: Obra = {
    ID: 836,
    Artistas: [artistas.Desconhecida],
    Titulo: `Guarda-corpo do Campo de São Cristovão`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Guarda-corpo`,
    Material: `Peça em ferro fundido`,
    Descricao: `Guarda-corpo composto por peças de ferro fundido vazada em rosáceas, fixadas em colunas e parapeito esculpido em gnaisse.`,
    Execucao: true,
    DataInauguracao: `11/1906`,
    Latitude: `-22.8992393`,
    Longitude: `-43.2218025`,
};

export const LampadariodaAssembleiaLegislativa_Desconhecida: Obra = {
    ID: 844,
    Artistas: [artistas.Desconhecida],
    Titulo: `Lampadário da Assembleia Legislativa`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `lampadário`,
    Material: `Peça em ferro pintado`,
    Descricao: `Poste de ferro fundido composto uma coluna onde por uma haste sustenta quatro luminarias ixadas por uma corrente a uma pequena escultura de uma aguia. Na base do poste, existe um machado, simbolisando que o palacio como um local de leis. Esses postes rodeiam a quadro onde está situado o Palácio Tiradentes.`,
    Execucao: true,
    DataInauguracao: `01/1926`,
    Latitude: `-22.9041225`,
    Longitude: `-43.1745547`,
};

export const LampadariodoCampodeSantana_Desconhecida: Obra = {
    ID: 846,
    Artistas: [artistas.Desconhecida],
    Titulo: `Lampadário do Campo de Santana`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `lampadário`,
    Material: `Peça em ferro pintado`,
    Descricao: `Originários da Avenida Rio Branco, hoje quatro deles estão no entorno do Monumento a Benjamin Constant, no Campo de Santana, e um em frente ao Quartel Central do Corpo de Bombeiros, na Praça da República. É possível que ainda existam muitos outros espalhados pela cidade,`,
    Execucao: true,
    Latitude: `-22.9066397`,
    Longitude: `-43.1884192`,
};

export const RequiemParaAFloresta_GevasioTeixeira: Obra = {
    ID: 114,
    Artistas: [artistas.GevasioTeixeira],
    Titulo: `Requiem Para AFloresta`,
    Material: 'pintura',
    DataInauguracao: '1994',
    DatasImportantes: [new Data(`1994`, 'data de inauguração')],
    Propriedade: 'publica',
    Zona: 'Central',
    Bairro: 'Centro',
    Endereço: 'rua buenos aires com rua urguaiana',
    Status: 'permanece no espaço público',
    Fatos: [new Fato('', '', '', '', [], '')],
    Temporalidade: 'temporario',
    Eixo: 'sublimidade',
    Funcao: 'ornamental',
    Natureza: 'artística',
    Tipologia: 'mural',
    Execucao: true,
};

export const LampadariodoTeatroMunicipal_Desconhecida: Obra = {
    ID: 847,
    Artistas: [artistas.Desconhecida],
    Titulo: `Lampadário do Teatro Municipal`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `lampadário`,
    Material: `Peça em ferro fundido e pedestal de granito`,
    Descricao: `Postes com quatro (4 ) iluminarias com requintada trabalho de fundição.`,
    Execucao: true,
    Latitude: `-22.9095581`,
    Longitude: ``,
};

export const LampadariodoMonumentoPedroI_Desconhecida: Obra = {
    ID: 848,
    Artistas: [artistas.Desconhecida],
    Titulo: `Lampadário do Monumento Pedro I`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `lampadário`,
    Material: `Peça em ferro pintado`,
    Descricao: `Poste de modelo unico para o monumento.`,
    Execucao: true,
    DataInauguracao: `01/1865`,
    Latitude: `-22.9065327`,
    Longitude: `-43.182986`,
};

export const LampadariodoLargodePiolho_Desconhecida: Obra = {
    ID: 849,
    Artistas: [artistas.Desconhecida],
    Titulo: `Lampadário do Largo de Piolho`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `lampadário`,
    Material: `Peça em ferro fundido`,
    Descricao: `Poste com seis( 6) luminarias. No local esse é o unico exemplar`,
    Execucao: true,
    Latitude: `-22.9057662`,
    Longitude: `-43.2180894`,
};

export const LampadariodoMuseudoCatete_Desconhecida: Obra = {
    ID: 850,
    Artistas: [artistas.Desconhecida],
    Titulo: `Lampadário do Museu do Catete`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `lampadário`,
    Material: `Peça em ferro fundido e pedestal de gnaisse`,
    Descricao: `São dois (2) postes com cinco ( 5 ) luminarias cada, sobre um pedestal de gnaisse.`,
    Execucao: true,
    DataInauguracao: ``,
    Latitude: `-22.9258472`,
    Longitude: `-43.1765808`,
};

export const LampadariodaPracaDuquedeCaxias_Desconhecida: Obra = {
    ID: 851,
    Artistas: [artistas.Desconhecida],
    Titulo: `Lampadário da Praça Duque de Caxias`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `lampadário`,
    Material: `Peça em ferro fundido`,
    Descricao: `Postes com tres ( 3) luminaris, instaladas no entorno do Pateon de Duque de Caxias`,
    Execucao: true,
    DataInauguracao: ``,
    Latitude: `-22.9043598`,
    Longitude: `-43.1893883`,
};

export const ChafarizdoPalacioDuquedeCaxias_AzevedoNeto: Obra = {
    ID: 853,
    Artistas: [artistas.AzevedoNeto],
    Titulo: `Chafariz do Palácio Duque de Caxias`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Chafariz`,
    Material: `Peça em concreto armado`,
    Descricao: `Dois Chafarizes de jorro de água construidos nos jardins laterais do acesso ao Palácio do Exército. Construidos noa anos da decada de 1950
Desativado em data desconhecida.`,
    Execucao: true,
    DataInauguracao: `01/1940`,
    Latitude: `-22.9038876`,
    Longitude: `-43.1898817`,
};

export const LampadarioModeloColardePerola_Desconhecida: Obra = {
    ID: 857,
    Artistas: [artistas.Desconhecida],
    Titulo: `Lampadário Modelo Colar de Pérola`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `lampadário`,
    Material: `Peça em ferro fundido`,
    Descricao: `Modelo instalado na Avenida Atlantica do Leme ao Posto Seis, no calçadão proximo aos predios, com lampadas de vapor de mercúrio, que com a luz branca iluminava a Princesinha do Mar, com afastamento simetrico produzindo uma imagem de perolas.Atualmente são 73 postes com cinco metros em ferro fundido com detalhes de folhagem e flores.Instalados nos anos de 1930`,
    Execucao: true,
    DataInauguracao: `01/1936`,
    Latitude: `-22.969323`,
    Longitude: `-43.1818173`,
};

export const LampadariodoMonumentoaAberturadosPortos_Desconhecida: Obra = {
    ID: 858,
    Artistas: [artistas.Desconhecida],
    Titulo: `Lampadário do Monumento a Abertura dos Portos`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `lampadário`,
    Material: `Peça em ferro fundido`,
    Descricao: `Originariamente instalados para iluminação a gas, com tres ( 3) luminarias`,
    Execucao: true,
    DataInauguracao: `01/1908`,
    Latitude: `-22.9225763`,
    Longitude: `-43.1724863`,
};

export const LampadarioModeloAvenidaCentral_Desconhecida: Obra = {
    ID: 859,
    Artistas: [artistas.Desconhecida],
    Titulo: `Lampadário Modelo Avenida Central`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `lampadário`,
    Material: `Peça em ferro fundido`,
    Descricao: `Atualmente existem cinco postes originais, quatro estão no entorno do Monumento a Benjamin Constant, no Campo de Santana e um em frente ao Quartel Central do Corpo de Bombeiros, na Praça da República. É possível que ainda existam muitos outros dos antigos postes espalhados pela cidade,`,
    Execucao: true,
    DataInauguracao: `01/1906`,
    Latitude: `-22.9067975`,
    Longitude: `-43.1885725`,
};

export const GloriadoPalacioTiradentes_Desconhecida: Obra = {
    ID: 861,
    Artistas: [artistas.Desconhecida],
    Titulo: `Glória do Palácio Tiradentes`,
    Classificacao: 'perene',
    Categoria: 'sublimidade',
    TipologiaObra: `Escultura`,
    Material: `Peça em bronze com pedestal de granito`,
    Descricao: `Composto por duas peças semelhantes uma de cada lado do trecho do convite da rampa de acesso ao Palácio.
    Cada peça tem coluna finamente esculpida com a peça principal de bronze no seu topo. A figura feminina, em bronze,
    com asas de anjos, segura com as duas mãos uma coroa de flores, no momento da coroação.`,
    Execucao: true,
    DataInauguracao: ``,
    Bairro: 'Centro',
    PontoDeReferencia: 'Av. Presidente Antonio Carlos',
    Latitude: `-22.9043907`,
    Longitude: `-43.1742407`,
    Fatos: [new Fato('', '', 'Propriedade', 'Pública', [], 'Rio de Janeiro')],
};

export const BancodeBurleMarxPraiadeBotofogo_RobertoBurleMarx: Obra = {
    ID: 862,
    Artistas: [artistas.RobertoBurleMarx],
    Titulo: `Banco de Burle Marx, Praia de Botofogo`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `banco`,
    Material: `Peça em concreto armado`,
    Descricao: `Construção de concreto organica acompanhando o traçado do jardim de Burle Marx.`,
    Execucao: true,
    DataInauguracao: `01/1954`,
    Latitude: `-22.9473738`,
    Longitude: `-43.1821741`,
};

export const BanconaPracaSantosDumont_RobertoBurleMarx: Obra = {
    ID: 863,
    Artistas: [artistas.RobertoBurleMarx],
    Titulo: `Banco na Praça Santos Dumont`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `banco`,
    Material: `Peça em concreto armado`,
    Descricao: `Bancos longos  construidos no contorno dos canteiros, criando possibilidade de contemplação da praça.`,
    Execucao: true,
    DataInauguracao: ``,
    Latitude: `-22.9737388`,
    Longitude: `-43.2258569`,
};

export const BancodeBurleMarxParquedoFlamengo_RobertoBurleMarx: Obra = {
    ID: 864,
    Artistas: [artistas.RobertoBurleMarx],
    Titulo: `Banco de Burle Marx, Parque do Flamengo`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `banco`,
    Material: `Peça em concreto armado`,
    Descricao: `Banco construido em linhas sinuosas e baixo tipico do desenho de Burle Marx`,
    Execucao: true,
    DataInauguracao: `01/1965`,
    Latitude: `-22.9226714`,
    Longitude: `-43.1691264`,
};

export const BancodeBurleMarxPracaSalgadoFilho_RobertoBurleMarx: Obra = {
    ID: 865,
    Artistas: [artistas.RobertoBurleMarx],
    Titulo: `Banco de Burle Marx, Praça Salgado Filho`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `banco`,
    Material: `Peça em concreto armado`,
    Descricao: `Construção de concreto, de forma organica acompanhando o traçado do jardim de Burle Marx.`,
    Execucao: true,
    DataInauguracao: `01/1938`,
    Latitude: `-22.9114736`,
    Longitude: `-43.1670899`,
};

export const BancodeBurleMarxLargodoMachado_RobertoBurleMarx: Obra = {
    ID: 866,
    Artistas: [artistas.RobertoBurleMarx],
    Titulo: `Banco de Burle Marx, Largo do Machado`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `banco`,
    Material: `Peça em concreto armado`,
    Descricao: `Construção no contorno de todos canteiros do lado interior da praça. O projetode 1945.`,
    Execucao: true,
    DataInauguracao: `01/1954`,
    Latitude: `-22.9304328`,
    Longitude: `-43.1786085`,
};

export const MosaicodePedraPortuguesadoLargodaCarioca_RobertoBurleMarx: Obra = {
    ID: 867,
    Artistas: [artistas.RobertoBurleMarx],
    Titulo: `Mosaico de Pedra Portuguesa do Largo da Carioca`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `piso`,
    Material: `Pedras portuguesas`,
    Descricao: `Mosaico de pedras portuguesas nas cores preta e branco formando desenhos organicos, criando destaque ao tradicional relógio da carioca.`,
    Execucao: true,
    DataInauguracao: `01/1981`,
    Latitude: `-22.9063647`,
    Longitude: `-43.1783077`,
};

export const MosaicodePedraPortuguesadoLargodoMachado_RobertoBurleMarx: Obra = {
    ID: 868,
    Artistas: [artistas.RobertoBurleMarx],
    Titulo: `Mosaico de Pedra Portuguesa do Largo do Machado`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `piso`,
    Material: `Pedras portuguesas`,
    Descricao: `Piso em pedra criando um mosaico organico caracteristico de Burle Marx.`,
    Execucao: true,
    DataInauguracao: `01/1951`,
    Latitude: `-22.9311049`,
    Longitude: `-43.1784413`,
};

export const MosaicodePedraPortuguesadaPracaJuliodeNoronha_RobertoBurleMarx: Obra = {
    ID: 869,
    Artistas: [artistas.RobertoBurleMarx],
    Titulo: `Mosaico de Pedra Portuguesa da Praça Julio de Noronha`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `piso`,
    Material: `Pedras portuguesas`,
    Descricao: `Mosaico executado com pretas portuguesas criado para adornar a pracinha do Leme`,
    Execucao: true,
    DataInauguracao: `09/1970`,
    Latitude: `-22.9623345`,
    Longitude: `-43.1653482`,
};

export const LampadariodoMinisteriodaFazenda_Desconhecida: Obra = {
    ID: 870,
    Artistas: [artistas.Desconhecida],
    Titulo: `Lampadário do Ministério da Fazenda`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `lampadário`,
    Material: `Peça em ferro fundido`,
    Descricao: `Postes com 5 (cinco ) luminarias cada, na fachada principal da antiga sede do Ministerio da Fazenda.`,
    Execucao: true,
    DataInauguracao: `11/1943`,
    Latitude: `-22.9078406`,
    Longitude: `-43.1729536`,
};

export const LampadariodaAmuradapeloCampodeSaoCristovao_Desconhecida: Obra = {
    ID: 872,
    Artistas: [artistas.Desconhecida],
    Titulo: `Lampadário da Amurada pelo Campo de São Cristovão`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `lampadário`,
    Material: `Peça em ferro fundido`,
    Descricao: `Poste com uma luminaria situada em cada coluna de sustentação do guarda corpo`,
    Execucao: true,
    DataInauguracao: `11/1906`,
    Latitude: `-22.8990312`,
    Longitude: `-43.2208201`,
};

export const LagodaPracaSalgadoFilho_RobertoBurleMarx: Obra = {
    ID: 873,
    Artistas: [artistas.RobertoBurleMarx],
    Titulo: `Lago da Praça Salgado Filho`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Lago`,
    Material: `Peça em concreto armado`,
    Descricao: `O lago tem forma irregular com sete banquetas para plantas aquaticas e blocos de pedra natural imitando rochedos.`,
    Execucao: true,
    DataInauguracao: `07/1952`,
    Latitude: `-22.9114736`,
    Longitude: `-43.1670899`,
};

export const ADiasdaCruz_VicenteDelRio_LuizCarlosToledo: Obra = {
    ID: 876,
    Artistas: [artistas.VicenteDelRio, artistas.LuizCarlosToledo],
    Titulo: `À Dias da Cruz`,
    Classificacao: 'perene',
    Categoria: 'personalidades',
    TipologiaObra: `Efígie`,
    Material: `Bloco de granito com placa de bronze`,
    Descricao: `O monumento, um monolito com blocos de pedra de mão, tem a efígie do médico. A peça em bronze é cópia da
    existente na Praça Tobias Barreto, em Vila Isabel. A efígie foi furtada em 2009.`,
    Execucao: true,
    DataInauguracao: `09/1996`,
    Latitude: `-22.9021836`,
    Longitude: `-43.2802868`,
    Fatos: [new Fato('', '', 'Propriedade', 'Pública', [], 'Rio de Janeiro')],
};

export const AryBarroso_LeoSantana: Obra = {
    ID: 877,
    Imagem: 'AryBarroso_LeoSantana.jpg',
    Artistas: [artistas.LeoSantana],
    Titulo: `Ary Barroso`,
    Classificacao: 'perene',
    Categoria: 'personalidades',
    TipologiaObra: `Estátua`,
    Material: `Peça em bronze`,
    Descricao: `Estátua de corpo inteiro sentado em uma cadeira de mesa de restaurante, na frente da antiga
    "Cantina Fiorentina", para referenciar o local onde o compositor passou os últimos 40 anos de vida.`,
    Peso: '200 kg',
    Execucao: true,
    DataInauguracao: `12/2003`,
    Zona: 'Sul',
    Bairro: 'Leme',
    PontoDeReferencia: 'Avenida Atlantica',
    Latitude: `-22.9626651`,
    Longitude: `-43.1678156`,
    Fatos: [new Fato('', '', 'Propriedade', 'Pública', [], 'Rio de Janeiro')],
};

export const CoretodoJardimdoMeier_PedroFernandesVianadaSilva: Obra = {
    ID: 878,
    Artistas: [artistas.PedroFernandesVianadaSilva],
    Titulo: `Coreto do Jardim do Méier`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Coreto`,
    Material: `Madeira`,
    Descricao: `Construção octogonal, em madeira sobre embasamento em alvenaria de pedras expostas, com escada de acesso em granito e cobertura de ardósia.`,
    Execucao: true,
    DataInauguracao: `05/1919`,
    Latitude: `-22.9004644`,
    Longitude: `-43.279142`,
};

export const FachadadeCasadeCrianca_Desconhecida: Obra = {
    ID: 879,
    Artistas: [artistas.Desconhecida],
    Titulo: `Fachada de Casa de Criança`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `fachada`,
    Material: `Pecas de tijolo com argamassa`,
    Descricao: `Fachada em miniatura para a interação das crianças.`,
    Execucao: true,
    DataInauguracao: `01/2002`,
    Latitude: `-22.9004644`,
    Longitude: `-43.279142`,
};

export const RelogiodoSol_OscarTecidio: Obra = {
    ID: 880,
    Artistas: [artistas.OscarTecidio],
    Titulo: `Relógio do Sol`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Relógio`,
    Material: `Peça em granito`,
    Descricao: `Peça com as horas do dia gravadas em baixo-relevo e ponteiro de aço.
Peça furtada em 15 de setembro de 2015.`,
    Execucao: true,
    DataInauguracao: `01/1981`,
    Latitude: `-22.9005938`,
    Longitude: `-43.2790071`,
};

export const AtenadoJardimdoMeier_Desconhecida: Obra = {
    ID: 881,
    Artistas: [artistas.Desconhecida],
    Titulo: `Atena do Jardim do Méier`,
    Classificacao: 'perene',
    Categoria: 'sublimidade',
    TipologiaObra: `Escultura`,
    Material: `Peça em mármore de Carrara`,
    Descricao: `Escultura com alegorias representando a Indústria, com os símbolos tradicionais, como uma roda como engrenagem e uma marreta.`,
    Execucao: true,
    DataInauguracao: `01/1974`,
    Latitude: `-22.9005291`,
    Longitude: `-43.2790742`,
};

export const RelogiodoMeierI_MayerhogereToledo: Obra = {
    ID: 882,
    Artistas: [artistas.MayerhogereToledo],
    Titulo: `Relógio do Méier I`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Relógio`,
    Material: `Peça em resina`,
    Descricao: `Relógio fixado entre três placas em resina com a inscrição MÉIER em sentido vertical. São dois relógios na mesma rua. Uma na esquina com a Rua Magalhães Couto e outro nana Rua Oldegard Sapucáia`,
    Execucao: true,
    DataInauguracao: `09/1996`,
    Latitude: `-22.9020101`,
    Longitude: `-43.279087`,
};

export const MarcodoMeier_MayerhogereToledo: Obra = {
    ID: 883,
    Artistas: [artistas.MayerhogereToledo],
    Titulo: `Marco do Méier`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Marco`,
    Material: `Peça em resina`,
    Descricao: `Placa em resina com a inscrição MÉIER em sentido vertical. Originariamente foi construído para ser um Chafariz de lago seco,mas em outuro de 2008 foi aterrado devido as dificuldades de manutenção.`,
    Execucao: true,
    DataInauguracao: `09/1996`,
    Latitude: `-22.9022064`,
    Longitude: `-43.278011`,
};

export const LeaodoMeier_NivaldoRodrigues: Obra = {
    ID: 884,
    Imagem: 'LeaodoMeier_NivaldoRodrigues.png',
    Artistas: [artistas.NivaldoRodrigues],
    Titulo: `Leão do Méier`,
    Classificacao: 'perene',
    Categoria: 'sublimidade',
    TipologiaObra: `Escultura`,
    Material: `Peça em argamassa armada`,
    Descricao: `Escultura em concreto pintado na cor amarela, oferecido à Cidade pelo Lions Club do Méier na ocasião do centenário do bairro e do Jubileu de Prata do Clube. Originalmente um relógio elétrico fazia parte do conjunto escultórico, tendo sido reinstalado pelo Rio-Cidade Méier, em 1996, no canteiro central da Rua Dias da Cruz.`,
    Execucao: true,
    DataInauguracao: `06/1989`,
    Zona: 'Norte',
    Bairro: 'Méier',
    PontoDeReferencia: 'R. Dias da Cruz',
    Latitude: `-22.9020599`,
    Longitude: `-43.2802932`,
    Fatos: [new Fato('', '', 'Propriedade', 'Pública', [], 'Rio de Janeiro')],
};

export const ObeliscodaLinhaAmarela_Desconhecida: Obra = {
    ID: 885,
    Artistas: [artistas.Desconhecida],
    Titulo: `Obelisco da Linha Amarela`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `obelisco`,
    Material: `Peça em aço`,
    Descricao: `Peça circular com uma estrutura central e outra cobrindo a primeira através de uma tela.`,
    Execucao: true,
    DataInauguracao: `10/1997`,
    Latitude: `-22.8862929`,
    Longitude: `-43.2885948`,
};

export const OratorioaSaoJorgedoCachambiI_Desconhecida: Obra = {
    ID: 886,
    Artistas: [artistas.Desconhecida],
    Titulo: `Oratório à São Jorge do Cachambi I`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Oratório`,
    Material: `Peça em concreto com imagem em resina`,
    Descricao: `Oratório para aguarda da imagem do santo.`,
    Execucao: true,
    DataInauguracao: `01/2013`,
    Latitude: `-22.8937863`,
    Longitude: `-43.2828704`,
};

export const OMascateRiachuelo_HonorioPecanha: Obra = {
    ID: 887,
    Artistas: [artistas.HonorioPecanha],
    Titulo: `O Mascate do bairro do Riachuelo`,
    Classificacao: 'perene',
    Categoria: 'personalidades',
    TipologiaObra: `Estátua`,
    Material: `Peça em bronze e pedestal de concreto`,
    Descricao: `Réplica da escultura de um homem com alegorias, uma amostra de tecido num braço, e com a outra mão abrindo um baú de
    mercadorias. É uma homenagem do SENAC ao pioneiro do comercio no Brasil. É uma reprodução do original realizado em 1964.`,
    Execucao: true,
    DataInauguracao: `03/1996`,
    Zona: 'Norte',
    Bairro: 'Riachuelo',
    PontoDeReferencia: 'Rua Vinte e Quatro de Maio',
    Latitude: `-22.9024367`,
    Longitude: `-43.2586028`,
    Lugar: 'Calçada',
    Fatos: [
        new Fato('1964', '1964', 'Original', 'A escultura é uma cópia ampliada do troféu O Mascate, esculpido por Honório Peçanha', [], 'Rio de Janeiro'),
        new Fato('', '', 'Propriedade', 'Pública', [], 'Rio de Janeiro'),
        new Fato('', '', 'Fundição/Atelier', 'Zani Fundição Artística E Metalúrgica Ltda.', [], 'Rio de Janeiro'),
    ],
};

export const CaramanchaodaPracaRioGrandedoNorte_Desconhecida: Obra = {
    ID: 888,
    Artistas: [artistas.Desconhecida],
    Titulo: `Caramanchão da Praça Rio Grande do Norte`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Caramanchão`,
    Material: `Peça em argamassa revestida com ceramica`,
    Descricao: `Construção original do projeto da praça.`,
    Execucao: true,
    DataInauguracao: ``,
    Latitude: `-22.8995896`,
    Longitude: `-43.29838`,
};

export const OratorioaSaoJorgedoCachambiII_Desconhecida: Obra = {
    ID: 890,
    Artistas: [artistas.Desconhecida],
    Titulo: `Oratório à São Jorge do Cachambi II`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Oratório`,
    Material: `Peça em metal com imagem de resina`,
    Descricao: `Oratório em frente à antiga loja<em>São Jorge de Cascadura</em><.`,
    Execucao: true,
    DataInauguracao: `01/2013`,
    Latitude: `-22.888232`,
    Longitude: `-43.2754679`,
};

export const CascatadoJardimdoMeier_PedroFernandesVianadaSilva: Obra = {
    ID: 891,
    Artistas: [artistas.PedroFernandesVianadaSilva],
    Titulo: `Cascata do Jardim do Méier`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Cascata`,
    Material: `Peça de rocaille em argamassa`,
    Descricao: `Pequena gruta artificial em argamassa, de onde a água escorre para um lago.`,
    Execucao: true,
    DataInauguracao: `05/1919`,
    Latitude: `-22.9006922`,
    Longitude: `-43.2789061`,
};

export const CascatadoParqueAriBarroso_PedroPaulinoGuimaraes_RenatoPrimaveraMarinho_WalterCurvelodeMendonca_AlmirdeLimaMachado_PauloCelsoPrado: Obra = {
    ID: 894,
    Artistas: [
        artistas.PedroPaulinoGuimaraes,
        artistas.RenatoPrimaveraMarinho,
        artistas.WalterCurvelodeMendonca,
        artistas.AlmirdeLimaMachado,
        artistas.PauloCelsoPrado,
    ],
    Titulo: `Cascata do Parque Ari Barroso`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Cascata`,
    Material: `Peça em concreto armado`,
    Descricao: `A cascata, os canais e o lago foram projetados conjuntamente, no ano do Quarto Centenário do Rio de Janeiro. A cascata está desativada desde os anos de 1990. `,
    Execucao: true,
    DataInauguracao: `08/1965`,
    Latitude: `-22.8385076`,
    Longitude: `-43.2877437`,
};

export const TigreEsmagandoaCobra_JoaoTurim: Obra = {
    ID: 676,
    Titulo: `Tigre Esmagando a Cobra`,
    Classificacao: 'perene',
    Categoria: 'sublimidade',
    TipologiaObra: `Escultura`,
    Material: `Peça em bronze`,
    Descricao: `Escultura figurativapremiada no Salão Nacional de Belas Artes em 1944 com medalha de prata quando foi adquirida pela Prefeitura do Rio de Janeiro e posteriormente instalada no zoologico.`,
    Execucao: true,
    DataInauguracao: `01/1948`,
    Latitude: `-22.9051738`,
    Longitude: `-43.229462`,
};

export const ChafarizdaRuaOliveiraBelo_Desconhecida: Obra = {
    ID: 896,
    Artistas: [artistas.Desconhecida],
    Titulo: `Chafariz da Rua Oliveira Belo`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Chafariz`,
    Material: `Peça em concreto revestido por granito`,
    Descricao: `Chafariz de jorro de água circular em lago seco revestido por placas de granito em duas cores, com jato central e duas linhas de jorros laterais.
O Chafariz foi desativado e retirado todo o seu equipamento em 9 de setembro de 2016, para a instalação de equipamento para a terceira idade, por solicitação da Administradora Regional, a fim de atender a solicitação dos moradores.`,
    Execucao: true,
    DataInauguracao: `02/1983`,
    Latitude: `-22.8408984`,
    Longitude: `-43.3055531`,
};

export const ChafarizdaPracaTresPoderes_RonaldoBenevello: Obra = {
    ID: 897,
    Artistas: [artistas.RonaldoBenevello],
    Titulo: `Chafariz da Praça Três Poderes`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Chafariz`,
    Material: `Tubo de ferro e piso em granito`,
    Descricao: `É um Chafariz de jorro sinuoso e lago seco criado para formar uma cortina da água para o painel ao fundo da empena do imovel vizinho.
Esta desativado desde maio de 2017.`,
    Execucao: true,
    DataInauguracao: `06/2006`,
    Latitude: `-22.8461795`,
    Longitude: `-43.324474`,
};

export const ChafarizdaPracaJoaoBerchemman_AdilsonRoquedosSantos: Obra = {
    ID: 898,
    Artistas: [artistas.AdilsonRoquedosSantos],
    Titulo: `Chafariz da Praça João Berchemman`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Chafariz`,
    Material: `Peça em concreto revestido por azulejo`,
    Descricao: `Trata-se de um Chafariz circular revestido com azulejo azul com um grande jorro central e outros laterais, ocupando a área central da praça.
Desativado desde o ano de 2014`,
    Execucao: true,
    DataInauguracao: `05/2008`,
    Latitude: `-22.8251245`,
    Longitude: `-43.3118685`,
};

export const AmuradadoSantuariodaPenha_Desconhecida: Obra = {
    ID: 900,
    Artistas: [artistas.Desconhecida],
    Titulo: `Amurada do Santuário da Penha`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `amuradas`,
    Material: `Tijolo com argamassa`,
    Descricao: `Cosntrução para contenção do terreno na via que dá aceesso a praça dos Romeiros.`,
    Execucao: true,
    DataInauguracao: ``,
    Latitude: `-22.8424434`,
    Longitude: `-43.2778694`,
};

export const FontedoSantuariodaPenha_Desconhecida: Obra = {
    ID: 901,
    Artistas: [artistas.Desconhecida],
    Titulo: `Fonte do Santuário da Penha`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `fonte`,
    Material: `Peça em ferro fundido`,
    Descricao: `Bicas de ferro no conjunto de 6 ( seis peças) espalhadas no largo dos Romeiros.`,
    Execucao: true,
    DataInauguracao: ``,
    Latitude: `-22.8424434`,
    Longitude: `43.2778694`,
};

export const CoretodoSantuariodePenha_Desconhecida: Obra = {
    ID: 902,
    Artistas: [artistas.Desconhecida],
    Titulo: `Coreto do Santuário de Penha`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Coreto`,
    Material: `Peça de Madeira`,
    Descricao: `Construção octogonal, em madeira sobre embasamento em alvenaria de pedras expostas, com escada de acesso lateral.`,
    Execucao: true,
    DataInauguracao: `09/1907`,
    Latitude: `-22.8424924`,
    Longitude: `-43.2779846`,
};

export const AoPolicialMilitar_Desconhecida: Obra = {
    ID: 903,
    Imagem: 'AoPolicialMilitar_Desconhecida.jpg',
    Artistas: [artistas.Desconhecida],
    Titulo: `Ao Policial Militar`,
    Classificacao: 'perene',
    Categoria: 'personalidades',
    TipologiaObra: `Estátua`,
    Material: `Peça em bronze com pedestal revestido de granito`,
    Descricao: `Inaugurado na década de 1990 e reinaugurado em 2006 no calçadão da Penha.
A homenagem foi uma iniciativa dos moradores da Leopoldina aos soldados do 16º Batalhão da Policia Militar que morreram em combate.`,
    Execucao: true,
    DataInauguracao: `1990`,
    Latitude: `-22.8422422`,
    Longitude: `-43.2778349`,
    Remocao: true,
    DataRealocacao: '2006',
    Realocacao: true,
    ZonaRealocacao: 'Norte',
    BairroRealocacao: 'Penha',
    PontoDeReferenciaorealocacao: 'Av. Bras de Pina',
    LatitudeRealocacao: '-22.8421743',
    LongitudeRealocacao: '-43.2778422',
    Fatos: [new Fato('', '', 'Propriedade', 'Pública', [], 'Rio de Janeiro')],
};

export const PorticoMonumentaldoSantuariodaPenha_Desconhecida: Obra = {
    ID: 904,
    Artistas: [artistas.Desconhecida],
    Titulo: `Pórtico Monumental do Santuário da Penha`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Portal`,
    Material: `Peça em argamassa`,
    Descricao: `Monumental construção composta por quatro grandes colunas onde se sustentam esculturas religiosas na duas centrais e uma nas outras restantes. O conjunto representa o patrono da Irmandade.`,
    Execucao: true,
    DataInauguracao: `09/1907`,
    Latitude: `-22.8424434`,
    Longitude: `-43.2778694`,
};

export const ArcosdaPenha_PedroPaulinoGuimaraes: Obra = {
    ID: 905,
    Artistas: [artistas.PedroPaulinoGuimaraes],
    Titulo: `Arcos da Penha`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Construção`,
    Material: `Peça em metal`,
    Descricao: `Conjunto de estruturas de ferro pintadas de vermelho, que percorre toda a extensão da Rua dos Romeiros em direção ao Santuário da Penha, instalado pelo projeto Rio-Cidade da Penha.`,
    Execucao: true,
    DataInauguracao: `03/1996`,
    Latitude: `-22.8423009`,
    Longitude: `-43.2778684`,
};

export const OratorioaSaoJorgedaPenha_Desconhecida: Obra = {
    ID: 906,
    Artistas: [artistas.Desconhecida],
    Titulo: `Oratório à São Jorge da Penha`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Oratório`,
    Material: `Peça de tijolo com argamassa`,
    Descricao: `Pequeno oratório de alvenaria revestido por azulejos.`,
    Execucao: true,
    DataInauguracao: ``,
    Latitude: `-22.8368542`,
    Longitude: `-43.2781015`,
};

export const MarcodeVilaKosmos_Desconhecida: Obra = {
    ID: 907,
    Artistas: [artistas.Desconhecida],
    Titulo: `Marco de Vila Kosmos`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Marco`,
    Material: `Peça em ferro fundido`,
    Descricao: `Trata-se de parte de um poste provavelmente de gás, reconhecido pelos moradores como um marco do bairro e de sua ocupação.`,
    Execucao: true,
    DataInauguracao: ``,
    Latitude: `-22.8507802`,
    Longitude: ``,
};

export const MonsenhorAlvesdaRocha_Desconhecida: Obra = {
    ID: 909,
    Artistas: [artistas.Desconhecida],
    Titulo: `Monsenhor Alves da Rocha`,
    Classificacao: 'perene',
    Categoria: 'personalidades',
    TipologiaObra: `Busto`,
    Material: `Peça em bronze`,
    Descricao: `Homenagem ao paroco da igreja que durante 40 anos se dedicou a comunidade.`,
    Execucao: true,
    DataInauguracao: `10/1953`,
    Latitude: `-22.8424434`,
    Longitude: `-43.2778694`,
    Fatos: [new Fato('data', 'data', 'fato', 'descrição', [], 'cidade')],
};

export const QuintinoBocaiuvanobairrodeQuintino_JoseBranquinho: Obra = {
    ID: 910,
    Artistas: [artistas.JoseBranquinho],
    Titulo: `Quintino Bocaiúva no bairro de Quintino`,
    Classificacao: 'perene',
    Categoria: 'personalidades',
    TipologiaObra: `busto`,
    Material: `Peça em bronze e pedestal de concreto`,
    Descricao: `Homenagem ao patrono e morador do bairro. Esta representado de acordo com uma pintura de seu retrato na escola do bairro.`,
    Execucao: true,
    DataInauguracao: `09/2012`,
    Latitude: `-22.8890419`,
    Longitude: `-43.3200678`,
};

export const AOrlandoLeite_VeraLuciaCardim: Obra = {
    ID: 911,
    Artistas: [artistas.VeraLuciaCardim],
    Titulo: `À Orlando Leite`,
    Classificacao: 'perene',
    Categoria: 'personalidades',
    TipologiaObra: `medalhão`,
    Material: `Monolitico de concreto  com placa de bronze`,
    Descricao: `O monolito na entrada identifica o<patrono do parque, pai do Deputado Jorge Leite, que por sua iniciativa junto ao prefeito Chagas Freitas construiu o parque.`,
    Execucao: true,
    DataInauguracao: `10/1982`,
    Latitude: `-22.8848324`,
    Longitude: `-43.3275269`,
};

export const ChafarizdaPracaAnaLima_MarthaSophia: Obra = {
    ID: 895,
    Artistas: [artistas.MarthaSophia],
    Titulo: `Chafariz da Praça Ana Lima`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Chafariz`,
    Material: `Peça em concreto armado`,
    Descricao: `Chafariz de jorro de água e lago coberto, com um jorro central e quatorze outros no entorno.
Desativado desde maio de 2017.`,
    Execucao: true,
    DataInauguracao: `06/2005`,
    Latitude: `-22.8296732`,
    Longitude: `-43.3281488`,
};

export const CoretodeQuintino_Desconhecida: Obra = {
    ID: 913,
    Artistas: [artistas.Desconhecida],
    Titulo: `Coreto de Quintino`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Construção`,
    Material: `Peça em ferro fundido e embasamento de argamassa revestido por blocos de granito`,
    Descricao: `Construção octogonal, sobre embasamento de alvenaria de pedras expostas, onde se abrem janelas, com escada de oito de graus, cercada por gradil em ferro fundido, e cobertura em chapas de alumínio.
Esse coreto foi construido pelos negociantes da localidade.`,
    Execucao: true,
    DataInauguracao: `02/1917`,
    Latitude: `-22.8890419`,
    Longitude: `-43.3200678`,
};

export const LampadariodoTerracodaQuintadaBoaVista_Desconhecida: Obra = {
    ID: 843,
    Artistas: [artistas.Desconhecida],
    Titulo: `Lampadário do Terraço da Quinta da Boa Vista`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `lampadário`,
    Material: `Peça em ferro fundido`,
    Descricao: `Poste em ferro fundido com detalhe as esculturas de dragões com uma( 1) luminária.`,
    Execucao: true,
    DataInauguracao: `10/1910`,
    Latitude: `-22.9055362`,
    Longitude: `-43.2249964`,
};

export const MuraldaPracadoPatriarca_Desconhecida: Obra = {
    ID: 916,
    Artistas: [artistas.Desconhecida],
    Titulo: `Mural da Praça do Patriarca`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Mural`,
    Material: `Peça em concreto armado`,
    Descricao: `Mural de concreto com o nome da praça em baixo relevo construído para dividir os espaços da praça entre a concha acústica e a área de<em>play ground</em>,`,
    Execucao: true,
    DataInauguracao: `03/1977`,
    Latitude: `-22.8784709`,
    Longitude: `-43.3410342`,
};

export const EsculturaIdoParqueMadureira_MarliMazeredo: Obra = {
    ID: 917,
    Artistas: [artistas.MarliMazeredo],
    Titulo: `Escultura I do Parque Madureira`,
    Classificacao: 'perene',
    Categoria: 'sublimidade',
    TipologiaObra: `Escultura`,
    Material: `Peça em resina`,
    Descricao: `Escultura abstrata pintada na cor branca`,
    Execucao: true,
    DataInauguracao: `01/2012`,
    Latitude: `-22.861709`,
    Longitude: `-43.3467425`,
};

export const EsculturaIIdoParquedeMadureira_MarliMazeredo: Obra = {
    ID: 918,
    Artistas: [artistas.MarliMazeredo],
    Titulo: `Escultura II do Parque de Madureira`,
    Classificacao: 'perene',
    Categoria: 'sublimidade',
    TipologiaObra: `Escultura`,
    Material: `Peça em resina`,
    Descricao: `Escultura abstrata policromada`,
    Execucao: true,
    DataInauguracao: `01/2012`,
    Latitude: `-22.8671551`,
    Longitude: `-43.3420364`,
};

export const MuraldoParqueMadureira_RuyRezende: Obra = {
    ID: 919,
    Artistas: [artistas.RuyRezende],
    Titulo: `Mural do Parque Madureira`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Monolito`,
    Material: `Peça em concreto armado`,
    Descricao: `Grande monolitico com o nome do parque em letras vazadas, instalada nos acessos ao parque.`,
    Execucao: true,
    DataInauguracao: `06/2012`,
    Latitude: `-22.861709`,
    Longitude: `-43.3467425`,
};

export const PaineldoJongoeSamba_LauraTaves: Obra = {
    ID: 920,
    Artistas: [artistas.LauraTaves],
    Titulo: `Painel do Jongo e Samba`,
    Classificacao: 'perene',
    Categoria: 'sublimidade',
    TipologiaObra: `Mosaico`,
    Material: `Peças de azulejos`,
    Descricao: `Dois painéis de azulejos decorados, com 80 metros de comprimento, com as inscrições Eu Sambo, Eu Jongo e Eu Rio. O monumento foi inaugurado no dia do aniversário de 399 anos do bairro de Madureira.`,
    Execucao: true,
    DataInauguracao: `05/2012`,
    Latitude: `-22.8824885`,
    Longitude: `-43.3418215`,
};

export const OratorioaSaoJorgedeMadureira_Desconhecida: Obra = {
    ID: 921,
    Artistas: [artistas.Desconhecida],
    Titulo: `Oratório à São Jorge de Madureira`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Oratório`,
    Material: `Peça em concreto com imagem em resina`,
    Descricao: `Pequena construção com a inagem do Santo Guerreiro.`,
    Execucao: true,
    DataInauguracao: ``,
    Latitude: `-22.8647621`,
    Longitude: `-43.3470576`,
};

export const OratorioaSaoJorgedeTuriacu_Desconhecida: Obra = {
    ID: 922,
    Artistas: [artistas.Desconhecida],
    Titulo: `Oratório à São Jorge de Turiaçu`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Oratório`,
    Material: `Peça em concreto com imagem`,
    Descricao: `Pequeno oratorio com a imagem do santo guerreiro`,
    Execucao: true,
    DataInauguracao: ``,
    Latitude: `-22.8626704`,
    Longitude: `-43.3424094`,
};

export const ChafarizdoParqueMadureira_RuyRezende: Obra = {
    ID: 923,
    Artistas: [artistas.RuyRezende],
    Titulo: `Chafariz do Parque Madureira`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Chafariz`,
    Material: `Peça em concreto armado`,
    Descricao: `Conjuntos de Chafarizes com um jorro central instalados ao longo do parque para anemizar e embelezar o espaço. Os lagos perfazem um total dede 1.650m². São 05 (cinco) fontes, fornecidas pela Empresa Rain Bird com jato d´água previsto para a altura de 2,70m e 1,50 de altura quando em funcionamento.`,
    Execucao: true,
    DataInauguracao: `06/2012`,
    Latitude: `-22.8668115`,
    Longitude: `-43.342697`,
};

export const CascataIdoParqueMadureira_RuyRezende: Obra = {
    ID: 924,
    Artistas: [artistas.RuyRezende],
    Titulo: `Cascata I do Parque Madureira`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Chafariz`,
    Material: `Peça em concreto armado`,
    Descricao: `Construção com letras vazadas identificando a entrada do parque.`,
    Execucao: true,
    DataInauguracao: `06/2012`,
    Latitude: `-22.8646589`,
    Longitude: `-43.3443277`,
};

export const CascataIIdoParqueMadureira_RuyRezende: Obra = {
    ID: 925,
    Artistas: [artistas.RuyRezende],
    Titulo: `Cascata II do Parque Madureira`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Cascata`,
    Material: `Peça em concreto armado`,
    Descricao: `Cascata construida com queda d'agua em escada e em jorro para utilização dos frequentadores, com lago seco.`,
    Execucao: true,
    DataInauguracao: `10/2015`,
    Latitude: `-22.861709`,
    Longitude: `-43.3467425`,
};

export const OratorioaSaoJorgedeQuintino_Desconhecida: Obra = {
    ID: 926,
    Artistas: [artistas.Desconhecida],
    Titulo: `Oratório à São Jorge de Quintino`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Oratório`,
    Material: `Peça em metal com imagem de resina`,
    Descricao: `Imagem ao Santo Guerreiro próximo a Igreja em sua homenagem no bairro.`,
    Execucao: true,
    DataInauguracao: ``,
    Latitude: `-22.8928722`,
    Longitude: `-43.3228252`,
};

export const MarcoàPrimeirafotonaÀmericadoSul_Daguerreotipo_JairdeSouza_AdoAzevedo: Obra = {
    ID: 927,
    Artistas: [artistas.JairdeSouza, artistas.AdoAzevedo],
    Titulo: `Marco à Primeira foto na Àmerica do Sul - Daguerreotipo`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Marco`,
    Material: `Peça em aço`,
    Descricao: `Marco em referência a primeira foto tirada na Àmerica Latina feita pelo frances Louis Comte em 17 de janeiro de 1840 utilizando a técnica fotográfica daguerreotipia, cujo nome deriva de Louis Daguerre inventor desse processo fotográfico. O monumento foi idealizado por Milton Guran e patrocinado pela empresaAlstom.
Com a Olimpíada do Rio, a cidade de Paris presenteou à cidade do Rio de Janeiro com esse marco com a imagem tirada do desaparecido Hotel Pharoux, dentro das comemorações do 200 anos da vinda da Missão Francesa ao Brasil. A notícia da 1º foto foi publicada três dias depois na edição vespertina do Jornal do Commercio que era na época o principal diário carioca.
O daguerreotipo e método da imagem obtida numa camara escura, fixada numa folha de prata sobre uma placa de cobre. A foto original de Comte tinha 10 por 8 centimentos. `,
    Execucao: true,
    DataInauguracao: `09/2016`,
    Latitude: `-22.9034907`,
    Longitude: `-43.1736409`,
};

export const MarcoAneisOlimpicos_Desconhecida: Obra = {
    ID: 928,
    Artistas: [artistas.Desconhecida],
    Titulo: `Marco  Anéis Olimpicos`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Marco`,
    Material: `Peça em alumínio`,
    Descricao: `Doação da Grâ-Bretenha à Cidade, os arcos decoraram em 2012 a Ponmte Tyne, em Newcastle, uma das sedes das disputas de futebol.
Feito em alumínio pesa cerca de 4 toneladas e mede 25 metros de comprimento e 12 de altura. O transporte para o Rio foi realizado com apoio da Marinha do Brasil e demorou 20 dias de viagem.`,
    Execucao: true,
    DataInauguracao: `05/2016`,
    Latitude: `-22.8645234`,
    Longitude: `-43.3442527`,
};

export const JogoAmistosodeFutebolentreBrasileChina_HuangJian: Obra = {
    ID: 929,
    Artistas: [artistas.HuangJian],
    Titulo: `Jogo Amistoso de Futebol entre Brasil e China`,
    Classificacao: 'perene',
    Categoria: 'sublimidade',
    TipologiaObra: `Escultura`,
    Material: `Peça em bronze e pedestal de metal`,
    Descricao: `O monumento foi uma doação da Cidade de Pequim à Cidade do Rio de Janeiro. na comemoração do 30º aniversário do relacionamento das cidades irmãs. Retrata grandes ícones de ambos os países. Da China o Imperador Han wu, pioneiro da Rota da Seda, o primeiro registro de um jogo similar ao futebol que data do período entre os séculos 220 a.c. e 206 a.c., exatamente o da Dinastia Wu. Do outro o Rei Pelé.
O conjunto escultórico pesa cerca de três toneladas e veio de transporte marítimo para o Brasil durante o período da Olimpiada do Rio.`,
    Execucao: true,
    DataInauguracao: `08/2016`,
    Latitude: `-22.9729393`,
    Longitude: `-43.3712034`,
};

export const EsculturaLagoa_MaritzaOrleans: Obra = {
    ID: 930,
    Artistas: [artistas.MaritzaOrleans],
    Titulo: `Escultura Lagoa`,
    Classificacao: 'perene',
    Categoria: 'sublimidade',
    TipologiaObra: `Escultura`,
    Material: `Peça em aço corten`,
    Descricao: `Escultura com as linhas dos morros da Cidade.`,
    Execucao: true,
    DataInauguracao: `08/2016`,
    Latitude: `-22.9746841`,
    Longitude: `-43.2182073`,
};

export const HonorioGurgel_ChristinaMotta: Obra = {
    ID: 931,
    Artistas: [artistas.ChristinaMotta],
    Titulo: `Honório Gurgel`,
    Classificacao: 'perene',
    Categoria: 'personalidades',
    TipologiaObra: `busto`,
    Material: `Peça em bronze e pedestal de concreto`,
    Descricao: `A homenagem ao patrono do bairro, o décimo prefeito da cidade, foi erigido poriniciativa da Prefeitura Municipal.`,
    Execucao: true,
    DataInauguracao: `07/2012`,
    Latitude: `-22.8384193`,
    Longitude: `-43.362444`,
};

export const CoelhoNeto_JoasPereiradosPassos: Obra = {
    ID: 932,
    Artistas: [artistas.JoasPereiradosPassos],
    Titulo: `Coelho Neto`,
    Classificacao: 'perene',
    Categoria: 'personalidades',
    TipologiaObra: `busto`,
    Material: `Peça em bronze e pedestal de granito`,
    Descricao: `É uma homenagem ao patrono do bairro.Originalmente existiu um busto de autoria de Rodolfo Pinto do Couto, tendo sido inaugurado na década de 1920, furtado nos anos de 1980 e foi substituído pelo atual em 2011.`,
    Execucao: true,
    DataInauguracao: `04/2011`,
    Latitude: `-22.8309627`,
    Longitude: `-43.3450077`,
};

export const CoretodeVigarioGeral_Desconhecida: Obra = {
    ID: 933,
    Artistas: [artistas.Desconhecida],
    Titulo: `Coreto de Vigário Geral`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Construção`,
    Material: `Metal em ferro fundido e embasamento de concreto`,
    Descricao: `Esse coreto foi inaugurado inicialmente na Praça Saens Peña, em 30 de abril de 1911, pelo Prefeito Bento Ribeiro. Desmontado devido a obra do Metro, foi reinaugurado nessa praça em 20 de setembro de 1977.
Coreto octogonal, sobre embasamento em concreto, com leve estrutura em ferro fundido e cobertura em folha de zinco.`,
    Execucao: true,
    DataInauguracao: `04/1911`,
    Latitude: `-22.8076708`,
    Longitude: `-43.3075619`,
};

export const CoretodeRicardodeAlbuquerque_CeliaLamelle: Obra = {
    ID: 934,
    Artistas: [artistas.CeliaLamelle],
    Titulo: `Coreto de Ricardo de Albuquerque`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Construção`,
    Material: `Peça em ferro pintado`,
    Descricao: `Construção em estrutura de ferro, elevando-se sobre o piso cimentado da praça.`,
    Execucao: true,
    DataInauguracao: `01/2002`,
    Latitude: `-22.839608`,
    Longitude: `-43.3992105`,
};

export const Miscigenacao_RaphCyriloDias: Obra = {
    ID: 935,
    Imagem: 'Miscigenacao_RaphCyriloDias.jpg',
    Artistas: [artistas.RaphCyriloDias],
    Titulo: `Miscigenação`,
    Classificacao: 'perene',
    Categoria: 'sublimidade',
    TipologiaObra: `Escultura`,
    Material: `Arvore Morta`,
    Descricao: `Escultura talhada no tronco de uma jaqueira morta, com três metros de altura, representando uma cabeça de homem,
    com traços indígenas, completada por um corpo de mulher. Na base lê-se inscrição: As cores de uma nação não são feitas das
    peles, mas do amor que a ela seu povo entrega.`,
    Execucao: true,
    DataInauguracao: `04/1992`,
    Zona: 'Norte',
    Bairro: 'Pavuna',
    PontoDeReferencia: 'Av. Crisóstomo Pimentel de Oliveira',
    Latitude: `-22.8143343`,
    Longitude: `-43.3805928`,
    Fatos: [new Fato('', '', 'Propriedade', 'Pública', [], 'Rio de Janeiro')],
};

export const DomHelderCamara_OttoDumovich: Obra = {
    ID: 936,
    Artistas: [artistas.OttoDumovich],
    Titulo: `Dom Hélder Câmara`,
    Classificacao: 'perene',
    Categoria: 'personalidades',
    TipologiaObra: `Escultura`,
    Material: `Peça em bronze com pedestal de mármore`,
    Descricao: `A estátua foi uma iniciativa do pároco da Igreja São Benedito, em comemoração aos 100 anos do nascimento do Arcebispo Emérito, patrocinada pela Prefeitura da Cidade.`,
    Execucao: true,
    DataInauguracao: `11/2011`,
    Latitude: `-22.8814586`,
    Longitude: `-43.2935571`,
};

export const OratorioaSaoJorgedePilares_Desconhecida: Obra = {
    ID: 937,
    Artistas: [artistas.Desconhecida],
    Titulo: `Oratório à São Jorge de Pilares`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Oratório`,
    Material: `Peça em resina`,
    Descricao: `Construção em metal sobre uma coluna de concreto com a imagem em resina.`,
    Execucao: true,
    DataInauguracao: `04/2016`,
    Latitude: `-22.8814586`,
    Longitude: `-43.2935571`,
};

export const AlmiranteeViscondedeInhauma_Desconhecida: Obra = {
    ID: 938,
    Artistas: [artistas.Desconhecida],
    Titulo: `Almirante e Visconde de Inhaúma`,
    Classificacao: 'perene',
    Categoria: 'personalidades',
    TipologiaObra: `Busto`,
    Material: `Peça em bronze e pedestal de concreto`,
    Descricao: `O busto foi uma doação da Marinha do Brasil. Foi inaugurado na praça principal de Inhaúma como homenagem ao herói que deu nome ao bairro.`,
    Execucao: true,
    DataInauguracao: `05/2012`,
    Latitude: `-22.8725534`,
    Longitude: `-43.280841`,
};

export const NossaSenhoradaApresentacao_Desconhecida: Obra = {
    ID: 940,
    Imagem: 'NossaSenhoradaApresentacao_Desconhecida.jpg',
    Artistas: [artistas.Desconhecida],
    Titulo: `Nossa Senhora da Apresentação`,
    Classificacao: 'perene',
    Categoria: 'representaçao religiosa',
    TipologiaObra: `Escultura`,
    Material: `Peça em argamassa armada policromada`,
    Descricao: `A imagem inicialmente foi instalada no Largo da Estrada da Água Grande e transferida com o projeto Rio Cidade
    Irajá. Trata-se de uma homenagem dos moradores do bairro a padroeira do bairro por ocasião do jubileu de prata do Padre
    Luiz Pereira Machado pároco da Igreja na época.`,
    Execucao: true,
    DataInauguracao: `01/1982`,
    Zona: 'Norte',
    Bairro: 'Irajá',
    PontoDeReferencia: 'Praça Nossa Senhora da Apresentação',
    Latitude: `-22.8309072`,
    Longitude: `-43.3263725`,
    Fatos: [new Fato('', '', 'Propriedade', 'Pública', [], 'Rio de Janeiro')],
};

export const OratoriodeNossaSenhoraAparecidadeIraja_Desconhecida: Obra = {
    ID: 941,
    Artistas: [artistas.Desconhecida],
    Titulo: `Oratório de Nossa Senhora Aparecida de Irajá`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Oratório`,
    Material: `Peça em resina`,
    Descricao: `Trata-se de um pequeno oratório em metal e vidro, oferecido pelos moradores do bairro.`,
    Execucao: true,
    DataInauguracao: `01/2007`,
    Latitude: `-22.8424016`,
    Longitude: `-43.3256744`,
};

export const BicadaMulatadaPavuna_Desconhecida: Obra = {
    ID: 942,
    Artistas: [artistas.Desconhecida],
    Titulo: `Bica da Mulata da Pavuna`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Escultura`,
    Material: `Peça em bronze e pedestal de concreto`,
    Descricao: `Réplica de uma escultura francesa, importante na história da formação do bairro. Foi instalada em bronze no bairro devido a disputa que existia entre o bairro e o Município de Belford Roxo. A peça original em ferro fundido esta no Município vizinho desde a cessão de uso concedida pelo Prefeito Cesar Maia.`,
    Execucao: true,
    DataInauguracao: `07/2012`,
    Latitude: `-22.8065579`,
    Longitude: `-43.364268`,
};

export const LiberdadeEstatuadaLiberdade_FredericAugustoBartholdi: Obra = {
    ID: 943,
    Artistas: [artistas.FredericAugustoBartholdi],
    Titulo: `Liberdade, Estátua da Liberdade`,
    Classificacao: 'perene',
    Categoria: 'sublimidade',
    TipologiaObra: `Escultura`,
    Material: `Peça em zinco`,
    Descricao: `A escultura é um protótipo da famosa estátua americana. Com a análise do material da escultura foi constatada que a peça tem 99% de zinco na confecção.`,
    Execucao: true,
    DataInauguracao: `01/1964`,
    Latitude: `-22.856028`,
    Longitude: `-43.4925693`,
};

export const PainelaosExpedicionariosdeBangu_Desconhecida: Obra = {
    ID: 944,
    Artistas: [artistas.Desconhecida],
    Titulo: `Painel aos Expedicionários de Bangú`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Mosaico`,
    Material: `Peça em concreto revestido por azulejo`,
    Descricao: `Painel de azulejos com o mapa da ofensiva brasileira na Itália e o símbolo da FEB. Erguido por iniciativa do povo, do comércio e da indústria da região de Bangu.`,
    Execucao: true,
    DataInauguracao: `05/1983`,
    Latitude: `-22.881131`,
    Longitude: `-43.4643382`,
};

export const MarcoaCopernico_Archi5ArquitetosAssociados: Obra = {
    ID: 945,
    Artistas: [artistas.Desconhecida],
    Titulo: `Marco à Copérnico`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Marco`,
    Material: `Peça em concreto armado`,
    Descricao: `Archi 5 Arquitetos Associados Ltda - Colunas de concreto espaçadas, que em função do sol e  sombra  permite observar o deslocamento do sol através da sombra exposta.`,
    Execucao: true,
    DataInauguracao: `09/1996`,
    Latitude: `-22.8061779`,
    Longitude: `-43.364476`,
};

export const Marco6daFazendaImperialdeSantaCruz_Desconhecida: Obra = {
    ID: 947,
    Artistas: [artistas.Desconhecida],
    Titulo: `Marco 6 da Fazenda Imperial  de Santa Cruz`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Marco`,
    Material: `Bloco de granito esculpido`,
    Descricao: `Marco que limitava a Estrada Real de Santa Cruz, antigo Caminho dos Jesuítas, no percurso de onze léguas entre o Morro do Castelo e o Palácio Imperial de Santa Cruz, antiga Fazenda dos Jesuítas, hoje sede do Batalhão Villagran Cabrita.`,
    Execucao: true,
    DataInauguracao: `01/1826`,
    Latitude: `-22.876234`,
    Longitude: `-43.4551747`,
};

export const MarcodoIVCentenario_Desconhecida: Obra = {
    ID: 948,
    Artistas: [artistas.Desconhecida],
    Titulo: `Marco do IV Centenário`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Marco`,
    Material: `Peça em concreto armado`,
    Descricao: `Marco identificando o ano e a festividade de sua construção. É uma homenagem da Associação de Amigos do Barata, da Adminstração Regional e dos Alunos do IPG. A praça IC Centenario é uma área doada pelo governo federal para a Guanabara.`,
    Execucao: true,
    DataInauguracao: `12/1965`,
    Latitude: `-22.8982983`,
    Longitude: `-43.4406179`,
};

export const MarcoVilaTerraBrasil_Desconhecida: Obra = {
    ID: 949,
    Artistas: [artistas.Desconhecida],
    Titulo: `Marco Vila Terra Brasil`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Marco`,
    Material: `Bloco de granito com placa de bronze`,
    Descricao: `Marco da construção de casas populares no bairro conhecido comoVila Terra Brasil.`,
    Execucao: true,
    DataInauguracao: `11/1950`,
    Latitude: `-22.8822241`,
    Longitude: `-43.4832401`,
};

export const SerafimMoreira_MiguelPastor: Obra = {
    ID: 950,
    Artistas: [artistas.MiguelPastor],
    Titulo: `Serafim Moreira`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Escultura`,
    Material: `Peça em bronze e pedestal de concreto`,
    Descricao: `É uma homenagem ao benfeitor do bairro Cosmos. A Igreja de Santa Sofia foi construída com o patrocínio do Comendador, como pagamento de uma promessa.`,
    Execucao: true,
    DataInauguracao: `10/1968`,
    Latitude: `-22.9118389`,
    Longitude: `-43.6106968`,
};

export const PadreMiguel_PauloMazzucchelli: Obra = {
    ID: 951,
    Artistas: [artistas.PauloMazzucchelli],
    Titulo: `Padre Miguel`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Escultura`,
    Material: `Peça em bronze e pedestal de granito`,
    Descricao: `Homenagem ao Monsenhor Miguel de Santa Maria Mochon, 1º Vigário de Realengo, por pleito de seus paroquianos.`,
    Execucao: true,
    DataInauguracao: `09/1948`,
    Latitude: `-22.8780121`,
    Longitude: `-43.4342352`,
};

export const CarlosAlbertodaCruzWenceslau_Desconhecida: Obra = {
    ID: 952,
    Imagem: 'CarlosAlbertodaCruzWenceslau_Desconhecida.jpg',
    Artistas: [artistas.Desconhecida],
    Titulo: `Carlos Alberto da Cruz Wenceslau`,
    Classificacao: 'perene',
    Categoria: 'personalidades',
    TipologiaObra: `Busto`,
    Material: `Peça em argamassa e pedestal revestido com granito`,
    Descricao: `Homenagem da Universidade Castelo Branco e do Lions Clube de Realengo.`,
    Execucao: true,
    DataInauguracao: `11/2009`,
    Zona: 'este',
    Bairro: 'Bangú',
    PontoDeReferencia: 'Praça Padre Miguel',
    Latitude: `-22.8780552`,
    Longitude: `-43.4347683`,
    Fatos: [new Fato('', '', 'Propriedade', 'Pública', [], 'Rio de Janeiro')],
};

export const DomingosdaGuia_ClecioRegis: Obra = {
    ID: 953,
    Imagem: 'DomingosdaGuia_ClecioRegis.jpg',
    Artistas: [artistas.ClecioRegis],
    Titulo: `Domingos da Guia`,
    Classificacao: 'perene',
    Categoria: 'personalidades',
    TipologiaObra: `Busto`,
    Material: `Peça em bronze com pedestal revestido de granito`,
    Descricao: `Homenagem ao jogador mais famoso doBangú Atlético Clube. Enaltecendo seu time, o busto está vestido com a sua camisa.
A inauguração foi com a presença de Ademir da Guia, filho de Domingos para comemorar o centenário de Bangu.
Na placa original rende homenagem "Ao Divino Mestre, a Prefeitura e aos moraoores de Bangu, a homenagem ao maior zagueiro de todos os tempos, Domingos da Guia. Jagador de toque refinado, que levou o futebol brasileiro alem dos limites do pais. Foi quatro vezes campeão carioca, campeão argentino e uruguaio, conquistou a Copa Rocha."`,
    Execucao: true,
    DataInauguracao: `04/2004`,
    Zona: 'Oeste',
    Bairro: 'Bangú',
    PontoDeReferencia: 'Calçadão de Bangú',
    Latitude: `-22.8750786`,
    Longitude: `-43.4649342`,
    Fatos: [
        new Fato('', '', 'Propriedade', 'Pública', [], 'Rio de Janeiro'),
        new Fato('', '', 'Fundição/Atelier', 'FEB - Fundição e Esculturas em Bronze', [], 'Rio de Janeiro'),
    ],
};

export const GuilhermedaSilveira_LeonardoLima: Obra = {
    ID: 954,
    Artistas: [artistas.LeonardoLima],
    Titulo: `Guilherme da Silveira`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Escultura`,
    Material: `Peça em bronze e pedestal de granito`,
    Descricao: `A homenagem foi uma iniciativa dos amigos e dos operários da Companhia Progresso Industrial o Brasil. Na inauguração falou em nome dos operários Sr. Guilherma da Silveira Filho eo Sr. Miguel Pedro em nome da população de Bangu e Sr. Borges Ramos falou sobre sua personalidade.`,
    Execucao: true,
    DataInauguracao: `02/1944`,
    Latitude: `-22.8750578`,
    Longitude: `-43.4563682`,
};

export const AsDozeCriancasdeRealengo_ChristinaMotta: Obra = {
    ID: 955,
    Artistas: [artistas.ChristinaMotta],
    Titulo: `Às Doze Crianças de Realengo`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Escultura`,
    Material: `Peça em bronze`,
    Descricao: `A homenagem aos 12 adolescente vitimas (Ana Carolina Pacheco da Silva, Bianca Rocha Tavares, Gesssica Guedes Pereira, Igor Moraes da Silva, Karine Lorraine Chagas de Oliveira, Larissa dos Santos Atanazio, Laryssa Silva Martins, Luiza Paula da Silveira Machado, Mariana Rocha da Souza, Milena dos Santos Nascimento, Rafael Pereira da Silva, Samira Pires Ribeiro) dachacina ocorrida em 7 de abril de 2011, por volta das 8h30min da manhã , na Escola Municipal Tarso da Silveira, O jovemWellington Menezes de Oliveira, de 23 anos, invadiu a escola armado com dois revolverese começou a disparar contra os alunos presentes. Quando foi interceptado por policiais, cometeu suicídio.A motivação do crime até hoje é incerta,`,
    Execucao: true,
    DataInauguracao: `09/2015`,
    Latitude: `-22.8839122`,
    Longitude: `-43.416879`,
};

export const ChafarizdoCalcadaodeBangu_PauloCase: Obra = {
    ID: 956,
    Artistas: [artistas.PauloCase],
    Titulo: `Chafariz do Calçadão de Bangú`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Chafariz`,
    Material: `Peça em concreto armado`,
    Descricao: `Conjunto de nove Chafarizes com um jorro de água central, instalados ao longo do calçadão, com o objetivo de amenizar a temperatura naquele centro comercial.
Adotado pela Associação Comercial de Bangu desde a sua instalação, o mesmo se encontra parado devido aos problemas nos equipamentos.
Desativado desde o ano de 2004.`,
    Execucao: true,
    DataInauguracao: `12/2002`,
    Latitude: `-22.8750769`,
    Longitude: `-43.4648757`,
};

export const ChafarizdaIgrejaSantaCecilia_reconstrucao__LuizVerdugo: Obra = {
    ID: 957,
    Artistas: [artistas.LuizVerdugo],
    Titulo: `Chafariz da Igreja Santa Cecilia ( reconstrução)`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Chafariz`,
    Material: `Peça em concreto armado`,
    Descricao: `Construção em concreto armado com um apoio central que sustenta duas bacias circulares, também em concreto, por onde escorre a água formando uma cascata. Inaugurado em 1965, projetado por Francisco Bolonha , foi demolido em 2002 e reconstruído em novembro de 2014, baseado em imagens fotográficas pelo arquiteto Luiz Verdugo.
Esta desativado desde maio de 2017.`,
    Execucao: true,
    DataInauguracao: `10/2014`,
    Latitude: `-22.8811454`,
    Longitude: `-43.4647114`,
};

export const BicadePedradeBangu_Desconhecida: Obra = {
    ID: 958,
    Artistas: [artistas.Desconhecida],
    Titulo: `Bica de Pedra de Bangú`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Fonte`,
    Material: `Bloco de granito esculpido`,
    Descricao: `Fonte de cantaria em formato quadrada com cerca de dois (2) metros de altura, que atendia ao abastecimento da população.
Desativado em data desconhecida`,
    Execucao: true,
    DataInauguracao: ``,
    Latitude: `-22.877268`,
    Longitude: `-43.4439798`,
};

export const OratorioaEscravaAnastaciaeNossaSenhoraAparecida_PedroAugusto_FernandodaSilvaAbreu: Obra = {
    ID: 959,
    Artistas: [artistas.PedroAugusto, artistas.FernandodaSilvaAbreu],
    Titulo: `Oratório a Escrava Anastácia e Nossa Senhora Aparecida ...`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Oratório`,
    Material: `Madeira com telhas de barro`,
    Descricao: `Oratório em homenagem à Padroeira do Brasil e a Escrava popular. A construção e o monumento foi solicitado pela Administradora Regional Marly Chaves de Souza da XII RA, Inhauma, apos abaixo assinado dos moradores que custearam e doaram a obra para a cidade. O abaixo assinado foi encabeçado pelo Padre Edson Shigrico Shiromiziu e moradores das Ruas Alcides de Oliveira e Detetive Lecok. A construção teve apoio do Srs Joaquim, Tuninho e família , diretores da JOAG Material de Construção Ltda.`,
    Execucao: true,
    DataInauguracao: `05/2003`,
    Latitude: `-22.8728649`,
    Longitude: `-43.2809601`,
};

export const GradildaUniversidadeFederaldoRiodeJaneiro_Desconhecida: Obra = {
    ID: 960,
    Artistas: [artistas.Desconhecida],
    Titulo: `Gradil da Universidade Federal do Rio de Janeiro`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Gradil`,
    Material: `Peça em ferro fundido`,
    Descricao: `Parte do gradil originario do Campo de Santana. Veio para o Brasil de navio em abril de 1876. Foi inaugurado em 1880 e transferido em data desconhecida para esse local.O gradil do Campo de Santana foi instalado em tres locais, o Parque Recanto do Trovador, no Açude Solidão e neste local na Av. Vescelau Braz.
Foi adquirida pelo governo imperial na Companhia Barborat de Hauts Fanaux de Val d'Osne.`,
    Execucao: true,
    DataInauguracao: `09/1880`,
    Latitude: `-22.951711`,
    Longitude: `-43.1753299`,
};

export const ManuelCaldeiradeAlvarenga_MaxGrossman: Obra = {
    ID: 961,
    Artistas: [artistas.MaxGrossman],
    Titulo: `Manuel Caldeira de  Alvarenga`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Escultura`,
    Material: `Peça e alegorias em bronze e pedestal de granito`,
    Descricao: `Monumento com estátua em tamanho natural, tendo no lado esquerdo, uma figura feminina com duas crianças no colo, simbolizando a família e outra simbolizando a justiça. Foi inaugurado com a presença do Presidente Juscelino Kubschek e do governador Negrão de Lima.`,
    Execucao: true,
    DataInauguracao: `09/1956`,
    Latitude: `-22.9030409`,
    Longitude: `-43.5681411`,
};

export const TelmoGoncalvesMaia_RuffoFanucchi: Obra = {
    ID: 962,
    Artistas: [artistas.RuffoFanucchi],
    Titulo: `Telmo Gonçalves Maia`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Escultura`,
    Material: `Peça em bronze e pedestal de granito`,
    Descricao: `A homenagem foi uma iniciativa de amigos e admiradores e inaugurado pelo prefeito Negrão de Lima`,
    Execucao: true,
    DataInauguracao: `07/1957`,
    Latitude: `-22.9045239`,
    Longitude: `-43.5733201`,
};

export const FilomenaDelCima_MiguelPastor: Obra = {
    ID: 963,
    Artistas: [artistas.MiguelPastor],
    Titulo: `Filomena Del Cima`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Escultura`,
    Material: `Peça em bronze e pedestal de concreto revestido de pastilha`,
    Descricao: `A homenagem partiu de seus familiares, cinco anos após a sua morte e doada à Cidade. A efígie desapareceu nos anos de 1990, permanecendo a construção no seu local original.`,
    Execucao: true,
    DataInauguracao: `05/1949`,
    Latitude: `-22.9012005`,
    Longitude: `-43.5443929`,
};

export const AAlimPedro_MiguelPastor: Obra = {
    ID: 964,
    Artistas: [artistas.MiguelPastor],
    Titulo: `À Alim Pedro`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Obelisco`,
    Material: `Peça em concreto revestida de pedra São Tomé`,
    Descricao: `Alim foi um ilustre morador do bairro, que recebeu a homenagem em um obelisco com sua efÍgie. Foi idealizada pela Engenheira Elza Osnorne, para ser um marco dos festejos dos 25 anos da formatura da turma da qual saíram inúmeros engenheiros da prefeitura, inclusive o ex prefeito. Apesar de ser homenagem em vida, os motivos que deram origem as homenagens, a engenheira Elza Osborne, procurou honrar no 14 DOE, da Secretaria de Obras. O viaduto  recebeu o nome do homenageado em 14 de novembro de 1958 e não teve uma inauguração solene. 
A efigie do homenageado em bronze foi furtada em outubro de 2017.`,
    Execucao: true,
    DataInauguracao: `01/1958`,
    Latitude: `-22.9067895`,
    Longitude: `-43.5655899`,
};

export const ManoelBranco_MiguelPastor: Obra = {
    ID: 965,
    Artistas: [artistas.MiguelPastor],
    Titulo: `Manoel Branco`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Escultura`,
    Material: `Peça em bronze e concreto`,
    Descricao: `O monumento foi inaugurado nos anos de 1950 e reinaugurado em 27 de março de 2014.O morador e comerciante do bairro e amigo do artista plástico.`,
    Execucao: true,
    DataInauguracao: ``,
    Latitude: `-22.9062168`,
    Longitude: `-43.5658263`,
};

export const ArthurAzevedo_MiguelPastor: Obra = {
    ID: 966,
    Artistas: [artistas.MiguelPastor],
    Titulo: `Arthur Azevedo`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Escultura`,
    Material: `Peça em bronze com pedestal de granito`,
    Descricao: `O monumento está situada em frente ao teatro em sua homenagem. Foi inaugurado junto com a praça das camélias, na presença do prefeito negrão de Lima, pelo Deputado Jose Talarico.`,
    Execucao: true,
    DataInauguracao: `04/1960`,
    Latitude: `-22.8984832`,
    Longitude: `-43.5635435`,
};

export const AAugustodeVasconcelos_MiguelPastor: Obra = {
    ID: 967,
    Artistas: [artistas.MiguelPastor],
    Titulo: `À Augusto de Vasconcelos`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Obelisco`,
    Material: `Peça em bronze e pedestal de granito`,
    Descricao: `Na homenagem ao senador originalmente existia a sua efigie numa placa em bronze fixada no pedestal que tem
    caracteristicas de um obelisco.`,
    Execucao: true,
    DataInauguracao: ``,
    Latitude: `-22.8941305`,
    Longitude: `-43.5361196`,
    Fatos: [new Fato('data', 'data', 'fato', 'descrição', [], 'cidade')],
};

export const FranciscoFreireAlemao_MiguelPastor: Obra = {
    ID: 968,
    Artistas: [artistas.MiguelPastor],
    Titulo: `Francisco Freire Alemão`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Monolito`,
    Material: `Peça em bronze com monolito revestida de pedra são tomé`,
    Descricao: `Foi inaugurado em 1967, foi deslocado do local original para a abertura de uma rua, dividindo a praça. Devido a um acidente automobilisco foi transferido o depósito em 2013 e reinstalado em 2015.
Monumento com dois blocos revestidos nos quais estão fixadas uma placa de bronze com a identificação e no outro lado a efígie do homenageado. Foi transferido para o depósito devido a um acidente automobilístico,
Em outubro de 2017 a placa em bronze com a efigie de Freire Alemão foi furtada.`,
    Execucao: true,
    DataInauguracao: `07/1967`,
    Latitude: `-22.9077435`,
    Longitude: `-43.5652324`,
};

export const AtenadeCampoGrande_Desconhecida: Obra = {
    ID: 969,
    Artistas: [artistas.Desconhecida],
    Titulo: `Atena de Campo Grande`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Escultura`,
    Material: `Peça em mármore de Carrara`,
    Descricao: `Escultura em mármore de Carrara representando de uma deusa grega.Até o inicio da década de 1930, parte da Estrada do Rio Jequiá que atualmente é ocupada pelo Batalhão da Polícia Militar era uma região de manguezal.
    Em 1939 , após parte daquela área ser aterrada, o Prefeito Henrique Dodsworth inaugurou o Posto Florestal e Viveiro de plantas.
    Durante vários anos, o Horto Florestal, como era chamado pelos moradores, administrado pela “Diretoria de Matas e Jardins” da Prefeitura, fornecia mudas para o plantio e reflorestamento da Ilha do Govenador.
    Ornamentavam a entrada duas esculturas, representando Hera e Hermes, que salvo engano estão atualmente na Gávea, próximo ao Planetário.`,
    Execucao: true,
    DataInauguracao: ``,
    Bairro: 'Campo Grande',
    PontoDeReferencia: 'Praça dos Estudantes',
    Latitude: `-22.9031297`,
    Longitude: `-43.5677675`,
    Fatos: [new Fato('', '', 'Propriedade', 'Pública', [], 'Rio de Janeiro')],
};

export const Laranja_GeorgeLopes_GeorgeGuerra: Obra = {
    ID: 970,
    Artistas: [artistas.GeorgeLopes, artistas.GeorgeGuerra],
    Titulo: `Laranja`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Escultura`,
    Material: `Chapa de aço sobre base de concreto`,
    Descricao: `Trata-se de uma escultura em aço pintado na cor laranja vazada criando uma forma de uma laranja. A obra custou 4 vezes o valor da escultura Prometeu, de Bruno Giorgi, avaliada em R$ 8mil`,
    ValorObra: 'R$ 36050,00',
    Execucao: true,
    DataInauguracao: `07/1996`,
    Zona: 'Oeste',
    Bairro: 'Campo Grande',
    PontoDeReferencia: 'Av. Cesário de Melo',
    Latitude: `-22.9067898`,
    Longitude: `-43.5609534`,
    Lugar: 'Não identificado',
    Fatos: [new Fato('', '', 'Propriedade', 'Pública', [], 'Rio de Janeiro')],
};

export const Mae_RuiLeal: Obra = {
    ID: 204,
    Artistas: [artistas.RuiLeal],
    Titulo: `Mãe`,
    Material: 'ganito',
    DataInauguracao: `05/1966`,
    DatasImportantes: [new Data(`05/1966`, 'data de inauguração')],
    Propriedade: 'publica',
    Zona: 'Norte',
    Bairro: 'Madureira',
    Endereço: 'Praça Vice Almirante Nelson Fernandes',
    Latitude: `-22.8762392`,
    Longitude: `-43.335266`,
    Base: 'com pedestal',
    Status: 'permanece no espaço público',
    Descricao: `Homenagem doada à Cidade pela Associação Comercial de Madureira que custeou a obra. O monumento é uma homenagem a D. Joana Teresa Vieira de Lima, benemerita que dedicou sua vida à proteção da mãe na região.`,
    Fatos: [new Fato('', '', '', '', [], '')],
    Temporalidade: 'permanente',
    Eixo: 'sublimidade',
    Funcao: 'ornamental',
    Natureza: 'artística',
    Tipologia: 'escultura',
    Execucao: true,
};

export const PaizinhoQuincas_MiguelPastor: Obra = {
    ID: 972,
    Artistas: [artistas.MiguelPastor],
    Titulo: `Paizinho Quincas`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Escultura`,
    Material: `Peça em bronze e pedestal de concreto revestido de pastilha`,
    Descricao: `O Monumento é composto de um obelisco principal de 8 metros de altura, revestido de pastilhas cerâmica amarela. A escultura em bronze em tamanho natural representa o Sr. Quincas morador da localidade na época da construção do monumento.
Foi inaugurado pelo Prefeito Negrão de Lima. Curiosamente, no momento da inauguração chuvas torrenciais deixou o ceu escuro e não foi possivel aos presentes admirar o monumento, por tambem ocorreu um defeito na instalação elétrica ( Jornal O Globo, dia 14/05/1958 pagina 10).`,
    Execucao: true,
    DataInauguracao: `05/1958`,
    Latitude: `-22.9137567`,
    Longitude: `-43.5975897`,
};

export const MarcoaAbolicao_VentreLivreI_MiguelPastor: Obra = {
    ID: 973,
    Artistas: [artistas.MiguelPastor],
    Titulo: `Marco a Abolicão - Ventre Livre I`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Monolito`,
    Material: `Peça em concreto com imagem em argamassa`,
    Descricao: `O Monumento é composto por uma coluna revestida em placas de mármore preta com uma figura masculina com os braços erguidos soltando de uma corrente.`,
    Execucao: true,
    DataInauguracao: `01/1960`,
    Latitude: `-22.8986335`,
    Longitude: `-43.5631772`,
};

export const PainelaosAbolicionistas_MiguelPastor: Obra = {
    ID: 975,
    Artistas: [artistas.MiguelPastor],
    Titulo: `Painel aos Abolicionistas`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Marco`,
    Material: `Peça em concreto com imagem em argamassa`,
    Descricao: `Painel com as efígies dos abolicistas em baixo relevo em argamassa.`,
    Execucao: true,
    DataInauguracao: `01/1960`,
    Latitude: `-22.8984864`,
    Longitude: `-43.562846`,
};

export const SantaSofia_MiguelPastor: Obra = {
    ID: 976,
    Artistas: [artistas.MiguelPastor],
    Titulo: `Santa Sofia`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Escultura`,
    Material: `Peça em concreto com imagem em argamassa`,
    Descricao: `Escultura em argamassa da imagem da Santa em frente à igreja em sua homenagem.`,
    Execucao: true,
    DataInauguracao: `01/1958`,
    Latitude: `-22.9118951`,
    Longitude: ``,
};

export const Marco11daFazendaImperialdeSantaCruz_Desconhecida: Obra = {
    ID: 977,
    Artistas: [artistas.Desconhecida],
    Titulo: `Marco 11 da Fazenda Imperial de Santa Cruz`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Marco`,
    Material: `Bloco de gnaisse esculpido`,
    Descricao: `Marco que limitava a Estrada Real de Santa Cruz, antigo Caminho dos Jesuítas, no percurso de onze léguas entre o Morro do Castelo e o Palácio Imperial de Santa Cruz, antiga Fazenda dos Jesuítas, hoje sede do Batalhão Villagran Cabrita.`,
    Execucao: true,
    DataInauguracao: `01/1826`,
    Latitude: `-22.9198658`,
    Longitude: `-43.6819485`,
};

export const MarcodaFazendaImperialdeSantaCruz_Desconhecida: Obra = {
    ID: 978,
    Artistas: [artistas.Desconhecida],
    Titulo: `Marco da Fazenda Imperial de Santa Cruz`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Marco`,
    Material: `Bloco de gnaisse esculpido`,
    Descricao: `Este marco estava localizado na antiga Estrada Imperial de Santa Cruz (hoje Av. Cesário de Melo), em frente à entrada do Conjunto Habitacional, sendo removido em 1987 pelo IPHAN com a colaboração do Batalhão de Engenharia de Combate para exposição em praça pública.`,
    Execucao: true,
    DataInauguracao: `01/1826`,
    Latitude: `-22.9133104`,
    Longitude: `-43.6847209`,
};

export const CruzeirodeSantaCruz_Desconhecida: Obra = {
    ID: 979,
    Artistas: [artistas.Desconhecida],
    Titulo: `Cruzeiro  de Santa Cruz`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Cruzeiro`,
    Material: `Madeira`,
    Descricao: `Cruzeiro com cerca de 3 m de altura em madeira instalado no local original do cruzeiro erigido pelos Jesuítas
    no século XVII`,
    Execucao: true,
    DataInauguracao: `04/1987`,
    Latitude: `-22.9133798`,
    Longitude: `-43.6849324`,
    Fatos: [new Fato('', '', 'Propriedade', 'Pública', [], 'Rio de Janeiro')],
};

export const PainelaosExpedicionariosdeSantaCruz_Desconhecida: Obra = {
    ID: 980,
    Artistas: [artistas.Desconhecida],
    Titulo: `Painel aos Expedicionários de Santa Cruz`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Mosaico`,
    Material: `Peça em concreto revestido por azulejo`,
    Descricao: `Trata-se de um monumento composto por um painel de azulejo branco com descrição de um lado da batalha da FEB e o símbolo da Força Expedicionária Brasileira, na outra face um mapa das batalhas. Foi promovido por uma iiniciativa dos expedicionários de Santa Cruz, que participaram da FEB, como objetivo de homenagear o Sr. Laudelino Vieira de Capos, morto em ação na segunda guerra. A solenidade foi realizada no 22º aniversario do embarque das tropas do segundo escalão da FEB para a Itália. A comissão integrada pelo Nucleo dos Veteranos de Santa Cruz, esteve presente e recepcionou os convidados e o ato civico.`,
    Execucao: true,
    DataInauguracao: `09/1966`,
    Latitude: `-22.9133798`,
    Longitude: `-43.6849324`,
};

export const Broca_GeorgeLopes_GeorgeGuerra: Obra = {
    ID: 981,
    Artistas: [artistas.GeorgeLopes, artistas.GeorgeGuerra],
    Titulo: `Broca`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Escultura`,
    Material: `Peça em ferro pintado`,
    Descricao: `Escultura representando uma broca como saindo do solo.`,
    ValorObra: 'R$ 4070,00',
    Execucao: true,
    DataInauguracao: `07/1996`,
    Zona: 'Oeste',
    Bairro: 'Campo Grande',
    PontoDeReferencia: 'R. Coronel Agostinho',
    Latitude: `-22.9028566`,
    Longitude: `-43.5590348`,
    Lugar: 'Não identificado',
    Fatos: [new Fato('', '', 'Propriedade', 'Pública', [], 'Rio de Janeiro')],
};

export const ArcoIris_GeorgeLopes_GeorgeGuerra: Obra = {
    ID: 982,
    Artistas: [artistas.GeorgeLopes, artistas.GeorgeGuerra],
    Titulo: `Arco Iris`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Escultura`,
    Material: `Peça em ferro pintado`,
    Descricao: `É uma escultura composta por colunas feitas em chapa de aço retangular unidas por peças do mesmo material
    pintada em diversas cores para representar um arco-íris.`,
    ValorObra: 'R$ 9.870,00',
    Execucao: true,
    DataInauguracao: `07/1996`,
    Zona: 'Oeste',
    Bairro: 'Campo Grande',
    PontoDeReferencia: 'R. Coronel Agostinho',
    Latitude: `-22.9028566`,
    Longitude: `-43.5590348`,
    Lugar: 'Não identificado',
    Fatos: [new Fato('', '', 'Propriedade', 'Pública', [], 'Rio de Janeiro')],
};

export const RelogiodeCampoGrande_GeorgeLopes_MiltonCavalcanteMotarreyos_GeorgeGuerra: Obra = {
    ID: 983,
    Artistas: [artistas.GeorgeLopes, artistas.MiltonCavalcanteMotarreyos, artistas.GeorgeGuerra],
    Titulo: `Relógio de Campo Grande`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Relógio`,
    Material: `Peça em ferro pintado`,
    Descricao: `Peça utilitário em metal pintado de dourado, conhecido como Relógio do Lions.`,
    Execucao: true,
    DataInauguracao: `07/1996`,
    Latitude: `-22.9028566`,
    Longitude: `-43.5590348`,
};

export const LaranjaisI_GeorgeLopes_GeorgeGuerra: Obra = {
    ID: 984,
    Artistas: [artistas.GeorgeLopes, artistas.GeorgeGuerra],
    Titulo: `Laranjais I`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Escultura`,
    Material: `Peça em argamassa armada policromada`,
    Descricao: `Colunas de concreto com uma semiesfera na extremidade, representando os laranjais existentes na região durante o período de ocupação rural. Cada colunata custou a época foi R42.280,00.`,
    Execucao: true,
    DataInauguracao: `07/1996`,
    Zona: 'Oeste',
    Bairro: 'Campo Grande',
    PontoDeReferencia: 'R. Coronel Agostinho',
    Latitude: `-22.9025031`,
    Longitude: `-43.5600507`,
    Lugar: 'Não identificado',
    Fatos: [new Fato('', '', 'Propriedade', '', [], 'Rio de Janeiro')],
};

export const Piramide_GeorgeLopes_GeorgeGuerra: Obra = {
    ID: 985,
    Artistas: [artistas.GeorgeLopes, artistas.GeorgeGuerra],
    Titulo: `Pirâmide`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Escultura`,
    Material: `Peça em chapa de aço sobre estrutura metálica`,
    Descricao: `Escultura formando uma pirâmide representando o desenvolvimento da região.`,
    ValorObra: 'R$ 17.520,00',
    Execucao: true,
    DataInauguracao: `07/1996`,
    Zona: 'Oeste',
    Bairro: 'Campo Grande',
    PontoDeReferencia: 'Praça Dr. Raul Boaventura',
    Latitude: `-22.9024629`,
    Longitude: `-43.5596437`,
    Lugar: 'Não identificado',
    Fatos: [new Fato('', '', 'Propriedade', 'Pública', [], 'Rio de Janeiro')],
};

export const ArcosdasPalmeiras_GeorgeLopes_GeorgeGuerra: Obra = {
    ID: 986,
    Artistas: [artistas.GeorgeLopes, artistas.GeorgeGuerra],
    Titulo: `Arcos das Palmeiras`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Escultura`,
    Material: `Peça em chapa de aço`,
    Descricao: `4 estruturas com a parte superior fixadas chapas no sentido horizontal finalizada por uma esfera pintada na cor da
    laranja. O marco é uma referência as antigas palmeiras das fazendas que existiram na região.
    As peças (3 arcos) desapareceram em 2017, constatado em vistoria em novembro de 2017`,
    ValorObra: 'R$ 49500,00',
    Execucao: true,
    DataInauguracao: `07/1996`,
    Zona: 'Oeste',
    Bairro: 'Campo Grande',
    Latitude: `-22.907364`,
    Longitude: `-43.5658462`,
    Lugar: 'Não identificado',
    Fatos: [new Fato('', '', 'Propriedade', 'Pública', [], 'Rio de Janeiro')],
};

export const CoretodaPracaElzaOsborne_Desconhecida: Obra = {
    ID: 987,
    Artistas: [artistas.Desconhecida],
    Titulo: `Coreto da Praça Elza Osborne`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Construção`,
    Material: `Pecas de tijolo com argamassa`,
    Descricao: `O coreto é uma construção quadrangular com embasamento executado em concreto, revestido em argamassa e com cobertura em telha francesa.`,
    Execucao: true,
    DataInauguracao: ``,
    Latitude: `-22.9256153`,
    Longitude: `-43.5175727`,
};

export const MarcodailuminacaodeCampoGrande_Desconhecida: Obra = {
    ID: 988,
    Artistas: [artistas.Desconhecida],
    Titulo: `Marco da iluminação de Campo Grande`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Marco`,
    Material: `Pecas de tijolo com argamassa`,
    Descricao: `O marco é um agradecimento do povo de Campo Grande pela iluminação elétrica instalada na região.`,
    Execucao: true,
    DataInauguracao: `04/1919`,
    Latitude: `-22.9053885`,
    Longitude: `-43.5616656`,
};

export const CruzdaPracaDomJoaoEsberard_ElzaOsborne: Obra = {
    ID: 990,
    Artistas: [artistas.ElzaOsborne],
    Titulo: `Cruz da Praça Dom João Esberard`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Cruzeiro`,
    Material: `Bloco de granito esculpido`,
    Descricao: ` Peça esculpida na pedra. Foi instalada me 1958 pela 14 DOE.`,
    Execucao: true,
    DataInauguracao: `01/1958`,
    Latitude: `-22.9056305`,
    Longitude: `-43.561315`,
};

export const MarcoICC_Desconhecida: Obra = {
    ID: 991,
    Artistas: [artistas.Desconhecida],
    Titulo: `Marco ICC`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Marco`,
    Material: `Peça em concreto`,
    Descricao: `O Monumento se constitui em uma estrutura em concreto tendo uma base quadrangular paraidentificar o Instituto Campo Grandense de Cultura.`,
    Execucao: true,
    DataInauguracao: `11/1990`,
    Latitude: `-22.907505`,
    Longitude: `-43.5659254`,
};

export const MarcodoAbastecimentodeSantaCruz_Desconhecida: Obra = {
    ID: 992,
    Artistas: [artistas.Desconhecida],
    Titulo: `Marco do Abastecimento de Santa Cruz`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Marco`,
    Material: `Bloco de granito esculpido`,
    Descricao: `Marco em blocos de granito polido, tendo na face frontal uma placa em mármore representando um homem observando uma planta, para registrar as obras de saneamento executadas na Fazenda Nacional de Santa Cruz.
A obra de saneamento inicia em 1928 durante gestão de Washington Luis e foram concluidas sòmente em 1933, quando construiu o marco.`,
    Execucao: true,
    DataInauguracao: `01/1933`,
    Latitude: `-22.8730859`,
    Longitude: `-43.6761149`,
};

export const PontedosJesuitas_PadrePeroFernandes: Obra = {
    ID: 993,
    Artistas: [artistas.PeroFernandes],
    Titulo: `Ponte dos Jesuítas`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Ponte`,
    Material: `Pedra com argamassa`,
    Descricao: `Construção em pedra com quatro arcos chamada óculos tem cerca de 50m de extensão e 6m de largura com 5 vãos para a passagem de água onde passavam as águas do rio Guandu, que os padres por meio de comportas de madeira, controlavam, retendo-as ou liberando-as conforme o momento exigia. Em seu centro encontra-se, contornada por belas esculturas barrocas, as famosas inscrições latinas, sobrepostas pela cruz e pelas iniciais (I.H.S.) e data de sua construção.H.S. - "Jesus Salvador dos Homens" e a frase latina: Flecte genu, tanto sub nomine, flecte viator Hic etiam reflua flectitur amnis aqua. "Dobra o joelho sob tão grande nome. Aqui também se dobra o rio em água refluente". Como elemento decorativos quatro colunas de pedra de granitocom capiteisem forma de pinhas, de cada lado enfeitam a ponte.
Funcionando como comporta com arcos de dimensões variadas que eram deixados abertos para o escoamento natural do rio ou fechados para represá-lo a fim de que o excesso de água refluísse para cima, indo vazar pelo canal que havia sido construído com esse fim (atual valinha), desviando parte das águas para o Rio Itaguaí. Para torná-la eficiente, foram construídos o canal de Valinha, a vala de São Francisco e o canal do Ita. Serviam também como passagem para tropeiros e pedestres que iam e vinham do interior em direção ao Rio de Janeiro.`,
    Execucao: true,
    DataInauguracao: `01/1752`,
    Latitude: `-22.8724007`,
    Longitude: `-43.6760928`,
};

export const Marco9daFazendaImperialdeSantaCruz_Desconhecida: Obra = {
    ID: 994,
    Artistas: [artistas.Desconhecida],
    Titulo: `Marco 9 da Fazenda Imperial de Santa Cruz`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Marco`,
    Material: `Bloco de gnaisse esculpido`,
    Descricao: `Marco que limitava a Estrada Real de Santa Cruz, antigo Caminho dos Jesuítas, no percurso de onze léguas entre o Morro do Castelo e o Palácio Imperial de Santa Cruz, antiga Fazenda dos Jesuítas, hoje sede do Batalhão Villagran Cabrita.`,
    Execucao: true,
    DataInauguracao: `01/1826`,
    Latitude: `-22.9118506`,
    Longitude: `-43.5921662`,
};

export const Marco10daFazendaImperialdeSantaCruz_Desconhecida: Obra = {
    ID: 995,
    Artistas: [artistas.Desconhecida],
    Titulo: `Marco 10 da Fazenda Imperial de Santa Cruz`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Marco`,
    Material: `Bloco de granito esculpido`,
    Descricao: `Marco que limitava a Estrada Real de Santa Cruz, antigo Caminho dos Jesuítas, no percurso de onze léguas entre o Morro do Castelo e o Palácio Imperial de Santa Cruz, antiga Fazenda dos Jesuítas, hoje sede do Batalhão Villagran Cabrita.`,
    Execucao: true,
    DataInauguracao: `01/1826`,
    Latitude: `-22.9192034`,
    Longitude: `-43.6410424`,
};

export const BicadeCantariadeSantaCruz_Desconhecida: Obra = {
    ID: 996,
    Artistas: [artistas.Desconhecida],
    Titulo: `Bica de Cantaria de Santa Cruz`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Chafariz`,
    Material: `Bloco de granito`,
    Descricao: `Bica em cantaria tendo a frente um bloco de cantaria circular de altura apoiada em outra quadrangular de tijolo, de onde saia a água para abastecimento da população.
Desativado em data desconhecida.`,
    Execucao: true,
    DataInauguracao: ``,
    Latitude: `-22.923696`,
    Longitude: `-43.681876`,
};

export const MarcoComemorativodeSantaCruz_Desconhecida: Obra = {
    ID: 997,
    Artistas: [artistas.Desconhecida],
    Titulo: `Marco Comemorativo de Santa Cruz`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Marco`,
    Material: `Bloco de granito esculpido`,
    Descricao: `Monumento comemorativo do I Centenário da anexação de Santa Cruz ao Distrito Federal ( 1833  1933)`,
    Execucao: true,
    DataInauguracao: `01/1993`,
    Latitude: `-22.9119081`,
    Longitude: `-43.6874328`,
};

export const MarcodosJesuitas_Desconhecida: Obra = {
    ID: 998,
    Artistas: [artistas.Desconhecida],
    Titulo: `Marco dos Jesuítas`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Marco`,
    Material: `Bloco de gnaisse esculpido`,
    Descricao: `Coluna circular em cantaria apoiada sobre um bloco em formato de cruz. Ao longo dos anos se tornou um veleiro, o que vem deteriorando a pedra.
Alguns moradores citam que esse é o marco da presença dos jesuitas na região.`,
    Execucao: true,
    DataInauguracao: ``,
    Latitude: `-22.9197428`,
    Longitude: `-43.6831338`,
};

export const JoseAntonioCiraudo_Desconhecida: Obra = {
    ID: 999,
    Artistas: [artistas.Desconhecida],
    Titulo: `José Antônio Ciraudo`,
    Classificacao: 'perene',
    Categoria: 'personalidades',
    TipologiaObra: `Busto`,
    Material: `Peça em bronze`,
    Descricao: `A homenagem foi realizado pelos seus amigos da região. Foi retirado depois da construção da Estação
    do BRT em maio de 2016, e transferido para o depósito. Ciraudo trabalhou no hospital D.Pedo II como cirurgião e na
    década de 1950 foi seu diretor. Foi condecorado pela Academia Nacional de Medicina com o Bisturi de Ouro. depósito`,
    Execucao: true,
    DataInauguracao: `08/1979`,
    Latitude: `-22.9066743`,
    Longitude: `-43.197073`,
    Fatos: [new Fato('data', 'data', 'fato', 'descrição', [], 'cidade')],
};

export const CesariodeMelo_CLinel: Obra = {
    ID: 1000,
    Artistas: [artistas.CLinel],
    Titulo: `Cesário de Melo`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Escultura`,
    Material: `Peça em bronze`,
    Descricao: `O monumento é uma homenagem do povo de Santa Cruz e de seus amigos.
A criança frontal que compõe o monumento está no depósito da Prefeitura. A peça foi danificada em 2002 aguardando a restauração. `,
    Execucao: true,
    DataInauguracao: `01/1952`,
    Latitude: `-22.9176328`,
    Longitude: `-43.6832614`,
};

export const SenadorCamara_BernavenutoBerna: Obra = {
    ID: 1001,
    Artistas: [artistas.BernavenutoBerna],
    Titulo: `Senador Câmara`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Escultura`,
    Material: `Peça em bronze e pedestal de granito`,
    Descricao: `Homenagem de seus amigos, admiradores e amigos. O monumento tem o pedestal de granito carioca e oferecido pelo construtor de Campo Grande, Sr. José Pereira seguindo o desenho do escultor. `,
    Execucao: true,
    DataInauguracao: `03/1934`,
    Latitude: `-22.9155604`,
    Longitude: `-43.6848836`,
};

export const MarechalDuquedeCaxias_Desconhecida: Obra = {
    ID: 1002,
    Imagem: 'MarechalDuquedeCaxias_Desconhecida.jpg',
    Artistas: [artistas.Desconhecida],
    Titulo: `Marechal Duque de Caxias`,
    Classificacao: 'perene',
    Categoria: 'personalidades',
    TipologiaObra: `Busto`,
    Material: `Peça em bronze e concreto`,
    Descricao: `É uma homenagem do 1º DECME e da Comunicação de Santa Cruz.`,
    Execucao: true,
    DataInauguracao: `01/1988`,
    Zona: 'Oeste',
    Bairro: 'Santa Cruz',
    PontoDeReferencia: 'Praça Ruão',
    Latitude: `-22.9133375`,
    Longitude: `-43.6848037`,
    Fatos: [new Fato('', '', 'Propriedade', 'Pública', [], 'Rio de Janeiro')],
};

export const CoronelVillagranCabrita_Desconhecida: Obra = {
    ID: 1003,
    Artistas: [artistas.Desconhecida],
    Titulo: `Coronel Villagran Cabrita`,
    Classificacao: 'perene',
    Categoria: 'personalidades',
    TipologiaObra: `Busto`,
    Material: `Peça em bronze e pedestal de concreto`,
    Descricao: `A homenagem esta em frente ao batalhão onde é o patrono.`,
    Execucao: true,
    DataInauguracao: ``,
    Zona: 'Oeste',
    Bairro: 'Santa Cruz',
    PontoDeReferencia: 'Praça Ruão',
    Latitude: `-22.9133375`,
    Longitude: `-43.6848037`,
    Fatos: [
        new Fato('', '', 'Propriedade', 'Pública', [], 'Rio de Janeiro'),
        new Fato('', '', 'Fundição/Atelier', 'Arsenal de Guerra - AGR', [], 'Rio de Janeiro'),
    ],
};

export const PadreGuilhermeDecaminada_Desconhecida: Obra = {
    ID: 1004,
    Artistas: [artistas.Desconhecida],
    Titulo: `Padre Guilherme Decaminada`,
    Classificacao: 'perene',
    Categoria: 'personalidades',
    TipologiaObra: `Busto`,
    Material: `Peça em bronze e pedestal de concreto`,
    Descricao: `A homenagem ao padre missionário foi erguido por gratidão ao seu trabalho incansavelmente na região.`,
    Execucao: true,
    DataInauguracao: `12/1997`,
    Zona: 'Oeste',
    Bairro: 'Santa Cruz',
    PontoDeReferencia: 'Praça Dom Romualdo',
    Latitude: `-22.9196488`,
    Longitude: `-43.683583`,
    Lugar: 'Praça',
    Fatos: [new Fato('', '', 'Propriedade', 'Pública', [], 'Rio de Janeiro')],
};

export const CoronelHonoriodosSantosPimentel_Desconhecida: Obra = {
    ID: 1005,
    Artistas: [artistas.Desconhecida],
    Titulo: `Coronel Honório dos Santos Pimentel`,
    Classificacao: 'perene',
    Categoria: 'personalidades',
    TipologiaObra: `busto`,
    Material: `Peça em bronze e pedestal de granito`,
    Descricao: `O busto em bronze ao coronel é uma homenagem de Santa Cruz no ano de IV Centenário de sua fundação.`,
    Execucao: true,
    DataInauguracao: `07/1967`,
    Latitude: `-22.9263167`,
    Longitude: `-43.690654`,
};

export const LagodaPracaTelmoGoncalvesMaia_Desconhecida: Obra = {
    ID: 1006,
    Artistas: [artistas.Desconhecida],
    Titulo: `Lago da Praça Telmo Gonçalves Maia`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Lago`,
    Material: `Peça em concreto armado`,
    Descricao: `A praça é composta por dois lagos artificiais instalados em duas extremidades da praça. Esse lago foi o primeiro a ser construido na zona oeste e o unico existente até hoje. Foi inaugurado pelo prefeito Negrão de Liama, junto com a herma de Telmo Gonçalves Maia.`,
    Execucao: true,
    DataInauguracao: `07/1957`,
    Latitude: `-22.9044486`,
    Longitude: `-43.5729773`,
};

export const BicadeCantariadeCampoGrande_Desconhecida: Obra = {
    ID: 1008,
    Artistas: [artistas.Desconhecida],
    Titulo: `Bica de Cantaria de Campo Grande`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Chafariz`,
    Material: `Bloco de gnaisse esculpido`,
    Descricao: `Bica em cantaria tendo a frente um bloco de cantaria circular. A peça era apoiada em outra quadrangular de tijolo de onde saia a água para abastecimento da população. Foi danificada em 2012 ficando sòmente no local o bloco de cantaria.
Desativado em data desconhecida.`,
    Execucao: true,
    DataInauguracao: ``,
    Latitude: `-22.9040616`,
    Longitude: `-43.5544659`,
};

export const FontedoVasodaPracaEnzoOsborne_Desconhecida: Obra = {
    ID: 1009,
    Artistas: [artistas.Desconhecida],
    Titulo: `Fonte do Vaso da Praça Enzo Osborne`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Chafariz`,
    Material: `Peça em ferro fundido e pedestal de concreto`,
    Descricao: `Composta por uma coluna quadrangular onde está fixada uma peça de ferro fundido com um vaso, também em metal, por onde escorre a água para o abastecimento.`,
    Execucao: true,
    DataInauguracao: ``,
    Latitude: `-22.9256153`,
    Longitude: `-43.5175727`,
};

export const FonteCiboriumdaPracaFranciscoBarbosa_Desconhecida: Obra = {
    ID: 1010,
    Artistas: [artistas.Desconhecida],
    Titulo: `Fonte Ciborium da Praça Francisco Barbosa`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Chafariz`,
    Material: `Peça em ferro fundido`,
    Descricao: `É um bebedouro de inspiração religiosa faz alusão ao Ciborium, um paramento batismal. Foi adquirida em 1906 para adornar a Praça XV de Novembro, contudo ainda não se dispõe de informações se essa fonte veio da praça XV ou se a que foi instalada no Campo de São Cristovão.
Desativado em data desconhecida.`,
    Execucao: true,
    DataInauguracao: `01/1906`,
    Latitude: `-22.9075288`,
    Longitude: `-43.5639832`,
};

export const ChafarizCanhao_GeorgeLopes_MiltonCavalcanteMotarreyos_GeorgeGuerra: Obra = {
    ID: 1011,
    Artistas: [artistas.GeorgeLopes, artistas.MiltonCavalcanteMotarreyos, artistas.GeorgeGuerra],
    Titulo: `Chafariz Canhão`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Chafariz`,
    Material: `Peça em ferro pintado`,
    Descricao: `Escultura em aço pintado na cor laranja vazada, sugerindo uma laranja descascada. De numa das extremidades um canhão de jorra a água, para um copo se encontra na outra extremidade. O Chafariz e escultura custou a época cerca de R$ 36.000,00.
O Chafariz esta desativado desde maio de 2017.`,
    Execucao: true,
    DataInauguracao: `07/1996`,
    Latitude: `-22.9016643`,
    Longitude: `-43.5563492`,
};

export const MarechalHermes_DaviLeal: Obra = {
    ID: 1012,
    Artistas: [artistas.DaviLeal],
    Titulo: `Marechal Hermes`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Escultura`,
    Material: `Peça em bronze e pedestal de concreto`,
    Descricao: `Homenagem erguida atraves da oferta do filho primogenio do Marechal, o Sr. Mario Hermes. Na inauguração estiveram diversaas autoridades e o discurso inaugural foi do General Gois Monteiro.`,
    Execucao: true,
    DataInauguracao: `09/1941`,
    Latitude: `-22.8658028`,
    Longitude: `-43.4022003`,
};

export const BrigadeiroAntôniodeSampaio_VictorBrecheret: Obra = {
    ID: 1013,
    Artistas: [artistas.VictorBrecheret],
    Titulo: `Brigadeiro Antônio de Sampaio`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Escultura`,
    Material: `Peça em bronze com pedestal de granito`,
    Descricao: `Homenagem oferecida pelo Regimento Sampaio e pelo Liceu de Artes de São Paulo.`,
    Execucao: true,
    DataInauguracao: `12/1952`,
    Latitude: `-22.8641808`,
    Longitude: `-43.3988234`,
};

export const GeneralJoaoSeverianodaFonseca_Desconhecida: Obra = {
    ID: 1014,
    Artistas: [artistas.Desconhecida],
    Titulo: `General João Severiano da Fonseca`,
    Classificacao: 'perene',
    Categoria: 'personalidades',
    TipologiaObra: `Busto`,
    Material: `Peça em bronze e pedestal de concreto`,
    Descricao: `Inicialmente instalado na Praça Marechal Hermes, o busto em bronze foi depois transferido ao logradouro que
    leva seu nome. O busto está desaparecido, em decorrência da obra da via Transolimpica.`,
    Execucao: true,
    DataInauguracao: ``,
    Zona: 'Oeste',
    Bairro: 'Vila Militar',
    PontoDeReferencia: 'Praça General João Severiano da Fonseca',
    Latitude: `-22.8697124`,
    Longitude: `-43.4125117`,
    Fatos: [
        new Fato('', '', 'Propriedade', 'Pública', [], 'Rio de Janeiro'),
        new Fato('', '', 'Fundição/Atelier', 'Arsenal de Guerra do Rio - AGR', [], 'Rio de Janeiro'),
    ],
};

export const MarechalRondonVilaMilitar_NewtonSa: Obra = {
    ID: 1015,
    Artistas: [artistas.NewtonSa],
    Titulo: `Marechal Rondon Vila Militar`,
    Classificacao: 'perene',
    Categoria: 'personalidades',
    TipologiaObra: `Busto`,
    Material: `Peça em bronze e pedestal de granito`,
    Descricao: `Homenagem ao militar patrono das Telecomunicações.`,
    Execucao: true,
    DataInauguracao: ``,
    Zona: 'Oeste',
    Bairro: 'Vila Militar',
    PontoDeReferencia: 'Av. Duque da Caxias',
    Latitude: `-22.8688651`,
    Longitude: `-43.4084884`,
    Fatos: [new Fato('', '', 'Propriedade', 'Pública', [], 'Rio de Janeiro')],
};

export const GeneralOsoriodaVilaMilitar_Desconhecida: Obra = {
    ID: 1016,
    Artistas: [artistas.Desconhecida],
    Titulo: `General Osório da Vila Militar`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Escultura`,
    Material: `Peça em bronze e pedestal de granito`,
    Descricao: `A homenagem ao Patrono da Cavalaria Brasileira, esta situadaem frente ao Batalhão da Vila Militar.`,
    Execucao: true,
    DataInauguracao: `05/1978`,
    Latitude: `-22.8680986`,
    Longitude: `-43.406908`,
};

export const CoretodaPracaMarechalHermes_Desconhecida: Obra = {
    ID: 1017,
    Artistas: [artistas.Desconhecida],
    Titulo: `Coreto da Praça Marechal Hermes`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Construção`,
    Material: `Tijolo com argamassa`,
    Descricao: `Construção com embasamento de tijolos e guarda-corpo de argamassa armada, com cobertura em madeira e chapas de alumínio.`,
    Execucao: true,
    DataInauguracao: `08/1977`,
    Latitude: `-22.8658028`,
    Longitude: `-43.4022003`,
};

export const MarcodaIluminacaodaVilaMilitar_Desconhecida: Obra = {
    ID: 1018,
    Artistas: [artistas.Desconhecida],
    Titulo: `Marco da Iluminação da Vila Militar`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Marco`,
    Material: `Monolitico de concreto  com placa de bronze`,
    Descricao: `Monólito piramidal, executado para a fixação das placas informativas sobre as obras da praça.`,
    Execucao: true,
    DataInauguracao: `08/1977`,
    Latitude: `-22.8658028`,
    Longitude: `-43.4022003`,
};

export const CoretodoCampodeMarte_JASiqueiraFilho: Obra = {
    ID: 1019,
    Artistas: [artistas.JASiqueiraFilho],
    Titulo: `Coreto do Campo de Marte`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Construção`,
    Material: `Tijolo com argamassa`,
    Descricao: `Inaugurado nos anos de 1950.  Construção com embasamento de tijolos e guarda-corpo de argamassa armada, com apoio central único em metal para a dupla cobertura em chapas metálicas.`,
    Execucao: true,
    DataInauguracao: ``,
    Latitude: `-22.8762359`,
    Longitude: `-43.4309844`,
};

export const MarcodaConstrucaodaVilaMilitar_Desconhecida: Obra = {
    ID: 1020,
    Artistas: [artistas.Desconhecida],
    Titulo: `Marco da Construção da Vila Militar`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Marco`,
    Material: `Peça em granito`,
    Descricao: `Monumento em pedra comemorativo do centenário de criação da 1ª Divisão de Exército e da construção da Vila Militar, assim como ao Tenente-Coronel Magalhães Bastos, da Comissão Construtora.`,
    Execucao: true,
    DataInauguracao: `03/2008`,
    Latitude: `-22.8649762`,
    Longitude: `-43.4004913`,
};

export const MarcodoSimbolodoExercito_Desconhecida: Obra = {
    ID: 1022,
    Artistas: [artistas.Desconhecida],
    Titulo: `Marco do Símbolo do Exército`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Marco`,
    Material: `Blocos de granito com peça em bronze`,
    Descricao: `Marco em pedra, com o símbolo do Exército Brasileiro, em frente ao Batalhão Escola de Comunicações do Exército.`,
    Execucao: true,
    DataInauguracao: ``,
    Latitude: `-22.8694903`,
    Longitude: `-43.4097686`,
};

export const ZumbidosPalmares_ClecioRegis: Obra = {
    ID: 1023,
    Imagem: 'ZumbidosPalmares_ClecioRegis.jpg',
    Artistas: [artistas.ClecioRegis],
    Titulo: `Zumbi dos Palmares`,
    Classificacao: 'perene',
    Categoria: 'personalidades',
    TipologiaObra: `Busto`,
    Material: `Peça em bronze com pedestal revestido de granito`,
    Descricao: `O busto em bronze é uma criação do artista da figura de Zumbi. Foi erguido por iniciativa do Point Chic
    Charm e doada à Cidade do Rio de Janeiro. `,
    Execucao: true,
    DataInauguracao: `11/2004`,
    Zona: 'Oeste',
    Bairro: 'Padre Miguel',
    PontoDeReferencia: 'R. Figueiredo Camargo',
    Latitude: `-22.8716352`,
    Longitude: `-43.4509127`,
    Fatos: [
        new Fato('', '', 'Propriedade', 'Pública', [], 'Rio de Janeiro'),
        new Fato('', '', 'Fundição/Atelier', 'FEB - Fundição e Esculturas em Bronze', [], 'Rio de Janeiro'),
    ],
};

export const CoretodeSepetiba_Desconhecida: Obra = {
    ID: 1024,
    Artistas: [artistas.Desconhecida],
    Titulo: `Coreto de Sepetiba`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Construção`,
    Material: `Peça em ferro fundido e pedestal de concreto`,
    Descricao: `Coreto octogonal , construído pela Companhia de Carris Urbanos, através de um contrato firmado com a Prefeitura em 21 de junho 1903 na Praça XV de Novembro, Centro . Em 1949, em comemoração à chegada da luz elétrica em Sepetiba, foi reconstruído e reinaugurado no local em que se encontra. A leve e graciosa estrutura de metal na parte superior foi mantida íntegra, o guarda corpo foi recomposto em 1992 e o embasamento de concreto construído em 1949.`,
    Execucao: true,
    DataInauguracao: `11/1949`,
    Latitude: `-22.970757`,
    Longitude: `-43.7097937`,
};

export const IemanjadeSepetiba_Desconhecida: Obra = {
    ID: 1025,
    Artistas: [artistas.Desconhecida],
    Titulo: `Iemanjá de Sepetiba`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Escultura`,
    Material: `Peça em argamassa armada policromada`,
    Descricao: `Escultura representando a popular orixá, inaugurada em 1976 foi substituída pela atual no início da década de 1990. `,
    Execucao: true,
    DataInauguracao: `01/1976`,
    Latitude: `-22.9852254`,
    Longitude: `-43.6945419`,
};

export const OratorioaSaoJorgedeSepetiba_Desconhecida: Obra = {
    ID: 1026,
    Artistas: [artistas.Desconhecida],
    Titulo: `Oratório á São Jorge de Sepetiba`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Oratório`,
    Material: `Tijolo com argamassa`,
    Descricao: `Construção de concreto, protegendo a imagem de São Jorge, tendo no alto uma faixa em metal com a inscrição Cavaleiro de Deus.`,
    Execucao: true,
    DataInauguracao: `01/1993`,
    Latitude: `-22.9852254`,
    Longitude: `-43.6945419`,
};

export const MarcodoabastecimentodeSepetiba_Desconhecida: Obra = {
    ID: 1027,
    Artistas: [artistas.Desconhecida],
    Titulo: `Marco do abastecimento de Sepetiba`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Marco`,
    Material: `Monolitico de concreto  com placa de bronze`,
    Descricao: `Construção com uma placa com direzes da inauguração. Havia originariamente uma bica para oi abastecimento de água, dos moradores da região.`,
    Execucao: true,
    DataInauguracao: `11/1949`,
    Latitude: `-22.9711186`,
    Longitude: `-43.7098385`,
};

export const MarcodaFazendaImperialdeBarradeGuaratiba_Desconhecida: Obra = {
    ID: 1028,
    Artistas: [artistas.Desconhecida],
    Titulo: `Marco da Fazenda Imperial de Barra de Guaratiba`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Marco`,
    Material: `Bloco de granito esculpido`,
    Descricao: `Ao longo da Estrada Real de Santa Cruz (antigo Caminho dos Jesuítas) foram colocados, marcos de pedra, esse marco provavelmente é do limite da fazenda na proximidade da Praia da Brisa.
Por se situar no limite do lote, o marco se encontra nos fundos do lote da RuaDamolândia, 38 e a Área de Proteção Ambiental das Brisas.`,
    Execucao: true,
    DataInauguracao: `01/1826`,
    Latitude: `-22.9866701`,
    Longitude: `-43.6591693`,
};

export const MarcodoPoligonodoTirodaMarambaia_Desconhecida: Obra = {
    ID: 1029,
    Artistas: [artistas.Desconhecida],
    Titulo: `Marco do Polígono do Tiro da Marambaia`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Marco`,
    Material: `Peça em concreto revestido por pastilha`,
    Descricao: `Construção com uma placa fixada, em referência ao Campo de Prova da Marambaia.`,
    Execucao: true,
    DataInauguracao: `08/1943`,
    Latitude: `-23.0630196`,
    Longitude: `-43.5657861`,
};

export const PisodePedraPortuguesadeGrumari_Desconhecida: Obra = {
    ID: 1030,
    Artistas: [artistas.Desconhecida],
    Titulo: `Piso de Pedra Portuguesa de Grumari`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Mosaico`,
    Material: `Pedras portuguesas`,
    Descricao: `Composição em meio à plataforma do mirante, com o nome do logradouro`,
    Execucao: true,
    DataInauguracao: `04/2012`,
    Latitude: `-23.0515711`,
    Longitude: `-43.5491111`,
};

export const MarcoRodoviariodaRuaBarrosdeAlarcao_Desconhecida: Obra = {
    ID: 1031,
    Artistas: [artistas.Desconhecida],
    Titulo: `Marco Rodoviário da Rua Barros de Alarcão`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Marco`,
    Material: `Bloco de gnaisse esculpido`,
    Descricao: `Os marcos foram instalados início da década de 30 (1930) para orientar as distâncias entre localidades, no momento que se iniciava o ciclo rodoviário no Brasil.
Executados em gnaisse, na forma de lápide, estes pequenos equipamentos urbanos perderam sua funcionalidade ao longo do tempo e, talvez por esta razão, muitos tenham sido removidos, sem que lhes creditasse qualquer valor.
Nos que ainda restam é possível identificar a indicação ERF (Estrada de Rodagem Federal), com a informação em quilômetros, da distância do ponto onde se encontra até o Centro. Na face posterior, a inscrição DF (Distrito Federal) indica o período em que a Cidade do Rio de Janeiro era a capital do país, e nas faces esquerda e direita, o registro da distância de duas localidades próximas.
Esse marco marcava as distancias da antiga denominação da Estrada da Pedra`,
    Execucao: true,
    DataInauguracao: ``,
    Latitude: `-23.0052507`,
    Longitude: `-43.6379123`,
};

export const OratoriodeSaoPedrodeBarradeGuaratiba_Desconhecida: Obra = {
    ID: 1032,
    Artistas: [artistas.Desconhecida],
    Titulo: `Oratório de São Pedro de Barra de Guaratiba`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Oratório`,
    Material: `Peça em concreto com imagem em resina`,
    Descricao: `Construção de concreto com um pequeno nicho com a imagem do padroeiro. <strong> `,
    Execucao: true,
    DataInauguracao: ``,
    Latitude: `-23.0672756`,
    Longitude: `-43.5676822`,
};

export const BicadeCantariadePedradeGuaratiba_Desconhecida: Obra = {
    ID: 1033,
    Artistas: [artistas.Desconhecida],
    Titulo: `Bica de Cantaria de Pedra de Guaratiba`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Chafariz`,
    Material: `Bloco de granito`,
    Descricao: `Bica em cantaria tendo a frente um bloco de cantaria circular , apoiada em outra quadrangular de tijolo, de onde saia a água para abastecimento da população.
A fonte foi totalmente pintada sobre a pedra pelo morador do local.
Desativado em data desconhecida.`,
    Execucao: true,
    DataInauguracao: ``,
    Latitude: `-23.0059543`,
    Longitude: `-43.6341894`,
};

export const MarcodaEscolaMilitardeRealengo_Desconhecida: Obra = {
    ID: 1035,
    Artistas: [artistas.Desconhecida],
    Titulo: `Marco da Escola Militar de Realengo`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Marco`,
    Material: `Bloco de granito com placa de bronze`,
    Descricao: `Bloco maciço de granito, que registra o feito da Escola, em 1922.`,
    Execucao: true,
    DataInauguracao: ``,
    Latitude: `-22.8761862`,
    Longitude: `-43.4315152`,
};

export const GetulioVargasdoHospitalGetulioVargas_Desconhecida: Obra = {
    ID: 1036,
    Artistas: [artistas.Desconhecida],
    Titulo: `Getulio Vargas do Hospital Getulio Vargas`,
    Classificacao: 'perene',
    Categoria: 'personalidades',
    TipologiaObra: `busto`,
    Material: `Peça em bronze e mural  de granito`,
    Descricao: `O busto foi doado ao hospital apos ter sido retirado da Clinica de Madureira, na Estrada do Portela, quando demolida. De 1938, foi uma doação dos estivadores. Ficou guardado em um deposito na Estrada do Barro Vermelho durante 5 anos até ser instalado no hospital .`,
    Execucao: true,
    DataInauguracao: `01/1972`,
    Latitude: `-22.8386561`,
    Longitude: `-43.2856748`,
};

export const ObeliscodeRochaMiranda_ErnaniFreire: Obra = {
    ID: 1037,
    Artistas: [artistas.ErnaniFreire],
    Titulo: `Obelisco de Rocha Miranda`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `obelisco`,
    Material: `Peça em ferro pintado`,
    Descricao: `Obelisco de quinze metros de altura de ferro pintado de branco, c<om uma grande esfera no topo<. Construído para ser a referência do bairro a distância, tem na sua base piramidal,placas comemorativas das principais batalhas da FEB na II Guerra Mundial.
Em 2018 a esfera superior foi retirada devido a corrosão. O destino da peça é desconhecido.`,
    Execucao: true,
    DataInauguracao: `01/2002`,
    Latitude: `-22.8543349`,
    Longitude: `-43.3517873`,
};

export const MarcodaVitoriadaRochaMiranda_CarlosWerneckdeCarvalho: Obra = {
    ID: 1038,
    Artistas: [artistas.CarlosWerneckdeCarvalho],
    Titulo: `Marco da Vitória da Rocha Miranda`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Monolito`,
    Material: `Monolitico de concreto  com placa de bronze`,
    Descricao: `Placa em bronze com o V da Vitória.
Originalmente o marco se localizava num canteiro de rosas entre outras placas de piso, em bronze, com o nome dos locais das batalhas que os brasileiros participaram. Essas placas foram removidas e os locais passaram a ser apresentados no obelisco construido na mesma praça. O marco da Vitoria nessa época foi removido e guardado no depósito da Prefeitura,retornando a seu lugar de origem após diversas solicitações dos moradores, em8 de maio de 2007.
Em 2018 foi pintada na cor branca a placa em bronze, para esconder a pichação, excluindo as peças em alto relevo.`,
    Execucao: true,
    DataInauguracao: ``,
    Latitude: `-22.8541939`,
    Longitude: `-43.3518989`,
};

export const CeresdeRochaMiranda_Desconhecida: Obra = {
    ID: 1039,
    Artistas: [artistas.Desconhecida],
    Titulo: `Ceres de Rocha Miranda`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Escultura`,
    Material: `Peça em mármore de Carrara`,
    Descricao: `Escultura neolclássica representando a deusa Ceres.`,
    Execucao: true,
    DataInauguracao: ``,
    Zona: 'Norte',
    Bairro: 'Rocha Miranda',
    PontoDeReferencia: 'R. Sumidouro',
    Latitude: `-22.849288`,
    Longitude: `-43.3373466`,
    Fatos: [new Fato('', '', 'Propriedade', 'Pública', [], 'Rio de Janeiro')],
};

export const CoronelCorreaLima_Desconhecida: Obra = {
    ID: 1040,
    Artistas: [artistas.Desconhecida],
    Titulo: `Coronel Correia Lima`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Escultura`,
    Material: `Peça em bronze`,
    Descricao: `Inaugurado em 31 de maio de 1942 na Avenida Pedro II, em São Cristovão, foi transferido para a Avenida Brasil e inaugurado em 29 de abril de 2008, quando ocomando foi transferido para as novas instalações.
Na inauguração estiveram presentes o irmão do coronel, seus filhos e oficiais. O monumento foi erguido sob o comando o Capitao Jofre Gil da Silva.`,
    Execucao: true,
    DataInauguracao: `05/1942`,
    Latitude: `-22.8666178`,
    Longitude: `-43.2474132`,
};

export const AlvaroCostaMelo_Desconhecida: Obra = {
    ID: 1042,
    Artistas: [artistas.Desconhecida],
    Titulo: `Álvaro Costa Melo`,
    Classificacao: 'perene',
    Categoria: 'personalidades',
    TipologiaObra: `Busto`,
    Material: `Peça em bronze com pedestal revestido de granito`,
    Descricao: `O busto  é uma homenagem da Força Empresarial de Bonsucesso ao empresário local. Foi uma iniciativa do
    gerente do Unibanco Wilson Xavier que angariou fundos e instalou um busto. `,
    Execucao: true,
    DataInauguracao: `10/1996`,
    Zona: 'Norte',
    Bairro: 'Bonsucesso',
    PontoDeReferencia: 'R. Cardoso de Moraes',
    Latitude: `-22.862519`,
    Longitude: `-43.254069`,
    Lugar: 'Trevo',
    Fatos: [
        new Fato('', '', 'Propriedade', 'Pública', [], 'Rio de Janeiro'),
        new Fato('', '', 'Fundição/Atelier', 'Laborate', [], 'Rio de Janeiro'),
        new Fato('', '01/05/1993', 'Homenageado', 'Alvaro da Costa Mello', [], 'Rio de Janeiro'),
        new Fato('07/05/1993', '07/05/1993', 'Missa de 7 dia', 'Missa Realizada as 10h na Igreja da Candelaria', [], 'Rio de Janeiro'),
        new Fato(
            '',
            '',
            'Homenagem',
            'Força Empresarial de Bonsucesso, iniciativa do gerente do Unibanco Wilson Xavier que angariou fundos e instalou o busto',
            [],
            'Rio de Janeiro',
        ),
    ],
};

export const AAugustoMotta_Desconhecida: Obra = {
    ID: 1043,
    Artistas: [artistas.Desconhecida],
    Titulo: `À Augusto Motta`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Efígie`,
    Material: `Monolitico de concreto  com placa de bronze`,
    Descricao: `A homenagem ao professor e educador, foi doada pelo Rotary Club Leopoldinense e inaugurado na reforma da praça promovida pelo Rio-Cidade Bonsucesso.`,
    Execucao: true,
    DataInauguracao: `09/1996`,
    Zona: 'Norte',
    Bairro: 'Bonsucesso',
    PontoDeReferencia: 'Largo Augusto Motta',
    Latitude: `-22.8655207`,
    Longitude: `-43.2550024`,
    Fatos: [new Fato('', '', 'Propriedade', 'Pública', [], 'Rio de Janeiro')],
};

export const IsmaelRibeiro_EdgarDuvivier: Obra = {
    ID: 1044,
    Artistas: [artistas.EdgarDuvivier],
    Titulo: `Ismael Ribeiro`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Escultura`,
    Material: `Peça em bronze`,
    Descricao: `Trata-se de uma homenagem em bronze, promovida pela Prefeitura.`,
    Execucao: true,
    DataInauguracao: `09/2011`,
    Latitude: `-22.8596725`,
    Longitude: `-43.2676909`,
};

export const ChafarizdaPracadasNacoes_Desconhecida: Obra = {
    ID: 1047,
    Artistas: [artistas.Desconhecida],
    Titulo: `Chafariz da  Praça das Nações`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Chafariz`,
    Material: `Peça em ferro fundido`,
    Descricao: `
Inaugurado em 1908 na Praia Vermelha, para a exposição comemorativa do centenário da abertura dos Portos, depois transferido para o Maracanã e em 1936 para a atual localização, sendo inaugurado em 3 de abril de 1937. O monumento representa a insdustria, lavoura e comercio. Foi premiado naquela exposição.
O Chafariz se compõe de uma coluna de seis metros, com ornato de folhagens entrelaçadas, embaixo da qual quatro golfinhos se apoiam em plantas aquáticas, cada um jorrando água para uma bacia. Acima deles, uma bacia central , da qual se eleva a coluna, recebe a água de quatro garças. Sobre o capitel se erguia uma figura feminina, sustentando um globo luminoso no braço direito, cópia da escultura Crepúsculo, de Mathurin Moreau, que desapareceu em 2010, e era popularmente conhecida no bairro como a Mulher da Luz.
Esta desativado desde maio de 2017.`,
    Execucao: true,
    DataInauguracao: `01/1908`,
    Latitude: `-22.8670454`,
    Longitude: `-43.2550723`,
};

export const LaranjaisII_GeorgeLopes_GeorgeGuerra: Obra = {
    ID: 1048,
    Artistas: [artistas.GeorgeLopes, artistas.GeorgeGuerra],
    Titulo: `Laranjais II`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Escultura`,
    Material: `Peça em argamassa armada policromada`,
    Descricao: `Colunas de concreto com uma semiesfera na extremidade, representando os laranjais existentes na região durante o período de ocupação rural.`,
    ValorObra: 'R$ 42.280,00',
    Execucao: true,
    DataInauguracao: `07/1996`,
    Zona: 'Oeste',
    Bairro: 'Campo Grande',
    Latitude: `-22.9030779`,
    Longitude: `-43.5581526`,
    Lugar: 'Não identificado',
    Fatos: [new Fato('', '', 'Propriedade', '', [], 'Rio de Janeiro')],
};

export const MarcoaAbolicao_VentreLivreII_MiguelPastor: Obra = {
    ID: 1049,
    Artistas: [artistas.MiguelPastor],
    Titulo: `Marco a Abolicão -  Ventre Livre II`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Monolito`,
    Material: `Peça em concreto com imagem em argamassa`,
    Descricao: `O Monumento é composto por uma coluna revestida em placas de mármore preta com uma figura feminina com uma criança no colo, com as mãos voltadas para o alto e ventre vazado`,
    Execucao: true,
    DataInauguracao: `01/1960`,
    Latitude: `-22.8986335`,
    Longitude: `-43.5631772`,
};

export const PisodePedeMolequedaPontedosJesuitas_Desconhecida: Obra = {
    ID: 1050,
    Artistas: [artistas.Desconhecida],
    Titulo: `Piso de Pé de Moleque da Ponte dos Jesuítas`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Construção`,
    Material: `Seixos e lascas de granito`,
    Descricao: `Piso original executado com pedaços ou lascas de granito.`,
    Execucao: true,
    DataInauguracao: ``,
    Latitude: `-22.8724007`,
    Longitude: `-43.6760928`,
};

export const HenriqueDodsworth_HonorioPecanha: Obra = {
    ID: 1051,
    Artistas: [artistas.HonorioPecanha],
    Titulo: `Henrique Dodsworth`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Escultura`,
    Material: `Peça em bronze com pedestal de granito`,
    Descricao: `Homenagem ao antigo prefeito da cidade, por iniciativa do moradores do bairro de Jacarepaguá.`,
    Execucao: true,
    DataInauguracao: `10/1945`,
    Latitude: `-22.9404063`,
    Longitude: `-43.3437331`,
};

export const DianadeGabies_Desconhecida: Obra = {
    ID: 1052,
    Artistas: [artistas.Desconhecida],
    Titulo: `Diana de Gabies`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Escultura`,
    Material: `Peça em ferro fundido`,
    Descricao: `Escultura inicialmente instalada no Passeio Público da Cidade. Na praça existia um pequeno Chafariz conhecido
    como As crianças e o guarda-chuva, inaugurado em 1936. Com o seu desaparecimento foi substituído por esta escultura.
    É uma reprodução em ferro fundida da existente do Museu do Louvre.`,
    Execucao: true,
    DataInauguracao: ``,
    Zona: 'Oeste',
    Bairro: 'Jacarepaguá',
    PontoDeReferencia: 'Praça Barão da Taquara',
    Latitude: `-22.8976865`,
    Longitude: `-43.3521423`,
    Fatos: [new Fato('', '', 'Propriedade', 'Pública', [], 'Rio de Janeiro')],
};

export const CaramanchaodaPracaBaraodeTaquara_DavidXavierdeAzambuja_AzevedoNeto: Obra = {
    ID: 1053,
    Artistas: [artistas.DavidXavierdeAzambuja, artistas.AzevedoNeto],
    Titulo: `Caramanchão da Praça Barão de Taquara`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Caramanchão`,
    Material: `Peça em argamassa armada`,
    Descricao: `Construção em argamassa armada, imitando tronco de árvore num semicírculo, que sustenta a vegetação de flores. Projeto de 1939 foi inaugurado com a reforma total da praça em 1939.`,
    Execucao: true,
    DataInauguracao: `10/1939`,
    Latitude: `-22.8976865`,
    Longitude: `-43.3521423`,
};

export const CoretodaPracaBaraodaTaquaraconhecidaPracaSeca_Desconhecida: Obra = {
    ID: 1054,
    Artistas: [artistas.Desconhecida],
    Titulo: `Coreto da Praça Barão da Taquara, conhecida Praça Seca`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Construção`,
    Material: `Madeira`,
    Descricao: `Construção em madeira octogonal com embasamento revestido em alvenaria de pedras O guarda-corpo e as colunas são em madeira. ESse coreto foi transferido em 1928 da Praça Onze de Julho no Centro para essa praça.`,
    Execucao: true,
    DataInauguracao: `01/1928`,
    Latitude: `-22.8975516`,
    Longitude: `-43.3522746`,
};

export const MastrodaPracaBaraodaTaquaraconhecidaPracaSeca_Desconhecida: Obra = {
    ID: 1055,
    Artistas: [artistas.Desconhecida],
    Titulo: `Mastro da Praça Barão da Taquara, conhecida Praça Seca`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Construção`,
    Material: `Peça de Madeira`,
    Descricao: `Mastro em madeira maciça instalado na praça como marco de sua inauguração, conservando até hoje a placa comemorativa.`,
    Execucao: true,
    DataInauguracao: `01/1936`,
    Latitude: `-22.8975516`,
    Longitude: `-43.3522746`,
};

export const RelogiodoSol_Archi5ArquitetosAssociados: Obra = {
    ID: 1056,
    Artistas: [artistas.Desconhecida],
    Titulo: `Relógio do Sol`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Escultura`,
    Material: `Peça em concreto com estrutura de metal`,
    Descricao: `Archi 5 Arquitetos Associados Ltda - Trata-se de um relogio solar desenvolvido pelo fisico Marcomede Rangel Nunes e o arquiteto da Fundação Parques e Jardins e projetado pelo escritorio de Arquitetura Archi 5. É um peça em concreto circular situado no centro da praça .`,
    Execucao: true,
    DataInauguracao: `09/2002`,
    Latitude: `-22.914474`,
    Longitude: `-43.3808532`,
};

export const MarcoaBibliaSagrada_Desconhecida: Obra = {
    ID: 1057,
    Artistas: [artistas.Desconhecida],
    Titulo: `Marco a Bíblia Sagrada`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Marco`,
    Material: `Bloco de granito com placa de bronze`,
    Descricao: `Monumento composto por um bloco de pedra bruta com uma peça em formato de livro nela encravada.`,
    Execucao: true,
    DataInauguracao: ``,
    Latitude: `-22.9474803`,
    Longitude: `-43.3605231`,
};

export const AviadoresdoCampodosAfonsos_RebecaMatteIñiguez: Obra = {
    ID: 1058,
    Artistas: [artistas.RebecaMatteIñiguez],
    Titulo: `Aviadores do Campo dos Afonsos`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Escultura`,
    Material: `Peça em bronze e pedestal de granito`,
    Descricao: `Escultura simbolizando a luta pela conquista do ar através das figuras Dédalo contemplando Ícaro, seu filho, morto. Foi uma doação do povo chileno à Cidade, durante as comemorações do Centenário da Independência, como reconhecimento à Santos Dumont na descoberta do mais pesado que o ar.
Inaugurado na Praça Mauá, foi transferido em 1937 para o Campo dos Afonsos.`,
    Execucao: true,
    DataInauguracao: `11/1923`,
    Latitude: `-22.8828759`,
    Longitude: `-43.3836072`,
};

export const CoretodaPracaH_Desconhecida: Obra = {
    ID: 1059,
    Artistas: [artistas.Desconhecida],
    Titulo: `Coreto da Praça H`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Construção`,
    Material: `Peça de tijolo com argamassa`,
    Descricao: `Construção hexagonal, com três metros de altura, abrigando dois banheiros no embasamento e estrutura de madeira e telhas no piso superior para vigilancia da praça.`,
    Execucao: true,
    DataInauguracao: `03/2002`,
    Latitude: `-22.887746`,
    Longitude: `-43.3923159`,
};

export const SaoJorge_RicoReis: Obra = {
    ID: 1060,
    Imagem: 'SaoJorge_RicoReis.jpg',
    Artistas: [artistas.RicoReis],
    Titulo: `São Jorge`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Escultura`,
    Material: `Peça em resina policromada`,
    Descricao: `Escultura a imagem tradicional de São Jorge, sobre um cavalo com a lança para matar uma serpente. A escultura
    em fibra de alta resistência. Esta sobre um pedestal de concreto de forma piramidal.`,
    Altura: '170 cm',
    Execucao: true,
    DataInauguracao: `06/2007`,
    Zona: 'Oeste',
    Bairro: 'Sulacap',
    PontoDeReferencia: 'Praça Pardinho',
    Latitude: `-22.8855537`,
    Longitude: `-43.3758254`,
    Fatos: [new Fato('', '', 'Propriedade', 'Pública', [], 'Rio de Janeiro')],
};

export const ChafarizdaPracaBaraodaTaquara_Desconhecida: Obra = {
    ID: 1061,
    Artistas: [artistas.Desconhecida],
    Titulo: `Chafariz da Praça Barão da Taquara`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Chafariz`,
    Material: `Peça em concreto armado`,
    Descricao: `Chafariz com três jorros de água circundando o caramanchão. Foi construuido para substituir o Chafariz "O menino com Guarda Chuva" retirado em 14/01/1964 ( para local ignorado, conforme noticiado no jornal Ultima Hora em 1964), que era circundado por um lago. Em 1977 o lago foi ampliado e criado o Chafariz com jorro.
O Chafariz esta desativado desde maio de 2017.`,
    Execucao: true,
    DataInauguracao: `01/1977`,
    Latitude: `-22.8976865`,
    Longitude: `-43.3521423`,
};

export const ChafarizOutono_MathurinMoreau: Obra = {
    ID: 1062,
    Artistas: [artistas.MathurinMoreau],
    Titulo: `Chafariz Outono`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Chafariz`,
    Material: `Peça e pedestal em ferro fundido`,
    Descricao: `O Chafariz em ferro fundido foi doado pelo Barão da Taquara para o embelezamento da localidade e o abastecimento dos animais que por ali passavam. Um pedestal quadrangular, tendo em cada face uma carranca que verte água numa bacia em semicírculo, serve de pedestal a uma graciosa estátua masculina, representando a estação.`,
    Execucao: true,
    DataInauguracao: `08/1923`,
    Latitude: `-22.9166383`,
    Longitude: `-43.4146136`,
};

export const BaraodaTaquara_BenevenutaBerna: Obra = {
    ID: 1063,
    Artistas: [artistas.BenevenutaBerna],
    Titulo: `Barão da Taquara`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Escultura`,
    Material: `Peça em bronze e pedestal de granito`,
    Descricao: `O Monumento foi reguido numa homenagem de gratidão dos moradores de Jacarepaguá e por interferência da Irmandade de Nossa Senhora de Paula e pelo Centro Carioca.`,
    Execucao: true,
    DataInauguracao: `10/1939`,
    Latitude: `-22.8973527`,
    Longitude: `-43.3521058`,
};

export const ChafarizdoMuseupersonalidadesNacional_RobertoBurleMarx: Obra = {
    ID: 1065,
    Artistas: [artistas.RobertoBurleMarx],
    Titulo: `Chafariz do  Museu personalidades Nacional`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Chafariz`,
    Material: `Peça em concreto armado`,
    Descricao: `O Chafariz faz parte do conjunto paisagistico desenvolvido para a antiga Praça Marechal Ancora.
Desativado desde maio de 2017.`,
    Execucao: true,
    DataInauguracao: `01/2003`,
    Latitude: `-22.9056982`,
    Longitude: `-43.170579`,
};

export const MarcodaRemodelacaodaEstradadaGavea_Desconhecida: Obra = {
    ID: 1066,
    Artistas: [artistas.Desconhecida],
    Titulo: `Marco da Remodelação da Estrada da Gávea`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Escultura`,
    Material: `Monolitico de granito com placa de bronze`,
    Descricao: `Marco comemorativa da remodelação da Estrada da Gávea.`,
    Execucao: true,
    DataInauguracao: `06/1938`,
    Latitude: `-22.9988731`,
    Longitude: `-43.2690005`,
};

export const PassareladeOscarNiemeyer_OscarNiemeyer: Obra = {
    ID: 1067,
    Artistas: [artistas.OscarNiemeyer],
    Titulo: `Passarela de Oscar Niemeyer`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Construção`,
    Material: `Peça em concreto armado`,
    Descricao: `Passarela em concreto com três rampas em curva conectando a Rocinha com o lado oposto da Auto-estrada Lagoa-Barra, numa extensão total de 60 metros. Sobre a passarela ergue-se um arco que dá sustentação a passarela, inspirado em outra obra do grande arquiteto, o Sambódromo, de 1984.<`,
    Execucao: true,
    DataInauguracao: `06/2010`,
    Latitude: `-22.9922487`,
    Longitude: `-43.2510496`,
};

export const CoretodoLargodaBarrinha_Desconhecida: Obra = {
    ID: 1068,
    Artistas: [artistas.Desconhecida],
    Titulo: `Coreto do Largo da Barrinha`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Construção`,
    Material: `Peças de tijolo e argamassa`,
    Descricao: `Construção em de tijolo e argamassa, comcobertura em telha francesa, para a realização de pequenas apresentações .`,
    Execucao: true,
    DataInauguracao: `08/1996`,
    Latitude: `-23.0105475`,
    Longitude: `-43.2971808`,
};

export const SaoFranciscodePaula_GiovanniBattistaMaini: Obra = {
    ID: 1069,
    Artistas: [artistas.GiovanniBattistaMaini],
    Titulo: `São Francisco de Paula`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Escultura`,
    Material: `Peça em argamassa armada`,
    Descricao: `A escultura foi inaugurada na data comemorativa dos 40 anos da Ordem dos Mínimos do Brasil na Barra da Tijuca.`,
    Execucao: true,
    DataInauguracao: `11/1995`,
    Zona: 'Oeste',
    Bairro: 'Barra da Tijuca',
    PontoDeReferencia: 'Praça Euvaldo Lodi',
    Latitude: `-23.008364`,
    Longitude: `-43.3046528`,
    Lugar: 'Praça',
    Fatos: [
        new Fato('', '', 'Propriedade', 'Pública', [], 'Rio de Janeiro'),
        new Fato('', '', 'Réplica', 'Réplica da obra do escultor setecentista Giovanni Battista Maini, na Basílica de São Pedro, no Vaticano.', [], 'Roma'),
    ],
};

export const Carnica_AnaluNabuco: Obra = {
    ID: 1070,
    Artistas: [artistas.AnaluNabuco],
    Titulo: `Carniça`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Escultura`,
    Material: `Peça em argamassa`,
    Descricao: `Escultura patrocinada pelo Apoio Espaço 41 Oficina de Arte e doada à Cidade do Rio de Janeiro.`,
    Execucao: true,
    DataInauguracao: `01/1997`,
    Zona: 'Oeste',
    Bairro: 'Barra da Tijuca',
    PontoDeReferencia: 'Praça Professor Souza Araújo',
    Latitude: `-23.0069404`,
    Longitude: `-23.0069404`,
    Lugar: 'Praça',
    Fatos: [
        new Fato('', '', 'Propriedade', 'Pública', [], 'Rio de Janeiro'),
        new Fato('', '', 'Doação', 'Patrocínio Espaço 41 Oficina de Arte', [], 'Rio de Janeiro'),
    ],
};

export const ÂncoradaBarra_Desconhecida: Obra = {
    ID: 1071,
    Artistas: [artistas.Desconhecida],
    Titulo: `Âncora da Barra`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Construção`,
    Material: `Peça em ferro fundido`,
    Descricao: `É uma peça de ferro do século XIX doada pela Marinha do Brasil à Cidade do Rio de Janeiro.`,
    Execucao: true,
    DataInauguracao: `10/1990`,
    Latitude: `-23.0105008`,
    Longitude: `-43.3660239`,
    Fatos: [new Fato('data', 'data', 'fato', 'descrição', [], 'cidade')],
};

export const AoPAN2007_RobertoKenjiFukuda: Obra = {
    ID: 1072,
    Imagem: 'AoPAN2007_RobertoKenjiFukuda.jpg',
    Artistas: [artistas.RobertoKenjiFukuda],
    Titulo: `Ao  PAN 2007`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Escultura`,
    Material: `Peça em resina`,
    Descricao: `Escultura composta por um globo terrestre com o mapa do continente americano dos dois lados, demarcando a parte
    do planeta onde se realiza a competição. Atletas representantes do basquete, do velocismo e do tênis sustentam o globo. A obra
    foi doada à Cidade pelas construtoras Carvalho Hosken e a RJZ Cyrela. Foram necessários seis meses para que a escultura ficasse pronta.
    Precisou ser dividida em duas partes devido ao tamanho, foram necessárias mais duas semanas até que a montagem pudesse ser
    concluída no local definitivo.`,
    Altura: '1500 cm',
    Peso: '5000 kg',
    Execucao: true,
    DataInauguracao: `07/2007`,
    Latitude: `-22.9734851`,
    Longitude: `-43.3639193`,
    Fatos: [new Fato('', '', 'Propriedade', 'Pública', [], 'Rio de Janeiro')],
};

export const PaineldoBosquedaBarra_PauloFreire: Obra = {
    ID: 1073,
    Artistas: [artistas.PauloFreire],
    Titulo: `Painel do Bosque da Barra`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Escultura`,
    Material: `Mosaico de azulejos`,
    Descricao: `No portão de acesso ao parque foi instalado um mosaico de azulejos, retratando o Canal de Marapendi, a Pedra da Gávea e o mar da Barra.`,
    Execucao: true,
    DataInauguracao: `01/2000`,
    Latitude: `-22.9999156`,
    Longitude: `-43.3716871`,
};

export const Hibisco_VaniaVilela: Obra = {
    ID: 1074,
    Imagem: 'Hibisco_VaniaVilela.jpg',
    Artistas: [artistas.VaniaVilela],
    Titulo: `Hibisco`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Escultura`,
    Material: `Peça em metal pintada`,
    Descricao: `A escultura representa a flora brasileira e foi doada à Cidade pelo Projeto Esculturas Monumentais do RB1.
    Escultura abstrata em ferro pintada nas cores preto e vermelho com recortes, com cerca de 3 metros a peça maior e 2,50 a menor,
    cria a peça uma dimensão lúdica. A peça esta desaparecida desde a obra da duplicação do Viaduto do Joá, que retirou para a
    execução da obra`,
    Execucao: true,
    DataInauguracao: `06/2000`,
    Latitude: ``,
    Longitude: ``,
    Remocao: true,
    Realocacao: false,
    Fatos: [new Fato('', '', 'Propriedade', 'Pública', [], 'Rio de Janeiro')],
};

export const MonumentoAUniaodosPovosAmericanos_MarioAgostinelli: Obra = {
    ID: 1075,
    Artistas: [artistas.MarioAgostinelli],
    Titulo: `Monumento à União dos Povos Americanos`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Monumento`,
    Material: `Peça em bronze com pedestal em concreto revestido por mármore branco.`,
    Descricao: `Monumento composto por três figuras femininas em bronze com uma bandeira, entre elas, simbolizando a união das Três Américas sobre um pedestal. O monumento foi retirado do canteiro central para as obras do metro retornando para o espaço publico em 2016.`,
    Execucao: true,
    DataInauguracao: `01/1955`,
    Zona: 'Oeste',
    Bairro: 'Barra da Tijuca',
    PontoDeReferencia: 'Canteiro Central da Avenida Armando Lombardi',
    Latitude: `-23.0071074`,
    Longitude: `-43.3046769`,
    Remocao: true,
    Realocacao: true,
    Fatos: [
        new Fato(
            '01/1955',
            '01/1955',
            'Inauguração',
            'O monumento foi criado em homenagem aos 10 anos de criação da Associação Comercial e Industrial da Barra',
            [],
            'Rio de Janeiro',
        ),
        new Fato('', '', 'Remoção', 'O monumento foi retirado do canteiro central para as obras do metro', [], 'Rio de Janeiro'),
        new Fato('2016', '2016', 'Realocação', 'O monumento foi retirado do canteiro central para as obras do metro', [], 'Rio de Janeiro'),
    ],
};

export const SemTítulo_RobertoBurleMarx: Obra = {
    ID: 1076,
    Imagem: 'SemTítulo_RobertoBurleMarx.jpg',
    Artistas: [artistas.RobertoBurleMarx],
    Titulo: `Sem Título`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Escultura`,
    Material: `Peça em argamassa armada policromada`,
    Descricao: `Execução de Gian Carlo Patuzzi - A homenagem foi prestada uma homenagem ao diplomata Heitor Bastos Tigre,
    dedicando-lhe uma praça no Recreio dos Bandeirantes, em retribuição ao preito de sua família, com o intuito de reverenciar
    a memória de seu ente querido, encomendou uma escultura do renomado artista Roberto Burle Marx, o que caracterizou também
    um presente ao Rio de Janeiro.`,
    Execucao: true,
    DataInauguracao: `01/1989`,
    Zona: 'Oeste',
    Bairro: 'Recreio dos Bandeirantes',
    PontoDeReferencia: 'Praça',
    Latitude: `-23.0164763`,
    Longitude: `-43.4724718`,
    Fatos: [new Fato('', '', 'Propriedade', 'Pública', [], 'Rio de Janeiro')],
};

export const AmuradadoParqueNaturalMunicipalChicoMendes_Desconhecida: Obra = {
    ID: 1077,
    Artistas: [artistas.Desconhecida],
    Titulo: `Amurada do Parque Natural Municipal Chico Mendes`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Amurada`,
    Material: `Tijolo com argamassa`,
    Descricao: `Construção de tijolo fazendo limites do parque.`,
    Execucao: true,
    DataInauguracao: ``,
    Latitude: `-23.0222431`,
    Longitude: `-43.4716809`,
};

export const PedraTalhada_Desconhecida: Obra = {
    ID: 1078,
    Artistas: [artistas.Desconhecida],
    Titulo: `Pedra Talhada`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Escultura`,
    Material: `Bloco de gnaisse esculpido`,
    Descricao: `Bloco de gnaisse em cantaria com a meia cabeça feminina esculpida.`,
    Execucao: true,
    DataInauguracao: ``,
    Latitude: `-23.0224656`,
    Longitude: `-43.4718755`,
    Fatos: [new Fato('', '', 'Propriedade', 'Pública', [], 'Rio de Janeiro')],
};

export const Capivaras_PaulodeTarso: Obra = {
    ID: 1079,
    Artistas: [artistas.PaulodeTarso],
    Titulo: `Capivaras`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Escultura`,
    Material: `Peça em argamassa armada policromada`,
    Descricao: `Trata-se de três esculturas de capivaras executadas em argamassa armada de uma mãe e seu filhote exposta num espaço do parque destinado a educação ambiental.`,
    Execucao: true,
    DataInauguracao: `01/2014`,
    Latitude: `-23.0203531`,
    Longitude: `-43.4506474`,
};

export const MarcoRodoviariodaEstradadosBandeirantes_Desconhecida: Obra = {
    ID: 1080,
    Artistas: [artistas.Desconhecida],
    Titulo: `Marco Rodoviário da Estrada dos Bandeirantes`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Marco`,
    Material: `Bloco de gnaisse esculpido`,
    Descricao: `O marco tem na sua face frontal, a indicação ERF (Estrada de Rodagem Federal) e informam a distância em quilômetros dali até o Centro. Na face posterior, há a inscrição DF (Distrito Federal). Nas faces esquerda e direita registram a distância de duas localidades próximas.`,
    Execucao: true,
    DataInauguracao: ``,
    Latitude: `-23.0108388`,
    Longitude: `-43.5185713`,
};

export const APepeLopes_VeraTorres: Obra = {
    ID: 1081,
    Imagem: 'APepeLopes_VeraTorres.jpg',
    Artistas: [artistas.VeraTorres],
    Titulo: `À Pepê Lopes`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Escultura`,
    Material: `Peça em bronze com pedestal revestido de granito`,
    Descricao: `Escultura em bronze composta por uma prancha e uma asa delta, sobre um pedestal um granito. Foi inaugurado pela
    esposa Ana Carolina e seus filhos Bianca e João Pedro. A homenagem foi contratado por sufistas e patrocinadores.`,
    Execucao: true,
    DataInauguracao: `10/1991`,
    Zona: 'Oeste',
    Bairro: 'Barra da Tijuca',
    PontoDeReferencia: 'Av. Pepe Lopes',
    Latitude: `-23.0143024`,
    Longitude: `-43.3120514`,
    Fatos: [new Fato('', '', 'Propriedade', 'Pública', [], 'Rio de Janeiro')],
};

export const MariaAugusta_MarliMazeredo: Obra = {
    ID: 1082,
    Imagem: 'MariaAugusta_MarliMazeredo.jpg',
    Artistas: [artistas.MarliMazeredo],
    Titulo: `Maria Augusta`,
    Classificacao: 'perene',
    Categoria: 'personalidades',
    TipologiaObra: `Busto`,
    Material: `Peça em bronze com pedestal revestido de granito`,
    Descricao: `Busto em bronze, tendo ao fundo uma estrutura em ferro triangular vermelho, erigido por iniciativa do vereador
    Sami Jorge.`,
    Execucao: true,
    DataInauguracao: `09/2000`,
    Zona: 'Oeste',
    Bairro: 'Barra da Tijuca',
    PontoDeReferencia: 'R. do Pepê',
    Latitude: `-23.0142532`,
    Longitude: `-43.2981008`,
    Fatos: [new Fato('', '', 'Propriedade', 'Pública', [], 'Rio de Janeiro')],
};

export const AmericoVespucio_ArmandoAmaya: Obra = {
    ID: 1083,
    Imagem: 'AmericoVespucio_ArmandoAmaya.jpg',
    Artistas: [artistas.ArmandoAmaya],
    Titulo: `Américo Vespúcio`,
    Classificacao: 'perene',
    Categoria: 'personalidades',
    TipologiaObra: `Busto`,
    Material: `Peça em bronze com pedestal revestido de granito`,
    Descricao: `A homenagem foi executada em 1985, e doado à cidade do Rio de Janeiro pelo Kiwanis Club, de Glendade, Califórnia,
    EUA.`,
    Execucao: true,
    DataInauguracao: `04/1987`,
    Zona: 'Oeste',
    Bairro: 'Barra da Tijuca',
    PontoDeReferencia: 'Praça do Ó',
    Latitude: `-23.0130247`,
    Longitude: `-43.3176068`,
    Fatos: [new Fato('', '', 'Propriedade', 'Pública', [], 'Rio de Janeiro')],
};

export const GeneralJoaquimInacioCardoso_SMartinsRibeiro: Obra = {
    ID: 1084,
    Artistas: [artistas.SMartinsRibeiro],
    Titulo: `General Joaquim Inácio Cardoso`,
    Classificacao: 'perene',
    Categoria: 'personalidades',
    TipologiaObra: `Busto`,
    Material: `Peça em bronze e pedestal de granito`,
    Descricao: `O monumento foi inaugurado em 1938 na Rua General Canabarro. Posteriormente foi transferido para o Campo de
    São Cristóvão, em 1967, perto do quartel que comandou. Em 1988, o busto foi transferido para a Barra da Tijuca, na Rua
    General Felicíssimo Cardoso, local que homenagea o irmão do General Ignácio.`,
    Execucao: true,
    DataInauguracao: `01/1938`,
    Latitude: `-23.0003431`,
    Longitude: `-43.3536991`,
    Fatos: [new Fato('data', 'data', 'fato', 'descrição', [], 'cidade')],
};

export const AlmiranteMiguelGrau_PedroMMartinezCorada: Obra = {
    ID: 1085,
    Artistas: [artistas.PedroMMartinezCorada],
    Titulo: `Almirante Miguel Grau`,
    Classificacao: 'perene',
    Categoria: 'personalidades',
    TipologiaObra: `Busto`,
    Material: `Peça em bronze e concreto`,
    Descricao: `Busto foi doado à cidade do Rio de Janeiro pela Marinha de Guerra Peruana.`,
    Execucao: true,
    DataInauguracao: `01/1994`,
    Zona: 'Oeste',
    Bairro: 'Barra da Tijuca',
    PontoDeReferencia: 'Av. Ayrton Senna',
    Latitude: `-23.010372`,
    Longitude: `-43.366192`,
    Lugar: 'Canteiro',
    Fatos: [new Fato('', '', 'Propriedade', 'Pública', [], 'Rio de Janeiro'), new Fato('', '', 'Doação', 'Marinha de Guerra Peruana', [], 'Rio de Janeiro')],
};

export const ChicoMendes_SimoneGiacobbo: Obra = {
    ID: 1086,
    Imagem: 'ChicoMendes_SimoneGiacobbo.jpg',
    Artistas: [artistas.SimoneGiacobbo],
    Titulo: `Chico Mendes`,
    Classificacao: 'perene',
    Categoria: 'personalidades',
    TipologiaObra: `Busto`,
    Material: `Peça em bronze e pedestal de granito`,
    Descricao: `Busto em bronze em homenagem ao grande ambientalista brasileiro, patrono do parque. Foi uma doação do Lions
    Clube do Brasil resultado de uma subscrição de um grupo de amigos.`,
    Execucao: true,
    DataInauguracao: `06/2006`,
    Zona: 'Oeste',
    Bairro: 'Recreio dos Bandeirantes',
    PontoDeReferencia: 'Parque Natural Municipal Chico Mendes',
    Latitude: `-23.0226597`,
    Longitude: `-43.4716789`,
    Fatos: [new Fato('', '', 'Propriedade', 'Pública', [], 'Rio de Janeiro')],
};

export const DraultErnanny_Desconhecida: Obra = {
    ID: 1087,
    Imagem: 'DraultErnanny_Desconhecida.jpg',
    Artistas: [artistas.Desconhecida],
    Titulo: `Drault Ernanny`,
    Classificacao: 'perene',
    Categoria: 'personalidades',
    TipologiaObra: `Busto`,
    Material: `Peça em bronze e pedestal de granito`,
    Descricao: `Homenagem ao médico, político e empresário que doou ao município as áreas hoje consideradas monumentos
    naturais na Barra da Tijuca, Recreio dos Bandeirantes e Vargem Grande.
O Parque Chico Mendes foi inauurado em 1989, ocupando uma area de 400 mil metros quadrados doada por Drault. Foi encomendado
pela Associação dos Moradores do Recreio. Com 95 anos o homenageado esteve presente a inauguração.`,
    Execucao: true,
    DataInauguracao: `05/2001`,
    Zona: 'Oeste',
    Bairro: 'Recreio dos Bandeirantes',
    PontoDeReferencia: 'Parque Natural Municipal Chico Mendes',
    Latitude: `-23.0226597`,
    Longitude: `-43.4716789`,
    Fatos: [new Fato('', '', 'Propriedade', 'Pública', [], 'Rio de Janeiro')],
};

export const JoseBaltazar_Desconhecida: Obra = {
    ID: 1088,
    Artistas: [artistas.Desconhecida],
    Titulo: `José Baltazar`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Escultura`,
    Material: `Peça em mármore com pedestal de concreto`,
    Descricao: `Peça em mármore esculpida com as feições do médico e benfeitor da região, doada por sua família.`,
    Execucao: true,
    DataInauguracao: `09/2014`,
    Latitude: `-22.9761322`,
    Longitude: `-43.4942274`,
};

export const ChafarizFlordeLotus_SergioMoreiraDias: Obra = {
    ID: 1090,
    Artistas: [artistas.SergioMoreiraDias],
    Titulo: `Chafariz Flor de Lótus`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Chafariz`,
    Material: `Peça em concreto armado`,
    Descricao: `Fonte ornamental com diversos jorros de água verticais, onde o piso em granito de diversas cores forma uma flor de lótus. Foi instalado pelo projeto Rio Orla.
Esta desativado desde o ano de 2004.`,
    Execucao: true,
    DataInauguracao: `09/2002`,
    Latitude: `-23.0343665`,
    Longitude: `-43.4922416`,
};

export const ChafarizRosadosVentos_SergioMoreiraDias: Obra = {
    ID: 1091,
    Artistas: [artistas.SergioMoreiraDias],
    Titulo: `Chafariz Rosa dos Ventos`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Chafariz`,
    Material: `Peça em concreto revestido por granito`,
    Descricao: `Fonte ornamental com diversos jorros de água verticais, onde o piso em granito de diversas cores forma uma rosa dos ventos. Foi instalado pelo projeto Rio Orla.
Esta desativado desde o ano de 2004.`,
    Execucao: true,
    DataInauguracao: `11/2004`,
    Latitude: `-23.0308789`,
    Longitude: `-43.4709579`,
};

export const ChafarizdoParqueNaturalMunicipalChicoMendes_Desconhecida: Obra = {
    ID: 1092,
    Artistas: [artistas.Desconhecida],
    Titulo: `Chafariz do Parque Natural Municipal Chico Mendes`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Chafariz`,
    Material: `Peça em ferro fundido`,
    Descricao: `Pequeno Chafariz composto por uma bacia, uma coluna e um peixe em ferro fundido, com um pequeno lago no entorno.`,
    Execucao: true,
    DataInauguracao: ``,
    Latitude: `-23.0224711`,
    Longitude: `-43.4718018`,
};

export const FontedaBarrinha_Desconhecida: Obra = {
    ID: 1093,
    Artistas: [artistas.Desconhecida],
    Titulo: `Fonte da Barrinha`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Fonte`,
    Material: `Pedra com argamassa`,
    Descricao: `Pequena construção de acesso a fonte natural.`,
    Execucao: true,
    DataInauguracao: ``,
    Latitude: `-23.0075138`,
    Longitude: `-43.2930838`,
};

export const ChafarizdoPomardaBarra_LuizVerdugo: Obra = {
    ID: 1095,
    Artistas: [artistas.LuizVerdugo],
    Titulo: `Chafariz do  Pomar da Barra`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Chafariz`,
    Material: `Peça em concreto`,
    Descricao: `Inicialmente existia um bola de hastes em aço onde das extremidades onde jorra a água em jatos, criando uma névoa. Devido aos constantes danos da esfera, essa foi retirada e em 2002, o Chafariz retornou ao funcionamento com um jorro central, e a água escorrendo das bacias de concreto. Em 2015 a bacia foi revestida de plastilha verde.
Esta desativado desde maio de 2017.`,
    Execucao: true,
    DataInauguracao: `01/1992`,
    Latitude: `-23.0114607`,
    Longitude: `-43.3097004`,
};

export const Bailarina_Desconhecida: Obra = {
    ID: 1096,
    Artistas: [artistas.Desconhecida],
    Titulo: `Bailarina`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Escultura`,
    Material: `Peça em mármore de Carrara`,
    Descricao: `Réplica de Pau Darbefeuille inaugurado em 1908 na Praia de Botafogo. Foi transferido para o Largo do Tanque e
    em seguida janeiro de 1996 para essa praça. A escultura é uma cópia da de ferro fundido executado pelas fundições de
    Val d'Osne. Distingui-se da original por não ter em uma de suas mãos um pandeiro.`,
    Execucao: true,
    DataInauguracao: `01/1908`,
    Zona: 'Oeste',
    Bairro: 'Jacarepaguá',
    PontoDeReferencia: 'Praça Leonel Mesquita',
    Latitude: `-22.9284938`,
    Longitude: `-43.3337228`,
    Fatos: [new Fato('', '', 'Propriedade', 'Pública', [], 'Rio de Janeiro')],
};

export const BancodaEstradadoJoa_Desconhecida: Obra = {
    ID: 1097,
    Artistas: [artistas.Desconhecida],
    Titulo: `Banco da Estrada do Joá`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Construção`,
    Material: `Pecas de tijolo com argamassa`,
    Descricao: `Bancos construidos ao longo da murada que protege a estrada.`,
    Execucao: true,
    DataInauguracao: `06/1938`,
    Latitude: `-23.006061`,
    Longitude: `-43.2837625`,
};

export const ChafarizdoLargodoTanque_deposito_Desconhecida: Obra = {
    ID: 1098,
    Artistas: [artistas.Desconhecida],
    Titulo: `Chafariz do Largo do Tanque - depósito`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Chafariz`,
    Material: `Bloco de gnaisse esculpido`,
    Descricao: `O Chafariz inaugurado pelo represetante do governador Rafael Magalhães Foi desmontado em 2013 para a construção da Trans-Carioca. A bacia do Chafariz em gnaisse, foi doada ao municipio pelo Arquivo Nacional.
    Em 1964 foi inaugurado como fonte luminosa com um pedestal e uma bela escultura em marmore "A Bailarina". Em 1996, após tersofrido depredação, teve seus dois braços e cabeça quebrados. Foi recolhida para restauração,
    sendo no mesmo ano reinstalada na praça Leone Mesquita. No local da escultura foi colocado um vaso de argamassa proveniente da Praça VI de Junho. Desativado em data desconhecida.`,
    Execucao: true,
    DataInauguracao: `07/1964`,
    Latitude: `-22.9067928`,
    Longitude: `-43.1973384`,
};

export const AtenadoBosquedaFreguesia_Desconhecida: Obra = {
    ID: 1099,
    Artistas: [artistas.Desconhecida],
    Titulo: `Atena do Bosque da Freguesia`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Escultura`,
    Material: `Peça em mármore de Carrara`,
    Descricao: `A escultura que representa a Deusa das Artes. Foi retirada em 1988 da Praça das Nações e transferida para o depósito da Prefeitura da época. Em 1994 foi instalada para o parque a fim de embelezar o espaço.`,
    Execucao: true,
    PontoDeReferencia: 'Praça das Nações',
    Lugar: 'Praça',
    Remocao: true,
    DataRealocacao: `01/1994`,
    Realocacao: true,
    ZonaRealocacao: 'Oeste',
    BairroRealocacao: 'Anil',
    PontoDeReferenciaorealocacao: 'Bosque da Freguesia',
    LatitudeRealocacao: `-22.9491035`,
    LongitudeRealocacao: `-43.3409763`,
    LugarRealocacao: 'Parque',
    Fatos: [
        new Fato('1988', '1988', 'Remoção', 'Praça das Nações', [], 'Rio de Janeiro'),
        new Fato('1994', '1994', 'Realocação', 'A obra foi reinstalada no Bosque da Freguesia a fim de embelezar o espaço', [], 'Rio de Janeiro'),
    ],
};

export const ChafarizdaPracaNunoRoland_Desconhecida: Obra = {
    ID: 1100,
    Artistas: [artistas.Desconhecida],
    Titulo: `Chafariz da Praça Nuno Roland`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Chafariz`,
    Material: `Peça em concreto`,
    Descricao: `Chafariz de concreto armado, composto por um pequeno pedestal de onde 4 carraras de leão, de onde jorrava a agua e três bacias sobrepostas, formando uma cascata.
Desativado em data desconhecida.`,

    Execucao: true,
    DataInauguracao: ``,
    Latitude: `-22.8901631`,
    Longitude: `-43.400262`,
};

export const ChafarizdaRuaVictorCivita_Desconhecida: Obra = {
    ID: 1101,
    Artistas: [artistas.Desconhecida],
    Titulo: `Chafariz da Rua Victor Civita`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Chafariz`,
    Material: `Peça em concreto revestido por granito`,
    Descricao: `Chafariz circular com tres niveis, formando cascata entre os lagos.`,

    Execucao: true,
    DataInauguracao: ``,
    Latitude: `-22.9743569`,
    Longitude: `-43.3673349`,
};

export const FontesdaBarra_BeneditoAbbud: Obra = {
    ID: 1102,
    Artistas: [artistas.BeneditoAbbud],
    Titulo: `Fontes da Barra`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Chafariz`,
    Material: `Peça em concreto revestido por granito`,
    Descricao: `O conjunto que forma o Chafariz possuiem com 18 ( dezoito) jatos parablicos e 9 ( nove) verticais.`,

    Execucao: true,
    DataInauguracao: `12/2013`,
    Latitude: `-22.9731299`,
    Longitude: `-43.3727426`,
};

export const ChafarizEscultoricodoJardimOceanico_LeilahCosta: Obra = {
    ID: 1104,
    Artistas: [artistas.LeilahCosta],
    Titulo: `Chafariz Escultórico do Jardim Oceânico`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Chafariz`,
    Material: `Peça em concreto e metal`,
    Descricao: `Chafariz de jorro com um pequeno espelho d'agua. O Chafariz é composto por uma escultura formada por três (3) circulos de concreto vazados unidos em uma unica estrutura.
Desativado no ano de 2016.`,

    Execucao: true,
    DataInauguracao: `07/2016`,
    Latitude: `-23.0071286`,
    Longitude: `-43.3100802`,
};

export const PaineldoJardimOceanico_UrbanoAlvesIglesias: Obra = {
    ID: 1105,
    Artistas: [artistas.UrbanoAlvesIglesias],
    Titulo: `Painel do Jardim Oceânico`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Construção`,
    Material: `Peças de azulejos`,
    Descricao: `Paineis nas paredes com motivos marinhos.`,
    Execucao: true,
    DataInauguracao: `07/2016`,
    Latitude: `-23.007003`,
    Longitude: ``,
};

export const BebedourodeFidias_PedroBruno: Obra = {
    ID: 1107,
    Artistas: [artistas.PedroBruno],
    Titulo: `Bebedouro de Fídias`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Escultura`,
    Material: `Peça em argamassa armada policromada`,
    Descricao: `Construção retangular no formato de uma cisterna, com duas bacias laterais e duas ânforas, em argamassa. Nas paredes laterais há painéis de argamassa, em alto relevo, reproduzindo obra de Fídias.<
Desativado em data desconhecida.`,

    Execucao: true,
    DataInauguracao: ``,
    Latitude: `-22.7622363`,
    Longitude: `-43.1071716`,
};

export const BancodePeixedaPracaPedroBruno_PedroBruno: Obra = {
    ID: 1108,
    Artistas: [artistas.PedroBruno],
    Titulo: `Banco de Peixe da Praça Pedro Bruno`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Escultura`,
    Material: `Peça em argamassa armada policromada`,
    Descricao: `Banco de concreto com o encosto decorado com peixes estilizados em argamassa e assentos de granitinea.As obras executadas por Pedro Bruno na Ilha foram realizados nos anos de 1940.`,
    Execucao: true,
    DataInauguracao: ``,
    Latitude: `-22.7622363`,
    Longitude: `-43.1071716`,
};

export const CaramanchaodaPracaPedroBruno_PedroBruno: Obra = {
    ID: 1109,
    Artistas: [artistas.PedroBruno],
    Titulo: `Caramanchão da Praça Pedro Bruno`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Caramanchão`,
    Material: `Peça em argamassa armada policromada`,
    Descricao: `Construção em concreto, composta por pilares que suportam trepadeiras.
As obras executadas por Pedro Bruno na Ilha foram realizados nos anos de 1940.`,
    Execucao: true,
    DataInauguracao: ``,
    Latitude: `-22.7622363`,
    Longitude: `-43.1071716`,
};

export const MarcodologradourodaPracaPedroBruno_PedroBruno: Obra = {
    ID: 1110,
    Artistas: [artistas.PedroBruno],
    Titulo: `Marco do logradouro da Praça Pedro Bruno`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Marco`,
    Material: `Bloco de gnaisse esculpido`,
    Descricao: `Bloco de gnaisse maciço, com o nome do logradouro em baixo relevo.
As obras executadas por Pedro Bruno na Ilha foram realizados nos anos de 1940.`,
    Execucao: true,
    DataInauguracao: ``,
    Latitude: `-22.7622363`,
    Longitude: `-43.1071716`,
};

export const CaramanchaoBelvederedePracaBomJesus_PedroBruno: Obra = {
    ID: 1111,
    Artistas: [artistas.PedroBruno],
    Titulo: `Caramanchão Belvedere de Praça Bom Jesus`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Caramanchão`,
    Material: `Peça em argamassa armada policromada`,
    Descricao: `Construção composta por pilares revestidos de pedras, servindo de apoio a treliças para fixação da vegetação, avançado sobre o mar.O monumento foi inaugurado na Festa das Arvores e dos Passaros, quando foi realizado o plantio no pergolado.`,
    Execucao: true,
    DataInauguracao: `07/1935`,
    Latitude: `-22.7622363`,
    Longitude: `-43.1071716`,
};

export const MarcodologradourodaPraiadosTamoios_PedroBruno: Obra = {
    ID: 1115,
    Artistas: [artistas.PedroBruno],
    Titulo: `Marco do logradouro da Praia dos Tamoios`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Marco`,
    Material: `Bloco de gnaisse esculpido`,
    Descricao: `Bloco de gnaisse maciço, com o nome do logradouro em baixo relevo. As obras executadas por Pedro Bruno na Ilha foram realizados nos anos de 1940.`,
    Execucao: true,
    DataInauguracao: ``,
    Latitude: `-22.7622363`,
    Longitude: `-43.1071716`,
};

export const MarcodologradourodaPraiadosTamoiosII_PedroBruno: Obra = {
    ID: 1116,
    Artistas: [artistas.PedroBruno],
    Titulo: `Marco do logradouro da Praia dos Tamoios II`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Marco`,
    Material: `Bloco de gnaisse esculpido`,
    Descricao: `Bloco de gnaisse maciço, com o nome do logradouro em letras de bronze. As obras executadas por Pedro Bruno na Ilha foram realizados nos anos de 1940.`,
    Execucao: true,
    DataInauguracao: ``,
    Latitude: `-22.7622363`,
    Longitude: `-43.1071716`,
};

export const MarcodaLendadoBaoba_MariaGorda_Desconhecida: Obra = {
    ID: 1117,
    Artistas: [artistas.Desconhecida],
    Titulo: `Marco da Lenda do Baobá - Maria Gorda`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Marco`,
    Material: `Monolitico de concreto  com placa de bronze`,
    Descricao: `Placa com inscrição sobre a lenda do Baobá. Inicialmente não havia a placa, somente uma inscrição em madeira. Essa foi instalada no ano de 2000. A árvore de origem africana, teve o nome dado pelos nativos de "Maria Gorda" devido o tronco grosso.`,
    Execucao: true,
    DataInauguracao: ``,
    Latitude: `-22.7622363`,
    Longitude: `-43.1071716`,
};

export const CanhaodeDomJoao_PedroBruno: Obra = {
    ID: 1118,
    Artistas: [artistas.PedroBruno],
    Titulo: `Canhão de Dom João`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Construção`,
    Material: `Peça em bronze`,
    Descricao: `Canhão do período colonial, sobre um pedestal em pedras brutas, com um banco ao seu redor.
Ha referencias que D. João VI durante um temporal teve que parar em Paquetá. Ficou tão encantado com a Ilha que passou a ficar na Ilha no verão. Como recordação desse fato, restava enterrado na Praia de Bom Jesus um velho canhão.Na ocasião de uma Festa da Arvore, o Sr. Pereira da Silva, fez desenterrar o velho canhão como preciosidade histórica removendo para a Praia dos Tamoios, onde foi colocado sobre um pedestal.`,
    Execucao: true,
    DataInauguracao: ``,
    Latitude: `-22.7622363`,
    Longitude: `-43.1071716`,
};

export const CaciqueTamoioGuaixara_RaimundoReis: Obra = {
    ID: 1119,
    Artistas: [artistas.RaimundoReis],
    Titulo: `Cacique Tamoio Guaixara`,
    Classificacao: 'perene',
    Categoria: 'personalidades',
    TipologiaObra: `Busto`,
    Material: `Concreto policromado`,
    Descricao: `O monumento foi erguido pela Academia de Artes, Ciencias e Letras da Ilha de Paquetá, por ser esse um dos
    patronos da Academia, da cadeira 9. Foi instalado em frente a casa de numero 251 na Praia dos Tamoios.
O pedestal foi construido em 19 de abril de 1998 com uma placa comemorativa ao Dia do Índio tambem colocada pela Academia
de Paquetá. O busto foi um pedido do Dr. Raymundi Fernando Sampaio Rebello que ocupa a cadeira 9, do patrono homenageado
no pedestal anteriormente construido.`,
    Execucao: true,
    DataInauguracao: `07/2010`,
    Bairro: 'Paquetá',
    PontoDeReferencia: 'Praia dos Tamoios',
    Latitude: `-22.7622363`,
    Longitude: `-43.1071716`,
    Fatos: [new Fato('', '', 'Propriedade', 'Pública', [], 'Rio de Janeiro')],
};

export const PedestalVazio_UgoTaddei: Obra = {
    ID: 1121,
    Titulo: `Pedestal Vazio`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Escultura`,
    Material: `Monolitico de concreto revestido com placa de granito`,
    Descricao: `Pedestal vazio constituído por uma pequena coluna de pedras sobre base em granito. Foi erguido para receber um busto de Ataulfo de Paiva, que não aceitou a honraria, que se encontra no depósito da prefeitura.`,
    Execucao: true,
    DataInauguracao: ``,
    Latitude: `-22.7622363`,
    Longitude: `-43.1071716`,
};

export const CaramanchaodoParquedosTamoios_PedroBruno: Obra = {
    ID: 1122,
    Artistas: [artistas.PedroBruno],
    Titulo: `Caramanchão do Parque dos Tamoios`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Caramanchão`,
    Material: `Peça em argamassa armada`,
    Descricao: `Construção em concreto, composta por pilares que suportam trepadeiras emoldurando o busto de Carlos Gomes.
As obras executadas por Pedro Bruno na Ilha foram realizados nos anos de 1940.`,
    Execucao: true,
    DataInauguracao: ``,
    Latitude: `-22.7622363`,
    Longitude: `-43.1071716`,
};

export const MarcoaosEx_CombatentesdePaqueta_Desconhecida: Obra = {
    ID: 1123,
    Artistas: [artistas.Desconhecida],
    Titulo: `Marco aos Ex-Combatentes de Paquetá`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Marco`,
    Material: `Peça em concreto armado`,
    Descricao: `Inaugurado na década de 1980,<strong>< o m onumento é composto por duas colunas representante o "V" de Vitória, tendo ao entorno onze pedras onde estão fixadas placas de aço inox, com os nomes dos onze pracinhas, filhos de Paquetá, que lutaram na II Guerra Mundial: Ivo Limoeiro, José de Souza Villela, João Tinoco, Nelson Coelho Esteves, João Lessa Filho, Godofredo Figueiredo, Ivany Ferreira de Souza, Carlos Ferreira, Moacir Batista do Nascimento, João Antunes Filho e Martiniano José Pereira.`,
    Execucao: true,
    DataInauguracao: ``,
    Latitude: `-22.7622363`,
    Longitude: `-43.1071716`,
};

export const BancodaRuaPadreJuvenal_PedroBruno: Obra = {
    ID: 1124,
    Artistas: [artistas.PedroBruno],
    Titulo: `Banco da Rua Padre Juvenal`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Construção`,
    Material: `Bloco de gnaisse esculpido`,
    Descricao: `Bloco de gnaisse com o nome do logradouro em bronze e dois bancos laterais. As obras executadas por Pedro Bruno na Ilha foram realizados nos anos de 1940.`,
    Execucao: true,
    DataInauguracao: ``,
    Latitude: `-22.7622363`,
    Longitude: `-43.1071716`,
};

export const CoretodePaquetaaRenatoAntunes_CarlosWerneckdeCarvalho: Obra = {
    ID: 1125,
    Artistas: [artistas.CarlosWerneckdeCarvalho],
    Titulo: `Coreto  de Paquetá à Renato Antunes`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Construção`,
    Material: `Pecas de tijolo com argamassa`,
    Descricao: `Obra de Antonio Moreira de Souza - 
Construção de concreto hexagonal. O coreto foi construído na administração do Dr. Marcelo Cardoso, com recursos da própria comunidade e homenageia Renato Antunes, dedicado organizador de festas e celebrações populares em Paquetá.`,
    Execucao: true,
    DataInauguracao: `01/1980`,
    Latitude: `-22.7622363`,
    Longitude: `-43.1071716`,
};

export const CruzeirodePaqueta_Desconhecida: Obra = {
    ID: 1126,
    Artistas: [artistas.Desconhecida],
    Titulo: `Cruzeiro de Paquetá`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Cruzeiro`,
    Material: `Madeira`,
    Descricao: `Cruzeiro em madeira, com uma base de concreto e um veleiro, fronteiro à capela dedicada ao padroeiro da Ilha.`,
    Execucao: true,
    DataInauguracao: ``,
    Latitude: `-22.7622363`,
    Longitude: `-43.1071716`,
};

export const PocodeSaoRoque_Desconhecida: Obra = {
    ID: 1127,
    Artistas: [artistas.Desconhecida],
    Titulo: `Poço de São Roque`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Construção`,
    Material: `Pedra e tijolo com argamassa`,
    Descricao: `Construção circular com uma tampa em concreto sobre o histórico Poço de São Roque, desativado desde a chegada da água encanada à Ilha. Entre as lendas de Paquetá, uma atribui a cura de uma úlcera de D. João às virtudes milagrosas de suas águas.`,
    Execucao: true,
    DataInauguracao: ``,
    Latitude: `-22.7622363`,
    Longitude: `-43.1071716`,
};

export const MarcodologradourodoParquedosTamoios_PedroBruno: Obra = {
    ID: 1128,
    Artistas: [artistas.PedroBruno],
    Titulo: `Marco do logradouro do Parque dos Tamoios`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Marco`,
    Material: `Bloco de gnaisse esculpido`,
    Descricao: `Bloco de gnaisse com o nome do logradouro em baixo relevo. Foi inaugurado na Festa dos Passaros de 1934, tendo a presença do interventor Pedro Ernesto.`,
    Execucao: true,
    DataInauguracao: `05/1934`,
    Latitude: `-22.7622363`,
    Longitude: `-43.1071716`,
};

export const MarcodoLogradourodaPracaSaoRoque_PedroBruno: Obra = {
    ID: 1129,
    Artistas: [artistas.PedroBruno],
    Titulo: `Marco do Logradouro da Praça São Roque`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Marco`,
    Material: `Bloco de granito esculpido`,
    Descricao: `Bloco de gnaisse com o nome do logradouro em baixo relevo. As obras executadas por Pedro Bruno na Ilha foram realizados nos anos de 1940.`,
    Execucao: true,
    DataInauguracao: ``,
    Latitude: `-22.7622363`,
    Longitude: `-43.1071716`,
};

export const MarcodologradourodaRuaVivaldoCoaracy_Desconhecida: Obra = {
    ID: 1130,
    Artistas: [artistas.Desconhecida],
    Titulo: `Marco do logradouro da Rua Vivaldo Coaracy`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Marco`,
    Material: `Bloco de granito com placa de alumínio`,
    Descricao: `Bloco de pedra onde está fixada uma placa com o nome do logradouro. A homenagem ao jornalista e escritor decorre de seu trabalho em obras históricas, artigos e cronicas, sendo três delas recionadas a Paquetá: Couves de Minha Horta (crônica), Por do Sol na Ilha (crônica) e Paquetá.`,
    Execucao: true,
    DataInauguracao: ``,
    Latitude: `-22.7622363`,
    Longitude: `-43.1071716`,
};

export const MarcodologradourodaRuaMaestroAnacleto_PedroBruno: Obra = {
    ID: 1131,
    Artistas: [artistas.PedroBruno],
    Titulo: `Marco do logradouro da Rua Maestro Anacleto`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Marco`,
    Material: `Bloco de granito esculpido`,
    Descricao: `Bloco de gnaisse com letras em bronze.. O monumento foi inaugurado na Festa dasArvores e dos Passaros`,
    Execucao: true,
    DataInauguracao: `07/1935`,
    Latitude: `-22.7622363`,
    Longitude: `-43.1071716`,
};

export const MarcoemHomenagemaPaqueta_Desconhecida: Obra = {
    ID: 1132,
    Artistas: [artistas.Desconhecida],
    Titulo: `Marco em Homenagem à Paquetá`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Marco`,
    Material: `Peça em argamassa,`,
    Descricao: `Placa de argamassa com gravação de um texto de Araújo Porto Alegre.`,
    Execucao: true,
    DataInauguracao: ``,
    Latitude: `-22.7622363`,
    Longitude: `-43.1071716`,
};

export const ACastanegto_PedroBruno: Obra = {
    ID: 1133,
    Artistas: [artistas.PedroBruno],
    Titulo: `À Castanegto`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Marco`,
    Material: `Bloco de granito esculpido`,
    Descricao: `Bloco de granito esculpido na forma de uma palheta. O monumento foi inaugurado na Festa dasArvores e dos Passaros, que foi mestre do Pintor Pedro Bruno`,
    Execucao: true,
    DataInauguracao: `07/1935`,
    Latitude: `-22.7622363`,
    Longitude: `-43.1071716`,
};

export const MarcodologradourodaPraiaPintorCastanegto_PedroBruno: Obra = {
    ID: 1134,
    Artistas: [artistas.PedroBruno],
    Titulo: `Marco do logradouro da Praia Pintor Castanegto`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Marco`,
    Material: `Bloco de granito esculpido`,
    Descricao: `Bloco de gnaisse com o nome do logradouro em letras de bronze.As obras executadas por Pedro Bruno na Ilha foram realizados nos anos de 1940.`,

    Execucao: true,
    DataInauguracao: ``,
    Latitude: `-22.7622363`,
    Longitude: `-43.1071716`,
};

export const MarcodologradourodaRuaFurquimWerneck_PedroBruno: Obra = {
    ID: 1135,
    Artistas: [artistas.PedroBruno],
    Titulo: `Marco do logradouro da Rua Furquim Werneck`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Marco`,
    Material: `Bloco de granito esculpido`,
    Descricao: `Bloco de gnaisse com o nome do logradouro em letras em baixo relevo pintadas de preto.
As obras executadas por Pedro Bruno na Ilha foram realizados nos anos de 1940.`,

    Execucao: true,
    DataInauguracao: ``,
    Latitude: `-22.7622363`,
    Longitude: `-43.1071716`,
};

export const MarcodeTributoaArvoreI_PedroBruno: Obra = {
    ID: 1136,
    Artistas: [artistas.PedroBruno],
    Titulo: `Marco de Tributo à Árvore I`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Marco`,
    Material: `Bloco de granito com letras de bronze`,
    Descricao: `Bloco de pedra com inscrição em homenagem às árvores. As obras executadas por Pedro Bruno na Ilha foram realizados nos anos de 1940.`,
    Execucao: true,
    DataInauguracao: ``,
    Latitude: `-22.7622363`,
    Longitude: `-43.1071716`,
};

export const MarcodeTributoaArvoreII_PedroBruno: Obra = {
    ID: 1137,
    Artistas: [artistas.PedroBruno],
    Titulo: `Marco de Tributo à Árvore II`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Marco`,
    Material: `Blocos de granito com peça em bronze`,
    Descricao: `Bloco de pedra com inscrição em homenagem às aárvores. As obras executadas por Pedro Bruno na Ilha foram realizados nos anos de 1940.`,

    Execucao: true,
    DataInauguracao: ``,
    Latitude: `-22.7622363`,
    Longitude: `-43.1071716`,
};

export const BancoAosVelhosPescadores_PedroBruno: Obra = {
    ID: 1138,
    Artistas: [artistas.PedroBruno],
    Titulo: `Banco  Aos Velhos Pescadores`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Escultura`,
    Material: `Bloco de granito esculpido`,
    Descricao: `Banco em blocos de pedra, no encosto do qual está gravado, em letras de bronze,  Aos Velhos Pescadores. Foi erguido pela Liga Artistica de Paqueta é inaugurado quando da Corrida da Fogueira, que objetivava homenagear os pescadores da Colonia Z-3, no dia de São Pedro.`,
    Execucao: true,
    DataInauguracao: `07/1941`,
    Latitude: `-22.7622363`,
    Longitude: `-43.1071716`,
};

export const BancodePeixedaPraiaJoseBonifacio_PedroBruno: Obra = {
    ID: 1139,
    Artistas: [artistas.PedroBruno],
    Titulo: `Banco de Peixe da Praia José Bonifácio`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Escultura`,
    Material: `Bloco de granito esculpido`,
    Descricao: `Banco de pedra com o encosto decorado com peixes estilizados.As obras executadas por Pedro Bruno na Ilha foram realizados nos anos de 1940.`,

    Execucao: true,
    DataInauguracao: ``,
    Latitude: `-22.7622363`,
    Longitude: `-43.1071716`,
};

export const BancodePedradePaqueta_Desconhecida: Obra = {
    ID: 1140,
    Artistas: [artistas.Desconhecida],
    Titulo: `Banco de Pedra de Paquetá`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Construção`,
    Material: `Blocos de granito`,
    Descricao: `Banco com assento e encosto de pedra.`,
    Execucao: true,
    DataInauguracao: ``,
    Latitude: `-22.7622363`,
    Longitude: `-43.1071716`,
};

export const PontedaSaudade_Desconhecida: Obra = {
    ID: 1141,
    Artistas: [artistas.Desconhecida],
    Titulo: `Ponte da Saudade`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Construção`,
    Material: `Peça de Madeira`,
    Descricao: `Trata de um píer cuja lenda originou essa denominação. A lenda afirma que o escravo João Saudade, da nação Benguela, rezava diariamente para reencontrar sua família que ficara na África.`,
    Execucao: true,
    DataInauguracao: ``,
    Latitude: `-22.7622363`,
    Longitude: `-43.1071716`,
};

export const PortaodoParqueDarkedeMattos_Desconhecida: Obra = {
    ID: 1142,
    Artistas: [artistas.Desconhecida],
    Titulo: `Portão do Parque Darke de Mattos`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Portão`,
    Material: `Metal em ferro fundido e colunas de concreto`,
    Descricao: `Construção em concreto composta por dois grandes pilares, sustentando um portão de barras de ferro em duas folhas. Parte integrante da Chacara dos Darke de Mattos, mas aqui a data de inauguração como parque publico, passou a ser a data de inauguração`,
    Execucao: true,
    DataInauguracao: `01/1978`,
    Latitude: `-22.7622363`,
    Longitude: `-43.1071716`,
};

export const BancoeMesaaArvore_Desconheido: Obra = {
    ID: 1143,
    Artistas: [artistas.Desconhecida],
    Titulo: `Banco e Mesa à Árvore`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Construção`,
    Material: `Peça em concreto armado`,
    Descricao: `Construção em concreto rodeando o tronco de uma árvore.Pertencia a familia Darke de Mattos. A propriedade foi adquirida pela prefeitura do Rio de Janeiro e o ano da abertura ao publico passou ser a data da inauguração.`,

    Execucao: true,
    DataInauguracao: `01/1978`,
    Latitude: `-22.7622363`,
    Longitude: `-43.1071716`,
};

export const AmuradadoParqueDarkedeMattos_Desconhecida: Obra = {
    ID: 1144,
    Artistas: [artistas.Desconhecida],
    Titulo: `Amurada do Parque Darke de Mattos`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Construção`,
    Material: `Blocos de granito`,
    Descricao: `Construção em blocos de pedra que sustentam a encosta, além de criar caminhos para o acesso ao mirante do parque. Pertencia a familia Darke de Mattos. A propriedade foi adquirida pela prefeitura do Rio de Janeiro e o ano da abertura ao publico passou ser a data da inauguração.`,
    Execucao: true,
    DataInauguracao: `01/1978`,
    Latitude: `-22.7622363`,
    Longitude: `-43.1071716`,
};

export const BanconaEncostaemPaqueta_Desconhecida: Obra = {
    ID: 1145,
    Artistas: [artistas.Desconhecida],
    Titulo: `Banco na Encosta em Paquetá`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Construção`,
    Material: `Peça em argamassa`,
    Descricao: `Conjunto de dois bancos, tipo poltrona, com uma mesa criando um pequeno ambiente lúdico.Pertencia a familia Darke de Mattos. A propriedade foi adquirida pela prefeitura do Rio de Janeiro e o ano da abertura ao publico passou ser a data da inauguração.`,
    Execucao: true,
    DataInauguracao: `01/1978`,
    Latitude: `-22.7622363`,
    Longitude: `-43.1071716`,
};

export const CoretoeMirantedoParqueDarkedeMattos_Desconhecida: Obra = {
    ID: 1146,
    Artistas: [artistas.Desconhecida],
    Titulo: `Coreto e Mirante do Parque Darke de Mattos`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Construção`,
    Material: `Pecas de tijolo com argamassa`,
    Descricao: `Construção octogonal em dois pisos, em concreto revestido de pedra, com sete pilares e um outro central, coberto em telhas canal sobre ripas de maçaranduba.Pertencia a familia Darke de Mattos. A propriedade foi adquirida pela prefeitura do Rio de Janeiro e o ano da abertura ao publico passou ser a data da inauguração.
Há imagens que registram o mirante desde aos anos de 1940.`,
    Execucao: true,
    DataInauguracao: `01/1978`,
    Latitude: `-22.7622363`,
    Longitude: `-43.1071716`,
};

export const OratoriodeNossaSenhoradaConceicaodePaqueta_Desconhecida: Obra = {
    ID: 1147,
    Artistas: [artistas.Desconhecida],
    Titulo: `Oratório de Nossa Senhora da Conceição de Paquetá`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Oratório`,
    Material: `Peça em concreto com imagem em resina`,
    Descricao: `Pequena gruta natural revestida de argamassa onde se abriga a imagem. Inaugurada na década de 2000.`,
    Execucao: true,
    DataInauguracao: ``,
    Latitude: `-22.7622363`,
    Longitude: `-43.1071716`,
};

export const BancodeRocailledePaqueta_Desconhecida: Obra = {
    ID: 1148,
    Artistas: [artistas.Desconhecida],
    Titulo: `Banco de Rocaille de Paquetá`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Construção`,
    Material: `Peça em argamassa armada`,
    Descricao: `Construção em três níveis de banco formando uma pequena arquibancada.Pertencia a familia Darke de Mattos. A propriedade foi adquirida pela prefeitura do Rio de Janeiro e o ano da abertura ao publico passou ser a data da inauguração.`,
    Execucao: true,
    DataInauguracao: `01/1978`,
    Latitude: `-22.7622363`,
    Longitude: `-43.1071716`,
};

export const TemploaArvore_Desconhecida: Obra = {
    ID: 1149,
    Artistas: [artistas.Desconhecida],
    Titulo: `Templo à Árvore`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Construção`,
    Material: `Peça em argamassa armada`,
    Descricao: `Construção circular vazada com uma árvaroe ao centro, composta por oito pilares revestidas de pedra, sustentando uma viga.`,
    Execucao: true,
    DataInauguracao: ``,
    Latitude: `-22.7622363`,
    Longitude: `-43.1071716`,
};

export const TunelnaPedraIdePaqueta_Desconhecida: Obra = {
    ID: 1150,
    Artistas: [artistas.Desconhecida],
    Titulo: `Túnel na Pedra I de Paquetá`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Construção`,
    Material: `Saibro`,
    Descricao: `Escavação no terreno que permite o acesso a dois lados do parque.Pertencia a familia Darke de Mattos.`,
    Execucao: true,
    DataInauguracao: ``,
    Latitude: `-22.7622363`,
    Longitude: `-43.1071716`,
};

export const TunelnaPedraIIdePaqueta_Desconhecida: Obra = {
    ID: 1151,
    Artistas: [artistas.Desconhecida],
    Titulo: `Túnel na Pedra II de Paquetá`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Construção`,
    Material: `Saibro`,
    Descricao: `Escavação no terreno que permite o acesso a dois lados do parque.Pertencia a familia Darke de Mattos. A propriedade foi adquirida pela prefeitura do Rio de Janeiro e o ano da abertura ao publico passou ser a data da inauguração.`,
    Execucao: true,
    DataInauguracao: `01/1978`,
    Latitude: `-22.7622363`,
    Longitude: `-43.1071716`,
};

export const TunelnaPedraIIIdePaqueta_Desconhecida: Obra = {
    ID: 1152,
    Artistas: [artistas.Desconhecida],
    Titulo: `Túnel na Pedra III de Paquetá`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Construção`,
    Material: `Saibro`,
    Descricao: `Escavação natural no terreno que permite o acesso a dois lados do parque.Pertencia a familia Darke de Mattos. A propriedade foi adquirida pela prefeitura do Rio de Janeiro e o ano da abertura ao publico passou ser a data da inauguração.`,
    Execucao: true,
    DataInauguracao: `01/1978`,
    Latitude: `-22.7622363`,
    Longitude: `-43.1071716`,
};

export const PainelGentileza26_ProfetaGentileza: Obra = {
    ID: 599,
    Artistas: [artistas.ProfetaGentileza],
    Titulo: `Painel Gentileza 26`,
    Classificacao: 'efemero',
    Categoria: 'plasticidade',
    TipologiaObra: `Grafite`,
    Material: `Pintura em superficie argamassada`,
    Descricao: `O painel é uma pintura na pilastra do Viaduto do Cajú, na zona portuária da Cidade, onde O Profeta Gentileza, expôs suas mensagens e críticas.num trabalho artísticos de letras criada por ele. Gentileza, como era conhecidoJosé Datrino, executou 56 painéis, durante os anos de 1980.
 MEUS FILHOS EM 2000 POR ORDEM DE 
 DEUS NOSSO PAI GENTILEZA CRIADORR UNIVER 
 SSO O DIABO DO CAPETA QUE VEM DO CAPITALISMO 
 DOS FILHOS HOMENS PERDEM O MANDATO QUEM VAO 
 GOVERNAR O MUNDO DE DEUS VAI SERR OS ESPIRITO 
SANTO DE AMORRR POR JESSUSS DISSE GENTILEZA AMORRR `,
    Execucao: true,
    DataInauguracao: ``,
    Latitude: `-22.8959523`,
    Longitude: `-43.214497`,
};

export const PaulodaPortela_Desconhecida: Obra = {
    ID: 912,
    Artistas: [artistas.Desconhecida],
    Titulo: `Paulo da Portela`,
    Classificacao: 'perene',
    Categoria: 'personalidades',
    TipologiaObra: `Busto`,
    Material: `Peça em bronze e pedestal de granito`,
    Descricao: `O homenageado esta elegantemente trajado de terno e gravata, uma de suas caracteristicas. A placa identifica
    o monumento como uma promoção da Velha Guarda da Portela, representada por Claudio Bernado da Costa, Antonio Rufino dos reis,
    Antonio da Silva Caetano, na presidencia de Carlos Teixeira Martins.`,
    Execucao: true,
    DataInauguracao: `01/1979`,
    Zona: 'Norte',
    Bairro: 'Madureira',
    PontoDeReferencia: 'Estrada do Portela',
    Latitude: `-22.8675967`,
    Longitude: `-43.3443539`,
    Fatos: [new Fato('', '', 'Propriedade', 'Pública', [], 'Rio de Janeiro')],
};

export const MarcodaInauguracaodoViadutodeCascadura_Desconhecida: Obra = {
    ID: 914,
    Artistas: [artistas.Desconhecida],
    Titulo: `Marco da Inauguração do Viaduto de Cascadura`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Marco`,
    Material: `Peça em bronze`,
    Descricao: `Placa em bronze de inauguração do Viaduto Washington Luís, com descrição comemorativa.`,
    Execucao: true,
    DataInauguracao: `01/1930`,
    Latitude: `-22.8823222`,
    Longitude: `-43.3288256`,
};

export const AJoaquimManuelMacedo_PedroBruno: Obra = {
    ID: 1153,
    Artistas: [artistas.PedroBruno],
    Titulo: `À Joaquim Manuel Macedo`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Construção`,
    Material: `Bloco de gnaisse esculpido`,
    Descricao: `Bloco de gnaisse  com inscrição em letras de bronze.  O monumento foi inaugurado na Festa das Arvores e dos Passaros, no mesmo dia da homenagem a Carlos Gomes.`,
    Execucao: true,
    DataInauguracao: `05/1938`,
    Latitude: `-22.7622363`,
    Longitude: `-43.1071716`,
};

export const TuneldaMoreninha_Desconhecida: Obra = {
    ID: 1155,
    Artistas: [artistas.Desconhecida],
    Titulo: `Túnel da Moreninha`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Construção`,
    Material: `Saibro`,
    Descricao: `Túnel escavado no morro, dando acesso ao mar.`,
    Execucao: true,
    DataInauguracao: ``,
    Latitude: `-22.7622363`,
    Longitude: `-43.1071716`,
};

export const PontedaPedradaMoreninha_Desconhecida: Obra = {
    ID: 1154,
    Artistas: [artistas.Desconhecida],
    Titulo: `Ponte da Pedra da Moreninha`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Ponte`,
    Material: `Madeira`,
    Descricao: `Ponte de madeira que dá acesso a uma pedra conhecida como da Pedra da Moreninha, personagem imortalizado no romance de Joaquim Manuel de Macedo.`,
    Execucao: true,
    DataInauguracao: ``,
    Latitude: `-22.7622363`,
    Longitude: `-43.1071716`,
};

export const AoDoutorAristao_PedroBruno: Obra = {
    ID: 1157,
    Artistas: [artistas.PedroBruno],
    Titulo: `Ao Doutor Aristão`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Efígie`,
    Material: `Bloco de granito esculpido com placa de bronze`,
    Descricao: `Marco de pedra de forma irregular a inscrição Dr. Aristâo e sua efígie. Foi homeanageado pela gratidão dos moradores de Paqueta. As obras executadas por Pedro Bruno na Ilha foram realizados nos anos de 1930.`,
    Execucao: true,
    DataInauguracao: ``,
    Bairro: 'Paquetá',
    PontoDeReferencia: 'Praia da Moreninha',
    Latitude: `-22.7622363`,
    Longitude: `-43.1071716`,
    Fatos: [
        new Fato('', '', 'Propriedade', 'Pública', [], 'Rio de Janeiro'),
        new Fato('1999', '1999', 'Tombamento', 'Tombado pelo Município pelo Decreto 17 555/99', [], 'Rio de Janeiro'),
    ],
};

export const AAugustoSilva_Helmano: Obra = {
    ID: 1161,
    Artistas: [artistas.Helmano],
    Titulo: `À Augusto Silva`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Efígie`,
    Material: `Bloco de granito com placa de bronze`,
    Descricao: `A homenagem ao pintor Augusto Silva foi realizada por seus amigos.`,
    Execucao: true,
    DataInauguracao: `01/1980`,
    Bairro: 'Paquetá',
    PontoDeReferencia: 'Praia José Bonifácio',
    Latitude: `-22.7622363`,
    Longitude: `-43.1071716`,
    Fatos: [new Fato('', '', 'Propriedade', 'Pública', [], 'Rio de Janeiro')],
};

export const AHermesFontes_PedroBruno: Obra = {
    ID: 1160,
    Artistas: [artistas.PedroBruno],
    Titulo: `À Hermes Fontes`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Escultura`,
    Material: `Bloco de granito com letras de bronze`,
    Descricao: `A homenagem a Hermes Fontes é composta por dois blocos maciços de pedra, com a inscrição Paquetá é um céu profundo que começa neste mundo e não sobe onde acabar”. O Monumento foi inaugurado na Festa dos passaros e das Arvores, promovido pela Liga Artistica de Paqueta. Hermes Fontes era o cantor das belezas da Perola da Guanabara e foi erguido em frente a casa onde residiu.`,
    Execucao: true,
    DataInauguracao: `11/1936`,
    Latitude: `-22.7622363`,
    Longitude: `-43.1071716`,
};

export const RelogioModeloMesbla_Desconhecida: Obra = {
    ID: 1164,
    Artistas: [artistas.Desconhecida],
    Titulo: `Relógio Modelo Mesbla`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Relógio`,
    Material: `Peça em concreto armado`,
    Descricao: `A loja MESBLA com um então alto espírito comunitário, encaminhou em 18 de novembro de 1965 documento ao Diretor-Geral de Hidrografia e Navegação oferecendo-se para "instalar um farol com sirene, no embarcadouro em frente à nossa propriedade" argumentando que " temos observado que, em determinadas épocas do ano, o nevoeiro denso prejudica e põe em risco as embarcações com destino à Ilha de Paquetá."Tão logo aceita a proposta pela "Marinha", deu-se início a construção de uma torre quadrangular de cimento armado com 9,45 metros de altura, similar à do edifício sede no Passeio Público, dispondo inclusive de um relógio de duas faces e de uma sirene.
Quando pronta, a MESBLA convidou as autoridades locais e da Marinha para sua
inauguração. O farol de caráter privado e considerado de interesse particular, cujos funcionamentos e manutenção foram assumidos pela MESBLA, batizado com o nome de Ponta da Ribeira, passou a oferecer aos Mestres das barcas e aos demais navegantes que demandassem a ilha de Paquetá, um característico lampejo vermelho de 4,0 segundos a cada intervalo de 8,0 segundos.
Fonte: Ney Dantasfarologista, membro da Academia de Artes, Ciências e Letras da Ilha de Paquetá, oficial da Marinha do Brasil
Construção que reproduz a torre com relógio da extinta loja Mesbla, na Rua do Passeio. Trata-se de um farol para sinalização dos barcos nos dias de nevoeiro e durante a noite.`,

    Execucao: true,
    DataInauguracao: `08/1966`,
    Latitude: `-22.7622363`,
    Longitude: `-43.1071716`,
};

export const Beethoven_PedroBruno: Obra = {
    ID: 1167,
    Artistas: [artistas.PedroBruno],
    Titulo: `Beethoven`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Escultura`,
    Material: `Peça em bronze com pedestal de granito`,
    Descricao: `Homenagem de Pedro Bruno ao grande compositor. As obras executadas por Pedro Bruno na Ilha foram realizados nos anos de 1940.
No ano de 2000 foi realizado um molde para a colocação de uma peça em bronze no monumento. O molde foi guardado no deposito.`,
    Execucao: true,
    DataInauguracao: ``,
    Latitude: `-22.7622363`,
    Longitude: `-43.1071716`,
};

export const AdelinoMoreira_MestreSaul: Obra = {
    ID: 1166,
    Imagem: 'AdelinoMoreira_MestreSaul.jpg',
    Artistas: [artistas.MestreSaul],
    Titulo: `Adelino Moreira`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Estátua`,
    Material: `Peça em bronze`,
    Descricao: `Estátua ao compositor morador do bairro. Sentado em uma cadeira segurando um violão e apoiando a outra mão
    sobre uma mesa, como se estivesse escrevendo uma composição.`,
    Execucao: true,
    DataInauguracao: `01/2008`,
    Zona: 'Oeste',
    Bairro: 'Campo Grande',
    PontoDeReferencia: 'R. Campo Grande',
    Latitude: `-22.9018191`,
    Longitude: `-43.5589983`,
    Fatos: [new Fato('', '', 'Propriedade', 'Pública', [], 'Rio de Janeiro')],
};

export const Marco7daFazendaImperialdeSantaCruz_Desconhecida: Obra = {
    ID: 1168,
    Artistas: [artistas.Desconhecida],
    Titulo: `Marco 7 da Fazenda Imperial de Santa Cruz`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Marco`,
    Material: `Bloco de granito esculpido`,
    Descricao: `Marco que limitava a Estrada Real de Santa Cruz, antigo Caminho dos Jesuítas, no percurso de onze léguas entre o Morro do Castelo e o Palácio Imperial de Santa Cruz, antiga Fazenda dos Jesuítas, hoje sede do Batalhão Villagran Cabrita.`,
    Execucao: true,
    DataInauguracao: `01/1826`,
    Latitude: `-22.879721`,
    Longitude: `-43.5021267`,
};

export const CaisdosPescadoresPierdaPraiadeSaoBento_Desconhecida: Obra = {
    ID: 1169,
    Artistas: [artistas.Desconhecida],
    Titulo: `Cais dos Pescadores, Píer da Praia de São Bento`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Ponte`,
    Material: `Concreto armado`,
    Descricao: `Inaugurado em 1930 em madeira, Foi reinaugurado em 27 de setembro de 1999 em concreto.`,
    Execucao: true,
    DataInauguracao: `01/1930`,
    Latitude: `-22.8208634`,
    Longitude: `-43.2278707`,
};

export const MarcoMaconico_AlbertoNunesBorges: Obra = {
    ID: 1170,
    Artistas: [artistas.AlbertoNunesBorges],
    Titulo: `Marco Maçônico`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Marco`,
    Material: `Peça em concreto revestido por granito`,
    Descricao: `Pirâmide em granito preto polido sobre três tubos de ferro, com o compasso, o esquadro e a letra G, elementos tradicionais da simbologia maçônica.`,
    Execucao: true,
    DataInauguracao: `08/2006`,
    Latitude: `-22.8307899`,
    Longitude: `-43.2366549`,
};

export const TorreaodePedra_Desconhecida: Obra = {
    ID: 1171,
    Artistas: [artistas.Desconhecida],
    Titulo: `Torreão de Pedra`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Marco`,
    Material: `Peça em argamassa revestido com pó de granito`,
    Descricao: `Remanescente de um par de torreões ( torres largas) erguidos junto ao mar.`,
    Execucao: true,
    DataInauguracao: ``,
    Latitude: `-22.8259265`,
    Longitude: `-43.2332059`,
};

export const Aviao_Desconhecida: Obra = {
    ID: 1172,
    Artistas: [artistas.Desconhecida],
    Titulo: `Avião`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Escultura`,
    Material: `Peça em metal`,
    Descricao: `Em 1969 foi instalado na praça um avião F8 Glaster Meteor. Com a sua deterioração, pela longa exposição às intempéries, foi ele substituído por uma réplica do AMX-A1 da Força Aérea Brasileira, com 2/3 do tamanho original, construído na Escola de Engenharia da Aeronáutica ereinaugurado em 15 de outubro de 1999.`,
    Execucao: true,
    DataInauguracao: `08/1969`,
    Latitude: `-22.8154803`,
    Longitude: `-43.221963`,
};

export const RelogiodaCacuia_Desconhecida: Obra = {
    ID: 1173,
    Artistas: [artistas.Desconhecida],
    Titulo: `Relógio da Cacuia`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Relógio`,
    Material: `Peça em concreto com estrutura de metal`,
    Descricao: `O primeiro relógio do Cacuia, foi inaugurado em 1965, por ocasião das festividades do IV Centenário do Rio de Janeiro,pelo comercio local, Lios Clube, COMIC e Administração Regional.Devido a desgastes naturais e falta de conservação, no ano de 1971, uma nova peça foi instalada no local, quando a altura da coluna foi elevada mais um pouco, conservando-se no entanto, todo o aspecto original do relógio. Devido as obras do Rio Cidade Cacuia ele foi deslocado cerca de 10 metros permanecendo o seu desenho original.
Em reportagem feita pelo O Globo Ilha, em 1992, foi levantada a hipótese de o projeto original ser de autoria do arquiteto João de Deus Crispino, o que não chegou a ser confirmado.`,
    Execucao: true,
    DataInauguracao: `12/1965`,
    Latitude: `-22.8120299`,
    Longitude: `-43.1918183`,
};

export const CoretodaPracaMangueta_ImobiliariaJardimCarioca: Obra = {
    ID: 1174,
    Artistas: [artistas.Desconhecida],
    Titulo: `Coreto da Praça Manguetá`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Construção`,
    Material: `Peça em concreto com estrutura de madeira`,
    Descricao: `Imobiliaria Jardim Carioca - Coreto octogonal, com pilares de concreto e cobertura em madeira revestida por chapas de metal e guarda corpo de concreto. Inicialmente servia como um mirante para a Baia da Guanabara. Sem o tradicional embasamento é um dos maiores da Cidade em área livre interna.`,
    Execucao: true,
    DataInauguracao: `01/1936`,
    Latitude: `-22.8090764`,
    Longitude: `-43.1862537`,
};

export const CanhaodaPontadoTiro_Desconhecida: Obra = {
    ID: 1177,
    Artistas: [artistas.Desconhecida],
    Titulo: `Canhão da Ponta do Tiro`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Construção`,
    Material: `Peça em ferro fundido e bronze`,
    Descricao: `O canhão foi instalado por iniciativa do Major Dias Jacaré, atendendo um pedido da filha, que era professora primária e queria que os alunos das escolas da Ilha tivessem onde comemorar as datas cívicas, na década de 1920. Em frente ao canhão foi colocado um mastro para o hasteamento da bandeira nacional durante as solenidades.
É uma canhão wuitworth 32 libras modelo de 1864, usado no Brasil de 1824 ate 1922. Muitos deles foram usados na defesa da cidade do Rio de Janeiro na revolta da armada (1894 /95).`,
    Execucao: true,
    DataInauguracao: ``,
    Latitude: `-22.8111171`,
    Longitude: `-43.1767796`,
};

export const PaineldaPracaTresPoderes_RonaldoBenevello: Obra = {
    ID: 1176,
    Artistas: [artistas.RonaldoBenevello],
    Titulo: `Painel da Praça Três Poderes`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Mosaico`,
    Material: `Peças de azulejos`,
    Descricao: `Painel de azulejos coloridos decorando a empena do imóvel vizinho ao Chafariz.`,
    Execucao: true,
    DataInauguracao: `06/2006`,
    Latitude: `-22.8461795`,
    Longitude: `-43.324474`,
};

export const PapaiNoel_Desconhecida: Obra = {
    ID: 1175,
    Artistas: [artistas.Desconhecida],
    Titulo: `Papai Noel`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Escultura`,
    Material: `Peça em concreto com imagem em bronze`,
    Descricao: `Foi inaugurado no Largo da Carioca, e transferido para a atual localização em 25 de dezembro de 1976, por decorrencia das obras do Metrô.`,
    Execucao: true,
    DataInauguracao: `11/1965`,
    Latitude: `-22.7984491`,
    Longitude: `-43.1981991`,
};

export const Gato_MaracajaPedradaOnca_MiguelPastor: Obra = {
    ID: 1182,
    Artistas: [artistas.MiguelPastor],
    Titulo: `Gato-Maracajá, Pedra da Onça`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Escultura`,
    Material: `Peça em argamassa armada policromada`,
    Descricao: `A primeira escultura para representar uma lenda local foi criada por Galdino Guttmann, inaugurado na década de 1920 e substituída pela atual em 20 de fevereiro de 1965.`,
    Execucao: true,
    DataInauguracao: ``,
    Latitude: `-22.7892674`,
    Longitude: `-43.1614692`,
};

export const Iemanja_Desconhecida: Obra = {
    ID: 1180,
    Artistas: [artistas.Desconhecida],
    Titulo: `Iemanjá da Ilha do Governador`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Escultura`,
    Material: `Peça em resina policromada`,
    Descricao: `Em 1976 foi instalada a primeira imagem com cerca de cinquenta centimentos, sendo substituída por esta no
    inicio dos anos de 1990.
Imagem de Iemanjá numa pequena capelinha de concreto. erguida sobre uma pedra dentro do mar`,
    Execucao: true,
    DataInauguracao: `1990`,
    Zona: 'Norte',
    Bairro: 'Ilha do Governador',
    PontoDeReferencia: 'R. da Guanabara',
    Latitude: `-22.7943465`,
    Longitude: `-43.171043`,
    Fatos: [new Fato('', '', 'Propriedade', 'Pública', [], 'Rio de Janeiro')],
};

export const ProntidaodaEscoladoComandoMaiordoExercito_PauloPires_PauloSantos: Obra = {
    ID: 1185,
    Artistas: [artistas.PauloPires, artistas.PauloSantos],
    Titulo: `Prontidão da Escola do Comando Maior do Exército`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Escultura`,
    Material: `Peça em bronze`,
    Descricao: `Par de esculturas com a figura dos Sentinelas na calçada em frente ao Comando.`,
    Execucao: true,
    DataInauguracao: `01/1937`,
    Latitude: `-22.9544511`,
    Longitude: `-43.165489`,
};

export const CaisdoJardimdeAla_AzevedoNeto: Obra = {
    ID: 1186,
    Artistas: [artistas.AzevedoNeto],
    Titulo: `Cais do Jardim de Alá`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Construção`,
    Material: `Peça em concreto armado`,
    Descricao: `Construção do projeto original que se preserva até hoje.`,
    Execucao: true,
    DataInauguracao: `01/1938`,
    Latitude: `-22.9830977`,
    Longitude: `-43.2142572`,
};

export const CaramanchaodoJardimdeAla_AzevedoNeto: Obra = {
    ID: 1187,
    Artistas: [artistas.AzevedoNeto],
    Titulo: `Caramanchão do Jardim de Alá`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Caramanchão`,
    Material: `Peça em concreto armado`,
    Descricao: `Construção projeto original que se preserva até hoje, como exemplo típico do paisagismo de Azevedo Neto.`,
    Execucao: true,
    DataInauguracao: `01/1938`,
    Latitude: `-22.9830977`,
    Longitude: `-43.2142572`,
};

export const CoretodaPracaJoseLorena_Desconhecida: Obra = {
    ID: 1188,
    Artistas: [artistas.Desconhecida],
    Titulo: `Coreto da Praça José Lorena`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Construção`,
    Material: `Tijolo com argamassa`,
    Descricao: `Construção semelhante ao Coreto da Praça H da Sulacap, foi construido nos meses seguinte a esse com o mesmo intuito ser um local de observação na praça com dois banheiros para o uso dos moradores.`,
    Execucao: true,
    DataInauguracao: `11/2002`,
    Latitude: `-22.8878638`,
    Longitude: `-43.5776888`,
};

export const MarcopersonalidadesdeBangu_RaimundoRodrigues: Obra = {
    ID: 1189,
    Artistas: [artistas.RaimundoRodrigues],
    Titulo: `Marco Histórico de Bangú`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Marco`,
    Material: `Peça em concreto com estrutura de metal`,
    Descricao: `O marco foi uma iniciativa da Associação Cultura de Estudos Contemporâneos - ACEC.
São seis monolitico com base de tijolo cerâmicos com um metro de altura, onde na parte superior tem colunas de vidro temperado fixados na estrutura de alumínio. Cada bloco apresenta um elemento da história de Bangú. Um bloco apresenta a história da região em português e inglês. Outro tem placas das prinicpais ruas da região. O terceiro tem carreteis de linhas industriais, em referencia a fabrica Bangú. No quarto o símbolo do Grêmio Recreativo Bangu. O quinto a bandeira da Escola de Samba Mocidade Independente de Padre Miguel e o último a referência ao periodo de cultivo da laranja na região.`,
    Execucao: true,
    DataInauguracao: `12/2002`,
    Latitude: `-22.8811845`,
    Longitude: `-43.4650791`,
};

export const CaramanchaodaPracaManuelMadruga_Desconhecida: Obra = {
    ID: 1183,
    Artistas: [artistas.Desconhecida],
    Titulo: `Caramanchão da Praça  Manuel Madruga`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Caramanchão`,
    Material: `Peça em concreto armado`,
    Descricao: `Inaugurado provavelmente durante a urbanização da praça na década de 1950. elemento para ornamentação do logradouro.`,
    Execucao: true,
    DataInauguracao: ``,
    Latitude: `-22.7930719`,
    Longitude: ``,
};

export const AroldoMelodia_EdgarDuvivier: Obra = {
    ID: 1191,
    Artistas: [artistas.EdgarDuvivier],
    Titulo: `Aroldo Melodia`,
    Classificacao: 'perene',
    Categoria: 'personalidades',
    TipologiaObra: `busto`,
    Material: `Peça em bronze e pedestal de concreto`,
    Descricao: `O busto foi instalado em frente à Escola de Samba da Ilha do Governador, por solicitação da familia, por ter o sambista dedicado sua vida ao samba.`,
    Execucao: true,
    DataInauguracao: `12/2011`,
    Latitude: `-22.8139045`,
    Longitude: `-43.1891879`,
};

export const ManuelBandeira_CelsoAntonio: Obra = {
    ID: 1193,
    Artistas: [artistas.CelsoAntonio],
    Titulo: `Manuel Bandeira`,
    Classificacao: 'perene',
    Categoria: 'personalidades',
    TipologiaObra: `busto`,
    Material: `Peça em bronze e pedestal de concreto`,
    Descricao: `O busto em bronze de Manoel Bandeira foi fundido no ano 2000, a partir do gesso original, por solicitação do Prefeito Luís Paulo Conde. Esteve no depósito municipal até 2011, quando foi instalado no parque que recebe seu nome.`,
    Execucao: true,
    DataInauguracao: `12/2011`,
    Latitude: `-22.8041581`,
    Longitude: `-43.1813893`,
};

export const ChafarizMarcodaIlhadoGovernador_PaulodeSouzaPires: Obra = {
    ID: 1197,
    Artistas: [artistas.PaulodeSouzaPires],
    Titulo: `Chafariz Marco da Ilha do Governador`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Chafariz`,
    Material: `Peça em concreto revestido por tijolo de vidros`,
    Descricao: `Construção em blocos escalonados de concreto, revestida completamente por tijolos de vidro, por onde escorre a água que sai do bloco superior.
Desativado desde o ano 2015.`,
    Execucao: true,
    DataInauguracao: `04/1996`,
    Latitude: `-22.8057461`,
    Longitude: `-43.2113042`,
};

export const BiquinhadaPraiadaBica_DepartamentodeParqueseJardins: Obra = {
    ID: 1199,
    Artistas: [artistas.Desconhecida],
    Titulo: `Biquinha da Praia da Bica`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Chafariz`,
    Material: `Peça em concreto revestido por azulejo`,
    Descricao: `Departamento de Parques eJ ardins - Antiga fonte natural, em terreno da Prefeitura, que formava uma piscina, tendo a parede do fundo revestida de azulejos.  Em 2014 a bacia foi aterrada, restando em exposição o painel de azulejo e a água deslocada para uma escultura ali próxima instalada.`,

    Execucao: true,
    DataInauguracao: `01/1981`,
    Latitude: `-22.8187581`,
    Longitude: `-43.1939356`,
};

export const ChafarizMulhercomCantil_Desconhecida: Obra = {
    ID: 1200,
    Artistas: [artistas.Desconhecida],
    Titulo: `Chafariz Mulher com Cantil`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Chafariz`,
    Material: `Peça em ferro fundido`,
    Descricao: `Escultura de uma figura feminina que sustenta em seu ombro uma ânfora, de onde a
    água cai sobre bacia de ferro. A ágau do Chafariz é uma fonte natural.`,

    Execucao: true,
    DataInauguracao: `12/2014`,
    Latitude: `-22.8187581`,
    Longitude: `-43.1939356`,
};

export const BicadaÂnfora_Desconhecida: Obra = {
    ID: 1201,
    Artistas: [artistas.Desconhecida],
    Titulo: `Bica da Ânfora`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Chafariz`,
    Material: `Peça em ferro pintado`,
    Descricao: `Vaso em ferro fundido de onde sai água, reprodução de uma peça das fundições do Val d&rsquo;Osne.`,

    Execucao: true,
    DataInauguracao: `12/2014`,
    Latitude: `-22.8187581`,
    Longitude: `-43.1939356`,
};

export const BicadaÂnforadaPraiadaBica_Desconhecida: Obra = {
    ID: 1202,
    Artistas: [artistas.Desconhecida],
    Titulo: `Bica da Ânfora da Praia da Bica`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Chafariz`,
    Material: `Peça em ferro pintado`,
    Descricao: `Vaso em ferro fundido de onde sai a água. da fnte original situada no lote em frente a praia.`,

    Execucao: true,
    DataInauguracao: `12/2014`,
    Latitude: `-22.8187581`,
    Longitude: `-43.1939356`,
};

export const ChafarizdaPracaIaiaGarcia_AzevedoNeto: Obra = {
    ID: 1203,
    Artistas: [artistas.AzevedoNeto],
    Titulo: `Chafariz da Praça Iaiá Garcia`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Chafariz`,
    Material: `Peça em concreto armado`,
    Descricao: `O Chafariz originalmente possuia um lampadario multicolorido na bacia superior. de onde saia a agua para as duas bacias inferiores. De concreto e coluna central, tem a forma circular e diametros variaveis. Era revestido originalmente em marmorite avermelhado.
Esta desativado desde o ano de 2009.`,

    Execucao: true,
    DataInauguracao: `07/1939`,
    Latitude: `-22.8251999`,
    Longitude: `-43.1698991`,
};

export const IemanjadoPosto1daBarradaTijuca_GilsonNascimento: Obra = {
    ID: 1204,
    Artistas: [artistas.GilsonNascimento],
    Titulo: `Iemanjá do Posto 1 da Barra da Tijuca`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Escultura`,
    Material: `Peça em concreto`,
    Descricao: `A imagem de Iemanja original no Pier da Barra foi inaugurada em 1973. Em 2012 sofreu varias depredações sendo destruida. Em 2015, partir da indignação dos representantes da Associação de Pescadores da Barra da Tijuca PELABATA e em função do ato de vandalismo, uma nova imagem foi instalada no quebra-mar do Posto 01 da Avenida do Pepê.
A nova imagem de tamanho natural pretende restabelecer de forma apropriada o espaço de louvação dos pescadores da região à sua protetora.
O Projeto da instalação dessa segunda imagem foi consagrada no Prêmio Ações Locais Edição Rio450 que reconheceu o Projeto Yemonjá - Louvando a Rainha do Mar - enquanto uma ação local que representa a contribuição dos povos tradicionais da pesca e matriz africana, para a valorização das manifestações culturais no Município e Estado do Rio de Janeiro.`,

    Execucao: true,
    DataInauguracao: `03/2016`,
    Latitude: `-23.0142432`,
    Longitude: `-43.2977035`,
};

export const MarcodaCacuia_PontualArquitetura: Obra = {
    ID: 1178,
    Artistas: [artistas.Desconhecida],
    Titulo: `Marco da Cacuia`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Marco`,
    Material: `Peça em concreto revestido por granito com uma estrutura tubular de ferro`,
    Descricao: `Pontual Arquitetura - Marco composto por três blocos verticais de granito polido, unidos por uma estrutura tubular.< formando no espaço um único conjunto.`,

    Execucao: true,
    DataInauguracao: `01/2007`,
    Latitude: `-22.810892`,
    Longitude: `-43.1850891`,
};

export const RenatoRusso_Ique: Obra = {
    ID: 1190,
    Artistas: [artistas.Ique],
    Titulo: `Renato Russo`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Escultura`,
    Material: `Peça em bronze`,
    Descricao: `Homenagem realizada pela prefeitura, atendendo a pedido dos seus admiradores da Lona Cultural do Renato Russo e pelo presidente da CEDAE Wagner Victer.`,
    Execucao: true,
    DataInauguracao: `07/2012`,
    Latitude: `-22.8040456`,
    Longitude: `-43.204452`,
};

export const MarcodoCocota_PontualArquitetura: Obra = {
    ID: 1179,
    Artistas: [artistas.Desconhecida],
    Titulo: `Marco do Cocotá`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Marco`,
    Material: `Peça em concreto revestido por granito com uma estrutura tubular de ferro`,
    Descricao: `Pontual Arquitetura - Marco composto por três blocos verticais de granito polido, unidos por uma estrutura tubular de aço, formando no espaço um único conjunto.`,
    Execucao: true,
    DataInauguracao: `12/2007`,
    Latitude: `-22.8023265`,
    Longitude: `-43.1788874`,
};

export const BancoRecantodasDuasBicas_Desconhecida: Obra = {
    ID: 1209,
    Artistas: [artistas.Desconhecida],
    Titulo: `Banco Recanto das Duas Bicas`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Construção`,
    Material: `Bloco de granito`,
    Descricao: `O monumento está incluído nessa relação devido o convênio de Gestão Compartilhada do ParNacional da Tijuca entre a Prefeitura do Rio de Janeiro e oIBAMA desde 22 de março de 2001.
Construção avançada na contenção da encosta onde foi instalada uma pequena mesa e bancos de concreto.`,

    Execucao: true,
    DataInauguracao: ``,
    Latitude: `-22.9718999`,
    Longitude: `-43.2533519`,
};

export const OratorioaSaoSilvestre_Desconhecida: Obra = {
    ID: 1207,
    Artistas: [artistas.Desconhecida],
    Titulo: `Oratório à São Silvestre`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `oratório`,
    Material: `Pecas de tijolo com argamassa`,
    Descricao: `O monumento está incluído nessa relação devido o convênio de Gestão Compartilhada do ParNacional da Tijuca entre a Prefeitura do Rio de Janeiro e oIBAMA desde 22 de março de 2001.
Pequena capela com um unico altar, revestida de cerâmica vermelha e pintura branca.Construida para servir como uma capela pelo Monsenhor Massa, o bispo de Rio Negro, e considerada um oratorio devido as suas dimensões.`,
    Execucao: true,
    DataInauguracao: `01/1910`,
    Latitude: `-22.9452935`,
    Longitude: `-43.2050989`,
};

export const Guarda_corpodoPenhascoCristoRedentor_Desconhecida: Obra = {
    ID: 1206,
    Artistas: [artistas.Desconhecida],
    Titulo: `Guarda-corpo do Penhasco Cristo Redentor`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Guarda-corpo`,
    Material: `Bloco de gnaisse esculpido`,
    Descricao: `O monumento está incluído nessa relação devido o convênio de Gestão Compartilhada do ParNacional da Tijuca entre a Prefeitura do Rio de Janeiro e oIBAMA desde 22 de março de 2001.
    Conjunto de colunas, balaústres e peitoris em cantaria de gnaisse, em torno para o Cristo Redentor.`,
    Execucao: true,
    DataInauguracao: `06/1945`,
    Latitude: `-22.9519878`,
    Longitude: `-43.2104148`,
};

export const Guarda_corpodaVistaChinesa_Desconhecida: Obra = {
    ID: 1211,
    Artistas: [artistas.Desconhecida],
    Titulo: `Guarda-corpo  da Vista Chinesa`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Guarda-corpo`,
    Material: `Peça de rocaille em argamassa`,
    Descricao: `O monumento está incluído nessa relação devido o convênio de Gestão Compartilhada do ParNacional da Tijuca entre a Prefeitura do Rio de Janeiro e oIBAMA desde 22 de março de 2001.
Construido no anos de 1940acima do muro de contenção do entorno do coreto, tem o mesmo estilo adotado no coreto.`,
    Execucao: true,
    DataInauguracao: ``,
    Latitude: `-22.9732327`,
    Longitude: `-43.2495884`,
};

export const CoretodaVistaChinesa_PauloVillon: Obra = {
    ID: 1210,
    Artistas: [artistas.PauloVillon],
    Titulo: `Coreto da Vista Chinesa`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Construção`,
    Material: `Peça de rocaille em argamassa`,
    Descricao: `O monumento está incluído nessa relação devido o convênio de Gestão Compartilhada do ParNacional da Tijuca entre a Prefeitura do Rio de Janeiro e oIBAMA desde 22 de março de 2001.
Construção em argamassa imitando o bambu, com seis lados iguais decoradas com dragões em cada extremidade e dois níveis de cobertura, acimada com um lanternim, tudo numa referencia as obras chinesas.
O nome Vista Chinesa tem origem nos agricultores dessa nacionalidade trazidos para o Rio de Janeiro, na primeira metade do século XIX.
Essa construção reproduz um monumento memorial da Índia e de outras regiões do Oriente, geralmente em forma de torre, com diversos andares e telhados a cada andar terminados freqüentemente, em pontas curvas.`,
    Execucao: true,
    DataInauguracao: `10/1903`,
    Latitude: `-22.9732327`,
    Longitude: `-43.2495884`,
};

export const FradesdasTresBicas_Desconhecida: Obra = {
    ID: 1213,
    Artistas: [artistas.Desconhecida],
    Titulo: `Frades das Três Bicas`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Construção`,
    Material: `Bloco de granito esculpido`,
    Descricao: `O monumento está incluído nessa relação devido o convênio de Gestão Compartilhada do ParNacional da Tijuca
    entre a Prefeitura do Rio de Janeiro e oIBAMA desde 22 de março de 2001.
São peças esculpidas em bloco maciço.`,
    Execucao: true,
    DataInauguracao: ``,
    Latitude: `-22.9727347`,
    Longitude: `-43.2544389`,
    Fatos: [new Fato('', '', 'Propriedade', 'Pública', [], 'Rio de Janeiro')],
};

export const MesadoImperador_Desconhecida: Obra = {
    ID: 1214,
    Artistas: [artistas.Desconhecida],
    Titulo: `Mesa do Imperador`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Escultura`,
    Material: `Bloco de gnaisse`,
    Descricao: `O monumento está incluído nessa relação devido o convênio de Gestão Compartilhada do ParNacional da Tijuca entre a Prefeitura do Rio de Janeiro e oIBAMA desde 22 de março de 2001.
Situada a uma altitude de 487m, a Mesa do Imperador é composta por uma por uma mesa e dois bancos de granito Esse local foi assim denominado por ter sido o local de refeições de D Pedro II quando fazia suas excursões a Tijuca.
Construída pelo prefeito Pereira Passos no mesmo local onde havia, no século XIX, uma grande mesa de gnaisse, coberta por caramanchão, onde D. Pedro II realizava almoço campestre com a família.`,
    Execucao: true,
    DataInauguracao: `10/1903`,
    Latitude: `-22.9705364`,
    Longitude: `-43.2580117`,
};

export const AmuradadaMesadoImperador_Desconhecida: Obra = {
    ID: 1215,
    Artistas: [artistas.Desconhecida],
    Titulo: `Amurada da Mesa do Imperador`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Amurada`,
    Material: `Bloco de granito`,
    Descricao: `O monumento está incluído nessa relação devido o convênio de Gestão Compartilhada do ParNacional da Tijuca entre a Prefeitura do Rio de Janeiro e oIBAMA desde 22 de março de 2001.
Grande murada de contenção abaixo e acima do plato onde esta situada a Mesa do Imperador. É composta por escadarias e muradas com patamares.`,
    Execucao: true,
    DataInauguracao: ``,
    Latitude: `-22.9705364`,
    Longitude: `-43.2580117`,
};

export const Guarda_corpoIdaMesadoImperador_Desconhecida: Obra = {
    ID: 1216,
    Artistas: [artistas.Desconhecida],
    Titulo: `Guarda-corpo I da Mesa do Imperador`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Guarda-corpo`,
    Material: `Metal em ferro fundido e colunas de gnaisse`,
    Descricao: `O monumento está incluído nessa relação devido o convênio de Gestão Compartilhada do ParNacional da Tijuca entre a Prefeitura do Rio de Janeiro e oIBAMA desde 22 de março de 2001.
Guarda-corpo composto por colunas e parapeito de gnaisse, intercalado com balaústres de ferro fundido para a proteção da encosta do mirante<strong>. `,
    Execucao: true,
    DataInauguracao: ``,
    Latitude: `-22.9705364`,
    Longitude: `-43.2580117`,
};

export const Guarda_corpoIIdaMesadoImperador_Desconhecida: Obra = {
    ID: 1217,
    Artistas: [artistas.Desconhecida],
    Titulo: `Guarda-corpo II da Mesa do Imperador`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Guarda-corpo`,
    Material: `Blocos de granito`,
    Descricao: `O monumento está incluído nessa relação devido o convênio de Gestão Compartilhada do ParNacional da Tijuca entre a Prefeitura do Rio de Janeiro e oIBAMA desde 22 de março de 2001.
Guarda-corpo composto em blocos para a proteção da encosta do mirante.`,
    Execucao: true,
    DataInauguracao: ``,
    Latitude: `-22.9706268`,
    Longitude: `-43.2579862`,
};

export const FradesIIdaMesadaImperador_Desconhecida: Obra = {
    ID: 1219,
    Artistas: [artistas.Desconhecida],
    Titulo: `Frades II da Mesa da Imperador`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Frade`,
    Material: `Bloco de gnaisse esculpido`,
    Descricao: `O monumento está incluído nessa relação devido o convênio de Gestão Compartilhada do ParNacional da Tijuca entre a Prefeitura do Rio de Janeiro e oIBAMA desde 22 de março de 2001.
Bloco maciço esculpido.`,
    Execucao: true,
    DataInauguracao: ``,
    Latitude: `-22.9705364`,
    Longitude: `-43.2580117`,
};

export const PortaoMonumentaldaFlorestadaTijuca_WladimirAlvesdeSouza: Obra = {
    ID: 1222,
    Artistas: [artistas.WladimirAlvesdeSouza],
    Titulo: `Portão Monumental da Floresta da Tijuca`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Portão`,
    Material: `Metal em ferro fundido e colunas de argamassa e tijolo`,
    Descricao: `O monumento está incluído nessa relação devido o convênio de Gestão Compartilhada do ParNacional da Tijuca entre a Prefeitura do Rio de Janeiro e oIBAMA desde 22 de março de 2001.
Portão de ferro apoiado em colunas de alvenaria argamassada, com o nome do local numa cartela suspensa de bronze, unindo as duas colunas.`,
    Execucao: true,
    DataInauguracao: `07/1944`,
    Latitude: `-22.9608976`,
    Longitude: `-43.2742495`,
};

export const FradesIdaMesadoImperador_Desconhecida: Obra = {
    ID: 1218,
    Artistas: [artistas.Desconhecida],
    Titulo: `Frades I da Mesa do Imperador`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Frade`,
    Material: `Bloco de granito esculpido`,
    Descricao: `O monumento está incluído nessa relação devido o convênio de Gestão Compartilhada do ParNacional da Tijuca entre a Prefeitura do Rio de Janeiro e oIBAMA desde 22 de março de 2001.
Frades esculpidos em gnaisse.`,

    Execucao: true,
    DataInauguracao: ``,
    Latitude: `-22.9705364`,
    Longitude: `-43.2580117`,
};

export const PontedeJobdeAlcantara_JobdeAlcantara: Obra = {
    ID: 1223,
    Artistas: [artistas.JobdeAlcântara],
    Titulo: `Ponte de Job de Alcântara`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Ponte`,
    Material: `Blocos de granito e argamassa`,
    Descricao: `O monumento está incluído nessa relação devido o convênio de Gestão Compartilhada do ParNacional da Tijuca entre a Prefeitura do Rio de Janeiro e oIBAMA desde 22 de março de 2001.
Ponte histórica remodelada na gestão de Raymundo de Castro Maya em 1944.
Em frente à Cascatinha, situa-se uma bela ponte de pedras, em formato de arco romano, construída por Job Justino de Alcântara, em 1860, e que veio a substituir outra ponte de pedras, da época do Conde Gestas. Foi remodelada na gestão castro Maya.
Na Cascatinha, Taunay e o engenheiro Joel de Alcântara construíram uma ponte de pedra, e melhorariam a velha estrada, a estrada das cangalhas, terra, que da a atual rua Conde de Bonfim levava ao Alto (uma estrada onde D. Pedro I descobrira uma fonte de águas férreas e a Imperatriz Leopoldina fazia suas pesquisas de botânica). A Ponte está sendo abordada historicamente no projeto de restauração arquitetônica.`,
    Execucao: true,
    DataInauguracao: `01/1865`,
    Latitude: `-22.9590877`,
    Longitude: `-43.27734`,
};

export const PaineldoMapadaFlorestadaTijuca_RSilva: Obra = {
    ID: 1224,
    Artistas: [artistas.RSilva],
    Titulo: `Painel do Mapa da Floresta da Tijuca`,
    Classificacao: 'perene',
    Categoria: 'sublimidade',
    TipologiaObra: `mosaico`,
    Material: `Mosaico de azulejos`,
    Descricao: `O monumento está incluído nessa relação devido o convênio de Gestão Compartilhada do ParNacional da Tijuca entre a Prefeitura do Rio de Janeiro e oIBAMA desde 22 de março de 2001.
Paínel de azulejos, em estilo de azulejaria portuguesa<com o mapa da Floresta Tijuca, com destaque para suas principais estradas e seus mais conhecidos recantos, fixada em um murada emalvenaria revestida em pedra.`,
    Execucao: true,
    DataInauguracao: `01/1946`,
    Latitude: `-22.959042`,
    Longitude: `-43.2778272`,
};

export const FontedoLargodaCascatinha_Desconhecida: Obra = {
    ID: 1225,
    Artistas: [artistas.Desconhecida],
    Titulo: `Fonte do Largo da Cascatinha`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Escultura`,
    Material: `Peça em mármore de Carrara`,
    Descricao: `O monumento está incluído nessa relação devido o convênio de Gestão Compartilhada do ParNacional da Tijuca entre a Prefeitura do Rio de Janeiro e oIBAMA desde 22 de março de 2001.
Fonte composta por um mural, onde está instalado um painel de azulejaria com o mapa da Floresta, que despeja agua em uma bacia esculpida em mármore de Carrara. Antiga banheira, tida como do século XIX, lavrada com motivos florais e efígie de sátiros. Provavelmente proveniente de antigas construções, demolidas para abrir passagem para a construção da Avenida Presidente Vargas.Recentemente foi inserida uma  cara de leão de cimento, descaracterizando o conjunto, como em outras fontes do parque.`,
    Execucao: true,
    DataInauguracao: `01/1944`,
    Latitude: `-22.959042`,
    Longitude: `-43.2778272`,
};

export const BancodoLargodaCascatinha_RaymundodeCastroMaia: Obra = {
    ID: 1226,
    Artistas: [artistas.RaymundodeCastroMaia],
    Titulo: `Banco do Largo da Cascatinha`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Mosaico`,
    Material: `Peça em argamassa e azulejos`,
    Descricao: `O monumento está incluído nessa relação devido o convênio de Gestão Compartilhada do ParNacional da Tijuca entre a Prefeitura do Rio de Janeiro e oIBAMA desde 22 de março de 2001.
Bancos em forma de grande poltronas revestido de azulejos.`,
    Execucao: true,
    DataInauguracao: `07/1944`,
    Latitude: `-22.9590497`,
    Longitude: `-43.2775531`,
};

export const MarcodoRecantodosPintores_Desconhecida: Obra = {
    ID: 1227,
    Artistas: [artistas.Desconhecida],
    Titulo: `Marco do Recanto dos Pintores`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Marco`,
    Material: `Bloco de granito com placa de bronze`,
    Descricao: `O monumento está incluído nessa relação devido o convênio de Gestão Compartilhada do ParNacional da Tijuca entre a Prefeitura do Rio de Janeiro e oIBAMA desde 22 de março de 2001.
Bloco está fixada uma placa em bronze relativa ao local. Foi inaugurado em comemoração a Semana da Tijuca. O bloco de grantio doi oferecido por uma pedreira situada nas Furnas.`,
    Execucao: true,
    DataInauguracao: `08/1969`,
    Latitude: `-22.9558613`,
    Longitude: `-43.2808264`,
};

export const BaciadoCentrodosVisitantes_Desconhecimento: Obra = {
    ID: 1229,
    Artistas: [artistas.Desconhecida],
    Titulo: `Bacia  do Centro dos Visitantes`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Escultura`,
    Material: `Peça em mármore de Carrara`,
    Descricao: `O monumento está incluído nessa relação devido o convênio de Gestão Compartilhada do ParNacional da Tijuca entre a Prefeitura do Rio de Janeiro e oIBAMA desde 22 de março de 2001.
Banheira com efígie de um sátiro, provavelmente proveniente de antigas construções, demolidas para abrir passagem para a construção da ampla Av. Presidente Vargas. Provavelmente foi instalada nesse local apos a abertura do Centro dos Visitantes.`,
    Execucao: true,
    DataInauguracao: `01/1944`,
    Latitude: `-22.9559472`,
    Longitude: `-43.2802195`,
};

export const PontedaCapelaMayrink_Desconhecida: Obra = {
    ID: 1230,
    Artistas: [artistas.Desconhecida],
    Titulo: `Ponte da Capela Mayrink`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Ponte`,
    Material: `Peça em concreto armado`,
    Descricao: `O monumento está incluído nessa relação devido o convênio de Gestão Compartilhada do ParNacional da Tijuca entre a Prefeitura do Rio de Janeiro e oIBAMA desde 22 de março de 2001.
Pequena ponte para a travessia dos pedestres sobre o rio.`,
    Execucao: true,
    DataInauguracao: ``,
    Latitude: `-22.9569879`,
    Longitude: `-43.277932`,
};

export const CampanariodaCapelaMayrink_WladimirAlvesdeSousa: Obra = {
    ID: 1231,
    Artistas: [artistas.WladimirAlvesdeSousa],
    Titulo: `Campanário da Capela Mayrink`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Construção`,
    Material: `Peça de tijolo com argamassa`,
    Descricao: `O monumento está incluído nessa relação devido o convênio de Gestão Compartilhada do ParNacional da Tijuca entre a Prefeitura do Rio de Janeiro e oIBAMA desde 22 de março de 2001.
Campanário com sino em bronze. Foi edificado na época da reforma na Capela Mayrink.`,
    Execucao: true,
    DataInauguracao: `07/1944`,
    Latitude: `-22.9569879`,
    Longitude: `-43.277932`,
};

export const BancodoJardimdaCapelaMayrink_RaymundodeCastroMaia: Obra = {
    ID: 1232,
    Artistas: [artistas.RaymundodeCastroMaia],
    Titulo: `Banco do Jardim da Capela Mayrink`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Mosaico`,
    Material: `Peça em argamassa e azulejos`,
    Descricao: `O monumento está incluído nessa relação devido o convênio de Gestão Compartilhada do ParNacional da Tijuca entre a Prefeitura do Rio de Janeiro e oIBAMA desde 22 de março de 2001.
Banco revestido por um mosaico de cacos de azulejos.`,
    Execucao: true,
    DataInauguracao: `07/1944`,
    Latitude: `-22.9581183`,
    Longitude: `-43.2777882`,
};

export const AmuradadoJardimdaCapelaMayrink_RaymundodeCastroMaia: Obra = {
    ID: 1233,
    Artistas: [artistas.RaymundodeCastroMaia],
    Titulo: `Amurada do Jardim da Capela Mayrink`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Amurada`,
    Material: `Blocos de granito e argamassa`,
    Descricao: `O monumento está incluido nessa relação devido o convênio de Gestão Compartilhada do ParNacional da Tijuca entre a Prefeitura do Rio de Janeiro e oIBAMA desde 22 de março de 2001.
Amurada em blocos de pedra com duas escadas laterais, servindo de fundo para um banco.`,
    Execucao: true,
    DataInauguracao: `07/1944`,
    Latitude: `-22.9581183`,
    Longitude: `-43.2777882`,
};

export const ObeliscodoLargodoBomRetiro_Desconhecida: Obra = {
    ID: 1234,
    Artistas: [artistas.Desconhecida],
    Titulo: `Obelisco do Largo do Bom Retiro`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Marco`,
    Material: `Bloco de gnaisse esculpido`,
    Descricao: `O monumento está incluído nessa relação devido o convênio de Gestão Compartilhada do ParNacional da Tijuca entre a Prefeitura do Rio de Janeiro e oIBAMA desde 22 de março de 2001.
Peça maciça esculpida com base quadrada e outra piramidal de cerca de 6 metros de altura`,
    Execucao: true,
    DataInauguracao: `08/1928`,
    Latitude: `-22.9473838`,
    Longitude: `-43.2913253`,
};

export const GalpaodoLargodoBomRetiro_Desconhecida: Obra = {
    ID: 1235,
    Artistas: [artistas.Desconhecida],
    Titulo: `Galpão do Largo do Bom Retiro`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Construção`,
    Material: `Pedra e tijolo com argamassa`,
    Descricao: `O Monumento está incluído nessa relação devido o convênio de Gestão Compartilhada do ParNacional da Tijuca entre a Prefeitura do Rio de Janeiro e oIBAMA desde 22 de março de 2001.
Construção para depósito e/ou abrigo da construção rural para depósito de utensílios de lavoura.`,
    Execucao: true,
    DataInauguracao: ``,
    Latitude: `-22.9473793`,
    Longitude: `-43.2914156`,
};

export const CruzeirodaFlorestadaTijuca_Desconhecida: Obra = {
    ID: 1236,
    Artistas: [artistas.Desconhecida],
    Titulo: `Cruzeiro da Floresta da Tijuca`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Cruzeiro`,
    Material: `Bloco de granito esculpido`,
    Descricao: `O monumento está incluído nessa relação devido o convênio de Gestão Compartilhada do ParNacional da Tijuca entre a Prefeitura do Rio de Janeiro e oIBAMA desde 22 de março de 2001.
Cruz em madeira fixada num bloco de cantaria, instalada em meados do século XIX, em local no qual se realizavam missas ao ar livre quando era ocupada por fazendas de café.`,
    Execucao: true,
    DataInauguracao: ``,
    Latitude: `-22.9473838`,
    Longitude: `-43.2913253`,
};

export const MarcodaAlamedaJoaoMaggessi_Desconhecida: Obra = {
    ID: 1237,
    Artistas: [artistas.Desconhecida],
    Titulo: `Marco da Alameda João Maggessi`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Marco`,
    Material: `Blocos de granito e argamassa`,
    Descricao: `O monumento está incluído nessa relação devido o convênio de Gestão Compartilhada do ParNacional da Tijuca entre a Prefeitura do Rio de Janeiro e oIBAMA desde 22 de março de 2001.
Placa em bronze com o nome do logradouro, fixada em pedestal de blocos de pedra.`,

    Execucao: true,
    DataInauguracao: ``,
    Latitude: `-22.955202`,
    Longitude: `-43.2871856`,
};

export const MarcodoLagodasFadas_Desconhecida: Obra = {
    ID: 1238,
    Artistas: [artistas.Desconhecida],
    Titulo: `Marco do Lago das Fadas`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Marco`,
    Material: `Bloco de granito com placa de bronze`,
    Descricao: `O monumento está incluído nessa relação devido o convênio de Gestão Compartilhada do ParNacional da Tijuca entre a Prefeitura do Rio de Janeiro e oIBAMA desde 22 de março de 2001.
Placa comemorativa de uma restauração do lago`,
    Execucao: true,
    DataInauguracao: `01/1955`,
    Latitude: `-22.9524045`,
    Longitude: `-43.2838275`,
};

export const PortaodoAcudeSolidao_WladimirAlvesdeSouza: Obra = {
    ID: 1239,
    Artistas: [artistas.WladimirAlvesdeSouza],
    Titulo: `Portão do Açude Solidão`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Portão`,
    Material: `Tijolo com argamassa`,
    Descricao: `O monumento está incluído nessa relação devido o convênio de Gestão Compartilhada do ParNacional da Tijuca entre a Prefeitura do Rio de Janeiro e oIBAMA desde 22 de março de 2001.
Portão de ferro entre colunas de alvenaria argamassada, encimadas por estátuas, com inscrição do nome do logradouro em mármore de Carrara.`,
    Execucao: true,
    DataInauguracao: `07/1944`,
    Latitude: `-22.9626781`,
    Longitude: `-43.2890318`,
};

export const ÍndiadoAcudeSolidao_JulesSalmson: Obra = {
    ID: 1241,
    Titulo: `Índia do Açude Solidão`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Escultura`,
    Material: `Peça em ferro fundido`,
    Descricao: `O monumento está incluído nessa relação devido o convênio de Gestão Compartilhada do ParNacional da Tijuca entre
    a Prefeitura do Rio de Janeiro e o IBAMA desde 22 de março de 2001.
Escultura representando uma índia. Situava-se em outro local do parque, sendo transferida para o sítio atual quando da construção
do portão.`,
    Execucao: true,
    DataInauguracao: `1967`,
    PontoDeReferencia: 'Estrada do Açude, Parque Nacional da Tijuca',
    Latitude: `-22.9626135`,
    Longitude: `-43.2890959`,
    Fatos: [
        new Fato('', '', 'Propriedade', 'Pública', [], 'Rio de Janeiro'),
        new Fato(
            '05/10/2000',
            '',
            'Tombamento',
            'Tombamento Federal pelo processo 0762-T-65, inscrito no livro Arqueológico, Etnográfico e Paisagístico inscrição 042 e pelo município pelo Decreto 19.011/2000 de 5 de outubro de 2000',
            [],
            'Rio de Janeiro',
        ),
    ],
};

export const GradildoAcudeSolidao_Desconhecida: Obra = {
    ID: 1242,
    Artistas: [artistas.Desconhecida],
    Titulo: `Gradil do Açude Solidão`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Gradil`,
    Material: `Peça em ferro fundido`,
    Descricao: `O monumento está incluído nessa relação devido o convênio de Gestão Compartilhada do ParNacional da Tijuca entre a Prefeitura do Rio de Janeiro e oIBAMA desde 22 de março de 2001.
Parte do gradil originario do Campo de Santana.Veio para o Brasil de navio em abril de 1876. Foi inaugurado em 1880 e transferido em data desconhecida para esse local.O gradil do Campo de Santana foi instalado em tres locais, o Parque Recanto do Trovador, no Açude Solidão e na Avenida Vescelau Braz.
Foi adquirida pelo governo imperial na Companhia Barborat de Hauts Fanaux de Val d'Osne.`,
    Execucao: true,
    DataInauguracao: `09/1880`,
    Latitude: `-22.9625004`,
    Longitude: `-43.289315`,
};

export const MarcodoAcudeSolidao_Desconhecida: Obra = {
    ID: 1243,
    Artistas: [artistas.Desconhecida],
    Titulo: `Marco do Açude Solidão`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Marco`,
    Material: `Bloco de granito esculpido`,
    Descricao: `O monumento está incluído nessa relação devido o convênio de Gestão Compartilhada do ParNacional da Tijuca entre a Prefeitura do Rio de Janeiro e oIBAMA desde 22 de março de 2001.
Bloco de granito com inscrição comemorativa do Açude, por Burle Marx e a data de sua inauguração.`,
    Execucao: true,
    DataInauguracao: `07/1944`,
    Latitude: `-22.9621642`,
    Longitude: `-43.2889595`,
};

export const PonteIdoAcudeSolidao_Desconhecida: Obra = {
    ID: 1244,
    Artistas: [artistas.Desconhecida],
    Titulo: `Ponte I do Açude Solidão`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Marco`,
    Material: `Peça em concreto armado`,
    Descricao: `O monumento está incluído nessa relação devido o convênio de Gestão Compartilhada do ParNacional da Tijuca entre a Prefeitura do Rio de Janeiro e oIBAMA desde 22 de março de 2001.
Construção em arco em concreto para a passagem do rio do lago do Açude Solidão.`,
    Execucao: true,
    DataInauguracao: ``,
    Latitude: `-22.9624144`,
    Longitude: `-43.2890552`,
};

export const PontedeMadeiradoAcudeSolidao_Desconhecida: Obra = {
    ID: 1245,
    Artistas: [artistas.Desconhecida],
    Titulo: `Ponte de Madeira do Açude Solidão`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Ponte`,
    Material: `Peça em concreto com estrutura de madeira`,
    Descricao: `Construção em torras de árvore, apoiada em pilares de blocos de pedras.`,
    Execucao: true,
    DataInauguracao: ``,
    Latitude: `-22.9619269`,
    Longitude: `-43.2887996`,
};

export const Guarda_corpodoLargodoMiranteExcelsior_Desconhecida: Obra = {
    ID: 1247,
    Artistas: [artistas.Desconhecida],
    Titulo: `Guarda-corpo do Largo do Mirante Excelsior`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Guarda-corpo`,
    Material: `Peça em concreto armado com balaustre de argamassa`,
    Descricao: `O monumento está incluído nessa relação devido o convênio de Gestão Compartilhada do ParNacional da Tijuca entre a Prefeitura do Rio de Janeiro e oIBAMA desde 22 de março de 2001.
Construção em alvenaria e argamassa originais.`,
    Execucao: true,
    DataInauguracao: ``,
    Latitude: `-22.9473838`,
    Longitude: `-43.2913253`,
};

export const EscadariadoMiranteExcelsior_Desconhecida: Obra = {
    ID: 1246,
    Artistas: [artistas.Desconhecida],
    Titulo: `Escadaria do Mirante Excelsior`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Escadaria`,
    Material: `Bloco de granito esculpido`,
    Descricao: `Degraus escavados na rocha, ladeados por corrimão constituído por grossas correntes de ferro, para a visita do Rei Alberto da Bélgica ao Pico da Tijuca, quando de sua famosa viagem ao Brasil.
Este pico é o ponto mais alto do Parque Nacional da Tijuca, com 1022 metros de altitude. A primeira picada até o cimo deste morro, foi aberta em 1853. Em 1885, o Barão d'Escragnolle, sinalizou esta, já então trilha, para auxiliar os excursionistas. José de Alencar em Sonhos d'Ouro, nos conta que, em 1872, esta trilha já era percorrida a pé e a cavalo. Em 1920, o Presidente Epitácio Pessoa reformou a trilha e mandou que se escavassem na rocha, localizada no topo do pico, degraus ladeados por corrimão constituído por grossas correntes de ferro.`,
    Execucao: true,
    DataInauguracao: `01/1922`,
    Latitude: `-22.9473838`,
    Longitude: `-43.2913253`,
};

export const PontedoRiodasAlmas_Desconhecida: Obra = {
    ID: 1248,
    Artistas: [artistas.Desconhecida],
    Titulo: `Ponte do Rio das Almas`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Ponte`,
    Material: `Peça em concreto armado`,
    Descricao: `O monumento está incluído nessa relação devido o convênio de Gestão Compartilhada do ParNacional da Tijuca entre a Prefeitura do Rio de Janeiro e oIBAMA desde 22 de março de 2001.
Construção em estrutura metálica e concreto, apoiada em pilares em blocos de pedra.`,
    Execucao: true,
    DataInauguracao: ``,
    Latitude: `-22.9539958`,
    Longitude: `-43.2912059`,
};

export const PontePensildaFlorestadaTijuca_Desconhecida: Obra = {
    ID: 1249,
    Artistas: [artistas.Desconhecida],
    Titulo: `Ponte Pênsil da Floresta da Tijuca`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Ponte`,
    Material: `Peça de Madeira`,
    Descricao: `O monumento está incluído nessa relação devido o convênio de Gestão Compartilhada do ParNacional da Tijuca entre a Prefeitura do Rio de Janeiro e oIBAMA desde 22 de março de 2001.
Ponte em madeira, com 27 metros de extensão sobre o Rio Humaitá, na trilha conhecida como Caminho da Onça. Devido à chuva, que destruiu parte da encosta, a ponte foi instalada na gestão de Pedro da Cunha Menezes.`,
    Execucao: true,
    DataInauguracao: `01/1996`,
    Latitude: `-22.9540438`,
    Longitude: `-43.291291`,
};

export const MarcodaPedraBonita_Desconhecida: Obra = {
    ID: 1250,
    Artistas: [artistas.Desconhecida],
    Titulo: `Marco da Pedra Bonita`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Marco`,
    Material: `Bloco de granito com placa de bronze`,
    Descricao: `O monumento está incluiído nessa relação devido o convênio de Gestão Compartilhada do ParNacional da Tijuca entre a Prefeitura do Rio de Janeiro e oIBAMA desde 22 de março de 2001.
Placa em bronze comemorativa da construção da estrada.`,

    Execucao: true,
    DataInauguracao: `11/1949`,
    Latitude: `-22.9791671`,
    Longitude: `-43.2763825`,
};

export const BancodePedradaEstradadoJoa_Desconhecida: Obra = {
    ID: 1251,
    Artistas: [artistas.Desconhecida],
    Titulo: `Banco de Pedra da Estrada do Joá`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Banco`,
    Material: `Bloco de granito esculpido`,
    Descricao: `O monumento está incluído nessa relação devido o convênio de Gestão Compartilhada do ParNacional da Tijuca entre a Prefeitura do Rio de Janeiro e oIBAMA desde 22 de março de 2001.
Elemento decorativo em blocos de granito, ao longo do muro de contenção da estrada.`,

    Execucao: true,
    DataInauguracao: ``,
    Latitude: `-23.0057938`,
    Longitude: `-43.2830403`,
};

export const Modulo13_AscanioMMM: Obra = {
    ID: 134,
    Artistas: [artistas.AscanioMMM],
    Titulo: `Modulo 1.3`,
    Material: 'alumínio pintado',
    DataInauguracao: '1982',
    DatasImportantes: [new Data(`1982`, 'data de inauguração- arte ambiente')],
    Propriedade: 'privada',
    Zona: 'Sul',
    Bairro: 'Cosme Velho',
    Endereço: 'Rua Cosme Velho, 415',
    Status: 'permanece no espaço público',
    Fatos: [new Fato('', '', '', '', [], 'Rio de Janeiro')],
    Temporalidade: 'permanente',
    Eixo: 'sublimidade',
    Funcao: 'ornamental',
    Natureza: 'artística',
    Tipologia: 'escultura',
    Execucao: true,
};

export const FradesdaEstradadasCanoas_Desconhecida: Obra = {
    ID: 1252,
    Artistas: [artistas.Desconhecida],
    Titulo: `Frades  da Estrada das Canoas`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Frade`,
    Material: `Bloco de gnaisse esculpido circular`,
    Descricao: `O monumento está incluído nessa relação devido o convênio de Gestão Compartilhada do ParNacional da Tijuca entre a Prefeitura do Rio de Janeiro e oIBAMA desde 22 de março de 2001.
Par de frades esculpidos.`,

    Execucao: true,
    DataInauguracao: ``,
    Latitude: `-22.9886199`,
    Longitude: `-43.2691661`,
};

export const MarcoRodoviarioEstradadoJoaI_Desconhecida: Obra = {
    ID: 1253,
    Artistas: [artistas.Desconhecida],
    Titulo: `Marco Rodoviário Estrada do Joá I`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Marco`,
    Material: `Bloco de gnaisse esculpido`,
    Descricao: `O monumento está incluído nessa relacão devido o convênio de Gestão Compartilhada do ParNacional da Tijuca entre a Prefeitura do Rio de Janeiro e oIBAMA desde 22 de março de 2001.
Inaugurado nos anos de 1930, omarco tem na sua face frontal, a indicação ERF (Estrada de Rodagem Federal) e informam a distância em quilômetros dali até o Centro. Na face posterior, há a inscrição DF (Distrito Federal). Nas faces esquerda e direita registram a distância de duas localidades próximas.`,

    Execucao: true,
    DataInauguracao: ``,
    Latitude: `-23.0079623`,
    Longitude: `-43.2881145`,
};

export const MarcoRodoviarioEstradadoJoaII_Desconhecida: Obra = {
    ID: 1254,
    Artistas: [artistas.Desconhecida],
    Titulo: `Marco Rodoviário Estrada do Joá II`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Frade`,
    Material: `Bloco de gnaisse esculpido`,
    Descricao: `O monumento está incluído nessa relação devido o convênio de Gestão Compartilhada do ParNacional da Tijuca entre a Prefeitura do Rio de Janeiro e oIBAMA desde 22 de março de 2001.
Inaugurado nos anos de 1930, omarco tem na sua face frontal, a indicação ERF (Estrada de Rodagem Federal) e informam a distância em quilômetros dali até o Centro. Na face posterior, há a inscrição DF (Distrito Federal). Nas faces esquerda e direita registram a distância de duas localidades próximas.`,
    Execucao: true,
    DataInauguracao: ``,
    Latitude: `-23.008243`,
    Longitude: `-43.2929639`,
};

export const MarcoRodoviariodaEstradadasPaineiras_Desconhecida: Obra = {
    ID: 1255,
    Artistas: [artistas.Desconhecida],
    Titulo: `Marco Rodoviário da Estrada das Paineiras`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Marco`,
    Material: `Bloco de gnaisse esculpido`,
    Descricao: `O monumento está incluído nessa relacão devido o convênio de Gestão Compartilhada do ParNacional da Tijuca entre a Prefeitura do Rio de Janeiro e oIBAMA desde 22 de março de 2001.
Inaugurado nos anos de 1930, omarco tem na sua face frontal, a indicação ERF (Estrada de Rodagem Federal) e informam a distância em quilômetros dali até o Centro. Na face posterior, há a inscrição DF (Distrito Federal). Nas faces esquerda e direita registram a distância de duas localidades próximas.`,
    Execucao: true,
    DataInauguracao: ``,
    Latitude: `-22.9485489`,
    Longitude: `-43.2113594`,
};

export const MarcoRodoviarioIdaEstradadaVistaChinesa_Desconhecida: Obra = {
    ID: 1256,
    Artistas: [artistas.Desconhecida],
    Titulo: `Marco Rodoviário I da Estrada da Vista Chinesa`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Marco`,
    Material: `Bloco de gnaisse esculpido`,
    Descricao: `O monumento está incluído nessa relação devido o convênio de Gestão Compartilhada do ParNacional da Tijuca entre a Prefeitura do Rio de Janeiro e oIBAMA desde 22 de março de 2001.
Inaugurado nos anos de 1930, omarco tem na sua face frontal, a indicação ERF (Estrada de Rodagem Federal) e informam a distância em quilômetros dali até o Centro. Na face posterior, há a inscrição DF (Distrito Federal). Nas faces esquerda e direita registram a distância de duas localidades próximas.`,
    Execucao: true,
    DataInauguracao: ``,
    Latitude: `-22.967669`,
    Longitude: `-43.2481483`,
};

export const MarcoRodoviariodaRuaUranos_Desconhecida: Obra = {
    ID: 1257,
    Artistas: [artistas.Desconhecida],
    Titulo: `Marco Rodoviário da Rua Uranos`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Marco`,
    Material: `Bloco de gnaisse esculpido`,
    Descricao: `Inaugurado nos anos de 1930, omarco tem na sua face frontal, a indicação ERF (Estrada de Rodagem Federal) e informam a distância em quilômetros dali até o Centro. Na face posterior, há a inscrição DF (Distrito Federal). Nas faces esquerda e direita registram a distância de duas localidades próximas.
Esse marco marcava as distancias da Estrada Rio Petrópolis.`,
    Execucao: true,
    DataInauguracao: ``,
    Latitude: `-22.8588342`,
    Longitude: `-43.2584383`,
};

export const MarcoRodoviariodePadreMiguel_Desconhecida: Obra = {
    ID: 1258,
    Artistas: [artistas.Desconhecida],
    Titulo: `Marco Rodoviário de Padre Miguel`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Marco`,
    Material: `Bloco de gnaisse esculpido`,
    Descricao: `Inaugurado nos anos de 1930, omarco tem na sua face frontal, a indicação ERF (Estrada de Rodagem Federal) e informam a distância em quilômetros dali até o Centro. Na face posterior, há a inscrição DF (Distrito Federal). Nas faces esquerda e direita registram a distância de duas localidades próximas.`,
    Execucao: true,
    DataInauguracao: ``,
    Latitude: `-22.8794648`,
    Longitude: `-43.4517282`,
};

export const MarcoRodoviariodoCampodeMarte_Desconhecida: Obra = {
    ID: 1259,
    Artistas: [artistas.Desconhecida],
    Titulo: `Marco Rodoviário do  Campo de Marte`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Marco`,
    Material: `Bloco de gnaisse esculpido`,
    Descricao: `Inaugurado nos anos de 1930, omarco tem na sua face frontal, a indicação ERF (Estrada de Rodagem Federal) e informam a distância em quilômetros dali até o Centro. Na face posterior, há a inscrição DF (Distrito Federal). Nas faces esquerda e direita registram a distância de duas localidades próximas.`,
    Execucao: true,
    DataInauguracao: ``,
    Latitude: `-22.8762359`,
    Longitude: `-43.4309844`,
};

export const MarcoRodoviarioIdaAvenidaCesariodeMelo_Desconhecida: Obra = {
    ID: 1260,
    Artistas: [artistas.Desconhecida],
    Titulo: `Marco Rodoviário I da Avenida Cesário de Melo`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Marco`,
    Material: `Bloco de gnaisse esculpido`,
    Descricao: `Inaugurado nos anos de 1930, omarco tem na sua face frontal, a indicação ERF (Estrada de Rodagem Federal) e informam a distância em quilômetros dali até o Centro. Na face posterior, há a inscrição DF (Distrito Federal). Nas faces esquerda e direita registram a distância de duas localidades próximas.`,
    Execucao: true,
    DataInauguracao: ``,
    Latitude: `-22.893428`,
    Longitude: `-43.5400426`,
};

export const MarcoRodoviariodaAvenidaJoaquimMagalhaes_Desconhecida: Obra = {
    ID: 1261,
    Artistas: [artistas.Desconhecida],
    Titulo: `Marco Rodoviário da Avenida Joaquim Magalhães`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Marco`,
    Material: `Bloco de gnaisse esculpido`,
    Descricao: `Inaugurado nos anos de 1930, omarco tem na sua face frontal, a indicação ERF (Estrada de Rodagem Federal) e informam a distância em quilômetros dali até o Centro. Na face posterior, há a inscrição DF (Distrito Federal). Nas faces esquerda e direita registram a distância de duas localidades próximas.
Esse marco marcava as distâncias da Estrada Rio-São Paulo`,
    Execucao: true,
    DataInauguracao: ``,
    Latitude: `-22.8913155`,
    Longitude: `-43.5319104`,
};

export const MarcoRodoviariodoLargodaMaconaria_Desconhecida: Obra = {
    ID: 1262,
    Artistas: [artistas.Desconhecida],
    Titulo: `Marco Rodoviário do Largo da Maçonaria`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Marco`,
    Material: `Bloco de gnaisse esculpido`,
    Descricao: `Inaugurado nos anos de 1930, omarco tem na sua face frontal, a indicação ERF (Estrada de Rodagem Federal) e informam a distância em quilômetros dali até o Centro. Na face posterior, há a inscrição DF (Distrito Federal). Nas faces esquerda e direita registram a distância de duas localidades próximas.`,
    Execucao: true,
    DataInauguracao: ``,
    Latitude: `-22.8884955`,
    Longitude: ``,
};

export const MarcoRodoviarioIIdaAvenidaCesariodeMelo_Desconhecida: Obra = {
    ID: 1263,
    Artistas: [artistas.Desconhecida],
    Titulo: `Marco Rodoviário II da  Avenida Cesário de Melo`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Marco`,
    Material: `Bloco de gnaisse esculpido`,
    Descricao: `Inaugurado nos anos de 1930, omarco tem na sua face frontal, a indicação ERF (Estrada de Rodagem Federal) e informam a distância em quilômetros dali até o Centro. Na face posterior, há a inscrição DF (Distrito Federal). Nas faces esquerda e direita registram a distância de duas localidades próximas.
Esse marco marcava as distâncias da Estrada Rio-São Paulo`,
    Execucao: true,
    DataInauguracao: ``,
    Latitude: `-22.8970812`,
    Longitude: `-43.5480029`,
};

export const MarcoRodoviarioIIIdeAvenidaCesariodeMelo_Desconhecida: Obra = {
    ID: 1264,
    Artistas: [artistas.Desconhecida],
    Titulo: `Marco Rodoviário III de Avenida Cesário de Melo`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Marco`,
    Material: `Bloco de gnaisse esculpido`,
    Descricao: `Inaugurado nos anos de 1930, omarco tem na sua face frontal, a indicação ERF (Estrada de Rodagem Federal) e informam a distância em quilômetros dali até o Centro. Na face posterior, há a inscrição DF (Distrito Federal). Nas faces esquerda e direita registram a distância de duas localidades próximas.
Esse marco marcava as distâncias do antigo trecho da Estrada Real de Santa Cruz.`,
    Execucao: true,
    DataInauguracao: ``,
    Latitude: `-22.9118104`,
    Longitude: `-43.5920705`,
};

export const MarcoRodoviariodaAvenidaArturRios_Desconhecida: Obra = {
    ID: 1265,
    Artistas: [artistas.Desconhecida],
    Titulo: `Marco Rodoviário da Avenida Artur Rios`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Marco`,
    Material: `Bloco de gnaisse esculpido`,
    Descricao: `Inaugurado nos anos de 1930, omarco tem na sua face frontal, a indicação ERF (Estrada de Rodagem Federal) e informam a distância em quilômetros dali até o Centro. Na face posterior, há a inscrição DF (Distrito Federal). Nas faces esquerda e direita registram a distância de duas localidades próximas.`,
    Execucao: true,
    DataInauguracao: ``,
    Latitude: `-22.902212`,
    Longitude: `-43.5473818`,
};

export const MarcoRodoviariodaEstradadoMatoAltoI_Desconhecida: Obra = {
    ID: 1266,
    Artistas: [artistas.Desconhecida],
    Titulo: `Marco Rodoviário da  Estrada do Mato Alto I`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Marco`,
    Material: `Bloco de gnaisse esculpido`,
    Descricao: `Inaugurado nos anos de 1930, omarco tem na sua face frontal, a indicação ERF (Estrada de Rodagem Federal) e informam a distância em quilômetros dali até o Centro. Na face posterior, há a inscrição DF (Distrito Federal). Nas faces esquerda e direita registram a distância de duas localidades próximas.`,
    Execucao: true,
    DataInauguracao: ``,
    Latitude: `-22.9610835`,
    Longitude: `-43.5823956`,
};

export const MarcoRodoviariodaEstradadoMatoAltoII_Desconhecida: Obra = {
    ID: 1267,
    Artistas: [artistas.Desconhecida],
    Titulo: `Marco Rodoviário da Estrada do Mato Alto II`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Marco`,
    Material: `Bloco de gnaisse esculpido`,
    Descricao: `Inaugurado nos anos de 1930, omarco tem na sua face frontal, a indicação ERF (Estrada de Rodagem Federal) e informam a distância em quilômetros dali até o Centro. Na face posterior, há a inscrição DF (Distrito Federal). Nas faces esquerda e direita registram a distância de duas localidades próximas.`,
    Execucao: true,
    DataInauguracao: ``,
    Latitude: `-22.9663107`,
    Longitude: `-43.5897904`,
};

export const MarcoRodoviariodaEstradadoMatoAltoIII_Desconhecida: Obra = {
    ID: 1268,
    Artistas: [artistas.Desconhecida],
    Titulo: `Marco Rodoviário da Estrada do Mato Alto III`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Marco`,
    Material: `Bloco de gnaisse esculpido`,
    Descricao: `Inaugurado nos anos de 1930, omarco tem na sua face frontal, a indicação ERF (Estrada de Rodagem Federal) e informam a distância em quilômetros dali até o Centro. Na face posterior, há a inscrição DF (Distrito Federal). Nas faces esquerda e direita registram a distância de duas localidades próximas.`,
    Execucao: true,
    DataInauguracao: ``,
    Latitude: `-22.9745056`,
    Longitude: `-43.5893829`,
};

export const MarcoRodoviariodaEstradadoCabucu_Desconhecida: Obra = {
    ID: 1269,
    Artistas: [artistas.Desconhecida],
    Titulo: `Marco Rodoviário da  Estrada do Cabuçu`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Marco`,
    Material: `Bloco de gnaisse esculpido`,
    Descricao: `Inaugurado nos anos de 1930, omarco tem na sua face frontal, a indicação ERF (Estrada de Rodagem Federal) e informam a distância em quilômetros dali até o Centro. Na face posterior, há a inscrição DF (Distrito Federal). Nas faces esquerda e direita registram a distância de duas localidades próximas.`,
    Execucao: true,
    DataInauguracao: ``,
    Latitude: `-22.9196437`,
    Longitude: `-43.5296899`,
};

export const MarcoRodoviarioIdaEstradadeSepetiba_Desconhecida: Obra = {
    ID: 1270,
    Artistas: [artistas.Desconhecida],
    Titulo: `Marco Rodoviário I da Estrada de Sepetiba`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Marco`,
    Material: `Bloco de gnaisse esculpido`,
    Descricao: `Inaugurado nos anos de 1930, omarco tem na sua face frontal, a indicação ERF (Estrada de Rodagem Federal) e informam a distância em quilômetros dali até o Centro. Na face posterior, há a inscrição DF (Distrito Federal). Nas faces esquerda e direita registram a distância de duas localidades próximas.`,
    Execucao: true,
    DataInauguracao: ``,
    Latitude: `-22.9479046`,
    Longitude: `-43.6791435`,
};

export const MarcoRodoviarioIIdaEstradadeSepetiba_Desconhecida: Obra = {
    ID: 1271,
    Artistas: [artistas.Desconhecida],
    Titulo: `Marco Rodoviário II da Estrada de Sepetiba`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Marco`,
    Material: `Bloco de gnaisse esculpido`,
    Descricao: `Inaugurado nos anos de 1930, omarco tem na sua face frontal, a indicação ERF (Estrada de Rodagem Federal) e informam a distância em quilômetros dali até o Centro. Na face posterior, há a inscrição DF (Distrito Federal). Nas faces esquerda e direita registram a distância de duas localidades próximas.`,
    Execucao: true,
    DataInauguracao: ``,
    Latitude: `-22.9406891`,
    Longitude: `-43.6744281`,
};

export const MarcoRodoviarioIIIdaEstradadeSepetiba_Desconhecida: Obra = {
    ID: 1272,
    Artistas: [artistas.Desconhecida],
    Titulo: `Marco Rodoviário III da Estrada de Sepetiba`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Marco`,
    Material: `Bloco de gnaisse esculpido`,
    Descricao: `Inaugurado nos anos de 1930, omarco tem na sua face frontal, a indicação ERF (Estrada de Rodagem Federal) e informam a distância em quilômetros dali até o Centro. Na face posterior, há a inscrição DF (Distrito Federal). Nas faces esquerda e direita registram a distância de duas localidades próximas.`,
    Execucao: true,
    DataInauguracao: ``,
    Latitude: `-22.9559874`,
    Longitude: `-43.6882497`,
};

export const MarcoRodoviarioIdaEstradadaMatriz_Desconhecida: Obra = {
    ID: 1273,
    Artistas: [artistas.Desconhecida],
    Titulo: `Marco Rodoviário I da Estrada da Matriz`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Marco`,
    Material: `Bloco de gnaisse esculpido`,
    Descricao: `Inaugurado nos anos de 1930, omarco tem na sua face frontal, a indicação ERF (Estrada de Rodagem Federal) e informam a distância em quilômetros dali até o Centro. Na face posterior, há a inscrição DF (Distrito Federal). Nas faces esquerda e direita registram a distância de duas localidades próximas.`,
    Execucao: true,
    DataInauguracao: ``,
    Latitude: `-22.9939436`,
    Longitude: `-43.593836`,
};

export const MarcoRodoviarioIIdaEstradadaMatriz_Desconhecida: Obra = {
    ID: 1275,
    Artistas: [artistas.Desconhecida],
    Titulo: `Marco Rodoviário II da Estrada da Matriz`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Marco`,
    Material: `Bloco de gnaisse esculpido`,
    Descricao: `Inaugurado nos anos de 1930, omarco tem na sua face frontal, a indicação ERF (Estrada de Rodagem Federal) e informam a distância em quilômetros dali até o Centro. Na face posterior, há a inscrição DF (Distrito Federal). Nas faces esquerda e direita registram a distância de duas localidades próximas.`,
    Execucao: true,
    DataInauguracao: ``,
    Latitude: `-22.9871724`,
    Longitude: `-43.5748114`,
};

export const MarcoRodoviarioEstradaVelhadeBarradeGuaratiba_Desconhecida: Obra = {
    ID: 1276,
    Artistas: [artistas.Desconhecida],
    Titulo: `Marco Rodoviário  Estrada Velha de Barra de Guaratiba`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Marco`,
    Material: `Bloco de gnaisse esculpido`,
    Descricao: `Inaugurado nos anos de 1930, omarco tem na sua face frontal, a indicação ERF (Estrada de Rodagem Federal) e informam a distância em quilômetros dali até o Centro. Na face posterior, há a inscrição DF (Distrito Federal). Nas faces esquerda e direita registram a distância de duas localidades próximas.`,
    Execucao: true,
    DataInauguracao: ``,
    Latitude: `-23.0679506`,
    Longitude: `-43.5675252`,
};

export const MarcoRodoviariodaEstradadoMorroCavado_Desconhecida: Obra = {
    ID: 1277,
    Artistas: [artistas.Desconhecida],
    Titulo: `Marco Rodoviário da Estrada do Morro Cavado`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Marco`,
    Material: `Bloco de gnaisse esculpido`,
    Descricao: `Inaugurado nos anos de 1930, omarco tem na sua face frontal, a indicação ERF (Estrada de Rodagem Federal) e informam a distância em quilômetros dali até o Centro. Na face posterior, há a inscrição DF (Distrito Federal). Nas faces esquerda e direita registram a distância de duas localidades próximas.`,
    Execucao: true,
    DataInauguracao: ``,
    Latitude: `-22.9803581`,
    Longitude: `-43.5705914`,
};

export const MarcoRodoviarioIIdaEstradadaVistaChinesa_Desconhecida: Obra = {
    ID: 1278,
    Artistas: [artistas.Desconhecida],
    Titulo: `Marco Rodoviário II da Estrada da Vista Chinesa`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Marco`,
    Material: `Bloco de gnaisse esculpido`,
    Descricao: `O monumento está incluído nessa relação devido o convênio de Gestão Compartilhada do ParNacional da Tijuca entre a Prefeitura do Rio de Janeiro e oIBAMA desde 22 de março de 2001.
Inaugurado nos anos de 1930, omarco tem na sua face frontal, a indicação ERF (Estrada de Rodagem Federal) e informam a distância em quilômetros dali até o Centro. Na face posterior, há a inscrição DF (Distrito Federal). Nas faces esquerda e direita registram a distância de duas localidades próximas.`,
    Execucao: true,
    DataInauguracao: ``,
    Latitude: `-22.9681132`,
    Longitude: `-43.2607773`,
};

export const MarcoRodoviarioIIIdaEstradadaVistaChinesa_Desconhecida: Obra = {
    ID: 1279,
    Artistas: [artistas.Desconhecida],
    Titulo: `Marco Rodoviário III da Estrada da Vista Chinesa`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Marco`,
    Material: `Bloco de gnaisse esculpido`,
    Descricao: `O monumento está incluído nessa relação devido o convênio de Gestão Compartilhada do ParNacional da Tijuca entre a Prefeitura do Rio de Janeiro e oIBAMA desde 22 de março de 2001.
Inaugurado nos anos de 1930, omarco tem na sua face frontal, a indicação ERF (Estrada de Rodagem Federal) e informam a distância em quilômetros dali até o Centro. Na face posterior, há a inscrição DF (Distrito Federal). Nas faces esquerda e direita registram a distância de duas localidades próximas.`,
    Execucao: true,
    DataInauguracao: ``,
    Latitude: `-22.9735501`,
    Longitude: `-43.2751241`,
};

export const BicadoCazuza_Desconhecida: Obra = {
    ID: 1280,
    Artistas: [artistas.Desconhecida],
    Titulo: `Bica do Cazuza`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Fonte`,
    Material: `Peça em ferro pintado`,
    Descricao: `O monumento está incluído nessa relação devido o convênio de Gestão Compartilhada do ParNacional da Tijuca entre a Prefeitura do Rio de Janeiro e oIBAMA desde 22 de março de 2001.
Ducha natural onde foram instalados barras para o uso e rampas para o uso de pessoas deficientes.`,
    Execucao: true,
    DataInauguracao: `06/2011`,
    Latitude: `-22.9551504`,
    Longitude: `-43.2340416`,
};

export const LagodoQuebra_CachoeiradoHorto__Desconhecida: Obra = {
    ID: 1281,
    Artistas: [artistas.Desconhecida],
    Titulo: `Lago do Quebra (Cachoeira do Horto)`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Lago`,
    Material: `Blocos de granito e argamassa`,
    Descricao: `O monumento estaá incluído nessa relação devido o convênio de Gestão Compartilhada do ParNacional da Tijuca entre a Prefeitura do Rio de Janeiro e oIBAMA desde 22 de março de 2001.
Lago criado a partir do represamento realizado em blocos de pedra.`,
    Execucao: true,
    DataInauguracao: ``,
    Latitude: `-22.965627`,
    Longitude: `-43.2461916`,
};

export const CascatadoQuebra_CachoeiradoHorto__Desconhecida: Obra = {
    ID: 1282,
    Artistas: [artistas.Desconhecida],
    Titulo: `Cascata  do Quebra (Cachoeira do Horto)`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Cascata`,
    Material: `Blocos de granito e argamassa`,
    Descricao: `O monumento está incluído nessa relação devido o convênio de Gestão Compartilhada do ParNacional da Tijuca entre a Prefeitura do Rio de Janeiro e oIBAMA desde 22 de março de 2001.
Cascata formada por pedras e concreto com degraus horizontais, redesenhando a queda da cachoeira.`,
    Execucao: true,
    DataInauguracao: ``,
    Latitude: `-22.965627`,
    Longitude: `-43.2461916`,
};

export const FontedasDuasBicas_Desconhecida: Obra = {
    ID: 1283,
    Artistas: [artistas.Desconhecida],
    Titulo: `Fonte das Duas Bicas`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Fonte`,
    Material: `Bloco de granito`,
    Descricao: `O monumento está incluído nessa relação devido o convênio de Gestão Compartilhada do ParNacional da Tijuca entre a Prefeitura do Rio de Janeiro e oIBAMA desde 22 de março de 2001.
Blocos de pedra que formam um pequeno reservatório que abastece e direcionam a agua para duas bicas e a esgota para o tanque.`,
    Execucao: true,
    DataInauguracao: ``,
    Latitude: `-22.9720538`,
    Longitude: `-43.2531252`,
};

export const FonteMedusadaVistaChinesa_Desconhecida: Obra = {
    ID: 1284,
    Artistas: [artistas.Desconhecida],
    Titulo: `Fonte Medusa da Vista Chinesa`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Fonte`,
    Material: `Peça em ferro fundido`,
    Descricao: `O monumento está incluído nessa relação devido o convênio de Gestão Compartilhada do ParNacional da Tijuca entre a Prefeitura do Rio de Janeiro e oIBAMA desde 22 de março de 2001.
Foi instalada inicialmente no trecho da curva em frente a da Vista Chinesa, a peça foi transferida para uma murada construída provavelmente nos anos de 1940, junto com o guarda corpo de proteção do monumento.`,
    Execucao: true,
    DataInauguracao: ``,
    Latitude: `-22.9733015`,
    Longitude: `-43.249999`,
};

export const FontedasTresBicas_Desconhecida: Obra = {
    ID: 1285,
    Artistas: [artistas.Desconhecida],
    Titulo: `Fonte das Três Bicas`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Fonte`,
    Material: `Blocos de granito`,
    Descricao: `O monumento está incluído nessa relação devido o convênio de Gestão Compartilhada do ParNacional da Tijuca entre a Prefeitura do Rio de Janeiro e oIBAMA desde 22 de março de 2001.
Blocos de pedra que formam um pequeno reservatório que abastece e direcionam a água para três bicas e a esgota para o tanque.`,
    Execucao: true,
    DataInauguracao: ``,
    Latitude: `-22.9727244`,
    Longitude: `-43.2544725`,
};

export const FontedoImperador_Desconhecida: Obra = {
    ID: 1286,
    Artistas: [artistas.Desconhecida],
    Titulo: `Fonte do Imperador`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Fonte`,
    Material: `Bloco de granito`,
    Descricao: `O monumento está incluído nessa relação devido o convênio de Gestão Compartilhada do ParNacional da Tijuca entre a Prefeitura do Rio de Janeiro e oIBAMA desde 22 de março de 2001.
Pequena fonte revestida por blocos de pedra, próxima à Mesa do Imperador.`,
    Execucao: true,
    DataInauguracao: ``,
    Latitude: `-22.9703954`,
    Longitude: `-43.2580519`,
};

export const FontedePedraIdoParqueNacionaldaTijuca_Desconhecida: Obra = {
    ID: 1288,
    Artistas: [artistas.Desconhecida],
    Titulo: `Fonte de Pedra I do Parque Nacional da Tijuca`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Fonte`,
    Material: `Bloco de granito esculpido`,
    Descricao: `O monumento está incluído nessa relação devido o convênio de Gestão Compartilhada do ParNacional da Tijuca entre a Prefeitura do Rio de Janeiro e oIBAMA desde 22 de março de 2001.
Fonte de água natural confeccionada em blocos de pedra.`,
    Execucao: true,
    DataInauguracao: ``,
    Latitude: `-22.9682595`,
    Longitude: `-43.26232`,
};

export const FontedePedraIIdoParqueNacionaldaTijuca_Desconhecida: Obra = {
    ID: 1289,
    Artistas: [artistas.Desconhecida],
    Titulo: `Fonte de Pedra II do Parque Nacional da Tijuca`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Fonte`,
    Material: `Bloco de granito esculpido`,
    Descricao: `íO monumento está incluido nessa relação devido o convênio de Gestão Compartilhada do ParNacional da Tijuca entre a Prefeitura do Rio de Janeiro e oIBAMA desde 22 de março de 2001.
Pequena construção de blocos de pedra que recolhe água de uma fonte natural.`,
    Execucao: true,
    DataInauguracao: ``,
    Latitude: `-22.9667237`,
    Longitude: `-43.2592581`,
};

export const PontedePedradoParqueNacionaldaTijuca_Desconhecida: Obra = {
    ID: 1290,
    Artistas: [artistas.Desconhecida],
    Titulo: `Ponte de Pedra do Parque Nacional da Tijuca`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Ponte`,
    Material: `Blocos de granito`,
    Descricao: `O monumento está incluído nessa relação devido o convênio de Gestão Compartilhada do ParNacional da Tijuca entre a Prefeitura do Rio de Janeiro e oIBAMA desde 22 de março de 2001.
Construção em blocos de pedra em arco, que permite a passagem sobre o rio.`,
    Execucao: true,
    DataInauguracao: ``,
    Latitude: `-22.9667237`,
    Longitude: `-43.2592581`,
};

export const FontedoVasodoParqueNacionaldaTijuca_Desconhecida: Obra = {
    ID: 1292,
    Artistas: [artistas.Desconhecida],
    Titulo: `Fonte do Vaso  do Parque Nacional da Tijuca`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Fonte`,
    Material: `Peça em ferro fundido`,
    Descricao: `O monumento está incluído nessa relação devido o convênio de Gestão Compartilhada do ParNacional da Tijuca entre a Prefeitura do Rio de Janeiro e oIBAMA desde 22 de março de 2001.
Vaso fixada em um muro.`,
    Execucao: true,
    DataInauguracao: ``,
    Latitude: `-22.9745976`,
    Longitude: `-43.2767128`,
};

export const FontedeAzulejosIdaCascatinha_RaymundodeCastroMaya: Obra = {
    ID: 1293,
    Artistas: [artistas.RaymundodeCastroMaya],
    Titulo: `Fonte de Azulejos I da Cascatinha`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Fonte`,
    Material: `Peça em concreto revestido por azulejo`,
    Descricao: `O monumento está incluido nessa relação devido o convênio de Gestão Compartilhada do ParNacional da Tijuca entre a Prefeitura do Rio de Janeiro e oIBAMA desde 22 de março de 2001.
Construção de argamassa revestida por azulejos.`,
    Execucao: true,
    DataInauguracao: `07/1944`,
    Latitude: `-22.9596553`,
    Longitude: `-43.2763051`,
};

export const FontedoVasodoLargodaCascatinha_Desconhecida: Obra = {
    ID: 1294,
    Artistas: [artistas.Desconhecida],
    Titulo: `Fonte do Vaso do Largo da Cascatinha`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Fonte`,
    Material: `Peça em ferro fundido e mural de concreto revestido por azulejo`,
    Descricao: `O monumento está incluído nessa relação devido o convênio de Gestão Compartilhada do ParNacional da Tijuca entre a Prefeitura do Rio de Janeiro e oIBAMA desde 22 de março de 2001.
Fonte provavelmente instalada no parque no século XIX, com painel de azulejaria em tons de azul e amarelo sobre fundo branco, provavelmente reformada no periodo de gestão do parque por Castro Maya. Os antigos guias contam a seguinte lenda : Na fonte da Cascatinha os solteiros que querem se casar dvem beber a agua com a mão direita. Os que estão felizes com o perceiro devem beber com as duas mãos e finalmente, os que querem descasar devem beber com a mão esquerda.`,
    Execucao: true,
    DataInauguracao: ``,
    Latitude: `-22.9590168`,
    Longitude: `-43.2777318`,
};

export const LagodoRecantodosPintores_Desconhecida: Obra = {
    ID: 1295,
    Artistas: [artistas.Desconhecida],
    Titulo: `Lago do Recanto dos Pintores`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Lago`,
    Material: `Blocos de granito`,
    Descricao: `O monumento está incluído nessa relação devido o convênio de Gestão Compartilhada do ParNacional da Tijuca entre a Prefeitura do Rio de Janeiro e oIBAMA desde 22 de março de 2001.
Executado em blocos represenda as águas do rio, formando um pitoresco recanto.`,
    Execucao: true,
    DataInauguracao: `01/1969`,
    Latitude: `-22.9559025`,
    Longitude: `-43.2808614`,
};

export const LagodasFadas_AugusteFrancoisMarieGlaziou: Obra = {
    ID: 1297,
    Artistas: [artistas.AugusteFrancoisMarieGlaziou],
    Titulo: `Lago das Fadas`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Lago`,
    Material: `Seixos e lascas de granito`,
    Descricao: `O monumento está incluído nessa relação devido o convênio de Gestão Compartilhada do ParNacional da Tijuca entre a Prefeitura do Rio de Janeiro e oIBAMA desde 22 de março de 2001.
O Lago das Fadas, nome dado pelo Barão d&rsquo;Escragnolle, foi construído numa bacia do terreno.`,
    Execucao: true,
    DataInauguracao: ``,
    Latitude: `-22.9524045`,
    Longitude: `-43.2838275`,
};

export const FontedoLagodasFadas_WaldimirAlvesdeSouza: Obra = {
    ID: 1298,
    Artistas: [artistas.WaldimirAlvesdeSouza],
    Titulo: `Fonte do Lago das Fadas`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Fonte`,
    Material: `Monolítico de concreto revestido de azulejos`,
    Descricao: `O monumento está incluído nessa relação devido o convênio de Gestão Compartilhada do ParNacional da Tijuca entre a Prefeitura do Rio de Janeiro e oIBAMA desde 22 de março de 2001
Coluna revestida ao redor com azulejos de Sevres, pia redonda de mármore. Possuía originariamente um dragão alado em bronze de onde vertia água.O Lago das Fadas, nome dado por Escragnolle, tem paisagismo original de Galziou, situa-se num antigo charco que foi represado e restaurado pelo arquiteto Vladimir Alves de Souza em 1943, durante a gestão de Castro Maya, que mandou construir esta pequena fonte.
Ha relatos que nesse lago existem resquícios da ação de AugusteFrancoisMarieGlaziou e Burle Marx, mas em bibliografia está dada a autoria do projeto do espaço a Waldimir.`,
    Execucao: true,
    DataInauguracao: `01/1944`,
    Latitude: `-22.9524045`,
    Longitude: `-43.283827`,
};

export const FonteMidosi_Desconhecida: Obra = {
    ID: 1299,
    Artistas: [artistas.Desconhecida],
    Titulo: `Fonte Midosi`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Fonte`,
    Material: `Monolitico de concreto revestido de azulejo`,
    Descricao: `O monumento está incluído nessa relação devido o convênio de Gestão Compartilhada do ParNacional da Tijuca entre a Prefeitura do Rio de Janeiro e oIBAMA desde 22 de março de 2001.
A história dessa fonte está ligada a residência do Major Manuel Gomes Archer no sitio Midosi ( local do restaurante A Floresta) antiga propriedade de Guilherme Midosi, cafeicultor, que ali residiu, até 1856, quando passaram suas terras para a Fazenda Imperial. Numa pesquisa iconográfica foi possível identificar que a fonte possuía uma escultura neoclássica até os anos de 1960, sem a parede azulejada e saída direta da agua.
Foi reformulada na gestão de Castro Maya, com a colocação de azulejos coloridos de azul e branco. Recentemente a inclusão de outro elemento, uma cara de leão de cimento.
Desativado em data desconhecida.`,
    Execucao: true,
    DataInauguracao: ``,
    Latitude: `-22.9498244`,
    Longitude: `-43.2859364`,
};

export const FontedoLargodoBomRetiro_RaymundodeCastroMaya: Obra = {
    ID: 1300,
    Artistas: [artistas.RaymundodeCastroMaya],
    Titulo: `Fonte do Largo do Bom Retiro`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Fonte`,
    Material: `Monolitico de concreto revestido de azulejo`,
    Descricao: `O monumento está incluído nessa relação devido o convênio de Gestão Compartilhada do ParNacional da Tijuca entre a Prefeitura do Rio de Janeiro e oIBAMA desde 22 de março de 2001.
Fonte diante de uma mureta revestida por azulejos.`,
    Execucao: true,
    DataInauguracao: `07/1944`,
    Latitude: `-22.9473793`,
    Longitude: `-43.2914156`,
};

export const CascatadeRocailledaFlorestadaTijuca_AugusteFrancoisMarieGlaziou: Obra = {
    ID: 1301,
    Artistas: [artistas.AugusteFrancoisMarieGlaziou],
    Titulo: `Cascata de Rocaille da Floresta da Tijuca`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Cascata`,
    Material: `Peça de rocaille em argamassa`,
    Descricao: `O monumento está incluído nessa relação devido o convênio de Gestão Compartilhada do ParNacional da Tijuca entre a Prefeitura do Rio de Janeiro e oIBAMA desde 22 de março de 2001.
Pequena cascata criada em rocaille para forma a Cacheira da Baronesa.`,
    Execucao: true,
    DataInauguracao: ``,
    Latitude: `-22.9540438`,
    Longitude: `-43.2912919`,
};

export const FontedoHumaita_Desconhecida: Obra = {
    ID: 1302,
    Artistas: [artistas.Desconhecida],
    Titulo: `Fonte do Humaitá`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Fonte`,
    Material: `Pecas de tijolo com argamassa`,
    Descricao: `O monumento está incluído nessa relação devido o convênio de Gestão Compartilhada do ParNacional da Tijuca entre a Prefeitura do Rio de Janeiro e oIBAMA desde 22 de março de 2001.
Provavelmente projetada por August Auguste Francois Marie Glaziou, no período do Barão dEscragnolle, e era encimada por uma escultura que já não mais existe, tendo sido remodelada, ao que tudo indica, por Castro Maya.`,
    Execucao: true,
    DataInauguracao: ``,
    Latitude: `-22.9555439`,
    Longitude: `-43.2917618`,
};

export const FontedaHipica_Desconhecida: Obra = {
    ID: 1304,
    Artistas: [artistas.Desconhecida],
    Titulo: `Fonte da Hipica`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Fonte`,
    Material: `Pedra e tijolo com argamassa`,
    Descricao: `O monumento está incluído nessa relação devido o convênio de Gestão Compartilhada do ParNacional da Tijuca entre a Prefeitura do Rio de Janeiro e oIBAMA desde 22 de março de 2001.
Fonte composta por uma coluna em argamassa, que despeja a agua em uma bacia de blocos de pedra.
Desde 2016 se verifica a inclusão de outro elemento, uma cara de leão de cimento, descaracterizando o monumento`,
    Execucao: true,
    DataInauguracao: ``,
    Latitude: `-22.9579814`,
    Longitude: `-43.284411`,
};

export const LagodoAcudedaSolidao_RobertoBurleMarx: Obra = {
    ID: 1305,
    Artistas: [artistas.RobertoBurleMarx],
    Titulo: `Lago do Açude da Solidão`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Lago`,
    Material: `Saibro`,
    Descricao: `O monumento está incluído nessa relação devido o convênio de Gestão Compartilhada do ParNacional da Tijuca entre a Prefeitura do Rio de Janeiro e oIBAMA desde 22 de março de 2001.
Lago criado a partir do represamento das águas do rio que desce da floresta. Inicalmente recebeu um tratamento paisagistico por AugusteFrancoisMarieGlaziou, que foi posteriormente reformado por Burle Marx.
Uma história de amor de um pai por seu filho batizou este açude. O Barão do Bom Retiro era o proprietário do lugar quando seu filho foi lutar e morreu na Guerra do Paraguai. Bom Retiro entrou em depressão e refugiava-se no lago de sua casa para chorar a morte do filho. Sua residência desde então ficou conhecida como A Solidão e o lago da casa como o Açude da Solidão.`,
    Execucao: true,
    DataInauguracao: `07/1944`,
    Latitude: `-22.961901`,
    Longitude: `-43.2888315`,
};

export const FontedoJoa_Desconhecida: Obra = {
    ID: 1306,
    Artistas: [artistas.Desconhecida],
    Titulo: `Fonte do Joá`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Fonte`,
    Material: `Blocos de granito`,
    Descricao: `Antiga fonte natural tipo estela com uma pequena carranca em argamassa. O monumento está incluído nessa relação devido o convênio de Gestão Compartilhada do ParNacional da Tijuca entre a Prefeitura do Rio de Janeiro e oIBAMA desde 22 de março de 2001.
Fonte parietal com pequena carranca esculpida em blocos de pedra.`,
    Execucao: true,
    DataInauguracao: ``,
    Latitude: `-23.0035945`,
    Longitude: `-43.2797708`,
};

export const SebastiaoLeme_EdgarDuvivier: Obra = {
    ID: 1307,
    Artistas: [artistas.EdgarDuvivier],
    Titulo: `Sebastião Leme`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Escultura`,
    Material: `Peça em bronze`,
    Descricao: `O monumento esta incluído nessa relação devido o convênio de Gestão Compartilhada do ParNacional da Tijuca entre a Prefeitura do Rio de Janeiro e oIBAMA desde 22 de março de 2001.
Busto com a figura do homenageado.`,
    Execucao: true,
    DataInauguracao: `10/2011`,
    Latitude: `-22.9520804`,
    Longitude: `-43.211276`,
};

export const HeitordaSilvaCosta_EdgarDuvivier: Obra = {
    ID: 1308,
    Artistas: [artistas.EdgarDuvivier],
    Titulo: `Heitor da Silva Costa`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Escultura`,
    Material: `Peça em bronze`,
    Descricao: `O monumento está incluído nessa relação devido o convênio de Gestão Compartilhada do ParNacional da Tijuca entre a Prefeitura do Rio de Janeiro e oIBAMA desde 22 de março de 2001.
Busto com a figura do homenageado.`,
    Execucao: true,
    DataInauguracao: `10/2011`,
    Latitude: `-22.9520804`,
    Longitude: `-43.211276`,
};

export const AoBaraodeTaunay_CurzioZani: Obra = {
    ID: 1309,
    Artistas: [artistas.CurzioZani],
    Titulo: `Ao Barão de Taunay`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Escultura`,
    Material: `Monolitico de concreto revestido de azulejo`,
    Descricao: `O monumento está incluído nessa relação devido o convênio de Gestão Compartilhada do ParNacional da Tijuca entre a Prefeitura do Rio de Janeiro e oIBAMA desde 22 de março de 2001.
Homenagem ao Barão de Taunay, antigo morador do lugar, Na face fronteira à cascata, sob um retrato de Taunay, em cor azul, lê-se: Félix Emilio Taunay (1795  1881). Decorada com azulejaria contendo
desenhos e textos em homenagem a Taunay. Não sabemos a origem dos azulejos. Danificado após a revolução de 1930, foi restaurada por Castro Maya durante sua gestão e foram localizadas fotografias que
registram alterações na sua base.`,
    Execucao: true,
    DataInauguracao: `08/1928`,
    Latitude: `-22.9590168`,
    Longitude: `-43.2777318`,
};

export const MercedesBaptista_MarcioPintanguy: Obra = {
    ID: 1311,
    Artistas: [artistas.MarcioPintanguy],
    Titulo: `Mercedes Baptista`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Escultura`,
    Material: `Peça em bronze e pedestal de concreto`,
    Descricao: `Escultura doada à Cidade pela curadora do acervo de Mercedes, Sra Ruth S. Santos. A peça na pátina natural foi assim idealizada pelo artista para caracterizar a filha do Oxun.`,
    Execucao: true,
    DataInauguracao: `10/2016`,
    Latitude: `-22.8975282`,
    Longitude: `-43.1842259`,
};

export const BancodaFontedoChororo_Desconhecida: Obra = {
    ID: 1313,
    Artistas: [artistas.Desconhecida],
    Titulo: `Banco da Fonte do Chororó`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Banco`,
    Material: `Tijolo com argamassa`,
    Descricao: `Construção na murada da encosta, num recanto próximo a Fonte do Chororó.`,
    Execucao: true,
    DataInauguracao: ``,
    Latitude: `-22.9408583`,
    Longitude: `-43.2104137`,
};

export const BrigadeiroEduardoGomes_EdgarDuvivier: Obra = {
    ID: 1314,
    Imagem: 'BrigadeiroEduardoGomes_EdgarDuvivier.jpg',
    Artistas: [artistas.EdgarDuvivier],
    Titulo: `Brigadeiro Eduardo Gomes`,
    Classificacao: 'perene',
    Categoria: 'personalidades',
    TipologiaObra: `Busto`,
    Material: `Peça em bronze e pedestal de concreto`,
    Descricao: `A homenagem ao brigadeiro em trajes civis, foi uma doação de alunos da Escola Superior de Guerra.`,
    Execucao: true,
    DataInauguracao: `26/10/1988`,
    Zona: 'Sul',
    Bairro: 'Flamengo',
    PontoDeReferencia: 'Praça Pistoia, Aterro do Flamengo',
    Latitude: `-22.9152736`,
    Longitude: `-43.174109`,
    Fatos: [
        new Fato(`26/10/1988`, `26/10/1988`, 'Homenagem', 'Homenagem de uma turma da Escola Superior de Guerra', [], 'Rio de Janeiro'),
        new Fato(`01/02/1998`, `01/02/1998`, 'Vandalismo', 'A peça foi pichada por grafiteros.', [], 'Rio de Janeiro'),
        new Fato(`25/08/1998`, `25/08/1998`, 'Vandalismo', 'A peça foi pichada por grafiteros.', [], 'Rio de Janeiro'),
        new Fato(``, ``, 'Fundição/Atelier', 'Zani Fundição Artística e Metalúrgica Ltda', [], 'Rio de Janeiro'),
        new Fato('', '', 'Propriedade', 'Pública', [], 'Rio de Janeiro'),
    ],
};

export const MarechalMascarenhasdeMorais_ElzaCasancaodeMedeiros: Obra = {
    ID: 1315,
    Artistas: [artistas.ElzaCasancaodeMedeiros],
    Titulo: `Marechal Mascarenhas de Morais`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Escultura`,
    Material: `Peça em bronze com pedestal de granito`,
    Descricao: `Iniciativa do Exército Brasileiro na pessoa da doadora da obra, a Major Elza Cansanção Medeiros, conhecida enfermeira da FEB. Inaugurado na Praça Itália foi furtado por duas vezes. Na segunda réplica a Majorsolicitou a cessão de uso ao Monumento Nacional aos Mortos da II Guerra Mundial, oficializada em 2 de novembro de 2008.`,
    Execucao: true,
    DataInauguracao: `11/1969`,
    Latitude: `-22.9161781`,
    Longitude: `-43.1741689`,
};

export const ACarlotaMacedoSoares_Desconhecida: Obra = {
    ID: 1317,
    Artistas: [artistas.Desconhecida],
    Titulo: `À Carlota Macedo Soares`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Construção`,
    Material: `Peça de Madeira`,
    Descricao: `Estrutura em madeira com cerca de 450 metros de extensão, recobrindo o trecho que o Rio Carioca percorre a céu aberto até desembocar na baía. Executado pela Prefeitura atraves da Fundação Rio. A obra foi executada pela Empresa Silo Engenharia Ltda com vigas pre moldades da empresa Engemoldes.
Realizada no ano de 2004, sem uma inauguração oficial, o deck passou a homenagear Carlota Macedo Soares pelo Decreto nº 25045 de 27 de janeiro de 2005 do prefeito Cesar Maia. `,
    Execucao: true,
    DataInauguracao: `01/2005`,
    Latitude: `-22.9357553`,
    Longitude: `-43.1699748`,
};

export const ChafarizCascatadoMuseudeArteModerna_RobertoBurleMarx: Obra = {
    ID: 1318,
    Artistas: [artistas.RobertoBurleMarx],
    Titulo: `Chafariz Cascata do Museu de Arte Moderna`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Chafariz`,
    Material: `Peça em concreto armado`,
    Descricao: `Inaugurado nos anos de 1960. O Chafariz é formado com três bacias escalonadas, saindo o jorro de água da bacia superior. A água transborda pelas bacias para o lago de plantas aquáticas. O Chafariz está no centro da fachada do Museu.
Esta desativado desde o ano de 2008.`,
    Execucao: true,
    DataInauguracao: ``,
    Latitude: `-22.9135167`,
    Longitude: `-43.172015`,
};

export const ChafarizdeLaminasVerticaisdoMuseudeArteModerna_RobertoBurleMarx: Obra = {
    ID: 1319,
    Artistas: [artistas.RobertoBurleMarx],
    Titulo: `Chafariz de Laminas Verticais do Museu de Arte Moderna`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Chafariz`,
    Material: `Peça em concreto com estrutura de metal`,
    Descricao: `Inaugurado no final anos de 1960. O Chafariz é formado com três grande chapas verticais curvas em alturas diferentes, de cuja base sai o jorro vertical de água.
Desativado no ano de 2008.`,
    Execucao: true,
    DataInauguracao: ``,
    Latitude: `-22.9122404`,
    Longitude: `-43.1719337`,
};

export const ChafarizInternodoMuseudeArteModerna_Desconhecida: Obra = {
    ID: 1320,
    Artistas: [artistas.Desconhecida],
    Titulo: `Chafariz Interno do Museu de Arte Moderna`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Chafariz`,
    Material: `Peça em concreto revestido por pastilha`,
    Descricao: `Chafariz proximo a rampa de acesso ao antigo restaurante do Museu, com visão no pilotis desse predio. Trata-se de um bem privado e tem seu equipamento instalado no subsolo do predio do Museu junto com os outros equipamentos eletricos.`,
    Execucao: true,
    DataInauguracao: ``,
    Latitude: `-22.9135315`,
    Longitude: `-43.1722762`,
};

export const LagosdePlantasAquaticasdoMuseudeArteModerna_RobertoBurleMarx: Obra = {
    ID: 1321,
    Artistas: [artistas.RobertoBurleMarx],
    Titulo: `Lagos de Plantas Aquáticas do Museu de Arte Moderna`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Lago`,
    Material: `Peça em concreto armado`,
    Descricao: `Conjunto de grandes lagos com banquetas de plantas aquáticas, intercalados por dois Chafarizes, em frente ao Museu de Arte Moderna e outro na lateral conhecido como da Empena. Todos são intercalados formando um só conjunto.`,
    Execucao: true,
    DataInauguracao: ``,
    Latitude: `-22.9135315`,
    Longitude: `-43.1722762`,
};

export const LagodoRestaurantedoParquedoFlamengo_RobertoBurleMarx: Obra = {
    ID: 1322,
    Artistas: [artistas.RobertoBurleMarx],
    Titulo: `Lago do Restaurante do Parque do Flamengo`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Lago`,
    Material: `Peça em concreto armado`,
    Descricao: `Lago com plantas aquáticas, criado para embelezamento desse trecho do parque.`,
    Execucao: true,
    DataInauguracao: `01/1979`,
    Latitude: `-22.9371691`,
    Longitude: `-43.1698803`,
};

export const LagodeNautimodelismodoParquedoFlamengo_RobertoBurleMarx: Obra = {
    ID: 1323,
    Artistas: [artistas.RobertoBurleMarx],
    Titulo: `Lago de Nautimodelismo do Parque do Flamengo`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Lago`,
    Material: `Peça em concreto armado`,
    Descricao: `Lago retangular projetado por um grupo de nautimodelistas e membros do primeiro Distrito Naval.Na inauguração houve a demostração de veleiros organizada pela Associação de Motonáutica do Rio de Janeiro, contou com a presença do Governador interino Desembargador Martinho Garcez Neto, de Lotta de Macedo Soares.`,
    Execucao: true,
    DataInauguracao: `04/1965`,
    Latitude: `-22.9267835`,
    Longitude: `-43.1708705`,
};

export const CoretoEstrela_AffonsoEduardoReidy: Obra = {
    ID: 1324,
    Artistas: [artistas.AffonsoEduardoReidy],
    Titulo: `Coreto Estrela`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Coreto`,
    Material: `Peça em concreto armado`,
    Descricao: `Construção em concreto armado com 80 metros quadrados, elevada um metro do solo com um apoio central que sustenta a cobertura quadrangular em laje de concreto.`,
    Execucao: true,
    DataInauguracao: `04/1965`,
    Latitude: `-22.9258627`,
    Longitude: `-43.1712069`,
};

export const BlocoMonolitico_HaroldoBarroso: Obra = {
    ID: 1326,
    Artistas: [artistas.HaroldoBarroso],
    Titulo: `Bloco Monolítico`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Escultura`,
    Material: `Bloco de granito esculpido`,
    Descricao: `Escultura contemporânea de granito, composta de três peças num único bloco.
A peça esta em cessão de uso em área da Prefeitura.`,
    Execucao: true,
    DataInauguracao: `01/1997`,
    Zona: 'Sul',
    Bairro: 'Flamengo',
    PontoDeReferencia: 'Aterro do Flamengo',
    Latitude: `-22.9144254`,
    Longitude: `-43.1717319`,
    Lugar: 'Praça',
    Fatos: [new Fato('', '', 'Propriedade', 'Pública', [], 'Rio de Janeiro')],
};

export const EspacoCircularEmCuboVirtual_FranzWeissmann: Obra = {
    ID: 1327,
    Artistas: [artistas.FranzWeissmann],
    Titulo: `Espaço Circular em Cubo Virtual`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Escultura`,
    Material: `Peça em aço corten`,
    Descricao: `Peça única com quatro faces retangulares, formando um semicírculo vazado. A obra foi criada em 1958. A peça esta em cessão de uso em área da Prefeitura.`,
    Altura: '300 cm',
    Largura: '300 cm',
    Profundidade: '300 cm',
    Execucao: true,
    DataInauguracao: `01/1978`,
    Bairro: 'Flamengo',
    PontoDeReferencia: 'Avenida Infante Dom Henrique, 85',
    Latitude: `-22.9144254`,
    Longitude: `-43.1717319`,
};

export const PassarelaPauloBittencourt_AffonsoEduardoReidy: Obra = {
    ID: 1329,
    Artistas: [artistas.AffonsoEduardoReidy],
    Titulo: `Passarela Paulo Bittencourt`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Ponte`,
    Material: `Peça em concreto armado`,
    Descricao: `Passarela para pedestres que vence o vão sobre as pistas de rolamento através de uma curva contínua.Sua estrutura, em concreto aparente e protendido, tem largura de 10 metros e extensão de 85 metros, com um vão livre de 56 metros.`,
    Execucao: true,
    DataInauguracao: `09/1967`,
    Latitude: `-22.9121499`,
    Longitude: `-43.1717384`,
};

export const Tartaruga_AngeloVenosa: Obra = {
    ID: 1330,
    Imagem: 'Tartaruga_AngeloVenosa.jpg',
    Artistas: [artistas.AngeloVenosa],
    Titulo: `Tartaruga`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Escultura`,
    Material: `Peça em aço corten`,
    Descricao: `Escultura em aço corten com aberturas criando uma renda na chapa.
A peça esta em cessão de uso em área da Prefeitura.`,
    Execucao: true,
    DataInauguracao: `01/2005`,
    Zona: 'Sul',
    Bairro: 'Flamengo',
    PontoDeReferencia: 'Museu de Arte Moderna',
    Latitude: `-22.9135315`,
    Longitude: `-43.1722762`,
    Fatos: [new Fato('', '', 'Propriedade', 'Pública', [], 'Rio de Janeiro')],
};

export const JardimdePedrasdoMuseudeArteModerna_RobertoBurleMarx: Obra = {
    ID: 1331,
    Artistas: [artistas.RobertoBurleMarx],
    Titulo: `Jardim de Pedras do Museu de Arte Moderna`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Escultura`,
    Material: `Blocos de gnaisses e seixos rolados`,
    Descricao: `Blocos de gnaisse encaixados com pedras de rio. A intenção descrita é que o jardim recriasse dois mundos, o das pedras redondas, que lembram a paciência dos rios, e o dos monólitos, que retratam a arte do homem.
O jardim no entorno do Museu de Arte Moderna foi elaborado em duas etapas entre 1955 e 1968.
Situado na área posterior do Museu de Arte Moderna, são áreas retangulares definidas entre as áreas gramadas criando lagos secos. Três elementos distintos marcam esse conjunto escultórico; vegetação, blocos de cantaria em gnaisse e seixos rolados. A área destinada aos lagos está instalada, os seixos rolados sobre areia, numa alusão às pedras dos rios. Entre esses tem cinco conjuntos de blocos de cantaria, provavelmente das antigas construções da Cidade, estão instaladas com o parâmetro vertical, recebendo destaque perante o grande predomínio de áreas planas. O outro elemento, a vegetação, onde estão plantadas diversas bromélias, espécies de áreas secas.`,
    Execucao: true,
    DataInauguracao: ``,
    Latitude: `-22.9144162`,
    Longitude: `-43.1715777`,
};

export const ShitHappensconhecidacomoRolodePapel_RioRampDesign_SylvioAzevedoBrunoPiresePharraBuarque: Obra = {
    ID: 1332,
    Artistas: [artistas.SylvioAzevedo, artistas.BrunoPires, artistas.PharraBuarque],
    Titulo: `Shit Happens, conhecida como Rolo de Papel`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Escultura`,
    Material: `Peça em concreto armado`,
    Descricao: `Peça criada pela empresa Rio Ramp Design especializado em projetar pistas de skate, para o evento Arte Core<strong>,  festival que engloba diversas manifestações artísticas de rua, como: grafite / street art, música e skate.
A escultura foi doada à Cidade.`,
    Execucao: true,
    DataInauguracao: `01/2014`,
    Latitude: `-22.9144061`,
    Longitude: `-43.1713777`,
};

export const PontedoRestaurantedoParquedoFlamengo_Desconhecida: Obra = {
    ID: 1334,
    Artistas: [artistas.Desconhecida],
    Titulo: `Ponte do Restaurante do Parque do Flamengo`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Ponte`,
    Material: `Peça em concreto armado`,
    Descricao: `Construção de concreto em arco, para a passagem de um veículo abaixo do nível do parque.`,
    Execucao: true,
    DataInauguracao: `01/1965`,
    Latitude: `-22.9372229`,
    Longitude: ``,
};

export const PassarelaFernandoMorcorvo_SidneyGomesdosSantos: Obra = {
    ID: 1335,
    Artistas: [artistas.SidneyGomesdosSantos],
    Titulo: `Passarela Fernando Morcorvo`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Ponte`,
    Material: `Peça em concreto armado`,
    Descricao: `Construção em concreto armado de forma curva e suave com revestimento externo aparente e piso de pedra portuguesa branca na parte superior.
Tem cerca de 85 metros de extensão e obedece, como as outras do Parque, num arco único de concreto armado. Projeto inspirado na concepção do arquiteto Affonso Eduardo Reid<em>y.</em>`,
    Execucao: true,
    DataInauguracao: ``,
    Latitude: `-22.9325742`,
    Longitude: `-43.1734772`,
};

export const PassarelaAercioSampaio_SidneyGomesdosSantos: Obra = {
    ID: 1336,
    Artistas: [artistas.SidneyGomesdosSantos],
    Titulo: `Passarela Aércio Sampaio`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Passarela`,
    Material: `Peça em concreto revestida de pedra portuguesa`,
    Descricao: `Construção em concreto armado de forma curva e suave com revestimento externo aparente e piso de pedra portuguesa branca na parte superior,num arco único de concreto armado. Projeto com inspiração do arquiteto Affonso Eduardo Reid<em>y.</em>`,
    Execucao: true,
    DataInauguracao: ``,
    Latitude: `-22.9267375`,
    Longitude: `-43.1723326`,
};

export const PassarelaGeneralCaiadodeCastro_SidneyGomesdosSantos: Obra = {
    ID: 1337,
    Artistas: [artistas.SidneyGomesdosSantos],
    Titulo: `Passarela General Caiado de Castro`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Passarela`,
    Material: `Peça em concreto revestida por pedra portuguesa`,
    Descricao: `Construção em concreto armado de forma curva e suave com revestimento externo aparente e piso de pedra portuguêsa branca na parte superior,num arco único de concreto armado, com idéia do arquiteto Affonso Eduardo Reid<em>y.</em>`,
    Execucao: true,
    DataInauguracao: ``,
    Latitude: `-22.9203977`,
    Longitude: `-43.1743504`,
};

export const PassarelaIrineuMarinho_SidneyGomesdosSantos: Obra = {
    ID: 1338,
    Artistas: [artistas.SidneyGomesdosSantos],
    Titulo: `Passarela Irineu Marinho`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Passarela`,
    Material: `Peça em concreto revestida de pedra portuguesa`,
    Descricao: `Construção em concreto armado de forma curva e suave com revestimento externo aparente e piso de pedra portuguesa branca na parte superior,num arco único de concreto armado, com idéia do arquiteto Affonso Eduardo Reid<em>y.</em>`,
    Execucao: true,
    DataInauguracao: ``,
    Latitude: `-22.9195277`,
    Longitude: `-43.1727094`,
};

export const PassarelaCoronelAmericoFontinelle_Desconhecida: Obra = {
    ID: 1339,
    Artistas: [artistas.Desconhecida],
    Titulo: `Passarela Coronel Americo Fontinelle`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Passarela`,
    Material: `Peça em concreto revestida de pedra portuguesa`,
    Descricao: `Passarela inspirada no projeto de Reidy para o Parque do Flamengo, seguindo em linha curva e grande vão.`,
    Execucao: true,
    DataInauguracao: `01/1970`,
    Latitude: `-22.910207`,
    Longitude: `-43.1683419`,
};

export const MarcodaEco92_Desconhecida: Obra = {
    ID: 1340,
    Artistas: [artistas.Desconhecida],
    Titulo: `Marco da Eco 92`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Marco`,
    Material: `Bloco de granito`,
    Descricao: `Bloco de granito bruto com inscrições em baixo relevo.`,
    Execucao: true,
    DataInauguracao: `01/1992`,
    Latitude: `-22.9313339`,
    Longitude: `-43.1723108`,
};

export const MarcoRodoviariodaPracaSantaCruz_Desconhecida: Obra = {
    ID: 1341,
    Artistas: [artistas.Desconhecida],
    Titulo: `Marco Rodoviário da Praça Santa Cruz`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Marco`,
    Material: `Bloco de gnaisse esculpido`,
    Descricao: `Inaugurado nos anos de 1930, omarco tem na sua face frontal, a indicação ERF (Estrada de Rodagem Federal) e informam a distância em quilômetros dali até o Centro. Na face posterior, há a inscrição DF (Distrito Federal). Nas faces esquerda e direita registram a distância de duas localidades próximas.`,
    Execucao: true,
    DataInauguracao: ``,
    Latitude: `-22.9360102`,
    Longitude: `-43.667159`,
};

export const ConchaAcusticadoParquedoFlamengo_AffonsoEduardoReidy: Obra = {
    ID: 1342,
    Artistas: [artistas.AffonsoEduardoReidy],
    Titulo: `Concha Acústica do Parque do Flamengo`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Concha acústica`,
    Material: `Peça em concreto armado`,
    Descricao: `Construção em concreto em níveis, com um pequeno palco circular.`,
    Execucao: true,
    DataInauguracao: `04/1965`,
    Latitude: `-22.9224114`,
    Longitude: `-43.169679`,
};

export const MastrodaBatalha_Desconhecida: Obra = {
    ID: 1343,
    Artistas: [artistas.Desconhecida],
    Titulo: `Mastro da Batalha`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Mastro`,
    Material: `Peça de Madeira`,
    Descricao: `Mastro de uma embarcação que participou da Batalha Naval do Riachuelo em 11 de junho de 1865. Erguido pela Marinha do Brasil em homenagem a batalha.`,
    Execucao: true,
    DataInauguracao: ``,
    Latitude: `-22.9264322`,
    Longitude: `-43.1707351`,
};

export const Guarda_corpodaCidadedasCriancas_Desconhecida: Obra = {
    ID: 1344,
    Artistas: [artistas.Desconhecida],
    Titulo: `Guarda-corpo da Cidade das Crianças`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Guarda-corpo`,
    Material: `Bloco de gnaisse esculpido`,
    Descricao: `Amurada em blocos de cantaria de gnaisse originários da antiga Avenida Beira Mar e da Praia do Flamengo, instalada nesse espaço para segurança das crianças.`,
    Execucao: true,
    DataInauguracao: `10/1965`,
    Latitude: `-22.9266861`,
    Longitude: `-43.1726082`,
};

export const LabirintodaCidadedasCriancas_CarlosWerneckdeCarvalho: Obra = {
    ID: 1345,
    Artistas: [artistas.CarlosWerneckdeCarvalho],
    Titulo: `Labirinto da Cidade das Crianças`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Construção`,
    Material: `Peça em concreto armado`,
    Descricao: `Equipamento infantil idealizado por Ethel Bauzer Medeiros. Foi inaugurado junto ao Teatro de Fantoche, com o objetivo criar nas crianças uma motivação de comunidade`,
    Execucao: true,
    DataInauguracao: `10/1965`,
    Latitude: `-22.9289858`,
    Longitude: `-43.1732446`,
};

export const LabirintoIIdoMorrodaViuva_AffonsoEduardoReidy: Obra = {
    ID: 1346,
    Artistas: [artistas.AffonsoEduardoReidy],
    Titulo: `Labirinto II do Morro da Viúva`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Construção`,
    Material: `Peça em concreto armado`,
    Descricao: `Equipamento infantil idealizado por Ethel Bauzer Medeiros e projetado por Reidy.`,
    Execucao: true,
    DataInauguracao: `04/1965`,
    Latitude: `-22.9425921`,
    Longitude: `-43.1741775`,
};

export const EquilibrioIdoParquedoFlamengo_AffonsoEduardoReidy: Obra = {
    ID: 1347,
    Artistas: [artistas.AffonsoEduardoReidy],
    Titulo: `Equilíbrio I do Parque do Flamengo`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Construção`,
    Material: `Peça em concreto armado`,
    Descricao: `Idealizada por Ethel Bauzer Medeiros, foi executada em concreto, criando oportunidades recreativas infantis de subir, descer, pular e equilibrar-se.`,
    Execucao: true,
    DataInauguracao: `10/1965`,
    Latitude: `-22.9249795`,
    Longitude: `-43.1701394`,
};

export const TeatrinhodoMorrodaViuva_MarioSophia: Obra = {
    ID: 1348,
    Artistas: [artistas.MarioSophia],
    Titulo: `Teatrinho do Morro da Viúva`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Construção`,
    Material: `Peça em concreto armado`,
    Descricao: `Construção em concreto com patamares circulares com níveis diferentes, idealizada por Ethel Bauzer Medeiros para estimular a imaginação infantil.`,
    Execucao: true,
    DataInauguracao: `01/1964`,
    Latitude: `-22.9425921`,
    Longitude: `-43.1741775`,
};

export const PistadeAeromodelismodoParquedoFlamengo_AffonsoEduardoReidy: Obra = {
    ID: 1349,
    Artistas: [artistas.AffonsoEduardoReidy],
    Titulo: `Pista de Aeromodelismo do Parque do Flamengo`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Construção`,
    Material: `Peça em concreto armado`,
    Descricao: `Circulos, um de 50 metros e outro de 40 metros de diâmetro, para a prática na modalidade de vôo circular controlado, idealizado pelo grupo de trabalho do Parque do Flamengo.`,
    Execucao: true,
    DataInauguracao: `08/1963`,
    Latitude: `-22.9188888`,
    Longitude: `-43.1728934`,
};

export const Lampadario_Poste_doParquedoFlamengo_RichardKelly: Obra = {
    ID: 1350,
    Artistas: [artistas.RichardKelly],
    Titulo: `Lampadário ( Poste) do Parque do Flamengo`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Lampadario`,
    Material: `Peça em concreto`,
    Descricao: `Conjunto de monumentais postes de concreto, com 45 metros de altura e seis projetores em metal com luminárias de 1,15 m. de diâmetro.`,
    Execucao: true,
    DataInauguracao: `12/1976`,
    Latitude: `-22.9187866`,
    Longitude: `-43.1728934`,
};

export const EsculturadaPraiadoFlamengo_JorgedosAnjos: Obra = {
    ID: 1351,
    Artistas: [artistas.JorgedosAnjos],
    Titulo: `Escultura da Praia do Flamengo`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Escultura`,
    Material: `Peça em aço corten`,
    Descricao: `Escultura de 5m x 7m, de ferro e pesando quatro toneladas.A escultura fez parte da exposição <em>Pedra, Ferro e Fogo</em> e doada coma escultura ao ar livre, em frente à galeria, no Parque do Flamengo  à maneira das intervenções urbanas do artista em parques e praças de Belo Horizonte.`,
    Execucao: true,
    DataInauguracao: `03/2011`,
    Latitude: `-22.9344819`,
    Longitude: `-43.1742537`,
};

export const OratorioaSaoJorgedeRochaMiranda_Desconhecida: Obra = {
    ID: 1352,
    Artistas: [artistas.Desconhecida],
    Titulo: `Oratório à São Jorge de Rocha Miranda`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Oratório`,
    Material: `Peça em metal com imagem de resina`,
    Descricao: `Instalado em frente Grêmio Social Esportivo Rocha Miranda, o oratorio se situa como no limite do bairro.`,
    Execucao: true,
    DataInauguracao: ``,
    Latitude: `-22.8566766`,
    Longitude: `-43.3485529`,
};

export const FontedoLargodoBomRetiro_Desconhecida: Obra = {
    ID: 1353,
    Artistas: [artistas.Desconhecida],
    Titulo: `Fonte do Largo do Bom Retiro`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Fonte`,
    Material: ``,
    Descricao: `O monumento está incluído nessa relação devido o convênio de Gestão Compartilhada do ParNacional da Tijuca, entre a Prefeitura do Rio de Janeiro e oIBAMA desde 22 de março de 2001.
Fonte composta por um mural recortado, revestida com cacos de azulejos com destaque a figura estilizado em argamassa. A agua é recolhida através de uma banheira de mármore de Carrara com a figura de dois sátiros na sua frente. Essa fonte é semelhante a existente no jardim da capela Mayrink. Foi executada na gestão de Castro Maya.`,
    Execucao: true,
    DataInauguracao: `01/1944`,
    Latitude: `-22.9473793`,
    Longitude: `-43.2914156`,
};

export const FontedoJardimdaCapelaMayrink_Desconhecida: Obra = {
    ID: 1355,
    Artistas: [artistas.Desconhecida],
    Titulo: `Fonte do Jardim da Capela Mayrink`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Fonte`,
    Material: `Peça em mármore de Carrara`,
    Descricao: `O monumento esta incluído nessa relação devido o convênio de Gestão Compartilhada do ParNacional da Tijuca entre a Prefeitura do Rio de Janeiro e oIBAMA desde 22 de março de 2001.
Fonte composta por um mural azulejado onde esta fixada uma carrança em argamassa para a saida da água, que despeja em uma bacia esculpida em mármore de Carrara.`,
    Execucao: true,
    DataInauguracao: `01/1944`,
    Latitude: `-22.9581183`,
    Longitude: `-43.2777882`,
};

export const MarcoRodoviarioIVdaEstradadaVistaChinesa_Desconhecida: Obra = {
    ID: 1356,
    Artistas: [artistas.Desconhecida],
    Titulo: `Marco Rodoviário IV da Estrada da Vista Chinesa`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Marco`,
    Material: `Bloco de gnaisse esculpido`,
    Descricao: `O monumento está incluído nessa relacão devido o convênio de Gestão Compartilhada do ParNacional da Tijuca entre a Prefeitura do Rio de Janeiro e oIBAMA desde 22 de março de 2001.
Inaugurado nos anos de 1930, omarco tem na sua face frontal, a indicação ERF (Estrada de Rodagem Federal) e informam a distância em quilômetros dali até o Centro. Na face posterior, há a inscrição DF (Distrito Federal). Nas faces esquerda e direita registram a distância de duas localidades próximas.`,
    Execucao: true,
    DataInauguracao: ``,
    Latitude: `-22.9716182`,
    Longitude: `-43.278314`,
};

export const MoacirdeAlmeida_deposito_HonorioPecanha: Obra = {
    ID: 1357,
    Artistas: [artistas.HonorioPecanha],
    Titulo: `Moacir de Almeida - depósito`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Escultura`,
    Material: `Peça em bronze`,
    Descricao: `O monumento foi um projeto de Paschal Carlos Magno pelo cinquentenário do poeta. O pedeslal foi oferecido pelo prefeito Alim pedro. A homenagem foi furtada do Passeio Público no ano de 2003 e recuperado em 2004 desde então permanece guardada no depósito.`,
    Execucao: true,
    DataInauguracao: `03/1955`,
    Latitude: `-22.906689`,
    Longitude: `-43.197172`,
};

export const MartinsFontes_Ariel: Obra = {
    ID: 1359,
    Artistas: [artistas.Ariel],
    Titulo: `Martins Fontes`,
    Classificacao: 'perene',
    Categoria: 'personalidades',
    TipologiaObra: `Busto`,
    Material: `Peça em bronze`,
    Descricao: `É uma homenagem da Academia Carioca de Letras ao poeta parnasiano. O busto foi retirado da Rua Teixeira de
    Freitas em 1983, guardado no depósito e recolocado em 1996 no local de origem, após identificação feita pelo autor. Foi
    novamente transferido para o depósito em 2005 , após uma tentativa do furto da peça.`,
    Execucao: true,
    DataInauguracao: `07/1976`,
    Latitude: `-22.906689`,
    Longitude: `-43.197172`,
    Fatos: [new Fato('', '', 'Propriedade', 'Pública', [], 'Rio de Janeiro')],
};

export const AlmiranteeViscondedeInhauma_deposito_Desconhecida: Obra = {
    ID: 1360,
    Artistas: [artistas.Desconhecida],
    Titulo: `Almirante e Visconde de Inhaúma - depósito`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Escultura`,
    Material: `Peça em bronze`,
    Descricao: `A homenagem foi uma doação da Marinha de Guerra do Brasil à cidade do Rio de Janeiro, paraadornar a área próxima ao I Distrito Naval. Inicialmente instalado na Avenida Alfredo Agache, foi transferido para o depósito em 2013 devido à demolição da Perimetral.`,
    Execucao: true,
    DataInauguracao: `04/2012`,
    Latitude: `-22.906689`,
    Longitude: `-43.197172`,
};

export const AtaulfodePaiva_deposito_UgoTaddei: Obra = {
    ID: 1361,
    Titulo: `Ataulfo de Paiva - depósito`,
    Classificacao: 'perene',
    Categoria: 'personalidades',
    TipologiaObra: `busto`,
    Material: `Peça em bronze`,
    Descricao: `Busto em bronze que se encontra no depósito da Prefeitura desde os anos de 1950.`,
    Execucao: true,
    DataInauguracao: ``,
    Latitude: `-22.906689`,
    Longitude: `-43.197172`,
};

export const RelogiodoMeierII_MayerhogereToledo: Obra = {
    ID: 1363,
    Artistas: [artistas.MayerhogereToledo],
    Titulo: `Relógio do Méier II`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Relógio`,
    Material: `Peça em resina`,
    Descricao: `Relógio fixado entre três placas em resina com a inscrição MÉIER em sentido vertical.`,
    Execucao: true,
    DataInauguracao: `11/2004`,
    Latitude: `-22.9001852`,
    Longitude: `-43.275483`,
};

export const Esculapio_Desconhecida: Obra = {
    ID: 1364,
    Artistas: [artistas.Desconhecida],
    Titulo: `Esculápio`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Escultura`,
    Material: `Peça em mármore de Carrara`,
    Descricao: `Escultura em mármore de Carrara. Há informações de que é originária da Quinta da Boa Vista. Esteve por cessão
    de uso de 1996 a 2006 na Fundação Fiocruz. Foi devolvido à Prefeitura, permanecendo no depósito desde então.`,
    Execucao: true,
    DataInauguracao: ``,
    PontoDeReferencia: 'Praça Noronha Santos, Depósito',
    Latitude: `-22.906689`,
    Longitude: `-43.197172`,
    Fatos: [new Fato('', '', 'Propriedade', 'Pública', [], 'Rio de Janeiro')],
};

export const VasodoParqueNoronhaSantos_EmilioGiannelli: Obra = {
    ID: 1365,
    Artistas: [artistas.EmilioGiannelli],
    Titulo: `Vaso do Parque Noronha Santos`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Vaso`,
    Material: `Peça em ferro fundido`,
    Descricao: `Inaugurado na década de 1970 foiinstalado inicialmente na Praça Floriano, na década de 1980. Foram retirados pelo projeto Rio Cidade Centro para o novo paisagismo da Praça, permanecendo no antigo depósito da Prefeitura no Caju até a transferência para o Parque Noronha Santos em 2003.`,
    Execucao: true,
    DataInauguracao: `01/1965`,
    Latitude: `-22.906689`,
    Longitude: `-43.197172`,
};

export const Oitenta_TeresaOliveiraSantos: Obra = {
    ID: 1366,
    Artistas: [artistas.TeresaOliveiraSantos],
    Titulo: `Oitenta`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Escultura`,
    Material: `Peça em bronze`,
    Descricao: `A escultura em bronze foi exposta no período de 13 de agosto a 13 de setembro de 2009, no Centro Cultural dos Correios, na exposição Dez Anos Depois. Foi transferida para o Parque em 2012 para cumprir sua ideia de instalar uma grande obra em espaço público.`,
    Execucao: true,
    DataInauguracao: `08/2009`,
    Latitude: `-22.906689`,
    Longitude: `-43.197172`,
};

export const Abraco_deposito_Desconhecida: Obra = {
    ID: 1367,
    Artistas: [artistas.Desconhecida],
    Titulo: `Abraço  - depósito`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Escultura`,
    Material: `Blocos de granito`,
    Descricao: `Escultura em pedra esculpida se encontrava na Fundação Parques e Jardins desde os anos de 1970.
`,
    Execucao: true,
    DataInauguracao: ``,
    Latitude: `-22.906689`,
    Longitude: `-43.197172`,
};

export const FontedosTrapicheiros_Desconhecida: Obra = {
    ID: 1372,
    Artistas: [artistas.Desconhecida],
    Titulo: `Fonte dos Trapicheiros`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Fonte`,
    Material: `Blocos de granito e argamassa`,
    Descricao: `O pequeno reservatório, atualmente em ruínas, foi construido pelo Presidente Rodrigues Alves para ser o primeiro medidor por pena d'agua do consumo, oriundo do Rio Trapicheiro, para o serviço de abastecimento de agua a capital Federal da época.É um projeto da Inspeção Geral de Obras Públicas.
Desativado em data desconhecida.`,
    Execucao: true,
    DataInauguracao: `02/1904`,
    Latitude: `-22.9329182`,
    Longitude: `-43.2339599`,
};

export const ChafarizdoCampodeSaoCristovao_deposito_AugusteMartins: Obra = {
    ID: 1373,
    Artistas: [artistas.AugusteMartins],
    Titulo: `Chafariz do Campo de São Cristovão - depósito`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Chafariz`,
    Material: `Peça em ferro fundido e pedestal de gnaisse`,
    Descricao: `Inaugurado no Largo de Santa Rita foi transferido para o Campo de São Cristovão e posteriormente para o em 1992, com o intuito de dar continuidade aos trabalhos de paisagismo iniciado no Campo de São Crsitovão permanecendo até ehoje.
strong> É composto por duas sereias e de netuno, ume bacia circular, três volutas, uma taça e 2 pequenos tritões e folhagem. e peças de gnaisse da bacia externa.

Desativado em data desconhecida.`,
    Execucao: true,
    DataInauguracao: `11/1906`,
    Latitude: `-22.906689`,
    Longitude: `-43.197172`,
};

export const FonteWallacedaPracaJoaoEsberard_CharlesAugusteLeboug: Obra = {
    ID: 1374,
    Titulo: `Fonte Wallace da Praça  João Esberard`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Fonte`,
    Material: `Peça em ferro fundido e mural de concreto`,
    Descricao: `O segundo modelo de fonte Wallace em mural. Possui a forma aproximada de um marco vertical com a parte superior arrendondada. A deusa Tetis ornamenta o centro da fonte e a água sai de seus lábios para cair numa pequena bacia semicircular. Dois golfinhos completam a decoração da parte inferior desta graciosa fonte.
Essa fonte é do mesmo modelo da existente no Jardim Botânico do Rio de Janeiro.
Desativado em data desconhecida.`,
    Execucao: true,
    DataInauguracao: `01/1917`,
    Latitude: `-22.905778`,
    Longitude: `-43.562265`,
};

export const BicadaMulatadeBelfordRoxo_Melancolia_JeanJacquesPradier: Obra = {
    ID: 1376,
    Artistas: [artistas.JeanJacquesPradier],
    Titulo: `Bica da Mulata de Belford Roxo - Melancolia`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Fonte`,
    Material: `Peça em ferro fundido`,
    Descricao: `Conhecida como Bica da Mulata a peça se encontra exposta no Centro do Município de Belford Roxo,na Baixada Fluminense. A estátua que jorrava água, foi colocada primeiramente na frente da estação de
    trem de Belford Roxo para refrescar os passantes. Depois de ser roubada na década de 50, foi encontrada na cidade do Rio de Janeiro. No ano de 1995 foi trazida novamente para o récem-emancipado município de
    Belford Roxo, numa cessão de uso assinada pelo Prefeito Cesar Maia, a fim de solucionar a disputa entre o Município vizinho e os moradores do bairro da Pavuna, da Cidade do Rio de Janeiro.`,
    Execucao: true,
    DataInauguracao: `12/1995`,
    Latitude: `-22.7646205`,
    Longitude: `-43.3999429`,
};

export const AoInfanteDomHenrique_Desconhecida: Obra = {
    ID: 1377,
    Artistas: [artistas.Desconhecida],
    Titulo: `Ao Infante Dom Henrique`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Monolito`,
    Material: `Bloco de granito com placa de bronze`,
    Descricao: `Esta obra situada quase em frente ao monumento aos Mortos da II Guerra Mundial, é um marco em pedra bruta de granito com uma placa em bronze. O Monumento ao Infante é uma singela homenagem quando se comemorava os 500 anos de seu falecimento`,
    Execucao: true,
    DataInauguracao: `08/1960`,
    Latitude: `-22.9140385`,
    Longitude: `-43.1745412`,
};

export const ChicoXavier_Desconhecida: Obra = {
    ID: 1381,
    Artistas: [artistas.Desconhecida],
    Titulo: `Chico Xavier`,
    Classificacao: 'perene',
    Categoria: 'personalidades',
    TipologiaObra: `Busto`,
    Material: `Peça em gesso pintado`,
    Descricao: `Busto encontrado nos jardins do Parque Lage e doada a Fundação Parques e Jardins, depósito`,
    Execucao: true,
    DataInauguracao: `01/1997`,
    Zona: 'Central',
    Bairro: 'Centro',
    PontoDeReferencia: 'Praça Noronha Santos- Depósito',
    Latitude: `-22.906689`,
    Longitude: `-43.197172`,
    Lugar: 'Praça',
    Fatos: [new Fato('', '', 'Propriedade', 'Pública', [], 'Rio de Janeiro')],
};

export const CastelodoParquePeterPan_Desconhecida: Obra = {
    ID: 1384,
    Artistas: [artistas.Desconhecida],
    Titulo: `Castelo do Parque Peter Pan`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Construção`,
    Material: `Tijolo com argamassa`,
    Descricao: `Esta no parque temático que reproduz uma minicidade, llocalizado na Rua Francisco Sá, 86. Pertenceu à Companhia Estadual de Água e Esgotos (Cedae), onde uma elevatória de esgoto e tubulações do emissário submarino de Ipanema passam por debaixo da área. Foi cedido pelo Governo do Estado à Prefeitura, através de contrato de comodato, pelo prazo de dez anos, que, em contrapartida, recebeu um imóvel na Rua Saint Roman, no mesmo bairro, para construção de unidades habitacionais.`,
    Execucao: true,
    DataInauguracao: `01/1974`,
    Latitude: `-22.9832874`,
    Longitude: `-43.192088`,
};

export const AspersordeBangu_PauloCase: Obra = {
    ID: 1387,
    Artistas: [artistas.PauloCase],
    Titulo: `Aspersor de Bangú`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Chafariz`,
    Material: `Peça em metal`,
    Descricao: `Equipamento instalado para amenizar o calor da região para os transeuntes. Trata-se de uma tubulação aérea por onde diversos furos jorram pequenas partículas e água, vaporizando o ambiente. Compreende uma extensão de 200 m de tubulação em diagonal a rua, que transfere para o ambiente uma umidade necessária quando este alcança altas temperaturas, entorno de 40 graus.
Desativado desde o ano de 2004.`,
    Execucao: true,
    DataInauguracao: `12/2002`,
    Latitude: `-22.875579`,
    Longitude: `-43.4648475`,
};

export const RodolfodeAmoedo_JoseOtavioCorreaLima: Obra = {
    ID: 1389,
    Artistas: [artistas.JoseOtavioCorreaLima],
    Titulo: `Rodolfo de Amoêdo`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Escultura`,
    Material: `Peça em bronze e pedestal de granito`,
    Descricao: `Monumento em homenagem ao professor e diretor da Escola de Belas Artes, que fez discípulos entre outros: Eliseu Visconti, Lucílio de Albuquerque e Chamberland`,
    Execucao: true,
    DataInauguracao: `01/1940`,
    Latitude: `-22.9208183`,
    Longitude: `-43.1745739`,
};

export const MarechalMascarenhasdeMoraisemBonsucesso_Desconhecida: Obra = {
    ID: 1390,
    Artistas: [artistas.Desconhecida],
    Titulo: `Marechal Mascarenhas de Morais em Bonsucesso.`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Escultura`,
    Material: `Peça em bronze e pedestal de granito`,
    Descricao: `Monumento fixado em um pedestal de granito onde está fixada na frente uma placa em alto relevo, representando cenas do combate. Ao lado estão relacionados os nomes do pracinhas que foram a guerra da região.`,
    Execucao: true,
    DataInauguracao: `02/1946`,
    Latitude: `-22.8663187`,
    Longitude: `-43.2552942`,
};

export const Quorus_HelenaTownsend: Obra = {
    ID: 1392,
    Artistas: [artistas.HelenaTownsend],
    Titulo: `Quorus`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Escultura`,
    Material: `Peça em bronze`,
    Descricao: `A escultura em bronze foi doada à Cidade pelo Sindicato da Indústria de Extração de Mármore, Calcário e Pedreiras e transferida para o depósito em 2015, devido à corrosão na fixação da peça ao pedestal. Retornou em novembro de 2016 restaurada.`,
    Execucao: true,
    DataInauguracao: `03/1979`,
    Zona: 'Sul',
    Bairro: 'Lagoa',
    PontoDeReferencia: 'Parque da Catacumba',
    Latitude: `-22.972386`,
    Longitude: `-43.2029359`,
    Fatos: [
        new Fato('', '', 'Propriedade', 'Pública', [], 'Rio de Janeiro'),
        new Fato('', '', 'Doação', 'Sindicato da Industria de Extração de Marmores, Calcarios e Pedreiras', [], 'Rio de Janeiro'),
        new Fato('', '1973', 'Criação', 'Data de criação da obra', [], 'Rio de Janeiro'),
    ],
};

export const RelogiodaTaquara_deposito_FlavioFerreira: Obra = {
    ID: 1393,
    Artistas: [artistas.FlavioFerreira],
    Titulo: `Relógio da Taquara - depósito`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Relógio`,
    Material: `Peça em metal pintada`,
    Descricao: `O grande relógio de metal com cerca de 12 metros de altura foi instalado no Largo da Taquara pelo projeto do Rio Cidade Taquara. Foi retirado em 2012 devido aos constantes acidentes com veículos no local que o danificaram.
`,
    Execucao: true,
    DataInauguracao: `04/2000`,
    Latitude: `-22.906689`,
    Longitude: `-43.197172`,
};

export const Passaros_RobertoMagalhaes: Obra = {
    ID: 120,
    Artistas: [artistas.RobertoMagalhaes],
    Titulo: `Passaros`,
    Material: 'pintura',
    DataInauguracao: '1985',
    DatasImportantes: [new Data(`1985`, 'data de inauguração')],
    Propriedade: 'publica',
    Zona: 'Central',
    Bairro: 'Centro',
    Endereço: 'Rua da Quitanda com Rua São Jose',
    Base: 'sem pedestal',
    Status: 'permanece no espaço público',
    Fatos: [new Fato('', '', '', '', [], '')],
    Temporalidade: 'temporario',
    Eixo: 'sublimidade',
    Funcao: 'ornamental',
    Natureza: 'artistico',
    Tipologia: 'mural',
    Execucao: true,
};

export const Verticalidade_RobertoMoriconi: Obra = {
    ID: 1394,
    Artistas: [artistas.RobertoMoriconi],
    Titulo: `Verticalidade`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Escultura`,
    Material: `Peça em alumínio`,
    Descricao: `Peça em cantoneira e chapa de alumínio. Instalada no Parque da Catacumba em 1979 foi transferido para o
    depósito em 2015 para a sua restauração devido a problema estrutural.`,
    Execucao: true,
    DataInauguracao: `03/1979`,
    Zona: 'Sul',
    Bairro: 'Lagoa',
    PontoDeReferencia: 'Parque da Catacumba',
    Latitude: `-22.906689`,
    Longitude: `-43.197172`,
    Remocao: true,
    DataRealocacao: '2015',
    Fatos: [
        new Fato('', '', 'Propriedade', 'Pública', [], 'Rio de Janeiro'),
        new Fato(
            '',
            '',
            'Doação',
            'Doado pelo Consórcio Brasileiro de Agencias de Publicidade S.A. ALMAP, DENISON, MPM, NORTON, SALLES INTERAMERICANA',
            [],
            'Rio de Janeiro',
        ),
    ],
};

export const PixinguinhaemRamos_Ique: Obra = {
    ID: 1395,
    Artistas: [artistas.Ique],
    Titulo: `Pixinguinha em Ramos`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Estátua`,
    Material: `Peça em bronze`,
    Descricao: `Monumento criado por solicitação da Sra D. Dodô para marcar o bar frequentado por Pixinguinha, próxima a sua residência no bairro. A estátua foi executada com inspiração de uma foto de Pixinguinha no local, de pijama e chinelo.`,
    Execucao: true,
    DataInauguracao: `11/2016`,
    Latitude: `-22.8486422`,
    Longitude: `-43.261363`,
};

export const FonteCiborium_deposito_Desconhecida: Obra = {
    ID: 1397,
    Artistas: [artistas.Desconhecida],
    Titulo: `Fonte Ciborium - depósito`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Fonte`,
    Material: `Peça em ferro fundido`,
    Descricao: `É um bebedouro de inspiração religiosa faz alusão ao Ciborium, um paramento batismal.
Trata-se de uma peça de ferro fundido instalada inicialmente no Campo de São Cristóvão e retirada do local no ano de 1986 para as obras da Linha Vermelha. Desde então a peça se encontra no depósito.
Há relatos na Gerência que existiam 3( três) fontes na Cidade. Duas estavam no Campo de São Cristovão e uma no jardim da Praia de Botafogo, em frente à rua São Clemente, porem não existe referência de data ou fonte.

Desativado em data desconhecida.`,
    Execucao: true,
    DataInauguracao: ``,
    Latitude: `-22.906689`,
    Longitude: `-43.197172`,
};

export const DelPrete_Desconhecida: Obra = {
    ID: 1399,
    Artistas: [artistas.Desconhecida],
    Titulo: `Del Prete`,
    Classificacao: 'perene',
    Categoria: 'personalidades',
    TipologiaObra: `Busto`,
    Material: `Peça em bronze`,
    Descricao: `O monumento foi oferecido pela cidade de Lucca, onde nasceu Del Prete à Cidade do Rio de Janeiro. O busto foi
    retirado em 1996 para as alterações do Projeto Rio Cidade Laranjeiras. Ficou guardado na Coordenaria de Conservação da
    Secretaria de Obras até a entrega para depósito em 12 de fevereiro de 2016.`,
    Execucao: true,
    DataInauguracao: `08/1930`,
    Latitude: `-22.906689`,
    Longitude: `-43.197172`,
    Remocao: true,
    DataRealocacao: '1996',
    Fatos: [new Fato('', '', 'Propriedade', 'Pública', [], 'Rio de Janeiro')],
};

export const BustoNaoIdentificadoI_deposito_CGibson: Obra = {
    ID: 1400,
    Artistas: [artistas.CGibson],
    Titulo: `Busto Não Identificado I - depósito`,
    Classificacao: 'perene',
    Categoria: 'personalidades',
    TipologiaObra: `Busto`,
    Material: `Peça em bronze`,
    Descricao: `Busto com assinatura C Gibson -1948 sem nenhuma informação quando foi transferido para o depósito. ( anterior a 1992)`,
    Execucao: true,
    DataInauguracao: `1948`,
    Latitude: `-22.906689`,
    Longitude: `-43.197172`,
};

export const BustoNaoIdentificadoII_deposito_DVillan: Obra = {
    ID: 1401,
    Artistas: [artistas.DVillan],
    Titulo: `Busto Não Identificado II - depósito`,
    Classificacao: 'perene',
    Categoria: 'personalidades',
    TipologiaObra: `Busto`,
    Material: `Peça em bronze`,
    Descricao: `Busto com assinatura D. Villan, sem nenhuma informação quando foi transferido para o depósito. ( anterior a 1992). Na frente do busto esta fundida a seguinte inscrição " Conservar melhorando".`,
    Execucao: true,
    DataInauguracao: ``,
    Latitude: `-22.906689`,
    Longitude: `-43.197172`,
};

export const BustoNaoIdentificadoIII_deposito_Desconhecida: Obra = {
    ID: 1402,
    Artistas: [artistas.Desconhecida],
    Titulo: `Busto Não Identificado III - depósito`,
    Classificacao: 'perene',
    Categoria: 'personalidades',
    TipologiaObra: `Busto`,
    Material: `Peça em bronze`,
    Descricao: `Busto sem nenhuma informação quando foi transferido para o depósito. ( anterior a 1992).`,
    Execucao: true,
    DataInauguracao: ``,
    Latitude: `-22.9067928`,
    Longitude: `-43.1973384`,
};

export const BaraodeMauanaRuadaCandelaria_Desconhecida: Obra = {
    ID: 1404,
    Artistas: [artistas.Desconhecida],
    Titulo: `Barão de Mauá na Rua da Candelária`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Escultura`,
    Material: `Peça em bronze e pedestal de mármore`,
    Descricao: `Réplica da obra de Rodolfo Bernadelli existente na Praça Mauá. É uma doação da Associação Comercial do Rio de Janeiro à Prefeitura, para identificar a Casa de Mauá.`,
    Execucao: true,
    DataInauguracao: `06/2015`,
    Latitude: `-22.9015367`,
    Longitude: `-43.1771063`,
};

export const CabecaNaoIdentificadaI_deposito_Desconhecida: Obra = {
    ID: 1405,
    Artistas: [artistas.Desconhecida],
    Titulo: `Cabeça Não Identificada I - depósito`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Cabeça`,
    Material: `Peça em bronze`,
    Descricao: `Cabeça sem nenhuma informação quando foi transferido para o depósito. ( anterior a 1992).
`,
    Execucao: true,
    DataInauguracao: ``,
    Latitude: `-22.906689`,
    Longitude: `-43.197172`,
};

export const CabecaNaoIdentificadaII_deposito_Desconhecida: Obra = {
    ID: 1406,
    Artistas: [artistas.Desconhecida],
    Titulo: `Cabeça Não Identificada II - depósito`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Cabeça`,
    Material: `Peça em bronze`,
    Descricao: `Cabeça sem nenhuma informação quando foi transferido para o depósito. ( anterior a 1992).
`,

    Execucao: true,
    DataInauguracao: ``,
    Latitude: `-22.906689`,
    Longitude: `-43.197172`,
};

export const CabecaNaoIdentificadaIII_deposito_MiguelPastor: Obra = {
    ID: 1407,
    Artistas: [artistas.MiguelPastor],
    Titulo: `Cabeça Não Identificada III - depósito`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Cabeça`,
    Material: `Peça em bronze`,
    Descricao: `Cabeça sem nenhuma informação sobre a procedencia e quando foi transferido para o depósito. ( anterior a 1992).
`,
    Execucao: true,
    DataInauguracao: `01/1958`,
    Latitude: `-22.906689`,
    Longitude: `-43.197172`,
};

export const CabecaNaoIdentificadaIV_deposito_Desconhecida: Obra = {
    ID: 1408,
    Artistas: [artistas.Desconhecida],
    Titulo: `Cabeça Não Identificada IV - depósito`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Cabeça`,
    Material: `Peça em mármore`,
    Descricao: `Cabeça sem nenhuma informação sobre a procedência e quando foi transferido para o depósito. ( anterior a 1992).
`,
    Execucao: true,
    DataInauguracao: ``,
    Latitude: `-22.906689`,
    Longitude: `-43.197172`,
};

export const CabecaNaoIdentificadaV_deposito_Desconhecida: Obra = {
    ID: 1409,
    Artistas: [artistas.Desconhecida],
    Titulo: `Cabeça Não Identificada V - depósito`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Cabeça`,
    Material: `Peça em mármore`,
    Descricao: `Cabeça sem nenhuma informação sobre a procedência e quando foi transferido para o depósito. ( anterior a 1992).
`,
    Execucao: true,
    DataInauguracao: ``,
    Latitude: `-22.906689`,
    Longitude: `-43.197172`,
};

export const NinchodaQuintadaBoaVista_AugusteFrancoisMarieGlaziou: Obra = {
    ID: 1411,
    Artistas: [artistas.AugusteFrancoisMarieGlaziou],
    Titulo: `Nincho da Quinta da Boa Vista`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Construção`,
    Material: `Pedra e tijolo com argamassa`,
    Descricao: `Construção em rocailles , em arco pleno, com detales de troncos e banco no interior, ormando um recanto coberto para visualização do parque.`,
    Execucao: true,
    DataInauguracao: `01/1876`,
    Latitude: `-22.9064067`,
    Longitude: `-43.2264306`,
};

export const MarcoaoCooperativismo_Desconhecida: Obra = {
    ID: 1414,
    Artistas: [artistas.Desconhecida],
    Titulo: `Marco ao Cooperativismo`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Marco`,
    Material: `Peça em concreto armado`,
    Descricao: `Marco com uma mão estelizada que apóia sobre ela o símbolo do cooperatismo. O monumento foi uma iniciativa do Rotary Clube.`,
    Execucao: true,
    DataInauguracao: ``,
    Latitude: `-22.8922507`,
    Longitude: `-43.2398827`,
};

export const AmuradadaEncostadoTerracodaQuintadaBoaVista_Desconhecida: Obra = {
    ID: 1415,
    Artistas: [artistas.Desconhecida],
    Titulo: `Amurada da Encosta do Terraço da Quinta da Boa Vista`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Amurada`,
    Material: `Blocos de gnaisses e seixos rolados`,
    Descricao: `Construção em blocos de pedra para contenção do terraço suspenso.`,
    Execucao: true,
    DataInauguracao: `10/1910`,
    Latitude: `-22.9063029`,
    Longitude: `-43.2262688`,
};

export const ChaminedoCatumbi_Desconhecida: Obra = {
    ID: 1416,
    Artistas: [artistas.Desconhecida],
    Titulo: `Chaminé do Catumbi`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Chaminé`,
    Material: `Tijolo com argamassa`,
    Descricao: `Construção original em tijolo, remanescente da Usina Brasil de Açucar.`,
    Execucao: true,
    DataInauguracao: ``,
    Latitude: `-22.9179206`,
    Longitude: `-43.1942718`,
};

export const EmbocaduradoTuneldoPasmado_Desconhecida: Obra = {
    ID: 1417,
    Artistas: [artistas.Desconhecida],
    Titulo: `Embocadura do Túnel do Pasmado`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Construção`,
    Material: `Peça em concreto revestido por granito`,
    Descricao: `Construção iniciada em 1947 somente foi concluida em 1952. A embocadura é revestida em granito que segue no seu interior.`,
    Execucao: true,
    DataInauguracao: `01/1952`,
    Latitude: `-22.9511271`,
    Longitude: `-43.1799119`,
};

export const AmuradadaRuaPortugaloudaUrca_Desconhecida: Obra = {
    ID: 1418,
    Artistas: [artistas.Desconhecida],
    Titulo: `Amurada da Rua Portugal, ou da Urca`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Amurada`,
    Material: `Blocos de gnaisses`,
    Descricao: `Amurada construída para as Comemorações do Centenário da Independência do Brasil.`,
    Execucao: true,
    DataInauguracao: `01/1922`,
    Latitude: `-22.9509966`,
    Longitude: `-43.1681725`,
};

export const MarcoemTributoaoArchereEscragnolle_Desconhecida: Obra = {
    ID: 1419,
    Artistas: [artistas.Desconhecida],
    Titulo: `Marco em Tributo ao Archer e Escragnolle`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Marco`,
    Material: `Monolitico de concreto com placa em aluminio`,
    Descricao: `O monumento está incluído nessa relação devido o convênio de Gestão Compartilhada do ParNacional da Tijuca entre a Prefeitura do Rio de Janeiro e oIBAMA desde 22 de março de 2001.
Monolito de concreto com uma palca identificando o local.`,
    Execucao: true,
    DataInauguracao: `09/1959`,
    Latitude: `-22.9559025`,
    Longitude: `-43.2808614`,
};

export const AmuradadoSitioMidosi_Desconhecida: Obra = {
    ID: 1420,
    Artistas: [artistas.Desconhecida],
    Titulo: `Amurada do Sítio Midosi`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Amurada`,
    Material: `Blocos de gnaisses e seixos rolados`,
    Descricao: `O monumento está incluído nessa relação devido o convênio de Gestão Compartilhada do ParNacional da Tijuca entre a Prefeitura do Rio de Janeiro e oIBAMA desde 22 de março de 2001.
Construção de proteção da encosta.`,
    Execucao: true,
    DataInauguracao: ``,
    Latitude: `-22.9498244`,
    Longitude: `-43.2859364`,
};

export const RocailedoRecantodoPintores_Desconhecida: Obra = {
    ID: 1422,
    Artistas: [artistas.Desconhecida],
    Titulo: `Rocaile do Recanto do Pintores`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Construção`,
    Material: `Peça de rocaille em argamassa`,
    Descricao: `O monumento está incluído nessa relação devido o convênio de Gestão Compartilhada do ParNacional da Tijuca entre a Prefeitura do Rio de Janeiro e oIBAMA desde 22 de março de 2001.
Pedras artificiais resquícios da presença do paisagista francês Auguste Francois Marie Glaziou.`,
    Execucao: true,
    DataInauguracao: ``,
    Latitude: `-22.9559025`,
    Longitude: `-43.2808614`,
};

export const VasodoPortaodoAcudeSolidao_Desconhecida: Obra = {
    ID: 1423,
    Artistas: [artistas.Desconhecida],
    Titulo: `Vaso do Portão do Açude Solidão`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Vaso`,
    Material: `Peça em argamassa`,
    Descricao: `O monumento está incluído nessa relação devido o convênio de Gestão Compartilhada do ParNacional da Tijuca entre a Prefeitura do Rio de Janeiro e oIBAMA desde 22 de março de 2001.
Vaso de argamassa com detalhes em curvas.`,
    Execucao: true,
    DataInauguracao: `01/1946`,
    Latitude: `-22.9626781`,
    Longitude: `-43.2890318`,
};

export const PonteIIdoAcudeSolidao_Desconhecida: Obra = {
    ID: 1424,
    Artistas: [artistas.Desconhecida],
    Titulo: `Ponte II do Açude Solidão`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Ponte`,
    Material: `Bloco de granito`,
    Descricao: `O monumento está incluído nessa relação devido o convênio de Gestão Compartilhada do ParNacional da Tijuca entre a Prefeitura do Rio de Janeiro e oIBAMA desde 22 de março de 2001.
Construção em arco em pedra para a passagem do rio do lago do Açude Solidão`,
    Execucao: true,
    DataInauguracao: ``,
    Latitude: `-22.9626781`,
    Longitude: `-43.2890318`,
};

export const FontedaPonteJobdeAlcantara_RaymundodeCastroMaya: Obra = {
    ID: 1425,
    Artistas: [artistas.RaymundodeCastroMaya],
    Titulo: `Fonte da Ponte Job de Alcântara`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Fonte`,
    Material: `Peça em concreto revestido por azulejo e bronze`,
    Descricao: `O monumento está incluído nessa relação devido o convênio de Gestão Compartilhada do ParNacional da Tijuca entre a Prefeitura do Rio de Janeiro e oIBAMA desde 22 de março de 2001.
Fonte natural com peça escultórica e painel decorativo.`,

    Execucao: true,
    DataInauguracao: `07/1944`,
    Latitude: `-22.9590877`,
    Longitude: `-43.27734`,
};

export const FonteabaixodaPonteJobdeAlcantara_Desconhecida: Obra = {
    ID: 1426,
    Artistas: [artistas.Desconhecida],
    Titulo: `Fonte abaixo da Ponte Job de Alcântara`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Fonte`,
    Material: `Peça em mármore de Carrara`,
    Descricao: `O monumento esta incluído nessa relação devido o convênio de Gestão Compartilhada do ParNacional da Tijuca entre a Prefeitura do Rio de Janeiro e oIBAMA desde 22 de março de 2001.
Fonte composta por um mural azulejado onde esta fixada uma carrança em argamassa para a saida da água, que despeja em uma bacia esculpida em mármore de Carrara.`,
    Execucao: true,
    DataInauguracao: `01/1944`,
    Latitude: `-22.9590877`,
    Longitude: `-43.27734`,
};

export const Cazuza_ChristinaMotta_HelioPelegrino: Obra = {
    ID: 1427,
    Artistas: [artistas.ChristinaMotta, artistas.HelioPelegrino],
    Titulo: `Cazuza`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Estátua`,
    Material: `Peça em bronze com estrutura de metal`,
    Descricao: `Em 12 de março de 1992 foi inaugurada a praça com o Chafariz em homenagem a Cazuza. Era composto por sete
    beija-flores que foram retirados em 2013 devido a corrosão e por um realejo, que tocava a música "Beija Flor", e funcionava
    com o correr da água sobre ele. O realejo devido a vandalismo foi retirado em 2000. Do conjunto inicial permaneceu somente
    um pedestal que passou nos últimos anos a jorrar a água no centro. Em outubro de 2016 o pedestal foi demolido.
    Por solicitação de Lucinha Araujo, a Prefeitura realizou a estátua de Cazuza, pela da escultora Christina Motta e instalou sobre
    a antiga casa de máquina, bem como retornou os sete beija flores de Helio Peregrino, revitalizando o espaço.`,
    Execucao: true,
    DataInauguracao: `2016`,
    Zona: 'Sul',
    Bairro: 'Leblon',
    PontoDeReferencia: 'Espaço Cazuza',
    Latitude: `-22.9861886`,
    Longitude: `-43.2284939`,
    Fatos: [new Fato('', '', 'Propriedade', 'Pública', [], 'Rio de Janeiro')],
};

export const PisodeParalelepipedodaRuaRibeiradeAlmeida_Desconhecida: Obra = {
    ID: 1430,
    Artistas: [artistas.Desconhecida],
    Titulo: `Piso de Paralelepípedo da Rua Ribeira de Almeida`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Piso`,
    Material: `Blocos de granito`,
    Descricao: `Piso original preservado.`,
    Execucao: true,
    DataInauguracao: ``,
    Latitude: `-22.9338197`,
    Longitude: `-43.1863322`,
};

export const MarcoRodoviarioIVdeAvenidaCesariodeMelo_Desconhecida: Obra = {
    ID: 1431,
    Artistas: [artistas.Desconhecida],
    Titulo: `Marco Rodoviário IV de Avenida Cesário de Melo`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Marco`,
    Material: `Bloco de granito esculpido`,
    Descricao: `Inaugurado nos anos de 1930, omarco tem na sua face frontal, a indicação ERF (Estrada de Rodagem Federal) e informam a distância em quilômetros dali até o Centro. Na face posterior, há a inscrição DF (Distrito Federal). Nas faces esquerda e direita registram a distância de duas localidades próximas.
Esse marco marcava as distancias da antiga denominação da Estrada Real de Santa Cruz`,
    Execucao: true,
    DataInauguracao: ``,
    Latitude: `-22.9163586`,
    Longitude: `-43.6210056`,
};

export const MarcoRodoviariodaRuaSoldadoElizeuHipolito_Desconhecida: Obra = {
    ID: 1432,
    Artistas: [artistas.Desconhecida],
    Titulo: `Marco Rodoviário da Rua Soldado Elizeu Hipólito`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Marco`,
    Material: `Bloco de granito esculpido`,
    Descricao: `Inaugurado nos anos de 1930, omarco tem na sua face frontal, a indicação ERF (Estrada de Rodagem Federal) e informam a distância em quilômetros dali até o Centro. Na face posterior, há a inscrição DF (Distrito Federal). Nas faces esquerda e direita registram a distância de duas localidades próximas.
Esse marco marcava as distâncias da antiga denominação da Estrada da Pedra`,
    Execucao: true,
    DataInauguracao: ``,
    Latitude: `-23.0003047`,
    Longitude: `-43.6316663`,
};

export const MarcoRodoviariodaEstradadoRedentorI_Desconhecida: Obra = {
    ID: 1433,
    Artistas: [artistas.Desconhecida],
    Titulo: `Marco Rodoviário da Estrada do Redentor I`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Marco`,
    Material: `Bloco de granito esculpido`,
    Descricao: `Inaugurado nos anos de 1930, omarco tem na sua face frontal, a indicação ERF (Estrada de Rodagem Federal) e informam a distância em quilômetros dali até o Centro. Na face posterior, há a inscrição DF (Distrito Federal). Nas faces esquerda e direita registram a distância de duas localidades próximas.`,
    Execucao: true,
    DataInauguracao: ``,
    Latitude: `-22.9572097`,
    Longitude: `-43.2538253`,
};

export const MarcoRodoviariodaEstradadoRedentorII_Desconhecida: Obra = {
    ID: 1434,
    Artistas: [artistas.Desconhecida],
    Titulo: `Marco Rodoviário da Estrada do Redentor II`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Marco`,
    Material: `Bloco de gnaisse esculpido`,
    Descricao: `Inaugurado nos anos de 1930, omarco tem na sua face frontal, a indicação ERF (Estrada de Rodagem Federal) e informam a distância em quilômetros dali até o Centro. Na face posterior, há a inscrição DF (Distrito Federal). Nas faces esquerda e direita registram a distância de duas localidades próximas.`,
    Execucao: true,
    DataInauguracao: ``,
    Latitude: `-22.9569373`,
    Longitude: `-43.2480306`,
};

export const FontedoGolfinho_SimbolodaCidade_Desconhecida: Obra = {
    ID: 1437,
    Artistas: [artistas.Desconhecida],
    Titulo: `Fonte do Golfinho - Símbolo da Cidade`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Fonte`,
    Material: `Bloco de gnaisse esculpido`,
    Descricao: `Representação do símbolo da Cidade. Inicialmente foi uma pequena fonte desativada no anos de 1990, devido da perda da fonte natural.`,
    Execucao: true,
    DataInauguracao: ``,
    Latitude: `-22.9784155`,
    Longitude: `-43.2448997`,
};

export const OswaldoCruz_EdgarDuvivier: Obra = {
    ID: 1438,
    Artistas: [artistas.EdgarDuvivier],
    Titulo: `Oswaldo Cruz`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Escultura`,
    Material: `Peça em bronze e pedestal de concreto`,
    Descricao: `Homenagem para o patrono do bairro.A homenagemreivindicação dos moradores do bairro, fundado há 95 anos,foi solicitada pela vereadora Nereida Pedregal e sancionada pelo prefeito, originando a Lei nº5436, de 12 de junho de 2012, .`,
    Execucao: true,
    DataInauguracao: `07/2012`,
    Latitude: `-22.8696271`,
    Longitude: `-43.3499448`,
};

export const MarechalHermes_Desconhecida: Obra = {
    ID: 1439,
    Artistas: [artistas.Desconhecida],
    Titulo: `Marechal Hermes`,
    Classificacao: 'perene',
    Categoria: 'personalidades',
    TipologiaObra: `Busto`,
    Material: `Peça em bronze com pedestal revestido de granito`,
    Descricao: `A homenagem ao patrono do bairro, provavelmente ocorreu em 1949. Em 2003 foi retirada devido ao pojeto
    Rio-Cidade de renovação urbana, e guardado do depósito da Prefeitura. Devido a insistencia dos moradores o busto retornou a
    praça sendo reinaugurado em 16 de junho de 2011.`,
    Execucao: true,
    DataInauguracao: `1949`,
    Latitude: `-22.8610039`,
    Longitude: `-43.3713826`,
    DataRealocacao: '2003',
    Fatos: [new Fato('data', 'data', 'fato', 'descrição', [], 'cidade')],
};

export const BentoRibeiro_ChristinaMotta: Obra = {
    ID: 1440,
    Artistas: [artistas.ChristinaMotta],
    Titulo: `Bento Ribeiro`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Escultura`,
    Material: `Peça em bronze e pedestal de concreto`,
    Descricao: `Homenagem ao patrono do bairro.`,
    Execucao: true,
    DataInauguracao: `10/2012`,
    Latitude: `-22.8613278`,
    Longitude: `-43.3635353`,
};

export const CoretodeMarechalHermes_Desconhecida: Obra = {
    ID: 1441,
    Artistas: [artistas.Desconhecida],
    Titulo: `Coreto de Marechal Hermes`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Coreto`,
    Material: `Peça em concreto armado`,
    Descricao: `Construção em concreto armado com um único apoio central. Atribuído a Afonso Eduardo Reidy devido a linha arrojada e pela construido na mesma época o Teatro Armando Gonzaga. Foi demolido em 2003 para atender o projeto do Rio Cidade. Foi reconstruído dez anos depois, atendendo a solicitação dos moradores e reinaugurado em 15 de novembro de 2013.`,
    Execucao: true,
    DataInauguracao: `01/1954`,
    Latitude: `-22.8639671`,
    Longitude: `-43.3728895`,
};

export const ArturRios_Desconhecida: Obra = {
    ID: 1443,
    Artistas: [artistas.Desconhecida],
    Titulo: `Artur Rios`,
    Classificacao: 'perene',
    Categoria: 'personalidades',
    TipologiaObra: `Busto`,
    Material: `Peça em bronze e pedestal de granito`,
    Descricao: `Homenagem ao senador.`,
    Execucao: true,
    DataInauguracao: ``,
    Bairro: 'Campo Grande',
    PontoDeReferencia: 'R. Artur Rios',
    Latitude: `-22.9025169`,
    Longitude: `-43.550098`,
    Fatos: [new Fato('', '', 'Propriedade', 'Pública', [], 'Rio de Janeiro')],
};

export const AMariadoCarmoNabuco_Desconhecida: Obra = {
    ID: 1444,
    Artistas: [artistas.Desconhecida],
    Titulo: `À Maria do Carmo Nabuco`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Marco`,
    Material: `Peça em bronze e pedestal de gnaisse`,
    Descricao: `Marco composto por três blocos em cantaria de gnaisse, do portão da casa da Rua Marquês do Olinda, 58 - residência da família demolida a cerca de 30 anos e uma placa em bronze com a resumida biografia.`,
    Execucao: true,
    DataInauguracao: `12/2016`,
    Latitude: `-22.9510326`,
    Longitude: `-43.1994235`,
};

export const MarcoRodoviariodaRuadoFragoso_Desconhecida: Obra = {
    ID: 1445,
    Artistas: [artistas.Desconhecida],
    Titulo: `Marco Rodoviário da Rua do Fragoso`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Marco`,
    Material: `Bloco de granito esculpido`,
    Descricao: `Inaugurado nos anos de 1930, omarco tem na sua face frontal, a indicação ERF (Estrada de Rodagem Federal) e informam a distância em quilômetros dali até o Centro. Na face posterior, há a inscrição DF (Distrito Federal). Nas faces esquerda e direita registram a distância de duas localidades próximas.`,
    Execucao: true,
    DataInauguracao: ``,
    Latitude: `-22.9755412`,
    Longitude: `-43.636975`,
};

export const CruzdoMorrodoMirante_Desconhecida: Obra = {
    ID: 1446,
    Artistas: [artistas.Desconhecida],
    Titulo: `Cruz do Morro do Mirante`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Cruzeiro`,
    Material: `Peça em concreto armado`,
    Descricao: `Foi originariamente construído pelos padres jesuítas para fiscalizar o trabalho dos escravos da fazenda. No período da familia Real e com a elevação da sede da Fazenda Real de Santa Cruz a Paço Real, foi erigida uma pequena construção, em formato octogonal.
Em homenagem aos 400 anos de Santa Cruz, o governo do Estado de Rio de Janeiro, colocou no morro do mirante uma Cruz em ilusão a histórica localizada em frente ao quartel que deu a origem ao nome do bairro. A cruz de 65 metros de altura.
O Morro do Mirante está sob controle da CEDAE.`,
    Execucao: true,
    DataInauguracao: `12/1967`,
    Latitude: `-22.9209397`,
    Longitude: `-43.6864896`,
};

export const KinteticaPiradoPovo_AnthonyHowe: Obra = {
    ID: 1447,
    Artistas: [artistas.AnthonyHowe],
    Titulo: `Kintetic, a Pira do Povo`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Escultura`,
    Material: `Peça em aço escovado`,
    Descricao: `Escultura movel criada e produzida especificamente para se torna a pira olimpica Rio 2016, com jatos de gas. Foi fabricada em 2016 com numento de serie de 8926.`,
    Execucao: true,
    DataInauguracao: `09/2016`,
    Latitude: `-22.9003319`,
    Longitude: `-43.1765186`,
};

export const ChafarizdaPiradoPovo_Desconhecida: Obra = {
    ID: 1448,
    Artistas: [artistas.Desconhecida],
    Titulo: `Chafariz da Pira do Povo`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Chafariz`,
    Material: `Peça em concreto armado`,
    Descricao: `Chafariz construído em torno da escultura para proteção e embelezamento.
Esta desativado desde o ano de 2016.`,
    Execucao: true,
    DataInauguracao: `08/2016`,
    Latitude: `-22.9003319`,
    Longitude: `-43.1765186`,
};

export const NelsonRodrigues_EdgarDuvivier: Obra = {
    ID: 1449,
    Artistas: [artistas.EdgarDuvivier],
    Titulo: `Nelson Rodrigues`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Escultura`,
    Material: `Peça em bronze`,
    Descricao: `Idealizada por dois netos de Nelson Rodrigues, Sacha e Crica Rodrigues, e pelo produtor Gustavo Nunes. Foi doada à cidade pela Fundação Cesgrandrio.
O local onde foi instalada é próximo ao primeiro endereço de Nelson Rodrigues no Rio, e foi inaugurado no 36º aniversário de sua morte,`,
    Execucao: true,
    DataInauguracao: `12/2016`,
    Latitude: `-22.9658391`,
    Longitude: `-43.18142`,
};

export const PisodePedeMolequenaRuadoParaiso_Desconhecida: Obra = {
    ID: 1450,
    Artistas: [artistas.Desconhecida],
    Titulo: `Piso de Pé de Moleque na Rua do Paraíso`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Piso`,
    Material: `Seixos e lascas de granito`,
    Descricao: `Calçamento executada com seixos rolados cobrindo toda a área da praça.`,
    Execucao: true,
    DataInauguracao: ``,
    Latitude: `-22.9135278`,
    Longitude: `-43.1941269`,
};

export const ReflexaoRio_MariaCouto: Obra = {
    ID: 1452,
    Imagem: 'ReflexaoRio_MariaCouto.jpg',
    Artistas: [artistas.MariaCouto],
    Titulo: `Reflexão Rio`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Escultura`,
    Material: `Peça em bronze`,
    Descricao: `A escultura foi instalada na Praça do Pontal Tim Maia e posteriormente retirada e transferida para o deposito em 2003.`,
    Execucao: true,
    Latitude: `-22.906689`,
    Longitude: `-43.197172`,
    Remocao: true,
    DataRealocacao: '2003',
    Realocacao: true,
    ZonaRealocacao: 'Central',
    BairroRealocacao: 'Centro',
    PontoDeReferenciaorealocacao: 'Praça Noronha Santos',
    Fatos: [new Fato('', '', 'Propriedade', 'Pública', [], 'Rio de Janeiro')],
};

export const Pincas_FranzWeissmann: Obra = {
    ID: 373,
    Imagem: 'Pinças_FranzWeissmann.png',
    Artistas: [artistas.FranzWeissmann],
    Titulo: `Construção Em Triângulos`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Escultura`,
    Material: `Peça em aço corten`,
    Altura: '100 cm',
    Largura: '200 cm',
    Profundidade: '200 cm',
    ValorObra: 'R$ 164.000,00',
    Execucao: true,
    DataInauguracao: `01/1985`,
    Zona: 'Norte',
    Bairro: 'Marechal Hermes',
    PontoDeReferencia: 'Parque Madureira, Rua Américo Rocha, 1602',
    Latitude: '-22.8493686',
    Longitude: '-43.3591321', //'-43.3591321,66',
    Fatos: [
        new Fato('', '', 'Propriedade', 'Pública', [], 'Rio de Janeiro'),
        new Fato('', '', 'Reprodução', 'Reprodução de escultura existente', [], 'Rio de Janeiro'),
    ],
};

export const CoretodaPracaBelmonte_AzevedoNeto: Obra = {
    ID: 1455,
    Artistas: [artistas.AzevedoNeto],
    Titulo: `Coreto da Praça Belmonte`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Coreto`,
    Material: `Concreto armado`,
    Descricao: `Construção de concreto armado circular, com pequena cobertura central, sobre um riacho que corta a praça, unidos os dois lados.`,
    Execucao: true,
    DataInauguracao: ``,
    Latitude: `-22.848337`,
    Longitude: `-43.2685425`,
};

export const PainelElementosdaNatureza_RonaldoPereiraRego: Obra = {
    ID: 1456,
    Artistas: [artistas.RonaldoPereiraRego],
    Titulo: `Painel Elementos da Natureza`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Mosaico`,
    Material: `Argamassa`,
    Descricao:
        'O mural Elementos da Natureza, é uma doação do proprio autor para ser instalado em um espaço da Cidade. É composto por 120 placas de 40x40 que pesam cada uma cerca de 10 kg. Foi retirada de sua residencia na Rua Frederico Gustavo, 177 - Praça Seca.',
    Execucao: true,
    DataInauguracao: `09/2015`,
    Latitude: `-22.906689`,
    Longitude: `-43.197172`,
};

export const GuardaCorpodoTerracodoPasseioPublico_Desconhecida: Obra = {
    ID: 1457,
    Artistas: [artistas.Desconhecida],
    Titulo: `Guarda Corpo do Terraço do Passeio Publico`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Guarda-corpo`,
    Material: `Peça em bronze e  gnaisse`,
    Descricao: `Originariamente o guarda oorpo era composto por balaustre de bronze e se estendia em toda a extensão do terraço. Durante os anos de 2000 e 2004 inumeros balaustres foram furtados, sendo refeito em 2004 em concreto em um pequeno trecho.Uma peça original foi guarda no deposito como molde.`,
    Execucao: true,
    DataInauguracao: ``,
    Latitude: `-22.9130414`,
    Longitude: `-43.1772381`,
};

export const PaulHarrisemCampoGrande_Desconhecida: Obra = {
    ID: 1458,
    Artistas: [artistas.Desconhecida],
    Titulo: `Paul Harris em Campo Grande`,
    Classificacao: 'perene',
    Categoria: 'personalidades',
    TipologiaObra: `busto`,
    Material: `Peça em bronze e pedestal de concreto`,
    Descricao: `O busto foi inaugurado na estrada lateralmente e depois transferida para o canteiro central na faixa de rolamento do viaduto. O monumento foi uma iniciativa da Rotary,com apoio da Região Administrativa, na passagem do centenário do seu nascimento.
A peça esta desaparecida desde janeiro de 2017.`,
    Execucao: true,
    DataInauguracao: `11/1967`,
    Latitude: `-22.9003452`,
    Longitude: `-43.5669476`,
};

export const OratoriodeNossaSenhoraAparecida_Desconhecida: Obra = {
    ID: 1459,
    Artistas: [artistas.Desconhecida],
    Titulo: `Oratório de Nossa Senhora Aparecida`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Oratório`,
    Material: `Tijolo com argamassa`,
    Descricao: `O oratorio foi iniciativa da paróquia dos Santos Anjos, para realização de orações na praça ,em comemoração aos 300 anos da aparição da imagem nas águas do Rio Paraíba do Sul.O pároco, padre Thiago Azevedo, explicou que a 11 anos, um grupo de pessoas se reúne ali para rezar o rosário, sempre às quartas-feiras e que por iniciativa popular ergueram o oratório.`,
    Execucao: true,
    DataInauguracao: `10/2017`,
    Latitude: `-22.9805282`,
    Longitude: `-43.218184`,
};

export const MarcodaUniaoEspiritual_Desconhecida: Obra = {
    ID: 1460,
    Artistas: [artistas.Desconhecida],
    Titulo: `Marco da União Espiritual`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Marco`,
    Material: `Peça em metal`,
    Descricao: `Marco instalado pela Associão Brasileira de Municípiod na ocasião do IV Congresso nacional dos Municipios. A arvore plantada junto a placa é o símbolo da União Espiritual das comuidades brasileiras.`,
    Execucao: true,
    DataInauguracao: `04/1957`,
    Latitude: `-22.912291`,
    Longitude: `-43.1765424`,
};

export const GrutadaImprensa_Desconhecida: Obra = {
    ID: 1463,
    Artistas: [artistas.Desconhecida],
    Titulo: `Gruta da Imprensa`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Gruta`,
    Material: `Blocos de granito`,
    Descricao: `Em 1920,o prefeito Alaor Prata batizou como Viaduto Rei Alberto, a obra viaria na Avenida Niemeyer, para lembrar a visita do Rei da Bélgica . A Gruta da Imprensa, é um platô na Avenida Niemeyer, no conjunto do viaduto, aberta em 1922, onde ficavam os jornalistas da época que faziam a cobertura das corridas automobilísticas de rua.`,
    Execucao: true,
    DataInauguracao: `01/1922`,
    Latitude: `-22.99915`,
    Longitude: `-43.2522072`,
};

export const MastrodoMirantedoPasmado_Desconhecida: Obra = {
    ID: 1464,
    Artistas: [artistas.Desconhecida],
    Titulo: `Mastro do Mirante do Pasmado`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Mastro`,
    Material: `Peça em metal`,
    Descricao: `Mastro de 20 mestros de altura, para bandeira de 5,20 de largura e 3,6 de altura, para ser visto nesta região da cidade.`,
    Execucao: true,
    DataInauguracao: `03/1972`,
    Latitude: `-22.9514848`,
    Longitude: `-43.1787674`,
};

export const EscadadoMorrodaConceicao_NataliaReyesNagle_JohnSouza: Obra = {
    ID: 1465,
    Artistas: [artistas.NataliaReyesNagle, artistas.JohnSouza],
    Titulo: `Escada do Morro da Conceição`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Mosaico`,
    Material: `Mosaico de azulejos`,
    Descricao: `Mosaico elaborado pela artista plástica Natalia Reyes com a participação de cerca de 130 moradores do Morro da Conceição e apoio do Comite Rio 2016. Retata figuras do local como o cacique Ambere, a Tia Lucia, o malabro e capuerista. Destaca na decoração as composições com flores, animais e formas abstratas todas coloridas.`,
    Execucao: true,
    DataInauguracao: `09/2016`,
    Latitude: `-22.8975585`,
    Longitude: `-43.1808047`,
};

export const MarcodaPracaJoaoEsberard_Desconhecida: Obra = {
    ID: 1466,
    Artistas: [artistas.Desconhecida],
    Titulo: `Marco da Praça João Esberard`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Marco`,
    Material: `Bloco de granito com placa de bronze`,
    Descricao: ` Peça esculpida na pedra com uma placa de bronze com o nome da praça.`,
    Execucao: true,
    DataInauguracao: ``,
    Latitude: `-22.9056305`,
    Longitude: `-43.561315`,
};

export const MarcodoCaminhodeSantiago_Desconhecida: Obra = {
    ID: 1467,
    Artistas: [artistas.Desconhecida],
    Titulo: `Marco do Caminho de Santiago`,
    Classificacao: 'perene',
    Categoria: 'plasticidade',
    TipologiaObra: `Marco`,
    Material: `Bloco de granito`,
    Descricao: `O marco foi uma iniciativa do consulado da Espanha em homenagem, aos milhares de peregrinos brasileiros que visitam a cidade da Galícia. É semelhante aos que existem ao longo do Caminho de Santiago. Para orientar os peregrinos, os monólitos trazem setas que apontam o caminho e indicam a distância até o destino final.No Rio, não será diferente: a peça tem uma inscrição "8.138 km", representando a quilometragem em linha reta do Arpoador a Santiago.Nos anos 80, o Cura do Cebreiro, um lugar icônico de Santiago, estava cansado de ver os peregrinos se perderem por falta de indicação. Então, ele juntou um grupo de voluntários para demarcar o caminho e indicar com setas. Ele pediu a tinta a uma empresa que estava pintando as estradas e, por isso, a cor das setas e conchas que marcam o caminho é o amarelo.`,
    Execucao: true,
    DataInauguracao: `10/2019`,
    Latitude: `-22.9899039`,
    Longitude: `-43.1914569`,
};
