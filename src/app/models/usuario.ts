import { Data } from "@angular/router";
import { Obra } from "./obra-model/obra";
import { Situacao } from "./enum/situacao";

export class Usuario {
    id !: number;
    nome !: string;
    cpf !: string;
    email !: string;
    celular !: string;
    tituloEleitor !: string;
    senha !: string;
    nomePai !: string;
    nomeMae !: string;
    dataNascimento !: Data; 
    obras !: Obra[];
    
}