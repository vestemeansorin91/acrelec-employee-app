import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Component } from '@angular/core';
import { Employee } from '../../models/employee';
import { EmployeesService } from './../../employees.service';
import { LocalStorageService } from './../../../shared/services/localstorage.service';

@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.scss']
})
export class EmployeeEditComponent {
  public employee: Employee | undefined;
  public employeeFormGroup: FormGroup;

  constructor(private route: ActivatedRoute,
     private router: Router, 
     private fb: FormBuilder, 
     private service: EmployeesService, 
     private localStorageService: LocalStorageService) {
    this.employee = this.service.getAllEmployees().find(e => e.id === this.route.snapshot.params['id']);

    if (!this.employee) {
      this.navigateBack();
    }

    // build form group
    this.employeeFormGroup = this.fb.group({
      position: this.fb.control(null, [Validators.required])
    })

    // patch form group
    this.employeeFormGroup?.get('position')?.patchValue(this.employee?.position);
  }

  get position() {
    return this.employeeFormGroup?.get('position')?.value;
  }

  public onCancel(): void {
    this.navigateBack();
  }

  public onSave(): void {
    const updatedEmployee = {...this.employee};
    updatedEmployee.position = this.employeeFormGroup.value.position;

    this.service.updateEmployeePosition(updatedEmployee as Employee)
    this.navigateBack();
  }

  private navigateBack(): void {
    this.router.navigate(['../']).then(_ => null);
  }
}
