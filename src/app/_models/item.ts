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
  export interface React {
    id: any;
    userid?: any;
    idpost?:any;
}