import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perfil-voluntario',
  templateUrl: './perfil-voluntario.component.html',
  styleUrls: ['./perfil-voluntario.component.scss']
})
export class PerfilVoluntarioComponent implements OnInit {

  constructor() { }

  conquistas = [
    { nome: 'cursos' },
    { nome: 'lider' },
    { nome: 'pc' },
    { nome: 'professor' }]


  ongs = [
    { nome: 'Pais afetivos', img: 'http://paisafetivos.org/storage/2020/06/LOGO-COLORIDA-PRETO-300x100.png' },
    { nome: 'Pais afetivos', img: 'https://paisafetivos.org/storage/2020/04/C%C3%B3pia-de-logo-ong-preto2-1.png' },
    { nome: 'CPB', img: 'https://conselhodobrasil.org/wp-content/uploads/2020/07/logo-CPB-fundo-transparente-300x169.png' }
  ]

  ngOnInit(): void {
  }

}
