import { Data } from "@angular/router";
import { Bairro } from "../bairro-model/bairro";
import { Usuario } from "../usuario-model/usuario";
import { Empresa } from "../empresa-model/empresa";
import { Envio } from "../envio-model/envio";

export class Obra {
    id!: number;
    titulo!: string;
    objetivo!:string;
    cep!: string;
    licitacao!: string;
    dataCertame!: Date;
    valorEdital!: number;
    bairro!: Bairro;
    rua!: string;
    numeroEndereco!: number;
    valorContratado!: number;
    dataInicio!: Date;
    dataTermino!: Date;
    numeroContrato!: string;
    empresaContratada!: Empresa;
    //situacao!: Situacao;
    situacao!: string;
    //tipoObra!: Tipo;
    tipoObra!: string;
    foto!: Envio;
    usuarios!: Usuario[];   

}
