import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestComponent } from './test/test.component';
import { UsersComponent } from './users/users.component';
import { HomeComponent } from './home/home.component';
import { TrelloOutputComponent } from './trello-output/trello-output.component';


const routes: Routes = [
{path: 'test', component: TestComponent},
{path: 'users', component: UsersComponent},
{path: '', component: HomeComponent},
{path: 'trello', component: TrelloOutputComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
