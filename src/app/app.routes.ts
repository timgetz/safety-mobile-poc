import {Routes, RouterModule} from "@angular/router";
import {SignUpComponent} from "./authentication/sign-up.component";
import {SignInComponent} from "./authentication/sign-in.component";
import {AuthGuard} from "./shared/auth.guard";
import {HomeComponent} from "./shared/home.component";

const APP_ROUTES: Routes = [
    {path: '', redirectTo: '/signin', pathMatch: 'full'},
    {path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
    {path: 'd', loadChildren: "app/desktop/app-desktop.module#AppDesktopModule", canActivate: [AuthGuard] },
    {path: 'm', loadChildren: "app/mobile/app-mobile.module#AppMobileModule", canActivate: [AuthGuard] },
    {path: 'signup', component: SignUpComponent },
    {path: 'signin', component: SignInComponent}

];

export const AppRounting = RouterModule.forRoot(APP_ROUTES);