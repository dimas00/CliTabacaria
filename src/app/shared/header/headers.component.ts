import { Usuario } from './../../components/conta/login/usuario';
import { LoginService } from './../../services/login.service';
import { CardComponent } from './../../components/card/card.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-headers',
  templateUrl: './headers.component.html',
  styleUrls: ['./headers.component.css']
})
export class HeadersComponent implements OnInit {

  searchTerm: string = '';

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
  }

  search(e : Event): void{

  }

  public getUser() {
    let t = this.loginService.getUserLogado();
    if (t) {
      return  JSON.parse(t);
    
    }    
  }
   


}
