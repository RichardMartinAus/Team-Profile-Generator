// Ask user questions via enquirer
// separate answers to various classes
// collect classes to build back into the html template
// render and write the html file

// Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// Empty array for the user responses to build with
const userAnswers = [];

// Questions for user using inquierer
const questions = [
    {
        type: 'list',
        name: 'employeeType',
        message: 'What type of employee would you like to enter?',
        choices: [
            'Manager',
            'Engineer',
            'Intern',
        ],
    },
    {
        type: 'input',
        name: 'employeeName',
        message: 'Enter the first name of the employee.',
    },
    {
        type: 'input',
        name: 'employeeId',
        message: 'Enter the ID of the employee.',
    },
    {
        type: 'input',
        name: 'employeeEmail',
        message: 'Enter the email address of the employee.',
    },
    {
        type: 'input',
        name: 'employeeOffice',
        message: 'Enter the office number of the employee.',
        when: (answers) => answers.employeeType === 'Manager',
    },
    {
        type: 'input',
        name: 'employeeGithub',
        message: 'Enter the GitHub username of the employee.',
        when: (answers) => answers.employeeType === 'Engineer',
    },
    {
        type: 'input',
        name: 'employeeSchool',
        message: 'What school did the employee attend?',
        when: (answers) => answers.employeeType === 'Intern',
    },
    {
        type: 'confirm',
        name: 'askAgain',
        message: 'Would you like to add another team member? (hit enter for YES)',
        default: true,
    },
];


// Function to ask the questions and filter according to answers
function askQuestions() {
    inquirer.prompt(questions)
    .then((answers) => {
        userAnswers.push(answers);
        if (answers.askAgain) {
            askQuestions();
        } else {
            console.log('Your team is made up of:' + JSON.stringify(userAnswers));
            module.exports = {userAnswers};
        }
    })
}

// write a function to generate the html cards for each class

// function to add the cards into the html and write the html file

// Functions to call when the app is initialized by index.js
function init() {
    console.log('Welcome to the team-builder app! \nPlease answer the following questions and an HTML \ndocument will be created based on your answers.');
    askQuestions();
}

// Function call to initialize app
init();