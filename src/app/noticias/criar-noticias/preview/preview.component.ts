import { NoticiasService } from './../../services/noticias.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.scss']
})
export class PreviewComponent implements OnInit {
  @Input() previewData = new PreviewData;
  constructor(private notciaService: NoticiasService) { }

  ngOnInit(): void {
  }

  publicaNoticia() {
    this.notciaService.criarMateria(this.previewData).subscribe(res=> {
    })
  }
}

class PreviewData {
  imagem: String;
  titulo: String;
  noticia:String
  data: Date;
  tema: String;
}
