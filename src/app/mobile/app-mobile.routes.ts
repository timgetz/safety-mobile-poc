import {Routes, RouterModule} from "@angular/router";

import {AppMobileComponent} from "./app-mobile.component";
import {UserListComponent} from "./user-list/user-list.component";
import {AuthGuard} from "../shared/auth.guard";

const MOBILE_ROUTES: Routes = [
    { path: 'm', redirectTo: 'm/home', pathMatch: 'full'},
    { path: 'm/home', component: AppMobileComponent, canActivate: [AuthGuard]},
    { path: 'm/home/list', component: UserListComponent, canActivate: [AuthGuard] }
];

export const MobileRounting = RouterModule.forChild(MOBILE_ROUTES);