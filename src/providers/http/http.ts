import { HttpResulModel } from './../../app/models/HttpResultModel';
import { SpinnerProvider } from './../spinner/spinner';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AlertProvider } from '../alert/alert';
import { NetworkProvider } from '../network/network';

@Injectable()
export class HttpProvider {

  constructor(
    private http: HttpClient,
    private spinnerSrv: SpinnerProvider,
    private alertSrv: AlertProvider,
    private networkSrv: NetworkProvider
  ) {

  }

  public get(url: string): Promise<HttpResulModel> {
    this.spinnerSrv.Show("Carregando os dados...");
    return new Promise((resolve) => {
      if (this.networkSrv.IsOnLine) {
        this.http.get(url)
          .subscribe(_res => {
            this.spinnerSrv.Hide();
            resolve({ success: true, data: _res, err: undefined });
          }, err => {
            this.spinnerSrv.Hide();
            this.alertSrv.toast('Não foi possível consultar os dados, verifique sua conexão e tente novamente', 'bottom');
            resolve({ success: false, data: undefined, err: err });
          });
      }
      else {
        this.alertSrv.toast('Você está Offline, e infelizmente não pode ser carregado os dados!', 'bottom');
        resolve({ success: true, data: [], err: undefined });
      }
    });
  }

}