import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bulletin',
  templateUrl: './bulletin.component.html',
  styleUrls: ['./bulletin.component.less']
})
export class BulletinComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit(): void {
  }
  blogPage(){
    this.router.navigate(['/update-page']);
    document.getElementById('blogIcon').style.backgroundColor = "rgba(190, 190, 190, 0.116)";
    document.getElementById('trophyIcon').style.backgroundColor = "transparent";
    document.getElementById('homeIcon').style.backgroundColor = "transparent";
    document.getElementById('contactIcon').style.backgroundColor = "transparent";
  }
}
