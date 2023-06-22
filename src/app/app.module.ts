import { ErrorHandlerService } from './services/error-handler.service';
import { AuthInterceptorService } from './http-interceptors/auth-interceptor.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoginService } from './services/login.service';
import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{HttpBackend, HttpClientModule} from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PagesComponent } from './components/pages/pages.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HeadersComponent } from './shared/header/headers.component';
import { HomeComponent } from './components/pages/home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './components/conta/login/login.component';
import { ProdutoFormComponent } from './components/produto-form/produto-form.component';
import { CadastroProdutoComponent } from './components/pages/cadastro-produto/cadastro-produto.component';
import { ContaComponent } from './components/conta/conta.component';
import { AutenticacaoComponent } from './components/pages/autenticacao/autenticacao.component';
import { CardComponent } from './components/card/card.component';
import { CriarContaComponent } from './components/conta/criar-conta/criar-conta.component';
import { EdicaoProdutoFormComponent } from './components/pages/edit-produto/edicao-produto-form.component';
import { VisualizarComprasComponent } from './components/conta/visualizar-compras/visualizar-compras.component';
import { EdicaoContaComponent } from './components/conta/edicao-conta/edicao-conta.component';
import { CardIndividualComponent } from './components/pages/card-individual/card-individual.component';
import { VisualizarCartoesComponent } from './components/conta/visualizar-cartoes/visualizar-cartoes.component';
import { VisualizarEnderecosComponent } from './components/conta/visualizar-enderecos/visualizar-enderecos.component';
import { CadastroCartaoComponent } from './components/conta/cadastro-cartao/cadastro-cartao.component';
import { CadastroEnderecoComponent } from './components/conta/cadastro-endereco/cadastro-endereco.component';
import { NgxMaskModule } from 'ngx-mask';
import { EdicaoEnderecoComponent } from './components/conta/edicao-endereco/edicao-endereco.component';
import { CheckoutComponent } from './components/pages/checkout/checkout.component'

@NgModule({
  declarations: [
    AppComponent,
    PagesComponent,
    FooterComponent,
    HeadersComponent,
    HomeComponent,
    LoginComponent,
    ProdutoFormComponent,
    CadastroProdutoComponent,
    ContaComponent,
    AutenticacaoComponent,
    CardComponent,
    CriarContaComponent,
    EdicaoProdutoFormComponent,

    VisualizarComprasComponent,
      EdicaoContaComponent,
      CardIndividualComponent,
      VisualizarCartoesComponent,
      VisualizarEnderecosComponent,
      CadastroCartaoComponent,
      CadastroEnderecoComponent,
      EdicaoEnderecoComponent,
      CheckoutComponent
      
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    NgxMaskModule.forRoot(),
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
