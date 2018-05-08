import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { Camera } from '@ionic-native/camera';
import { credentials } from './credentials';
import { AuthProvider } from '../providers/auth/auth';
import { PostsProvider } from '../providers/posts/posts';
import { HttpClientModule } from '@angular/common/http';

import { MyApp } from './app.component';
import { ListPage } from '../pages/list/list';
import { PhotoPage } from '../pages/photo/photo';
import { TabsPage } from '../pages/tabs/tabs';

import {LoginPage} from "../pages/login/login";

@NgModule({
  declarations: [
    MyApp,
    ListPage,
    PhotoPage,
    TabsPage,
    LoginPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(credentials),
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ListPage,
    PhotoPage,
    TabsPage,
    LoginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    AuthProvider,
    Camera,
    PostsProvider
  ]
})

export class AppModule { }
