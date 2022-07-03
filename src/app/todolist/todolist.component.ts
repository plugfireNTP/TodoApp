import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Todolist } from '../list';
import { TODOLISTS } from '../mock-todolist';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.scss']
})
export class TodolistComponent implements OnInit {

  // todolist : Todolist = {
  //   id: 1,
  //   user: 'B',
  //   email: 'b@mail.com',
  //   title: 'ทำกับข้าว',
  //   status: true
  // };

  // todoFormControl = new FormControl(
  //   this.todolist,
  //   Validators.required)

  todoFormGroup = new FormGroup({
    id: new FormControl(),
    user: new FormControl(),
    email: new FormControl(),
    title: new FormControl(),
    status: new FormControl()
  })
  todolists = TODOLISTS;
  constructor() { }

  ngOnInit(): void {
    //this.todolist = this.todolist + "++";
    //this.todoFormControl.setValue(this.todolist);
  }
  onSelectTodolist(todolist : Todolist){
    this.todoFormGroup.setValue(todolist);
  }

}

