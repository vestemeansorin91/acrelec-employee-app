import { animate, state, style, transition, trigger } from '@angular/animations';

import { Component } from '@angular/core';
import { Employee } from '../../models/employee';
import { EmployeesService } from './../../employees.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss'],
  animations: [
    trigger('fade', [
      state('in', style({ opacity: 1 })),
      transition(':enter', [
        style({ opacity: 0 }),
        animate(600)
      ]),
      transition(':leave',
        animate(600, style({ opacity: 0 })))
    ])
  ]
})
export class EmployeeListComponent {
  public employees: Employee[] = [];
  public searchText: string = '';

  constructor(private service: EmployeesService, private router: Router) {
    this.employees = this.service.getAllEmployees();
  }

  public onResetSearch(): void {
    this.searchText = '';
    this.employees = this.service.getAllEmployees();
  }

  public onEditEmployee(employee: Employee): void {
    this.router.navigate([employee.id])
  }

  public onDeleteEmployee(id: string): void {
    this.employees = this.employees.filter(e => e.id !== id);
    this.service.setEmployees(this.employees);
  }
}
