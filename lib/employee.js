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
        return 'employee';
    }
};

// export class
module.exports = Employee;


