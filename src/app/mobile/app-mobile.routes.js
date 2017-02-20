"use strict";
var router_1 = require("@angular/router");
var app_mobile_component_1 = require("./app-mobile.component");
var user_list_component_1 = require("./user-list/user-list.component");
var MOBILE_ROUTES = [
    { path: '', component: app_mobile_component_1.AppMobileComponent },
    { path: 'list', component: user_list_component_1.UserListComponent }
];
exports.MobileRounting = router_1.RouterModule.forChild(MOBILE_ROUTES);
