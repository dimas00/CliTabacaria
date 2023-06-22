import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Endereco } from 'src/app/model/endereco';
import { Usuario } from 'src/app/model/usuario';
import { EnderecoService } from 'src/app/services/endereco.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-visualizar-enderecos',
  templateUrl: './visualizar-enderecos.component.html',
  styleUrls: ['./visualizar-enderecos.component.css']
})
export class VisualizarEnderecosComponent implements OnInit {

  enderecos: Endereco[] = []
  usuarioLogado: Usuario = this.loginService.usuarioAtivo();


  constructor(private enderecoService: EnderecoService, private loginService: LoginService, private router: Router, private route: ActivatedRoute) { }


  ngOnInit(): void {
    this.enderecoService.getEnderecos(this.usuarioLogado.id_usuario).subscribe((data =>{
      this.enderecos = data.data;
      console.log(this.enderecos)
    })) 


  }

  delete(id_endereco: number){

    const resul = this.enderecoService.delete(id_endereco);
    location.href = '/visualizarEnderecos';
  }

  setPadrao(id_endereco: number, id_usuario: number){
    const resul = this.enderecoService.setPadraoByid(id_usuario,id_endereco);
    location.href = '/visualizarEnderecos';
    console.log(resul)

  }

}
