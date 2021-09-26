import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {MessageResponse} from "../interfaces/message-response";
import {environment} from "../../../environments/environment";
import {Attendance, SaveAttendance} from "../interfaces/attendance";
import {Request} from "../interfaces/request";

@Injectable({
  providedIn: 'root'
})
export class AttendanceService {

  constructor(private http: HttpClient) { }

  // Add Attendance
  addAttendance(body: SaveAttendance, employee: number): Observable<MessageResponse<Attendance>> {
    let params = new HttpParams();
    params = params.set('employeeId', String(employee));
    return this.http.post<MessageResponse<Attendance>>(environment.apiURL + '/attendance/add', body,{params});
  }

  // get Attendance by Date
  listAttendanceByDate(date: string): Observable<MessageResponse<Attendance[]>> {
    let params = new HttpParams();
    params = params.set('date', date);
    return this.http.get<MessageResponse<Attendance[]>>(environment.apiURL + '/attendance/date', {params});
  }

  // Get Attendance by Manager
  listAttendanceByManager(manager: number): Observable<MessageResponse<Attendance[]>> {
    let params = new HttpParams();
    params = params.set('managerId', String(manager));
    return this.http.get<MessageResponse<Attendance[]>>(environment.apiURL + '/attendance/', {params});
  }

  // Get Attendance by Employee
  listAttendanceByEmployee(employee: number): Observable<MessageResponse<Attendance[]>> {
    let params = new HttpParams();
    params = params.set('employeeId', String(employee));
    return this.http.get<MessageResponse<Attendance[]>>(environment.apiURL + '/attendance/employee', {params});
  }
}
