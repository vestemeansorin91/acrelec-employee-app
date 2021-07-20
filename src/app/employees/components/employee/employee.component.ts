import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';

import { Employee } from '../../models/employee';
import { ModalComponent } from './../../../shared/components/modal/modal.component';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss'],
})
export class EmployeeComponent {
  @Input() public employee: Employee | undefined;
  @Output() public delete = new EventEmitter<string>();
  @Output() public edit = new EventEmitter<Employee>();

  @ViewChild('modal', { static: false }) modal: ModalComponent | undefined;

  onEdit() {
    if(!this.employee?.blocked) {
      this.edit.emit(this.employee);
      this.modal?.open();
      console.log(this.modal)
    }
  }
}
