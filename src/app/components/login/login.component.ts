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
    // auth.loginUser
    console.log(email, password);
    // if ok
    this.router.navigate(['public']);
    // else
    return;
  }
}
