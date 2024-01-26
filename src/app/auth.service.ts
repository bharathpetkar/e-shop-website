// auth.service.ts

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
    private apiUrl = 'https://apiv2stg.promilo.com/user/oauth/token';

    constructor(private http: HttpClient) {}
  
    login(loginData: { email: string; password: string }): Observable<any> {
      const body = new FormData();
      body.append('username', loginData.email);
      body.append('password', loginData.password);
      body.append('grant_type', 'password');
  
      const headers = new HttpHeaders();
      headers.append('Content-Type', 'application/x-www-form-urlencoded');
  
      return this.http.post(this.apiUrl, body, { headers });
    }
}
