import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cartao } from 'src/app/model/cartao';
import { Usuario } from 'src/app/model/usuario';
import { CartaoService } from 'src/app/services/cartao.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-visualizar-cartoes',
  templateUrl: './visualizar-cartoes.component.html',
  styleUrls: ['./visualizar-cartoes.component.css']
})
export class VisualizarCartoesComponent implements OnInit {

  usuarioLogado: Usuario = this.loginService.usuarioAtivo();
  cartoes: Cartao[] = [];

  constructor(private cartaoService: CartaoService, private loginService: LoginService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.cartaoService.getCartoes(this.usuarioLogado.id_usuario).subscribe((data => {
      this.cartoes = data.data; 
      console.log(this.cartoes)
    }));
 
  }

  deletar(id_cartao: number){
    const resul = this.cartaoService.deletar(id_cartao);
    location.href = '/visualizarCartoes'
  }

  setPadrao(id_cartao: number, id_usuario: number){
    const resul = this.cartaoService.setPadraoByid(id_usuario,id_cartao);
    location.href = '/visualizarCartoes';
    console.log(resul)

  }

}
