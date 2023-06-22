import { Produto } from 'src/app/model/Produto';
import { Router, ActivatedRoute } from '@angular/router';
import { ProdutoService } from 'src/app/services/produto.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-produto-form',
  templateUrl: './produto-form.component.html',
  styleUrls: ['./produto-form.component.css']
})
export class ProdutoFormComponent implements OnInit {

  @Input() link! : string;

  @Input() produtoData: Produto | null = null;

  @Output() onSubmit = new EventEmitter<Produto>;

  @Input() btnText!: string;

  produtoform!: FormGroup;

  produto: Produto = new Produto();

  imgUrl: any;
  imgPath: any;


  constructor(private produtoService: ProdutoService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.produtoform = new FormGroup({
      nomeprod: new FormControl(this.produtoData ? this.produtoData.nomeprod : '', [Validators.required]),
      descricao: new FormControl(this.produtoData ? this.produtoData.descricao : '', [Validators.required]),
      quantidade: new FormControl(this.produtoData ? this.produtoData.quantidade : '', [Validators.required]),
      preco: new FormControl(this.produtoData ? this.produtoData.preco : '', [Validators.required]),
      img: new FormControl(this.produtoData ? this.produtoData.img : '', [Validators.required]),
      image: new FormControl(this.produtoData ? this.produtoData.image : '', [Validators.required]),

      id_produto: new FormControl(this.produtoData?.id_produto ? this.produtoData?.id_produto : null)
    })
  }

  refresh() {
    this.ngOnInit();
  }

  async Submit(){
    try{

      this.onSubmit.emit(this.produtoform.value);
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

  get image(){
    return this.produtoform.get('image')!;
  }

  url: any;

  onFileSelected(event: any){
    
   let reader = new FileReader();
   this.imgPath = event.target.file
   reader.readAsDataURL(event.target.files[0])
   reader.onload = (_event)=>{
    this.imgUrl = reader.result;
   } 

    console.log(this.imgUrl)
    const file: File = event.target.files[0];
    this.produtoform.patchValue({ image: file });
    console.log(this.produtoform.value);  }



}
