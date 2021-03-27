const fs = require('fs');
const inquirer = require('inquirer');

const licenses = ["MIT", "unsure/I'll deal with this later"];

inquirer
    .prompt([
        {
            name: "docTitle",
            type: "input",
            message: "title of repo readme",
        },
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

        // {
        //     name: "description",
        //     type: "input",
        //     message: "Describe the project: why did you build it? What did you learn?",

        // },
        // {
        //     type: "input",
        //     message: "Installation instructions?",
        //     name: "installation",
        // },
        // {
        //     type: "input",
        //     message: "provide instructions for use--how to get the development environment running",
        //     name: "usage",
        // },
        // {
        //     type: "input",
        //     message: "Credits?",
        //     name: "credits",
        // },
        // {
        //     type: "input",
        //     message: "features",
        //     name: "features",
        // },
        // {
        //     type: "input",
        //     message: "instructions for contributing to the project",
        //     name: "contribute",
        // },
        // {
        //     type: "input",
        //     message: "tested",
        //     name: "test",
        // },


    ])

    .then((data) => {
        
        // function renderLicenseBadge(license) {
        //     const datalicense = answer.license;
        //     console.log(datalicense)

        //     switch (license) {
        //         case "MIT":
        //             var MITlink = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
        //             console.log(MITlink);
        //             break;

        //         case "NotMIT":
        //             var NotMIT = "";
        //             console.log(NotMIT);
        //             break;
        //     }

        // }

                const sections = [ '#', 'repoName', 'githubName', '## Description', '## Installation', '## Usage', '## Credits', '## Features', '## Contributions', '## Testing', '### License'];
                const [ title, repoName, githubName, description, installation, usage, credits, features, contributions, testing, license] = sections; 



                const repoLink = 'https://github.com/${data.githubName}/${data.repoName}/';

let doc = `
${title} ${data.docTitle}
[[deployed application]](https://${data.githubName}github.io/${data.repoName}/)  [[repo]](https://github.com/${data.githubName}/${data.repoName}/)

## Table of Contents
[description](#description)

 [installation](#installation)

[usage](#usage)

[credits](#credits)

[features](#features)

[contributions](#contributions)

[testing](#testing)

[license](#license)


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
${data.contribute}

${testing}
${data.test}

${license}
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)



`;

                   const filename = 'README.md'
                fs.writeFile(filename, doc, (err) =>
                    err ? console.log(err) : console.log('Success!')
                );



    });



