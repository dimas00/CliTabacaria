import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from './../../components/conta/login/usuario';
import { LoginService } from './../../services/login.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-headers',
  templateUrl: './headers.component.html',
  styleUrls: ['./headers.component.css']
})
export class HeadersComponent implements OnInit {

  @Input() rota: string = "";
  usuarioLogado: Usuario = this.loginService.usuarioAtivo();
  searchTerm: string = '';

  constructor(private loginService: LoginService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  search(e : Event): void{
    const target = e.target as HTMLInputElement
      const value = target.value
  }

  public getUser() {
    let t = this.loginService.getUserLogado();
    if (t) {
      return  JSON.parse(t);
    
    }    
  }

  isAdmin(): boolean {
    return this.usuarioLogado.permissoes.includes('admin');
  }

   sair(): void  {
    
    return this.loginService.logout();
    
    
      
  }
   


}
