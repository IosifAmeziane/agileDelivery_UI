import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service';
import {User} from '../model/User';
import {error} from 'util';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {

  user: User = new User();
  userTypes: string[] = ['DEVELOPER', 'PROJECT_MANAGER'];

  constructor(private userService: UserService) { }

  ngOnInit() {}

  save() {
    this.userService.saveUser(this.user).subscribe(data => {
      console.log(this.user);
    });
  }
}
