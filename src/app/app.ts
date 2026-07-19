import { Component, signal } from '@angular/core';
import {MatButtonModule} from '@angular/material/button'
import { ToDo } from './components/to-do/to-do';

@Component({
  selector: 'app-root',
  imports: [MatButtonModule, ToDo],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('todoList');
}
