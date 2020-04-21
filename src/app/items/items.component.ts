import { Component, OnInit } from '@angular/core';
import {ItemService} from '../_services/item.service';
import {Item} from '../_models/item'
import {User} from '../_models/user';
@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.less']
})
export class ItemsComponent implements OnInit {

posts: Item[];
editState:boolean = false;
commentState:boolean = false;
itemToEdit: Item;
users: User;
post: Item = {
  id:'',
  post: '',
  comments: '',
  codename2:''
}
  constructor(private itemService: ItemService) { }

  ngOnInit(): void {
    this.itemService.getItems().subscribe(posts =>{
      this.posts = posts;
    })
  }
  deleteItem(event, post: Item){
    this.clearState();
    this.itemService.deleteItem(post);
  }
  editItem(event, post: Item){
    this.editState = true;
    this.itemToEdit = post;
  }
  updateItem(post: Item){
    this.itemService.updateItem(post);
    this.clearState();
  }
  clearState(){
    this.editState = false;
    this.itemToEdit = null;
  }
  showComments(event, comments:Item){
    this.itemService.getItems().subscribe(comments =>{
      this.posts = comments;
    })
    this.commentState = true;
  }
  hideComments(){
    this.commentState = false;
  }
  onComment(){
    if(this.post.comments != '' && this.post.codename2 !=''){
      this.itemService.addComment(this.post);
      this.post.comments = '';
      this.post.codename2 = '';
    }
  }
}
