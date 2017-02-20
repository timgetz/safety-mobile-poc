import {Routes, RouterModule} from "@angular/router";

import {AppDesktopComponent} from "./app-desktop.component";

const DESKTOP_ROUTES: Routes = [
    { path: '', component: AppDesktopComponent }
];

export const DesktopRounting = RouterModule.forChild(DESKTOP_ROUTES);