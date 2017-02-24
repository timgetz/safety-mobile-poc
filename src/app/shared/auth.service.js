"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var AuthService = (function () {
    function AuthService(router) {
        this.router = router;
    }
    AuthService.prototype.signupUser = function (user) {
        firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
            .catch(function (error) {
            console.log(error);
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // ...
        });
    };
    AuthService.prototype.signinUser = function (user) {
        var _self = this;
        firebase.auth().signInWithEmailAndPassword(user.email, user.password)
            .then(function (result) {
            console.log("User (" + user.email + ") signed in.");
            _self.router.navigate(['/']);
        }, function (error) {
            console.log(error);
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // ...
        });
    };
    AuthService.prototype.logout = function () {
        var _self = this;
        firebase.auth().signOut().then(function () {
            // Sign-out successful.
            console.log("User signed out.");
            _self.router.navigate(['/signin']);
        }, function (error) {
            // An error happened.
            console.log(error);
        });
    };
    AuthService.prototype.isAuthenticated = function () {
        var user = firebase.auth().currentUser;
        if (user) {
            return true; // User is signed in.
        }
        else {
            return false; // No user is signed in.
        }
    };
    AuthService = __decorate([
        core_1.Injectable()
    ], AuthService);
    return AuthService;
}());
exports.AuthService = AuthService;
