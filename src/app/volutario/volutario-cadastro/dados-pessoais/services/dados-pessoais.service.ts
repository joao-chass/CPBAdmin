import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DadosPessoaisService {

  apiCep = 'https://viacep.com.br';
  constructor(private http: HttpClient) { }

  // buscaCep(cep): Observable<any> {
  //   var request = new XMLHttpRequest();
  //   return this.http.get(`${this.apiCep}/wsl/${cep}/json`, 
  //   );
  // }

  buscaCep(cep: any): any {
    return new Observable((x)=>{
    let request = new XMLHttpRequest();
    request.open("get", `https://viacep.com.br/ws/${cep}/json/`, true);
    request.send();
    request.onload = function () {
    var data = JSON.parse(this.response);
    x.next(data)
    }
    })
    }


}
