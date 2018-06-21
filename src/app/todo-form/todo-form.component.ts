import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo-service.service';
import { Todo } from '../_model/todo';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {

  todo: Todo;

  constructor(
    private todoService: TodoService
  ) { }

  ngOnInit() {
    this.clear();
  }

  clear() {
    this.todo = { task: '', isCompleted: false, isArchive: false };
  }

  onSave() {
    this.todoService.addTodo(this.todo);
    this.clear();
  }

}
