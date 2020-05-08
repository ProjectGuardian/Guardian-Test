import { Component, OnInit } from '@angular/core';
import {User} from '../_models/user';
import { AuthenticationService } from '../_services/authentication.service';
import {ItemService} from '../_services/item.service';


@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.less']
})
export class UserProfileComponent implements OnInit {
  currentUser: User;
  firstName: string;

  constructor(private itemService: ItemService,private authenticationService: AuthenticationService) { 
    this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
  }

  ngOnInit(): void {
  }

}
