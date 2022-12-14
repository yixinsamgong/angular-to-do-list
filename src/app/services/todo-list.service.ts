import { Injectable } from '@angular/core';
import { TodoItem } from '../interfaces/todo-item';
import { StorageService } from './storage.service';

const todoListStorageKey = 'Todo_List'

const defaultToDoList: TodoItem[] = [
  { title: 'install NodeJS' },
  { title: 'install Angular CLI' },
  { title: 'create new app' },
  { title: 'serve app' },
  { title: 'develop app' },
  { title: 'deploy app' },
];

@Injectable()

export class TodoListService {
  todoList: TodoItem[]

  constructor(private storageService: StorageService) { 
    this.todoList = this.storageService.getData(todoListStorageKey) || defaultToDoList
  }

  getTodoList(): TodoItem[] {
    return this.todoList;
  }

  saveList(): void{
    this.storageService.setData(todoListStorageKey, this.todoList);
  }
  
  addItem(item: TodoItem): void {
    this.todoList.push(item);
    this.saveList()
  }

  updateItem(item: TodoItem, changes): void {
    const index = this.todoList.indexOf(item);
    this.todoList[index] = { ...item, ...changes};
    this.saveList();
  }

  deleteItem(item: TodoItem): void {
    const index = this.todoList.indexOf(item);
    this.todoList.splice(index, 1);
    this.saveList();
  }
  
}

