import { Pipe, PipeTransform } from "@angular/core";

import { Employee } from "../../employees/models/employee";

@Pipe({
    name: 'search'
})
export class SearchPipe implements PipeTransform {
    transform(employees: Employee[], searchTerm: string): Employee[] {
        if (!searchTerm) {
            return employees;
        }

        searchTerm = searchTerm.toLowerCase();

        return employees.filter(employee => {
            return employee.firstName.toLowerCase().includes(searchTerm)
                || employee.secondName.toLowerCase().includes(searchTerm)
                || employee.position.toLowerCase().includes(searchTerm)
        }
        );
    }
}
