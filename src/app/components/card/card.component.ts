import { Usuario } from './../conta/login/usuario';
import { LoginService } from './../../services/login.service';
import { Component, Input, OnInit } from '@angular/core';
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
  produtos: Produto[] = [];
  searchProdutos: Produto[] = [];
  compra = new CompraForm;

  // admin: boolean = this.usuarioLogado.permissoes.includes('admin');


  constructor(private router: Router, private produtoService: ProdutoService, private loginService: LoginService, private route: ActivatedRoute) { }

  ngOnInit(): void {

    if(this.rota == 'home'){
      this.produtoService.getProdutos().subscribe((items => {
      console.log(items , "so get msm");
      this.produtos = items;
      
    }));
    }
    
    if(this.rota == 'gerencia'){
      this.produtoService.getAllProdutos().subscribe((items => {
        console.log(items, "getAll");
        this.produtos = items;
        
      }));
    }
    
  
  }
  
  isAdmin(): boolean {
    return this.usuarioLogado.permissoes.includes('admin');
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
    this.ngOnInit();
  }

  
  ativar(id_produto: any){
    const resul = this.produtoService.ativar(id_produto);
    console.log(resul);
    this.ngOnInit();
    
  }

  

   search(e : Event): void{

     const target = e.target as HTMLInputElement
      const value = target.value

     this.searchProdutos = this.produtos.filter(searchProdutos =>
       searchProdutos.nomeprod.toLowerCase().includes(value)
    );
   }

}
