import { Component, OnInit } from '@angular/core';
import {User} from "../../security/interfaces/user";
import {FormGroup} from "@angular/forms";
import {AuthService} from "../../security/services/auth.service";
import {UserService} from "../../security/services/user.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  userClass!: User;
  roleName: string | null | undefined;
  managerId: string | null | undefined;

  constructor(private authService: AuthService, private userService: UserService) { }

  ngOnInit(): void {
    this.managerId = this.authService.getUser();
    this.identifyRole(this.authService.getRole());
    this.searchEmployee();
  }

  searchEmployee() {
    if (typeof this.managerId === "string") {
      this.userService.viewEmployee(parseInt(this.managerId)).subscribe({
        error: (err) => console.log(err),
        next: (rest) => {
          this.userClass = rest.data;
          console.log(this.userClass);
        },
        complete: () => console.log('Complete')
      })
    }
  }

  identifyRole(name: string | null): void {
    switch (name) {
      case 'ROLE_MANAGER':
        this.roleName = 'Jefe';
        break;
      case 'ROLE_EMPLOYEE':
        this.roleName = 'Trabajador';
        break;
      default:
        console.log('Sorry not found');
    }
  }
}
