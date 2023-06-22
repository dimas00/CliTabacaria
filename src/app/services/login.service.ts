import { HomeComponent } from './../components/pages/home/home.component';
import { environment } from './../../environments/environment';
import { Usuario } from '../model/usuario';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import jwtDecode, * as jwt_decode from 'jwt-decode';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) { }

  async login( user: Usuario){
    const resul = await this.http.post<any>(`${environment.baseApiUrl}/login`, user).toPromise();
    if(resul && resul.token) {
      window.localStorage.setItem('usuario', JSON.stringify(resul));
      window.localStorage.setItem('token', resul.token);
      return true;
    }
    return resul;
  }

  async createAccont(usuario: Usuario){
    const result = await this.http.post<any>(`${environment.baseApiUrl}/usuario/cadastrar`, usuario).toPromise();

    return result;
  }

  getUserLogado() {
   return window.localStorage.getItem('usuario');
  }

  getAuthorizationToken(){
    const token = window.localStorage.getItem('token');
    return token;
  }

  usuarioAtivo = () => JSON.parse(<string>localStorage.getItem('usuario'));

  getTokenExpirationDate(token: string): any {
    const decoded: any = jwtDecode(token);

    if(decoded.exp === undefined){
      return false;
    }

    const date = new Date(0);
    date.setUTCSeconds(decoded.exp);
    return date;
  }

  isTokenExpired(token: string): boolean{
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

  logout = (): void => {
    window.localStorage.removeItem('usuario');
    window.localStorage.removeItem('token');
    
  
  }
}
