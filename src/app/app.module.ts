import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { MomentModule } from 'angular2-moment';


 import { AboutPage } from '../pages/about/about';
 import { ContactPage } from '../pages/contact/contact';
 import { HomePage } from '../pages/home/home';
 import { TabsPage } from '../pages/tabs/tabs';


import { ChatsPage } from '../pages/chats/chats';
import { Chat, MessageType } from '../models';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


@NgModule({
  declarations: [
    MyApp,
    ChatsPage,
    TabsPage,
    AboutPage,
    ContactPage,
    HomePage
  
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    MomentModule,
   
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ChatsPage,
    TabsPage,
    AboutPage,
    ContactPage,
     HomePage,
   TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
