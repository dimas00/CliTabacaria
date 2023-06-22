
import { Usuario } from "./usuario";

export class CartaoForm{
    id_cartao!: number;
    nome!: string;
    numero!: number;
    expiracao!: Date;
    cvv!: number;
    usuario!: Usuario;
}