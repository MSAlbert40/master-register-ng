import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import {LoginComponent} from "./security/views/login/login.component";
import {PasswordComponent} from "./security/views/password/password.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {RegisterEmployeeComponent} from "./dashboard/register-employee/register-employee.component";
import {ReportsComponent} from "./dashboard/reports/reports.component";
import {ListEmployeesComponent} from "./dashboard/reports/list-employees/list-employees.component";
import {WorkAreaEmployeesComponent} from "./dashboard/reports/work-area-employees/work-area-employees.component";

const routes: Routes = [
  { path: 'LogIn', component: LoginComponent },
  { path: 'Recovery-Password', component: PasswordComponent },
  { path: 'Dashboard', component: DashboardComponent },
  { path: 'Register-Employee', component: RegisterEmployeeComponent },
  { path: 'Reports', component: ReportsComponent },
  { path: 'Employees', component: ListEmployeesComponent },
  { path: 'Work-Area', component: WorkAreaEmployeesComponent },
  { path: '', redirectTo: 'LogIn', pathMatch: 'full' }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
