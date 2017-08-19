"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AppComponent = (function () {
    function AppComponent() {
        this.users = [
            {
                "id": 81220,
                "email": "LAltermatt@sagittis.io",
                "username": "JMangat",
                "password": "HfagO"
            },
            {
                "id": 81221,
                "email": "JWillett@amet.org",
                "username": "SBatrouny",
                "password": "JqMPk"
            },
            {
                "id": 81222,
                "email": "AMiljour@sit.org",
                "username": "WMarrinson",
                "password": "gp3Ap"
            },
            {
                "id": 81223,
                "email": "LLoya@porta.org",
                "username": "LChase",
                "password": "vtRx4"
            },
            {
                "id": 81224,
                "email": "LHolland@amet.com",
                "username": "IDelatorre",
                "password": "biSQf"
            }
        ];
    }
    AppComponent.prototype.selectuser = function (user) {
        this.activeUser = user;
    };
    AppComponent.prototype.onUserCreated = function (event) {
        this.users.push(event.user);
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: "app/app.component.html",
            styleUrls: ["app/app.component.css"]
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map