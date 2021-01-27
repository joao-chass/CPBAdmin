import { TransparenciaService } from './services/transparencia.service';
import { Component, OnInit } from '@angular/core';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-transparencia',
  templateUrl: './transparencia.component.html',
  styleUrls: ['./transparencia.component.scss']
})
export class TransparenciaComponent implements OnInit {
  dadosTransparencia = [];

  foods = [
    {value: 'saida', viewValue: 'Saida'},
    {value: 'entrada', viewValue: 'Entrada'}
  ];

  trandsparencia = new Transparencia();



  total: number = 0;
  calculando: boolean;
  constructor(private transparenciaService: TransparenciaService) { }

  ngOnInit(): void {
    this.pegarDados();
  }

  novoDado() {
    this.trandsparencia.ususario = localStorage.getItem('dados');
    this.transparenciaService.trasnparencia(this.trandsparencia).subscribe(res =>{
      this.pegarDados()
      this.dadosTransparencia = [];
    }, err => {
      console.log(err);
    });
  }

  pegarDados() {
    this.transparenciaService.getTrasnparencia().subscribe(res => {
      this.dadosTransparencia = res;
      console.log(res);
      this.calculando = true;
      this.calcularTotal();
    })
  }

  calcularTotal() {
    for (let i = 0; i < this.dadosTransparencia.length; i++) {
      let number = parseInt(this.dadosTransparencia[i].valor)
      if(this.dadosTransparencia[i].operacao == "entrada") {
        this.total = number + this.total;
      } else {
        console.log(number);
        this.total = this.total - number;
      }

    }
  }

}

class Transparencia{
  ususario: string;
  valor: number;
  empresa: string;
  data: string;
  operacao: string;
}
