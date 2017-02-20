import { RouterModule } from "@angular/router";
var APP_ROUTES = [
    { path: 'desktop', loadChildren: "app/desktop/app-desktop.module#AppDesktopModule" },
    { path: 'm', loadChildren: "app/mobile/app-mobile.module#AppMobileModule" }
];
export var AppRounting = RouterModule.forRoot(APP_ROUTES);
//# sourceMappingURL=/Users/tgetz/Projects/safety-mobile-poc/src/app/app.routes.js.map