import { environment } from './../../environments/environment';
import { Usuario } from './../components/conta/login/usuario';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  async login( user: Usuario){
    const resul = await this.http.post<any>(`${environment.baseApiUrl}/login`, user).toPromise();
    console.log(user);
    if(resul && resul.token) {
      window.localStorage.setItem('token', resul.token);
      return true;
    }
    return false;
  }

  createAccont(accont: any){
    return new Promise((resolve) =>{
      resolve(true);
    });
  }
}
