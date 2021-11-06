import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuBarComponent } from './menu-bar/menu-bar.component';

// Material Form Controls
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSliderModule } from '@angular/material/slider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
// Material Navigation
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
// Material Layout
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatListModule } from '@angular/material/list';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTreeModule } from '@angular/material/tree';
// Material Buttons & Indicators
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatBadgeModule } from '@angular/material/badge';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatNativeDateModule, MatRippleModule } from '@angular/material/core';
// Material Popups & Modals
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTooltipModule } from '@angular/material/tooltip';
// Material Data tables
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MenuRotasComponent } from './menu-bar/menu-rotas/menu-rotas.component';
import { HomeComponent } from './home/home.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { RelatorioComponent } from './relatorio/relatorio.component';
import { NoticiasComponent } from './noticias/noticias.component';
import { VotacaoComponent } from './votacao/votacao.component';
import { TransparenciaComponent } from './transparencia/transparencia.component';
import { HttpClientModule } from '@angular/common/http';
import { CriarNoticiasComponent } from './noticias/criar-noticias/criar-noticias.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TextEditorComponent } from './component/text-editor/text-editor.component';
import { PreviewComponent } from './noticias/criar-noticias/preview/preview.component';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { LoginComponent } from './login/login.component';
import { RecuperarSenhaComponent } from './login/recuperar-senha/recuperar-senha.component';
import { VolutarioComponent } from './volutario/volutario.component';
import { VolutarioCadastroComponent } from './volutario/volutario-cadastro/volutario-cadastro.component';
import { DadosPessoaisComponent } from './volutario/volutario-cadastro/dados-pessoais/dados-pessoais.component';
import { DadosProfissionaisComponent } from './volutario/volutario-cadastro/dados-profissionais/dados-profissionais.component';
import { TechTalkComponent } from './volutario/tech-talk/tech-talk.component';
import { InscricaoEventoComponent } from './volutario/tech-talk/inscricao-evento/inscricao-evento.component';
import { DadosInscricaoComponent } from './volutario/tech-talk/inscricao-evento/dados-inscricao/dados-inscricao.component';
import { ConfirmaEmailComponent } from './volutario/tech-talk/inscricao-evento/confirma-email/confirma-email.component';
import { EditarUsuarioComponent } from './usuarios/editar-usuario/editar-usuario.component';
import { ShowByClaimDirective } from './ShowByClaimDirective/show-by-claim-directive.directive';
import { CadastroSistemaComponent } from './volutario/volutario-cadastro/cadastro-sistema/cadastro-sistema.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuBarComponent,
    MenuRotasComponent,
    HomeComponent,
    UsuariosComponent,
    RelatorioComponent,
    NoticiasComponent,
    VotacaoComponent,
    TransparenciaComponent,
    CriarNoticiasComponent,
    TextEditorComponent,
    PreviewComponent,
    LoginComponent,
    RecuperarSenhaComponent,
    VolutarioComponent,
    VolutarioCadastroComponent,
    DadosPessoaisComponent,
    DadosProfissionaisComponent,
    TechTalkComponent,
    InscricaoEventoComponent,
    DadosInscricaoComponent,
    ConfirmaEmailComponent,
    EditarUsuarioComponent,
    ShowByClaimDirective,
    CadastroSistemaComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatAutocompleteModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatSelectModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatMenuModule,
    MatSidenavModule,
    MatToolbarModule,
    MatCardModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatListModule,
    MatStepperModule,
    MatTabsModule,
    MatTreeModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatBadgeModule,
    MatChipsModule,
    MatNativeDateModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatRippleModule,
    MatBottomSheetModule,
    MatDialogModule,
    MatSnackBarModule,
    MatTooltipModule,
    MatPaginatorModule,
    ScrollingModule,
    MatSortModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
