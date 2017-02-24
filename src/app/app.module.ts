import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {ResponsiveModule} from "ng2-responsive";
import {AppDesktopModule} from "./desktop/app-desktop.module";
import {AppMobileModule} from "./mobile/app-mobile.module";
import {AppRounting} from "./app.routes";
import { DesktopTestComponent } from './shared/desktop-test.component';
import { MobileTestComponent } from './shared/mobile-test.component';
import { SignInComponent } from './authentication/sign-in.component';
import { SignUpComponent } from './authentication/sign-up.component';
import { HeaderComponent } from './shared/header.component';
import {AuthService} from "./shared/auth.service";
import {AuthGuard} from "./shared/auth.guard";
import { HomeComponent } from './shared/home.component';

@NgModule({
  declarations: [
    AppComponent,
    DesktopTestComponent,
    MobileTestComponent,
    SignInComponent,
    SignUpComponent,
    HeaderComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ResponsiveModule,
    AppDesktopModule,
    AppMobileModule,
    AppRounting,
    ReactiveFormsModule
  ],
  providers: [
    AuthService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
