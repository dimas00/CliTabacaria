import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Produto } from '../model/Produto';

import { environment } from 'src/environments/environment';
import { Usuario } from '../components/conta/login/usuario';
import { Compras } from '../model/compra';
import { CompraForm } from '../model/compraForm';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  

  private baseApiUrl = environment.baseApiUrl
  private apiUrl = `${this.baseApiUrl}`

  constructor(private http: HttpClient) { }

  createProduto(formData: FormData): Observable<FormData>{
    return this.http.post<FormData>(this.apiUrl, formData)
  }

  async cadastroProduto(produto: Produto) {

    const result = await this.http.post<any>(`${environment.baseApiUrl}/produto`, produto).toPromise();
    return result;
  }

  getProdutos(): Observable<Produto[]>{
    return this.http.get<Produto[]>(`${environment.baseApiUrl}/produto/listar`);
  }


  getAllProdutos(): Observable<Produto[]>{
    return this.http.get<Produto[]>(`${environment.baseApiUrl}/produto/listAll`);
  }

  getProduto(id_produto: number): Observable<Produto>{
    return this.http.get<Produto>(`${environment.baseApiUrl}/produto/get/${id_produto}`);
  }

  getCompras(id_usuario: number): Observable<Compras>{
    return this.http.get<Compras>(`${environment.baseApiUrl}/compra/getcompra/${id_usuario}`);
  }

  async editarProduto(produto: Produto) {
    const result = await this.http.put<any>(`${environment.baseApiUrl}/produto/editar/${produto.id_produto}`, produto).toPromise();

    return result;
  }

  async comprar(compra: CompraForm) {
    const result = await this.http.post<any>(`${environment.baseApiUrl}/compra/comprar/`, compra).toPromise();

  }

  desativar(id_produto: number): any{
    return this.http.get<Compras>(`${environment.baseApiUrl}/produto/desativar/${id_produto}`).subscribe();
  }

  ativar(id_produto: number): any{
    return this.http.get<Compras>(`${environment.baseApiUrl}/produto/ativar/${id_produto}`).subscribe();
  }


}