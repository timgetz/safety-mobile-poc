import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {ResponsiveModule} from "ng2-responsive";
import { AppDesktopComponent } from './desktop/app-desktop.component';
import { AppMobileComponent } from './mobile/app-mobile.component';

@NgModule({
  declarations: [
    AppComponent,
    AppDesktopComponent,
    AppMobileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ResponsiveModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
