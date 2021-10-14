const fs = require ('fs')
const inquirer = require('inquirer')
const manager = require('./lib/manager');
const engineer = require('./lib/engineer');
const intern = require('./lib/intern');
const templateHTML = require('./src/templateHtml');
const util = require('util');


const team = [];

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
        name:'managerOfficeNumber',
        message: "What is the team manager's office number?",
        },
    ])
    .then(managerAnswers =>{
        const { managerName, managerId, managerEmail, managerOfficeNumber} = managerAnswers;
        const theManager = new manager (managerName,managerId,managerEmail,managerOfficeNumber)

        team.push(theManager);
    })
    }
           

const teamMemberQuestions = () =>{
    return inquirer.prompt([
        { type: 'list',
        name: 'position',
        message: "What is your team member's position?",
        choices: ['Engineer', 'Intern'],

        },
        {
            type: 'input',
            name: 'name',
            message: "What is the team member's name?",
        },
        {
            type:'input',
            name: 'id',
            message: " What is the team member's Id?"
        },
        {
            type:'input',
            name: 'email',
            message: "What is the team member's email?",
        },
        {
            type:'input',
            name:'github',
            message:"What is the team member's Github?",
            when: (input) => input.position === "Engineer",
        },
        {
            type: 'input',
            name:'school',
            message: "What is the team member's school?",
            when: (input) => input.position === "Intern",
        },
        {
            type: 'confirm',
            name: 'newTeamMember',
            message: "Would you like to add another team member?",
            default: false
        }
    ])
    .then(teamMemberAnswers => {
        let {name,id,email, position, github, school, newTeamMember} = teamMemberAnswers;
        let teamMember;
        if (position === "Engineer") {
            teamMember = new engineer (name,id,email,github);
            
        } else if (position === "Intern"){
            teamMember = new intern (name,id,email,school);
            
        }
        team.push(teamMember);

        if(newTeamMember) {
            return teamMemberQuestions(team);
        } else {
            return team;
        }
    })
}

const writeToHTML = util.promisify(fs.writeFile);

const init = () => {
    managerQuestions().then(teamMemberQuestions).then((answers) => writeToHTML("index.html", templateHTML(answers)));
};

init();



