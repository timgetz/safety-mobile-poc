import { RouterModule } from "@angular/router";
import { AppMobileComponent } from "./app-mobile.component";
import { UserListComponent } from "./user-list/user-list.component";
var MOBILE_ROUTES = [
    { path: '', component: AppMobileComponent },
    { path: 'list', component: UserListComponent }
];
export var MobileRounting = RouterModule.forChild(MOBILE_ROUTES);
//# sourceMappingURL=/Users/tgetz/Projects/safety-mobile-poc/src/app/mobile/app-mobile.routes.js.map