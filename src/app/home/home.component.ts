import { Component, OnInit } from '@angular/core';
import { Todo } from '../models/todo';
import { TodoService } from '../services/todo.service';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(public todoService: TodoService) {
    this.todoList = [];
  }
  text: string;
  isDisplay: true;
  isSpecial: true;
  isChangeFontSize: false;
  currentClasses: {};
  currentStyles: {};
  userInfor: any = {};
  todoList: Array<Todo>;
  ngOnInit() {
    console.log(environment);
    this.text = 'Hi All';
    this.isDisplay = true;
    this.setCurrentClasses();
    this.setCurrentStyles();
    this.getTasks();
    // this.todoList = ['Nguyễn Phương Kiên',
    //   'Nhữ Bảo Vũ',
    //   'Nguyễn Văn Tuấn'
    // ];
  }
  setCurrentClasses() {
    this.currentClasses = {
      special: true,
      'color-red': true
    };
  }
  setCurrentStyles() {
    this.currentStyles = {
      'font-size': this.isDisplay ? 'italic' : 'normal',
    };
  }
  clickMe() {
    alert('Hello! I am an alert box!!');
  }
  register() {
    const infor = `Thông tin tài khoản:  ${this.userInfor.username}   , mật khẩu : ${this.userInfor.password}`;
    alert(infor);
  }
  getTasks() {
    return this.todoService.getTodoList().subscribe(result => { this.todoList = result; });
    // return this.todoService.getTodoList().subscribe(result => this.todoList.push(result) );
  }
}
