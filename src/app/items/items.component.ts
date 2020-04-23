import { Component, OnInit } from '@angular/core';
import {ItemService} from '../_services/item.service';
import {Item, CommentsItem} from '../_models/item'
import {User} from '../_models/user';
@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.less']
})
export class ItemsComponent implements OnInit {
comments: CommentsItem[];
posts: Item[];
editState:boolean = false;
commentState:boolean = false;
itemToEdit: Item;
commentToEdit: CommentsItem;
users: User;
post: Item = {
  id:'',
  post: '',
  ups:0,
  downs:0,
  commentid:''
}
comment: CommentsItem = {
  id:'',
  comment:'',
  commentcodename:'',
  postid:''
}
  constructor(private itemService: ItemService) { }

  ngOnInit(): void {
    this.itemService.getItems().subscribe(posts =>{
      this.posts = posts;
    })
    this.itemService.getCommentItems().subscribe(comments=>{
      this.comments = comments;
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
  ups(post: Item){
    this.post.ups +=1;
    this.itemService.addUps(post);
  }
  downs(downs: Item){
    this.post.downs +=1;
    this.itemService.addDowns(downs);
  }
  //comment section
  onSubmit(id){
    if(this.comment.comment != '' && this.comment.commentcodename !=''){
      this.comment.postid = id;
      this.itemService.addComment(this.comment);
      this.comment.comment = '';
      this.comment.commentcodename = '';
    }
  }
  deleteComment(event, comment: CommentsItem){
    this.itemService.deleteComm(comment);
  }
}
