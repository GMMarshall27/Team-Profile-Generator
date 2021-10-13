const fs = require ('fs')
const inquirer = require('inquirer')
const manager = require('./lib/manager');
const engineer = require('./lib/engineer');
const intern = require('./lib/intern');
const manager = require('./lib/manager');

const team = {
    managers: [],
    engineers: [],
    interns: [],
}

const managerQuestions = () => {
    return inquirer.prompt([
        {
        type: 'input',
        name: 'managerName',
        message: "What is the team manager's name?"
        },
        {
        type: 'input',
        name: 'managerId',
        message: "What is the team manager's ID?",
        },
        {
        type: 'input',
        name: 'managerEmail',
        message: "What is the team manager's email?",
        },
        {
        type:'input',
        name:'managersOfficeNumber',
        message: "What is the team manager's office number?",
        }
    ])
    .then((answers)=> teamManagerAnswers(answers))
}
const engineerQuestions = () =>{
    return inquirer.prompt([
        {
            type: 'input',
            name: 'engineerName',
            message: "What is the engineer's name?",
        }
    ])
}