import { Usuario } from '../../model/usuario';
import { LoginService } from './../../services/login.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Produto } from 'src/app/model/Produto';
import { ProdutoService } from 'src/app/services/produto.service';
import { CompraForm } from 'src/app/model/compraForm';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() rota: string = "";

  usuarioLogado: Usuario = this.loginService.usuarioAtivo();
  @Output() selecionaProduto = new EventEmitter<Produto>;

  produtos: Produto[] = [];
  searchProdutos: Produto[] = [];
  compra = new CompraForm;

  // admin: boolean = this.usuarioLogado.permissoes.includes('admin');


  constructor(private router: Router, private produtoService: ProdutoService, private loginService: LoginService, private route: ActivatedRoute) { }

  ngOnInit(): void {

    if(this.rota == 'home'){
      this.produtoService.getProdutos().subscribe((items => {
      this.produtos = items;
      console.log(this.produtos)
     
      
    }));
    }
    
    if(this.rota == 'gerencia'){
      this.produtoService.getAllProdutos().subscribe((items => {
        this.produtos = items;
        
      }));
    }
    
  
  }
  
  isAdmin(): boolean {
    return this.usuarioLogado.permissoes.includes('admin');
  }

  isUser(): boolean {
    
   return this.usuarioLogado.permissoes.includes('usuario');
          
  }




  public comprar( id_produto: number ){
    if(this.usuarioLogado){
    this.compra.produto = new Produto();
    this.compra.produto.id_produto =  id_produto;
    this.compra.produto.quantidade = 1;
    console.log(this.compra.produto.id_produto);
    this.compra.usuario = new Usuario();
    this.compra.usuario.id_usuario = this.usuarioLogado.id_usuario;
    const resul = this.produtoService.comprar(this.compra);
    this.ngOnInit();
    console.log(resul);
    alert("compra efetuada com sucesso")
    }else{
      this.router.navigate(['login']);
    }
    
    

  }

  desativar(id_produto: any){
    const resul = this.produtoService.desativar(id_produto);
    console.log(resul);
    location.href = 'cadastroProduto'
  }

  
  ativar(id_produto: any){
    const resul = this.produtoService.ativar(id_produto);
    console.log(resul);
    location.href = 'cadastroProduto';


    
  }

  individual(id_produto: any){
    this.selecionaProduto.emit(id_produto);
    location.href = 'card-individual';
  }

  

   search(e : Event): void{

     const target = e.target as HTMLInputElement;
      const value = target.value;

     this.searchProdutos = this.produtos.filter(searchProdutos =>
       searchProdutos.nomeprod.toLowerCase().includes(value)
    );
   }

}
