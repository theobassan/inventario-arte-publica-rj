import PoliticaPublica from '../../domain/politicapublica';
import * as obras from './obra_artepublica';
import * as pessoas from './pessoa';

export const ProjetoEsculturasUrbanas: PoliticaPublica = {
    Titulo: 'Projeto Esculturas Urbanas',
    Descricao: undefined,
    Orcamento: undefined,
    ProjetoInicio: '1994',
    ProjetoFim: '1995',
    ImplementacaoInicio: '1996',
    ImplementacaoFim: '1997',
    Cidade: 'Rio de Janeiro',
    Estado: 'Rio de Janeiro',
    Pais: 'Brasil',
    Tipo: 'Municipal',
    Secretaria: 'Secretaria Municipal de Cultura',
    Coordenadores: [pessoas.ReynaldoRoels],
    Indealizadores: [
        pessoas.HelenaMariaPortoSeverodaCosta,
        pessoas.EverardoMiranda,
    ],
    ComissaoDeSelecao: [
        pessoas.RonaldoBrito,
        pessoas.PauloVenancioFilho,
        pessoas.LauroCavalcanti,
        pessoas.FernandoCocchiarale,
        pessoas.PauloSergioDuarte,
        pessoas.PauloHerkenhoff,
    ],
    Obras: [
        obras.OPassante_JoseResende,
        obras.SemTitulo_AmilcardeCastro,
        obras.RetanguloVazado_FranzWeissmann,
        obras.SemTitulo_IvensMachado,
        obras.EsculturaParaORio_WaltercioCaldas,
    ],
};
