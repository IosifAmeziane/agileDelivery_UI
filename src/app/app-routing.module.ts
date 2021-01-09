import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {HomeComponent} from './home/home.component';
import {RegisterUserComponent} from './register-user/register-user.component';
import {CreateProjectComponent} from './create-project/create-project.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: '', component: LoginComponent},
  {path: 'home', component: HomeComponent},
  {path: 'sign-up', component: RegisterUserComponent},
  {path: 'create-project', component: CreateProjectComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
