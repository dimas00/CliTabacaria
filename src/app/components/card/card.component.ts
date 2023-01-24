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

  produtos: Produto[] = [];
  searchProdutos: Produto[] = [];


  constructor(private router: Router, private produtoService: ProdutoService) { }

  ngOnInit(): void {
    this.produtoService.getProdutos().subscribe((items => {
      
      this.produtos = items;
      
    }));
  
  }

  // search(e : Event): void{

  //   const target = e.target as HTMLInputElement
  //   const value = target.value

  //   this.searchProdutos = this.produtos.filter(searchProdutos =>
  //     searchProdutos.nomeprod.toLowerCase().includes(value)
  //   );
  // }

}
