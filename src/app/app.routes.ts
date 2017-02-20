import {Routes, RouterModule} from "@angular/router";

const APP_ROUTES: Routes = [

    {path: 'desktop', loadChildren: "app/desktop/app-desktop.module#AppDesktopModule"},
    {path: 'm', loadChildren: "app/mobile/app-mobile.module#AppMobileModule"}
];

export const AppRounting = RouterModule.forRoot(APP_ROUTES);