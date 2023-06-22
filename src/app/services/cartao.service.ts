import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Cartao } from '../model/cartao';
import { CartaoForm } from '../model/cartaoForm';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class CartaoService {
  
  private baseApiUrl = environment.baseApiUrl
  private apiUrl = `${this.baseApiUrl}`

  constructor(private http: HttpClient) { }

  async cadastrar(cartao: CartaoForm){
    const result = this.http.post<any>(`${environment.baseApiUrl}/cartao`, cartao).subscribe();

    return result;
  }

  getCartoes(id_usuario: number): Observable<Cartao>{
    return this.http.get<Cartao>(`${environment.baseApiUrl}/cartao/get/${id_usuario}`);
  }

  deletar(id_cartao: number): any{
    return this.http.delete<any>(`${environment.baseApiUrl}/cartao/${id_cartao}`).subscribe();
  }

  setPadraoByid(id_usuario: number,id_cartao:number):any{
    return this.http.put<any>(`${environment.baseApiUrl}/cartao/setPadrao/${id_usuario}/${id_cartao}`, null).subscribe();

  }
}
