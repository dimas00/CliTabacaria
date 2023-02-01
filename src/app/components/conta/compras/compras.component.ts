import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Produto } from 'src/app/model/Produto';
import { LoginService } from 'src/app/services/login.service';
import { ProdutoService } from 'src/app/services/produto.service';

@Component({
  selector: 'app-compras',
  templateUrl: './compras.component.html',
  styleUrls: ['./compras.component.css']
})
export class ComprasComponent implements OnInit {

  produtos: Produto[] = [];

  constructor(private router: Router, private produtoService: ProdutoService, private loginService: LoginService,  private route: ActivatedRoute) { }

  ngOnInit(): void {

    const id_usuario = Number(this.route.snapshot.paramMap.get("id_usuario"))
    console.log(id_usuario);

    this.produtoService.getCompras(id_usuario).subscribe((item) =>{
      this.produtos = item;
      console.log(this.produtos);
    })

   
  }

}
