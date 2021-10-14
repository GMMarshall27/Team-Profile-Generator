const { describe, it } = require('@jest/globals');
const manager = require('../lib/manager');

describe('manager', () =>{
    describe('name', () =>{
        it("should return the name that is input", () =>{
           const managerTest = new manager('Garrett','7','gmmarshall27@gmail.com','234')
           const nameTest = 'Garrett'

           expect(nameTest).toEqual(managerTest.getName())
        })
    })
    describe('id',() =>{
        it("should return the id that is input",() =>{
            const managerTest = new manager('Garrett','7','gmmarshall27@gmail.com','234')
            const idTest = '7'

            expect(idTest).toEqual(managerTest.getId())
        })
    })
    describe('email',() =>{
        it("should return the email that is input",() =>{
            const managerTest = new manager('Garrett','7','gmmarshall27@gmail.com','234')
            const emailTest = 'gmmarshall27@gmail.com'

            expect(emailTest).toEqual(managerTest.getEmail())
        })
    })
    describe('officeNumber',() => {
        it("should return the office number that is input", () =>{
            const managerTest = new manager('Garrett','7','gmmarshall27@gmail.com','234')

            expect(managerTest.getRole()).toEqual('Manager')
        })
    })
})