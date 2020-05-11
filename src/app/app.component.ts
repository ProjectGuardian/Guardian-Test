  
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
  activePage:boolean = false;
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
    document.getElementById('homeIcon').style.backgroundColor = "rgba(190, 190, 190, 0.116)";
    document.getElementById('trophyIcon').style.backgroundColor = "transparent";
    document.getElementById('blogIcon').style.backgroundColor = "transparent";
    document.getElementById('contactIcon').style.backgroundColor = "transparent";
  }
  tournamentPage(){
    document.getElementById('trophyIcon').style.backgroundColor = "rgba(190, 190, 190, 0.116)";
    document.getElementById('homeIcon').style.backgroundColor = "transparent";
    document.getElementById('blogIcon').style.backgroundColor = "transparent";
    document.getElementById('contactIcon').style.backgroundColor = "transparent";
    this.router.navigate(['/tournament-home']);
}
  blogPage(){
    document.getElementById('blogIcon').style.backgroundColor = "rgba(190, 190, 190, 0.116)";
    document.getElementById('trophyIcon').style.backgroundColor = "transparent";
    document.getElementById('homeIcon').style.backgroundColor = "transparent";
    document.getElementById('contactIcon').style.backgroundColor = "transparent";
    this.router.navigate(['/update-page']);
  }
  contactPage(){
    document.getElementById('contactIcon').style.backgroundColor = "rgba(190, 190, 190, 0.116)";
    document.getElementById('trophyIcon').style.backgroundColor = "transparent";
    document.getElementById('blogIcon').style.backgroundColor = "transparent";
    document.getElementById('homeIcon').style.backgroundColor = "transparent";
      this.router.navigate(['/contact']);
  }
  logout() {
    this.auth.logout();
    this.router.navigate(['/login']);
}
}