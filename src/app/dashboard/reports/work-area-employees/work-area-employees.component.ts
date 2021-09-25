import { Component, OnInit } from '@angular/core';
import {User} from "../../../security/interfaces/user";
import {AuthService} from "../../../security/services/auth.service";
import {UserService} from "../../../security/services/user.service";
import {WorkArea} from "../../../security/interfaces/work-area";

@Component({
  selector: 'app-work-area-employees',
  templateUrl: './work-area-employees.component.html',
  styleUrls: ['./work-area-employees.component.css']
})
export class WorkAreaEmployeesComponent implements OnInit {

  userList: User[] = [];
  userName: string = '';

  workAreaId: any;
  workAreaList: WorkArea[] = [];

  managerId: string | null | undefined;
  displayedColumns: string[] = ['employee', 'workArea', 'schedule', 'salary', 'email', 'dni', 'age', 'gender', 'address', 'phone'];

  constructor(private authService:AuthService, private userService: UserService) { }

  ngOnInit(): void {
    this.managerId = this.authService.getUser();
    this.allEmployees();
    this.viewAllWorkArea();
  }

  allEmployees() {
    if (typeof this.managerId === "string") {
      this.userService.listAllEmployee(parseInt(this.managerId)).subscribe({
        error: (err) => console.log(err),
        next: (rest) => {
          this.userList = rest.data;
          console.log(this.userList);
        },
        complete: () => console.log('Complete')
      })
    }
  }

  viewAllWorkArea(): void {
    this.authService.listWorkArea().subscribe({
      error: (err) => console.log(err),
      next: (rest) => {
        this.workAreaList = rest.data;
        console.log(this.workAreaList);
      },
      complete: () => console.log('Complete')
    });
  }

  viewAllEmployeesByWorkArea() {
    if (this.workAreaId == null) this.allEmployees();
    else if (typeof this.managerId === "string") {
      this.userService.listEmployeeByWorkArea(parseInt(this.managerId), this.workAreaId).subscribe({
        error: (err) => console.log(err),
        next: (rest) => {
          this.userList = rest.data;
          console.log(this.userList);
        },
        complete: () => console.log('Complete')
      })
    }
  }
}
