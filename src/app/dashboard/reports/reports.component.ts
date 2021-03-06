import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void { }

  viewEmployees() {
    window.location.href = '/Employees';
  }

  viewEmployeesByWorkArea() {
    window.location.href = '/Work-Area';
  }

  viewRequests() {
    window.location.href = '/Requests';
  }

  viewAttendances() {
    window.location.href = '/Attendances';
  }
}
