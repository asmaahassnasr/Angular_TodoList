import { Component, signal } from '@angular/core';
import { ToDo } from './components/to-do/to-do';

@Component({
  selector: 'app-root',
  imports: [ ToDo],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('todoList');
}
