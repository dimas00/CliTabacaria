import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Usuario } from '../model/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  

  private baseApiUrl = environment.baseApiUrl
  private apiUrl = `${this.baseApiUrl}`

  constructor(private http: HttpClient) { }

  getUsuario(id_usuario: number){
    return this.http.get<Usuario>(`${environment.baseApiUrl}/usuario/get/${id_usuario}`);
  }
}
