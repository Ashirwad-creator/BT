import { Todo } from 'src/app/Todo';
import { Injectable } from '@angular/core';
import { Form } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  todos: Todo[] = [];
  shouldEdit: boolean = false;
  constructor() { }

  addTodos(f: any) {
    console.log(f);
    this.todos.push(f);
  }

  getTodos() {

  }

  editTodo(todo:Todo){
    console.log("Edit todo",todo);
    this.shouldEdit = true;
    const index= this.todos.indexOf(todo);
    this.todos.splice(index,1);
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }

  deleteTodos() {

  }
}
