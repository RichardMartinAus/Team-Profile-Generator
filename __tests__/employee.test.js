const Employee = require('../lib/employee');

describe('Employee', () => {
    it('should construct a new employee', () => {
        const employee = new Employee('Rob', 4, 'email@email.com');
        expect(employee.employeeName).toEqual('Rob');
        expect(employee.employeeId).toEqual(4);
        expect(employee.employeeEmail).toEqual('email@email.com');
    });

    it("should return the employee role", () => {
        const employee = new Employee("Rob", 4, 'email@email.com');
        expect(employee.getRole()).toEqual('employee');
    });
});
