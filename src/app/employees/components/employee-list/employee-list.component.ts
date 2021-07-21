import { Component, EventEmitter, Input, Output } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';

import { Employee } from '../../models/employee';

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
  @Input() public employees: Employee[] = [];

  @Output() public delete = new EventEmitter<string>();
  @Output() public edit = new EventEmitter<Employee>();
  @Output() public search = new EventEmitter<string>();

  public searchText: string = '';

  public onSearch(input: string): void {
    this.search.emit(input);
  }

  public onResetSearch(): void {
    this.searchText = '';
  }

}
