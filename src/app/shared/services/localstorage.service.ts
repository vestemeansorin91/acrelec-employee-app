import { Employee } from "../../employees/models/employee";
import { Injectable } from "@angular/core";

const EMPLOYEES_KEY: string = 'employees';

@Injectable({ providedIn: 'root' })
export class LocalStorageService {

    public checkIfSaved():boolean {
        return !!JSON.parse(localStorage.getItem(EMPLOYEES_KEY) as string);
    }

    public getAllEmployees(): Employee[] {
        return JSON.parse(localStorage.getItem(EMPLOYEES_KEY) as string) || [];
    }

    public setEmployees(employees: Employee[]):void {
        localStorage.setItem(EMPLOYEES_KEY, JSON.stringify(employees));
    }

    public updateEmployeePosition(employee: Employee):void {
       const allEmployees =  this.getAllEmployees();
       const employeeIndex = allEmployees.findIndex(emp => emp.id === employee.id);

       console.log(employeeIndex)
       allEmployees[employeeIndex].position = employee.position;
       
       this.setEmployees(allEmployees);
    }

    public deleteEmployee(id: string): void {
       const filteredEmployees = this.getAllEmployees().filter(emp => emp.id !== id);
       this.setEmployees(filteredEmployees);
    }
}