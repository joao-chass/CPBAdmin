import { UsuariosService } from './services/usuarios.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss']
})
export class UsuariosComponent implements OnInit {
  info;
  displayedColumns: string[] = ['id', 'iconUser', 'nome', 'email', 'cpf', 'statusUsuario'];
  dataSource;
  numeroDeUsuario!: number;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    private usuarios: UsuariosService,
    private router: Router,
    iconRegistry: MatIconRegistry, sanitizer: DomSanitizer
  ) {
    iconRegistry.addSvgIcon(
      'my-star-icon',
      sanitizer.bypassSecurityTrustResourceUrl('assets/svg/filter.svg'));
  }

  ngOnInit(): void {
    this.usuarios.getUsers().subscribe(res => {
      this.numeroDeUsuario = res.length;
      console.log(res);

      this.dataSource = new MatTableDataSource<UsuarioElemento>(res);
      this.dataSource.paginator = this.paginator;
    });
  }

  editarUsuario(info) {
    this.router.navigateByUrl(`/edicao-usuario/${info.usuarioid}`);
  }


}

export interface UsuarioElemento {
  nome: string;
  email: number;
  cpf: string;
  usuarioid: number;
}
