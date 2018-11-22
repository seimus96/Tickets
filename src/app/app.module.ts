import { ReadOneTicketPage } from './../pages/read-one-ticket/read-one-ticket';
import { InsertTicketPage } from './../pages/insert-ticket/insert-ticket';
import { ReadTicketsPage } from './../pages/read-tickets/read-tickets';
import { RegisterPage } from './../pages/register/register';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { CharactersProvider } from '../providers/characters/characters';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    RegisterPage,
    InsertTicketPage,
    ReadTicketsPage,
    ReadOneTicketPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    RegisterPage,
    InsertTicketPage,
    ReadTicketsPage,
    ReadOneTicketPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    CharactersProvider
  ]
})
export class AppModule {}
