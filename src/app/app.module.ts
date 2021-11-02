import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { MatDialogModule } from "@angular/material/dialog";
import { MatSelectModule } from "@angular/material/select";
import { MatTableModule } from "@angular/material/table";
import { HeaderInterceptor } from './security/interceptors/header.interceptor';
import { LoginComponent } from './security/views/login/login.component';
import { PasswordComponent } from './security/views/password/password.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatIconModule } from "@angular/material/icon";
import { RegisterEmployeeComponent } from './dashboard/register-employee/register-employee.component';
import { ReportsComponent } from './dashboard/reports/reports.component';
import { ListEmployeesComponent } from './dashboard/reports/list-employees/list-employees.component';
import { MatButtonModule } from "@angular/material/button";
import { UpdateEmployeeComponent } from './dashboard/reports/list-employees/update-employee/update-employee.component';
import { WorkAreaEmployeesComponent } from './dashboard/reports/work-area-employees/work-area-employees.component';
import { ProfileComponent } from './dashboard/profile/profile.component';
import { ListRequestsComponent } from './dashboard/reports/list-requests/list-requests.component';
import { AddRequestComponent } from './dashboard/add-request/add-request.component';
import { ListAttendancesComponent } from './dashboard/reports/list-attendances/list-attendances.component';
import { MarkAttendanceComponent } from './dashboard/mark-attendance/mark-attendance.component';
import { MessageComponent } from './dashboard/register-employee/message/message.component';
import { WindowComponent } from './dashboard/mark-attendance/window/window.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PasswordComponent,
    DashboardComponent,
    RegisterEmployeeComponent,
    ReportsComponent,
    ListEmployeesComponent,
    UpdateEmployeeComponent,
    WorkAreaEmployeesComponent,
    ProfileComponent,
    ListRequestsComponent,
    AddRequestComponent,
    ListAttendancesComponent,
    MarkAttendanceComponent,
    MessageComponent,
    WindowComponent
  ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        FormsModule,
        AppRoutingModule,
        ReactiveFormsModule,
        MatDialogModule,
        MatSelectModule,
        MatTableModule,
        MatIconModule,
        MatButtonModule
    ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: HeaderInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent],
  entryComponents: [UpdateEmployeeComponent]
})
export class AppModule { }
