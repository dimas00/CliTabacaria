import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { EnderecoForm } from '../model/enderecoForm';
import { Endereco } from '../model/endereco';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class EnderecoService {

  private baseApiUrl = environment.baseApiUrl
  private apiUrl = `${this.baseApiUrl}`

  constructor(private http: HttpClient) { }

  async cadastrar(enderecoForm: EnderecoForm){
    const result = this.http.post<any>(`${environment.baseApiUrl}/endereco`, enderecoForm).subscribe();

    return result;
  }

  getEnderecos(id_usuario: number): Observable<Endereco>{
    return this.http.get<Endereco>(`${environment.baseApiUrl}/endereco/${id_usuario}`);
  }

  getById(id_endereco: number): Observable<Endereco>{
    return this.http.get<Endereco>(`${environment.baseApiUrl}/endereco/get/${id_endereco}`);
  }

  getEnderecoPadrao(id_usuario: number): Observable<Endereco>{
    return this.http.get<Endereco>(`${environment.baseApiUrl}/endereco/getPadrao/${id_usuario}`);
  }

  delete(id_endereco: number):any {
    return this.http.delete<any>(`${environment.baseApiUrl}/endereco/${id_endereco}`).subscribe();

  }

  setPadraoByid(id_usuario: number, id_endereco:number):any{
    return this.http.put<any>(`${environment.baseApiUrl}/endereco/setPadrao/${id_usuario}/${id_endereco}`, null).subscribe();

  }
}
