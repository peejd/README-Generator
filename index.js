const inquirer = require('inquirer');
const fs = require('fs');

const questions = [
    {
      type: 'input',
      name: 'title',
      message: 'What is your project title?'
    },
    {
      type: 'input',
      name: 'desc',
      message: 'Enter your project description:'
    },
    {
      type: 'input',
      name: 'install',
      message: 'Enter installation instructions:'
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Explain how to use your program:'
    },
    {
      type: 'input',
      name: 'contrib',
      message: 'How can people contribute to your project?'
    },
    {
      type: 'input',
      name: 'testing',
      message: 'Explain what tests can be run on this application and how:'
    },
    {
      type: 'input',
      name: 'gituser',
      message: 'Enter your GitHub username:'
    },
    {
      type: 'input',
      name: 'email',
      message: 'Enter your email address:'
    },
    {
      type: 'list',
      name: 'license',
      message: 'Choose the applicable license for your application:',
      choices: ['MIT License','GNU General Public License v3.0','Apache License v2.0']
    }
  ];

inquirer.prompt(questions)
  .then((answers) => {
    console.log('answers', answers);
    var badge
    if (answers.license == 'MIT License') {
      badge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
    }
    else if (answers.license == 'GNU General Public License v3.0') {
      badge = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'
    }
    else {
      badge = '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
    }
    
    const md = 
`
# ${answers.title}
${badge}

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Testing](#testing)
- [Questions](#questions)
- [License](#license)

## Description
${answers.desc}

## Installation
${answers.install}

## Usage
${answers.usage}

## Contributing
${answers.contrib}

## Testing
${answers.testing}

## Questions
Please check out my GitHub for examples of my work:
https://github.com/${answers.gituser}

If you have any questions, feel free to contact me via email at:
${answers.email}

## License
This application is covered under the ${answers.license}.
`;
    fs.writeFile('README.md', md, (err) => {
      if (err) throw err;
      console.log('Answers saved to README.md');
    });
  });
