import { EmployeesService } from './employees.service';
import { Injectable } from "@angular/core";
import { Resolve } from "@angular/router";

@Injectable()
export class EmployeesResolver implements Resolve<any> {
    constructor(private service: EmployeesService) { }

    resolve() {
        return this.service.getEmplyoees();
    }
}