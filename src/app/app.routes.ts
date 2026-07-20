import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { AboutUs } from './components/about-us/about-us';
import { Contact } from './components/contact/contact';
import { TodosWithJsonServer } from './components/todos-with-json-server/todos-with-json-server';
import { TodosDetails } from './components/todos-details/todos-details';
import { NotFound } from './components/not-found/not-found';

export const routes: Routes = [
  {path:'' , redirectTo:"/home" , pathMatch:'full'},
  {path:'home' , component:Home , title:'Home PAge '},
  {path:'about' , component:AboutUs , title:'About Us PAge '},
  {path:'contact' , component:Contact , title:'Contact Us PAge '},
  {path:'todos' , component:TodosWithJsonServer , title:'Todos PAge '},
  {path:'todos/:id' , component:TodosDetails , title:'Todo Details PAge '},
  {path:'**' , component:NotFound , title:'Not Found PAge '},
];
