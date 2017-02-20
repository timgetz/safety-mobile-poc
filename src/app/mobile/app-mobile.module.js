"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var app_mobile_component_1 = require("./app-mobile.component");
var app_mobile_routes_1 = require("./app-mobile.routes");
var user_list_component_1 = require('./user-list/user-list.component');
var AppMobileModule = (function () {
    function AppMobileModule() {
    }
    AppMobileModule = __decorate([
        core_1.NgModule({
            declarations: [app_mobile_component_1.AppMobileComponent, user_list_component_1.UserListComponent],
            imports: [
                common_1.CommonModule,
                app_mobile_routes_1.MobileRounting
            ]
        })
    ], AppMobileModule);
    return AppMobileModule;
}());
exports.AppMobileModule = AppMobileModule;
