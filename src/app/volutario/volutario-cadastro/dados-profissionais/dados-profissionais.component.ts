import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-dados-profissionais',
  templateUrl: './dados-profissionais.component.html',
  styleUrls: ['./dados-profissionais.component.scss']
})
export class DadosProfissionaisComponent implements OnInit {
  toppings = new FormControl();
  ongs = new FormControl();

  toppingList: string[] = ['Programação', 'Gerenciamento', 'RH', 'UX/UI', 'Psicologo', 'Outros'];

  ong: string[] = ['Globalll', 'Ong', 'LBT', 'Todos']

  nivel;
  constructor() { }

  ngOnInit(): void {
  }

}
