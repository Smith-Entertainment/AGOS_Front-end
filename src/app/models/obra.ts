import { Bairro } from "./bairro";
import { Empresa } from "./empresa";
import { Situacao } from "./enum/situacao";
import { TipoObra } from "./enum/tipo-obra";
import { Envio } from "./envio";
import { Usuario } from "./usuario";

export class Obra {
 id !: number;
titulo !: string;
objetivo !: string;
cep !: string;
licitacao !: string;
dataCertame !: Date;
valorEdital !: number;
bairro !: Bairro;
rua !: string;
numeroEndereco !: number;
voluntarios !: Usuario[];
foto!: Envio;
valorContratado !: number;
dataInicio !: Date;
dataTermino !: Date;
numeroContrato !: number;
empresaContratada !: Empresa;
situacao !: Situacao;
tipoObra !: TipoObra;
}

