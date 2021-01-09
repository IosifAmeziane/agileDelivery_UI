import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import * as queryString from 'querystring';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  public username: string;
  public password: string;

  AUTHENTICATED_USER = 'authenticatedUser';
  BASIC_AUTH_FLAG_B64 = 'basicAuthFlag';

  constructor(private http: HttpClient) { }

  authenticationService(username: string, password: string) {
    return this.http.get('http://localhost:8081/users/logged-user', {
      headers : {
        Authorization: this.createAuthorizationHeader(username, password)
      }
    }).pipe(map((res) => {
      this.username = username;
      this.password = password;
      sessionStorage.setItem(this.AUTHENTICATED_USER, username);
    }));
  }

  createAuthorizationHeader(username: string, password: string) {
    const authFlag = 'Basic ' + btoa(username + ':' + password);
    sessionStorage.setItem(this.BASIC_AUTH_FLAG_B64, authFlag);
    return authFlag;
  }

  getBasicAuthFlagFromSessionStorage() {
    return sessionStorage.getItem(this.BASIC_AUTH_FLAG_B64);
  }
}
