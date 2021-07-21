import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';

import { ConfirmDialogComponent } from './../../../shared/components/confirm-dialog/confirm-dialog.component';
import { Employee } from '../../models/employee';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss'],
})
export class EmployeeComponent {
  @Input() public employee: Employee | undefined;
  @Output() public delete = new EventEmitter<string>();
  @Output() public edit = new EventEmitter<Employee>();

  @ViewChild('confirmDialogRef', { static: false }) confirmDialog: ConfirmDialogComponent | undefined;

  onEdit() {
    if(!this.employee?.blocked) {
      this.edit.emit(this.employee);
    }
  }

  onDelete() {
    this.confirmDialog?.open(this.employee);
  }
}
