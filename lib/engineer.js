// import employee class
const Employee = require('./employee');

class Engineer extends Employee {
    constructor(employeeName, employeeId, employeeEmail, employeeGithub) {
        this.employeeGithub = employeeGithub;
        
        super(employeeName, employeeId, employeeEmail);
    }
    
    getGithub() {
        return this.employeeGithub;
    }

    getRole() {
        return 'engineer';
    }
};

// export class
module.exports = Engineer;


// ENGINEER extends Employee class

// github ----> GH username

// getGithub()

// EMPLOYEE

// name
// id
// email

// getName()
// getId()
// getEmail()
// getRole() ---> overridden to return Engineer