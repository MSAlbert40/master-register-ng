import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../security/services/auth.service";
import {AttendanceService} from "../../security/services/attendance.service";
import {Attendance} from "../../security/interfaces/attendance";
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-mark-attendance',
  templateUrl: './mark-attendance.component.html',
  styleUrls: ['./mark-attendance.component.css']
})
export class MarkAttendanceComponent implements OnInit {

  date = Date.now();
  today = new Date(this.date);

  dateForm: FormGroup;

  attendance!: Attendance;
  attendanceList: Attendance[] = [];

  number: number | undefined;
  employeeId: string | null | undefined;

  constructor(private authService:AuthService, private attendanceService: AttendanceService, private formBuilder: FormBuilder) {
    this.dateForm = this.formBuilder.group({
      dateTime: ''
    })
  }

  ngOnInit(): void {
    this.employeeId = this.authService.getUser();
    this.allAttendance();
  }

  allAttendance() {
    if (typeof this.employeeId === "string") {
      this.attendanceService.listAttendanceByEmployee(parseInt(this.employeeId)).subscribe({
        error: (err) => console.log(err),
        next: (rest) => {
          this.attendanceList = rest.data;
          this.attendance = this.attendanceList[this.attendanceList.length - 1];
          console.log(rest.data);
        },
        complete: () => console.log('Complete')
      })
    }
  }

  markAttendance() {
    if (typeof this.employeeId === "string") {
      this.dateForm.value.dateTime = this.today.toISOString();
      this.attendanceService.addAttendance(this.dateForm.value, parseInt(this.employeeId)).subscribe({
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
