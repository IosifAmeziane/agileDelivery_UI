import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {AgileSprintDtoResponse} from '../model/AgileSprint';
import {AgileSprintsService} from '../agile-sprints.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-agile-sprints',
  templateUrl: './agile-sprints.component.html',
  styleUrls: ['./agile-sprints.component.css']
})
export class AgileSprintsComponent implements OnInit {

  agileSprints: Observable<AgileSprintDtoResponse[]>;
  projectId: number;

  constructor(
    private route: ActivatedRoute,
    private agileSprintsService: AgileSprintsService
  ) { }

  ngOnInit() {
    this.projectId = this.route.snapshot.params["id"];
    this.agileSprints = this.agileSprintsService.getAgileSprintsByProjectId(this.projectId);
  }

}
