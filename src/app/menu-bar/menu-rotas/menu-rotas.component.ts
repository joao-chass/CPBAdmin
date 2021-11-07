import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-rotas',
  templateUrl: './menu-rotas.component.html',
  styleUrls: ['./menu-rotas.component.scss']
})
export class MenuRotasComponent implements OnInit {
  rotas = [
    {
      rota: '/usuarios',
      icone: 'account_circle',
      nome: 'Usuario',
      permissoesid: 'Edição Usuarios'
    }, {
      rota: '/relatorio',
      icone: 'insert_chart_outlined',
      nome: 'Relatorios',
      permissoesid: 'Relatorios'
    }, {
      rota: '/noticia',
      icone: 'newspaper',
      nome: 'Noticia',
      permissoesid: 'Noticias'
    }, {
      rota: '/criar-votacao',
      icone: 'emoji_events',
      nome: 'Votação',
      permissoesid: 'Votação'
    }, {
      rota: '/transparencia',
      icone: 'request_quote',
      nome: 'Transparencia',
      permissoesid: 'Transparencia'
    }, {
      rota: '/voluntario',
      icone: 'badge',
      nome: 'Área do voluntário',
      permissoesid: 'Transparencia'
    }
  ]
  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  logout() {
    localStorage.clear();
    this.route.navigateByUrl('/login');
  }


}
