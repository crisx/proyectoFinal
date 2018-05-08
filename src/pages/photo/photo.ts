import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { ToastController } from 'ionic-angular/components/toast/toast-controller';

@Component({

  selector: 'page-home',
  templateUrl: 'photo.html'

})

export class PhotoPage {

  image: string = "";

  constructor(public navCtrl: NavController, public toastCtrl: ToastController, public navParams: NavParams, public camera: Camera) { }

  /**
   * Método empleado para tomar una fotografía.
   */
  takePicture(): void {

    // Se establecen los parámetros de la cámara.
    const options: CameraOptions = {

      quality: 95,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      sourceType: this.camera.PictureSourceType.CAMERA,
      mediaType: this.camera.MediaType.PICTURE,
      saveToPhotoAlbum: false

    }

    // Se llama la función que abre la cámara.
    this.camera.getPicture(options).then((imageData) => {

      // Se muestra la foto tomada.
      this.image = 'data:image/jpeg;base64,' + imageData;

    }, (err) => {

      console.log(err);

    });
  }

}
