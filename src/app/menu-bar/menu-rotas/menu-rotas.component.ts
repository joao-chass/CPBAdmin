import { Component, OnInit } from '@angular/core';

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
      rota: '/edicao-usuario',
      icone: 'account_circle',
      nome: 'Usuario'
    },{
      rota: '/relatorio',
      icone: 'insert_chart_outlined',
      nome: 'Relatorios'
    },{
      rota: '/noticia',
      icone: 'book',
      nome: 'Noticia'
    },{
      rota: '/criar-votacao',
      icone: 'emoji_events',
      nome: 'Votação'
    },{
      rota: '/transparencia',
      icone: 'request_quote',
      nome: 'Transparencia'
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
