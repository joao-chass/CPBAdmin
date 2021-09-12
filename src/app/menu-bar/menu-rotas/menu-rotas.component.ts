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
      rota: '/home',
      icone: 'home',
      nome: 'Home'
    },
    {
      rota: '/usuarios',
      icone: 'account_circle',
      nome: 'Usuario'
    }, {
      rota: '/relatorio',
      icone: 'insert_chart_outlined',
      nome: 'Relatorios'
    }, {
      rota: '/noticia',
      icone: 'book',
      nome: 'Noticia'
    }, {
      rota: '/criar-votacao',
      icone: 'emoji_events',
      nome: 'Votação'
    }, {
      rota: '/transparencia',
      icone: 'request_quote',
      nome: 'Transparencia'
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
