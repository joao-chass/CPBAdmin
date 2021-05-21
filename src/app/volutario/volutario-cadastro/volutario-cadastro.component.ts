import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-volutario-cadastro',
  templateUrl: './volutario-cadastro.component.html',
  styleUrls: ['./volutario-cadastro.component.scss']
})
export class VolutarioCadastroComponent implements OnInit {
  toppings = new FormControl();
  ongs = new FormControl();

  toppingList: string[] = ['Programação', 'Gerenciamento', 'RH', 'UX/UI', 'Psicologo', 'Outros'];

  ong: string[] = ['Globalll', 'Ong', 'LBT', 'Todos']

  nivel;
  
  constructor() { }

  ngOnInit(): void {
  }

  enviar() {
    console.log(this.nivel);
  }
}
