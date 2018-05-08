import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Post } from '../../interfaces/post.interface';
import { IonicPage } from 'ionic-angular/navigation/ionic-page';

@IonicPage()
@Component({

  selector: 'page-detailpost',
  templateUrl: 'detailpost.html',

})

export class DetailpostPage {

  // Post que se detallará.
  post: Post;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    // Se obtiene el post enviado por parámetro.
    this.post = navParams.get('post');

  }

}
