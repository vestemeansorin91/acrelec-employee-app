import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { EmployeeComponent } from './components/employee/employee.component';
import { EmployeeEditComponent } from './components/employee-edit/employee-edit.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { EmployeesComponent } from './employees.component';
import { EmployeesResolver } from './employees.resolver';
import { EmployeesRoutes } from './employees.routes';
import { NgModule } from '@angular/core';
import { SharedModule } from './../shared/shared.module';

@NgModule({
  declarations: [
    EmployeesComponent,
    EmployeeListComponent,
    EmployeeComponent,
    EmployeeEditComponent
  ],
  imports: [
    CommonModule,
    EmployeesRoutes,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ],
  providers: [EmployeesResolver]
})
export class EmployeesModule { }
