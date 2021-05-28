import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dados-inscricao',
  templateUrl: './dados-inscricao.component.html',
  styleUrls: ['./dados-inscricao.component.scss']
})
export class DadosInscricaoComponent implements OnInit {
  selectedValue: string;
  area: string[] = ['ADM', 'RH', 'JURÍDICO', 'PROFESSOR', 'TI', 'COMUNICAÇÃO', 'MARKETING', 'MÍDIAS SOCIAIS', 'ARTES', 'EVENTOS', 'UX/UI', 'OUTRA'];

  validacaoDados: FormGroup;

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.validacaoDados = this._formBuilder.group({
      nome: ['', Validators.required],
      email: ['', Validators.required],
      telefone: ['', Validators.required],
      area: ['', Validators.required],
    });
  }

}
