import { HttpErrorResponse } from '@angular/common/http';
import { Injectable, NgZone, ErrorHandler } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './login.service';
import { AlertService } from './alert.service';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerService implements ErrorHandler {

  constructor(private loginService: LoginService, private zone: NgZone,  private router: Router, private alertService: AlertService) {
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
          this.alertService;{
            Swal.fire({
              icon: 'info',
              title: 'Sessão expirada',
              text: 'Faça login para continuar:'

             
            }).then((result) => {
              if(result.isConfirmed){
                 location.href = 'login'
              }
            })
           }
          this.zone.run(() => this.loginService.logout());
         // this.router.navigate(['']);

          break;
      }
    }
  } 
}
