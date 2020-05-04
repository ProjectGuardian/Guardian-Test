import { Component, OnInit } from '@angular/core';
import {ItemService} from '../_services/item.service';
import {Item, CommentsItem, React} from '../_models/item';
import {User} from '../_models/user';
import { AuthenticationService } from '@/_services/authentication.service';


@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.less']
})
export class AddPostComponent implements OnInit {
  currentUser : User;
  comments: CommentsItem[];
  reacts: React[];
  now = new Date();
  post: Item = {
    id:'',
    post: '',
    codename:'',
    ups:0,
    downs:0,
    timeDate: ''
  }
  comment: CommentsItem = {
    id:'',
    comment:'',
    commentcodename:'',
    postid:''
  }
  react: React = {
    id:'',
    userid:'',
    idpost:''
  }

  constructor(private itemService:ItemService,private authenticationService: AuthenticationService ) {
    this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
   }

  ngOnInit(): void {
  }
  onSubmit(userName){
    if(this.post.post != '' && this.post.codename !=''){
      this.comment.postid = `${this.post.id}`
      this.post.timeDate = this.now;
      this.post.userName = userName;
      this.itemService.addItem(this.post);
      this.post.post = '';
      this.post.codename = '';
      console.log(this.currentUser.firstName);
    }
  }
}
