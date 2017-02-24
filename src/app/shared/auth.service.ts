import { Injectable } from '@angular/core';
import {User} from "./user.interface";
import {Router} from "@angular/router";

declare var firebase: any;

@Injectable()
export class AuthService {

  constructor(private router: Router) { }

  signupUser(user: User) {
    firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
        .catch(function(error) {
          console.log(error);
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          // ...
        });
  }

  signinUser(user: User) {
    var _self = this;

    firebase.auth().signInWithEmailAndPassword(user.email, user.password)
        .then(function(result) {
            console.log("User ("+user.email+") signed in.");
            _self.router.navigate(['/']);
        }, function(error) {
          console.log(error);
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          // ...
        });
  }

  logout() {
      var _self = this;
      firebase.auth().signOut().then(function() {
          // Sign-out successful.
          console.log("User signed out.");
          _self.router.navigate(['/signin']);
      }, function(error) {
          // An error happened.
          console.log(error);
      });
  }

  isAuthenticated() {
      var user = firebase.auth().currentUser;

      if (user) {
          return true;  // User is signed in.
      } else {
          return false;  // No user is signed in.
      }
  }

}
