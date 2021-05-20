import { TokenService } from './../component/token/token.services';
import { AutenticacaoService } from './service/autenticacao.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  credenciais = new Credenciais();
  cerdenciaisInvalidas: Boolean;
  email = new FormControl('', [Validators.required, Validators.email]);
  senha = new FormControl('', [Validators.required, Validators.min(3)]);

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

  getErrorMessage(campo) {
    if(campo === 'email') {
      if (this.email.hasError('required')) {
        return 'Você deve informar o e-mail';
      }
      return this.email.hasError('email') ? 'E-mail invalido' : '';
    } else if(campo === 'senha') {
      return this.email.hasError('required') ? 'Você deve informar a senha' : '';
    }
  }


  loggar() {
    if (this.email.valid && this.senha.valid) {
      this.auth.logar(this.credenciais).subscribe(res => {
        localStorage.setItem('dados', res.usuarios.usuarioid);
        this.token.setToken(res.token);
        this.route.navigateByUrl('/home')
      }, err => {
        console.log(err.error.message);
        this.cerdenciaisInvalidas = true;
        this.email.setErrors({'incorrect': true});
        this.senha.setErrors({'incorrect': true});
      })
    } else {
      this.email.markAllAsTouched();
      this.senha.markAllAsTouched();
    }
  }

}

class Credenciais {
  email: string;
  senha: string
}
