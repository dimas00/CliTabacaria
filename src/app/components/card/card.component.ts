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

  constructor(private router: Router, private produtoService: ProdutoService) { }

  ngOnInit(): void {
    this.produtoService.getProdutos().subscribe((items => {
      const data = items;

      data.map((items) => {
      });
      this.produtos = data;
    }));

  
  }

}
