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
  export interface Vid{
    id:any;
    vidLink:any;
  }
  export interface Brackets{
    id:any;
    bLink:any;
  }
  export interface Marqs{
    id:any;
    marqText:any;
  }
  export interface Updates{
    id: any;
    uText: any;
    date: any;
    imgLink: any;
    title: any;
  }