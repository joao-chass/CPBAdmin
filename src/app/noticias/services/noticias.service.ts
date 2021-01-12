import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  api = environment.api

  constructor(private http: HttpClient) { }

  criarMateria(noticia): Observable<any> {
    return this.http.post(`${this.api}/noticia`, {
       noticia_titulo: noticia.titulo,
      noticia_conteudo: noticia.noticia,
      noticia_data: noticia.data,
      noticia_imagem: noticia.imagem,
      noticia_categoria: noticia.tema
    })
  }
}
