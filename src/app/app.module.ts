import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { LongPressModule } from 'ionic-long-press';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ArquivadasPage } from '../pages/arquivadas/arquivadas';


import { AppService } from '../providers/app/app';
import {HttpClient, HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ArquivadasPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    LongPressModule,
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ArquivadasPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AppService
  ]
})
export class AppModule {}
