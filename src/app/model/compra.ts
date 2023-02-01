import { Produto } from 'src/app/model/Produto';
import { Usuario } from './../components/conta/login/usuario';


export class Compra{
    id_compra!: number;
    data!: Date;
    usuario!: Usuario;
    produto!: Produto;
    quantidade!: number;

}