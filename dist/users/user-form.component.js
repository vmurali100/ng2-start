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
var core_1 = require("@angular/core");
var user_1 = require("../shared/modals/user");
var UserFormComponent = (function () {
    function UserFormComponent() {
        this.userCreated = new core_1.EventEmitter();
        this.newUser = new user_1.User();
        this.active = true;
    }
    UserFormComponent.prototype.onSubmit = function () {
        var _this = this;
        this.userCreated.emit({ user: this.newUser });
        this.newUser = new user_1.User();
        this.active = false;
        setTimeout(function () { return _this.active = true; }, 0);
    };
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], UserFormComponent.prototype, "userCreated", void 0);
    UserFormComponent = __decorate([
        core_1.Component({
            selector: 'user-form',
            styles: ["\n\t\tform{\n\t\t\tpadding:10px;\n\t\t\tbackground:#ECF0F1;\n\t\t\tborder-radius:5px;\n\t\t}\n\n\t"],
            template: "\n\t\t<form #form='ngForm' (submit)='onSubmit()' *ngIf='active'>\n\t\t{{form.valid}}\n\t\t\t<div class='form-group' [ngClass]=\"{'has-error':username.invalid && username.touched}\">\n\t\t\t\t<input type='text' name='username' class='form-control' required \n\n\t\t\t\t[(ngModel)]='newUser.username' #username='ngModel' placeholder='User Name'\n\n\t\t\t\t>\n\t\t\t\t<span *ngIf='username.invalid && username.touched'>Name is Required</span>\n\t\t\t</div>\n\t\t\t<div class='form-group' [ngClass]=\"{'has-error':email.invalid && email.touched}\">\n\t\t\t\t<input type='text' name='email' class='form-control' required placeholder='Email'\n\t\t\t\t[(ngModel)]='newUser.email' #email='ngModel'>\n\t\t\t\t<span *ngIf='email.invalid && email.touched'>Email is Required</span>\n\t\t\t</div>\n\t\t\t<button class='btn btn-lg btn-block btn-primary' [disabled]='form.invalid'>Create User</button>\n\t\t</form>\n\t"
        })
    ], UserFormComponent);
    return UserFormComponent;
}());
exports.UserFormComponent = UserFormComponent;
//# sourceMappingURL=user-form.component.js.map