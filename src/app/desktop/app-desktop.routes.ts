import {Routes, RouterModule} from "@angular/router";

import {AppDesktopComponent} from "./app-desktop.component";
import {AuthGuard} from "../shared/auth.guard";

const DESKTOP_ROUTES: Routes = [
    { path: 'd', redirectTo: 'dashboard', pathMatch: 'full'},
    { path: 'dashboard', component: AppDesktopComponent, canActivate: [AuthGuard] }

];

export const DesktopRounting = RouterModule.forChild(DESKTOP_ROUTES);