import { Component, OnInit } from '@angular/core';
import { ItemService } from '@/_services/item.service';
import { Sched, Vid } from '@/_models/item';
import { Router } from '@angular/router';
import { AuthenticationService } from '@/authentication.service';
@Component({
  selector: 'app-tournament-feature',
  templateUrl: './tournament-feature.component.html',
  styleUrls: ['./tournament-feature.component.less']
})
export class TournamentFeatureComponent implements OnInit {
  vids: Vid[];
  vid: Vid={
    id:'',
    vidLink:''
  }
  constructor(private router : Router, private itemService: ItemService, public auth: AuthenticationService) { }

  ngOnInit(): void {
    this.itemService.getVid().subscribe(vids => {
      this.vids = vids;
    })
  }
  deleteVid(event, vid: Vid){
    this.itemService.deleteVid(vid);
  }
}
