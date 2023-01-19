import { Produto } from './../../../Produto';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-produto-form',
  templateUrl: './produto-form.component.html',
  styleUrls: ['./produto-form.component.css']
})
export class ProdutoFormComponent implements OnInit {

  @Output() onSubmit = new EventEmitter<Produto>;

  @Input() btnText!: string;

  Produtoform!: FormGroup;


  constructor() { }

  ngOnInit(): void {
    this.Produtoform = new FormGroup({
      id: new FormControl(''),
      title: new FormControl(''),
      descricao: new FormControl(''),
      quantidade: new FormControl(''),
      preco: new FormControl(''),
      image: new FormControl('')
      
    })
  }

  get title(){
    return this.Produtoform.get('title')!;
  }

  get descricao(){
    return this.Produtoform.get('descricao')!;
  }

  onFileSelected(event: any){

    const file: File = event.target.files[0];

    this.Produtoform.patchValue({ Image: file });
  }

  submit(){
    if(this.Produtoform.invalid){
      return;
    }
    console.log(this.Produtoform.value);
    this.onSubmit.emit(this.Produtoform.value);
  }

}
