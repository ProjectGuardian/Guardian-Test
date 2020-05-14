import { Component, OnInit } from '@angular/core';
import { ItemService } from '@/_services/item.service';
import { Sched, Vid, Brackets, Marqs } from '@/_models/item';
import { Router } from '@angular/router';
@Component({
  selector: 'app-tournament-info',
  templateUrl: './tournament-info.component.html',
  styleUrls: ['./tournament-info.component.less']
})
export class TournamentInfoComponent implements OnInit {
  brackets: Brackets[];
  bracket: Brackets={
    id:'',
    bLink:''
  }
  constructor(private router : Router, private itemService: ItemService) { }

  ngOnInit(): void {
    this.itemService.getBracket().subscribe(brackets=>{
      this.brackets = brackets;
    })
  }
  deleteBracket(event, bracket: Brackets){
    this.itemService.deleteBracket(bracket);
  }
}
