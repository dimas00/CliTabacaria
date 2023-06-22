import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Cartao } from 'src/app/model/cartao';
import { CartaoForm } from 'src/app/model/cartaoForm';
import { Usuario } from 'src/app/model/usuario';
import { AlertService } from 'src/app/services/alert.service';
import { CartaoService } from 'src/app/services/cartao.service';
import { LoginService } from 'src/app/services/login.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cadastro-cartao',
  templateUrl: './cadastro-cartao.component.html',
  styleUrls: ['./cadastro-cartao.component.css']
})
export class CadastroCartaoComponent implements OnInit {

  usuarioLogado: Usuario = this.loginService.usuarioAtivo();
  cartaoForm: CartaoForm = new CartaoForm;
  cartao:Cartao = new Cartao;
  cadastroCartaoForm!:FormGroup;

  constructor(private alertService: AlertService, private cartaoService:CartaoService, private loginService: LoginService, private router: Router, private route: ActivatedRoute) { }


  ngOnInit(): void {

    this.cadastroCartaoForm = new FormGroup({
      nome: new FormControl(null, [Validators.required]),
      numero: new FormControl(null, [Validators.required]),
      expiracao: new FormControl(null, [Validators.required]),
      cvv: new FormControl(null,[Validators.required]),
    })
  }

  public cadastrar(){
   if(this.cadastroCartaoForm.valid){
    try{
      this.cartaoForm = this.cadastroCartaoForm.value;
      this.cartaoForm.usuario = this.usuarioLogado
      const resul = this.cartaoService.cadastrar(this.cartaoForm);
      console.log(resul);
      Swal.fire({
        icon: 'success',
        title: 'Cartao cadastrado com sucesso!',
       
      }).then((result) => {
        if(result.isConfirmed){
           location.href = '/visualizarCartoes/',this.usuarioLogado.id_usuario
        }
      })
     }catch(HttpError){
      this.alertService.error('falha ao cadastrar cartão', 'Erro')

    }
   }else{
    this.alertService.error('Informe os Dados corretos', 'Erro')
   }
       
  }

  get nome(){
    return this.cadastroCartaoForm.get('nome')!;
  }

  get numero(){
    return this.cadastroCartaoForm.get('numero')!;
  }

  get expiracao(){
    return this.cadastroCartaoForm.get('expiracao')!;
  }

  get cvv(){
    return this.cadastroCartaoForm.get('cvv')!;
  }

}
