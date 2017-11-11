webpackJsonp([0],{

/***/ 139:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 139;

/***/ }),

/***/ 182:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 182;

/***/ }),

/***/ 228:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// import { Component } from '@angular/core';
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
// import { AboutPage } from '../about/about';
// import { ContactPage } from '../contact/contact';
// import { HomePage } from '../home/home';
// @Component({
//template:/*ion-inline-start:"D:\ionic\Projet\Whatsapp\src\pages\tabs\tabs.html"*/`<ion-tabs color="whatsapp">\n    <ion-tab [root]="chatTabRoot" tabIcon="chatboxes"></ion-tab>\n    <ion-tab tabIcon="contacts"></ion-tab>\n    <ion-tab tabIcon="star"></ion-tab>\n    <ion-tab tabIcon="clock"></ion-tab>\n</ion-tabs>\n\n\n<!-- <ion-tabs>\n    <ion-tab [root]="tab1Root" tabTitle="Home" tabIcon="home"></ion-tab>\n    <ion-tab [root]="tab2Root" tabTitle="About" tabIcon="information-circle"></ion-tab>\n    <ion-tab [root]="tab3Root" tabTitle="Contact" tabIcon="contacts"></ion-tab>\n</ion-tabs> -->`/*ion-inline-end:"D:\ionic\Projet\Whatsapp\src\pages\tabs\tabs.html"*/
// })
// export class TabsPage {
//   tab1Root = HomePage;
//   tab2Root = AboutPage;
//   tab3Root = ContactPage;
//   constructor() {
//   }
// }
var core_1 = __webpack_require__(1);
// navcontroler pour le point d'entree
var ionic_angular_1 = __webpack_require__(43);
var chats_1 = __webpack_require__(229);
var TabsPage = (function () {
    function TabsPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.chatTabRoot = chats_1.ChatsPage;
    }
    TabsPage = __decorate([
        core_1.Component({template:/*ion-inline-start:"D:\ionic\Projet\Whatsapp\src\pages\tabs\tabs.html"*/`<ion-tabs color="whatsapp">\n    <ion-tab [root]="chatTabRoot" tabIcon="chatboxes"></ion-tab>\n    <ion-tab tabIcon="contacts"></ion-tab>\n    <ion-tab tabIcon="star"></ion-tab>\n    <ion-tab tabIcon="clock"></ion-tab>\n</ion-tabs>\n\n\n<!-- <ion-tabs>\n    <ion-tab [root]="tab1Root" tabTitle="Home" tabIcon="home"></ion-tab>\n    <ion-tab [root]="tab2Root" tabTitle="About" tabIcon="information-circle"></ion-tab>\n    <ion-tab [root]="tab3Root" tabTitle="Contact" tabIcon="contacts"></ion-tab>\n</ion-tabs> -->`/*ion-inline-end:"D:\ionic\Projet\Whatsapp\src\pages\tabs\tabs.html"*/
        }),
        __metadata("design:paramtypes", [ionic_angular_1.NavController])
    ], TabsPage);
    return TabsPage;
}());
exports.TabsPage = TabsPage;
//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 229:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(1);
var rxjs_1 = __webpack_require__(431);
var moment = __webpack_require__(2);
var models_1 = __webpack_require__(702);
var ChatsPage = (function () {
    function ChatsPage() {
        this.chats = this.findChats();
    }
    //remove chat
    ChatsPage.prototype.removeChat = function (chat) {
        this.chats = this.chats.map(function (chatsArray) {
            var chatIndex = chatsArray.indexOf(chat);
            if (chatIndex !== -1) {
                chatsArray.splice(chatIndex, 1);
            }
            return chatsArray;
        });
    };
    // list chat
    ChatsPage.prototype.findChats = function () {
        return rxjs_1.Observable.of([
            {
                _id: '0',
                title: 'Uchia Sassuke',
                picture: '../../assets/profils/bucks.gif',
                lastMessage: {
                    content: 'Hey comments vous aller?',
                    createdAt: moment().subtract(1, 'hours').toDate(),
                    type: models_1.MessageType.TEXT
                }
            },
            {
                _id: '1',
                title: 'Sakura Sama',
                picture: '../../assets/profils/bulls.gif',
                lastMessage: {
                    content: 'Slt c\'est encore moi',
                    createdAt: moment().subtract(2, 'hours').toDate(),
                    type: models_1.MessageType.TEXT
                }
            },
            {
                _id: '2',
                title: 'Naruto Uzumaki',
                picture: '../../assets/profils/celtic.gif',
                lastMessage: {
                    content: ' slt j\'aimerai apprendre le sharingan cmt faire',
                    createdAt: moment().subtract(1, 'days').toDate(),
                    type: models_1.MessageType.TEXT
                }
            },
            {
                _id: '3',
                title: 'Kenneth Peter',
                picture: '../../assets/profils/hawks.gif',
                lastMessage: {
                    content: ' Bonjour et bonne journee a tous kiss!',
                    createdAt: moment().subtract(4, 'days').toDate(),
                    type: models_1.MessageType.TEXT
                }
            },
            {
                _id: '4',
                title: 'Thomas Toto',
                picture: '../../assets/profils/hornets.gif',
                lastMessage: {
                    content: 'xai la creme de la creme',
                    createdAt: moment().subtract(2, 'weeks').toDate(),
                    type: models_1.MessageType.TEXT
                }
            },
            {
                _id: '4',
                title: 'Kakachi Sensei',
                picture: '../../assets/profils/jazz.gif',
                lastMessage: {
                    content: 'Hey toi Naruto prends l\'exemple sur Sassuke',
                    createdAt: moment().subtract(2, 'weeks').toDate(),
                    type: models_1.MessageType.TEXT
                }
            }
        ]);
    };
    ChatsPage = __decorate([
        core_1.Component({template:/*ion-inline-start:"D:\ionic\Projet\Whatsapp\src\pages\chats\chats.html"*/`<ion-header>\n\n    <ion-navbar color="whatsapp">\n\n        <ion-title>\n\n            Chats\n\n        </ion-title>\n\n\n\n        <ion-buttons end>\n\n            <button ion-button icon-only class="add-chat-button">\n\n        <ion-icon name="person-add"></ion-icon>\n\n      </button>\n\n            <button ion-button icon-only class="options-button">\n\n        <ion-icon name="more"></ion-icon>\n\n      </button>\n\n        </ion-buttons>\n\n\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<!--  \n\n<ion-content class="chats-page-content">\n\n  <ion-list class="chats">\n\n    <ion-item-sliding>\n\n      <button ion-item class="chat">\n\n        <img class="chat-picture" src="../../assets/profils/bucks.gif">\n\n        <div class="chat-info">\n\n          <h2 class="chat-title"> Wil Tino</h2>\n\n \n\n          <span class="last-message">\n\n    	 <p class="last-message-content last-message-content-text">Bonjour a tous cmt vous allez ?</p>\n\n            <span class="last-message-timestamp"> a 12h30 12-juin-2017</span> \n\n          </span>\n\n\n\n        </div>\n\n      </button>\n\n      <ion-item-options class="chat-options">\n\n	 <button ion-button color="danger" class="option option-remove">Remove</button>\n\n      </ion-item-options>\n\n    </ion-item-sliding>\n\n  </ion-list>\n\n</ion-content>  -->\n\n\n\n\n\n<ion-content class="chats-page-content">\n\n    <ion-list class="chats">\n\n        <ion-item-sliding *ngFor="let chat of chats | async">\n\n            <button ion-item class="chat">\n\n        <img class="chat-picture" [src]="chat.picture">\n\n        <div class="chat-info">\n\n          <h2 class="chat-title">{{chat.title}}</h2>\n\n \n\n          <span *ngIf="chat.lastMessage" class="last-message">\n\n    	 <p *ngIf ="chat.lastMessage.type == \'text\'" class="last-message-content last-message-content-text">{{chat.lastMessage.content}}</p>\n\n            <span class="last-message-timestamp">{{ chat.lastMessage.createdAt | amCalendar }}</span> \n\n          </span>\n\n\n\n        </div>\n\n      </button>\n\n            <ion-item-options class="chat-options">\n\n                <button ion-button color="danger" class="option option-remove" (click)="removeChat(chat)">Remove</button>\n\n            </ion-item-options>\n\n        </ion-item-sliding>\n\n    </ion-list>\n\n</ion-content>`/*ion-inline-end:"D:\ionic\Projet\Whatsapp\src\pages\chats\chats.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], ChatsPage);
    return ChatsPage;
}());
exports.ChatsPage = ChatsPage;
//# sourceMappingURL=chats.js.map

/***/ }),

/***/ 382:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_dynamic_1 = __webpack_require__(383);
var app_module_1 = __webpack_require__(387);
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 387:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(1);
var platform_browser_1 = __webpack_require__(42);
var ionic_angular_1 = __webpack_require__(43);
var app_component_1 = __webpack_require__(424);
var angular2_moment_1 = __webpack_require__(703);
var about_1 = __webpack_require__(706);
var contact_1 = __webpack_require__(707);
var home_1 = __webpack_require__(708);
var tabs_1 = __webpack_require__(228);
var chats_1 = __webpack_require__(229);
var status_bar_1 = __webpack_require__(222);
var splash_screen_1 = __webpack_require__(227);
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.MyApp,
                chats_1.ChatsPage,
                tabs_1.TabsPage,
                about_1.AboutPage,
                contact_1.ContactPage,
                home_1.HomePage
            ],
            imports: [
                platform_browser_1.BrowserModule,
                ionic_angular_1.IonicModule.forRoot(app_component_1.MyApp, {}, {
                    links: []
                }),
                angular2_moment_1.MomentModule,
            ],
            bootstrap: [ionic_angular_1.IonicApp],
            entryComponents: [
                app_component_1.MyApp,
                chats_1.ChatsPage,
                tabs_1.TabsPage,
                about_1.AboutPage,
                contact_1.ContactPage,
                home_1.HomePage,
                tabs_1.TabsPage
            ],
            providers: [
                status_bar_1.StatusBar,
                splash_screen_1.SplashScreen,
                { provide: core_1.ErrorHandler, useClass: ionic_angular_1.IonicErrorHandler }
            ]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 424:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(1);
var ionic_angular_1 = __webpack_require__(43);
var status_bar_1 = __webpack_require__(222);
var splash_screen_1 = __webpack_require__(227);
var tabs_1 = __webpack_require__(228);
//import { ChatsPage } from '../pages/chats/chats';
var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        //rootPage:any = ChatsPage;
        this.rootPage = tabs_1.TabsPage;
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            if (platform.is('cordova')) {
                statusBar.styleDefault();
                splashScreen.hide();
            }
        });
    }
    MyApp = __decorate([
        core_1.Component({template:/*ion-inline-start:"D:\ionic\Projet\Whatsapp\src\app\app.html"*/`<ion-nav  [root]="rootPage"></ion-nav>\n`/*ion-inline-end:"D:\ionic\Projet\Whatsapp\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [ionic_angular_1.Platform, status_bar_1.StatusBar, splash_screen_1.SplashScreen])
    ], MyApp);
    return MyApp;
}());
exports.MyApp = MyApp;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 701:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 252,
	"./af.js": 252,
	"./ar": 253,
	"./ar-dz": 254,
	"./ar-dz.js": 254,
	"./ar-kw": 255,
	"./ar-kw.js": 255,
	"./ar-ly": 256,
	"./ar-ly.js": 256,
	"./ar-ma": 257,
	"./ar-ma.js": 257,
	"./ar-sa": 258,
	"./ar-sa.js": 258,
	"./ar-tn": 259,
	"./ar-tn.js": 259,
	"./ar.js": 253,
	"./az": 260,
	"./az.js": 260,
	"./be": 261,
	"./be.js": 261,
	"./bg": 262,
	"./bg.js": 262,
	"./bm": 263,
	"./bm.js": 263,
	"./bn": 264,
	"./bn.js": 264,
	"./bo": 265,
	"./bo.js": 265,
	"./br": 266,
	"./br.js": 266,
	"./bs": 267,
	"./bs.js": 267,
	"./ca": 268,
	"./ca.js": 268,
	"./cs": 269,
	"./cs.js": 269,
	"./cv": 270,
	"./cv.js": 270,
	"./cy": 271,
	"./cy.js": 271,
	"./da": 272,
	"./da.js": 272,
	"./de": 273,
	"./de-at": 274,
	"./de-at.js": 274,
	"./de-ch": 275,
	"./de-ch.js": 275,
	"./de.js": 273,
	"./dv": 276,
	"./dv.js": 276,
	"./el": 277,
	"./el.js": 277,
	"./en-au": 278,
	"./en-au.js": 278,
	"./en-ca": 279,
	"./en-ca.js": 279,
	"./en-gb": 280,
	"./en-gb.js": 280,
	"./en-ie": 281,
	"./en-ie.js": 281,
	"./en-nz": 282,
	"./en-nz.js": 282,
	"./eo": 283,
	"./eo.js": 283,
	"./es": 284,
	"./es-do": 285,
	"./es-do.js": 285,
	"./es-us": 286,
	"./es-us.js": 286,
	"./es.js": 284,
	"./et": 287,
	"./et.js": 287,
	"./eu": 288,
	"./eu.js": 288,
	"./fa": 289,
	"./fa.js": 289,
	"./fi": 290,
	"./fi.js": 290,
	"./fo": 291,
	"./fo.js": 291,
	"./fr": 292,
	"./fr-ca": 293,
	"./fr-ca.js": 293,
	"./fr-ch": 294,
	"./fr-ch.js": 294,
	"./fr.js": 292,
	"./fy": 295,
	"./fy.js": 295,
	"./gd": 296,
	"./gd.js": 296,
	"./gl": 297,
	"./gl.js": 297,
	"./gom-latn": 298,
	"./gom-latn.js": 298,
	"./gu": 299,
	"./gu.js": 299,
	"./he": 300,
	"./he.js": 300,
	"./hi": 301,
	"./hi.js": 301,
	"./hr": 302,
	"./hr.js": 302,
	"./hu": 303,
	"./hu.js": 303,
	"./hy-am": 304,
	"./hy-am.js": 304,
	"./id": 305,
	"./id.js": 305,
	"./is": 306,
	"./is.js": 306,
	"./it": 307,
	"./it.js": 307,
	"./ja": 308,
	"./ja.js": 308,
	"./jv": 309,
	"./jv.js": 309,
	"./ka": 310,
	"./ka.js": 310,
	"./kk": 311,
	"./kk.js": 311,
	"./km": 312,
	"./km.js": 312,
	"./kn": 313,
	"./kn.js": 313,
	"./ko": 314,
	"./ko.js": 314,
	"./ky": 315,
	"./ky.js": 315,
	"./lb": 316,
	"./lb.js": 316,
	"./lo": 317,
	"./lo.js": 317,
	"./lt": 318,
	"./lt.js": 318,
	"./lv": 319,
	"./lv.js": 319,
	"./me": 320,
	"./me.js": 320,
	"./mi": 321,
	"./mi.js": 321,
	"./mk": 322,
	"./mk.js": 322,
	"./ml": 323,
	"./ml.js": 323,
	"./mr": 324,
	"./mr.js": 324,
	"./ms": 325,
	"./ms-my": 326,
	"./ms-my.js": 326,
	"./ms.js": 325,
	"./my": 327,
	"./my.js": 327,
	"./nb": 328,
	"./nb.js": 328,
	"./ne": 329,
	"./ne.js": 329,
	"./nl": 330,
	"./nl-be": 331,
	"./nl-be.js": 331,
	"./nl.js": 330,
	"./nn": 332,
	"./nn.js": 332,
	"./pa-in": 333,
	"./pa-in.js": 333,
	"./pl": 334,
	"./pl.js": 334,
	"./pt": 335,
	"./pt-br": 336,
	"./pt-br.js": 336,
	"./pt.js": 335,
	"./ro": 337,
	"./ro.js": 337,
	"./ru": 338,
	"./ru.js": 338,
	"./sd": 339,
	"./sd.js": 339,
	"./se": 340,
	"./se.js": 340,
	"./si": 341,
	"./si.js": 341,
	"./sk": 342,
	"./sk.js": 342,
	"./sl": 343,
	"./sl.js": 343,
	"./sq": 344,
	"./sq.js": 344,
	"./sr": 345,
	"./sr-cyrl": 346,
	"./sr-cyrl.js": 346,
	"./sr.js": 345,
	"./ss": 347,
	"./ss.js": 347,
	"./sv": 348,
	"./sv.js": 348,
	"./sw": 349,
	"./sw.js": 349,
	"./ta": 350,
	"./ta.js": 350,
	"./te": 351,
	"./te.js": 351,
	"./tet": 352,
	"./tet.js": 352,
	"./th": 353,
	"./th.js": 353,
	"./tl-ph": 354,
	"./tl-ph.js": 354,
	"./tlh": 355,
	"./tlh.js": 355,
	"./tr": 356,
	"./tr.js": 356,
	"./tzl": 357,
	"./tzl.js": 357,
	"./tzm": 358,
	"./tzm-latn": 359,
	"./tzm-latn.js": 359,
	"./tzm.js": 358,
	"./uk": 360,
	"./uk.js": 360,
	"./ur": 361,
	"./ur.js": 361,
	"./uz": 362,
	"./uz-latn": 363,
	"./uz-latn.js": 363,
	"./uz.js": 362,
	"./vi": 364,
	"./vi.js": 364,
	"./x-pseudo": 365,
	"./x-pseudo.js": 365,
	"./yo": 366,
	"./yo.js": 366,
	"./zh-cn": 367,
	"./zh-cn.js": 367,
	"./zh-hk": 368,
	"./zh-hk.js": 368,
	"./zh-tw": 369,
	"./zh-tw.js": 369
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 701;

/***/ }),

/***/ 702:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var MessageType;
(function (MessageType) {
    MessageType[MessageType["TEXT"] = 'text'] = "TEXT";
})(MessageType = exports.MessageType || (exports.MessageType = {}));
//# sourceMappingURL=models.js.map

/***/ }),

/***/ 706:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(1);
var ionic_angular_1 = __webpack_require__(43);
var AboutPage = (function () {
    function AboutPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    AboutPage = __decorate([
        core_1.Component({
            selector: 'page-about',template:/*ion-inline-start:"D:\ionic\Projet\Whatsapp\src\pages\about\about.html"*/`<ion-header>\n  <ion-navbar color="whatsapp">\n    <ion-title>\n      About\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n <button ion-button color="danger" class="option option-remove">Remove</button>\n</ion-content>\n`/*ion-inline-end:"D:\ionic\Projet\Whatsapp\src\pages\about\about.html"*/
        }),
        __metadata("design:paramtypes", [ionic_angular_1.NavController])
    ], AboutPage);
    return AboutPage;
}());
exports.AboutPage = AboutPage;
//# sourceMappingURL=about.js.map

/***/ }),

/***/ 707:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(1);
var ionic_angular_1 = __webpack_require__(43);
var ContactPage = (function () {
    function ContactPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ContactPage = __decorate([
        core_1.Component({
            selector: 'page-contact',template:/*ion-inline-start:"D:\ionic\Projet\Whatsapp\src\pages\contact\contact.html"*/`<ion-header>\n  <ion-navbar color="whatsapp">\n    <ion-title>\n      Contact\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-list-header>Follow us on Twitter</ion-list-header>\n    <ion-item>\n      <ion-icon name="ionic" item-start></ion-icon>\n      @ionicframework\n    </ion-item>\n  </ion-list>\n</ion-content>\n`/*ion-inline-end:"D:\ionic\Projet\Whatsapp\src\pages\contact\contact.html"*/
        }),
        __metadata("design:paramtypes", [ionic_angular_1.NavController])
    ], ContactPage);
    return ContactPage;
}());
exports.ContactPage = ContactPage;
//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 708:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(1);
var ionic_angular_1 = __webpack_require__(43);
var HomePage = (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage = __decorate([
        core_1.Component({
            selector: 'page-home',template:/*ion-inline-start:"D:\ionic\Projet\Whatsapp\src\pages\home\home.html"*/`<ion-header>\n    <ion-navbar color="whatsapp">\n        <ion-title>\n            Acceuil\n        </ion-title>\n\n        <ion-buttons end>\n            <button ion-button icon-only class="add-chat-button">\n        <ion-icon name="person-add"></ion-icon>\n      </button>\n            <button ion-button icon-only class="options-button">\n        <ion-icon name="more"></ion-icon>\n      </button>\n        </ion-buttons>\n\n    </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    Hello !!!\n</ion-content>\n\n\n<!-- <ion-content class="chats-page-content">\n  <ion-list class="chats">\n    <ion-item-sliding>\n      <button ion-item class="chat">\n        <img class="chat-picture" src="../../assets/profils/bucks.gif">\n        <div class="chat-info">\n          <h2 class="chat-title"> Wil Tino</h2>\n \n          <span class="last-message">\n       <p class="last-message-content last-message-content-text">Bonjour a tous cmt vous allez ?</p>\n            <span class="last-message-timestamp"> a 12h30 12-juin-2017</span> \n          </span>\n\n        </div>\n      </button>\n      <ion-item-options class="chat-options">\n   <button ion-button color="danger" class="option option-remove">Remove</button>\n      </ion-item-options>\n    </ion-item-sliding>\n  </ion-list>\n</ion-content>  -->`/*ion-inline-end:"D:\ionic\Projet\Whatsapp\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof ionic_angular_1.NavController !== "undefined" && ionic_angular_1.NavController) === "function" && _a || Object])
    ], HomePage);
    return HomePage;
    var _a;
}());
exports.HomePage = HomePage;
//# sourceMappingURL=home.js.map

/***/ })

},[382]);
//# sourceMappingURL=main.js.map