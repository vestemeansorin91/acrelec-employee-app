import { CommonModule } from '@angular/common';
import { EmployeeComponent } from './components/employee/employee.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { EmployeesComponent } from './employees.component';
import { EmployeesRoutes } from './employees.routes';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { SharedModule } from './../shared/shared.module';

@NgModule({
  declarations: [
    EmployeesComponent,
    EmployeeListComponent,
    EmployeeComponent
  ],
  imports: [
    CommonModule,
    EmployeesRoutes,
    FormsModule,
    SharedModule
  ]
})
export class EmployeesModule { }
 