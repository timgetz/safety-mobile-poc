import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {AppMobileComponent} from "./app-mobile.component";
import {MobileRounting} from "./app-mobile.routes";
import { UserListComponent } from './user-list/user-list.component';
import { MobileSlidingPanelComponent } from './mobile-sliding-panel/mobile-sliding-panel.component';

@NgModule({
    declarations: [
        AppMobileComponent,
        UserListComponent,
        MobileSlidingPanelComponent
    ],
    imports: [
        CommonModule,
        MobileRounting
    ]
})
export class AppMobileModule {

}