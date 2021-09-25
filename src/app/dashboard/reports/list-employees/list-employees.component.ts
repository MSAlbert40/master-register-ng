import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../../security/services/auth.service";
import {UserService} from "../../../security/services/user.service";
import {User} from "../../../security/interfaces/user";
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {UpdateEmployeeComponent} from "./update-employee/update-employee.component";

@Component({
  selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
})
export class ListEmployeesComponent implements OnInit {

  userList: User[] = [];
  userName: string = '';

  managerId: string | null | undefined;
  displayedColumns: string[] = ['employee', 'workArea', 'schedule', 'salary', 'email', 'dni', 'age', 'gender', 'address', 'phone', 'options'];

  constructor(private authService:AuthService, private userService: UserService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.managerId = this.authService.getUser();
    this.allEmployees();
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

  searchByName() {
    if (this.userName == '') this.allEmployees();
    else if (typeof this.managerId === "string") {
      this.userService.listEmployeeByName(parseInt(this.managerId), this.userName).subscribe({
        error: (err) => console.log(err),
        next: (rest) => {
          this.userList = rest.data;
          console.log(this.userList);
        },
        complete: () => console.log('Complete')
      })
    }
  }

  updateEmployee(employee: User){
    this.userService.setterEmployee(employee.id);
    this.dialog.open(UpdateEmployeeComponent, { autoFocus:true })
  }

  deleteEmployee(employee: User) {
    if (typeof this.managerId === "string") {
      this.userService.deleteEmployee(parseInt(this.managerId), employee.id).subscribe({
        error: (err) => console.log(err),
        next: (res) => {
          console.log(res);
          window.location.reload();
        },
        complete: () => console.log('Complete')
      })
    }
  }
}
