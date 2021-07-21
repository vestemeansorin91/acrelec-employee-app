import { Pipe, PipeTransform } from "@angular/core";

import { Employee } from "../../employees/models/employee";

@Pipe({
    name: 'fullName'
})
export class FullNamePipe implements PipeTransform {
    transform(employee: Employee): string {
      return `${employee.firstName} ${employee.secondName}`;
    }
  }