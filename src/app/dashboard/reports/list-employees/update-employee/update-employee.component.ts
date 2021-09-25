import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../../../security/services/auth.service";
import {UserService} from "../../../../security/services/user.service";
import {User} from "../../../../security/interfaces/user";
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {

  updateForm: FormGroup;

  managerId: string | null | undefined;
  employeeId: number | undefined;

  userClass!: User;

  constructor(private authService: AuthService, private userService: UserService, private formBuilder: FormBuilder,
              private dialogRef: MatDialogRef<UpdateEmployeeComponent>) {
    this.updateForm = this.formBuilder.group({
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
    this.managerId = this.authService.getUser();
    this.employeeId = this.userService.getterEmployee();
    this.searchEmployee();
    this.selectGender = this.userClass.gender;
  }

  searchEmployee() {
    this.userService.viewEmployee(this.employeeId).subscribe({
      error: (err) => console.log(err),
      next: (rest) => {
        this.userClass = rest.data;
        console.log(this.userClass);
      },
      complete: () => console.log('Complete')
    })
  }

  updateData() {
    this.updateForm.value.gender = this.selectGender;
    console.log(this.updateForm.value);
    this.userService.updateEmployee(this.updateForm.value, this.employeeId).subscribe({
      error: (err) => console.log(err),
      next: (rest) => {
        this.dialogRef.close();
        window.location.href = '/Employees';
      },
      complete: () => console.log('Complete')
    })
  }
}
