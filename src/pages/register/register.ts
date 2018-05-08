import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import { LoadingController } from 'ionic-angular/components/loading/loading-controller';
import { AlertController } from 'ionic-angular/components/alert/alert-controller';
import { TabsPage } from '../tabs/tabs';

@IonicPage()
@Component({

  selector: 'page-register',
  templateUrl: 'register.html',

})

export class RegisterPage {

  // Formulario de registro
  public signupForm: FormGroup;

  constructor(public navCtrl: NavController, public loadingCtrl: LoadingController, public alertCtrl: AlertController, public navParams: NavParams, private formBuilder: FormBuilder, private authProvider: AuthProvider) {

    // Se crea las validaciones del formulario de inicio de sesión.
    this.signupForm = this.formBuilder.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(6)])],
      confirmPass: ['', Validators.compose([Validators.required, Validators.minLength(6)])]
    }, { validator: this.checkIfMatchingPasswords('password', 'confirmPass') });

  }

  /**
   * Método empleado para realizar el registro y posterior inicio de sesión de un usuario.
   */
  registerEntrar(): void {

    // Se valida el formulario de ingreso
    if (this.signupForm.valid) {

      // Se muestra el loading durante el proceso de inserción.
      let loader = this.loadingCtrl.create({

        content: "Registering..."

      });

      loader.present();

      // Se llama el provider encargado de hacer el registro.
      this.authProvider.signup(this.signupForm.value.email, this.signupForm.value.password).then(() => {

          // Se oculta el loader y se redirige a la pantalla de tabs.
          loader.dismiss();

          this.navCtrl.setRoot(TabsPage);

        }, error => {

          // Se oculta el loader y se muestra un mensaje de fallo.
          this.showAlert('Error!', error.message);

          loader.dismiss();

        });

    } else {

      // Se muestra un error por validación de formularios.
      this.showAlert('Incorrect data!', 'Please check your input data.');

    }
  }

  /**
   * Método empleado para realizar validar el campo de confirmación de constraseña.
   * @param password Contraseña ingresada.
   * @param confirmPassword Confirmación de contraseña ingresada.
   */
  checkIfMatchingPasswords(password: string, confirmPassword: string) {

    return (group: FormGroup) => {

      // Se obtienen los valores de los input
      let passwordInput = group.controls[password];
      let passwordConfirmationInput = group.controls[confirmPassword];

      // Se valida que sean iguales
      if (passwordInput.value !== passwordConfirmationInput.value) {

        // Se asigna el error al input de confirmación.
        return passwordConfirmationInput.setErrors({ notEquivalent: true });

      } else {

        // Se limpia el error del input de confirmación.
        return passwordConfirmationInput.setErrors(null);

      }
    }
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
