import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AutenticacaoService } from './../service/autenticacao.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recuperar-senha',
  templateUrl: './recuperar-senha.component.html',
  styleUrls: ['./recuperar-senha.component.scss']
})
export class RecuperarSenhaComponent implements OnInit {
  recuperar = new RecuperarSenha();
  emailInformado: Boolean;
  validaEmail: Boolean;
  codigoInvalido: Boolean;
  email = new FormControl('', [Validators.required, Validators.email]);
  codigo = new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(4)]);
  novaSenha = new FormControl('', [Validators.required, Validators.minLength(4)]);
  msgErroRestSeha: string;

  constructor(private auth: AutenticacaoService, private route: Router) { }

  ngOnInit(): void {
  }

  recupera() {
    if(this.recuperar.email) {
      this.auth.recuperarSenha(this.recuperar).subscribe(res => {
        this.emailInformado = true;


      })
    }

  }

  getErrorMessage(campo) {
    //validação email
    if(campo == 'email') {
      if (this.email.hasError('required')) {
        return 'Você deve informar e-mail';


      }

      return this.email.hasError('email') ? 'E-mail invalido' : '';
    }
    //validação codigo
    else if (campo == 'codigo') {

      if (this.codigo.hasError('required')) {
        return 'Você deve informar o codigo';
      }

      return this.codigo.hasError('minLength') || this.codigo.hasError('maxLength') ? '' : 'O código esta invalido';
    }
    //validação senha
    else if (campo == 'senha') {
      if (this.novaSenha.hasError('required')) {
        return 'Você deve informar a nova senha';

      }

      return this.novaSenha.hasError('minLength') ? '' : 'A senha deve conter no minimo 4 carteres';
    }

  }

  resetar() {
    if(this.novaSenha.valid && this.codigo.valid) {
      this.auth.resetar(this.recuperar).subscribe(res => {
        console.log(res);
        this.route.navigateByUrl('/login')

      }, err => {
        this.msgErroRestSeha = err.error.message
        this.codigoInvalido = true;
        this.codigo.setErrors({'incorrect': true});
      })
    } else {
      this.codigo.markAllAsTouched();
      this.novaSenha.markAllAsTouched();
    }
  }

}

class RecuperarSenha {
  email: String;
  novaSenha: String;
  codigo: Number;
}
