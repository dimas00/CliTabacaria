import { LoginService } from './services/login.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{HttpClientModule} from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProdutoComponent } from './model/produto/produto.component';
import { PagesComponent } from './components/pages/pages.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HeadersComponent } from './shared/header/headers.component';
import { HomeComponent } from './components/pages/home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './components/conta/login/login.component';
import { GerenciaComponent } from './components/gerencia/gerencia.component';
import { ProdutoFormComponent } from './components/gerencia/produto-form/produto-form.component';
import { CadastroProdutoComponent } from './components/pages/cadastro-produto/cadastro-produto.component';
import { ContaComponent } from './components/conta/conta.component';
import { AutenticacaoComponent } from './components/pages/autenticacao/autenticacao.component';
import { CardComponent } from './components/card/card.component';
import { CriarContaComponent } from './components/conta/criar-conta/criar-conta.component';


@NgModule({
  declarations: [
    AppComponent,
    ProdutoComponent,
    PagesComponent,
    FooterComponent,
    HeadersComponent,
    HomeComponent,
    LoginComponent,
    GerenciaComponent,
    ProdutoFormComponent,
    CadastroProdutoComponent,
    ContaComponent,
    AutenticacaoComponent,
    CardComponent,
    CriarContaComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
