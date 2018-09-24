(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.bloqueCrearLista{\r\n    margin-top:50px;\r\n    margin-bottom:5px;\r\n    height:90px;\r\n    max-width: 968px;\r\n    background: rgba(0, 0, 0, 0.6);\r\n    display:flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    align-content: center;\r\n    border-radius: 10px;\r\n    border-style:solid;\r\n    border-color: black;\r\n    border-width: 1px;\r\n    margin: 0 auto;\r\n}\r\n.lista{\r\n    width: 312.5px;\r\n    min-height:200px;\r\n    margin: 5px;\r\n    padding: 5px;\r\n    background:rgba(0, 0, 0, 0.2);\r\n    color: white;\r\n    border-width: 4px;\r\n    border-style:solid;\r\n    border-color: rgba(0, 0, 0, 0.6);\r\n    border-radius: 10px;\r\n    border-width: 1px;\r\n    padding: 8px;\r\n}\r\n.titulo {\r\n    color: rgb(34, 34, 34);\r\n    margin: 0 auto;\r\n    background: transparent;\r\n    display:flex;\r\n    justify-content: center;\r\n    text-align: center;\r\n    font-weight: bold;\r\n    margin-top: 10px;\r\n}\r\n.prueba{\r\n    display:inline-flex;\r\n    margin:0 auto;\r\n}\r\nprueba2{\r\n    background:transparent;\r\n\r\n}\r\nbutton {\r\n        border-radius:4px;\r\n        padding: 3px;\r\n        background: rgba(180, 180, 180);\r\n        border-color: rgb(0, 0, 0,0.5);\r\n        border-width: 0.7px;\r\n    }\r\ninput{\r\n    margin: auto; \r\n    background: transparent;\r\n    border-color: rgb(0, 0, 0,0.5);\r\n    border-top-width: 0px;\r\n    border-bottom-width: 0.7px;\r\n    border-right-width: 0px;\r\n    border-left-width: 0px;\r\n    \r\n    box-shadow: none;\r\n    outline: none;\r\n\r\n    color: rgb(204, 204, 204);\r\n\r\n    -webkit-appearance: none;\r\n    -moz-appearance: none;\r\n    -ms-appearence: none;\r\n    -o-appearance: none;\r\n    appearance: none;\r\n    font-size: 19px;\r\n    font-weight: 400;\r\n    text-align: center;}\r\n.headerLista{\r\n        display:flex;\r\n        flex-direction: row;\r\n        background:transparent;\r\n    }\r\n.adios{\r\n        width:100px;\r\n        height:100px;\r\n        background-color: blue;\r\n    }\r\n.hola{\r\n      \r\n        width:200px;\r\n        height:200px;\r\n        background: rgb(142, 142, 255);  \r\n    }\r\n.eliminarLista {\r\n        display: block;\r\n        border-radius: 50%;\r\n        height:20px;\r\n        width:20px;\r\n        font-size: 10px;\r\n        float:right;\r\n    }"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"bloqueCrearLista\">\n  <input placeholder=\"Nueva lista..\" (keyup.enter)=\"crearLista(tituloLista.value); tituloLista.value=''\" type=\"text\" #tituloLista>\n  <button (click)=\"crearLista(tituloLista.value); tituloLista.value=''\">Nueva Lista</button>\n</div>\n\n<div class=\"prueba\" *ngFor=\"let lista of listas\">\n  <div class=\"lista\">\n    <div class=\"headerLista\">\n      <span class=\"titulo\">{{lista.titulo}}      <button class=\"eliminarLista\" (click)=\"eliminarLista(lista)\">✘</button>\n      </span>\n    </div>\n    <app-sub-lista [subLista]=\"lista.subLista\"></app-sub-lista>\n  </div>\n</div>\n\n\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'listadetareas-app';
        this.listas = [];
    }
    AppComponent.prototype.crearLista = function (titulo) {
        var nuevaLista = {
            titulo: titulo,
            subLista: []
        };
        this.listas.push(nuevaLista);
    };
    ;
    AppComponent.prototype.eliminarLista = function (tarea) {
        console.log(this.listas.indexOf(tarea));
        this.listas.splice(this.listas.indexOf(tarea), 1);
    };
    ;
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _sub_lista_sub_lista_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sub-lista/sub-lista.component */ "./src/app/sub-lista/sub-lista.component.ts");
/* harmony import */ var ng_drag_drop__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-drag-drop */ "./node_modules/ng-drag-drop/index.js");
/* harmony import */ var ng_drag_drop__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ng_drag_drop__WEBPACK_IMPORTED_MODULE_4__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _sub_lista_sub_lista_component__WEBPACK_IMPORTED_MODULE_3__["SubListaComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                ng_drag_drop__WEBPACK_IMPORTED_MODULE_4__["NgDragDropModule"].forRoot()
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/sub-lista/sub-lista.component.css":
/*!***************************************************!*\
  !*** ./src/app/sub-lista/sub-lista.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "*{\r\n    background:transparent;\r\n    margin:1px;\r\n\r\n}\r\n\r\ninput {\r\n    border-radius: 4px;\r\n    padding: 3px;\r\n    background: rgba(180, 180, 180);\r\n    border-color: rgb(0, 0, 0,0.5);\r\n    border-width: 0.7px;\r\n    width:193px;\r\n}\r\n\r\nbutton {\r\n    width: 95px;\r\n    border-radius:4px;\r\n    padding: 3px;\r\n    background: rgba(180, 180, 180);\r\n    border-color: rgb(0, 0, 0,0.5);\r\n    border-width: 0.7px;\r\n}\r\n\r\n.eliminar {\r\n    height:20px;\r\n    width:20px;\r\n    border-width: 1px;\r\n    padding: 2px;\r\n}\r\n\r\n.noCompletada {\r\n    height:20px;\r\n    width:20px;\r\n    border-width: 1px;\r\n    padding: 2px;\r\n    color: rgba(180, 180, 180)\r\n}\r\n\r\n.completada {\r\n    height:20px;\r\n    width:20px;\r\n    border-width: 1px;\r\n    padding: 2px;\r\n}\r\n\r\n.prueba2 {\r\n    display:flex;\r\n    justify-content: space-between;\r\n}"

/***/ }),

/***/ "./src/app/sub-lista/sub-lista.component.html":
/*!****************************************************!*\
  !*** ./src/app/sub-lista/sub-lista.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<input type=\"text\" #tituloSubLista (keyup.enter)=\"crearSubLista(tituloSubLista.value); tituloSubLista.value=''\">\n<button (click)=\"crearSubLista(tituloSubLista.value); tituloSubLista.value=''\">Nueva Tarea</button>\n\n<div class=\"prueba2\" *ngFor=\"let tarea of subLista\">\n  <span>{{tarea.titulo2}}</span>\n  <div class=\"botones\">\n    <button class=\"completada\" >✎</button>\n    <button class=\"eliminar\" (click)=\"eliminarTarea(tarea)\">✘</button>\n    <button class=\"noCompletada\" (click)=\"completarTarea($event)\">✓</button>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/sub-lista/sub-lista.component.ts":
/*!**************************************************!*\
  !*** ./src/app/sub-lista/sub-lista.component.ts ***!
  \**************************************************/
/*! exports provided: SubListaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubListaComponent", function() { return SubListaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SubListaComponent = /** @class */ (function () {
    function SubListaComponent() {
    }
    SubListaComponent.prototype.crearSubLista = function (titulo2) {
        var nuevaSubLista = {
            titulo2: titulo2
        };
        this.subLista.push(nuevaSubLista);
    };
    SubListaComponent.prototype.eliminarTarea = function (item) {
        console.log(this.subLista.indexOf(item));
        this.subLista.splice(this.subLista.indexOf(item), 1);
    };
    ;
    SubListaComponent.prototype.completarTarea = function (completar) {
        var classList = completar.target.classList;
        var classes = completar.target.className;
        if (classes.includes('noCompletada')) {
            classList.remove('noCompletada');
            classList.add('completada');
        }
        else if (classes.includes('completada')) {
            classList.remove('completada');
            classList.add('noCompletada');
        }
    };
    SubListaComponent.prototype.ngOnInit = function () {
    };
    ;
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SubListaComponent.prototype, "subLista", void 0);
    SubListaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sub-lista',
            template: __webpack_require__(/*! ./sub-lista.component.html */ "./src/app/sub-lista/sub-lista.component.html"),
            styles: [__webpack_require__(/*! ./sub-lista.component.css */ "./src/app/sub-lista/sub-lista.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SubListaComponent);
    return SubListaComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Alex\Desktop\A L E X\A L E X\Web\webpersonal\angularScrum\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map