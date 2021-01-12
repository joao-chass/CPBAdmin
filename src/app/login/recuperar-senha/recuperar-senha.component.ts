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

  constructor(private auth: AutenticacaoService, private route: Router) { }

  ngOnInit(): void {
  }

  recupera() {
    this.auth.recuperarSenha(this.recuperar).subscribe(res => {
      this.emailInformado = true;
      console.log(res);

    })
  }

  resetar() {
    this.auth.resetar(this.recuperar).subscribe(res => {
      console.log(res);
      this.route.navigateByUrl('/login')

    })
  }

}

class RecuperarSenha {
  email: String;
  novaSenha: String;
  codigo: Number;
}
