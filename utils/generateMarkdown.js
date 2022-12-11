// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== 'None') {
    return `[![License](https://img.shields.io/badge/License-${license}-yellow.svg)]`
  } else {
    return ''; 
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'None') {
    return `- [License](#license)`
  } else {
    return ''; 
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
 if (license !== 'None') {
  return `## License
  
  This project uses the ${license} license.`; 
 } else {
  return ''; 
 };
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.project} ${renderLicenseBadge(data.license)}
  
  ## Description
  ${data.description}
  
  ## Table of Contents
   - [Installation](#installation)
   - [Usage](#usage)
   - [Contribution](#contribution)
   - [Testing](#test)
   ${renderLicenseLink(data.license)}
   - [Questions](#questions)

  ## Installation
  To install dependencies and run this application, please pass the following code in the command line of the application:

  ~~~
  ${data.installation}
  ~~~

  ## Usage
  ${data.usage}

  ## Contribution
  ${data.contribution}

  ## Testing
  To test, please pass the following code in the command line of the application:

  ~~~
  ${data.test}
  ~~~

  ${renderLicenseSection(data.license)}

  ## Questions
  If you have any questions, please visit my GitHub or email me:
  - GitHub profile: https://github.com/${data.github}
  - Email: ${data.email}
  `
}

module.exports = generateMarkdown;
