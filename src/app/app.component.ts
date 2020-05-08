import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from './_services';
import { User } from './_models';


@Component({ 
    selector: 'app-root', 
    templateUrl: 'app.component.html'
})
export class AppComponent {
    currentUser: User;
  title: "AUP | Guardians";

    constructor(
        private router: Router,
        private authenticationService: AuthenticationService
    ) {
        this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
    }

    logout() {
        this.authenticationService.logout();
        this.router.navigate(['/login']);
    }
    tournamentPage(){
        this.router.navigate(['/tournament-home']);
    }
    home(){
        this.router.navigate(['']);
    }
    blogPage(){
        this.router.navigate(['/update-page']);
    }
}