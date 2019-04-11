import { Component, OnInit } from '@angular/core';
import { ThreadService } from '../thread.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ThreadService]
})
export class HomeComponent implements OnInit {
  threads: FirebaseListObservable<any[]>;

  constructor(private threadService: ThreadService) { }

  ngOnInit() {
    this.threads = this.threadService.getThreads()
  }
  
  deleteThread(threadKey) {
    this.threadService.deleteThread(threadKey);
  }
}
