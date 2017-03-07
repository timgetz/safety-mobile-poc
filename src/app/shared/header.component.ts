import { Component, OnInit } from '@angular/core';
import {AuthService} from "./auth.service";

@Component({
  selector: 'st-header',
  templateUrl: './header.component.html',
  styles: []
})
export class HeaderComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  isAuth() {
    return this.authService.isAuthenticated();
  }

  onLogout() {
    this.authService.logout();
  }

  getLoggedInUserName() {
    return this.authService.getLoggedInUserName();
  }

}
