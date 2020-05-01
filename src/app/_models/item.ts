export interface Item{
    id:any;
    post?:string;
    codename?:string;
    ups?:number;
    downs?:number;
    commentid?:any;
    userUDid?:[];
    timeDate?:any;
  }
  export interface CommentsItem{
    id:any;
    comment?:string;
    commentcodename?:string;
    postid:any;
  }
  export interface React {
    id: any;
    userid: any;
    idpost:any;
}