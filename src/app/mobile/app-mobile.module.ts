import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {AppMobileComponent} from "./app-mobile.component";
import {MobileRounting} from "./app-mobile.routes";
import { UserListComponent } from './user-list/user-list.component';

@NgModule({
    declarations: [AppMobileComponent, UserListComponent],
    imports: [
        CommonModule,
        MobileRounting
    ]
})
export class AppMobileModule {

}