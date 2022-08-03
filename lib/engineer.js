// import employee class
const Employee = require('./employee');

class Engineer extends Employee {
    constructor(employeeName, employeeId, employeeEmail, employeeGithub) {
                
        super(employeeName, employeeId, employeeEmail);
        
        this.employeeGithub = employeeGithub;
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
