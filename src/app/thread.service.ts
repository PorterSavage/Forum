import { Injectable } from '@angular/core';
import { Thread } from './models/createPost.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class ThreadService {
  threads: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) { 
    this.threads = database.list('threads');
  }

  getThreads() {
    return this.threads;
  }

  addThread(newThread: Thread) {
    this.threads.push(newThread);
  }

  deleteThread(threadKey) {
    this.threads.remove(threadKey);
  }
}
