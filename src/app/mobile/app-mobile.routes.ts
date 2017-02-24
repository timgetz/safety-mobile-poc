import {Routes, RouterModule} from "@angular/router";

import {AppMobileComponent} from "./app-mobile.component";
import {UserListComponent} from "./user-list/user-list.component";

const MOBILE_ROUTES: Routes = [
     { path: 'm', component: AppMobileComponent },
    { path: 'list', component: UserListComponent }
];

export const MobileRounting = RouterModule.forChild(MOBILE_ROUTES);