import { Injectable } from '@angular/core';
import {Todo} from '../classes/todo';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private todos: Todo[];
  private nextId; number;

  constructor() { 
    this.todos = [
      new Todo(0, "Food", false),
      new Todo(1, "Movie", false)
    ];

    this.nextId = 2;

  }

  public addToDo(text: string, completion: boolean): void {
    console.log(this.todos);
    let todo = new Todo(this.nextId, text, completion);
    this.todos.push(todo);
    this.nextId++;
  }

  public getTodos(): Todo[] {
    return this.todos;
  }

  public removeTodo(id: number): void {
    let todos = this.getTodos();
    this.todos = todos.filter((todo) => todo.id !== id);
    
  }
  public completeTodo(id: number): void {
    let todos = this.getTodos();
    this.todos = todos.filter((todo) => todo.id !== id);
  }
  
}
