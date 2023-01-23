import { Produto } from 'src/app/Produto';
import { Router } from '@angular/router';
import { ProdutoService } from 'src/app/services/produto.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-produto-form',
  templateUrl: './produto-form.component.html',
  styleUrls: ['./produto-form.component.css']
})
export class ProdutoFormComponent implements OnInit {

  @Output() onSubmit = new EventEmitter<Produto>;

  @Input() btnText!: string;

  produtoform!: FormGroup;

  produto: Produto = new Produto();


  constructor(private produtoService: ProdutoService, private router: Router) { }

  ngOnInit(): void {

    this.produtoform = new FormGroup({
      nomeprod: new FormControl(null, [Validators.required]),
      descricao: new FormControl(null, [Validators.required]),
      quantidade: new FormControl(null, [Validators.required]),
      preco: new FormControl(null, [Validators.required]),
      
    })
  }

  async Submit(){
    try{
      const resul = await this.produtoService.cadastroProduto(this.produtoform.value);
      console.log(resul);
      this.router.navigate(['']);

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
