// Packages needed for this application to run. 
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// Questions array
const questions = [
    {
        type: 'input', 
        name: 'project', 
        message: 'What is the title of your project?', 
    },
    {
        type: 'input', 
        name: 'description',
        message: 'Please type a short description of your project.',
    },
    {
        type: 'input', 
        name: 'installation', 
        message: 'What should the user type in the command line to install dependencies?',
        default: 'npm i', 
    },
    {
        type: 'input', 
        name: 'usage', 
        message: 'What should the user know about using this application?', 
    },
    {
        type: 'input', 
        name: 'contribution', 
        message: 'What should the user know about contributing to this application?', 
    },
    {
        type: 'input', 
        name: 'test', 
        message: 'What should the user type in the command line to run tests?', 
    },
    {
        type: 'list', 
        name: 'license', 
        message: 'What license does your project have?',
        choices: ['Apache', 'BSD 3', 'GNU', 'MIT', 'Mozilla', 'Eclipse', 'None'], 
    }, 
    {
        type: 'input', 
        name:'github', 
        message: 'What is your GitHub username?',
    },
    {
        type: 'input', 
        name: 'email',
        message: 'What is your email address?' 
    }
]

  

/**
 * Function to write README.md file to repo
 * @param {*} fileName will represent the file name that data will be written to
 * @param {*} data will represent the responses collected from the user
 */

  function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
    err ? console.error(err) : console.log('Successfully created README.md'))
  }

  
/**
 * Function to initialize the node index command in the terminal
 */

  function init() {
    inquirer.prompt(questions)
    .then((response) =>
    writeToFile('Generated README.md', generateMarkdown(response))); 
  }
  
  init();

