import { Injectable } from '@angular/core';
import { AlertController, ToastController } from 'ionic-angular';

@Injectable()
export class AlertProvider {

  constructor(
    private alertCrtl: AlertController,
    private toasCtrl: ToastController) {

  }
  
  toast(title: string, position: string): void{
    let toast = this.toasCtrl.create({ message: title, position: position, duration: 3000});
    toast.present();
  }

}
