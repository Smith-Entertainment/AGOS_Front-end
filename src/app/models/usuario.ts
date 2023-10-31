import { Obra } from "./obra";

export class Usuario {
    id: number;
    nome: string;
    cpf: string;
    email: string;
    celular: string;
    tituloEleitor: string;
    senha: string;
    nomePai: string;
    nomeMae: string;
    dataNascimento: string; // Você pode ajustar o tipo de data de acordo com o formato que deseja
    obras: Obra[];
    //envios: Envio[];
}