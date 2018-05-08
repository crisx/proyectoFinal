webpackJsonp([0],{

/***/ 312:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPageModule", function() { return RegisterPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__register__ = __webpack_require__(314);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var RegisterPageModule = /** @class */ (function () {
    function RegisterPageModule() {
    }
    RegisterPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__register__["a" /* RegisterPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__register__["a" /* RegisterPage */]),
            ],
        })
    ], RegisterPageModule);
    return RegisterPageModule;
}());

//# sourceMappingURL=register.module.js.map

/***/ }),

/***/ 314:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular_components_loading_loading_controller__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular_components_alert_alert_controller__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__tabs_tabs__ = __webpack_require__(56);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var RegisterPage = /** @class */ (function () {
    function RegisterPage(navCtrl, loadingCtrl, alertCtrl, navParams, formBuilder, authProvider) {
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.authProvider = authProvider;
        // Se crea las validaciones del formulario de inicio de sesión.
        this.signupForm = this.formBuilder.group({
            email: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].email])],
            password: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].minLength(6)])],
            confirmPass: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].minLength(6)])]
        }, { validator: this.checkIfMatchingPasswords('password', 'confirmPass') });
    }
    /**
     * Método empleado para realizar el registro y posterior inicio de sesión de un usuario.
     */
    RegisterPage.prototype.registerEntrar = function () {
        var _this = this;
        // Se valida el formulario de ingreso
        if (this.signupForm.valid) {
            // Se muestra el loading durante el proceso de inserción.
            var loader_1 = this.loadingCtrl.create({
                content: "Registering..."
            });
            loader_1.present();
            // Se llama el provider encargado de hacer el registro.
            this.authProvider.signup(this.signupForm.value.email, this.signupForm.value.password).then(function () {
                // Se oculta el loader y se redirige a la pantalla de tabs.
                loader_1.dismiss();
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__tabs_tabs__["a" /* TabsPage */]);
            }, function (error) {
                // Se oculta el loader y se muestra un mensaje de fallo.
                _this.showAlert('Error!', error.message);
                loader_1.dismiss();
            });
        }
        else {
            // Se muestra un error por validación de formularios.
            this.showAlert('Incorrect data!', 'Please check your input data.');
        }
    };
    /**
     * Método empleado para realizar validar el campo de confirmación de constraseña.
     * @param password Contraseña ingresada.
     * @param confirmPassword Confirmación de contraseña ingresada.
     */
    RegisterPage.prototype.checkIfMatchingPasswords = function (password, confirmPassword) {
        return function (group) {
            // Se obtienen los valores de los input
            var passwordInput = group.controls[password];
            var passwordConfirmationInput = group.controls[confirmPassword];
            // Se valida que sean iguales
            if (passwordInput.value !== passwordConfirmationInput.value) {
                // Se asigna el error al input de confirmación.
                return passwordConfirmationInput.setErrors({ notEquivalent: true });
            }
            else {
                // Se limpia el error del input de confirmación.
                return passwordConfirmationInput.setErrors(null);
            }
        };
    };
    /**
     * Método utilizado para mostrar un Alert.
     * @param title Título del Alert a mostrar.
     * @param message Mensaje del Alert a mostrar.
     */
    RegisterPage.prototype.showAlert = function (title, message) {
        var alert = this.alertCtrl.create({
            title: title,
            subTitle: message,
            buttons: ['OK']
        });
        alert.present();
    };
    RegisterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-register',template:/*ion-inline-start:"/Applications/MAMP/htdocs/proyectos_ionic/proyecto_final/src/pages/register/register.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title mode="ios">Signup</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n  <ion-card>\n    <form [formGroup]="signupForm">\n      <ion-card-content>\n        <ion-list>\n          <ion-item>\n            <ion-label stacked>Email</ion-label>\n            <ion-input formControlName="email" type="email"></ion-input>\n          </ion-item>\n          <ion-item *ngIf="!signupForm.controls.email.valid\n            && signupForm.controls.email.dirty">\n            <p class="error-message">Please enter a valid email.</p>\n          </ion-item>\n          <ion-item>\n            <ion-label stacked>Password</ion-label>\n            <ion-input type="password" formControlName="password"></ion-input>\n          </ion-item>\n          <ion-item *ngIf="!signupForm.controls.password.valid\n            && signupForm.controls.password.dirty">\n            <p class="error-message">Your password needs more than 6 characters.</p>\n          </ion-item>\n          <ion-item>\n            <ion-label stacked>Confirm password</ion-label>\n            <ion-input type="password" formControlName="confirmPass"></ion-input>\n          </ion-item>\n          <ion-item *ngIf="!signupForm.controls.confirmPass.valid\n            && signupForm.controls.confirmPass.dirty">\n            <p class="error-message">Must match the password.</p>\n          </ion-item>\n          <ion-item>\n            <button block ion-button (click)="registerEntrar()" [disabled]="!signupForm.valid" color="primary">Signup</button>\n          </ion-item>\n        </ion-list>\n      </ion-card-content>\n    </form>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"/Applications/MAMP/htdocs/proyectos_ionic/proyecto_final/src/pages/register/register.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular_components_loading_loading_controller__["a" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_5_ionic_angular_components_alert_alert_controller__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__["a" /* AuthProvider */]])
    ], RegisterPage);
    return RegisterPage;
}());

//# sourceMappingURL=register.js.map

/***/ })

});
//# sourceMappingURL=0.js.map