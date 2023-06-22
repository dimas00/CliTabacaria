import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Compras } from 'src/app/model/compra';
import { Produto } from 'src/app/model/Produto';
import { LoginService } from 'src/app/services/login.service';
import { ProdutoService } from 'src/app/services/produto.service';
import { Usuario } from '../../../model/usuario';

@Component({
  selector: 'app-visualizar-compras',
  templateUrl: './visualizar-compras.component.html',
  styleUrls: ['./visualizar-compras.component.css']
})
export class VisualizarComprasComponent implements OnInit {

  usuarioLogado: Usuario = this.loginService.usuarioAtivo();
  compras: Compras[] = [];

  constructor(private router: Router, private produtoService: ProdutoService, private loginService: LoginService,  private route: ActivatedRoute) { }

  ngOnInit(): void {

    const id_usuario = Number(this.route.snapshot.paramMap.get("id_usuario"));


    this.produtoService.getCompras(id_usuario).subscribe((data) =>{
      this.compras = data.data;
      console.log(this.compras);
    })

   
  } 
  isAdmin(): boolean {

      const id_produto = Number(this.route.snapshot.paramMap.get("id_produto"))
      return this.usuarioLogado.permissoes.includes('admin');
    }


}
