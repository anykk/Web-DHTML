import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

export const TOKEN_NAME = 'jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url = '/api/auth';
  private headers = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) { }

  loginUser(email: string, password: string) {
    return this.http.post(this.url, { email, password }, {headers: this.headers});
  }

  loggedIn(): Boolean {
    return true; // !!cookie.getToken()
  }
}
