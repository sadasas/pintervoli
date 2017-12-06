webpackJsonp([6],{

/***/ 263:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MateriPageModule", function() { return MateriPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__materi__ = __webpack_require__(272);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MateriPageModule = (function () {
    function MateriPageModule() {
    }
    return MateriPageModule;
}());
MateriPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__materi__["a" /* MateriPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__materi__["a" /* MateriPage */]),
        ],
    })
], MateriPageModule);

//# sourceMappingURL=materi.module.js.map

/***/ }),

/***/ 271:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__(9);
var map_1 = __webpack_require__(194);
Observable_1.Observable.prototype.map = map_1.map;
//# sourceMappingURL=map.js.map

/***/ }),

/***/ 272:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MateriPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MateriPage = (function () {
    // public data : any;
    function MateriPage(navCtrl, navParams, http) {
        // this.data = {};
        // this.data.username = '';
        // this.data.response = '';
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        // this.http = http;
    }
    MateriPage.prototype.matericontent = function (babId, babTitle) {
        var data = {
            id: babId,
            title: babTitle,
        };
        this.navCtrl.push('MatericontentPage', data);
    };
    MateriPage.prototype.ionViewDidLoad = function () {
        // var link = 'http://localhost/basicdata/test.php';
        // var data = JSON.stringify({username: 'jondeasdfasdfadfss',password:'ssssess'});
        // this.http.post(link, data)
        // .subscribe(data => {
        //     // this.data.response = data._body;
        // }, error => {
        //     console.log("Oooops!");
        // });
    };
    MateriPage.prototype.ionViewWillEnter = function () {
        this.babsLoad();
    };
    MateriPage.prototype.babsLoad = function () {
        var _this = this;
        this.http.get('http://voli.putralab.com/voli/bab/bab.php')
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            _this.babs = data;
        });
    };
    return MateriPage;
}());
MateriPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-materi',template:/*ion-inline-start:"D:\pintarvoly\src\pages\materi\materi.html"*/'<!--\n  Generated template for the MateriPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header >\n\n  <ion-navbar>\n    <ion-title class="navbar-title"><p>Bab Materi</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding class="body">\n    <ion-list>\n        \n      <ion-item *ngFor="let bab of babs" class="bab-materi">\n          <ion-thumbnail class="img-thumbnail" item-start>\n            <img src="http://voli.putralab.com/voli/assets/imgs/materi.png">\n          </ion-thumbnail>\n        \n          <p>{{ bab.title }}</p>\n          <button class="button-lihat" ion-button clear item-end (click)="matericontent(bab.id,bab.title)">Lihat</button>\n      </ion-item>\n      \n    </ion-list>\n</ion-content>'/*ion-inline-end:"D:\pintarvoly\src\pages\materi\materi.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */]])
], MateriPage);

//# sourceMappingURL=materi.js.map

/***/ })

});
//# sourceMappingURL=6.js.map