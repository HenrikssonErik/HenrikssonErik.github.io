import { ElementSchemaRegistry } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { timestamp } from 'rxjs';
import { Post } from '../../model/post.model';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent implements OnInit {
  title: string = '';
  content: string = '';
  currentPost: Post;
  wasValidated: boolean = false;
  display: string = 'none';
  editModal = 'none';

  posts: Post[] = [
    new Post(
      'Lorem Ipsum is simply dummy text of the printing and typesetting!',
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum'
    ),
    new Post(
      'Lorem Ipsum is simply dummy text of the printing and typesetting!',
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum'
    ),
  ];
  constructor() {}

  ngOnInit(): void {}

  validateInput(): void {
    this.wasValidated = !this.wasValidated;
  }

  deleteConfirmed(post: Post): void {
    this.posts.forEach((value, index) => {
      if (value == post) this.posts.splice(index, 1);
    });
  }

  onEdit(post: Post): void {
    this.editModal = 'block';
    this.title = post.title;
    this.content = post.content;
    this.currentPost = post;
  }

  onCloseEdit(): void {
    this.editModal = 'none';
    this.onClearInput();
  }

  editPost() {
    if (this.validateForm()) {
      let titleInput: string = (
        document.getElementById('title') as HTMLInputElement
      ).value;
      let contentInput: string = (
        document.getElementById('content') as HTMLInputElement
      ).value;
      for (let post of this.posts) {
        if (post == this.currentPost) {
          post.content = contentInput;
          post.title = titleInput;
          post.timeStamp = new Date();
          post.status = 'Ändrad';
        }
      }
      this.onCloseEdit();
      this.onClearInput();
    }
  }

  openModal(): void {
    this.wasValidated = false;
    this.onClearInput();
    this.display = 'block';
    console.log(this.wasValidated);
  }

  onCloseHandled(): void {
    this.display = 'none';
  }
  onClearInput(): void {
    this.title = '';
    this.content = '';
  }
  validateForm(): boolean {
    if (this.title == '' || this.content == '') {
      this.validateInput();
      return false;
    }
    return true;
  }

  addPost(): void {
    if (this.validateForm()) {
      let titleInput: string = (
        document.getElementById('title') as HTMLInputElement
      ).value;
      let contentInput: string = (
        document.getElementById('content') as HTMLInputElement
      ).value;
      this.posts.unshift(new Post(titleInput, contentInput));
      this.onCloseHandled();
    }
  }
}
