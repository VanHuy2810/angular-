import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  Form,
  FormArray,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { PostService } from '../services/post.service';
import { IPost } from '../post/post';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrl: './new-post.component.css',
})
export class NewPostComponent {
  [x: string]: any;
  // public title: any = 'New Post';
  // public reactiveForm: FormGroup;
  public postForm!: FormGroup;
  public postFlag: boolean = false;
  public message: string = 'Post is creating...';

  ngOnInit() {
    //form
    this.postForm = new FormGroup({
      title: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
      ]),
      content: new FormControl('', [
        Validators.required,
        Validators.minLength(20),
      ]),
      author: new FormControl('', [
        Validators.required,
        Validators.minLength(10),
      ]),
      skill: new FormArray([new FormControl(null), new FormControl(null)]),
    });
  }

  constructor(private postService: PostService, private router: Router) {}

  public onSubmit() {
    if (this.postForm.invalid) {
      return;
    }

    const posts: IPost = {
      id: undefined,
      title: this.postForm.get('title')?.value ?? '',
      content: this.postForm.get('content')?.value ?? '',
      author: this.postForm.get('author')?.value ?? '',
    };

    this.postFlag = true;
    this.postService.createPosts(posts).subscribe({
      next: (data) => {
        if (data) {
          console.log('Post created successfully', data);
          this.message = 'Post created successfully!';
          setTimeout(() => {
            this.router.navigate(['/post']);
          }, 3000);
        } else {
          console.log('Error: Response data is null or undefined');
          this.message = 'Error creating post!';
          setTimeout(() => {
            this.postFlag = false;
          }, 2000);
        }
      },
      error: (err) => {
        console.error('Error creating post:', err);
        this.message = 'Post created successfully!';
        setTimeout(() => {
          this.postFlag = false;
        }, 2000);
      },
    });
  }

  public get title() {
    return this.postForm.get('title');
  }
  public get content() {
    return this.postForm.get('content');
  }

  public get author() {
    return this.postForm.get('author');
  }
}
