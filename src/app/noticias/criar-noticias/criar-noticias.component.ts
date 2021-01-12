import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import {map, startWith} from 'rxjs/operators';

@Component({
  selector: 'app-criar-noticias',
  templateUrl: './criar-noticias.component.html',
  styleUrls: ['./criar-noticias.component.scss']
})
export class CriarNoticiasComponent implements OnInit {
  myControl = new FormControl();
  options: string[] = ['One', 'Two', 'Three'];
  filteredOptions: Observable<string[]>;
  previewData = new PreviewData();
  base64textString;
  titulo;

  constructor() { }

  ngOnInit(): void {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
  }

  teste(ev) {
    this.previewData.titulo = this.titulo;
    this.previewData.data =  this.dataAtualFormatada();
    this.previewData.noticia = ev;
  }

  onUploadChange(evt: any) {
    this.base64textString = '';
    const file = evt.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = this.handleReaderLoaded.bind(this);
      reader.readAsBinaryString(file);
    }
  }

  handleReaderLoaded(e) {
    this.previewData.imagem = 'data:image/png;base64,' + btoa(e.target.result);
  }

   dataAtualFormatada(){
    let data = new Date(),
        dia  = data.getDate().toString(),
        diaF = (dia.length == 1) ? '0'+dia : dia,
        mes  = (data.getMonth()+1).toString(), //+1 pois no getMonth Janeiro começa com zero.
        mesF = (mes.length == 1) ? '0'+mes : mes,
        anoF = data.getFullYear();
    return diaF+"/"+mesF+"/"+anoF;
}

}

class PreviewData {
  imagem: String;
  titulo: String;
  noticia:String
  data: string;
  tema: any;
}
