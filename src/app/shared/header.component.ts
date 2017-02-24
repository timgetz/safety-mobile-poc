import { Component, OnInit } from '@angular/core';
import {AuthService} from "./auth.service";

@Component({
  selector: 'st-header',
  template: `
        <header>
            <nav class="navbar navbar-default">
                <div class="container-fluid">
        
                    <ul class="nav navbar-nav">
        

                        <li><a [routerLink]="['m']">Mobile Site</a></li>
                        <li><a [routerLink]="['home']">Desktop Site</a></li>
                        <li><a [routerLink]="['protected']">Protected</a></li>
        
                    </ul>
                    <ul class="nav navbar-nav navbar-right" *ngIf="isAuth()">
                        <li><a>{{getLoggedInUserName()}}</a></li>
                        <li><a (click)="onLogout()">Logout</a></li>
                    </ul>
                     <ul class="nav navbar-nav navbar-right" *ngIf="!isAuth()">
                        <li><a>{{getLoggedInUserName()}}</a></li>
                        <li><a [routerLink]="['signup']">Sign Up</a></li>
                        <li><a [routerLink]="['signin']">Sign In</a></li>
                    </ul>     
                                            
                </div><!-- /.container-fluid -->
        
            </nav>
        
        </header>
    `,
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
