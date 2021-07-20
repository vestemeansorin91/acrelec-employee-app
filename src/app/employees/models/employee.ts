export interface Employee {
    firstName: string;
    secondName: string;
    position: EmployeePosition;
    id: string;
    details: string;
    blocked: boolean;
}

export interface EmployeeResponse {
    FirstName: string;
    SecondName: string;
    Position: EmployeePosition;
    Id: string;
    Details: string;
    Blocked: boolean;
}

export enum EmployeePosition {
    CustomerGroupPlanner = 'Customer Group Planner',
    RelationalResonanceFacilitator = 'Relational Resonance Facilitator',
    InternationalOperationsMobility = 'International Operations Mobility',
    RegionalTacticsArchitect = 'Regional Tactics Architect',
    SeniorSecurityAgent = 'Senior Security Agent',
    FutureIdentityDesigner = 'Future Identity Designer',
    NationalLiasonTechnician = 'National Liason Technician'
}