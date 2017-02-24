import {Routes, RouterModule} from "@angular/router";

import {AppDesktopComponent} from "./app-desktop.component";

const DESKTOP_ROUTES: Routes = [
    { path: 'd', redirectTo: 'dashboard', pathMatch: 'full'},
    { path: 'dashboard', component: AppDesktopComponent }
];

export const DesktopRounting = RouterModule.forChild(DESKTOP_ROUTES);