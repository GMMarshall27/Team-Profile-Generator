const fs = require ('fs')
const inquirer = require('inquirer')
const manager = require('./lib/manager');
const engineer = require('./lib/engineer');
const intern = require('./lib/intern');


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
        },
        {
            type: 'list',
            name:'teamChoices',
            message: "Which type of team member would you like to add?",
            choices: ['Engineer', 'Intern', "I don't want to add any more team members"]
        }
    ])
    .then((answers)=> managerAnswers(answers))
}
const engineerQuestions = () =>{
    return inquirer.prompt([
        {
            type: 'input',
            name: 'engineerName',
            message: "What is the engineer's name?",
        },
        {
            type:'input',
            name: 'enginnerId',
            message: " What is the engineers Id?"
        },
        {
            type:'input',
            name: 'enginerEmail',
            message: "What is the engineer's email?",
        },
        {
            type:'input',
            name:'engineerGithub',
            message:"What is the engineer's Github?"
        },
        {
            type: 'list',
            name:'teamChoices',
            message: "Which type of team member would you like to add?",
            choices: ['Engineer', 'Intern', "I don't want to add any more team members"]
        }
    ])
    .then((answers)=> engineersAnswers(answers))
}
const internQuestions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'internName',
            message: "What is the intern's name?",
        },
        {
            type:'input',
            name: 'internId',
            message: " What is the intern's Id?"
        },
        {
            type:'input',
            name: 'internEmail',
            message: "What is the intern's email?",
        },
        {
            type:'input',
            name:'internSchool',
            message:"What is the intern's school?"
        },
        {
            type: 'list',
            name:'teamChoices',
            message: "Which type of team member would you like to add?",
            choices: ['Engineer', 'Intern', "I don't want to add any more team members"]
        }
    ])
    .then((answers)=> engineersAnswers(answers))
}