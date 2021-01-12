import { NoticiasService } from './services/noticias.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.scss']
})
export class NoticiasComponent implements OnInit {
  noticia = new Noticia();
  constructor(private noticiasService: NoticiasService) { }

  ngOnInit(): void {
    this.noticiasService.getMaterias().subscribe(res => {
      this.noticia = res;
    })
  }


}

class Noticia {
  noticiaid: Number;
  titulo: String;
  noticiadata: String;
  imagem: string;
  categoria: string;
}
