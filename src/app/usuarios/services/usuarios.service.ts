import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  api = environment.api;

  constructor(private http: HttpClient) { }

  getUsers(): Observable<any> {
    return this.http.get(`${this.api}/get-cadastros`)
  }

  getuserById(id): Observable<any> {
    return this.http.get(`${this.api}/get-cadastro-by-id/${id}`)
  }

  editUser(dataUser, id, permissoes): Observable<any> {
    return this.http.put(`${this.api}/edit-user/${id}`, {
      statususuario: dataUser,
      usuarioPermissoes: permissoes
    })
  }

  getPermissoes(): Observable<any> {
    return this.http.get(`${this.api}/get-permissoes`)
  }

  filtrarUsuarios(permissoes): Observable<any> {
    return this.http.post(`${this.api}/query-usuario`, { permissoes})
  }

}
