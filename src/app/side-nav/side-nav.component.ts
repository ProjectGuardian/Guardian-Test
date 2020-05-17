import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service'

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.less']
})
export class SideNavComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver,public auth: AuthenticationService,private router: Router) {}
  home(){
    this.router.navigate(['/home']);
    document.getElementById('tournament').style.backgroundColor = "transparent";
    document.getElementById('updates').style.backgroundColor = "transparent";
    document.getElementById('contacts').style.backgroundColor = "transparent";
}
  tournamentPage(){
    this.router.navigate(['/tournament-home']);
    document.getElementById('tournament').style.backgroundColor = "rgba(190, 190, 190, 0.116)";
    document.getElementById('Home').style.backgroundColor = "transparent";
    document.getElementById('updates').style.backgroundColor = "transparent";
    document.getElementById('contacts').style.backgroundColor = "transparent";
}
  blogPage(){
    this.router.navigate(['/update-page']);
    document.getElementById('updates').style.backgroundColor = "rgba(190, 190, 190, 0.116)";
    document.getElementById('tournament').style.backgroundColor = "transparent";
    document.getElementById('Home').style.backgroundColor = "transparent";
    document.getElementById('contacts').style.backgroundColor = "transparent";
}
  contactPage(){
    this.router.navigate(['/contact']);
    document.getElementById('contacts').style.backgroundColor = "rgba(190, 190, 190, 0.116)";
    document.getElementById('tournament').style.backgroundColor = "transparent";
    document.getElementById('updates').style.backgroundColor = "transparent";
    document.getElementById('Home').style.backgroundColor = "transparent";
}
  dashboard(){
    this.router.navigate(['/Admin']);
    document.getElementById('contacts').style.backgroundColor = "transparent";
    document.getElementById('tournament').style.backgroundColor = "transparent";
    document.getElementById('updates').style.backgroundColor = "transparent";
    document.getElementById('Home').style.backgroundColor = "transparent";
}
  logout() {
  this.auth.logout();
  this.router.navigate(['/login']);
}
}
