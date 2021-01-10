import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AgileSprintDtoRequest, AgileSprintDtoResponse} from './model/AgileSprint';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AgileSprintsService {

  baseUrl = "http://localhost:8081/agile-sprints"
  constructor(private http: HttpClient) { }

  getAgileSprintsByProjectId(projectId: number): Observable<AgileSprintDtoResponse[]> {
    return this.http.get<AgileSprintDtoResponse[]>(`${this.baseUrl}?projectId=${projectId}`);
  }

  saveAgileSprint(agileSprint: AgileSprintDtoRequest): Observable<AgileSprintDtoRequest> {
    return this.http.post<AgileSprintDtoRequest>(`${this.baseUrl}`, agileSprint);
  }

}
