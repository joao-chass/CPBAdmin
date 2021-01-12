import { LoginComponent } from './login/login.component';
import { CriarNoticiasComponent } from './noticias/criar-noticias/criar-noticias.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { RelatorioComponent } from './relatorio/relatorio.component';
import { NoticiasComponent } from './noticias/noticias.component';
import { VotacaoComponent } from './votacao/votacao.component';
import { TransparenciaComponent } from './transparencia/transparencia.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from './component/token/auth-guard.service';
import { RecuperarSenhaComponent } from './login/recuperar-senha/recuperar-senha.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'login', component: LoginComponent },
  { path: 'recuperar-senha', component: RecuperarSenhaComponent },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuardService] },
  { path: 'edicao-usuario', component: UsuariosComponent, canActivate: [AuthGuardService] },
  { path: 'relatorio', component: RelatorioComponent, canActivate: [AuthGuardService] },
  { path: 'noticia', component: NoticiasComponent, canActivate: [AuthGuardService] },
  { path: 'criacao-noticia', component: CriarNoticiasComponent, canActivate: [AuthGuardService] },
  { path: 'criar-votacao', component: VotacaoComponent, canActivate: [AuthGuardService] },
  { path: 'transparencia', component: TransparenciaComponent, canActivate: [AuthGuardService] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
