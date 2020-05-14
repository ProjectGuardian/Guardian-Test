import { Component, OnInit } from '@angular/core';
import { AuthenticationService} from '../authentication.service';
import { ItemService } from '@/_services/item.service';
import { Sched, Vid, Brackets, Marqs } from '@/_models/item';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {
marqs: Marqs[];
marq: Marqs = {
  id:'',
  marqText:''
}
  constructor(public auth:AuthenticationService,private router : Router, private itemService: ItemService) { }

  ngOnInit(): void {
    this.itemService.getMarqs().subscribe(marqs=>{
      this.marqs = marqs;
    })
  }
}
