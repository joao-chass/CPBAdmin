import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-lista-de-presenca',
  templateUrl: './lista-de-presenca.component.html',
  styleUrls: ['./lista-de-presenca.component.scss']
})
export class ListaDePresencaComponent implements OnInit {
  selectedValue: string;
  area: string[] = ['ADM', 'RH', 'JURÍDICO', 'PROFESSOR', 'TI', 'COMUNICAÇÃO', 'MARKETING', 'MÍDIAS SOCIAIS', 'ARTES', 'EVENTOS', 'UX/UI', 'OUTRA'];

  constructor() { }

  ngOnInit(): void {
  }

}
