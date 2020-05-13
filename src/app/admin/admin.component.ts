import { Component, OnInit } from '@angular/core';
import { ItemService } from '@/_services/item.service';
import { Sched } from '@/_models/item';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.less']
})
export class AdminComponent implements OnInit {
  scheds:Sched[];
  sched: Sched ={
    id:'',
    imgLink:''
  }
  constructor(private router : Router, private itemService: ItemService) {
               }
  ngOnInit(): void {
    this.itemService.getSched().subscribe(scheds => {
      this.scheds = scheds;
    })
  }
  onSubmit(){
    this.itemService.addLink(this.sched);
    this.sched.imgLink = '';
    this.sched.id = '';
  }
}

