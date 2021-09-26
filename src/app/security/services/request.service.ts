import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {SaveRequest, Request} from "../interfaces/request";
import {Observable} from "rxjs";
import {MessageResponse} from "../interfaces/message-response";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(private http: HttpClient) { }

  // Add Request
  addRequest(body: SaveRequest, employee: number, typeRequest: number): Observable<MessageResponse<Request>> {
    let params = new HttpParams();
    params = params.set('employeeId', String(employee));
    params = params.set('typeRequestId', String(typeRequest));
    return this.http.post<MessageResponse<Request>>(environment.apiURL + '/request/add', {params});
  }

  // Get Request by Type Request And Employee
  listRequestByTypeRequestAndEmployee(employee: number, typeRequest: number): Observable<MessageResponse<Request[]>> {
    let params = new HttpParams();
    params = params.set('employeeId', String(employee));
    params = params.set('typeRequestId', String(typeRequest));
    return this.http.get<MessageResponse<Request[]>>(environment.apiURL + '/request/employee', {params});
  }

  // Get Request by Type Request And Manager
  listRequestByTypeRequestAndManager(manager: number, typeRequest: number): Observable<MessageResponse<Request[]>> {
    let params = new HttpParams();
    params = params.set('managerId', String(manager));
    params = params.set('typeRequestId', String(typeRequest));
    return this.http.get<MessageResponse<Request[]>>(environment.apiURL + '/request/manager', {params});
  }

  // Get Request by Employee
  listRequestByEmployee(employee: number): Observable<MessageResponse<Request[]>> {
    let params = new HttpParams();
    params = params.set('employeeId', String(employee));
    return this.http.get<MessageResponse<Request[]>>(environment.apiURL + '/request/all/employee', {params});
  }

  // Get Request by Manager
  listRequestByManager(manager: number): Observable<MessageResponse<Request[]>> {
    let params = new HttpParams();
    params = params.set('managerId', String(manager));
    return this.http.get<MessageResponse<Request[]>>(environment.apiURL + '/request/all/manager', {params});
  }
}
