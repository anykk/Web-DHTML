import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService, Role } from '../services/auth.service';
import { isUndefined } from 'util';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(private auth: AuthService, private router: Router) { }

  canActivate(): boolean {
    if (this.auth.loggedIn()) {
      if (isUndefined(this.auth.getRole())) {
        const role = localStorage.getItem('jwt').split('__')[1] as Role;
        this.auth.setRole(role);
      }

      if (this.auth.getRole() === 'admin') {
        return true;
      }

      this.router.navigate(['/public']);
      return false;
    }

    this.router.navigate(['/login']);
    return false;
  }
}
