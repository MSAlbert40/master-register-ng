import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {IAuthResponse, IAuthUserRegister} from "../interfaces/auth-user";
import {Observable} from "rxjs";
import {MessageResponse} from "../interfaces/message-response";
import {environment} from "../../../environments/environment";
import {User} from "../interfaces/user";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  employeeId: number | undefined;

  constructor(private http: HttpClient) { }

  //Update Data Employee
  updateEmployee(body: IAuthUserRegister, employee: number | undefined): Observable<MessageResponse<IAuthResponse>>{
    return this.http.put<MessageResponse<IAuthResponse>>(environment.apiURL + '/user/' + employee, body);
  }

  //Delete Employee
  deleteEmployee(manager: number, employee: number): Observable<MessageResponse<User>> {
    let params = new HttpParams();
    params = params.set('managerId', String(manager));
    params = params.set('employeeId', String(employee));
    return this.http.delete<MessageResponse<User>>(environment.apiURL + '/user/delete', {params});
  }

  //Get All by Name
  listEmployeeByName(manager: number, name: string | undefined): Observable<MessageResponse<User[]>> {
    let params = new HttpParams();
    params = params.set('managerId', String(manager));
    return this.http.get<MessageResponse<User[]>>(environment.apiURL + '/user/' + name, {params});
  }

  // Get All by Work Area
  listEmployeeByWorkArea(manager: number, workArea: number): Observable<MessageResponse<User[]>> {
    let params = new HttpParams();
    params = params.set('managerId', String(manager));
    params = params.set('workAreaId', String(workArea));
    return this.http.get<MessageResponse<User[]>>(environment.apiURL + '/user/workArea', {params});
  }

  // Get All By Manager
  listAllEmployee(manager: number): Observable<MessageResponse<User[]>> {
    let params = new HttpParams();
    params = params.set('managerId', String(manager));
    return this.http.get<MessageResponse<User[]>>(environment.apiURL + '/user/', {params});
  }

  // Search Employee or Manager
  viewEmployee(employee: number | undefined): Observable<MessageResponse<User>> {
    let params = new HttpParams();
    params = params.set('employeeId', String(employee));
    return this.http.get<MessageResponse<User>>(environment.apiURL + '/user/employee', {params});
  }

  setterEmployee(employeeId: number) { this.employeeId = employeeId; }

  getterEmployee() { return this.employeeId; }

}
