import decode from 'jwt-decode';
import { stringify } from 'querystring';

export class TokenModel {
  private token: string;
  private tokenPayload: any;
  private Roles: Array<any>;
  public usuarioid: string;


  constructor(token: string) {
    this.SetTokenString(token);
  }

  GetTokenString(): string {
    return this.token;
  }

  HasRole(role: string) {
    return this.Roles.some(x => role === x);
  }

  SetTokenString(token: string) {
    if (!token) {
      token = '';
    }
    if (token !== this.token) {
      this.Roles = [];
      this.token = token;
      this.decodePayload();
    }
  }

  private decodePayload() {
    try {
      this.tokenPayload = decode(this.token);
      this.usuarioid = this.tokenPayload.usuarioid;

      const isRoleArray = Array.isArray(this.tokenPayload.roles);

      if (isRoleArray) {
        this.tokenPayload.roles.forEach(role => {
          this.Roles.push(role.nome);
        });
      } else {
        this.Roles.push(this.tokenPayload.role);
      }

      localStorage.setItem('roles', JSON.stringify(this.Roles))

    } catch (error) {

    }
  }
}
