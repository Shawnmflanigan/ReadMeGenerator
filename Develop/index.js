//Include packages needed for this application
var inquirer = require('inquirer');

//Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of the project?',
    },
    {   type: 'input',
        name: 'description',
        message: 'Please provide a description of this project.',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What command do you need to run the dependancies?',
    },
    {   type: 'input',
        name: 'tests',
        message: 'What cammand do you need to run tests?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What do people need to know about using this application?',
    },
    {   type: 'input',
        name: 'contributing',
        message: 'How do you countribute to this application.',
    },
    {
        type: 'input',
        name: 'questions',
        message: 'Please provide your e-mail address for user questions',
    },
    {   type: 'input',
        name: 'github',
        message: 'Please provide a link to your github username.',
    },
    {   type: 'list',
        name: 'license',
        message: 'Which licence would you like to use for your project?',
        choices: ['ISC', 'MIT', 'Apache 2.0', 'BSD 3', 'GNU', 'Mozilla 2.0', 'Other', 'None'],
    },
];

//Create a function to write README file
function writeToFile(fileName, data) {}

//Create a function to initialize app
function init() {}

// Function call to initialize app
init();
