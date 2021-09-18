import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuariosService } from '../services/usuarios.service';
import { Location } from '@angular/common';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-editar-usuario',
  templateUrl: './editar-usuario.component.html',
  styleUrls: ['./editar-usuario.component.scss']
})
export class EditarUsuarioComponent implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute,
    private usuarioService: UsuariosService,
    private location: Location,
    private _snackBar: MatSnackBar) {
  }

  dadosUsuario: any;
  carregando: boolean = true;
  acessos = [
    { id: 1, permisao: false, name: 'Edição Usuarios' },
    { id: 2, permisao: false, name: 'Relatorios' },
    { id: 3, permisao: true, name: 'Noticias' },
    { id: 4, permisao: false, name: 'Votação' },
    { id: 5, permisao: false, name: 'Transparencia' },
  ];
  teste;

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(queryParams => {
      let id = queryParams.get("id");

      this.usuarioService.getuserById(id).subscribe(res => {
        this.dadosUsuario = res[0];
        this.carregando = false;
      });

    })
  }

  onChange(event: any) {
    console.log(event.source.value); // will contain "hello"
    console.log(event.source.checked); // will contain the checked state of the checkbox
  }

  backClicked() {
    this.location.back();
  }

  toggle(event) {
    console.log(event.source.value);
  }

  editUsuario() {
    console.log(this.acessos);

    this.usuarioService.editUser(this.dadosUsuario.statususuario, this.dadosUsuario.usuarioid, this.acessos).subscribe(res => {
      this.openSnackBar(res.message);
    })
  }


  openSnackBar(message: string) {
    this._snackBar.open(message, 'ok', {
      duration: 2000,
    });
  }

}
