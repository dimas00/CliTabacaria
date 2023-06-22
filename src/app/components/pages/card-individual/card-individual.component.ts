import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Produto } from 'src/app/model/Produto';
import { ProdutoService } from 'src/app/services/produto.service';
import { Usuario } from '../../../model/usuario';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-card-individual',
  templateUrl: './card-individual.component.html',
  styleUrls: ['./card-individual.component.css']
})
export class CardIndividualComponent implements OnInit {

  id_produto!: number
  produto!: Produto;
  usuarioLogado: Usuario = this.loginService.usuarioAtivo();

  @Input() rota: string = "";

  constructor(private router: Router, private produtoService: ProdutoService, private loginService: LoginService,  private route: ActivatedRoute) { }


  ngOnInit(): void {

    this.id_produto = Number(this.route.snapshot.paramMap.get("id_produto"));
    this.produtoService.getProduto(this.id_produto).subscribe(item => this.produto = item);
    console.log(this.produto);
  }

  isAdmin(): boolean {
    return this.usuarioLogado.permissoes.includes('admin');
  }

}