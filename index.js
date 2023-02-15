// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// Internal modules
// const api = require('./utils/api.js');
const generateMarkdown = require('./utils/generateMarkdown.js');

function getLicense(value) {
  if (value === "GNU AGPLv3") {
      return "[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)";
  } else if (value === "GNU GPLv3") {
      return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
  } else if (value === "GNU LGPLv3") {
      return "[![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)";
  } else if (value === "Apache 2.0") {
      return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
  } else if (value === "Boost Software 1.0") {
      return "[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)";
  } else if (value === "MIT") {
      return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
  } else {
      return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
  }
}

// TODO: Create an array of questions for user input
const questions = [
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of the project?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Enter a brief description of the project.',
    },
    // {
    //   type: 'input',
    //   name: 'linkedin',
    //   message: 'Enter your LinkedIn URL.',
    // },
    {
        type: 'input',
        message: "If applicable, describe the steps required to install your project for the Installation section.",
        name: 'installation'
    },
    {
        type: 'input',
        message: "Provide instructions and examples of your project in use for the Usage section.",
        name: 'usage'
    },
    {
        type: 'input',
        message: "If applicable, provide guidelines on how other developers can contribute to your project.",
        name: 'contributing'
    },
    {
        type: 'input',
        message: "If applicable, provide any tests written for your application and provide examples on how to run them.",
        name: 'tests'
    },
    {
        type: 'list',
        message: "Choose a license for your project.",
        choices: ['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'Boost Software License 1.0', 'The Unlicense'],
        name: 'license'
    },
    {
      type: 'input',
      message: "Do you have any other questions?",
      name: 'questions'
    },
  // QUESTIONS section -- github 
    {
      type: "input",
      name: "userName",
      message: "What is your GitHub username?",
    },

// QUESTIONS section -- email address
    { 
    type: "input",
    name: "userEmail",
    message: "What is your email address that contributors may use for contact?",
  }
  ]

// TODO: Create a function to write README file
// .then((questions) => {
//     const READMEContent = generateMarkdown(questions);

//     fs.writeFile('README.md', READMEContent, (err) => 
//     err ? console.log(err) : console.log("successfully created README.md!")
//     );
// });

function writeToFile(fileName, data) {
  fs.writeFile(fileName, generateMarkdown(data), function (err) {
      if (err) {
          return console.log(err);
      }
  });
}


// // TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((data) => {
      console.log(JSON.stringify(data, null, " "));
      data.getLicense = getLicense(data.license);
      writeToFile("ExampleREADME.md", data);
  });
}

// // Function call to initialize app
init();
