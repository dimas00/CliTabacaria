import { HttpErrorResponse } from '@angular/common/http';
import { Injectable, NgZone, ErrorHandler } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerService implements ErrorHandler {

  constructor(private loginService: LoginService, private zone: NgZone,  private router: Router) {
  }


  handleError(error: HttpErrorResponse | any): void {
    if (error instanceof HttpErrorResponse) {
      switch (error.status) {
        case 400: 
         console.log("aqui")
          alert(error.message);
          
          break;
        
        case 403:
          console.log("aqui")
          alert(error.message);
          break;
        
        case 401:
          console.log("aqui")
          alert("Sessão expirada");
          this.zone.run(() => this.loginService.logout());
          this.router.navigate(['login']);

          break;
      }
    }
  } 
}
