  
import { Component } from '@angular/core'
import { AuthenticationService } from './authentication.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'client';
  clicked:boolean = false;
  constructor(public auth: AuthenticationService,private router: Router) {
  }
  ngOnInit(){
  }
  login(){
    this.router.navigate(['/login']);
  }
  register(){
    this.router.navigate(['/register']);
  }
  home(){
    this.router.navigate(['/home']);
  }
  tournamentPage(){
    this.router.navigate(['/tournament-home']);
}
  blogPage(){
    this.router.navigate(['/update-page']);
  }
  contactPage(){
      this.router.navigate(['/contact']);
  }
  logout() {
    this.auth.logout();
    this.router.navigate(['/login']);
}
}