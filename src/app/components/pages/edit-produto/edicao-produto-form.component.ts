import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterStateSnapshot } from '@angular/router';
import { Produto } from 'src/app/model/Produto';
import { AlertService } from 'src/app/services/alert.service';
import { ProdutoService } from 'src/app/services/produto.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edicao-produto-form',
  templateUrl: './edicao-produto-form.component.html',
  styleUrls: ['./edicao-produto-form.component.css']
})
export class EdicaoProdutoFormComponent implements OnInit {

  link: string = '/cadastroProduto';
  btnText: string = 'Editar Produto';
  produtoform!: FormGroup;
  produto!: Produto;


  constructor(private produtoService: ProdutoService, private route: ActivatedRoute, private router: Router, private alertService: AlertService) { }

  ngOnInit(): void {

    const id_produto = Number(this.route.snapshot.paramMap.get("id_produto"))
    
      this.produtoService.getProduto(id_produto).subscribe((item) =>{
      this.produto = item;

    })
  }

  async editar(event: any){
    try{
      const formData = new FormData();
      formData.append('file', event.image);
      event.image = null;
      formData.append('produto',JSON.stringify(event));
      formData.append('id_produto', JSON.stringify(event.id_produto))
      this.produtoService.editarProduto(formData);
      this.alertService.success('Produtoo cadastrado com sucesso', 'Sucesso');{
        Swal.fire({
          icon: 'success',
          title: 'Produto editado com sucesso!',
         
        }).then((result) => {
          if(result.isConfirmed){
             location.href = ''
          }
        })
       }
      



    }catch(error){
      this.alertService.error('falha ao cadastrar produto', 'Erro')

    }
  }

  get nomeprod(){
    return this.produtoform.get('nomeprod')!;
  }

  get descricao(){
    return this.produtoform.get('descricao')!;
  }

  get preco(){
    return this.produtoform.get('preco')!;
  }

  get quantidade(){
    return this.produtoform.get('quantidade')!;
  }
  get image(){
    return this.produtoform.get('image')!;
  }

  onFileSelected(event: any){

    const file: File = event.target.files[0];

    this.produtoform.patchValue({ Image: file });
  }
}
