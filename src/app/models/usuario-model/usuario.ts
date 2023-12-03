import { Data } from "@angular/router";
import { Obra } from "../obra-model/obra";

export class Usuario {
    id !: number;
    nome !: string;
    cpf !: string;
    email !: string;
    celular !: string;
    tituloEleitor !: string;
    senha !: string;
    token!: string;
    role!: string;
    nomePai !: string;
    nomeMae !: string;
    dataNascimento !: Data; 
    obras !: Obra[];
}