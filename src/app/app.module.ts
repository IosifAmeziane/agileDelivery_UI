import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import {FormsModule} from '@angular/forms';
import { RegisterUserComponent } from './register-user/register-user.component';
import { CreateProjectComponent } from './create-project/create-project.component';
import {HttpInterceptorService} from './httpInterceptor.service';
import { ProjectListComponent } from './project-list/project-list.component';
import { AgileSprintsComponent } from './agile-sprints/agile-sprints.component';
import { MenuComponent } from './menu/menu.component';
import { CreateAgileSprintComponent } from './create-agile-sprint/create-agile-sprint.component';
import { AgileStoriesComponent } from './agile-stories/agile-stories.component';
import { CreateAgileStoryComponent } from './create-agile-story/create-agile-story.component';
import { ProjectDetailedViewComponent } from './project-detailed-view/project-detailed-view.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    RegisterUserComponent,
    CreateProjectComponent,
    ProjectListComponent,
    AgileSprintsComponent,
    MenuComponent,
    CreateAgileSprintComponent,
    AgileStoriesComponent,
    CreateAgileStoryComponent,
    ProjectDetailedViewComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
