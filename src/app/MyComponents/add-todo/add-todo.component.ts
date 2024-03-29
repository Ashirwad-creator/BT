import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CrudService } from 'src/app/service/crud-service.service';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {
  title!: string;
  desc!: string;
  Id!: string;
  @Output() todoAdd: EventEmitter<Todo> = new EventEmitter();
  dialogRef: any;

  todos: Todo[] | undefined;





  constructor(private crudService: CrudService) { }

  ngOnInit(): void {

  }
  onsubmit(){
    const todo = {
      sno:8,
      title: this.title,
      desc: this.desc,
      Id: this.Id,
      active: true
    }

    this.todoAdd.emit(todo);
    this.crudService.addTodos({
      sno:8,
      title: this.title,
      desc: this.desc,
      Id: this.Id,
      active: true
    });
  }

}


