import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import {ItemService} from '../_services/item.service';
import {Item, CommentsItem, Likes} from '../_models/item'
import { AuthenticationService } from '../authentication.service';
import { interval, Observable } from 'rxjs';
import { AngularFirestore } from 'angularfire2/firestore';

export interface UserDetails {
  id: number
  first_name: string
  last_name: string
  email: string
  password: string
  exp: number
  iat: number
  college: string
}
export interface TokenPayload {
  id: number
  first_name: string
  last_name: string
  email: string
  password: string
  college:string
}
@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.less']
})
export class ItemsComponent implements OnInit {
likes: Likes[];
comments: CommentsItem[];
posts: Item[];
search;
firstName: string;
commentsV:boolean = false;
editState:boolean = false;
commentState:boolean = false;
itemToEdit: Item;
commentsToShow: Item;
commentToEdit: CommentsItem;
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
like: Likes = {
  id:'',
  postID: '',
  userEmail: '',
  addCount:0
}

credentials: TokenPayload = {
  id: 0,
  first_name: "",
  last_name: "",
  email: "",
  password: "",
  college: ""
};
  constructor(public auth: AuthenticationService, private itemService: ItemService,private afs: AngularFirestore) { 
  }

  ngOnInit(): void {
    this.itemService.getItems().subscribe(posts =>{
      this.posts = posts;
    })
    this.itemService.getCommentItems().subscribe(comments=>{
      this.comments = comments;
    })
    this.itemService.getLikes().subscribe(likes => {
      this.likes = likes;
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
  ups(post: Item, userEmail){
    // if(){
    //   alert('You already liked this post')
    // }else{
    //   console.log(this.like.id);
    // }
    if(this.likes.find(x => x.id == `${this.auth.getUserDetails().email}_${post.id}`)){
      alert('You already liked the post');
      console.log(this.like.id);
    }else{
    console.log(this.like.id);
    this.like.addCount = 1;
    post.ups += this.like.addCount;
    this.like.postID = post.id;
    this.like.userEmail = userEmail;
    this.like.id = `${userEmail}_${post.id}`;
    this.itemService.updateItem(post);
    this.itemService.setLikes(this.like.id, this.like.userEmail, this.like.postID,this.like.addCount);
    }
}
  showComments(event, post: Item){
      this.commentsV = true;
      this.commentsToShow = post;
  }
  hideComments(){
    this.commentsV = false;
  }
}
