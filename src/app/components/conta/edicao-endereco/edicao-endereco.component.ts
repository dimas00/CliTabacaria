import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Endereco } from 'src/app/model/endereco';
import { EnderecoForm } from 'src/app/model/enderecoForm';
import { Usuario } from 'src/app/model/usuario';
import { EnderecoService } from 'src/app/services/endereco.service';
import { LoginService } from 'src/app/services/login.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edicao-endereco',
  templateUrl: './edicao-endereco.component.html',
  styleUrls: ['./edicao-endereco.component.css']
})
export class EdicaoEnderecoComponent implements OnInit {

  id_endereco!: number;
  usuarioLogado: Usuario = this.loginService.usuarioAtivo();
  btnText: string = 'Cadastrar Endereço';
  endereco!: Endereco;
  enderecoForm:  EnderecoForm = new EnderecoForm;
  edicaoEnderecoForm!: FormGroup;



  constructor(private enderecoService:EnderecoService, private loginService: LoginService, private router: Router, private route: ActivatedRoute) { }


  ngOnInit(): void {

    this.id_endereco = Number(this.route.snapshot.paramMap.get("id_endereco"));

    this.enderecoService.getById(this.id_endereco).subscribe(item => this.endereco.data = item.data)
        console.log(this.endereco.data);
       

    this.edicaoEnderecoForm = new FormGroup({
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

  public editar(){

      if(this.edicaoEnderecoForm.valid){
        this.enderecoForm = this.edicaoEnderecoForm.value;
        this.enderecoForm.usuario = this.usuarioLogado;
        this.enderecoService.cadastrar(this.enderecoForm);
        Swal.fire({
          icon: 'success',
          title: 'Endereço editado com sucesso!',
         
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
