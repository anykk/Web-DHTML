import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService, Role } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private auth: AuthService, private router: Router) { }

  canActivate(): boolean {
    if (this.auth.loggedIn()) {
      const role = localStorage.getItem('jwt').split('__')[1] as Role;
      this.auth.setRole(role);

      return true;
    }

    this.router.navigate(['/login']);
    return false;
  }
}
