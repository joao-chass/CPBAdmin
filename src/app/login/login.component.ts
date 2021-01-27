import { TokenService } from './../component/token/token.services';
import { AutenticacaoService } from './service/autenticacao.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  credenciais = new Credenciais();
  cerdenciaisInvalidas: Boolean;

  constructor(
    private auth: AutenticacaoService,
    private route: Router,
    private token: TokenService
    ) { }

  ngOnInit(): void {
    this.route.navigateByUrl('/home')
  }

  navegar() {
    this.route.navigateByUrl('/recuperar-senha')
  }

  loggar() {
    this.auth.logar(this.credenciais).subscribe(res => {
      localStorage.setItem('dados', res.usuarios.usuarioid);
      this.token.setToken(res.token);
      this.route.navigateByUrl('/home')
    }, err => {
      console.log(err.error.message);
      if(err.error.message == "Email ou senha inválida") {
        this.cerdenciaisInvalidas = true;
      }
    })
  }

}

class Credenciais {
  email: string;
  senha: string
}
