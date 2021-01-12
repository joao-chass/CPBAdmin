import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from './token.services';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  constructor(private auth: TokenService, public router: Router) {}
  canActivate(): boolean {
    if (this.auth.isLoggedIn()) {
      return true;
    } else {
      this.router.navigate(["/login"]);
      return false;
    }
  }
}
