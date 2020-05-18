import { Component, OnInit } from '@angular/core';
import { AuthenticationService, TokenPayload } from '../authentication.service';
import { Router } from '@angular/router';
import { CommentsItem, Item } from '../_models';
import { ItemService } from '../_services/item.service';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.less']
})
export class AddPostComponent implements OnInit {

  constructor(public auth: AuthenticationService, private router: Router,private itemService:ItemService) { }
  now = new Date();
  comments: CommentsItem[];
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
    }else{
      document.getElementById('errorCon').style.visibility = 'visible';
      document.getElementById('error').style.visibility = 'visible';

      setTimeout(() => document.getElementById('errorCon').style.visibility = 'hidden', 3000);
      setTimeout(() => document.getElementById('error').style.visibility = 'hidden', 3000);
    }
  }
}
