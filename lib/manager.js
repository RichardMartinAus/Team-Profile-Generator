// import employee class
const Employee = require('./employee');

class Manager extends Employee {
    constructor(employeeName, employeeId, employeeEmail, employeeOffice) {
        
        super(employeeName, employeeId, employeeEmail);
        
        this.employeeOffice = employeeOffice;
    }
    
    officeNumber() {
        return this.employeeOffice;
    }

    getRole() {
        return 'manager';
    }
};

// export class
module.exports = Manager;


