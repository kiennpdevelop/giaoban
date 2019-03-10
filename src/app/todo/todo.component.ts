import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
    console.log(environment.production);
    console.log(environment.apiUrl);
  }

  logout() {
    localStorage.removeItem('currentUser');
    this.router.navigate(['/login']);
    console.log(localStorage);
  }

}
