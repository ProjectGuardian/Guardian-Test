import { Component, OnInit } from '@angular/core';
import { ItemService } from '@/_services/item.service';
import { Sched, Vid, Brackets, Marqs, Updates } from '@/_models/item';
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
  brackets: Brackets[];
  bracket: Brackets={
    id:'',
    bLink:''
  }
  marqs: Marqs[];
  marq: Marqs ={
    id:'',
    marqText:''
  }
  updates: Updates[];
  update: Updates ={
    id:'',
    uText:'',
    date:'',
    imgLink:'',
    title: ''
  }
  constructor(private router : Router, private itemService: ItemService) {
               }
  ngOnInit(): void {
  }
  //Match Schedule
  onSubmit(){
    this.itemService.addLink(this.sched);
    this.sched.imgLink = '';
    this.sched.id = '';
  }
  //Highlights
  onSubmit2(){
    this.itemService.addVid(this.vid);
    this.vid.vidLink = '';
    this.vid.id = '';
  }
  //Tournament Bracket
  onSubmit3(){
    this.itemService.addBracket(this.bracket)
    this.bracket.bLink = '';
  }
  //News bar
  onSubmit4(){
    this.itemService.addMarqs(this.marq);
    this.marq.marqText = '';
  }
  //Updates
  onSubmit5(){
    this.itemService.addUpdates(this.update);
    this.update.date = '';
    this.update.uText = '';
    this.update.title = '';
    this.update.imgLink = '';
  }
}

