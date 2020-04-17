import { Component, OnInit } from '@angular/core';
import {ItemService} from '../_services/item.service';
import {Item} from '../_models/item'

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.less']
})
export class AddPostComponent implements OnInit {
  post: Item = {
    id:'',
    post: '',
    comments: ''
  }

  constructor(private itemService:ItemService ) { }

  ngOnInit(): void {
  }
  onSubmit(){
    if(this.post.post != '' && this.post.comments !=''){
      this.itemService.addItem(this.post);
      this.post.post = '';
      this.post.comments = '';
    }
  }
}