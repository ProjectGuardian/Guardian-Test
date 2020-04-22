export interface Item{
    id:any;
    post?:string;
    codename?:string;
    ups?:number;
    downs?:number;
    commentid?:any;
  }
  export interface CommentsItem{
    id:any;
    comment?:string;
    commentcodename?:string;
    postid:any;
  }