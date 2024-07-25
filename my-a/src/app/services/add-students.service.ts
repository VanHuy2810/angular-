import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class AddStudentsService {
  private urlSign: string = 'http://localhost:3200/api/posts/create';
  constructor(private http: HttpClient) {}

  addStudent(DataForm: {
    _id: null;
    title: string;
    subtitle: string;
    content: string;
    author: string;
    public_date: string;
    categories: string[];
  }): Observable<any> {
    return this.http.post(this.urlSign, DataForm, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    });
  }
}
