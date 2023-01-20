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

  getAuthorizationToken(){
    const token = window.localStorage.getItem('token');
    return token;
  }

  getTokenExpirationDate(token: string): any {
    const decoded: any = jwtDecode(token);

    if(decoded.exp === undefined){
      return null;
    }

    const date = new Date(0);
    date.setUTCSeconds(decoded.exp);
    return date;
  }

  
}
