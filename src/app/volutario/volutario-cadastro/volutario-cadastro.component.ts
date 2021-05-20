import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-volutario-cadastro',
  templateUrl: './volutario-cadastro.component.html',
  styleUrls: ['./volutario-cadastro.component.scss']
})
export class VolutarioCadastroComponent implements OnInit {
  toppings = new FormControl();

  toppingList: string[] = ['Programação', 'Gerenciamento', 'RH', 'UX/UI', 'Psicologo', 'Outros']
  
  constructor() { }

  ngOnInit(): void {
  }

  formatLabel(value: number) {
    if (value == 1) {
      return 'Junior';
    } else if (value == 2) {
      return 'Pleno';
    } else if(value == 3) {
      return 'Senior';
    }  else if (value == 4) {
      return 'Master';
    } else if (value == 4) {
      return 'Jedai';
    }

    return value;
  }

}
