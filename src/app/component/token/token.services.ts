import { TokenModel } from './token-models';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  private key = 'token';
  private keyRefreshToken = '_refresh_tokens_';

  constructor() { }

  getToken(): TokenModel {
    return this.getTokenByKey('bearer');
  }

  getTokens(): TokenModel[] {
    const tokens = [];
    const tokenStrings = this._getTokens();
    Object.values<string>(tokenStrings).forEach(token => {
      tokens.push(new TokenModel(token));
    });
    return tokens;
  }

  getTokenByKey(key: string):TokenModel {
    return new TokenModel(this._getTokens()[key]);
  }

  getRefreshToken(): string {
    return this._getRefreshTokens()['bearer'];
  }

  getRefreshTokenByKey(key: string): string {
    return this._getRefreshTokens()[key];
  }

  setToken(token: string) {
    this.setTokenByKey('bearer', token);
  }

  setTokenByKey(key: string, token: string, refreshToken: string = null) {
    const tokens = this._getTokens();
    tokens[key] = token;
    this.setRefreshTokenByKey(key, refreshToken);
    localStorage.setItem(this.key, JSON.stringify(tokens));
  }

  clearTokens() {
    localStorage.setItem(this.key, JSON.stringify({}));
    localStorage.setItem(this.keyRefreshToken, JSON.stringify({}));
  }

  private _getTokens() {
    let tokens = localStorage.getItem(this.key);
    if (tokens === null || tokens === undefined) {
      tokens = JSON.stringify({});
      localStorage.setItem(this.key, tokens);
    }
    return JSON.parse(tokens);
  }

  setRefreshTokenByKey(key: string, refreshToken: string = null) {
    const rtokens = this._getRefreshTokens();
    rtokens[key] = refreshToken;
    localStorage.setItem(this.keyRefreshToken, JSON.stringify(rtokens));
  }

  private _getRefreshTokens() {
    let rtokens = localStorage.getItem(this.keyRefreshToken);
    if (rtokens === null || rtokens === undefined) {
      rtokens = JSON.stringify({});
      localStorage.setItem(this.keyRefreshToken, rtokens);
    }
    return JSON.parse(rtokens);
  }


  isLoggedIn() {
    const token = this.getToken();
    if (token && token.GetTokenString()) {
      return true;
    } else {
      return false;
    }
  }
}
