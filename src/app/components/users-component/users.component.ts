import { Component, OnInit, Input, Output } from '@angular/core';
import { gitTodo } from '../../app.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  @Input() selectedUsers: gitTodo[];

  constructor() { }

  ngOnInit() {
  }

}