import { BehaviorSubject, Observable } from 'rxjs';
import { Employee, EmployeeResponse } from './models/employee';

import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { LocalStorageService } from './../shared/services/localstorage.service';
import { environment } from './../../environments/environment';

@Injectable({ providedIn: 'root' })
export class EmployeesService {
    private employees$ = new BehaviorSubject<Employee[]>([]);

    constructor(private http: HttpClient, private localStorageService: LocalStorageService) { }

    public getEmplyoeesFromJSON(): Observable<EmployeeResponse[]> {
        return this.http.get<EmployeeResponse[]>(environment.employeePathToJSON);
    }

    public setEmployees(employees: Employee[]): void {
        this.employees$.next(employees);
        this.localStorageService.setEmployees(employees);
    }

    public getAllEmployees(): Employee[] {
        return this.employees$.value;
    }

    public updateEmployeePosition(employee: Employee): void {
        const allEmployees = this.getAllEmployees();
        const employeeIndex = allEmployees.findIndex(emp => emp.id === employee.id);
        allEmployees[employeeIndex].position = employee.position;

        this.setEmployees(allEmployees);
        this.localStorageService.setEmployees(allEmployees);
    }
}

