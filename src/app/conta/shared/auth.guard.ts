import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  
  constructor(private router: Router){ }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):  boolean  {

      const token = window.localStorage.getItem('token');
      if(token){
        return true;
      }else{
        // this.router.navigate(['login'])
        return false;
      }
    return true;
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
