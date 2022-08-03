const Manager = require('../lib/manager');

describe('manager', () => {
    it('should construct a new manager based on employee', () => {
        const manager = new Manager('Lucy', 1, 'lucy@email.com', 42);
        expect(manager.employeeName).toEqual('Lucy');
        expect(manager.employeeId).toEqual(1);
        expect(manager.employeeEmail).toEqual('lucy@email.com');
    });

    it('should return the managers office number', () => {
        const manager = new Manager('Lucy', 1, 'lucy@email.com', 42);
        expect(manager.officeNumber()).toEqual(42);

    })

    it('should return the manager role', () => {
        const manager = new Manager('Lucy', 1, 'lucy@email.com', 42);
        expect(manager.getRole()).toEqual('manager');
    });
});
