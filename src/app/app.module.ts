import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { GithubService } from './services/github.service';
import { UsersComponent } from './components/users-component/users.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpClientModule ],
  declarations: [ AppComponent, UsersComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ GithubService ]
})
export class AppModule { }
