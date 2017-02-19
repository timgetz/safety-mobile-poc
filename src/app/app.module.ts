import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {ResponsiveModule} from "ng2-responsive";
import { MainDesktopComponent } from './desktop/main-desktop/main-desktop.component';
import { MainMobileComponent } from './mobile/main-mobile/main-mobile.component';

@NgModule({
  declarations: [
    AppComponent,
    MainDesktopComponent,
    MainMobileComponent
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
