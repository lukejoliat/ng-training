import { Component, OnInit } from '@angular/core';
import { TouchSequence } from 'selenium-webdriver';
import {DataService} from '../../services/data.service';
import { looseIdentical } from '@angular/core/src/util';

@Component({
  selector: 'app-todo-input',
  templateUrl: './todo-input.component.html',
  styleUrls: ['./todo-input.component.css']
})
export class TodoInputComponent implements OnInit {

  private todoText: string;
  private todoCompletion: boolean;

  constructor(private dataService: DataService) { 
    this.todoText = '';
    this.todoCompletion = false;
  }

  ngOnInit() {
  }

  private addToDo(): void {
    this.dataService.addToDo(this.todoText, this.todoCompletion);
    this.todoText = '';
    this.todoCompletion = false;
  }
}
