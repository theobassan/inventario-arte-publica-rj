import MandatoSecretario from './mandato_secretario';
import Pessoa from './pessoa';
import Profissao from './profissao';

export default class Secretario {
    ID: number | null | undefined;
    Pessoa: Pessoa | null | undefined;
    IDSecretaria?: string | null | undefined;
    Profissao?: Profissao | null | undefined;
    Mandatos?: MandatoSecretario[] | null | undefined;
}
