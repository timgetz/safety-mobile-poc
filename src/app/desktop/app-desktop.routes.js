"use strict";
var router_1 = require("@angular/router");
var app_desktop_component_1 = require("./app-desktop.component");
var DESKTOP_ROUTES = [
    { path: '', component: app_desktop_component_1.AppDesktopComponent }
];
exports.DesktopRounting = router_1.RouterModule.forChild(DESKTOP_ROUTES);
