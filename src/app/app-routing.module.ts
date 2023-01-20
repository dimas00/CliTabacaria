import { AuthGuard } from './conta/shared/auth.guard';
import { CadastroProdutoComponent } from './components/pages/cadastro-produto/cadastro-produto.component';
import { ProdutoFormComponent } from './components/gerencia/produto-form/produto-form.component';
import { LoginComponent } from './components/conta/login/login.component';
import { HomeComponent } from './components/pages/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { CardComponent } from './components/card/card.component';
import { AutenticacaoComponent } from './components/pages/autenticacao/autenticacao.component';
import { CriarContaComponent } from './components/conta/criar-conta/criar-conta.component';

const routes: Routes = [

  {
    path: '', component: HomeComponent,
    children: [
      // { path: '', redirectTo: 'home', pathMatch: 'full' },
      // { path: '', component: CardComponent },
      { path: 'produtos', component: CadastroProdutoComponent },
      { path: 'cadastroProduto', component: CadastroProdutoComponent }
    ],
    // canActivate: [AuthGuard]
  },
  {
    path: 'auth', component: AutenticacaoComponent,
    children: [
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: 'login', component: LoginComponent },
      { path: 'criar-conta', component: CriarContaComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
