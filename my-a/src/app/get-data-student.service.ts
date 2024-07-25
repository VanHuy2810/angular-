import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';

import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class GetDataStudentService {
  private url = 'http://localhost:3200/api/posts';
  constructor(private http: HttpClient) {}
  getStudent(): Observable<any> {
    return this.http.get<any>(this.url);
  }

  getPostDetail(id: any): Observable<any> {
    return this.http.get<any>(`${this.url}/${id}`);
  }
}
