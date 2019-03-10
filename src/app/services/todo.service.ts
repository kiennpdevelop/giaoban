import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from '../models/todo';
// import { ToDo } from '@angular/mod'

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  apiUrl: string;
  constructor( public http: HttpClient) {
    this.apiUrl = 'http://node-todos.herokuapp.com/api/todos';
  }
  //  Laays danh sachs cacs tasks
  // return this.http.get(this.configUrl);
  getTodoList() {
   return this.http.get<Array<Todo>>(this.apiUrl);
  }
}
