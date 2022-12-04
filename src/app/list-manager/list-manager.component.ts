import { Component, OnInit } from '@angular/core';
import { TodoItem } from '../interfaces/todo-item';
import { TodoListService } from '../services/todo-list.service';

@Component({
  selector: 'app-list-manager',
  templateUrl: './list-manager.component.html',
  styleUrls: ['./list-manager.component.css']
})
export class ListManagerComponent implements OnInit {

  todoList: TodoItem[]

  public searchText: any = '';

  constructor(private todoListService: TodoListService) {
    this.todoListService.getTodoList();
  }

  ngOnInit(): void {
    this.todoList = this.todoListService.getTodoList();
  }

  addItem(title: string): void {
    this.todoListService.addItem({title});
  }

  removeItem(item): void {
    this.todoListService.deleteItem(item);
  }

}