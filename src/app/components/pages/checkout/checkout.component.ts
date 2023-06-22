import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Endereco } from 'src/app/model/endereco';
import { Usuario } from 'src/app/model/usuario';
import { EnderecoService } from 'src/app/services/endereco.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  usuarioLogado: Usuario = this.loginService.usuarioAtivo();
  endereco!: Endereco; 

  constructor(private enderecoService: EnderecoService, private loginService: LoginService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.enderecoService.getEnderecoPadrao(this.usuarioLogado.id_usuario).subscribe(endereco => this.endereco = endereco);
    console.log(this.endereco)
  }

}
