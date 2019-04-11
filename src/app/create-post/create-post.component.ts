import { Component, OnInit } from '@angular/core';
import { Thread } from '../models/createPost.model';
import { ThreadService } from '../thread.service';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css'],
  providers: [ThreadService]
})
export class CreatePostComponent implements OnInit {

  constructor(private threadService: ThreadService) { }

  ngOnInit() {
  }

  createThread(newTitle: string, newLink: string, newBody: string) {
    const newThread = new Thread(newTitle, newLink, newBody);
    this.threadService.addThread(newThread);
  } 
}
