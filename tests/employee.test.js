const employee = require('../lib/employee');

describe('employee', () =>{
    describe('name', () =>{
        it("should return the name that is input", () =>{
           const employeeTest = new employee('Garrett','7','gmmarshall27@gmail.com')
           const nameTest = 'Garrett'

           expect(nameTest).toEqual(employeeTest.getName())
        })
    })
    describe('id',() =>{
        it("should return the id that is input",() =>{
            const employeeTest = new employee('Garrett','7','gmmarshall27@gmail.com')
            const idTest = '7'

            expect(idTest).toEqual(employeeTest.getId())
        })
    })
    describe('email',() =>{
        it("should return the email that is input",() =>{
            const employeeTest = new employee('Garrett','7','gmmarshall27@gmail.com')
            const emailTest = 'gmmarshall27@gmail.com'

            expect(emailTest).toEqual(employeeTest.getEmail())
        })
    })
})