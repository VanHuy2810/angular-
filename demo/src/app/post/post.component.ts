import { Component, Inject } from '@angular/core';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrl: './post.component.css',
})
export class PostComponent {
  public posts: any = [];
  public postsFetch: any = [];

  constructor(@Inject(PostService) private _postService: PostService) {}

  ngOnInit() {
    // using observable
    this._postService.getPosts().subscribe((data) => {
      this.posts = data;
    });
  }
}
