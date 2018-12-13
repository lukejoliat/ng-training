import { Component } from '@angular/core';
import { DataService } from './services/data.service';
import {Todo} from './classes/todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng-training';

  constructor(private dataService: DataService) {
  }
}
