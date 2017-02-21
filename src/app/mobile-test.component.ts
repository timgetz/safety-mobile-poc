import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'st-mobile-test',
  template: `
    <p>
      mobile-test Works!
    </p>
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class MobileTestComponent implements OnInit {

  private router : Router;
  private needToRoute : boolean;

  constructor( private _router: Router) {
    this.router = _router;
    this.needToRoute = true;
  }

  ngOnInit() {
    console.log("MobileTestComponent onInit()");
    if (this.needToRoute) {
      console.log("needToRoute="+this.needToRoute);
      this.needToRoute = false;
      this._router.navigate(['/m']);
    }
  }


}
