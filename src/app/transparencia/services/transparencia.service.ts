import { environment } from './../../../environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TransparenciaService {

  api = environment.api

  constructor(private http: HttpClient) { }

  trasnparencia(dados): Observable<any> {
    return this.http.post<any>(`${this.api}/transparencia`, {
      ususario: dados.ususario,
      valor: dados.valor,
      empresa: dados.empresa,
      data: dados.data,
      operacao: dados.operacao
    });
  }

  getTrasnparencia(): Observable<any> {
    return this.http.get(`${this.api}/transparencia`)
  }
}
