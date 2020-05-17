import { Component, OnInit } from '@angular/core';
import { ItemService } from '@/_services/item.service';
import { Updates } from '@/_models/item';
import { AuthenticationService } from '@/authentication.service';

@Component({
  selector: 'app-update-page',
  templateUrl: './update-page.component.html',
  styleUrls: ['./update-page.component.less']
})
export class UpdatePageComponent implements OnInit {

  constructor(private itemService: ItemService, public auth : AuthenticationService) { }
  updates: Updates[];
  update: Updates ={
    id:'',
    uText:'',
    date:'',
    imgLink:'',
    title:''
  }
  ngOnInit(): void {
    this.itemService.getUpdates().subscribe(updates => {
      this.updates = updates;
    })
  }
  deleteUpdate(event, update: Updates){
    this.itemService.deleteUpdates(update);
  }
}
