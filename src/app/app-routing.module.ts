import { CriarNoticiasComponent } from './noticias/criar-noticias/criar-noticias.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { RelatorioComponent } from './relatorio/relatorio.component';
import { NoticiasComponent } from './noticias/noticias.component';
import { VotacaoComponent } from './votacao/votacao.component';
import { TransparenciaComponent } from './transparencia/transparencia.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  { path: 'edicao-usuario', component: UsuariosComponent },
  { path: 'relatorio', component: RelatorioComponent },
  { path: 'noticia', component: NoticiasComponent },
  { path: 'criacao-noticia', component: CriarNoticiasComponent },
  { path: 'criar-votacao', component: VotacaoComponent },
  { path: 'transparencia', component: TransparenciaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
