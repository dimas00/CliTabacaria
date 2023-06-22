import { Usuario } from "./usuario";

export class EnderecoForm{
    nome_endereco!: string;
    rua!: string;
    cidade!: string;
    estado!:string;
    cep!: string;
    complemento!: string;
    bairo!: string;
    numero!: string;
    usuario!:Usuario
}