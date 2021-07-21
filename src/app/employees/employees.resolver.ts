import { Observable, of } from 'rxjs';
import { map, tap } from 'rxjs/operators';

import { Employee } from './models/employee';
import { EmployeesService } from './employees.service';
import { Injectable } from "@angular/core";
import { LocalStorageService } from './../shared/services/localstorage.service';
import { Resolve } from "@angular/router";

@Injectable()
export class EmployeesResolver implements Resolve<Employee[]> {
    constructor(private service: EmployeesService, private localStorageService: LocalStorageService) { }

    resolve(): Observable<Employee[]> {
        if (this.localStorageService.checkIfSaved()) {
            return of(this.localStorageService.getAllEmployees()).pipe(
                tap(employees => this.service.setEmployees(employees))
            )
        }
        return this.service.getEmplyoeesFromJSON().pipe(
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
                tap(employees => this.service.setEmployees(employees))
            )
    }
}

const sortEmployeeByName = (a: any, b: any) => {
    if (a.FirstName < b.FirstName)
        return -1;
    if (a.FirstName > b.FirstName)
        return 1;
    return 0;
};