import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { triggerAsyncId } from 'node:async_hooks';

@Component({
  selector: 'app-to-do',
  imports: [FormsModule],
  templateUrl: './to-do.html',
  styleUrl: './to-do.scss',
})
export class ToDo {
  title: string = 'ToDo List Application ';
  imgSrc: string =
    'https://plus.unsplash.com/premium_photo-1681487870238-4a2dfddc6bcb?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dG8lMjBkbyUyMGxpc3R8ZW58MHx8MHx8fDA%3D';

  tasks: string[] = [];
  newTask: string = '';

  addTask() {
    if (this.newTask.trim() !== '') {
      this.tasks.push(this.newTask);
      this.newTask = '';
    }
  }

  editTask(index: number, updatedTask: string): string | void {
    if (updatedTask.trim() !== '') {
      this.tasks[index] = updatedTask;
    } else {
      updatedTask = this.tasks[index];
      return (this.newTask = updatedTask);
    }
    this.newTask = ""

  }

  removeTask(index: number) {
    this.tasks.splice(index, 1);
  }
}
