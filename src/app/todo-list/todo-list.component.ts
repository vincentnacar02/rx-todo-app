import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo-service.service';
import { Todo } from '../_model/todo';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  todos: Observable<Todo[]>;

  constructor(
    private todoService: TodoService
  ) { }

  ngOnInit() {
    this.todos = this.todoService.onUpdate();
    this.todos.subscribe(items => {
      console.log(items);
    });
  }

}
