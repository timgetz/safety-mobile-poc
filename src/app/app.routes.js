"use strict";
var router_1 = require("@angular/router");
var APP_ROUTES = [
    { path: 'desktop', loadChildren: "app/desktop/app-desktop.module#AppDesktopModule" },
    { path: 'm', loadChildren: "app/mobile/app-mobile.module#AppMobileModule" }
];
exports.AppRounting = router_1.RouterModule.forRoot(APP_ROUTES);
