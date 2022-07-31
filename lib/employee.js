// EMPLOYEE CLASS
class Employee {
    constructor(employeeName, employeeId, employeeEmail) {
        this.employeeName = employeeName;
        this.employeeId = employeeId;
        this.employeeEmail = employeeEmail;
    }

    getName() {
        return this.name;
    }

    getId() {
        return this.employeeName;
    }

    getEmail() {
        return this.employeeEmail;
    }

    getRole() {
        return 'Employee';
    }
}

// export class
module.export = Employee;


// EMPLOYEE

// name
// id
// email

// getName()
// getId()
// getEmail()
// getRole() ---> returns employee