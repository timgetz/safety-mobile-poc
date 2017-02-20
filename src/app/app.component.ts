import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  private router : Router;

  constructor( private _router: Router) {
    this.router = _router;
  }

  onScreenSizeDesktop(event) {
    console.log("Detected Desktop!!!!");
  }

  onScreenSizeMobile(event) {
    console.log("Detected Mobile!!!!");
  }

}
