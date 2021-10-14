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
            name: 'engineerId',
            message: " What is the engineers Id?"
        },
        {
            type:'input',
            name: 'engineerEmail',
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
    .then((answers)=> internAnswers(answers))
}

function managerAnswers(answers){
    let name = answers.managerName;
    let id =  answers.managerId;
    let email = answers.managersEmail;
    let officeNumber = answers.managersOfficeNumber
    const newManager = new manager(name,id,email,officeNumber)

    team.managers.push(newManager);
    runQuestions(answers.teamChoices)
}
function engineersAnswers(answers){
    let name = answers.engineerName;
    let id = answers.engineerId;
    let email = answers.engineerEmail;
    let github = answers.engineerGithub;
    const newEngineer = new engineer(name, id,email,github)
    team.engineers.push(newEngineer);
    runQuestions(answers.teamChoices);
}
function internAnswers(answers){
    let name = answers.internName;
    let id = answers.internId;
    let email = answers.internEmail;
    let school = answers.internSchool;
    const newIntern = new intern(name, id,email,school)
    team.engineers.push(newIntern);
    runQuestions(answers.teamChoices);
}

function runQuestions(teamChoices){
    switch(teamChoices){
        case 'engineer':
            return engineerQuestions()
        case 'intern':
            return internQuestions()
        default: 
        return generateHtml(team)
    }
}


