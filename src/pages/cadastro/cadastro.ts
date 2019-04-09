import { UsuarioModel } from './../../app/models/usuarioModel';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-cadastro',
  templateUrl: 'cadastro.html',
})
export class CadastroPage {

  usuario: UsuarioModel = new UsuarioModel();

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams
  ) {
    
  }

}
