import { RouterModule, Routes } from '@angular/router';

import { EmployeeEditComponent } from './components/employee-edit/employee-edit.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { EmployeesComponent } from './employees.component';
import { EmployeesResolver } from './employees.resolver';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: '',
    component: EmployeesComponent,
    resolve: { employees: EmployeesResolver },
    children: [
      {
        path: '',
        component: EmployeeListComponent
      },
      {
        path: ':id',
        component: EmployeeEditComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeesRoutes { }
