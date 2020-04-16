import { Component, OnInit } from '@angular/core';

import { first } from 'rxjs/operators';

import { User } from '../_models/user';
import { UserService, AuthenticationService } from '../_services';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.less']
})
export class AdminComponent implements OnInit {
  currentUser: User;
  users = [];

  constructor(private authenticationService: AuthenticationService,
              private userService: UserService) {
              this.currentUser = this.authenticationService.currentUserValue;
               }

  ngOnInit(): void {
    this.loadAllUsers();
  }
  private loadAllUsers() {
    this.userService.getAll()
        .pipe(first())
        .subscribe(users => this.users = users);
}
deleteUser(id: number) {
  this.userService.delete(id)
      .pipe(first())
      .subscribe(() => this.loadAllUsers());
}

}
