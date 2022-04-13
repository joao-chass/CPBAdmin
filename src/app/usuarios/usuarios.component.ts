import { UsuariosService } from './services/usuarios.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss']
})
export class UsuariosComponent implements OnInit {
  info;
  displayedColumns: string[] = ['id', 'iconUser', 'nome', 'email', 'cpf', 'statusUsuario'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);;
  numeroDeUsuario!: number;
  queryStatusUsuario!: string;
  permissoes = [
    {name: 'Edição Usuarios', id: 1, permisao: false},
    {name: 'Relatorios', id: 2, permisao: false},
    {name: 'Noticias', id: 3, permisao: false},
    {name: 'Votação', id: 4, permisao: false},
    {name: 'Transparencia', id: 5, permisao: false},
  ]

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    private usuariosService: UsuariosService,
    private router: Router,
    iconRegistry: MatIconRegistry, sanitizer: DomSanitizer,
    private _snackBar: MatSnackBar
  ) {
    iconRegistry.addSvgIcon(
      'my-star-icon',
      sanitizer.bypassSecurityTrustResourceUrl('assets/svg/filter.svg'));
  }

  ngOnInit(): void {
    this.buscaUsers();
  }


  buscaUsers() {
    this.usuariosService.getUsers().subscribe(res => {
      this.numeroDeUsuario = res.length;
      this.dataSource = new MatTableDataSource<UsuarioElemento>(res);
      this.dataSource.paginator = this.paginator;

    });
  }

  editarUsuario(info) {
    this.router.navigateByUrl(`/edicao-usuario/${info.usuarioid}`);
  }

  formatCnpjCpf(value)
    {



        const cnpjCpf = value.replace(/\D/g, '');

        if (cnpjCpf.length === 11) {
          return cnpjCpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, "\$1.\$2.\$3-\$4");
        }

        if(cnpjCpf.length === 14) {
          return cnpjCpf.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/g, "\$1.\$2.\$3/\$4-\$5");
        }

        return '000.000.000-00'


    }

    filtroPermissoes() {
      const filtro = []
      this.permissoes.forEach(x => {
        if(x.permisao) {
          filtro.push(x.id);
        }
      })

      if(filtro.length) {
        this.usuariosService.filtrarUsuarios(filtro).subscribe(res => {
          this.dataSource = new MatTableDataSource<UsuarioElemento>(res);
          this.dataSource.paginator = this.paginator;
        })
      } else {
        this.openSnackBar('prrencha os campos', 'ok')
      }


    }

    limparFiltorsPermissao() {
      this.permissoes.forEach(x => x.permisao = false);
      this.buscaUsers();
    }


    buscarStatusUsuarios() {
      if(this.queryStatusUsuario) {
        const filterValue = this.queryStatusUsuario;
        this.dataSource.filter = filterValue.trim().toLowerCase();
      } else {
        this.openSnackBar('prrencha os campos', 'ok')
      }
    }


    limparTodosOsFiltros() {
      this.queryStatusUsuario = '';
      this.limparFiltorsPermissao();
    }

    openSnackBar(message: string, action: string) {
      this._snackBar.open(message, action, {
        duration: 2000,
      });
    }

}

const ELEMENT_DATA: UsuarioElemento[] = [];

export interface UsuarioElemento {
  nome: string;
  email: number;
  cpf: string;
  usuarioid: number;
  statususuario: boolean;
}
