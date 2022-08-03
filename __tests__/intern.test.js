const Intern = require('../lib/intern');

describe('intern', () => {
    it('should construct a new intern based on employee', () => {
        const intern = new Intern('Harry', 8, 'harry@email.com', 'Melb Uni');
        expect(intern.employeeName).toEqual('Harry');
        expect(intern.employeeId).toEqual(8);
        expect(intern.employeeEmail).toEqual('harry@email.com');
    });

    it('should return the interns school', () => {
        const intern = new Intern('Harry', 8, 'harry@email.com', 'Melb Uni');
        expect(intern.getSchool()).toEqual('Melb Uni');

    })

    it('should return the intern role', () => {
        const intern = new Intern('Harry', 8, 'harry@email.com', 'Melb Uni');
        expect(intern.getRole()).toEqual('intern');
    });
});
