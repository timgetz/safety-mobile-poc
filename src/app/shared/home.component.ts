import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'st-home',
  template: `
    <p>
      You are home.
    </p>
    <button [routerLink]="['/dashboard']">Go to Dashboard</button>
    <!--<st-desktop-test *isChrome></st-desktop-test>-->
    <st-mobile-test *isMobile></st-mobile-test>
  `,
  styles: []
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
