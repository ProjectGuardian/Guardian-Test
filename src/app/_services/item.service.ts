import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from 'angularfire2/firestore';
import {Item, CommentsItem} from '../_models/item';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  itemsCollection : AngularFirestoreCollection<Item>;
  posts: Observable<Item[]>;
  postDoc:AngularFirestoreDocument<Item>;

  itemsCollection2: AngularFirestoreCollection<CommentsItem>;
  comments: Observable<CommentsItem[]>;
  postDoc2: AngularFirestoreDocument<CommentsItem>;

  constructor(public afs: AngularFirestore) { 
    // this.posts = this.afs.collection('posts').valueChanges();
    this.itemsCollection = this.afs.collection('posts');
    this.posts = this.itemsCollection.snapshotChanges().pipe(map(changes => {
      return changes.map(a=>{
        const data = a.payload.doc.data() as Item
        data.id = a.payload.doc.id;
        return data;
      });
    }));
    this.itemsCollection2 = this.afs.collection('comments');
    this.comments = this.itemsCollection2.snapshotChanges().pipe(map(changes2 => {
      return changes2.map(aa=>{
        const data2 = aa.payload.doc.data() as CommentsItem
        data2.id = aa.payload.doc.id;
        return data2;
      });
    }));
  }
  getItems(){
    return this.posts;
  }
  addItem(post:Item){
    this.itemsCollection.add(post);
  }
  deleteItem(post:Item){
    this.postDoc = this.afs.doc(`posts/${post.id}`);
    this.postDoc.delete();
  }
  updateItem(post:Item){
    this.postDoc = this.afs.doc(`posts/${post.id}`);
    this.postDoc.update(post);
  }
  addUps(post: Item ){
    this.postDoc = this.afs.doc(`posts/${post.id}`);
    this.postDoc.update(post);
  }
  addDowns(post: Item){
    this.postDoc = this.afs.doc(`posts/${post.id}`);
    this.postDoc.update(post);
  }
  //comment section
  getCommentItems(){
    return this.comments;
  }
  addComment(comment:CommentsItem){
    this.itemsCollection2.add(comment);
  }
  deleteComm(comment:CommentsItem){
    this.postDoc2 = this.afs.doc(`comments/${comment.id}`);
    this.postDoc2.delete();
  }
} 


