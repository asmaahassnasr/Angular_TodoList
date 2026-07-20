import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ITodo } from '../Models/itodo';

@Injectable({
  providedIn: 'root',
})


export class TodoService {
  private apiURL = "http://localhost:3000/todos";

  constructor(private httpClient: HttpClient){}

  // Get All Todos
  getTodos() : Observable<ITodo[]> {
      return this.httpClient.get<ITodo[]>(this.apiURL);
  }

  // Create Todo
  createTodo(todo:ITodo) : Observable<ITodo>{
    return this.httpClient.post<ITodo>(this.apiURL , JSON.stringify(todo))
  }

  // Get  Todo By Id
  getTodoById(id:string) :Observable<ITodo>{
    return this.httpClient.get<ITodo>(`${this.apiURL}/${id}`);
  }

  //Update Todo
  updateTodo(todo:ITodo) : Observable<ITodo>{
    return this.httpClient.put<ITodo>(`${this.apiURL}/${todo.id}` , todo)
  }

  // Delete Todo
  deleteTodo(id:string) : Observable<void>{
    return this.httpClient.delete<void>(`${this.apiURL}/${id}`)
  }
}
