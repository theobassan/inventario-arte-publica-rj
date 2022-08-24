import Pessoa from './pessoa';

type Manifesto = {
    Nome?: string;
    Publicacao?: string;
    Cidade?: string;
    Local?: string;
    Data?: string;
    Assinantes?: Pessoa[];
};

export default Manifesto;
