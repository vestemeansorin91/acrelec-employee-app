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


  constructor(private service: EmployeesService) { }

  ngOnInit(): void {
    this.service.getEmplyoees().subscribe(r => {
      this.e$.next(r);
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
    console.log('onEditEmployee', employee);

    const input = document.createElement('input');
    input.setAttribute('type', 'checkbox');
  }

  public onDeleteEmployee(id: string): void {
    const employees = this.e$.value;
    this.e$.next(employees.filter(e => e.id !== id));
  }
}
