import { DadosPessoaisService } from './services/dados-pessoais.service';
import { map, startWith } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dados-pessoais',
  templateUrl: './dados-pessoais.component.html',
  styleUrls: ['./dados-pessoais.component.scss'],
})
export class DadosPessoaisComponent implements OnInit {
  myControl = new FormControl();
  filteredOptions: Observable<string[]>;
  estados = [
    'Acre - AC',
    'Alagoas - AL',
    'Amapá - AP',
    'Amazonas - AM',
    'Bahia - BA',
    'Ceará - CE',
    'Distrito Federal - DF',
    'Espírito Santo - ES',
    'Goiás - GO',
    'Maranhão - MA',
    'Mato Grosso - MT',
    'Mato Grosso do Sul - MS',
    'Minas Gerais - MG',
    'Pará - PA',
    'Paraíba - PB',
    'Paraná - PR',
    'Pernambuco - PE',
    'Piauí - PI',
    'Rio de Janeiro - RJ',
    'Rio Grande do Norte - RN',
    'Rio Grande do Sul - RS',
    'Rondônia - RO',
    'Roraima - RR',
    'Santa Catarina - SC',
    'São Paulo - SP',
    'Sergipe - SE',
    'Tocantins - TO',
  ];

  cep;

  constructor(private dadosPesoaisSevice: DadosPessoaisService) {}

  ngOnInit(): void {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map((value) => this._filter(value))
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.estados.filter((option) =>
      option.toLowerCase().includes(filterValue)
    );
  }

  ValidaCep() {
    this.dadosPesoaisSevice.buscaCep(this.cep).subscribe(res => {
      console.log(res);
    }, err => {
      console.log(err);
    })
  }


}
