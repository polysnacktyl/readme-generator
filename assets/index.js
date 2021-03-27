const fs = require('fs');
const inquirer = require('inquirer');

const licenses = ["MIT", "Not Mit"];

inquirer
    .prompt([
        {
            name: "repoName",
            type: "input",
            message: "What is the name of the github repository? ex: github.com/username/*repo name*",
        },
        {
            name: "githubName",
            type: "input",
            message: "What is your github username?",
        },
        {
            name: "license",
            type: "checkbox",
            message: "What license would you like to use?",
            choices: licenses,
        },

        {
            name: "description",
            type: "input",
            message: "Describe the project: why did you build it? What did you learn?",

        },
        {
            type: "input",
            message: "Installation instructions?",
            name: "installation",
        },
        {
            type: "input",
            message: "provide instructions for use--how to get the development environment running",
            name: "usage",
        },
        {
            type: "input",
            message: "Credits?",
            name: "credits",
        },
        {
            type: "input",
            message: "features",
            name: "features",
        },
        {
            type: "input",
            message: "instructions for contributing to the project",
            name: "contribute",
        },
        {
            type: "input",
            message: "tested",
            name: "test",
        },


    ])

    .then((data) => {

        const answered = {data};
        console.log(answered);

        console.log(data.contribute);

        const sections = [ '#', 'githubName', '## Description', '## Installation', '## Usage', '## Credits', '## Features', '## Contributions', '## Testing', '## License'];
        const [ repoName, githubName, description, installation, usage, credits, features, contributions, testing, license] = sections; 

        const licenses = [ '(https://img.shields.io/badge/License-MIT-yellow.svg)', 'https://google.com'];
        const [ MIT, NotMIT ] = licenses;
        

        console.log(license);

let doc = `
${repoName} [Readme Generator](https://github.com/${data.githubName}/${data.repoName}/)
(https://github.com/${data.githubName}/)

${description}
${data.description}

${installation} 
${data.installation}

${usage}
${data.usage}

${credits} 
${data.credits}

${features}
${data.features}

${contributions}
${data.contributions}

${testing}
${data.testing}

${license}
(https://img.shields.io/badge/License-MIT-yellow.svg)



`;

           const filename = 'README.md'
        fs.writeFile(filename, doc, (err) =>
            err ? console.log(err) : console.log('Success!')
        );

       

    });










// let doc = `
// [ License Info ](#license)

// [ Usage tips ](#usage)


// # [link-to-deployed-site](https://github.com/${data.githubName}/${data.repoName})

// ## Description
// ${data.description}

// ## Installation
// ${data.installation}

// ## Usage
// ${data.usage} 

// ## Features
// ${data.features} 

// ## Testing
// ${data.test}

// ## Contribute
// ${data.contribute} 

// ## Credits 
// ${data.credits}
 
// ### License
// [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`







       
    






     



    







