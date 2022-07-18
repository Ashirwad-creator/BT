import { CrudService } from 'src/app/service/crud-service.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input()
  todo: Todo = new Todo;
  @Output() todoDelete: EventEmitter<Todo> = new EventEmitter();
  shouldEditTodo: boolean = false;

  constructor(private crudService: CrudService) { }

  ngOnInit(): void {
  }
    onclick(todo:Todo) {
      this.todoDelete.emit(todo);
      console.log("onclick has been triggered")
    }

    onEdit(todo:Todo) {
      this.shouldEditTodo = true;
      this.crudService.editTodo(todo);
    }

    onSave(todo:Todo) {
      this.shouldEditTodo = false;
      this.crudService.editTodo(todo);
    }
}
