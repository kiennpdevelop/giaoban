import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user: string;
  password: string;
  constructor(private router: Router) {
   }

  ngOnInit() {
  }
  login() {
    if (this.user === 'username' && this.password === '123456') {
      localStorage.setItem('currentUser', 'username');
      // tslint:disable-next-line:semicolon
      this.router.navigate(['/todo'])
    }
  }
}
