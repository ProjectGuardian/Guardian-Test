import { Component, OnInit } from '@angular/core';
import { ItemService } from '@/_services/item.service';
import { Sched, Vid } from '@/_models/item';
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
  vids: Vid[];
  vid: Vid={
    id:'',
    vidLink:''
  }
  constructor(private router : Router, private itemService: ItemService) {
               }
  ngOnInit(): void {
    this.itemService.getSched().subscribe(scheds => {
      this.scheds = scheds;
    })
    this.itemService.getVid().subscribe(vids=>{
      this.vids=vids;
    })
  }
  onSubmit(){
    this.itemService.addLink(this.sched);
    this.sched.imgLink = '';
    this.sched.id = '';
  }
  onSubmit2(){
    this.itemService.addVid(this.vid);
    this.vid.vidLink = '';
    this.vid.id = '';
  }
}

