import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'st-desktop-test',
  template: `
    <p>
      desktop-test Works!
    </p>
    <!--<router-outlet></router-outlet>-->
  `,
  styles: []
})
export class DesktopTestComponent implements OnInit {

  private router : Router;

  constructor( private _router: Router) {
    this.router = _router;
  }

  ngOnInit() {
    // console.log("DesktopTestComponent onInit()");
    // this._router.navigate(['/desktop']);
  }



}
