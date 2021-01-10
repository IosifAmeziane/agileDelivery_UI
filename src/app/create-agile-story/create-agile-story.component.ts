import { Component, OnInit } from '@angular/core';
import {AgileStoryDtoRequest} from '../model/AgileStory';
import {AgileStoriesService} from '../agile-stories.service';
import {ProjectService} from '../project.service';
import {Observable} from 'rxjs';
import {ProjectResponseDto} from '../model/Project';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create-agile-story',
  templateUrl: './create-agile-story.component.html',
  styleUrls: ['./create-agile-story.component.css']
})
export class CreateAgileStoryComponent implements OnInit {

  agileStoryDtoRequest: AgileStoryDtoRequest = new AgileStoryDtoRequest();
  projectList: Observable<ProjectResponseDto[]>;
  agileStoryStatus = [
    'BACKLOG',
    'TO_DO',
    'IN_PROGRESS',
    'TESTED',
    'DONE'
  ];

  constructor(
    private agileStoryService: AgileStoriesService,
    private projectService: ProjectService,
    private router: Router
  ) { }

  ngOnInit() {
    this.projectList = this.projectService.getProjectList();
  }

  save() {
    this.agileStoryService.save(this.agileStoryDtoRequest).subscribe(data => {
      this.router.navigate(["/project-list"]);
    });
  }
}
