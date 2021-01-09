import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from './model/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {

  }

  saveUser(user: User)  {
    return this.http.post('http://localhost:8081/users', user);
  }
}
