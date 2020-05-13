export interface Item{
    id:any;
    post?:string;
    codename?:string;
    ups?:number;
    downs?:number;
    commentid?:any;
    userName?:string;
    timeDate?:any;
  }
  export interface CommentsItem{
    id:any;
    comment?:string;
    commentcodename?:string;
    postid:any;
    ctimeDate?:any;
  }
  export interface Likes{
    id:any;
    postID?:string;
    userEmail?:string;
    addCount?:number;
  }
  export interface Sched{
    id:any;
    imgLink:any;
  }