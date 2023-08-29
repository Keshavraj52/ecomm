import { Component, OnInit } from '@angular/core';
import { login, signUp } from '../data-type';
import { UserService } from '../services/user.service';


@Component({
  selector: 'app-user-auth',
  templateUrl: './user-auth.component.html',
  styleUrls: ['./user-auth.component.css']
})
export class UserAuthComponent implements OnInit {
  showLogin: boolean = true

  constructor(private user: UserService) { }
  signUp(data: signUp) {
    this.user.userSignUp(data)
  }
  ngOnInit(): void {
    this.user.userAuthReload();
  }
  login(data: login) {
    this.user.userLogin(data)
  }
  openLogin() {
    this.showLogin = true

  }
  openSignUp() {
    this.showLogin = false

  }


}
