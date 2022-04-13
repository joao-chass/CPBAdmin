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
  permissoes = [
    {name: 'Admin', completed: false, color: 'primary'},
    {name: 'Redatores', completed: false, color: 'accent'},
    {name: 'Convidados', completed: false, color: 'warn'}
  ]

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


}

export interface UsuarioElemento {
  nome: string;
  email: number;
  cpf: string;
  usuarioid: number;
}
