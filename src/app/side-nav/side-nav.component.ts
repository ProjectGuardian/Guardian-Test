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
