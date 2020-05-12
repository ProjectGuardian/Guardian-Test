import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import {ItemService} from '../_services/item.service';
import {Item, CommentsItem, Likes, User} from '../_models/item'
import { AuthenticationService } from '../authentication.service';
import { interval, Observable } from 'rxjs';
import { AngularFirestore } from 'angularfire2/firestore';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.less']
})
export class ItemsComponent implements OnInit {
likes: Likes[];
comments: CommentsItem[];
posts: Item[];
users: User[];
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
user: User={
  userID: ''
}
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
//   ups(post: Item, userEmail,user){
//     // if(this.like.id.includes(`${userEmail}_${post.id}`)){
//     //   alert('You already liked the post');
//     // }else{
//     this.like.addCount = 1;
//     post.ups += this.like.addCount;
//     this.like.postID = post.id;
//     this.like.userEmail = userEmail;
//     this.like.id = `${userEmail}_${post.id}`;
//     this.itemService.updateItem(post);
//     this.itemService.setLikes(this.like.id, this.like.userEmail, this.like.postID,this.like.addCount);
//     this.user.userID = userEmail;
//     this.itemService.addUser(user);
//     // }
// }
//   downs(post: Item){
//     post.downs +=1;
//     this.itemService.updateItem(post);
//   }
  showComments(event, post: Item){
      this.commentsV = true;
      this.commentsToShow = post;
  }
  hideComments(){
    this.commentsV = false;
  }
}
