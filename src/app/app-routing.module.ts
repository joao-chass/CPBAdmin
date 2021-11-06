import { VolutarioCadastroComponent } from './volutario/volutario-cadastro/volutario-cadastro.component';
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
import { InscricaoEventoComponent } from './volutario/tech-talk/inscricao-evento/inscricao-evento.component';
import { EditarUsuarioComponent } from './usuarios/editar-usuario/editar-usuario.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'login', component: LoginComponent },
  { path: 'recuperar-senha', component: RecuperarSenhaComponent },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuardService] },
  { path: 'relatorio', component: RelatorioComponent, canActivate: [AuthGuardService] },
  { path: 'noticia', component: NoticiasComponent, canActivate: [AuthGuardService] },
  { path: 'criacao-noticia', component: CriarNoticiasComponent, canActivate: [AuthGuardService] },

  //Edição usuario
  { path: 'usuarios', component: UsuariosComponent, canActivate: [AuthGuardService] },
  { path: 'edicao-usuario/:id', component: EditarUsuarioComponent, canActivate: [AuthGuardService] },

  //votação
  { path: 'criar-votacao', component: VotacaoComponent, canActivate: [AuthGuardService] },

  //Trasparencia
  { path: 'transparencia', component: TransparenciaComponent, canActivate: [AuthGuardService] },

  //volutarios
  { path: 'voluntario-cadastro/:token', component: VolutarioCadastroComponent },
  { path: 'lista-de-presenca/:token', component: InscricaoEventoComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
