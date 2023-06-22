import { Router } from '@angular/router';
import { LoginService } from '../../../services/login.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Usuario } from '../../../model/usuario';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AlertService } from 'src/app/services/alert.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

   usuario: Usuario = new Usuario();

   Loginform!: FormGroup;

  
  constructor(private loginService: LoginService,  private router: Router, private alertService: AlertService) { }

  ngOnInit(): void {
    this.Loginform = new FormGroup({
      email: new FormControl(null, [Validators.required]),
      senha: new FormControl(null, [Validators.required]),
    })
  }

  async onSubmit(){
    if (this.Loginform.valid) {
      try{
        const result = await this.loginService.login(this.usuario);
        this.router.navigate(['']);
        
      }catch (HttpError){
        this.alertService.error('Usuario ou senha incorreto!', "Login")
      }
    }
  }

  get email(){
    return this.Loginform.get('email')!;
  }

  get senha(){
    return this.Loginform.get('senha')!;
  }

 

  fazerLogin(){
    console.log(this.usuario);
  }

  // submit(){
  //   if(this.Loginform.invalid){
  //     return;
  //   }
  //   console.log(this.Loginform.value);
  //   this.onSubmit.emit(this.Loginform.value);
  // }

}
