import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Produto } from '../Produto';

import { environment } from 'src/environments/environment';

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
    return this.http.get<Produto[]>(`${environment.baseApiUrl}/produto`);
  }

  getProduto(id_produto: number): Observable<Produto>{
    return this.http.get<Produto>(`${environment.baseApiUrl}/produto/get/${id_produto}`);
  }

  async editarProduto(produto: Produto) {
    const result = await this.http.post<any>(`${environment.baseApiUrl}/produto/editar/`, produto).toPromise();

    return result;
  }




}
