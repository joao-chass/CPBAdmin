import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro-sistema',
  templateUrl: './cadastro-sistema.component.html',
  styleUrls: ['./cadastro-sistema.component.scss']
})
export class CadastroSistemaComponent implements OnInit {
  mostratSenha = false;
  constructor() { }

  ngOnInit(): void {
  }

}
