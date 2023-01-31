import { LoginService } from './../../services/login.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  
  constructor(private router: Router, private loginService: LoginService){ }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):  boolean  {

      const token: any = window.localStorage.getItem('token');
      // const espirado = this.loginService.isTokenExpired(token);
      if(token){
        return true;
      }else{
         this.router.navigate(['login'])
        return false;
      }
  }

  // constructor(private router: Router, private loginService: LoginService){ }

  // canActivate(
  //   next: ActivatedRouteSnapshot,
  //   state: RouterStateSnapshot):  boolean  {

  //     if (this.loginService.isUserLoggedIn()) {
  //       return true;
  //     }else{
  //       this.router.navigate(['login'])
  //       return false;
  //     }
  //   return true;
  // }
  
}
