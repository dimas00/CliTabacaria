import { Produto } from 'src/app/model/Produto';
import { Usuario } from './usuario';


export class Compras{
    data!: any[];
    id_compra!: number;
    nome!: string;
    nomeprod!: string;
    quantidade!: number;
    descricao!: string;
    image!: File ;
    img!: string;

}