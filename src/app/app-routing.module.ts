import { EdicaoProdutoFormComponent } from './components/pages/edit-produto/edicao-produto-form.component';
import { AuthGuard } from './conta/shared/auth.guard';
import { CadastroProdutoComponent } from './components/pages/cadastro-produto/cadastro-produto.component';
import { ProdutoFormComponent } from './components/produto-form/produto-form.component';
import { LoginComponent } from './components/conta/login/login.component';
import { HomeComponent } from './components/pages/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { CardComponent } from './components/card/card.component';
import { AutenticacaoComponent } from './components/pages/autenticacao/autenticacao.component';
import { CriarContaComponent } from './components/conta/criar-conta/criar-conta.component';
import { VisualizarComprasComponent } from './components/conta/visualizar-compras/visualizar-compras.component';
import { EdicaoContaComponent } from './components/conta/edicao-conta/edicao-conta.component';
import { CardIndividualComponent } from './components/pages/card-individual/card-individual.component';
import { VisualizarCartoesComponent } from './components/conta/visualizar-cartoes/visualizar-cartoes.component';
import { VisualizarEnderecosComponent } from './components/conta/visualizar-enderecos/visualizar-enderecos.component';
import { CadastroCartaoComponent } from './components/conta/cadastro-cartao/cadastro-cartao.component';
import { CadastroEnderecoComponent } from './components/conta/cadastro-endereco/cadastro-endereco.component';
import { EdicaoEnderecoComponent } from './components/conta/edicao-endereco/edicao-endereco.component';
import { CheckoutComponent } from './components/pages/checkout/checkout.component';

const routes: Routes = [

      { path: '', component: HomeComponent},
      {path: 'individual/:id_produto', component: CardIndividualComponent},
      {path: 'editarConta/:id_usuario', component: EdicaoContaComponent},
      { path: 'compras/:id_usuario', component: VisualizarComprasComponent, canActivate: [AuthGuard] },
      { path: 'cadastroProduto', component: CadastroProdutoComponent, canActivate: [AuthGuard] },
      {path: 'login', component: AutenticacaoComponent},
      {path: 'editar/:id_produto', component: EdicaoProdutoFormComponent, canActivate: [AuthGuard]},
      {path: 'visualizarCartoes', component: VisualizarCartoesComponent, canActivate: [AuthGuard]} ,
      {path: 'visualizarEnderecos', component: VisualizarEnderecosComponent, canActivate: [AuthGuard]},
      {path: 'cadastroCartao', component: CadastroCartaoComponent, canActivate: [AuthGuard]},
      {path: 'cadastroEndereco', component: CadastroEnderecoComponent, canActivate: [AuthGuard]},
      {path: 'editarEndereco/:id_endereco', component: EdicaoEnderecoComponent, canActivate: [AuthGuard]},
      {path: 'chekout', component: CheckoutComponent, canActivate: [AuthGuard]},

      { path: 'nconta', component: CriarContaComponent }

    ]    
 
    
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
