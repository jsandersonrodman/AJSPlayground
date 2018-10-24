import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { UsersComponent } from './users/users.component';
import { HomeComponent } from './home/home.component';
import { TrelloOutputComponent } from './trello-output/trello-output.component';


@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    SidebarComponent,
    UsersComponent,
    HomeComponent,
    TrelloOutputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
