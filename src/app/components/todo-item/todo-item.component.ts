import { Component, OnInit, Input } from '@angular/core';
import { Todo} from '../../classes/todo';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input()
  private todo: Todo;
  constructor(private dataService: DataService) { }

  ngOnInit() {
  }

  private removeTodo(): void {
    this.dataService.removeTodo(this.todo.id);
  }
  private completeTodo(): void {
    this.dataService.completeTodo(this.todo.id);
  }
}
