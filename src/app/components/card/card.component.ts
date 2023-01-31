import { Usuario } from './../conta/login/usuario';
import { LoginService } from './../../services/login.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Produto } from 'src/app/Produto';
import { ProdutoService } from 'src/app/services/produto.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  usuarioLogado: Usuario = this.loginService.usuarioAtivo();
  produtos: Produto[] = [];
  searchProdutos: Produto[] = [];
  // admin: boolean = this.usuarioLogado.permissoes.includes('admin');


  constructor(private router: Router, private produtoService: ProdutoService, private loginService: LoginService) { }

  ngOnInit(): void {

    this.produtoService.getProdutos().subscribe((items => {
      console.log(items)
      this.produtos = items;
      
    }));
  
  }
  
  isAdmin(): boolean {
    return this.usuarioLogado.permissoes.includes('admin');
  }

  

  // search(e : Event): void{

  //   const target = e.target as HTMLInputElement
  //   const value = target.value

  //   this.searchProdutos = this.produtos.filter(searchProdutos =>
  //     searchProdutos.nomeprod.toLowerCase().includes(value)
  //   );
  // }

}
