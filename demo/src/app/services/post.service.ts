import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IPost } from '../post/post';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  constructor(private http: HttpClient) {}

  getPosts(): Observable<IPost[]> {
    return this.http.get<IPost[]>('http://localhost:3200/api/posts');
  }

  createPosts(posts: IPost): Observable<IPost> {
    return this.http.post<IPost>('http://localhost:3200/posts/store', posts);
  }
  // getPostsFetch(): Promise<IPost[]> {
  //   const posts = fetch('http://localhost:3200/api/posts').then((res) =>
  //     res.json()
  //   );
  //   console.log(posts);
  //   return posts;
  // }
  getPostDetail(id: IPost): Observable<IPost> {
    return this.http.get<IPost>(`http://localhost:3200/posts/${id}`);
  }
}
