import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../security/services/auth.service";
import {Schedule} from "../../security/interfaces/schedule";
import {WorkArea} from "../../security/interfaces/work-area";
import {MatDialog} from "@angular/material/dialog";
import {UpdateEmployeeComponent} from "../reports/list-employees/update-employee/update-employee.component";
import {MessageComponent} from "./message/message.component";

@Component({
  selector: 'app-register-employee',
  templateUrl: './register-employee.component.html',
  styleUrls: ['./register-employee.component.css']
})
export class RegisterEmployeeComponent implements OnInit {

  employeeForm: FormGroup;
  managerId: string | null | undefined;

  scheduleId: any;
  scheduleList: Schedule[] = [];

  workAreaId: any;
  workAreaList: WorkArea[] = [];

  constructor(private authService: AuthService, private formBuilder: FormBuilder, private dialog: MatDialog) {
    this.employeeForm = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
      email: ['', [Validators.required]],
      name: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      dni: ['', [Validators.required]],
      age: [0, [Validators.required]],
      gender: '',
      address: ['', [Validators.required]],
      phone: ['', [Validators.required]],
      salary: [0, [Validators.required]]
    });
  }

  typeGender = [
    { name: 'Masculino' },
    { name: 'Femenino' }
  ];

  selectGender = this.typeGender[0].name;

  ngOnInit(): void {
    this.selectGender = '';
    this.viewAllWorkAreaAndSchedule()
    this.managerId = this.authService.getUser();
  }

  viewAllWorkAreaAndSchedule(): void {
    this.authService.listSchedule().subscribe({
      error: (err) => console.log(err),
      next: (rest) => {
        this.scheduleList = rest.data;
        console.log(this.scheduleList);
      },
      complete: () => console.log('Complete')
    });

    this.authService.listWorkArea().subscribe({
      error: (err) => console.log(err),
      next: (rest) => {
        this.workAreaList = rest.data;
        console.log(this.workAreaList);
      },
      complete: () => console.log('Complete')
    });
  }

  addEmployee() {
    if (typeof this.managerId === "string") {
      this.employeeForm.value.gender = this.selectGender;
      this.authService.signUp(this.employeeForm.value, this.scheduleId, this.workAreaId, parseInt(this.managerId)).subscribe({
        error: (err) => console.log(err),
        next: (res) => {
          console.log(res);
          console.log(this.employeeForm.value);
          console.log(this.managerId);
          this.dialog.open(MessageComponent, { autoFocus:true })
          //window.location.reload();
        },
        complete: () => console.log('Complete')
      })
    }
  }
}
