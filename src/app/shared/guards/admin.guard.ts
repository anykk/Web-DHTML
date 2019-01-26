import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(private auth: AuthService, private router: Router) { }

  canActivate(): boolean {
    if (this.auth.loggedIn()) {
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
