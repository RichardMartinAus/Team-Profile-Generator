// import employee class
const Employee = require('./employee');

class Manager extends Employee {
    constructor(employeeName, employeeId, employeeEmail, employeeOffice) {
        this.employeeOffice = employeeOffice;
        
        super(employeeName, employeeId, employeeEmail);
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


// MANAGER extends employee

// officeNumber

// EMPLOYEE

// name
// id
// email

// getName()
// getId()
// getEmail()
// getRole() ---> overridden to return Manager