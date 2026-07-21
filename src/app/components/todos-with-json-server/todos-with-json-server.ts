import { Component, OnInit } from '@angular/core';
import { ITodo } from '../../Models/itodo';
import { TodoService } from '../../Services/todo-service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-todos-with-json-server',
  imports: [FormsModule, CommonModule, RouterModule],
  templateUrl: './todos-with-json-server.html',
  styleUrl: './todos-with-json-server.scss',
})
export class TodosWithJsonServer implements OnInit {
  todos: ITodo[] = [];
  newTodo: ITodo = {} as ITodo;

  constructor(private _todosService: TodoService) {}

  ngOnInit(): void {
    this.getAllTodos();
  }

  getAllTodos() {
    this._todosService.getTodos().subscribe((todos) => {
      this.todos = todos;
    });
  }

  createTodo(): void {
    const createdTodo: ITodo = {
      id: this.newTodo.id,
      title: this.newTodo.title,
      isCompleted: false,
    };
    this.newTodo = createdTodo;
    this._todosService.createTodo(createdTodo).subscribe((todo) => {
      this.todos.push(todo);
    });
  }

  deleteTodo(todoId: string): ITodo[] {
    this._todosService.deleteTodo(todoId).subscribe(() => {
      this.todos =  this.todos.filter((todo) => todo.id !== todoId);
    });

    return this.todos;
  }



}
