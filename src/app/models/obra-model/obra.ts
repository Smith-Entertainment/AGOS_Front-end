import { Data } from "@angular/router";
import { Bairro } from "../bairro-model/bairro";
import { Usuario } from "../usuario";
import { Empresa } from "../empresa-model/empresa";
import { Envio } from "../envio";
import { Situacao } from "../situacao-enum/situacao";
import { Tipo } from "../tipo-enum/tipo";

export class Obra {
    id: number;
    titulo: string;
    cep: string;
    licitacao: string;
    dataCertame: Data;
    valorEdital: number;
    bairro: Bairro;
    rua: string;
    numeroEndereco: number;
    valorContratado: number;
    dataInicio: Data;
    dataTermino: Data;
    numeroContrato: string;
    empresaContratada: Empresa;
    situacao: Situacao;
    tipo: Tipo;
    foto: Envio;
    usuarios: Usuario[];

    constructor(
        id: number,
        titulo: string,
        cep: string,
        licitacao: string,
        dataCertame: Data,
        valorEdital: number,
        bairro: Bairro,
        rua: string,
        numeroEndereco: number,
        valorContratado: number,
        dataInicio: Data,
        dataTermino: Data,
        numeroContrato: string,
        empresaContratada: Empresa,
        situacao: Situacao,
        tipo: Tipo,
        foto: Envio,
        usuarios: Usuario[]
    ) {
        this.id = id;
        this.titulo = titulo;
        this.cep = cep;
        this.licitacao = licitacao;
        this.dataCertame = dataCertame;
        this.valorEdital = valorEdital;
        this.bairro = bairro;
        this.rua = rua;
        this.numeroEndereco = numeroEndereco;
        this.valorContratado = valorContratado;
        this.dataInicio = dataInicio;
        this.dataTermino = dataTermino;
        this.numeroContrato = numeroContrato;
        this.empresaContratada = empresaContratada;
        this.situacao = situacao;
        this.tipo = tipo;
        this.foto = foto;
        this.usuarios = usuarios;
    }
}
