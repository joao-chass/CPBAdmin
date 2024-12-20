import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from './component/token/token.services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'PainelCPB';

  constructor(private auth: TokenService) {}

  validar() {
    if (this.auth.isLoggedIn()) {
      return true;
    } else {
      return false;
    }
  }
}
