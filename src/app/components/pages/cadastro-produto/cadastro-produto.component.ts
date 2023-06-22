import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/app/model/Produto';

import { ProdutoService } from 'src/app/services/produto.service';
import { AlertService } from 'src/app/services/alert.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cadastro-produto',
  templateUrl: './cadastro-produto.component.html',
  styleUrls: ['./cadastro-produto.component.css']
})
export class CadastroProdutoComponent implements OnInit {
  
  btnText: string = 'Cadastrar Produto';

  constructor(private produtoService: ProdutoService, private router: Router, private alertService: AlertService) { }

  ngOnInit(): void {
  }

   cadastrarProduto(produto: Produto){

    try{
      const formData = new FormData();
    formData.append('file', produto.image);
    produto.image = null;
    formData.append('produto',JSON.stringify(produto))
     this.produtoService.cadastroProduto(formData);
     this.alertService.success('Produtoo cadastrado com sucesso', 'Sucesso');{
      Swal.fire({
        icon: 'success',
        title: 'Produto cadastrado com sucesso!',
       
      }).then((result) => {
        if(result.isConfirmed){
           location.href = ''
        }
      })
     }
    } 
     catch{
        this.alertService.error('falha ao cadastrar produto', 'Erro')
     }
  }

}
