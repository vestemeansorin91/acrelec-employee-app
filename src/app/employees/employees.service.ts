import { BehaviorSubject, Observable } from 'rxjs';
import { Employee, EmployeeResponse } from './models/employee';

import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { LocalStorageService } from './../shared/services/localstorage.service';

@Injectable({ providedIn: 'root' })
export class EmployeesService {
    private employees$ = new BehaviorSubject<Employee[]>([]);
    public employeesObs = this.employees$.asObservable();

    constructor(private http: HttpClient, private localStorageService: LocalStorageService) { }

    public getEmplyoeesFromJSON(): Observable<EmployeeResponse[]> {
        return this.http.get<EmployeeResponse[]>('./../../assets/data/employees.json');
    }

    public setEmployees(employees: Employee[]) {
        this.employees$.next(employees);
        this.localStorageService.setEmployees(employees);
    }

    public getAllEmployees() {
        return this.employees$.value;
    }

    public updateEmployeePosition(employee: Employee) :void {
        const allEmployees =  this.getAllEmployees();
        const employeeIndex = allEmployees.findIndex(emp => emp.id === employee.id);
        allEmployees[employeeIndex].position = employee.position;
        
        this.setEmployees(allEmployees);
        this.localStorageService.setEmployees(allEmployees);
    }
}

