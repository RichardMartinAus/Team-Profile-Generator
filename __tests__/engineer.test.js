const Engineer = require('../lib/engineer');

describe('Engineer', () => {
    it('should construct a new engineer based on employee', () => {
        const engineer = new Engineer('Bec', 6, 'bec@email.com', 'RoboBec');
        expect(engineer.employeeName).toEqual('Bec');
        expect(engineer.employeeId).toEqual(6);
        expect(engineer.employeeEmail).toEqual('bec@email.com');
    });

    it('should return the engineers GitHub profile name', () => {
        const engineer = new Engineer('Bec', 6, 'bec@email.com', 'RoboBec');
        expect(engineer.getGithub()).toEqual('RoboBec');

    })

    it('should return the engineer role', () => {
        const engineer = new Engineer('Bec', 6, 'bec@email.com', 'RoboBec');
        expect(engineer.getRole()).toEqual('engineer');
    });
});

