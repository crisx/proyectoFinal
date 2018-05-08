import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthProvider } from '../../providers/auth/auth';
import { AlertController } from 'ionic-angular/components/alert/alert-controller';
import { LoadingController } from 'ionic-angular/components/loading/loading-controller';
import { TabsPage } from '../tabs/tabs';

@IonicPage()
@Component({

  selector: 'page-login',
  templateUrl: 'login.html',

})
export class LoginPage {

  // Formulario de login
  public loginForm: FormGroup;

  constructor(public navCtrl: NavController, public alertCtrl: AlertController, public loadingCtrl: LoadingController, public navParams: NavParams, private formBuilder: FormBuilder, private authProvider: AuthProvider) {

    // Se crea las validaciones del formulario de inicio de sesión.
    this.loginForm = this.formBuilder.group({

      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(6)])]

    });

  }

  /**
   * Método encargado de realizar el inicio de sesión.
   */
  entrar(): void {

    if (this.loginForm.valid) {

      // Se muestra el loading durante el proceso de inicio de sesión.
      let loader = this.loadingCtrl.create({

        content: "Login..."

      });

      loader.present();

      // Se llama el provider encargado de hacer el inicio de sesión.
      this.authProvider.login(this.loginForm.value.email, this.loginForm.value.password)

        .then((success) => {

          // Se oculta el loader y se redirige a la pantalla de tabs.
          loader.dismiss();

          this.navCtrl.setRoot(TabsPage);

        }, (error) => {

          loader.dismiss();
          this.showAlert('Error', error.message)

        });

    } else {

      this.showAlert('Incorrect data!', 'Please check your input data.');

    }
  }

  /**
   * Método que redirige a la pantalla de registro de usuario.
   */
  goToRegister(): void {

    this.navCtrl.push('RegisterPage');

  }

  /**
   * Método utilizado para mostrar un Alert.
   * @param title Título del Alert a mostrar.
   * @param message Mensaje del Alert a mostrar.
   */
  showAlert(title: string, message: string) {

    let alert = this.alertCtrl.create({

      title: title,
      subTitle: message,
      buttons: ['OK']

    });

    alert.present();

  }

}
