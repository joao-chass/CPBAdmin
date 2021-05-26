import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DadosPessoaisService {

  apiCep = 'https://viacep.com.br';
  constructor(private http: HttpClient) { }

  buscaCep(cep): Observable<any> {
    return this.http.get(`${this.apiCep}/wsl/${cep}/json`,
    );
  }


}
