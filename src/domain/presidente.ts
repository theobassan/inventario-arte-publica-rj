import MandatoPresidente from './mandato_presidente';
import Pessoa from './pessoa';

export default class Presidente {
    ID: number | null | undefined;
    Pessoa: Pessoa | null | undefined;
    Mandatos: MandatoPresidente[] | null | undefined;
}
