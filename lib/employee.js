// IMPORT userAnswers
const answers = require('../index.js');

class Employee {
    constructor(employeeName, employeeId, employeeEmail) {
        this.employeeName = getName();
        this.employeeId = getId();
        this.employeeEmail = getEmail();
    }

}

const employeeElm = new Employee(answers.employeeName, answers.employeeId, answers.employeeEmail);

getName() {
    JSON.parse(answers);
    return answers.employeeName;
};



// EMPLOYEE

// name
// id
// email

// getName()
// getId()
// getEmail()
// getRole() ---> returns employee