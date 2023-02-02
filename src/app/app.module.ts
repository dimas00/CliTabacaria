import { ErrorHandlerService } from './services/error-handler.service';
import { AuthInterceptorService } from './http-interceptors/auth-interceptor.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoginService } from './services/login.service';
import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{HttpBackend, HttpClientModule} from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {  HttpInterceptorProviders } from './http-interceptors'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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
import { EdicaoProdutoFormComponent } from './components/pages/edit-produto/edicao-produto-form.component';
import { VisualizarComprasComponent } from './components/pages/visualizar-compras/visualizar-compras.component';


@NgModule({
  declarations: [
    AppComponent,
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
    EdicaoProdutoFormComponent,

    VisualizarComprasComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true },
    { provide: ErrorHandler, useClass: ErrorHandlerService }
  ],
  
  // [LoginService, HttpInterceptorProviders],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
