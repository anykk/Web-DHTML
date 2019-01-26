import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { isNullOrUndefined } from 'util';

type Role = 'user' | 'admin';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Request-Methods': 'GET,POST,PATCH'
  });

  private role?: Role;

  constructor(private http: HttpClient) { }

  loginUser(login: string, password: string) {
    return this.http.post('http://localhost:4300/login', { login, password },
      { observe: 'response', responseType: 'json', headers: this.headers });
  }

  loggedIn(): boolean {
    return !isNullOrUndefined(localStorage.getItem('jwt'));
  }

  setRole(role: Role) {
    this.role = role;
  }

  getRole() {
    return this.role;
  }
}
