import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'st-app-mobile',
  templateUrl: './app-mobile.component.html',
  styleUrls: ['./app-mobile.component.css']
})
export class AppMobileComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log("AppMobileComponent onInit()");
  }

}
