import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuariosService } from '../services/usuarios.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-editar-usuario',
  templateUrl: './editar-usuario.component.html',
  styleUrls: ['./editar-usuario.component.scss']
})
export class EditarUsuarioComponent implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute,
    private usuarioService: UsuariosService,
    private location: Location) {
  }

  dadosUsuario: any;
  carregando: boolean = true;
  acessos = [
    { id: 1, name: 'Edição Usuarios' },
    { id: 2, name: 'Relatorios' },
    { id: 3, name: 'Noticias' },
    { id: 4, name: 'Votação' },
    { id: 5, name: 'Transparencia' },
  ]

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(queryParams => {
      let id = queryParams.get("id");

      this.usuarioService.getuserById(id).subscribe(res => {
        this.dadosUsuario = res[0];
        this.carregando = false;
      });

    })
  }

  backClicked() {
    this.location.back();
  }

  editUsuario() {
    this.usuarioService.editUser(this.dadosUsuario.statususuario, this.dadosUsuario.usuarioid).subscribe(res => {
      console.log(res);
    })
  }

}
