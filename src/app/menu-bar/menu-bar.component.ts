import { UsuariosService } from './../usuarios/services/usuarios.service';
import { TokenService } from './../component/token/token.services';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';

interface Food {
  value: number;
  viewValue: string;
}

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.scss'],
})
export class MenuBarComponent implements OnInit {
  @ViewChild('sidenav', { static: false }) sidenav: MatSidenav;

  reason = '';
  nome!: string;
  carregando: boolean = true;
  ongSelecionada = 0;
  foods: Food[] = [
    { value: 0, viewValue: 'ONG Pais Afetivos' },
    { value: 1, viewValue: 'ONG CPB' },
    { value: 2, viewValue: 'Globall ORG' },
    { value: 3, viewValue: 'ONG LGBT+' },
  ];

  constructor(
    private route: Router,
    private usuariosService: UsuariosService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.validar();
    const id = localStorage.getItem('dados');
    this.usuariosService.getuserById(id).subscribe((res) => {
      console.log(res);
      this.nome = res.responseObj[0].nome;
      this.carregando = false;
    });
  }

  close(reason: string) {
    this.reason = reason;
    this.sidenav.close();
  }

  logout() {
    localStorage.clear();
    this.route.navigateByUrl('/login');
  }

  public validar(): boolean {
    if (this.router.url != '/login' && this.route.url != '/recuperar-senha') {
      return true;
    } else {
      return false;
    }
  }
}
