import { CategoriaProvider } from './../../providers/categoria/categoria';
import { CategoriaModel } from './../../app/models/categoriaModel';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-adm-categorias',
  templateUrl: 'adm-categorias.html',
})
export class AdmCategoriasPage {

  lista:Array<CategoriaModel> = new Array<CategoriaModel>();

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private categoriaSrv: CategoriaProvider) {
  }

  private async _loadData(): Promise<void>{

      let categoriaResult = await this.categoriaSrv.get();

  }

}
