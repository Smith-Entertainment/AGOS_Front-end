import { Data } from "@angular/router";
import { Bairro } from "../bairro-model/bairro";
import { Usuario } from "../usuario";
import { Empresa } from "../empresa-model/empresa";
import { Envio } from "../envio";
import { Situacao } from "../situacao-enum/situacao";
import { Tipo } from "../tipo-enum/tipo";

export class Obra {
    id!: number;
    titulo!: string;
    objetivo!:string;
    cep!: string;
    licitacao!: string;
    dataCertame!: Data;
    valorEdital!: number;
    bairro!: Bairro;
    rua!: string;
    numeroEndereco!: number;
    valorContratado!: number;
    dataInicio!: Data;
    dataTermino!: Data;
    numeroContrato!: string;
    empresaContratada!: Empresa;
    //situacao!: Situacao;
    situacao!: string;
    //tipoObra!: Tipo;
    tipoObra!: string;

    foto!: Envio;
    usuarios!: Usuario[];   

}
