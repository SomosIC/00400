webpackJsonp([0],{

/***/ 109:
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
webpackEmptyAsyncContext.id = 109;

/***/ }),

/***/ 150:
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
webpackEmptyAsyncContext.id = 150;

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_home__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__about_about__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__contact_contact__ = __webpack_require__(203);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TabsPage = (function () {
    function TabsPage() {
        // this tells the tabs component which Pages
        // should be each tab's root Page
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_1__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_2__about_about__["a" /* AboutPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_3__contact_contact__["a" /* ContactPage */];
    }
    return TabsPage;
}());
TabsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\Users\Rodolfo Garcia\Documents\SomosIC\ionic-audio-demo-master\00400\src\pages\tabs\tabs.html"*/'<ion-tabs>\n  <ion-tab [root]="tab1Root" tabTitle="Inicio" tabIcon="home"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="More music" tabIcon="musical-note"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Contacto" tabIcon="contacts"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"C:\Users\Rodolfo Garcia\Documents\SomosIC\ionic-audio-demo-master\00400\src\pages\tabs\tabs.html"*/
    }),
    __metadata("design:paramtypes", [])
], TabsPage);

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomePage = (function () {
    function HomePage(navCtrl, _cdRef) {
        this.navCtrl = navCtrl;
        this._cdRef = _cdRef;
        this.playlist = [];
        this.currentIndex = -1;
        // plugin won't preload data by default, unless preload property is defined within json object - defaults to 'none'
        this.myTracks = [{
                src: 'http://radios502.radiotouch.net:13201/;',
                artist: 'Radio',
                title: 'K Buena',
                art: 'assets/img/kbuena.jpg',
                preload: 'metadata' // tell the plugin to preload metadata such as duration for this track, set to 'none' to turn off
            },
            {
                src: 'http://djneihtul.stream.laut.fm/djneihtul?t302=2018-02-19_18-41-43&uuid=13be18de-8e88-4e9d-b63e-74370c442b80',
                artist: 'John Mayer',
                title: 'esta xD',
                art: 'assets/img/johnmayer.jpg',
                preload: 'metadata' // tell the plugin to preload metadata such as duration for this track,  set to 'none' to turn off
            },
            {
                src: 'http://radiosinlimite.net:8152/stream/1/',
                artist: 'Stephane Wrembel',
                title: 'Stephane Wrembel Live',
                art: 'assets/img/Stephane.jpg',
                preload: 'metadata' // tell the plugin to preload metadata such as duration for this track,  set to 'none' to turn off
            }];
    }
    HomePage.prototype.add = function (track) {
        this.playlist.push(track);
    };
    HomePage.prototype.play = function (track, index) {
        this.currentTrack = track;
        this.currentIndex = index;
    };
    HomePage.prototype.next = function () {
        // if there is a next track on the list play it
        if (this.playlist.length > 0 && this.currentIndex >= 0 && this.currentIndex < this.playlist.length - 1) {
            var i = this.currentIndex + 1;
            var track = this.playlist[i];
            this.play(track, i);
            this._cdRef.detectChanges(); // needed to ensure UI update
        }
        else if (this.currentIndex == -1 && this.playlist.length > 0) {
            // if no track is playing then start with the first track on the list
            this.play(this.playlist[0], 0);
        }
    };
    HomePage.prototype.onTrackFinished = function (track) {
        this.next();
    };
    HomePage.prototype.clear = function () {
        this.playlist = [];
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"C:\Users\Rodolfo Garcia\Documents\SomosIC\ionic-audio-demo-master\00400\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Inicio</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <h2>RADIO RANCHERA</h2>\n\n  <ion-list>\n    <ion-item *ngFor="let track of myTracks">\n      <ion-thumbnail item-left>\n        <img src="{{track.art}}">\n      </ion-thumbnail>\n      <h2>{{track.title}}</h2>\n      <button ion-button (click)="currentTrack = track">Play</button><button ion-button (click)="add(track)">favoritas</button>\n    </ion-item>\n  </ion-list>\n\n  <audio-track #audioTrack [track]="currentTrack" [autoplay]="true" (onFinish)="onTrackFinished($event)">\n    <div style="display: flex">\n      <button ion-button icon-only (click)="audioTrack.canPlay ? audioTrack.play() : next()"><ion-icon name="play"></ion-icon></button>\n      <button ion-button icon-only (click)="audioTrack.pause()"><ion-icon name="pause"></ion-icon></button>\n      <button ion-button icon-only (click)="next()"><ion-icon name="skip-forward"></ion-icon></button>\n      <audio-track-progress-bar duration progress [audioTrack]="audioTrack" style="width: 100%; margin: 0 10px"></audio-track-progress-bar>\n    </div>\n    <div style="display: flex; justify-content: center; height: 50px">\n      <div *ngIf="audioTrack && audioTrack.hasLoaded"><em>{{ audioTrack?.title }}</em></div>\n      <ion-spinner *ngIf="audioTrack && audioTrack.isLoading"></ion-spinner>\n    </div>\n  </audio-track>\n\n  <ion-list *ngIf="playlist.length > 0">\n    <ion-list-header no-lines inset>\n      Mis Radios\n      <button ion-button clear item-right (click)="clear()">Borrar Lista</button>\n    </ion-list-header>\n    <ion-item *ngFor="let track of playlist; let i = index">\n      <h2>{{ track.title }}</h2>\n      <p>{{ track.artist }}</p>\n      <button ion-button icon-only item-end (click)="play(track, i)">\n          <ion-icon name="play"></ion-icon>\n        </button>\n    </ion-item>\n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Rodolfo Garcia\Documents\SomosIC\ionic-audio-demo-master\00400\src\pages\home\home.html"*/
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* ChangeDetectorRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* ChangeDetectorRef */]) === "function" && _b || Object])
], HomePage);

var _a, _b;
//# sourceMappingURL=home.js.map

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_audio__ = __webpack_require__(197);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AboutPage = (function () {
    function AboutPage(_audioProvider) {
        this._audioProvider = _audioProvider;
        this.myTracks = [{
                src: 'http://prclive1.listenon.in:8840/',
                artist: 'John Mayer',
                title: 'Why Georgia',
                art: 'assets/img/johnmayer.jpg',
                preload: 'metadata' // tell the plugin to preload metadata such as duration for this track, set to 'none' to turn off
            },
            {
                src: 'http://djneihtul.stream.laut.fm/djneihtul?t302=2018-02-19_18-41-43&uuid=13be18de-8e88-4e9d-b63e-74370c442b80',
                artist: 'esta mamada',
                title: 'Who Says',
                art: 'assets/img/johnmayer.jpg',
                preload: 'metadata' // tell the plugin to preload metadata such as duration for this track,  set to 'none' to turn off
            },
            {
                src: 'https://archive.org/download/swrembel2010-03-07.tlm170.flac16/swrembel2010-03-07s1t05.mp3',
                artist: 'Stephane Wrembel',
                title: 'Stephane Wrembel Live',
                art: 'assets/img/Stephane.jpg',
                preload: 'metadata' // tell the plugin to preload metadata such as duration for this track,  set to 'none' to turn off
            }];
    }
    AboutPage.prototype.ngAfterContentInit = function () {
        // get all tracks managed by AudioProvider so we can control playback via the API
        this.allTracks = this._audioProvider.tracks;
    };
    AboutPage.prototype.playSelectedTrack = function () {
        // use AudioProvider to control selected track 
        this._audioProvider.play(this.selectedTrack);
    };
    AboutPage.prototype.pauseSelectedTrack = function () {
        // use AudioProvider to control selected track 
        this._audioProvider.pause(this.selectedTrack);
    };
    return AboutPage;
}());
AboutPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-about',template:/*ion-inline-start:"C:\Users\Rodolfo Garcia\Documents\SomosIC\ionic-audio-demo-master\00400\src\pages\about\about.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      More music\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-list>\n    <audio-track #audio *ngFor="let track of myTracks" [track]="track">\n      <ion-item>\n        <ion-thumbnail item-left>\n          <img src="{{audio.art}}">\n          <audio-track-play dark [audioTrack]="audio">\n            <ion-spinner></ion-spinner>\n          </audio-track-play>\n        </ion-thumbnail>\n        <div item-content style="width:100%">\n          <p><strong>{{audio.title}}</strong> &#x26AC; <em>{{audio.artist}}</em></p>\n          <audio-track-progress-bar duration progress [audioTrack]="audio"></audio-track-progress-bar>\n          <em style="font-size:.5em">Track ID: {{audio.id}}</em>\n        </div>\n      </ion-item>\n    </audio-track>\n  </ion-list>\n\n  <h3>API Usage</h3>\n  <h4>Using AudioProvider to control playback</h4>\n  <ion-list>\n    <ion-item>\n      <ion-label>Select track to play</ion-label>\n      <ion-select [(ngModel)]="selectedTrack">\n        <ion-option *ngFor="let track of allTracks" value="{{track.id}}">{{track.title}}</ion-option>\n      </ion-select>\n    </ion-item>\n  </ion-list>\n  <button ion-button block outline (click)="playSelectedTrack()">Play</button>\n  <button ion-button block outline color="secondary" (click)="pauseSelectedTrack()">Pause</button>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Rodolfo Garcia\Documents\SomosIC\ionic-audio-demo-master\00400\src\pages\about\about.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_audio__["a" /* AudioProvider */]])
], AboutPage);

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContactPage = (function () {
    function ContactPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    return ContactPage;
}());
ContactPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-contact',template:/*ion-inline-start:"C:\Users\Rodolfo Garcia\Documents\SomosIC\ionic-audio-demo-master\00400\src\pages\contact\contact.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Contact\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-list-header>Follow us on Twitter</ion-list-header>\n    <ion-item>\n      <ion-icon name="ionic" item-left></ion-icon>\n      @ionicframework\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Rodolfo Garcia\Documents\SomosIC\ionic-audio-demo-master\00400\src\pages\contact\contact.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
], ContactPage);

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(223);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 223:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export myCustomAudioProviderFactory */
/* unused harmony export providers */
/* unused harmony export entryComponents */
/* unused harmony export declarations */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_splash_screen__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_about_about__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_contact_contact__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_home_home__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_tabs_tabs__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ionic_audio__ = __webpack_require__(197);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var pages = [
    __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
    __WEBPACK_IMPORTED_MODULE_6__pages_about_about__["a" /* AboutPage */],
    __WEBPACK_IMPORTED_MODULE_7__pages_contact_contact__["a" /* ContactPage */],
    __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
    __WEBPACK_IMPORTED_MODULE_9__pages_tabs_tabs__["a" /* TabsPage */]
];
/**
 * Sample custom factory function to use with ionic-audio
 */
function myCustomAudioProviderFactory() {
    return (window.hasOwnProperty('cordova')) ? new __WEBPACK_IMPORTED_MODULE_10_ionic_audio__["b" /* CordovaMediaProvider */]() : new __WEBPACK_IMPORTED_MODULE_10_ionic_audio__["d" /* WebAudioProvider */]();
}
function providers() {
    return [
        { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* IonicErrorHandler */] },
        __WEBPACK_IMPORTED_MODULE_2__ionic_native_splash_screen__["a" /* SplashScreen */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__["a" /* StatusBar */]
    ];
}
function entryComponents() {
    return pages;
}
function declarations() {
    return pages;
}
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: declarations(),
        imports: [
            __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */]),
            __WEBPACK_IMPORTED_MODULE_10_ionic_audio__["c" /* IonicAudioModule */].forRoot(__WEBPACK_IMPORTED_MODULE_10_ionic_audio__["e" /* defaultAudioProviderFactory */]),
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* IonicApp */]],
        entryComponents: entryComponents(),
        providers: providers(),
        schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* CUSTOM_ELEMENTS_SCHEMA */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 272:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_splash_screen__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(194);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, splashScreen, statusBar) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    return MyApp;
}());
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\Users\Rodolfo Garcia\Documents\SomosIC\ionic-audio-demo-master\00400\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"C:\Users\Rodolfo Garcia\Documents\SomosIC\ionic-audio-demo-master\00400\src\app\app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__["a" /* StatusBar */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ })

},[204]);
//# sourceMappingURL=main.js.map