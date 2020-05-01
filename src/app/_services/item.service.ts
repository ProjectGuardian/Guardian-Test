import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from 'angularfire2/firestore';
import {Item, CommentsItem, React} from '../_models/item';
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

  itemsCollection3: AngularFirestoreCollection<React>;
  reacts: Observable<React[]>;
  postDoc3: AngularFirestoreDocument<React>;

  constructor(public afs: AngularFirestore) { 
    this.itemsCollection = this.afs.collection('posts', ref => ref.orderBy('timeDate', 'desc'));
    this.posts = this.itemsCollection.snapshotChanges().pipe(map(changes => {
      return changes.map(a=>{
        const data = a.payload.doc.data() as Item
        data.id = a.payload.doc.id;
        return data;
      });
    }));
    this.itemsCollection2 = this.afs.collection('comments', ref2 => ref2.orderBy('ctimeDate', 'desc'));
    this.comments = this.itemsCollection2.snapshotChanges().pipe(map(changes2 => {
      return changes2.map(aa=>{
        const data2 = aa.payload.doc.data() as CommentsItem
        data2.id = aa.payload.doc.id;
        return data2;
      });
    }));
    this.itemsCollection3 = this.afs.collection('reacts');
    this.reacts = this.itemsCollection3.snapshotChanges().pipe(map(changes3 => {
      return changes3.map(aaa=>{
        const data3 = aaa.payload.doc.data() as React
        data3.id = aaa.payload.doc.id;
        return data3;
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
  //reacts
  getReactItems(){
    return this.reacts;
  }
  addUps(post: Item ){
    this.postDoc = this.afs.doc(`posts/${post.id}`);
    this.postDoc.update(post);
  }
  addDowns(post: Item){
    this.postDoc = this.afs.doc(`posts/${post.id}`);
    this.postDoc.update(post);
  }
  updateReact(react:React){
    this.itemsCollection3.add(react);
  }
} 


