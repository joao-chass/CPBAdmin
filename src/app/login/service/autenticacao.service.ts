import { Observable } from 'rxjs';
import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AutenticacaoService {

  api = environment.api;

  constructor(private http: HttpClient) { }

  logar(login): Observable<any> {
    return this.http.post(`${this.api}/autenticacao`, {
      email: login.email,
      senha: login.senha
    });
  }

  recuperarSenha(email): Observable<any>{
    return this.http.post(`${this.api}/recuperar-senha`,{
      email: email.email
    })
  }

  resetar(resetando): Observable<any>{
    return this.http.post(`${this.api}/trocar-senha`,{
      email: resetando.email,
      cod: resetando.codigo,
      novaSenha: resetando.novaSenha
    })
  }
}
