const intern = require('../lib/intern');

describe('intern', () =>{
    describe('name', () =>{
        it("should return the name that is input", () =>{
           const internTest = new intern('Garrett','7','gmmarshall27@gmail.com','GSU')
           const nameTest = 'Garrett'

           expect(nameTest).toEqual(internTest.getName())
        })
    })
    describe('id',() =>{
        it("should return the id that is input",() =>{
            const internTest = new intern('Garrett','7','gmmarshall27@gmail.com','GSU')
            const idTest = '7'

            expect(idTest).toEqual(internTest.getId())
        })
    })
    describe('email',() =>{
        it("should return the email that is input",() =>{
            const internTest = new intern('Garrett','7','gmmarshall27@gmail.com','GSU')
            const emailTest = 'gmmarshall27@gmail.com'

            expect(emailTest).toEqual(internTest.getEmail())
        })
    })
    describe('school',() =>{
        it("should return the school that is input",() =>{
            const internTest = new intern('Garrett','7','gmmarshall27@gmail.com','GSU')
            const schoolTest = 'GSU'

            expect(schoolTest).toEqual(internTest.getSchool())
        })
    })
})