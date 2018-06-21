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

  search: string;
  todos: Observable<Todo[]>;

  constructor(
    private todoService: TodoService
  ) { }

  ngOnInit() {
    this.onSearch();
  }

  onSearch() {
    if (this.search) {
      this.todos = this.todos.map(
        items => items.filter(item => item.task.includes(this.search))
      );
    } else {
      this.todos = this.todoService.onUpdate();
    }
    this.todos.subscribe(items => {
      console.log(items);
    });
  }

  getOpenItems() {
    return this.todos.map(items => 
      items.filter(item => item.isArchive == false)
    );
  }

  getArchiveItems() {
    return this.todos.map(items => 
      items.filter(item => item.isArchive == true)
    );
  }

}
