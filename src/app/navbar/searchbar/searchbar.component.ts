import { Component,Input, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.less']
})
export class SearchbarComponent implements OnInit {
  searchword: String;

  constructor() { }

  ngOnInit(): void {
  }
  @Output() searchcriteria = new EventEmitter<String>();
  searchThis() {
  this.searchcriteria.emit(this.searchword)
}
}
