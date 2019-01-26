import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/shared/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit(f: NgForm) {
    const { login, password } = f.value;
    this.auth.loginUser(login, password).subscribe(response => {
      if (response.ok) {
        localStorage.setItem('jwt', response.headers.get('x-set-authorization'));
        const role = response.body['role'];
        console.log(role);
        this.auth.setRole(role);

        if (role === 'admin') {
          return this.router.navigate(['admin']);
        }

        return this.router.navigate(['public']);
      }
    }, err => console.log(err));
  }
}
