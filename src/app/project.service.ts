import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ProjectRequestDto} from './model/Project';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  baseUrl = 'http://localhost:8081/projects';

  constructor(private http: HttpClient) { }

  saveProject(project: ProjectRequestDto): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, project);
  }

  // http://localhost:8080/projects/1
  getProjectById(id: number): Observable<Object> {
    return this.http.get<ProjectRequestDto>(`${this.baseUrl}+/${id}`);
  }

  assignUserToProject(projectName: string, username: string) {
    return this.http.get(`${this.baseUrl}?projectName=${projectName}&username=${username}`);
  }

  getProjectList(): Observable<Object> {
    return this.http.get<ProjectRequestDto>(`${this.baseUrl}`);
  }
}
