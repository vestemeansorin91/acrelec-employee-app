import { BehaviorSubject, Observable } from 'rxjs';
import { Employee, EmployeeResponse } from './models/employee';
import { map, tap } from 'rxjs/operators';

import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({ providedIn: 'root' })
export class EmployeesService {
    private employees$ = new BehaviorSubject<Employee[]>([]);
    public employeesObs = this.employees$.asObservable();

    constructor(private http: HttpClient) { }

    public getEmplyoees(): Observable<Employee[]> {
        return this.http.get<EmployeeResponse[]>('./../../assets/data/employees.json').pipe(
            map(employees => {
                return employees.sort(sortEmployeeByName).map(e => {
                    return {
                        id: e.Id,
                        firstName: e.FirstName,
                        secondName: e.SecondName,
                        position: e.Position,
                        details: e.Details,
                        blocked: e.Blocked
                    }
                })
            }
           )).pipe(
               tap(employees => {
                   this.setEmployees(employees)
               })
           );
    }

    public setEmployees(employees: Employee[]) {
        this.employees$.next(employees);
    }

    public getAllEmployees() {
        return this.employees$.value;
    }
}

const sortEmployeeByName = (a: any, b: any) => {
    if (a.FirstName < b.FirstName)
        return -1;
    if (a.FirstName > b.FirstName)
        return 1;
    return 0;
};