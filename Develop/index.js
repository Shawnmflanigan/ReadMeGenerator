//Include packages needed for this application
const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

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
        message: 'What command do you need to run tests?',
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
        choices: ['ISC', 'MIT', 'Apache', 'BSD', 'GNU', 'Mozilla','None'],
    },
];

// Function to write README file using the user input
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
  }
  
  // Function to initialize app
  function init() {
    inquirer.prompt(questions).then((answers) => {
      console.log('Generating README...');
      writeToFile('README.md', generateMarkdown({ ...answers }));
    });
  }
  
  init();