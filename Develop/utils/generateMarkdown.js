// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const licenseChoices = {
   ISC: {
    links: '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)'
   },
   MIT: {
     links: '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
   },
    Apache: {
      links: '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
   },
   BSD: {
    links: '[![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)'
 },
 GNU: {
  links: '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'
},
 Mozilla: {
      links: '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)'
   },
   None: {
    links: ''
 },

};

// function renderLicenseBadge(license) {}


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseSelection(license) {
  return licenseChoices[license].links;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  const section =`${renderLicenseSelection(license)}`;
  return section;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return ` 
  # ${data.title}

  ## Description
  ${data.description}

  ## Table of Contents
  
  * [Installation](#installation)

  * [Tests](#tests)

  * [Usage](#usage)

  * [How to Contribute](#contribution)

  * [Questions](#questions)

  * [GitHub](#github)

  ## Installation

  You will need the following dependancies:
  ${data.installation}

  ## Tests
  ${data.tests}
  
  ## Usage
  ${data.usage}

  ## Contributing
  Please follow the following link to contribute to this project:
  ${data.contributing}

  ## Questions
  If you have any questions please e-mail me below:
  ${data.questions}

  ## GitHub
  ${data.github}

  ## License
  ${renderLicenseSection(data.license)}
  `;
}

module.exports = generateMarkdown;
