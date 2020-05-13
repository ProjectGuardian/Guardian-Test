import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from 'angularfire2/firestore';
import {Item, CommentsItem, Likes, Sched, Vid} from '../_models/item';
import { Observable, interval } from 'rxjs';
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

  itemsCollection3 : AngularFirestoreCollection<Likes>;
  likes: Observable<Likes[]>;
  postDoc3:AngularFirestoreDocument<Likes>;

  itemsCollection4 : AngularFirestoreCollection<Sched>;
  scheds: Observable<Sched[]>;
  postDoc4:AngularFirestoreDocument<Sched>;

  itemsCollection5 : AngularFirestoreCollection<Vid>;
  vids: Observable<Vid[]>;
  postDoc5:AngularFirestoreDocument<Vid>;

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
    this.itemsCollection3 = this.afs.collection('likes');
    this.likes = this.itemsCollection3.snapshotChanges().pipe(map(changes3 => {
      return changes3.map(aaa=>{
        const data3 = aaa.payload.doc.data() as Likes
        data3.id = aaa.payload.doc.id;
        return data3;
      });
    }));
    this.itemsCollection4 = this.afs.collection('scheds', ref2 => ref2.orderBy('id', 'asc'));
    this.scheds = this.itemsCollection4.snapshotChanges().pipe(map(changes4 => {
      return changes4.map(aaaa=>{
        const data4 = aaaa.payload.doc.data() as Sched
        data4.id = aaaa.payload.doc.id;
        return data4;
      });
    }));
    this.itemsCollection5 = this.afs.collection('vids');
    this.vids = this.itemsCollection5.snapshotChanges().pipe(map(changes5 => {
      return changes5.map(aaaaa=>{
        const data5 = aaaaa.payload.doc.data() as Vid
        data5.id = aaaaa.payload.doc.id;
        return data5;
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
  getLikes(){
    return this.likes;
  }
  updateLikes(like:Likes){
    this.postDoc3 = this.afs.doc(`likes/${like.id}`);
    this.postDoc3.update(like);
  }
  addUps(like: Likes){
    this.itemsCollection3.add(like);
  }
  addUpsPost(post:Item){
    this.postDoc = this.afs.doc(`posts/${post.id}`)
    this.postDoc.update(post);
  }
  addDowns(like: Likes){
    this.postDoc3 = this.afs.doc(`likes/${like.id}`);
    this.postDoc3.update(like);
  }
  setLikes(id,userEmail,postID,addCount){
    const like: Likes = { id, userEmail, postID, addCount };
    const likesPath = `likes/${like.userEmail}_${like.postID}`;
    return this.afs.doc(likesPath).set(like);
  }
  //SCHED
  getSched(){
    return this.scheds;
  }
  addLink(sched:Sched){
    this.itemsCollection4.add(sched);
  }
  deleteSched(sched:Sched){
    this.postDoc4 = this.afs.doc(`scheds/${sched.id}`);
    this.postDoc4.delete();
  }
  //VIDS
  getVid(){
    return this.vids;
  }
  addVid(vid:Vid){
    this.itemsCollection5.add(vid);
  }
  deleteVid(vid:Vid){
    this.postDoc5 = this.afs.doc(`vids/${vid.id}`);
    this.postDoc5.delete();
  }
} 


