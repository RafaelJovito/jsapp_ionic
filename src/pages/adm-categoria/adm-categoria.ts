import { CameraProvider } from './../../providers/camera/camera';
import { CategoriaModel } from './../../app/models/categoriaModel';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController, Platform } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-adm-categoria',
  templateUrl: 'adm-categoria.html',
})
export class AdmCategoriaPage {

  categoria: CategoriaModel;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public actionSheetCtrl: ActionSheetController,
    public platform: Platform,
    private cameraSrv: CameraProvider) {
    
    let _categ = this.navParams.get('_categoria');
    if (_categ)
      this.categoria = <CategoriaModel>_categ;
    else    
      this.categoria = new CategoriaModel();
  }

  getPictureOption(): void {
    let actinShet = this.actionSheetCtrl.create({
      title: 'Adicinar foto',
      buttons: [
        { 
          text: 'Tirar Foto', handler:() => {
          this.cameraSrv.takePicture(photo => {
            this.categoria.foto = photo;
          });
        }, 
          icon: this.platform.is('ios') ? null : 'camera' 
        },
        {
          text: 'Pegar galeria',
          handler: (() =>{
            this.cameraSrv.getPictureFromGalery(photo => {
              this.categoria.foto = photo;
            });
          }),
          icon: this.platform.is('ios') ? null : 'images'
        },
        {
          text: 'Cancelar',
          role: 'destrutive',
          icon: this.platform.is('ios')? null : 'close',
          handler: () => {
            //Cancela a ação
          }
        }
      ]
    });
    actinShet.present();
  }

}
