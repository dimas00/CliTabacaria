import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Endereco } from 'src/app/model/endereco';
import { EnderecoForm } from 'src/app/model/enderecoForm';
import { Usuario } from 'src/app/model/usuario';
import { EnderecoService } from 'src/app/services/endereco.service';
import { LoginService } from 'src/app/services/login.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cadastro-endereco',
  templateUrl: './cadastro-endereco.component.html',
  styleUrls: ['./cadastro-endereco.component.css']
})
export class CadastroEnderecoComponent implements OnInit {

  @Input() btnText!: string;
  usuarioLogado: Usuario = this.loginService.usuarioAtivo();
  enderecoForm:  EnderecoForm = new EnderecoForm;
  cadastroEnderecoForm!: FormGroup;


  constructor(private enderecoService:EnderecoService, private loginService: LoginService, private router: Router, private route: ActivatedRoute) { }


  ngOnInit(): void {

    this.cadastroEnderecoForm = new FormGroup({
      nome_endereco: new FormControl(null, [Validators.required]),
      cidade: new FormControl(null, [Validators.required]),
      rua: new FormControl(null, [Validators.required]),
      estado: new FormControl(null, [Validators.required]),
      cep: new FormControl(null, [Validators.required]),
      complemento: new FormControl(null, [Validators.required]),
      bairro: new FormControl(null, [Validators.required]),
      numero: new FormControl(null, [Validators.required]),
      
    })
  }

  public cadastrar(){

      if(this.cadastroEnderecoForm.valid){
        this.enderecoForm = this.cadastroEnderecoForm.value;
        this.enderecoForm.usuario = this.usuarioLogado;
        this.enderecoService.cadastrar(this.enderecoForm);
        Swal.fire({
          icon: 'success',
          title: 'Endereço cadastrado com sucesso!',
         
        }).then((result) => {
          if(result.isConfirmed){
             location.href = '/visualizarEnderecos/',this.usuarioLogado.id_usuario
          }
        })
        
      }else{
        console.log('invalido')
      }
    }
}
