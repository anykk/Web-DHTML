import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  loginUser(user) {
    return this.http.post('url', user); // paswd hash must be + over ssl
  }

  loggedIn(): Boolean {
    return true; // !!cookie.getToken()
  }
}
