import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  registerUser(userData: any): Observable<any> {
    return this.http.post<any>('http://localhost:3200/auth/register', userData);
  }

  loginUser(userData: any): Observable<any> {
    return this.http.post<any>('http://localhost:3200/auth/login', userData);
  }
}
