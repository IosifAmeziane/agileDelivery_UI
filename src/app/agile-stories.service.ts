import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AgileStoryDtoRequest, AgileStoryDtoResponse} from './model/AgileStory';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AgileStoriesService {

  baseUrl = 'http://localhost:8081/agile-stories';
  constructor(private http: HttpClient) { }

  getAgileStoriesByName(storyName: string, projectId: number): Observable<AgileStoryDtoResponse[]> {
    return this.http.get<AgileStoryDtoResponse[]>(`${this.baseUrl}?name=${storyName}&projectId=${projectId}`);
  }

  save(agileStoryDtoRequest: AgileStoryDtoRequest): Observable<AgileStoryDtoResponse> {
    return this.http.post<AgileStoryDtoResponse>(`${this.baseUrl}`, agileStoryDtoRequest);
  }
}
