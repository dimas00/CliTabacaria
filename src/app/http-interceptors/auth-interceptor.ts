import { LoginService } from './../services/login.service';
import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse} from '@angular/common/http';

import { catchError, Observable, throwError } from 'rxjs';

/** Pass untouched request through to the next request handler. */
@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(private loginService: LoginService){}

  intercept(req: HttpRequest<any>, next: HttpHandler):Observable<HttpEvent<any>> {
    
    const token = this.loginService.getAuthorizationToken();
    
    let request: HttpRequest<any> = req;

    if(token){
      request = req.clone({
        headers: req.headers.set('Authorization', `Bearer ${token}`)
      });
    }

    return next.handle(request)
    .pipe(
      catchError(this.handleError)
    );

  }

  private handleError (error: HttpErrorResponse){
    if(error.error instanceof ErrorEvent){
      console.error('Ocorreu um erro:', error.error.message);
    }else{
      console.error(
        `Código do erro ${error.status}, ` +
        `Erro: ${JSON.stringify(error.error)}`);
    }
    return throwError('Ocorreu um erro, tente novamente');
  }
  
}