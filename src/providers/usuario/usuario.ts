import { HttpResulModel } from './../../app/models/HttpResultModel';
import { ConfigHelper } from './../../app/helpers/configHelper';
import { HttpProvider } from './../http/http';
import { UsuarioModel } from './../../app/models/usuarioModel';
import { Injectable } from '@angular/core';
import { ProviderBase } from '../../app/base/providerBase';

@Injectable()
export class UsuarioProvider extends ProviderBase<UsuarioModel>{

  url: string = `${ConfigHelper.Url}usuario`;

  constructor(public http: HttpProvider) {
    super(`${ConfigHelper.Url}usuario`, http);
  }

  async autenticate(email: string, senha: string): Promise<HttpResulModel>{
    return this.http.post(`$(this.url)/autenticar`, {email: email, senha: senha});
  }

  async register(usuario: UsuarioModel): Promise<HttpResulModel> {
    return this.http.post(`${this.url}/register`, usuario);
  }

  static RegisterLogin(result: any) {
    localStorage.setItem(ConfigHelper.storageKeys.token, result.token);
    localStorage.setItem(ConfigHelper.storageKeys.user, JSON.stringify(result.usuario));
  }

  static get GetTokenAccess(): string {
    return localStorage.getItem(ConfigHelper.storageKeys.token);
  }

  static get IsLogado(): boolean {
    return (localStorage.getItem(ConfigHelper.storageKeys.token) != undefined);
  }
}
