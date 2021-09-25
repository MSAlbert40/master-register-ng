import {HttpClient, HttpParams} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IAuthResponse, IAuthUser, IAuthUserRegister } from "../interfaces/auth-user";
import { Observable } from "rxjs";
import { environment } from "../../../environments/environment";
import { MessageResponse } from "../interfaces/message-response";
import {WorkArea} from "../interfaces/work-area";
import {Schedule} from "../interfaces/schedule";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  // LogIn Service
  logIn(body: IAuthUser): Observable<MessageResponse<IAuthResponse>> {
    return this.http.post<MessageResponse<IAuthResponse>>(environment.apiURL + '/auth/login', body);
  }

  // SignUp Service
  signUp(body: IAuthUserRegister, schedule: number, workArea: number, manager: number): Observable<MessageResponse<IAuthResponse>> {
    let params = new HttpParams();
    params = params.set('scheduleId', String(schedule));
    params = params.set('workAreaId', String(workArea));
    params = params.set('managerId', String(manager));
    return this.http.post<MessageResponse<IAuthResponse>>(environment.apiURL + '/auth/signup', body, {params});
  }

  changePassword(body: IAuthUser): Observable<MessageResponse<IAuthResponse>> {
    return this.http.put<MessageResponse<IAuthResponse>>(environment.apiURL + '/auth/', body);
  }

  // All Work Area
  listWorkArea(): Observable<MessageResponse<WorkArea[]>> {
    return this.http.get<MessageResponse<WorkArea[]>>(environment.apiURL + '/workArea/');
  }

  // All Schedule
  listSchedule(): Observable<MessageResponse<Schedule[]>> {
    return this.http.get<MessageResponse<Schedule[]>>(environment.apiURL + '/schedule/');
  }

  loginUser(token: string, user: number, name: string) {
    localStorage.setItem('token', token);
    localStorage.setItem('id', String(user));
    localStorage.setItem('nameUser', name);
    return true;
  }

  isLoggedIn() {
    const token = localStorage.getItem('token');
    return !(token === undefined || token === '' || token == null);
  }

  logOut() {
    localStorage.removeItem('token');
    localStorage.removeItem('id');
    return true;
  }

  getToken() { return localStorage.getItem('token'); }

  getUser() { return localStorage.getItem('id'); }

  getNameUser() { return localStorage.getItem('nameUser'); }
}
