webpackJsonp([7],{

/***/ 265:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutPageModule", function() { return AboutPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__about__ = __webpack_require__(274);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AboutPageModule = (function () {
    function AboutPageModule() {
    }
    return AboutPageModule;
}());
AboutPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__about__["a" /* AboutPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__about__["a" /* AboutPage */]),
        ],
    })
], AboutPageModule);

//# sourceMappingURL=about.module.js.map

/***/ }),

/***/ 274:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the AboutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AboutPage = (function () {
    function AboutPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    AboutPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AboutPage');
    };
    return AboutPage;
}());
AboutPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-about',template:/*ion-inline-start:"D:\pintarvoly\src\pages\about\about.html"*/'<!--\n  Generated template for the AboutPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Tentang Kami</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="body" padding>\n  <ion-grid>\n   <ion-row>\n<ion-col col-4 > \n    <div style="text-align: center; ">\n      <ion-card-content>\n       <img class="img-logo" src="http://voli.putralab.com/voli/assets/imgs/boy.png" alt=""> \n      </ion-card-content>\n      </div>\n    </ion-col>\n \n<ion-col col-8 > \n    <div style="text-align: center; background-color: #fff;margin-top: 30px">\n      <ion-card-content>\n       Wahyu Setio Rilo Pambudi\n      </ion-card-content>\n      </div>\n    </ion-col>\n    <ion-col col-4 > \n    <div style="text-align: center;   ">\n      <ion-card-content>\n       <img class="img-logo" src="http://voli.putralab.com/voli/assets/imgs/boy.png" alt=""> \n      </ion-card-content>\n      </div>\n    </ion-col>\n \n    <ion-col col-8 right> \n    <div style="text-align: center; background-color: #fff;margin-top: 30px">\n      <ion-card-content>\n       <i>Satrio Bagus Iman Nugroho</i>\n      </ion-card-content>\n      </div>\n    </ion-col>\n\n    <ion-col col-4 > \n    <div style="text-align: center;  ">\n      <ion-card-content>\n       <img class="img-logo" src="http://voli.putralab.com/voli/assets/imgs/boy.png" alt=""> \n      </ion-card-content>\n      </div>\n    </ion-col>\n \n    <ion-col col-8 right> \n    <div style="text-align: center; background-color: #fff;margin-top: 30px">\n      <ion-card-content>\n       <i>Prayoga Hadiningrat</i>\n      </ion-card-content>\n      </div>\n    </ion-col>\n\n    <ion-col col-4 > \n    <div style="text-align: center;  ">\n      <ion-card-content>\n       <img class="img-logo" src="http://voli.putralab.com/voli/assets/imgs/girl.png" alt=""> \n      </ion-card-content>\n      </div>\n    </ion-col>\n \n    <ion-col col-8 right> \n    <div style="text-align: center; background-color: #fff;margin-top: 30px">\n      <ion-card-content>\n       <i>Tamia Indah Imanika</i>\n      </ion-card-content>\n      </div>\n    </ion-col>\n\n  <ion-col col-4 > \n    <div style="text-align: center;  ">\n      <ion-card-content>\n       <img class="img-logo" src="http://voli.putralab.com/voli/assets/imgs/girl.png" alt=""> \n      </ion-card-content>\n      </div>\n    </ion-col>\n\n     <ion-col col-8 right> \n    <div style="text-align: center; background-color: #fff;margin-top: 30px">\n      <ion-card-content>\n       <i>Vicky Vebiola</i>\n      </ion-card-content>\n      </div>\n    </ion-col>\n    </ion-row>\n    </ion-grid>\n</ion-content>\n'/*ion-inline-end:"D:\pintarvoly\src\pages\about\about.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], AboutPage);

//# sourceMappingURL=about.js.map

/***/ })

});
//# sourceMappingURL=7.js.map