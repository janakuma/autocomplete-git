import { Component, VERSION } from '@angular/core';
import { GithubService } from './services/github.service';

export interface gitTodo {
  login: string;
  id: number;
  avatar_url: string;
}

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
})
export class AppComponent  {
  users: gitTodo[];
  searchModel: string;
  selectedUsers: gitTodo[];
  isDropShow: boolean = false;
  isInput: boolean = false;
  

  constructor(private githubService: GithubService ) {
  } 

  getUsers() {    
    this.githubService.getData().subscribe(
      (data) => {
        this.isDropShow = true;
        this.users = data.filter(
          result => result.login.includes(this.searchModel) 
        );                              
    })          
  }

  selectUser(selectUser: gitTodo) {
    this.selectedUsers = [selectUser];    
    this.isDropShow = !this.isDropShow;
    this.searchModel = '';    
  }

  searchUsers(searchModel) {
    if(!searchModel) {
      this.isInput = true;
      return 
    } else {
      this.isInput = false;
    }

    this.githubService.getData().subscribe(
      (data) => {
        this.isDropShow = false;
        this.searchModel = searchModel;
        this.selectedUsers = data.filter(
          result => result.login.includes(this.searchModel) 
        );                              
    })

    console.log(searchModel)
  }
}
