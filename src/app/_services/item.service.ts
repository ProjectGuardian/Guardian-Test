import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from 'angularfire2/firestore';
import {Item} from '../_models/item';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  itemsCollection : AngularFirestoreCollection<Item>;
  posts: Observable<Item[]>;
  postDoc:AngularFirestoreDocument<Item>;

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
  }
  getItems(){
    return this.posts;
  }
  addItem(post:Item){
    this.itemsCollection.add(post);
  }
  addComment(comments: Item){
    this.itemsCollection.add(comments);
  }
  deleteItem(post:Item){
    this.postDoc = this.afs.doc(`posts/${post.id}`);
    this.postDoc.delete();
  }
  updateItem(post:Item){
    this.postDoc = this.afs.doc(`posts/${post.id}`);
    this.postDoc.update(post);
  }
} 


