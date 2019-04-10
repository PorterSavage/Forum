import { Component, OnInit } from '@angular/core';
import { Thread } from '../models/createPost.model';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  createThread(newTitle: string, newLink: string, newBody: string) {
    const newThread = new Thread(newTitle, newLink, newBody);
    console.log(newThread);
  }

}
