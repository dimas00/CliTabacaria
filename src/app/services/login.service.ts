import { environment } from './../../environments/environment';
import { Usuario } from './../components/conta/login/usuario';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import jwtDecode, * as jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  async login( user: Usuario){
    const resul = await this.http.post<any>(`${environment.baseApiUrl}/login`, user).toPromise();
    console.log(resul.Usuario);
    if(resul && resul.token) {
      window.localStorage.setItem('usuario', JSON.stringify(resul));
      window.localStorage.setItem('token', resul.token);
      return true;
    }
    return false;
  }

  async createAccont(usuario: Usuario){
    const result = await this.http.post<any>(`${environment.baseApiUrl}/usuario/cadastrar`, usuario).toPromise();

    return result;
  }

  getAuthorizationToken(){
    const token = window.localStorage.getItem('token');
    return token;
  }

  getTokenExpirationDate(token: string): any {
    const decoded: any = jwtDecode(token);

    if(decoded.exp === undefined){
      return false;
    }

    const date = new Date(0);
    date.setUTCSeconds(decoded.exp);
    return date;
  }

  isTokenExpired(token?: string): boolean{
    if(!token){
      return true;
    }
    const date = this.getTokenExpirationDate(token);
    if(date === undefined){
      return false;
    }

    return !(date.valueof() > new Date().valueOf());
  }

  isUserLoggedIn() {
    const token = this.getAuthorizationToken();
    if (!token) {
      return false;
    } else if (this.isTokenExpired(token)) {
      return false;
    }

    return true;
  }

  
}
