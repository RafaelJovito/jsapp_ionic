import { Injectable } from '@angular/core';
import { AlertController, ToastController } from 'ionic-angular';

@Injectable()
export class AlertProvider {

  constructor(
    private alertCrtl: AlertController,
    private toasCtrl: ToastController) {

  }
  
  toast(title: string, position: string): void {
    let toast = this.toasCtrl.create({ message: title, position: position, duration: 3000});
    toast.present();
  }

  alert(title: string, messagem: string):void {
    this.alertCrtl.create({
      title:title,
      message: messagem,
      buttons: ['Ok'],
      enableBackdropDismiss: false  
    }).present();
  }
  
  confirm(title: string, message: string, calback: any): void {
    this.alertCrtl.create({
      title: title,
      message: message,
      buttons: [
        { text:"Não", role: 'Cancel', handler: () => { console.log('Confirm:Say:No'); } },
        {
          text:"Sim",
          handler: () => {
            calback();
          }
        }
      ]

    }).present();
  }

}
