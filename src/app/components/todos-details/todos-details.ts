import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { ITodo } from '../../Models/itodo';
import { TodoService } from '../../Services/todo-service';

@Component({
  selector: 'app-todos-details',
  imports: [FormsModule, CommonModule, RouterModule],
  templateUrl: './todos-details.html',
  styleUrl: './todos-details.scss',
})
export class TodosDetails implements OnInit {
  title: string = 'ToDo Details';
  imgSrc: string =
    'https://plus.unsplash.com/premium_photo-1681487870238-4a2dfddc6bcb?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dG8lMjBkbyUyMGxpc3R8ZW58MHx8MHx8fDA%3D';

  todo: ITodo | undefined;

  constructor(
    private _todoService: TodoService,
    private _router: Router,
    private _route: ActivatedRoute,
  ) {}
  ngOnInit(): void {
    this.getTodoById();
  }

  getTodoById() : void{
    const id = String(this._route.snapshot.paramMap.get('id'));
    this._todoService.getTodoById(id).subscribe(item =>{
      this.todo = item
    })
  }

  updateTod() : void{
    if(this.todo){
      this._todoService.updateTodo(this.todo).subscribe(() =>{
        this._router.navigate(['/todos']);
      })
    }
  }
}
