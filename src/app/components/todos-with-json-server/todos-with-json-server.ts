import { Component, OnInit } from '@angular/core';
import { ITodo } from '../../Models/itodo';
import { TodoService } from '../../Services/todo-service';

@Component({
  selector: 'app-todos-with-json-server',
  imports: [],
  templateUrl: './todos-with-json-server.html',
  styleUrl: './todos-with-json-server.scss',
})
export class TodosWithJsonServer implements OnInit {

  todos : ITodo[] = [];
  newTodo : ITodo = {} as ITodo ;

  constructor(private _todosService:TodoService){}

  ngOnInit(): void {
    this.getAllTodos();
  }

  getAllTodos(){
    this._todosService.getTodos().subscribe(todos => {
      this.todos = todos;
    })
  }
}
