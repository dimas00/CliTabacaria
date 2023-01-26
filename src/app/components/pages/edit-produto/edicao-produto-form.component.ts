import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterStateSnapshot } from '@angular/router';
import { Produto } from 'src/app/Produto';
import { ProdutoService } from 'src/app/services/produto.service';

@Component({
  selector: 'app-edicao-produto-form',
  templateUrl: './edicao-produto-form.component.html',
  styleUrls: ['./edicao-produto-form.component.css']
})
export class EdicaoProdutoFormComponent implements OnInit {

  
  btnText: string = 'Editar Produto';
  produtoform!: FormGroup;

  produto!: Produto;

  constructor(private produtoService: ProdutoService, private router: ActivatedRoute) { }

  ngOnInit(): void {

   
    const id_produto = Number(this.router.snapshot.paramMap.get("id_produto"))
    
    this.produtoService.getProduto(id_produto).subscribe((item) =>{
      this.produto = item;
      console.log(this.produto);
    })
  }

  refresh() {
    this.ngOnInit();
  }

  async Submit(){
    try{
      const resul = await this.produtoService.cadastroProduto(this.produtoform.value);
      console.log(resul);
      this.produtoform.reset;
      this.refresh();

    }catch(error){
      console.log(error);
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

  onFileSelected(event: any){

    const file: File = event.target.files[0];

    this.produtoform.patchValue({ Image: file });
  }
}
