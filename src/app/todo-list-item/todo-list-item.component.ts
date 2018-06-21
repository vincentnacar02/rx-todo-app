import { Component, OnInit, Input } from '@angular/core';
import { Todo } from '../_model/todo';

@Component({
  selector: 'app-todo-list-item',
  templateUrl: './todo-list-item.component.html',
  styleUrls: ['./todo-list-item.component.css']
})
export class TodoListItemComponent implements OnInit {

  @Input() todo: Todo;

  constructor() { }

  ngOnInit() {
  }

  markCompleted() {
    this.todo.isCompleted = true;
  }

  archive() {
    this.todo.isArchive = true;
  }

}
