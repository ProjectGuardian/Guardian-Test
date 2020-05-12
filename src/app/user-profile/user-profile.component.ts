import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import {ItemService} from '../_services/item.service';


@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.less']
})
export class UserProfileComponent implements OnInit {
  firstName: string;

  constructor(private itemService: ItemService,public auth: AuthenticationService) { 

  }

  ngOnInit(): void {
  }

}
