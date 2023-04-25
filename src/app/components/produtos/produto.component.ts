import { Component, Input, OnInit } from "@angular/core";
import { ProdutoService } from "../../core/service/produto.service";

@Component({
    selector: 'tb-produto',
    templateUrl: 'produto.component.html'
})
export class ProdutoComponent implements OnInit {

    @Input() descricao: '';
    produtos: Object[];

    constructor(private produtoService: ProdutoService) {
    }

    ngOnInit(): void {
        this.getProdutos();
    }

    getProdutos() {
        this.produtoService.getProdutos().subscribe(produtos => {
            console.log(produtos)
            this.produtos = produtos; 
        });
    }

}