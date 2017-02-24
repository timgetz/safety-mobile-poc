import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'st-home',
  template: `
    <p>
      You are home.
    </p>
    <st-desktop-test *isChrome></st-desktop-test>
    <st-mobile-test *isSafari></st-mobile-test>
  `,
  styles: []
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
