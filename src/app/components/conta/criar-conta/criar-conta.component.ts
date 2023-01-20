import { LoginService } from './../../../services/login.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Usuario } from '../login/usuario';
import { Router } from '@angular/router';

@Component({
  selector: 'app-criar-conta',
  templateUrl: './criar-conta.component.html',
  styleUrls: ['./criar-conta.component.css']
})
export class CriarContaComponent implements OnInit {

  usuario: Usuario = new Usuario();

  criarContaForm!: FormGroup;
  

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {

    this.criarContaForm = new FormGroup({
      email: new FormControl(null, [Validators.required]),
      senha: new FormControl(null, [Validators.required]),
      nome: new FormControl(null, [Validators.required]),
    })
  }

  async onSubmit(){
    try{
      const resul = await this.loginService.createAccont(this.usuario);
      console.log(resul);
      this.router.navigate(['login']);

    }catch(error){
      console.log(error);
    }
  }

  get email(){
    return this.criarContaForm.get('email')!;
  }

  get senha(){
    return this.criarContaForm.get('senha')!;
  }

  get nome(){
    return this.criarContaForm.get('senha')!;
  }


}
