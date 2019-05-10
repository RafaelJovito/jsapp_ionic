import { Platform } from 'ionic-angular';
import { Injectable } from '@angular/core';
import { Camera, CameraOptions} from '@ionic-native/camera';

@Injectable()
export class CameraProvider {

  constructor(
    private camera: CameraOptions,
    private plataforma: Platform
    ) {
   
  }

}
