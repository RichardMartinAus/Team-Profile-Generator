// import employee class
const Employee = require('./employee');

class Intern extends Employee {
    constructor(employeeName, employeeId, employeeEmail, employeeSchool) {
        
        super(employeeName, employeeId, employeeEmail);
        
        this.employeeSchool = employeeSchool; 
    }
    
    getSchool() {
        return this.employeeSchool;
    }

    getRole() {
        return 'intern';
    }
};

// export class
module.exports = Intern;


// INTERN extends Employee class

// school

// getSchool()

// EMPLOYEE

// name
// id
// email

// getName()
// getId()
// getEmail()
// getRole() ---> overridden to return Intern