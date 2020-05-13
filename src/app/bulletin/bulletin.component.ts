import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFirestore } from 'angularfire2/firestore';
import { ItemService } from '@/_services/item.service';
import { Sched } from '@/_models/item';
import { AuthenticationService } from '@/authentication.service';

@Component({
  selector: 'app-bulletin',
  templateUrl: './bulletin.component.html',
  styleUrls: ['./bulletin.component.less']
})
export class BulletinComponent implements OnInit {
 scheds:Sched[];
 sched: Sched ={
   id:'',
   imgLink:''
 }
  constructor(private router : Router, 
              private itemService: ItemService,
              private afs: AngularFirestore,
              public auth: AuthenticationService) {
    
   }
  ngOnInit(): void {
    this.itemService.getSched().subscribe(scheds => {
      this.scheds = scheds;
    })
    if(this.sched.id == '1'){
      var matchno = this.sched.id;
    }
  }
  blogPage(){
    this.router.navigate(['/update-page']);
    document.getElementById('blogIcon').style.backgroundColor = "rgba(190, 190, 190, 0.116)";
    document.getElementById('trophyIcon').style.backgroundColor = "transparent";
    document.getElementById('homeIcon').style.backgroundColor = "transparent";
    document.getElementById('contactIcon').style.backgroundColor = "transparent";
  }
  deleteSched(event, sched: Sched){
    this.itemService.deleteSched(sched);
  }
}
