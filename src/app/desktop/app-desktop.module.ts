import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {AppDesktopComponent} from "./app-desktop.component";
import {DesktopRounting} from "./app-desktop.routes";

@NgModule({
    declarations: [AppDesktopComponent],
    imports: [
        CommonModule,
        DesktopRounting
    ]
})
export class AppDesktopModule {

}