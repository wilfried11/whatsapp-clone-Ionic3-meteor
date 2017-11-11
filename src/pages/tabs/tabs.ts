// import { Component } from '@angular/core';

// import { AboutPage } from '../about/about';
// import { ContactPage } from '../contact/contact';
// import { HomePage } from '../home/home';

// @Component({
//   templateUrl: 'tabs.html'
// })
// export class TabsPage {

//   tab1Root = HomePage;
//   tab2Root = AboutPage;
//   tab3Root = ContactPage;

//   constructor() {

//   }
// }


import { Component } from '@angular/core';

// navcontroler pour le point d'entree
import { NavController } from 'ionic-angular';
import { ChatsPage } from '../chats/chats';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  chatTabRoot = ChatsPage;
 
  constructor(public navCtrl: NavController) {

  }
}
