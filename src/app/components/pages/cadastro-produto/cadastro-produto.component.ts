import { Router, RouterModule } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/app/model/Produto';

import { ProdutoService } from 'src/app/services/produto.service';

@Component({
  selector: 'app-cadastro-produto',
  templateUrl: './cadastro-produto.component.html',
  styleUrls: ['./cadastro-produto.component.css']
})
export class CadastroProdutoComponent implements OnInit {
  
  btnText: string = 'Cadastrar Produto';

  constructor(private produtoService: ProdutoService, private router: Router) { }

  ngOnInit(): void {
  }

   cadastrarProduto(produto: Produto){

    const formData = new FormData();
    formData.append('file', produto.image);
    produto.image = null;
    formData.append('produto',JSON.stringify(produto));
    

     this.produtoService.cadastroProduto(formData);
     this.router.navigate(['cadastroProduto']);
     
    

  }

}
