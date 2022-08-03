// Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// Import classes
const Employee = require('./lib/employee');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');

// Empty array for classes
const managerArray = [];
const engineerArray = [];
const internArray = [];

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
        if (answers.employeeType === 'Manager') {
            let manager = new Manager(answers.employeeName, answers.employeeId, answers.employeeEmail, answers.employeeOffice);
            managerArray.push(manager);
            createManager(Manager);
        } 
        if (answers.employeeType === 'Engineer') {
            let engineer = new Engineer(answers.employeeName, answers.employeeId, answers.employeeEmail, answers.employeeGithub);
            engineerArray.push(engineer);
            createEngineer(Engineer);
        }
        if (answers.employeeType === 'Intern') {
            let intern = new Intern(answers.employeeName, answers.employeeId, answers.employeeEmail, answers.employeeSchool);
            internArray.push(intern);
            createIntern(Intern);
        }  
        if (answers.askAgain) {
            askQuestions();
        }  
        else {
            generateHtml(Manager, Engineer, Intern);
            console.log(managerArray);
            console.log(engineerArray);
            console.log(internArray);
            writeHtml();
        };
    });
};

function createManager() {
    return `\n<div class="card">
            <div class="card-header">
                <h2>${Manager.getName}</h2>
                <h3><span class="material-symbols-outlined">
                        leaderboard
                    </span> Manager</h3>
            </div>
            <div class="card-body">
                <p>ID: ${Manager.getId}</p>
                <p>Email: <a>${Manager.getEmail}</a></p>
                <p>Office number: ${Manager.getOffice}</p>
            </div>
        </div>`;
};

function createEngineer() {
    return `\n<div class="card">
            <div class="card-header">
                <h2>${Engineer.getName}</h2>
                <h3><span class="material-symbols-outlined">
                        integration_instructions
                    </span> Engineer</h3>
            </div>
            <div class="card-body">
                <p>ID: ${Engineer.getId}</p>
                <p>Email: <a>${Engineer.getEmail}</a></p>
                <p>GitHub: <a>${Engineer.getGithub}</a></p>
            </div>
        </div>`;
};

function createIntern() {
    return `\n<div class="card">
            <div class="card-header">
                <h2>${Intern.getName}</h2>
                <h3><span class="material-symbols-outlined">
                        school
                    </span> Intern</h3>
            </div>
            <div class="card-body">
                <p>ID: ${Intern.getId}</p>
                <p>Email: <a>${Intern.getEmail}</a></p>
                <p>GitHub: ${Intern.getSchool}</p>
            </div>
        </div>`;
}


// function to add the cards into the html and write the html file
const generateHtml = (manager, engineer, intern ) => {
    `<!DOCTYPE html>
    <html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>My Team</title>
        <link rel="stylesheet" href="../dist/styles.css">
        <!-- Google fonts icons -->
        <link rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
    </head>

    <body>
        <!-- Header -->
        <header>
            <h1>My Team</h1>
        </header>

        <!-- Main body -->
        <div class="container">
            <!-- Cards -->
            ${createManager(manager)}
            ${createEngineer(engineer)}
            ${createIntern(intern)}

        </div>


    </body>

    </html>`;

    
}
    

// Function to write the html file
function writeHtml() {
    fs.writeFile('./dist/index.html', `${generateHtml()}`, (err) =>
    err ? console.error(err) : console.log('HTML file successfully written!')
    );
};

// Functions to call when the app is initialized by index.js
function init() {
    console.log('Welcome to the team-builder app! \nPlease answer the following questions and an HTML \ndocument will be created based on your answers.');
    askQuestions();
}

// Function call to initialize app
init();