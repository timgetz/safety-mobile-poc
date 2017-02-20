import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'st-mobile-test',
  template: `
    <p>
      mobile-test Works!
    </p>
  `,
  styles: []
})
export class MobileTestComponent implements OnInit {

  private router : Router;

  constructor( private _router: Router) {
    this.router = _router;
  }

  ngOnInit() {
    this._router.navigate(['/m']);
  }


}
