import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import {ItemService} from '../_services/item.service';
import {Item, CommentsItem,React} from '../_models/item'
import {User} from '../_models/user';
import { AuthenticationService } from '../_services/authentication.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.less']
})
export class ItemsComponent implements OnInit {
comments: CommentsItem[];
posts: Item[];
firstName: string;
reacts:React[];
commentsV:boolean = false;
editState:boolean = false;
commentState:boolean = false;
itemToEdit: Item;
commentsToShow: Item;
commentToEdit: CommentsItem;
currentUser:User;
cTimeDate =  Date();
clicked:boolean = false;
post: Item = {
  id:'',
  post: '',
  ups:0,
  downs:0,
  commentid:'',
  userName:'',
  timeDate:''
}
comment: CommentsItem = {
  id:'',
  comment:'',
  commentcodename:'',
  postid:'',
  ctimeDate:''
}
react: React={
  id:'',
  userid:'',
  idpost:''
}
  constructor(private itemService: ItemService,private authenticationService: AuthenticationService) { 
    this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
  }

  ngOnInit(): void {
    this.itemService.getItems().subscribe(posts =>{
      this.posts = posts;
    })
    this.itemService.getCommentItems().subscribe(comments=>{
      this.comments = comments;
    })
    this.itemService.getReactItems().subscribe(reacts=>{
      this.reacts = reacts;
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
  
 
  //comment section
  onSubmit(id,name){
    if(this.comment.comment != ''){
      this.comment.ctimeDate = this.cTimeDate;
      this.comment.commentcodename = name;
      this.comment.postid = id;
      this.itemService.addComment(this.comment);
      this.comment.comment = '';
      this.comment.commentcodename = '';
    }
  }
  deleteComment(event, comment: CommentsItem){
    this.itemService.deleteComm(comment);
  }
  //Reacts
  upsDowns(post: Item){
    post.ups +=1;
    console.log("Ups: "+post.ups);
    console.log("Downs: "+post.downs);
    this.itemService.updateItem(post);
}
  upsDowns2(post: Item){
    post.downs +=1;
    console.log("Ups: "+post.ups);
    console.log("Downs: "+post.downs);
    this.itemService.updateItem(post);
  }
  showComments(event, post: Item){
      this.commentsV = true;
      this.commentsToShow = post;
  }
  hideComments(){
    this.commentsV = false;
  }
}
