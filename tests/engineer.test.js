const engineer = require('../lib/engineer');

describe('engineer', () =>{
    describe('name', () =>{
        it("should return the name that is input", () =>{
           const engineerTest = new engineer('Garrett','7','gmmarshall27@gmail.com','gmmarshall27')
           const nameTest = 'Garrett'

           expect(nameTest).toEqual(engineerTest.getName())
        })
    })
    describe('id',() =>{
        it("should return the id that is input",() =>{
            const engineerTest = new engineer('Garrett','7','gmmarshall27@gmail.com','gmmarshall27')
            const idTest = '7'

            expect(idTest).toEqual(engineerTest.getId())
        })
    })
    describe('email',() =>{
        it("should return the email that is input",() =>{
            const engineerTest = new engineer('Garrett','7','gmmarshall27@gmail.com','gmmarshall27')
            const emailTest = 'gmmarshall27@gmail.com'

            expect(emailTest).toEqual(engineerTest.getEmail())
        })
    })
    describe('github',() =>{
        it("should return the github that is input",() =>{
            const engineerTest = new engineer('Garrett','7','gmmarshall27@gmail.com','gmmarshall27')
            const githubTest = 'gmmarshall27'

            expect(githubTest).toEqual(engineerTest.getGithub())
        })
    })
})