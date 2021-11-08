import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navegacao-voluntario',
  templateUrl: './navegacao-voluntario.component.html',
  styleUrls: ['./navegacao-voluntario.component.scss']
})
export class NavegacaoVoluntarioComponent implements OnInit {

  constructor() { }

  folders = [
    { icone: 'menu_book', name: 'Cursos' },
    { icone: 'campaign', name: 'Tech-talk' },
    { icone: 'groups', name: 'Equipes' },
    { icone: 'folder_special', name: 'Projetos' },
    { icone: 'integration_instructions', name: 'Documentações' },
    { icone: 'dynamic_form', name: 'Bootcamps' },
    { icone: 'chat', name: 'Mensagens' },
    { icone: 'military_tech', name: 'Ranking' },
    { icone: 'art_track', name: 'Artigos' },
  ]

  ngOnInit(): void {
  }

}
