import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/app/Produto';

import { ProdutoService } from 'src/app/services/produto.service';

@Component({
  selector: 'app-cadastro-produto',
  templateUrl: './cadastro-produto.component.html',
  styleUrls: ['./cadastro-produto.component.css']
})
export class CadastroProdutoComponent implements OnInit {
  
  btnText: string = 'Cadastrar Produto';

  constructor(private produtoService: ProdutoService) { }

  ngOnInit(): void {
  }

  async creatHandler(produto: Produto){

    const formData = new FormData();

    formData.append('title', produto.nomeprod);
    formData.append('descricao', produto.descricao);
    
    if(produto.image){
      formData.append('image', produto.image);
    }

     this.produtoService.cadastroProduto(produto);
    

  }

}
