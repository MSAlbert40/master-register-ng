import { Component } from '@angular/core';
import {AuthService} from "./security/services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'master-register-ng';

  login = true;
  dashboard = false;

  manager: boolean | undefined;
  employee: boolean | undefined;
  username: string | null | undefined;

  constructor(private authService: AuthService, private router: Router) {
    if(this.authService.isLoggedIn()) { this.username = this.authService.getNameUser(); }
    if(this.authService.getRole() == 'ROLE_MANAGER') {
      this.manager = true;
      this.employee = false;
    }
    else if(this.authService.getRole() == 'ROLE_EMPLOYEE') {
      this.employee = true;
      this.manager = false;
    }
  }

  visibleOn() {
    if(this.router.url == '/Dashboard' || this.router.url == '/Register-Employee' || this.router.url == '/Reports' ||
      this.router.url == '/Employees' || this.router.url == '/Work-Area' || this.router.url == '/Profile' || this.router.url == '/Requests') this.dashboard = true;
    return this.dashboard;
  }

  visibleOff() {
    this.login = this.router.url == '/LogIn' || this.router.url == '/Recovery-Password';
    return this.login;
  }

  LogOut() {
    this.authService.logOut();
  }
}
