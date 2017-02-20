import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {ResponsiveModule} from "ng2-responsive";
import {AppDesktopModule} from "./desktop/app-desktop.module";
import {AppMobileModule} from "./mobile/app-mobile.module";
import {AppRounting} from "./app.routes";
import { DesktopTestComponent } from './desktop-test.component';
import { MobileTestComponent } from './mobile-test.component';

@NgModule({
  declarations: [
    AppComponent,
    DesktopTestComponent,
    MobileTestComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ResponsiveModule,
    AppDesktopModule,
    AppMobileModule,
    AppRounting
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
