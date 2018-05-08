import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AuthProvider } from '../providers/auth/auth';

import {LoginPage} from "../pages/login/login";
import {TabsPage} from "../pages/tabs/tabs";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  rootPage:any = LoginPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, public authProvider: AuthProvider) {

    platform.ready().then(() => {

      statusBar.styleDefault();
      splashScreen.hide();

      // Se realiza la validación de usuario en sesión para redireccionar según el caso.
      if (this.authProvider.getStatus()) {

        this.rootPage = TabsPage;

      } else {

        this.rootPage = 'LoginPage';

      }

    });
  }
}
