import { Obra } from "./obra-model/obra";

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
    dataNascimento !: string; 
    obras !: Obra[];
    //envios: Envio[];
}