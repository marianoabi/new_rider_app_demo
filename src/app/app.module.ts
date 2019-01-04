import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { Geolocation } from '@ionic-native/geolocation';
import { IonicStorageModule } from '@ionic/storage';
import { ReservationPage } from '../pages/reservation/reservation';
import { BookingModalPage } from '../pages/booking-modal/booking-modal';

import { HttpModule } from '@angular/http';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';
import { FirebaseProvider } from './../providers/firebase/firebase';
import { ConfirmationPage } from '../pages/confirmation/confirmation';
import { DatePipe } from '@angular/common';

const firebaseConfig = {
  apiKey: "AIzaSyClT4eKkAOaKeP9Yk9VBI-C8pqeVr04gUw",
  authDomain: "rider-app-demo-1545033568387.firebaseapp.com",
  databaseURL: "https://rider-app-demo-1545033568387.firebaseio.com",
  projectId: "rider-app-demo-1545033568387",
  storageBucket: "rider-app-demo-1545033568387.appspot.com",
  messagingSenderId: "678080157388"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    ReservationPage,
    BookingModalPage,
    ConfirmationPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(firebaseConfig),
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    ReservationPage,
    BookingModalPage,
    ConfirmationPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Geolocation,
    FirebaseProvider,
    DatePipe
  ]
})
export class AppModule {}
