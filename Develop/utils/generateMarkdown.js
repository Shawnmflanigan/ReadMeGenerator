// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title},

  ## Description
  ${data.description}

  ## Table of Contents

  * [Installation](#installation)

  * [Tests](#tests)

  * [Usage](#usage)

  * [How to Contribute](#contribution)

  * [Questions](#questions)

  * [GitHub](#github)

  ### Installation

  You will need the following dependancies:

  ${data.installation}

  ### Tests

  ${data.tests}
  
  ### Usage

  ${data.usage}

  ### Contributing

  Please follow the following link to contribute to this project:

  ${data.contributing}

  ### Questions

  If you have any questions please e-mail me below:

  ${data.questions}

  ### GitHub

  ${data.github}
  `;
}

module.exports = generateMarkdown;
