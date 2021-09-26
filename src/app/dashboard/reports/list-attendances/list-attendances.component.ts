import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../../security/services/auth.service";
import {AttendanceService} from "../../../security/services/attendance.service";
import {Attendance} from "../../../security/interfaces/attendance";

@Component({
  selector: 'app-list-attendances',
  templateUrl: './list-attendances.component.html',
  styleUrls: ['./list-attendances.component.css']
})
export class ListAttendancesComponent implements OnInit {

  attendanceList: Attendance[] = [];
  date: string = '';

  managerId: string | null | undefined;
  displayedColumns: string[] = ['employee', 'workArea', 'dni', 'date', 'attendance', 'absent', 'late'];

  constructor(private authService:AuthService, private attendanceService: AttendanceService) { }

  ngOnInit(): void {
    this.managerId = this.authService.getUser();
    this.allAttendance();
  }

  allAttendance() {
    if (typeof this.managerId === "string") {
      this.attendanceService.listAttendanceByManager(parseInt(this.managerId)).subscribe({
        error: (err) => console.log(err),
        next: (rest) => {
          this.attendanceList = rest.data;
          console.log(rest.data);
        },
        complete: () => console.log('Complete')
      })
    }
  }

  searchByDate() {
    this.attendanceService.listAttendanceByDate(this.date).subscribe({
      error: (err) => console.log(err),
      next: (rest) => {
        this.attendanceList = rest.data;
      },
      complete: () => console.log('Complete')
    })
  }
}
