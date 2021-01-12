import decode from 'jwt-decode';

export class TokenModel {
    private token: string;
    private tokenPayload: any;
    private Roles: Array<string>;
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

        const isRoleArray = Array.isArray(this.tokenPayload.role);

        if (isRoleArray) {
          this.tokenPayload.role.forEach(role => {
            this.Roles.push(role);
          });
        } else {
          this.Roles.push(this.tokenPayload.role);
        }
      } catch (error) {

      }
    }
}
