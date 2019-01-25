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
    const { email, password } = f.value;
    // this.auth.loginUser(email, password).subscribe();
    if (email === 'test') {
      return this.router.navigate(['public']);
    }
    if (email === 'admin') {
      return this.router.navigate(['admin']);
    }
  }
}
