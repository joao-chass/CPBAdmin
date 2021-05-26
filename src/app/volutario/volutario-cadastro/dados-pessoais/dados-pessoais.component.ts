import { DadosPessoaisService } from './services/dados-pessoais.service';
import { map, startWith } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { DadosPessoais } from './models/dados-pessoais.model';

@Component({
  selector: 'app-dados-pessoais',
  templateUrl: './dados-pessoais.component.html',
  styleUrls: ['./dados-pessoais.component.scss'],
})
export class DadosPessoaisComponent implements OnInit {
  myControl = new FormControl();
  filteredOptions: Observable<string[]>;
  daodsPesoais = new DadosPessoais();

  constructor(private dadosPesoaisSevice: DadosPessoaisService) {}

  ngOnInit(): void {
   
  }

 

  ValidaCep() {
    this.dadosPesoaisSevice.buscaCep(this.daodsPesoais.cep).subscribe(res => {
      this.daodsPesoais.endereco = res.logradouro;
      this.daodsPesoais.uf = res.uf;
      this.daodsPesoais.bairro = res.bairro;
      this.daodsPesoais.cidade = res.localidade
      console.log(res);
    }, err => {
      console.log(err);
    })
  }


}
