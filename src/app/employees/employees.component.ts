import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { Component, OnInit, ViewChild } from '@angular/core';
import { map, tap } from 'rxjs/operators';

import { Employee } from './models/employee';
import { EmployeesService } from './employees.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss'],
})
export class EmployeesComponent implements OnInit {
  public employees$: Observable<Employee[]> | undefined;
  public e$ = new BehaviorSubject<Employee[]>([]);
  public searchText: string = '';

  constructor(private service: EmployeesService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.data.subscribe(data => {
      this.e$.next(data.employees);
    });
  }

  public onSearch(input: string): void {
    (input ? this.service.getEmplyoees().pipe(
      map(employees => employees.filter(e => e.firstName.includes(input) || e.secondName.includes(input) || e.position.includes(input))),
      tap((e) => console.log(e))
    ) : this.service.getEmplyoees()).subscribe(r => {
      this.e$.next(r);
    });
  }

  public onResetSearch(): void {
    this.searchText = '';
  }

  public onEditEmployee(employee: Employee): void {
    this.router.navigate([employee.id])
  }

  public onDeleteEmployee(id: string): void {
    const employees = this.e$.value;
    this.e$.next(employees.filter(e => e.id !== id));
  }
}
