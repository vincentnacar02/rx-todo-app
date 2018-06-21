import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

import { Todo } from './_model/todo';

@Injectable()
export class TodoService {

  private _todos : BehaviorSubject<Todo[]>;
  private readonly todos : Observable<Todo[]>;

  constructor() {
    this._todos = new BehaviorSubject(new Array());
    this.todos = this._todos.asObservable();
  }

  addTodo(todo: Todo) {
    let items = this._todos.getValue();
    items.push(todo);
    this._todos.next(items);
  }

  onUpdate() : Observable<Todo[]> {
    return this._todos;
  }

}
