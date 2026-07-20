import { Component, signal } from '@angular/core';
// import { ToDo } from './components/to-do/to-do';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';

@Component({
  selector: 'app-root',
  imports: [
  RouterOutlet , Header, Footer,
    //  ToDo
    ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('todoList');
}
